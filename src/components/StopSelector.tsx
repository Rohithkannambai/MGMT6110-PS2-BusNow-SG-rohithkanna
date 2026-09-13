import React from 'react';
import {BUS_STOPS, type BusStop} from '../types';
import {Check} from 'lucide-react';

interface StopSelectorProps {
  selectedStop: BusStop | null;
  onSelectStop: (stop: BusStop) => void;
  isLoading: boolean;
}

export const StopSelector: React.FC<StopSelectorProps> = ({
  selectedStop,
  onSelectStop,
  isLoading,
}) => {
  return (
    <section className="w-full" aria-labelledby="stops-heading">
      <div className="flex items-center justify-between mb-2">
        <h2
          id="stops-heading"
          className="text-[12px] font-bold text-[#475569] tracking-wider uppercase"
        >
          Select Campus Stop
        </h2>
        <span className="text-[11px] text-[#94A3B8] font-mono">5 stops</span>
      </div>

      <div className="grid grid-cols-1 gap-2" role="radiogroup" aria-label="Bus stops">
        {BUS_STOPS.map((stop) => {
          const isSelected = selectedStop?.code === stop.code;

          return (
            <button
              key={stop.code}
              id={`stop-btn-${stop.code}`}
              type="button"
              role="radio"
              aria-checked={isSelected}
              disabled={isLoading && isSelected}
              onClick={() => onSelectStop(stop)}
              className={`w-full min-h-[50px] text-left px-3.5 py-2.5 rounded-xl transition-all duration-150 flex items-center justify-between cursor-pointer border select-none ${
                isSelected
                  ? 'bg-rose-50/75 border-[#B91C1C] text-[#1E293B] shadow-xs ring-1 ring-[#B91C1C]/25'
                  : 'bg-white border-[#E2E8F0] text-[#1E293B] hover:border-[#CBD5E1] hover:bg-stone-50/50 active:bg-stone-100 shadow-[0_1px_2px_rgba(0,0,0,0.03)]'
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0 pr-2">
                {/* Numbered stop icon or checkmark when selected */}
                <span
                  className={`flex-shrink-0 w-6 h-6 rounded-full text-xs font-semibold flex items-center justify-center font-mono transition-colors ${
                    isSelected
                      ? 'bg-[#B91C1C] text-white shadow-xs'
                      : 'bg-[#F1F5F9] text-[#64748B] border border-[#E2E8F0]'
                  }`}
                >
                  {isSelected ? (
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  ) : (
                    stop.id
                  )}
                </span>
                <span
                  className={`font-medium text-[14px] truncate leading-tight ${
                    isSelected ? 'text-[#0F172A] font-semibold' : 'text-[#1E293B]'
                  }`}
                >
                  {stop.name}
                </span>
              </div>

              <div className="flex items-center flex-shrink-0">
                <span
                  className={`font-mono text-[11.5px] px-2 py-0.5 rounded-md tracking-wider font-medium transition-colors ${
                    isSelected
                      ? 'bg-rose-100/90 text-[#991B1B] border border-rose-200/90 font-semibold'
                      : 'bg-[#F8FAFC] text-[#64748B] border border-[#E2E8F0]'
                  }`}
                >
                  {stop.code}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};
