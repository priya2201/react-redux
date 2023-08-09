import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { feature } from '../redux/features/featureAction'


function HookFeature() {
    const noOfFeatures=useSelector(state => state.feature.noOfFeatures)
    const dispatch=useDispatch()
  return (
    <div>
      <h1>no of features- {noOfFeatures}</h1>
      <button onClick={()=> dispatch(feature())}>Buy Feature</button>
    </div>
  )
}

export default HookFeature
