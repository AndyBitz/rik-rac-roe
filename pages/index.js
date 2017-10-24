// packages
import Link from 'next/link'

// components
import Layout from '../components/layout'
import { P, H, Center } from '../components/text'
import Button from '../components/button'


export default () => (
  <Layout>
    <H style={{ textAlign: 'center' }}>Rik-Rac-Roe</H>
    <P style={{ textAlign: 'center' }}>
      Tik Tak Toe for the really bored.<br />
      <span style={{ fontSize: '.9em' }}>Or the challange seekers.</span>
    </P>
    <Center>
      <Link href="/games/rikracroe">
        <a>
          <Button primary={true}>
            Play Local
          </Button>
        </a>
      </Link>
    </Center>
    <div style={{ marginTop: '2em' }} />
    <style jsx global>
    {`
      main {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    `}
    </style>
  </Layout>
)

