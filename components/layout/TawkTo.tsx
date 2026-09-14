'use client';

import Script from 'next/script';

interface TawkToProps {
  propertyId?: string;
  widgetId?: string;
}

export function TawkTo({ propertyId, widgetId }: TawkToProps) {
  const finalPropertyId =
    propertyId ||
    process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID ||
    '6a9f00d508f5a2345548d08d';
  const finalWidgetId =
    widgetId ||
    process.env.NEXT_PUBLIC_TAWK_WIDGET_ID ||
    '1k1uhmhk3';

  if (!finalPropertyId) {
    return null;
  }

  return (
    <Script
      id="tawk-to"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
          (function(){
            var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src = 'https://embed.tawk.to/${finalPropertyId}/${finalWidgetId}';
            s1.charset = 'UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1, s0);
          })();
        `,
      }}
    />
  );
}

export default TawkTo;
