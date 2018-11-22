import React, { Component } from 'react'
import { dispatch } from './store'
import { readGoods } from './ducks/goods'
import Goods from './Goods'

class HomePage extends Component {
  componentDidMount() {
    dispatch(readGoods())
  }

  render() {
    return(
      <div>
        HomePage
        <Goods/>
      </div>
    )
  }
}

export default HomePage
