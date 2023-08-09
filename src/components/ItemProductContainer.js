import React from 'react'
import { connect } from 'react-redux'
import { buyCategory } from '../redux'
import { buyProduct } from '../redux'

function ItemProductContainer(props) {
  return (
    <div>
      <h2>Item - {props.item} </h2>
      <button onClick={props.buyItem}>Buy Item</button>
    </div>
  )
}

const mapStateToProps=(state,ownProps)=>{
    const itemState = ownProps.pro 
    ? state.pro.noOfProducts
    : state.cat.noOfCategories

    return{
        item:itemState
    }
}

const mapDispatchToProps=(dispatch,ownProps)=>{
const dispatchFunction=ownProps.pro
? ()=> dispatch(buyProduct())
: ()=> dispatch(buyCategory())
return{
    buyItem:dispatchFunction
}
}

export default connect(mapStateToProps,mapDispatchToProps) (ItemProductContainer)
