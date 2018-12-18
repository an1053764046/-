//登录界面
import React, { Component } from 'react'
import {  Button, Flex } from 'antd-mobile'
import { Link } from 'react-router-dom'
//引入样式图片
import './login.less'
import Logo from '../../assets/imgs/logo1.png'

import {req} from '../req'

export default class Login extends Component {

  constructor(p){
    super(p)
    this.state={
      username:'',
      pwd:'',
      isNot:'none'
    }
    this.loGin=this.loGin.bind(this)
  }
  
  render() {
    return (
      <div className='loginBox'>
        <Flex justify="center">
          <img src={Logo} style={{ width: '5rem', height: '6rem' }} />
        </Flex>
        <div className='import'>
          <label style={{color:'#fff',fontSize:'18px'}}>账 号  </label>
          <input type='text' 
          value={this.state.username}
          onChange={(e) => { this.setState({username: e.target.value}) } }
          style={{color:'#fff',border:'none',height:"3rem",width:'80%',background:'rgba(255,255,255,0.3)',borderRadius:'5px'}}
          />
          
        </div>
        <div className='import'>
          <label style={{color:'#fff',fontSize:'18px'}}>密 码  </label>
          <input type='password' 
          style={{color:'#fff',border:'none',height:"3rem",width:'80%',background:'rgba(255,255,255,0.3)',borderRadius:'5px'}} 
          value={this.state.pwd}
          onChange={(e) => { this.setState({pwd: e.target.value}) }}
          />
        </div>
        <p style={{color:'red',display:this.state.isNot}}>账号或者密码输入错误 </p>
        <Button type="primary" style={{background:"rgb(73, 32, 32)",border:'1px solid #666'}} onClick={this.loGin}>登录</Button>
        <div className='loginButtom'>
            <Link to='/reg'>快速注册</Link>
            <Link to='#'>忘记密码？</Link>
        </div>
          
      </div>
    )
  }

    loGin(){

      let data1={username:this.state.username,pwd:this.state.pwd}
        req('/api/login',(res)=>{
          if(res.data==='pass'){
            this.props.history.push('/')
            localStorage.username=this.state.username
          }else{
            this.setState({isNot:'block'})
          }
        },data1,'post')
    }

}



