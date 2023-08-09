import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { buyCake } from '../redux/cakes/cakeAction'

function HookCakeContainer() {
    const noOfCakes=useSelector(state => state.cake.noOfCakes)
    const dispatch=useDispatch()
  return (
    <div>
      <h2>No of cakes - {noOfCakes}</h2>
      <button onClick={()=>dispatch(buyCake())}>Buy cake</button>
    </div>
  )
}

export default HookCakeContainer
