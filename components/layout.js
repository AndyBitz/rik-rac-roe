// packages
import Head from 'next/head'

// components
import Footer from './footer'


export default ({ children, title="Rik-Rac-Roe" }) => (
  <main>
    <Head>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <link rel="shortcut icon" href="/static/favicon.png" />

      <link rel="home" href="/" />

      <meta name="robots" content="index, follow" />
      <meta name="description" content="Tik Tak Toe for the really bored. Or the challange seekers." />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="Rik-Rac-Roe" />
      <meta property="og:url" content="https://rik-rac-roe.now.sh" />
      <meta property="og:image" content="/static/social-media.png" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@andybitz_" />
      
      <meta name="twitter:title" content="Rik-Rac-Roe" />
      <meta name="twitter:description" content="Tik Tak Toe for the really bored. Or the challange seekers." />
      <meta name="twitter:image" content="/static/social-media.png" />

      <meta name="twitter:creator" content="@andybitz_" />
      <meta name="twitter:url" content="https://rik-rac-roe.now.sh" />

      <script dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5WKT69Z');`}} />
      <noscript dangerouslySetInnerHTML={{__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5WKT69Z"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`}} />

      <title>{ title }</title>
    </Head>
    { children }
    <Footer />
    <style jsx global>
    {`
      ::selection {
        background-color: white;
        color: black;
      }

      html, body {
        margin: 0;
        padding: 0;
        font-size: 18px;
        font-family: monospace;
        background-color: #2c2c2c;
        color: white;
      }

      img {
        vertical-align: middle;
      }

      a {
        display: inline-flex;
        align-items: center;
        text-decoration: none;
        color: white;
      }

      main {
        
      }
    `}
    </style>
  </main>
)