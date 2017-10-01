// packages
import { Component } from 'react'

// components
import Layout from '../../components/layout'
import PlayArea from '../../components/play-area'
import MenuBar from '../../components/menu-bar'
import TurnDisplay from '../../components/turn-display'
import IngameControls from '../../components/ingame-controls'


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

const getDefaultGamestate = (setter) => ({
  grids: getDefaultGrids(setter),
  turningPlayer: 1
})

export default class extends Component {
  static async getInitialProps() {
    return {
      history: []
    }
  }

  constructor(props) {
    super(props)
    this.set = this.set.bind(this)
    this.nextPlayer = this.nextPlayer.bind(this)
    this.checkStatus = this.checkStatus.bind(this)
    this.resetGame = this.resetGame.bind(this)
    this.addToHistory = this.addToHistory.bind(this)
    this.undo = this.undo.bind(this)

    this.state = {
      gamestate: getDefaultGamestate(this.set)
    }
  }

  nextPlayer() {
    if (this.state.gamestate.turningPlayer === 1) {
      return 2
    } else {
      return 1
    }
  }

  addToHistory(grid, field) {
    this.props.history.push({ grid, field })
  }

  undo() {
    const last = this.props.history.pop()

    if (last === undefined) {
      return
    }

    const state = this.state.gamestate

    state.grids[last.grid][last.field].owner = null
    state.turningPlayer = this.nextPlayer() // next player is previous player

    this.setState({ gamestate: state })
  }

  set(grid, field) {
    // set the selected field to the player whos turn is
    const newState = this.state.gamestate

    if (newState.grids[grid][field].owner !== null) {
      return
    }

    // set the owner for the field
    newState.grids[grid][field].owner = this.state.gamestate.turningPlayer

    // add to history stack
    this.addToHistory(grid, field)
    
    // check fields for a horizontal, vertical or diagonal row
    this.checkStatus()

    // next players turn
    newState.turningPlayer = this.nextPlayer()

    this.setState({ gamestate: newState })
  }

  checkStatus() {
    // TODO
  }

  resetGame() {
    const gamestate = getDefaultGamestate(this.set)
    this.setState({ gamestate })
  }

  render() {
    const { gamestate } = this.state
    const { turningPlayer } = gamestate

    return (
      <Layout title="fik fak fok">
        <MenuBar />
        <PlayArea gamestate={gamestate} />
        <TurnDisplay turningPlayer={turningPlayer} />
        <IngameControls
          resetGame={this.resetGame}
          undo={this.undo}
        />
      </Layout>
    )
  }
}