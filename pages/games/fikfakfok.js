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

    fields.push({
      set,
      grid,
      field: i,
      owner: null
    })
  }

  return fields
}

export default class extends Component {
  constructor(props) {
    super(props)
    this.set = this.set.bind(this)
    this.nextPlayer = this.nextPlayer.bind(this)
    this.checkStatus = this.checkStatus.bind(this)

    this.state = {
      gamestate: {
        grids: getDefaultGrids(this.set),
        turningPlayer: 1
      }
    }
  }

  nextPlayer() {
    if (this.state.gamestate.turningPlayer === 1) {
      return 2
    } else {
      return 1
    }
  }

  set(grid, field) {
    // set the selected field to the player whos turn is
    const newState = this.state.gamestate

    if (newState.grids[grid][field].owner !== null) {
      return
    }

    // set the owner for the field
    newState.grids[grid][field].owner = this.state.gamestate.turningPlayer
    
    // TODO
    // check fields for a horizontal, vertical or diagonal row
    this.checkStatus()

    // next players turn
    newState.turningPlayer = this.nextPlayer()

    this.setState({ gamestate: newState })
  }

  checkStatus() {

  }

  render() {
    return (
      <Layout title="fik fak fok">
        <MenuBar />
        <PlayArea
          gamestate={this.state.gamestate}
        />
      </Layout>
    )
  }
}