// import { Facebook, Instagram, Youtube } from "react-feather";

export const setUsername = name =>{
    return {
        type: 'SET_USERNAME',
        payload : name
    };
}

export const setPassword = Password =>{
    return {
        type : 'SET_PASSWORD',
        payload : Password
    }
}



//---Payment From---

export const sethealthservice=healthservice =>{
    return{
        type:"SET_SERVICE_TYPE",
        payload:healthservice
    }
}
export const setclearhealthservice=() =>{
    return{
        type:"CLEAR_SERVICE"

    }
}

//---------- AddBlog---------
export const setTitle = Title =>{
    return{
        type: "SET_TITLE",
        payload : Title
    }
}

export const setWrittenBy = WrittenBy =>{
    return{
        type: "SET_WRITTENBY",
        payload : WrittenBy
    }
}


export const setPublishDate = PublishDate =>{
    return{
        type : "SET_PUBLISHDATE",
        payload : PublishDate
    }
}



//---------- AddBlog---------
//-----------Edit Blog--------
export const setTitleE = Title =>{
    return{
        type: "SET_TITLE",
        payload : Title
    }
}

export const setWrittenByE = WrittenBy =>{
    return{
        type: "SET_WRITTENBY",
        payload : WrittenBy
    }
}


export const setPublishDateE = PublishDate =>{
    return{
        type : "SET_PUBLISHDATE",
        payload : PublishDate
    }
}

//-----------Edit Blog--------

//---Change Password---

export const setOldPassword = OldPassword =>{
    return {
        type : 'SET_OLDPASSWORD',
        payload : OldPassword
    }
}

export const setNewPassword = NewPassword =>{
    return {
        type : 'SET_NEWPASSWORD',
        payload : NewPassword
    }
}

export const setConfirmNewPassword = ConfirmNewPassword =>{
    return {
        type : 'SET_CONFIRMNEWPASSWORD',
        payload : ConfirmNewPassword
    }
}