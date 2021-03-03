const initialState= {
    OldPassword : '',
    NewPassword : '',
    ConfirmNewPassword : ''
}

export default (state= initialState, action) =>{
    switch(action.type){
        case 'SET_OLDPASSWORD':
            return {
                ...state, OldPassword : action.payload
            }

        case 'SET_NEWPASSWORD' :
            return {
                ...state, NewPassword : action.payload
            }

        case 'SET_CONFIRMNEWPASSWORD' :
            return{
                ...state, ConfirmNewPassword : action.payload
            }

        default :
            return state;
    }
}