import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { buyProduct } from '../redux'

function HookProductContainer() {
    const noOfProducts=useSelector(state => state.pro.noOfProducts)
    const dispatch=useDispatch()
  return (
    <div>
   <h2>No of products = {noOfProducts}</h2>
<button onClick={()=>dispatch(buyProduct())}>buy product</button>
    </div>
  )
}

export default HookProductContainer
