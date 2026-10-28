import Footer from '@/components/Footer';
import './globals.css';
import Navbar from '@/components/Navbar';
import { Poppins } from 'next/font/google';
import Script from 'next/script'; 

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata = {
  title: 'Dépannage Pare-Brise ',
  description: 'Dépannage Pare-Brise ',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
  {/* Google Tag Manager */}
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N8GG45T9');</script>
{/* End Google Tag Manager */}
{/* Google Ads tag */}
<Script
  src="https://www.googletagmanager.com/gtag/js?id=AW-18441898443"
  strategy="afterInteractive"
/>

<Script id="google-ads-tag" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', 'AW-18441898443');

    gtag('config', 'AW-18441898443/-XMCLG7_gEMuT5NIE', {
      phone_conversion_number: '0751280481'
    });
  `}
</Script>

  
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

      </head>
      <body className={poppins.className}>
            
           <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-N8GG45T9"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>

        <Script
          src="/components/AppointmentFormComponent.js"
          strategy="afterInteractive"
        />

        <Navbar />

        <appointment-form-component></appointment-form-component>

        <main>{children}</main>
        <Footer />
      </body>
            
      
    </html>
  );
}
