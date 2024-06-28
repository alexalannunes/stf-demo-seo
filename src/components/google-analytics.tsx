import React from "react";
import Script from "next/script";

export const GoogleAnalytics = () => {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={"https://www.googletagmanager.com/gtag/js?id=G-L0HGXBWLYH"}
      />

      <Script id="" strategy="lazyOnload">
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-L0HGXBWLYH');
          `}
      </Script>
    </>
  );
};
