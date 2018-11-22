import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'
import { Link } from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd'
import './App.css'

const { Header, Content, Footer } = Layout
const { Item: MenuItem } = Menu
const { Item: BreadcrumbItem } = Breadcrumb

class App extends Component {

  headerStyle = { margin: '0 auto', width: 800 }

  contentStyle = { margin: '0 auto', width: 800 }

  footerStyle = { textAlign: 'center' }

  render() {
    const { route: { routes } } = this.props
    return (
      <Layout className="layout">
        <Header style={this.headerStyle}>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal">
            <MenuItem>
              <Link to='/'>Home</Link>
            </MenuItem>
            <MenuItem>
              <Link to='/bastket'>Basket</Link>
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

export default App
