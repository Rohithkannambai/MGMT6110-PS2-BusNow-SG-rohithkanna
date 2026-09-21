import React, {useEffect} from 'react';

declare global {
  interface Window {
    disqus_config?: () => void;
    DISQUS?: {
      reset: (options: { reload: boolean; config?: () => void }) => void;
    };
  }
}

export const DisqusComments: React.FC = () => {
  useEffect(() => {
    const PAGE_URL = 'https://busnow-sg-rohithkanna.vercel.app';
    const PAGE_IDENTIFIER = 'home';
    const SHORTNAME = 'busnow-sg-rohithkanna';

    window.disqus_config = function () {
      this.page.url = PAGE_URL;
      this.page.identifier = PAGE_IDENTIFIER;
    };

    const SCRIPT_ID = 'disqus-embed-script';
    const existingScript = document.getElementById(SCRIPT_ID);

    if (!existingScript) {
      const script = document.createElement('script');
      script.id = SCRIPT_ID;
      script.src = `https://${SHORTNAME}.disqus.com/embed.js`;
      script.setAttribute('data-timestamp', String(+new Date()));
      script.async = true;
      (document.head || document.body).appendChild(script);
    } else if (window.DISQUS) {
      // If already loaded, reset to target thread without reloading another script
      window.DISQUS.reset({
        reload: true,
        config: window.disqus_config,
      });
    }
  }, []);

  return (
    <section
      id="feedback-section"
      className="w-full mt-7 pt-4 border-t border-[#E2E8F0]"
      aria-labelledby="feedback-heading"
    >
      <div className="mb-3">
        <h2
          id="feedback-heading"
          className="text-[12px] font-bold text-[#475569] tracking-wider uppercase font-mono"
        >
          Visitor Feedback
        </h2>
        <p className="text-[12.5px] text-[#64748B] mt-1 leading-snug">
          Let us know what worked for you and what did not.
        </p>
      </div>

      <div
        id="disqus_thread"
        className="w-full min-h-[120px] rounded-xl bg-white border border-[#E2E8F0] p-3 sm:p-4 shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
      />
    </section>
  );
};
