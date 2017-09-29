// packages
import Head from 'next/head'


export default ({ children, title="games" }) => (
  <main>
    <Head>
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

      main {
        
      }
    `}
    </style>
  </main>
)