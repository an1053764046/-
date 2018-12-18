import React, { Component } from 'react'

import {req} from '../req'

import { Toast} from 'antd-mobile'

import YouLike from '../../components/YouLike'

export default class Main_youLike extends Component {

  constructor(p) {
    super(p)

    this.state = {
      houseslist: []  //房产信息数组
    }
  }


  render() {
    return (
      <div style={{
        paddingLeft: '0.5rem',
        paddingRight: '0.5rem',
        marginTop: '0.5rem'
      }}>
        <h2>猜你喜欢</h2>
        {
          this.state.houseslist.map(item =>
            <YouLike item={item} />
          )
        }
      </div>
    )
  }
  componentDidMount() {
    //显示loading
     Toast.loading('正在努力加载', 0, null, false);

    setTimeout(() => {

      //初始化数据
      req('/api/getHouseInfo', (res) => {
        //关闭loading
        Toast.hide()

        // console.log(res.data.rows)
        this.setState({
          houseslist: res.data.rows
        })
      }, {
          page: 1,
          rows: 15
        })

    }, 1000)


  }
}
