const INITIAL_STATE ={
    username:'',loading:false,error:'',role:''
}

export default (state = INITIAL_STATE,action)=>{
    if(action.type === "LOGIN_SUCCESS"){
        return {...INITIAL_STATE,username:action.payload.username,role:action.payload.role,id:action.payload.id}
    }else if(action.type ==='LOADING'){
        return {...INITIAL_STATE,loading:true}
    }else if(action.type==="USER_NOT_FOUND"){
        return {...INITIAL_STATE,error:"Not member yet"}
    }else if(action.type==="SISTEM_ERROR"){
        return {...INITIAL_STATE,error:"Try re-connect Database"}
    }else if (action.type==="RESET"){
        return INITIAL_STATE
    }else if(action.type==="USERNAME_NOT_AVAILABLE"){
        return {...INITIAL_STATE,error:"Username ada, coba lagi"}
    }else{
        return state;
    }
    
}