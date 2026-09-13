import React, {useState, useRef, useCallback} from 'react';
import {type BusStop, type FetchState, type BusApiResponse} from './types';
import {StopSelector} from './components/StopSelector';
import {ArrivalResults} from './components/ArrivalResults';
import {Attribution} from './components/Attribution';
import {Bus} from 'lucide-react';

export default function App() {
  const [selectedStop, setSelectedStop] = useState<BusStop | null>(null);
  const [fetchState, setFetchState] = useState<FetchState>({status: 'idle'});
  const activeControllerRef = useRef<AbortController | null>(null);

  const fetchArrivals = useCallback(async (stop: BusStop) => {
    // Abort previous in-flight request if still running
    if (activeControllerRef.current) {
      activeControllerRef.current.abort();
    }

    const controller = new AbortController();
    activeControllerRef.current = controller;

    setFetchState({status: 'loading'});

    try {
      // Browser calls only /api/bus?stop=[SELECTED_STOP_CODE]
      const response = await fetch(`/api/bus?stop=${encodeURIComponent(stop.code)}`, {
        signal: controller.signal,
        headers: {
          Accept: 'application/json',
        },
      });

      // Attempt to parse JSON response
      let body: any = null;
      try {
        body = await response.json();
      } catch {
        // Response was not JSON
      }

      if (response.ok) {
        const data = body as BusApiResponse;
        if (!data || !Array.isArray(data.services) || data.services.length === 0) {
          // EMPTY state: Successful LTA response with zero valid upcoming services or arrivals
          setFetchState({
            status: 'empty',
            fetchedAt: data?.fetchedAt,
          });
        } else {
          // NORMAL SUCCESS STATE
          setFetchState({
            status: 'success',
            data,
          });
        }
      } else {
        // Non-2xx status handling
        const errorType = body?.errorType;

        if (response.status === 503 && errorType === 'configuration') {
          setFetchState({
            status: 'configuration',
            message: body?.error || 'LTA_ACCOUNT_KEY is not set. Add it in Vercel, then redeploy.',
          });
        } else if (response.status === 502 || errorType === 'unreachable') {
          // PROVIDER UNREACHABLE state
          setFetchState({status: 'unreachable'});
        } else {
          // PROVIDER REFUSED state (LTA declined or non-2xx status)
          setFetchState({status: 'refused'});
        }
      }
    } catch (err: any) {
      if (err.name === 'AbortError') {
        // Ignore aborted requests from stop switching
        return;
      }
      // Network failure between client and server / LTA
      setFetchState({status: 'unreachable'});
    }
  }, []);

  const handleSelectStop = (stop: BusStop) => {
    setSelectedStop(stop);
    fetchArrivals(stop);
  };

  const handleRefresh = () => {
    if (selectedStop) {
      fetchArrivals(selectedStop);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1D20] flex flex-col justify-between py-6 px-4 sm:px-6 antialiased selection:bg-rose-100 selection:text-rose-900">
      <main className="w-full max-w-[420px] mx-auto flex-1 flex flex-col">
        {/* Compact Fictional Header with BUSNOW SG Mark */}
        <header className="mb-4 pt-1">
          <div className="flex items-center gap-2.5">
            {/* Fictional BUSNOW SG Bus Symbol in deep crimson container */}
            <div
              className="w-8 h-8 rounded-lg bg-[#B91C1C] flex items-center justify-center text-white shadow-[0_1px_3px_rgba(185,28,28,0.35)] flex-shrink-0"
              aria-hidden="true"
            >
              <Bus className="w-4.5 h-4.5 stroke-[2.2]" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <h1
                  id="app-title"
                  className="text-[20px] font-black tracking-tight text-[#18181B] font-mono leading-none"
                >
                  BUSNOW <span className="text-[#B91C1C]">SG</span>
                </h1>
              </div>
            </div>
          </div>

          <p
            id="app-subtitle"
            className="text-[13px] text-[#4A5568] font-normal leading-snug mt-2 pl-0.5"
          >
            Live bus arrivals around the Bras Basah campus area.
          </p>

          {/* Restrained Transit Route-Line Decorative Motif */}
          <div className="mt-3.5 flex items-center gap-1.5 px-0.5" aria-hidden="true">
            <span className="w-2 h-2 rounded-full border-[1.5px] border-[#B91C1C] bg-[#B91C1C]" />
            <span className="h-[2px] w-7 bg-gradient-to-r from-[#B91C1C] via-[#DC2626] to-[#E2E8F0] rounded-full" />
            <span className="w-1.5 h-1.5 rounded-full border border-[#CBD5E1] bg-white" />
            <span className="h-[1px] flex-1 bg-[#E2E8F0]" />
            <span className="w-1.5 h-1.5 rounded-full border border-[#CBD5E1] bg-white" />
            <span className="h-[1px] w-6 bg-[#E2E8F0]" />
            <span className="w-2 h-2 rounded-full border-[1.5px] border-[#CBD5E1] bg-white" />
          </div>
        </header>

        {/* 1. Stop Selector: Exactly 5 selectable public bus stops */}
        <StopSelector
          selectedStop={selectedStop}
          onSelectStop={handleSelectStop}
          isLoading={fetchState.status === 'loading'}
        />

        {/* 2. Results / Four Service States */}
        <ArrivalResults
          selectedStop={selectedStop}
          fetchState={fetchState}
          onRefresh={handleRefresh}
        />

        {/* 3. Source Attribution & Disclaimer */}
        <Attribution />
      </main>
    </div>
  );
}
