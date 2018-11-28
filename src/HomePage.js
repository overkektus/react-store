import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { dispatch } from './store'
import { readCategories } from './ducks/categories'
import { readGoods } from './ducks/goods'
import { Select } from 'antd'
import Goods from './Goods'

const { Option } = Select

class HomePage extends Component {
  state = {
    selectedCategoryIds: ['1', '2', '3'],
  }

  selectStyle = {
    width: '100%',
  }

  handleChange = (selectedCategoryIds) => {
    this.setState({ selectedCategoryIds })
  }

  componentDidMount() {
    dispatch(readCategories())
    // .then((categories) =>
    // this.setState({ selectedCategoryIds: Object.keys(_.keyBy(categories, 'id')) }),
    // )
    dispatch(readGoods())
  }

  render() {
    const { categories } = this.props
    const { selectedCategoryIds } = this.state
    return (
      <div>
        <h1>HomePage</h1>
        {categories.length > 0 && (
          <Select
            {...{
              mode: 'multiple',
              style: this.selectStyle,
              placeholder: 'Categories',
              defaultValue: selectedCategoryIds,
              onChange: this.handleChange,
            }}
          >
            {categories.map(({ id, title }) => (
              <Option key={id}>{title}</Option>
            ))}
          </Select>
        )}
        <Goods selectedCategoryIds={selectedCategoryIds} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories.items,
})

export default connect(mapStateToProps)(HomePage)
