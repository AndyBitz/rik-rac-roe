// packages
import Link from 'next/link'

// components
import Layout from '../components/layout'
import { P, H, Center } from '../components/text'
import Button from '../components/button'


export default () => (
  <Layout>
    <H style={{ textAlign: 'center' }}>Fik-Fak-Foe</H>
    <P style={{ textAlign: 'center' }}>Tik Tak Toe for the really bored.</P>
    <Center>
      <Button>
        <Link href="/games/fikfakfoe"><a>play local</a></Link>
      </Button>
    </Center>
  </Layout>
)

