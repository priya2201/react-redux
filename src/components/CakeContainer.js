import React from 'react'
import {connect} from 'react-redux'
import { buyCake } from '../redux/cakes/cakeAction'

function CakeContainer (props) {
    
  return (
    <div> 
      <h1> CAKEEE HEREEE - {props.noOfCakes}</h1>
      <button onClick={props.buyCake} >BUY CAKE</button>
    </div>
  )
}
const mapStateToProps=state =>{
  return{
    noOfCakes:state.cake.noOfCakes
  }
}
const mapDispatchToProps=dispatch=>{
  return{
    buyCake:()=>dispatch(buyCake())
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CakeContainer)
