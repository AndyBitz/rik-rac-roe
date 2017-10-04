// packages
import Head from 'next/head'


export default ({ children, title="games" }) => (
  <main>
    <Head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      { /* TODO: social media tags */ }
      <title>{ title }</title>
    </Head>
    { children }
    <style jsx global>
    {`
      html, body {
        margin: 0;
        padding: 0;
        font-size: 18px;
        font-family: monospace;
        background-color: #2c2c2c;
      }

      img {
        vertical-align: middle;
      }

      a {
        color: white;
      }

      main {
        
      }
    `}
    </style>
  </main>
)