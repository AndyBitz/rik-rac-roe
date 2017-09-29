// packages
import { Component } from 'react'

// components
import Grid from './grid'


const GridRow = ({ children }) => (
  <div>
    { children }

    <style jsx>
    {`
      display: flex;
    `}
    </style>
  </div>
)

export default ({ gamestate }) => (
  <section>
    <div>
      <GridRow>
        <Grid />
        <Grid />
        <Grid />
      </GridRow>
      <GridRow>
        <Grid />
        <Grid />
        <Grid />
      </GridRow>
      <GridRow>
        <Grid />
        <Grid />
        <Grid />
      </GridRow>
    </div>

    <style jsx>
    {`
      section {
        margin: auto;
        width: 100vw;
        display: flex;
        justify-content: center;
      }

      @media (orientation: landscape) {
        section {
          width: 100vh;
        }
      }
    `}
    </style>    
  </section>
)