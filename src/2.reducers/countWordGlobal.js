
const INITIAL_STATE = {count : 0}

export default(state=INITIAL_STATE , action) => {
    if(action.type === 'HITUNG_KATA'){
        return{...INITIAL_STATE , count : action.payload}
    }else{
        return state
    }
}