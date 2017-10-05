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
        <Grid {...gamestate.grids[0]} />
        <Grid {...gamestate.grids[1]} />
        <Grid {...gamestate.grids[2]} />
      </GridRow>
      <GridRow>
        <Grid {...gamestate.grids[3]} />
        <Grid {...gamestate.grids[4]} />
        <Grid {...gamestate.grids[5]} />
      </GridRow>
      <GridRow>
        <Grid {...gamestate.grids[6]} />
        <Grid {...gamestate.grids[7]} />
        <Grid {...gamestate.grids[8]} />
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