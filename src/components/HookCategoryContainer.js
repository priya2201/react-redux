import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { buyCategory } from '../redux'

function HookCategoryContainer() {
    const noOfCategories=useSelector(state => state.cat.noOfCategories)
    const dispatch=useDispatch()
  return (
    <div>
   <h2>No of catgeory = {noOfCategories}</h2>
<button onClick={()=>dispatch(buyCategory())}>buy catgeory</button>
    </div>
  )
}

export default HookCategoryContainer
