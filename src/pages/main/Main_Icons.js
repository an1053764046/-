import React, { Component } from 'react'
import { Grid } from 'antd-mobile';

import './Main_icons.less'

export default class Main_Icons extends Component {
  render() {
    return (
      <div>
          <Grid data={data} square={false} className="not-square-grid" />
      </div>
    )
  }
}
let arr=[
  {icon:'menu_1',text:'新房'},
  {icon:'menu_2',text:'二手房'},
  {icon:'menu_3',text:'租房'},
  {icon:'menu_4',text:'商铺写字楼'},
  {icon:'menu_5',text:'卖房'},
  {icon:'menu_6',text:'海外房产'},
  {icon:'menu_7',text:'小区房价'},
  {icon:'menu_8',text:'问答'}
]
//let arr=['menu_1','menu_2','menu_3','menu_4','menu_5','menu_6','menu_7','menu_8']
//let arr1=['新房','二手房','租房','商铺写字楼','卖房','海外房产','小区房价','问答',]

const data = arr.map((val) => ({
    icon:require(`../../assets/imgs/${val.icon}.png`),
    text:val.text
}));


