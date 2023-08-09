import React from 'react'
import {connect} from 'react-redux'
import { buyCategory } from '../redux'
const CategoryContainer=(props) =>{
  return (
    <div>
      <h1>Category here - {props.noOfCategories} </h1>
      
      <button onClick={props.buyCategory}>BUY CATEGORY</button>
    </div>
  )
}
  const mapStateToProps=state=>{
    return{
        noOfCategories:state.cat.noOfCategories
    }
  }

  const mapDispatchToProps=dispatch =>{
    return{
        buyCategory:()=>dispatch(buyCategory())
    }
  }

export default connect(mapStateToProps,mapDispatchToProps) (CategoryContainer)
