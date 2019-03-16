const INITIAL_STATE ={
    word:0
}

export default (state=INITIAL_STATE,action)=>{
    if(action.type === 'HITUNG_KATA'){
        return {...INITIAL_STATE,word:action.payload}
    }
    return state
}