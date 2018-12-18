//注册页面
import React, { Component } from 'react'
import { Button, Flex } from 'antd-mobile'
import { Link } from 'react-router-dom'
//图片
import Logo from '../../assets/imgs/logo1.png'
//样式
import './Reg.less'
//引入axios
import {req} from '../req'
export default class Reg extends Component {
  constructor(p){
    super(p)
    this.state={
      username:'',
      pwd:'',
      isNot:'none'
    }
    this.clickReg=this.clickReg.bind(this)
  }
  render() {
    return (
      <div className='regBox'>

        <Flex justify="center">
          <img src={Logo} style={{ width: '3em', height: '4rem' }} />
        </Flex>
        <div className='import'>
          <label style={{ fontSize: '18px', color: '#926716' }}>用户名</label>
          <input type='text'
           value={this.state.username}
           style={{ border: 'none', height: "3rem", width: '80%', background: 'rgba(0,0,0,0.3)', borderRadius: '5px' }} 
           onChange={e=>this.setState({username:e.target.value})}
           />
           <p style={{ display:this.state.isNot,color:'red',paddingLeft:'4rem'}}>该用户名已被注册</p>
        </div>
        <div className='import'>
          <label style={{ fontSize: '18px', color: '#926716' }}> 密  码 &nbsp;  </label>
          <input type='password' 
           value={this.state.pwd}         
          style={{ border: 'none', height: "3rem", width: '80%', background: 'rgba(0,0,0,0.3)', borderRadius: '5px' }}
          onChange={e=>this.setState({pwd:e.target.value})}
           />
        </div>
        <div className='import'>
          <label style={{ fontSize: '18px', color: '#926716' }}>邮 箱 &nbsp; </label>
          <input type='text' style={{ border: 'none', height: "3rem", width: '80%', background: 'rgba(0,0,0,0.3)', borderRadius: '5px' }} />
        </div>
        <div className='import'>
          <label style={{ fontSize: '18px', color: '#926716' }}>手 机 &nbsp; </label>
          <input type='text' style={{ border: 'none', height: "3rem", width: '80%', background: 'rgba(0,0,0,0.3)', borderRadius: '5px' }} />
        </div>

        <input type='checkbox' className='checkS' />我已同意<span className='colorGre'>《用户服务协议》</span>及<span className='colorGre'>《隐私权协议》</span>

        <Button onClick={ this.clickReg }>点击注册</Button>

        <div className='regButtom'>
          <Link to='/login'>已有账号？前往登录..</Link>
        </div>
      </div>
    )
  }
  clickReg(){
    let data1={username:this.state.username,pwd:this.state.pwd}
     
    let data2={username:this.state.username}
      req('/api/checkUnameRepeat',(res)=>{
        //console.log(res.data)
          if(res.data==0){
              this.setState({ isNot:'block'})
          }else{
            req('/api/reg',(res)=>{
              if(res.data!=''){
              this.props.history.push('/login')
              }
              //console.log(res)
            },data1,'post')
          }
      },data2)

      
  }
}
