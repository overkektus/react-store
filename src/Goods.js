import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { List } from 'antd'
import Good from './Good'

const { Item: ListItem } = List

class Goods extends Component {
  config = { column: 3 }
  render() {
    const { data } = this.props
    return(
      <Fragment>
        {data && (
          <List
            dataSource={Object.values(data)}
            grid={this.config}
            renderItem={({id, title, description}) => (
              <ListItem key={id}>
                <Good key={id} {...{id, title, description}}/>
              </ListItem>
            )}
          />
        )}
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.goods.data
  }
}

export default connect(mapStateToProps)(Goods);
