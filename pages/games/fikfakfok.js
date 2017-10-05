// packages
import { Component } from 'react'

// components
import Layout from '../../components/layout'
import PlayArea from '../../components/play-area'
import MenuBar from '../../components/menu-bar'
import TurnDisplay from '../../components/turn-display'
import IngameControls from '../../components/ingame-controls'


export default class extends Component {
  static async getInitialProps() {
    return { }
  }

  constructor(props) {
    super(props)
    this.set = this.set.bind(this)
    this.nextPlayer = this.nextPlayer.bind(this)
    this.checkStatus = this.checkStatus.bind(this)
    this.resetGame = this.resetGame.bind(this)
    this.addToHistory = this.addToHistory.bind(this)
    this.undo = this.undo.bind(this)
    this.getDefaultGameState = this.getDefaultGameState.bind(this)
    this.setGridOwner = this.setGridOwner.bind(this)

    this.history = []

    this.state = {
      gamestate: this.getDefaultGameState()
    }
  }

  getDefaultGameState() {
    const grids = []

    const getFields = (grid) => {
      const fields = []

      for (let field=0; field < 9; field++) {
        fields.push({
          grid,
          field,
          set: () => this.set(grid, field),
          owner: null
        })
      }

      return fields
    }

    for (let i=0; i < 9; i++) {
      grids.push({
        grid: i,
        fields: getFields(i),
        owner: null
      })
    }

    return {
      grids,
      turningPlayer: 1
    }
  }

  nextPlayer() {
    return (this.state.gamestate.turningPlayer === 1)
      ? 2
      : 1
  }

  addToHistory(grid, field) {
    this.history.push({ grid, field })
  }

  // !sets state
  undo() {
    const last = this.history.pop()

    if (last === undefined) {
      return
    }

    let state = this.state.gamestate

    state.grids[last.grid].fields[last.field].owner = null
    state.turningPlayer = this.nextPlayer() // next player is previous player

    state = this.checkStatus(state)

    this.setState({ gamestate: state })
  }

  // !sets state
  set(grid, field) {
    // set the selected field to the player whos turn is
    let newState = this.state.gamestate

    if (newState.grids[grid].fields[field].owner !== null) {
      return
    }

    // set the owner for the field
    newState.grids[grid].fields[field].owner = this.state.gamestate.turningPlayer

    // add to history stack
    this.addToHistory(grid, field)
    
    // check fields for a horizontal, vertical or diagonal row
    newState = this.checkStatus(newState)

    // next players turn
    newState.turningPlayer = this.nextPlayer()

    this.setState({ gamestate: newState })
  }


  /**
   * check status of a new gamestate and
   * return updated gamestate
   */
  checkStatus(newState) {
    const { grids } = newState

    for (let gi in grids) {
      const { fields } = grids[gi]

      const owner = this.checkPatterns(fields)
      if (owner !== null) {
        newState.grids[gi].owner = owner
      }
    }

    return newState
  }


  /**
   * check owners of array and
   * check if the match the pattern
   * return owner or null
   */
  checkPatterns(fields) {
    const own = []    

    for (let fi in fields) {
      const field = fields[fi]
      own.push(field.owner)
    }

    const areEqual = (ind1, ind2, ind3) => {
      const v1 = own[ind1]
      const v2 = own[ind2]
      const v3 = own[ind3]

      return (v1 === v1 && v1 === v2 && v1 === v3 && v1 !== null) ? v1 : false
    }

    // Horizontal - 0 1 2 | 3 4 5 | 6 7 8
    // Vertical - 0 3 6 | 1 4 7 | 2 5 8
    // Diagonal - 0 4 8 | 2 4 6

    return (
      areEqual(0, 1, 2) ||
      areEqual(3, 4, 5) ||
      areEqual(6, 7, 8) ||
      areEqual(0, 3, 6) ||
      areEqual(1, 4, 7) ||
      areEqual(2, 5, 8) ||
      areEqual(0, 4, 8) ||
      areEqual(2, 4, 6)
    )
  }

  resetGame() {
    const gamestate = this.getDefaultGameState()
    this.setState({ gamestate })
    this.history = []
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