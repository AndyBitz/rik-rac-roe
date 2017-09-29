// packages
import { Component } from 'react'

// components
import Layout from '../../components/layout'
import PlayArea from '../../components/play-area'
import MenuBar from '../../components/menu-bar'


const getDefaultGrids = (setter) => {
  const grids = []

  for (let i=0; i < 9; i++) {
    grids.push(getDefaultFields(i, setter))
  }

  return grids
}

const getDefaultFields = (grid, setter) => {
  const fields = []

  for (let i=0; i < 9; i++) {
    const set = () => {
      setter(grid, i)
    }

    fields.push({ set, grid, field: i })
  }

  return fields
}

export default class extends Component {
  constructor(props) {
    super(props)
    this.set = this.set.bind(this)

    this.state = {
      gamestate: {
        grids: getDefaultGrids(this.set),
        turningPlayer: 0
      }
    }
  }

  async set(grid, field) {
    // set the selected field to the player whos turn is
  }

  render() {
    return (
      <Layout title="fik fak fok">
        <MenuBar />
        <PlayArea
          gamestate={this.state.gamestate}
          setCallback={this.set}
        />
      </Layout>
    )
  }
}