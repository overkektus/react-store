import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { dispatch } from './store'
import { readGoods } from './ducks/goods'
import { List, Button } from 'antd'
import Good from './Good'

const { Item: ListItem } = List

class Goods extends Component {
  config = { column: 3 }

  handleClick = () => {
    dispatch(readGoods({ isLoadMore: true }));
  }

  render() {
    const { items, isListOver } = this.props
    console.log(items)
    return(
      <Fragment>
        {items.length && (
          <List
            dataSource={items}
            grid={this.config}
            renderItem={({id, title, description}) => (
              <ListItem key={id}>
                <Good key={id} {...{id, title, description}}/>
              </ListItem>
            )}
          />
        )}
        <Button
          disabled={isListOver}
          onClick={this.handleClick}
        >
          Load More
        </Button>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.goods.items,
    isGameOver: state.goods.isGameOver
  }
}

export default connect(mapStateToProps)(Goods);
