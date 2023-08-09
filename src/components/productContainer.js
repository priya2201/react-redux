import React from 'react'
import {connect} from 'react-redux'
import { buyProduct } from '../redux'
const productContainer=(props) =>{
  return (
    <div>
      <h1>products here - {props.noOfProducts} </h1>
      <button onClick={props.buyProduct}>BUY PRODUCTS</button>
    </div>
  )
}
  const mapStateToProps=state=>{
    return{
        noOfProducts:state.pro.noOfProducts
    }
  }

  const mapDispatchToProps=dispatch =>{
    return{
        buyProduct:()=>dispatch(buyProduct())
    }
  }

export default connect(mapStateToProps,mapDispatchToProps) (productContainer)
