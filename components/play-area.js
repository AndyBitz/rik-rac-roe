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
        <Grid fields={gamestate.grids[0].fields} />
        <Grid fields={gamestate.grids[1].fields} />
        <Grid fields={gamestate.grids[2].fields} />
      </GridRow>
      <GridRow>
        <Grid fields={gamestate.grids[3].fields} />
        <Grid fields={gamestate.grids[4].fields} />
        <Grid fields={gamestate.grids[5].fields} />
      </GridRow>
      <GridRow>
        <Grid fields={gamestate.grids[6].fields} />
        <Grid fields={gamestate.grids[7].fields} />
        <Grid fields={gamestate.grids[8].fields} />
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