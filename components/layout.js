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
      { /* TODO: social media tags */ }
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