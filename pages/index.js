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
    <FrontVideo />
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

const FrontVideo = () => (
  <section>
    <video autoPlay loop>
      <source src="/static/front.mp4" type="video/mp4" />
    </video>
    <style jsx>
    {`
      section {
        margin: auto;
        max-width: 400px;
      }

      video {
        max-width: 100%;
        transform: scaleY(0);
        animation: show-video 300ms 400ms forwards ease-in-out;
      }

      @keyframes show-video {
        from {
          transform: scaleY(0);
        }
        to {
          transform: scaleY(1);
        }
      }
    `}
    </style>
  </section>
)