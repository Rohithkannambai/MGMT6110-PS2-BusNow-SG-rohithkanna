import React from 'react';
import {type BusStop, type FetchState} from '../types';
import {formatArrival, formatFetchedTime} from '../utils/time';
import {RotateCw} from 'lucide-react';

interface ArrivalResultsProps {
  selectedStop: BusStop | null;
  fetchState: FetchState;
  onRefresh: () => void;
}

export const ArrivalResults: React.FC<ArrivalResultsProps> = ({
  selectedStop,
  fetchState,
  onRefresh,
}) => {
  if (!selectedStop) {
    return (
      <div className="w-full mt-5 py-6 px-4 text-center rounded-xl bg-white border border-[#E2E8F0] text-[#64748B] text-sm shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
        Select a bus stop above to view live arrival times.
      </div>
    );
  }

  return (
    <section
      className="w-full mt-5"
      aria-labelledby="arrivals-heading"
      aria-live="polite"
    >
      {/* Selected stop header card */}
      <div className="bg-white rounded-t-xl border border-[#E2E8F0] px-4 py-3 flex items-center justify-between border-b-[#F1F5F9] shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
        <div className="min-w-0 pr-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#B91C1C]" aria-hidden="true" />
            <h3
              id="arrivals-heading"
              className="text-[15px] font-bold text-[#0F172A] truncate leading-snug"
            >
              {selectedStop.name}
            </h3>
          </div>
          <div className="flex items-center gap-2 mt-0.5 pl-3.5">
            <span className="text-[11.5px] font-mono text-[#64748B] font-medium tracking-wide">
              Stop {selectedStop.code}
            </span>
            {fetchState.status === 'success' && (
              <>
                <span className="text-stone-300 text-xs">·</span>
                <span className="text-[11.5px] text-[#64748B]">
                  Fetched at {formatFetchedTime(fetchState.data.fetchedAt)}
                </span>
              </>
            )}
          </div>
        </div>

        <button
          id="refresh-arrivals-btn"
          type="button"
          onClick={onRefresh}
          disabled={fetchState.status === 'loading'}
          title="Refresh arrival times"
          className="flex-shrink-0 p-2 text-[#64748B] hover:text-[#B91C1C] hover:bg-rose-50 rounded-lg transition-colors cursor-pointer disabled:opacity-35 disabled:cursor-not-allowed"
          aria-label="Refresh arrival times"
        >
          <RotateCw
            className={`w-4 h-4 ${
              fetchState.status === 'loading' ? 'animate-spin text-[#B91C1C]' : ''
            }`}
          />
        </button>
      </div>

      {/* Content based on service state */}
      <div className="bg-white rounded-b-xl border-x border-b border-[#E2E8F0] p-4 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
        {/* State 1: LOADING */}
        {fetchState.status === 'loading' && (
          <div
            id="state-loading"
            className="py-10 px-4 text-center flex flex-col items-center justify-center gap-3"
          >
            <div className="w-5 h-5 border-2 border-rose-200 border-t-[#B91C1C] rounded-full animate-spin" />
            <p className="text-[13.5px] font-medium text-[#334155]">
              Checking LTA for the latest arrivals…
            </p>
          </div>
        )}

        {/* State 2: EMPTY */}
        {fetchState.status === 'empty' && (
          <div
            id="state-empty"
            className="py-7 px-4 text-center text-[#475569] bg-[#F8FAFC] rounded-lg border border-[#E2E8F0]"
          >
            <p className="text-[13.5px] leading-relaxed">
              No upcoming buses are currently reported for this stop. Choose another nearby stop or check again later.
            </p>
          </div>
        )}

        {/* State 3: PROVIDER REFUSED - Restrained Amber */}
        {fetchState.status === 'refused' && (
          <div
            id="state-refused"
            className="py-6 px-4 text-center text-[#854D0E] bg-[#FEFCE8] rounded-lg border border-[#FEF08A]"
          >
            <p className="text-[13.5px] font-medium leading-relaxed">
              LTA declined the live-data request. Please try again shortly.
            </p>
          </div>
        )}

        {/* State 4: PROVIDER UNREACHABLE - Restrained Red */}
        {fetchState.status === 'unreachable' && (
          <div
            id="state-unreachable"
            className="py-6 px-4 text-center text-[#991B1B] bg-[#FEF2F2] rounded-lg border border-[#FECACA]"
          >
            <p className="text-[13.5px] font-medium leading-relaxed">
              We can't reach LTA right now. Please try again in a few minutes.
            </p>
          </div>
        )}

        {/* Configuration notice if LTA_ACCOUNT_KEY missing */}
        {fetchState.status === 'configuration' && (
          <div
            id="state-configuration"
            className="py-6 px-4 text-center text-[#334155] bg-stone-50 rounded-lg border border-[#E2E8F0]"
          >
            <p className="text-[13.5px] font-medium leading-relaxed">
              {fetchState.message || 'LTA_ACCOUNT_KEY is not set. Add it in Vercel, then redeploy.'}
            </p>
          </div>
        )}

        {/* Normal Success State: Bus Services List */}
        {fetchState.status === 'success' && (
          <div className="divide-y divide-[#F1F5F9]" id="services-list">
            {fetchState.data.services.map((svc) => (
              <div
                key={svc.service}
                id={`service-row-${svc.service}`}
                className="py-3.5 first:pt-0.5 last:pb-0.5 flex items-center justify-between gap-3"
              >
                {/* Prominent Service Number */}
                <div className="flex-shrink-0">
                  <span className="text-[21px] font-black font-mono tracking-tight text-[#0F172A] px-2.5 py-1 bg-[#F8FAFC] rounded-lg inline-block border border-[#CBD5E1]/80 min-w-[58px] text-center shadow-2xs">
                    {svc.service}
                  </span>
                </div>

                {/* Arrival times: up to 3 valid relative times */}
                <div className="flex items-center gap-1.5 flex-wrap justify-end">
                  {svc.arrivals.map((arrivalIso, idx) => {
                    const relativeText = formatArrival(arrivalIso);
                    const isArriving = relativeText === 'Arriving';
                    const isFirst = idx === 0;

                    let badgeClass = '';
                    if (isArriving) {
                      // Restrained green treatment for "Arriving"
                      badgeClass = isFirst
                        ? 'bg-[#15803D] text-white font-bold shadow-xs'
                        : 'bg-[#DCFCE7] text-[#166534] border border-[#86EFAC] font-semibold';
                    } else if (isFirst) {
                      // First arrival is visually strongest (crimson transit accent)
                      badgeClass = 'bg-[#B91C1C] text-white font-bold shadow-xs';
                    } else {
                      // Second and third arrivals are quieter but readable
                      badgeClass = 'bg-[#F8FAFC] text-[#475569] border border-[#E2E8F0] font-medium';
                    }

                    return (
                      <span
                        key={idx}
                        id={`arrival-${svc.service}-${idx}`}
                        className={`text-[12px] px-2.5 py-1 rounded-md whitespace-nowrap transition-colors ${badgeClass}`}
                      >
                        {relativeText}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
