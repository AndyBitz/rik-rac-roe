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

export default () => (
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
        display: flex;
        justify-content: center;
      }
    `}
    </style>    
  </section>
)