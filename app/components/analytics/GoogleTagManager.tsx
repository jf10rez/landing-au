import Script from "next/script";

/**
 * Google Tag Manager.
 * - El script se inyecta en el <head> vía next/script.
 * - El <noscript> debe ir justo después de abrir <body> (así se renderiza aquí).
 *
 * El ID del contenedor es público; se puede sobreescribir con NEXT_PUBLIC_GTM_ID.
 */
export function GoogleTagManager({ id }: { id: string }) {
  return (
    <>
      <Script id="gtm-init" strategy="beforeInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${id}');`}
      </Script>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${id}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
          title="Google Tag Manager"
        />
      </noscript>
    </>
  );
}
