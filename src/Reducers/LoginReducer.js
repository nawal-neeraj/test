const initialState ={
    Username: "",
    Password: ""
}

export default (state = initialState, action) =>{
    switch(action.type){
        case 'SET_USERNAME':
        return {
            ...state, 
            Username: action.payload
        }

        case 'SET_PASSWORD':
            return{
                ...state, 
                Password : action.payload
            }

        default:
            return state;
    }

}