// packages
import { Component } from 'react'

// components
import Layout from '../../components/layout'
import PlayArea from '../../components/play-area'
import MenuBar from '../../components/menu-bar'
import TurnDisplay from '../../components/turn-display'
import IngameControls from '../../components/ingame-controls'
import Winner from '../../components/winner'
import RulesPage from '../../components/rules-page'
import GameLayout, {
  GameInfoLayout
} from '../../components/game-layout'


export default class extends Component {
  static async getInitialProps() {
    return { }
  }

  constructor(props) {
    super(props)
    this.toggleRulesPage = this.toggleRulesPage.bind(this)
    this.set = this.set.bind(this)
    this.nextPlayer = this.nextPlayer.bind(this)
    this.checkStatus = this.checkStatus.bind(this)
    this.resetGame = this.resetGame.bind(this)
    this.resetScores = this.resetScores.bind(this)
    this.getPrevScore = this.getPrevScore.bind(this)
    this.rematch = this.rematch.bind(this)
    this.addToHistory = this.addToHistory.bind(this)
    this.undo = this.undo.bind(this)
    this.getDefaultGameState = this.getDefaultGameState.bind(this)

    this.history = []

    this.state = {
      gamestate: this.getDefaultGameState(),
      wins: this.getPrevScore(),
      isRulesPageOpen: false
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
        owner: null,
        avail: true
      })
    }

    return {
      grids,
      turningPlayer: 1
    }
  }

  toggleRulesPage() {
    this.setState(prevState => ({
      isRulesPageOpen: !prevState.isRulesPageOpen
    }))
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
    state.winner = null

    state = this.checkStatus(state)

    // reset avail (all fields if last item in history)
    if (this.history.length === 0) {
      state.grids = state.grids.map((item) => {
        item.avail = true
        return item
      })
    } else {
      state.grids = state.grids.map((item) => {
        item.avail = false
        return item
      })

      state.grids[last.grid].avail = true
    }

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

    // set the next available grid and the others to false
    newState.grids = newState.grids.map((item) => {
      item.avail = false
      return item
    })

    // check fields for availability
    // has to be !== false, because owner could be 'none'
    if (newState.grids[field].owner !== false) {
      // make all fields available
      // if the next one has already an owner
      newState.grids = newState.grids.map((item) => {
        // check if grid has an owner or if all fields are set
        item.avail = !item.owner // no owner = avail
        return item
      })
    } else {
      // make next field available
      newState.grids[field].avail = true
    }

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

    const result = this.checkPatterns(newState.grids)
    if (result && result !== 'none') {
      newState.winner = result
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

    const allSet = () => {
      const allSet = fields.every(field => field.owner)
      return allSet ? 'none' : false
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
      areEqual(2, 4, 6) ||
      allSet()
    )
  }

  resetGame() {
    const gamestate = this.getDefaultGameState()
    this.setState({ gamestate })
    this.history = []
  }

  rematch(winner) {
    const { p1, p2 } = this.state.wins

    const wins = {
      p1: winner === 1 ? p1+1 : p1,
      p2: winner === 2 ? p2+1 : p2
    }

    this.setState({
      gamestate: this.getDefaultGameState(),
      wins
    })

    window.localStorage.setItem('rikracroe/local/scores', JSON.stringify(wins))
    this.history = []
  }

  resetScores() {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem('rikracroe/local/scores')
    }
    this.setState({ wins: { p1: 0, p2: 0 } })
  }

  getPrevScore() {
    if (typeof window !== "undefined") {
      const str = window.localStorage.getItem('rikracroe/local/scores')
      if (str !== null) {
        const wins = JSON.parse(str)
        return wins
      }
    }

    return { p1: 0, p2: 0 }
  }

  render() {
    const { gamestate: gs } = this.state
    const { turningPlayer, winner } = gs

    return (
      <Layout>
        <MenuBar
          toggleRulesPage={this.toggleRulesPage}
          isOpen={this.state.isRulesPageOpen}
        />
        <GameLayout>
        { winner ? 
          <Winner
            winner={winner}
            rematch={() => this.rematch(winner)}
            undo={this.undo}
          />
          : null
        }
        <PlayArea gamestate={gs} />
        <GameInfoLayout>
          <TurnDisplay
            wins={this.state.wins}
            turningPlayer={turningPlayer}
          />
          <IngameControls
            resetGame={this.resetGame}
            resetScores={this.resetScores}
            undo={this.undo}
          />
        </GameInfoLayout>
        </GameLayout>

        { /* Overlays */ }
        <RulesPage
          open={this.state.isRulesPageOpen} 
          toggleRulesPage={this.toggleRulesPage}
        />
      </Layout>
    )
  }
}