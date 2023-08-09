import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { highFeature } from '../redux/MoreFeatures/highFeatureAction'

function HookhighFeature() {
const HighNoOfFeatures=useSelector(state => state.highFeature.HighNoOfFeatures)
const dispatch=useDispatch()
  return (
    <div>
      <h1>High Feature = {HighNoOfFeatures}</h1>
      <button onClick={()=>dispatch(highFeature()) }>Buy High Feature</button>
    </div>
  )
}

export default HookhighFeature
