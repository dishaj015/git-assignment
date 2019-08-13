import types from "./types";
// import history from '../js/history';
import axios from 'axios';

//get repo list
export function getRepoList(data){
    return dispatch => {
     const url=`https://api.github.com/repos/${data}/issues`;
            axios.get(url).then(
                res=>{
                    console.log("res",JSON.stringify(res.data.message))
                    return  dispatch({
                        type: types.REPO_LIST,
                        payload: res.data
                    });
                }
            ).catch(
                err=>{
                    console.log("err",err);
                    if(err.message){
                        return  dispatch({
                            type: types.FAILED,
                            payload: true
                        });
                    }
                }
            )
      }

    }
//get repo details
    export function getRepoDetails(data,id){
        return dispatch => {
         const url=`https://api.github.com/repos/${data}/issues/${id}`;
                axios.get(url).then(
                    res=>{
                        console.log("res",JSON.stringify(res.data.message))
                        return  dispatch({
                            type: types.REPO_DETAILS ,
                            payload: res.data
                        });
                    }
                )
          };
    
        }

 