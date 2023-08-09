import { FEATURE } from "./featureTypes";
export const feature = (number = 1)=>{
    return{
        type:FEATURE,
        payload:number
    }
}