import types from '../action/types';
const INITIAL_STATE={
    repoList:[],
    repoDetails:[]

}
export default function reducer(state=INITIAL_STATE,action){
switch(action.type){
    case types.REPO_LIST:
        return{
            ...state,
            repoList:action.payload,
            isShow:false

        }
        
        case types.REPO_DETAILS:
            return{
                ...state,
                repoDetails:action.payload,
    
            } 
            case types.FAILED:
            return{
                ...state,
                isShow:action.payload,
    
            } 
        default:
         return state;
                    
}
}
