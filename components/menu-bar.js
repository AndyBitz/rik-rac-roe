// packages
import Link from 'next/link'

// components
import Icon from './icon'

// svg
import ArrowLeft from './svg/keyboard_arrow_left.svg'


export default () => (
  <nav>
    <div>
      <Link href="/">
        <a>
          <Icon>
            <ArrowLeft />
          </Icon>
          Back
        </a>
      </Link>
    </div>
    <div>Fik-Fak-Foe</div>
    <div></div>
    <style jsx>
    {`
      nav {
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #0e0e0e;
        color: white;
        font-family: sans-serif;
        z-index: 100;
        position: relative;
        box-shadow: 0px 1px 11px 0px rgba(0,0,0,.82);
        padding: 0 15px;
      }

      div {
        flex: 0 0 33.333333%
      }

      div:first-child {
        font-size: .8em;
      }
      div:last-child {
        font-size: .8em;
      }
    `}
    </style>
  </nav>
)