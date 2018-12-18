import React, { Component } from 'react'
//引入选项卡组件

import { TabBar } from 'antd-mobile'

//引入页面
import Main from '../main/Main'
import Chat from '../chat/Chat'
import History from '../history/History'
import My from '../my/My'

export default class Nav extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'blueTab',
      hidden: false
    }
  }
  //渲染子屏幕的函数
  renderContent(pageText) {
    switch (pageText) {
      case 'main': return <Main />
      case 'chat': return <Chat />
      case 'history': return <History />
      case 'my': return <My />
    }
  }
  render() {
    return (
      <div className='navBox'>
        <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#C79946"
            barTintColor="white"
            hidden={this.state.hidden}
          >
            <TabBar.Item
              title="首页"
              key="Life"
              icon={
                <img src={require('../../assets/imgs/icon_first.png')} style={{width:"22px", height: '22px'}} /> 
              }
              selectedIcon={
              <img src={require('../../assets/imgs/icon_s_first.png')} style={{width:"22px", height: '22px'}}/>
              }
              selected={this.state.selectedTab === 'blueTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'blueTab',
                });
              }}
              data-seed="logId"
            >
              {this.renderContent('main')}
            </TabBar.Item>
            <TabBar.Item
              icon={
                <img src={require('../../assets/imgs/icon_chat.png')} style={{width:"22px", height: '22px'}} /> 
              }
              selectedIcon={
                <img src={require('../../assets/imgs/icon_s_chat.png')} style={{width:"22px", height: '22px'}} /> 
              }
              title="微聊"
              key="Koubei"
              selected={this.state.selectedTab === 'redTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'redTab',
                })
              }}
              data-seed="logId1"
            >
              {this.renderContent('chat')}
            </TabBar.Item>
            <TabBar.Item
              icon={
                <img src={require('../../assets/imgs/icon_star.png')} style={{width:"22px", height: '22px'}} /> 
              }
              selectedIcon={
                <img src={require('../../assets/imgs/icon_s_star.png')} style={{width:"22px", height: '22px'}} /> 
              }
              title="历史"
              key="Friend"
              selected={this.state.selectedTab === 'greenTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'greenTab',
                })
              }}
            >
              {this.renderContent('history')}
            </TabBar.Item>
            <TabBar.Item
              icon={ <img src={require('../../assets/imgs/icon_my.png')} style={{width:"22px", height: '22px'}} /> }
              selectedIcon={ <img src={require('../../assets/imgs/icon_s_my.png')} style={{width:"22px", height: '22px'}} /> }
              title="我的"
              key="my"
              selected={this.state.selectedTab === 'yellowTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'yellowTab',
                })
              }}
            >
              {this.renderContent('my')}
            </TabBar.Item>
          </TabBar>
        </div>




      </div>
    )
  }

}
