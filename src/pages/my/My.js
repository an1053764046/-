import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List } from 'antd-mobile'


import './my.less'

const Item = List.Item

export default class My extends Component {
  constructor(p){
    super(p)
    this.state={
      list:[
            {id: '1', text: '我的积分', src: 'my01.png'},
            {id: '2', text: '我的订阅', src: 'my02.png'},            
            {id: '3', text: '微聊联系人', src: 'my03.png'},
            '',
            {id: '4', text: '房贷计算器', src: 'my04.png'},
            {id: '5', text: '我的房子', src: 'my05.png'},
            '',
            {id: '6', text: '我的看房记录', src: 'my06.png'},
            {id: '7', text: '我的问答', src: 'my07.png'},
            '',
            {id: '8', text: '设置', src: 'my08.png'},
            {id: '9', text: '意见反馈', src: 'my09.png'},
            {id: '10', text: '帮助', src: 'my010.png'}
      ]
    }
  }


  render() {
    return (
      <div className='myBox'>
        <div className='myTitle'>
            <img src={require('../../assets/imgs/myTitle.png')} style={{width:'3.5rem'}} />
            <p> 
              {/* 登录过保存用户名显示，没登录过就显示登录注册 */}
              {
                localStorage.username?<span>欢迎您 {localStorage.username}</span>:
                <Link to='/login' style={{ color:'#fff'}}>登录</Link> / <Link to='/reg' style={{ color:'#fff'}}>注册 </Link>
              }
            </p>
        </div>
        <div>
         <List>
           {
             this.state.list.map(item =>{
                  if(item === ''){
                    //留白
                    return <div style={{height: '0.7rem',backgroundColor: '#F4F4F4'}}></div>
                  }else{
                    //创建一个条目
                    return <Item
                      key={item.id}
                      thumb={require(`../../assets/imgs/${item.src}`)}
                      arrow="horizontal"
                      onClick={() => {}}
                    >{item.text}</Item>
                  }
           })
          }
      </List>
      </div>
      </div>
    )
  }
}
