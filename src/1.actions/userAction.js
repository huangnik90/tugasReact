import axios from 'axios'

export const onLogin = (nama,pass)=>{
    
    return (dispatch) =>{
        //INI UNTUK NGUBAH LOADING JADI TRUE
        dispatch({
        type: "LOADING"
        
    })
        //GET DATA DARI FAKE API JSON SERVER
        axios.get("http://localhost:2000/user",{params:{username:nama,password:pass}})

        //KALO BERHASIL NGE GET MASUK KE .THEN
        .then((res)=> {
            console.log(res)
            //KALO USERNAME SAMA PASSWORD SESUAI RES.DATA.LENGTH BAKAL JADI 1
            if(res.data.length>0){
                dispatch({
                    type:'LOGIN_SUCCESS',
                    payload : {username:res.data[0].username,
                        role:res.data[0].role,
                        id:res.data[0].id}
                })
            }else{
                dispatch({
                    type:'USER_NOT_FOUND',  
                })
            }
        })
        //ERROR MESSAGE CAT ERROR
        .catch((err)=> {
            dispatch({
                type:'SISTEM_ERROR'
            })
        })
    
    }
    
}

export const resetUser = ()=>{
    return {
        type: 'RESET'
    }
}

export const RegisterUserUltimate =(username, password, email, phone)=>{
    return (dispatch)=>{
        dispatch({
            type:"LOADING"
        })
        var register = {username:username,password:password,email:email,phone:phone}

        axios.get("http://localhost:2000/user?username="+register.username)
        .then((res)=>{
            if (res.data.length>0){
                dispatch({
                    type:"USERNAME_NOT_AVAILABLE"
                })
            }else{
                axios.post("http://localhost:2000/user?username",register)
                .then((res)=> dispatch({
                    type:"LOGIN_SUCCESS",
                    payload:register.username
                }))
                .catch((err)=>console.log(err))
            
            }
        })
        .catch((err)=>dispatch({
            type:"SISTEM_ERROR"
        }))





    }
}   

export const keepLogin = (nama)=>{
    return (dispatch)=>{
        axios.get("http://localhost:2000/user",{params:{username:nama}})
        .then((res)=>{
            if (res.data.length>0){
                dispatch({
                    type:"LOGIN_SUCCESS",
                    payload: {username: res.data[0].username,role:res.data[0].role}
                })
            }
        })
    }
    
}

