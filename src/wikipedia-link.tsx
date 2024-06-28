"use client";
export function WikipediaLink() {
  return (
    <a
      target="_blank"
      href="https://pt.wikipedia.org/wiki/Supremo_Tribunal_Federal"
      className="block text-sky-500 border-current font-semibold dark:text-sky-400 text-2xl"
      onClick={() => {
        (window as any).gtag("event", "goto_wikipedia", {
          event_category: "redirect",
          event_label: "goto_wikipedia",
          value: "click",
        });
      }}
    >
      Saiba mais na Wikipédia
    </a>
  );
}
