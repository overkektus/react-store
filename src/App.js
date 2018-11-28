import React, { Component } from 'react'
import { connect } from 'react-redux'
import { dispatch } from './store'
import { readBasket } from './ducks/basket'
import { renderRoutes } from 'react-router-config'
import { Link } from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Badge } from 'antd'
import './App.css'

const { Header, Content, Footer } = Layout
const { Item: MenuItem } = Menu
const { Item: BreadcrumbItem } = Breadcrumb

class App extends Component {
  headerStyle = { margin: '0 auto', width: 800 }

  contentStyle = { margin: '0 auto', width: 800 }

  footerStyle = { textAlign: 'center' }

  componentDidMount() {
    dispatch(readBasket())
  }

  render() {
    const {
      route: { routes },
      basketCount,
    } = this.props
    return (
      <Layout className="layout">
        <Header style={this.headerStyle}>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal">
            <MenuItem>
              <Link to="/">Home</Link>
            </MenuItem>
            <MenuItem>
              <Badge count={basketCount}>
                <Link to="/basket">Basket</Link>
              </Badge>
            </MenuItem>
          </Menu>
        </Header>
        <Content style={this.contentStyle}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>List</BreadcrumbItem>
            <BreadcrumbItem>App</BreadcrumbItem>
          </Breadcrumb>
          {renderRoutes(routes)}
        </Content>
        <Footer style={this.footerStyle}>
          Best store &copy; {new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    )
  }
}

const mapStateToProps = (state) => ({
  basketCount: state.basket.items.length,
})

export default connect(mapStateToProps)(App)
