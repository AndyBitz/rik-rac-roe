// packages
import { Component } from 'react'

// components
import Grid from './grid'


const GridRow = ({ children }) => (
  <div>
    { children }

    <style jsx>
    {`
      div {
        display: flex;
      }
    `}
    </style>
  </div>
)

export default ({ gamestate }) => (
  <section className="game-area">
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
        width: 100%;
        display: flex;
        justify-content: center;
      }

      div {
        padding: 15px;
      }

      @media (min-width: 425px) {
        section {
          width: 90%;
        }
      }

      @media (min-width: 768px) {
        section {
          max-width: 800px;
        }
      }
    `}
    </style>    
  </section>
)