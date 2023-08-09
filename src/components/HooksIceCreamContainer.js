import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { buyIcecream } from '../redux/icecream/icecreamAction'

function HookiceCreamContainer() {
    const noOfIcecream=useSelector(state => state.icecream.noOfIcecream)
    const dispatch=useDispatch()
  return (
    <div>
      <h2>No of icecream - {noOfIcecream}</h2>
      <button onClick={()=>dispatch(buyIcecream())}>Buy Icecream</button>
    </div>
  )
}

export default HookiceCreamContainer
