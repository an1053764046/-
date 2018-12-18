import React, { Component } from 'react'

import Main_title from './Main_title'
import Main_Icons from './Main_Icons'
import Main_Carousel from './Main_Carousel'
import Main_youLike from './Main_youLike'

export default class Main extends Component {
  render() {
    return (
      <div>
        <Main_title />
        <Main_Carousel />
        <Main_Icons />
        <Main_youLike />
      </div>
    )
  }
}
