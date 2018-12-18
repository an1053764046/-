import React, { Component } from 'react'


import '../assets/styles/houseitem.less'
import {SOURCES_IP} from '../pages/req'


import { connect } from 'react-redux'

import {pushHouser} from '../pages/store/actions'

class YouLike extends Component {

    static defaultProps = {
      img: '',
      name: '默认楼盘',
      area: '高新区',
      info: '默认房型',
      acreage: '0',
      business: '默认商圈',
      price: '30000',
    }
  render() {
    var {img , name, area, info, acreage, business, price} = this.props.item

    return (
      <div className='houseitem-container' onClick={this.clickHouse.bind(this)}>
         <img src={
          img === '' ? require('../assets/imgs/img404.jpg') :
          SOURCES_IP + '/' + img
        } style={{width: '6rem',height: '5rem'}} />

        {/* 右侧区域 */}
        <div className='right-container'>
            {/* 房产介绍DIV */}
            <div className='left-div'>
                <label className='house-title'>{name}</label>
                <label className='info'>{area} {business}</label>
                <label className='info'>{info} {acreage}</label>
            </div>

            {/* 均价 */}
            <div className='right-div'>
                <label>￥{price}</label>
            </div>
        </div>
      </div>
    )
  }
  clickHouse(){
    this.props.dispatch(
      //点击获取数据添加到数组中
      pushHouser(this.props.item)
    )
  }

}
 
export default connect()(YouLike)