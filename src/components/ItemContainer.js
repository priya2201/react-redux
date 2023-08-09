import React from 'react'
import { connect } from 'react-redux'

function ItemContainer(props) {
  return (
    <div>
      <h2>Item - {props.item} </h2>
    </div>
  )
}

const mapStateToProps=(state,ownProps)=>{
    const itemState = ownProps.cake 
    ? state.cake.noOfCakes
    : state.icecream.noOfIcecreams

    return{
        item:itemState
    }
}

export default connect(mapStateToProps) (ItemContainer)
