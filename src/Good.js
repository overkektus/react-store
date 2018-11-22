import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { Card, Button, Modal } from 'antd'

const Meta = Card.Meta

class Good extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }

  coverStyle = { width: 240 }

  imgStyle = { maxHeight: 150, width: '100%', objectFit: 'cover' }

  buyNow = () => alert("Buy now!");

  showMoreInfo = () => {
    const { description, title } = this.props
    Modal.info({
      title: 'More info',
      content: (
        <div>
          <h2>{title}</h2>
          <div>{description}</div>
        </div>
      )
    });
  }

  render() {
    const { id, title, description } = this.props
    return(
      <Card
        {...{
          style: this.coverStyle,
          cover: (
            <img
              alt="title"
              style={this.imgStyle}
              {...{
                src: `/images/${id}.jpg`
              }}
            />
          ),
          actions: [
            <Button type="primary" onClick={this.buyNow}>Buy now</Button>,
            <Button onClick={this.showMoreInfo}>More Info</Button>
          ]
        }}
      >
        <Meta
          {...{
            title,
            description: _.truncate(description, { length: 60 })
          }}
        />
      </Card>
    )
  }
}

export default Good;
