import React,{useState} from 'react'
import {connect} from 'react-redux'
import { feature } from '../redux/features/featureAction'

const NewFeatureContainer=(props)=>{
    const[number,setNumber]=useState(1)
    return(
        <div>
            <h1>features here {props.noOfFeatures}</h1>
            <input type="text" value={number} onChange={(e)=> setNumber(e.target.value)}/>
            <button onClick={()=>props.feature(number)}>Buy {number} feature</button>
        </div>
    )
}

const mapStateToProps=state=>{
    return{
        noOfFeatures:state.feature.noOfFeatures
    }
}

const mapDispatchToProps=dispatch=>{
    return{
feature:number =>  dispatch(feature(number))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps

)(NewFeatureContainer)