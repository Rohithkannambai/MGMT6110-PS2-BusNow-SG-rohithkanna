import React from 'react';

export const Attribution: React.FC = () => {
  return (
    <footer className="w-full mt-7 pt-4 border-t border-[#E2E8F0] relative">
      {/* Subtle deep-red accent indicator line */}
      <div className="absolute top-0 left-0 w-8 h-[2px] bg-[#B91C1C]" aria-hidden="true" />

      <div className="bg-white/70 border border-[#E2E8F0]/80 rounded-xl p-3.5 space-y-2 text-xs text-[#64748B] leading-relaxed shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
        <div className="flex items-center gap-1.5 font-medium text-[#475569] text-[11px] uppercase tracking-wider font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B91C1C]" />
          <span>Data Source & Licence</span>
        </div>

        <p id="source-attribution" className="text-[11.5px] text-[#475569] leading-normal">
          Contains information from Bus Arrival accessed on 13 September 2026 from LTA DataMall, which is made available under the terms of the{' '}
          <a
            href="https://datamall.lta.gov.sg/content/datamall/en/SingaporeOpenDataLicence.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#B91C1C] underline hover:text-[#991B1B] transition-colors font-medium"
          >
            Singapore Open Data Licence version 1.0
          </a>
          .
        </p>

        <p className="text-[10.5px] text-[#94A3B8] border-t border-[#F1F5F9] pt-2 leading-normal">
          BUSNOW SG is an independent student utility. It is not an official SMU product and is not an official LTA product.
        </p>
      </div>
    </footer>
  );
};
