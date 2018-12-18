import React, { Component } from 'react'

import './Main_title.less'
export default class Main_title extends Component {
  constructor(p){
    super(p)
    this.state={
      city:'定位中'
    }
  }
  render() {
    return (
      <div className='Main_title'>
        <span> {this.state.city} ▼ </span>  
        <div className='Search'>
            <img src={require('../../assets/imgs/icon_search.png')} style={{ width:'1.5rem',height:'1.5rem'}}/>
            <span> 点击搜索 </span>
        </div>
        <img src={require('../../assets/imgs/icon_user.png')} style={{ width:'1.5rem',height:'1.5rem'}}/
        >

      </div>
    )
  }
  componentDidMount(){

    // 作用域问题，获取window下面的属性或对象，必须指定window.xxx
    var geolocation = new window.qq.maps.Geolocation("DQXBZ-E6CRF-DK2JV-JF7KY-CFVI3-FIBM2", "myapp");
    //配置
    var options = {timeout: 8000};

    //显示定位
    var showPosition = (position) => {
      this.setState({
        city: position.city
      })
    }

    //显示错误信息
    function showErr() {
        alert('定位失败!')
    };


    //调用geolocation获取定位
    geolocation.getLocation(showPosition, showErr, options)
 
  }
}
