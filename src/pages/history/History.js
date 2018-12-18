import React, { Component } from 'react'

import { connect } from 'react-redux'


class History extends Component {
  render() {
    return (
      <div style={{ padding:'1rem'}}>
        
        <h3> 历史记录 </h3>
        {
          this.props.hoserList.map(item=>
            <div className='houseitem-container'>
         <img src={require('../../assets/imgs/item_3.jpg')} style={{width: '6rem',height: '5rem'}} />

           {/* 右侧区域 */}
           <div className='right-container'>
               {/* 房产介绍DIV */}
               <div className='left-div'>
                   <label className='house-title'>{item.name}</label>
                   <label className='info'>{item.area} {item.business}</label>
                   <label className='info'>{item.info} {item.acreage}</label>
               </div>
   
               {/* 均价 */}
               <div className='right-div'>
                   <label>￥{item.price}</label>
               </div>
           </div>
         </div>
          )
        }
      </div>
    )
  }
  componentDidMount(){
    console.log(this.props)
  }

}


function filter(store){
  return{
    hoserList:store.hoserList
  }
}
export default connect(filter)(History)
