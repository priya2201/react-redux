import React from 'react'
import {connect} from 'react-redux'
import { feature } from '../redux/features/featureAction'

const FeatureContainer=(props)=>{
    return(
        <div>
            <h1>features here {props.noOfFeatures}</h1>
            <button onClick={props.feature}>Buy feature</button>
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
feature:()=> dispatch(feature())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps

)(FeatureContainer)