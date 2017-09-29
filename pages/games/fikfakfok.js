// packages
import { Component } from 'react'

// components
import Layout from '../../components/layout'
import PlayArea from '../../components/play-area'
import MenuBar from '../../components/menu-bar'


export default class extends Component {
  state = {
    gamestate: {}
  }

  constructor(props) {
    super(props)
    
    this.set = this.set.bind(this)
  }

  async set(field) {

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
