// packages
import { Component } from 'react'
import Link from 'next/link'

// components
import Icon from './icon'

// svg
import ArrowLeft from './svg/keyboard_arrow_left.svg'
import InfoOutline from './svg/info_outline.svg'


export default ({ toggleRulesPage }) => (
  <nav>
    <div>
      <Link href="/">
        <a>
          <Icon children={<ArrowLeft />} />
          Back
        </a>
      </Link>
    </div>
    <div style={{fontFamily: 'monospace'}}>Fik-Fak-Foe</div>
    <div>
      <a onClick={toggleRulesPage}>
        <Icon children={<InfoOutline />} />
        &nbsp;Rules
      </a>
    </div>
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

      a {
        user-select: none;
        cursor: pointer;
      }

      div {
        flex: 0 0 33.333333%
      }

      div:first-child {
        font-size: .8em;
      }
      div:nth-child(2) {
        text-align: center;
      }
      div:last-child {
        text-align: right;
        font-size: .8em;
      }
    `}
    </style>
  </nav>
)
