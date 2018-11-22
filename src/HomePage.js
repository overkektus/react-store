import React, { Component } from 'react'
import { readGoods } from './ducks/goods'
import { dispatch } from './store'
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
