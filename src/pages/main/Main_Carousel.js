import React, { Component } from 'react'
import { Carousel } from 'antd-mobile'


export default class Main_Carousel extends Component {

  state = {
    data: ['bg1', 'bg2', 'bg3'],
    imgHeight: 176,
  }


  render() {
    return (
      <div>
     <Carousel
          autoplay={false}
          infinite
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={require(`../../assets/imgs/${val}.jpg`)}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                
              />
            </a>
          ))}
        </Carousel>
      </div>
    )
  }
}
