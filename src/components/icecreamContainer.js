import React from 'react'
import {connect} from 'react-redux'
import { buyIcecream } from '../redux/icecream/icecreamAction'

const IcecreamContainer=(props)=>{
    return(
        <div>
            <h1>icecream buy buy buy {props.noOfIcecream}</h1>
            <button onClick={props.buyIcecream}>Buy now!!</button>
        </div>
    )
}
// const mapStateToProps=state =>{
//     return{
//         noOfIcecream:state.noOfIcecream
//     }
//   }
const mapStateToProps=state =>{
    return{
        noOfIcecream:state.icecream.noOfIcecream
    }
  }
  const mapDispatchToProps=dispatch=>{
    return{
      buyIcecream:()=>dispatch(buyIcecream())
    }
  }

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(IcecreamContainer)
  