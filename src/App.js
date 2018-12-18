import React, { Component } from 'react'


import { HashRouter,Switch,Route} from 'react-router-dom'
import './assets/styles/app.less'

//引入页面
import Login from './pages/login/Login'
import Nav from './pages/nav/Nav'
import Reg from './pages/reg/Reg'
import Error404 from './pages/Error404/Error404'
//引入状态
import store from './pages/store/store'
//数据容器
import { Provider } from 'react-redux'

export default class App extends Component {
  render() {
    return (
      <div className='appBox'>
      <Provider store={store}>
          <HashRouter>
              <Switch>
                  <Route path='/' exact component={ Nav }/>
                  <Route path='/login' component={ Login }/>                 
                  <Route path='/reg' component={ Reg }/>
                  <Route component={Error404}/>
              </Switch>
          </HashRouter>
          </Provider>
      </div>
    )
  }
}
