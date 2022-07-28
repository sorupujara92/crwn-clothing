// import { signOut } from "firebase/auth";
// import { createContext,useState,useEffect } from "react";
// import { onAuthStateChangedListener,createUserDocumentFromAuth } from "../utils/firebase/firebase.util";
// import { useReducer } from "react";

// export const UserContext = createContext({
// currentUser : null,
// setCurrentUser : () => null,
// });

// const USER_ACTION_TYPES = {
//     'SET_CURRENT_USER' : 'SET_CURRENT_USER'
// }

// const INITIAL_STATE = {
//     currentUser : null
// }

// export const UserProvider = ({children}) => {
//     const userReducer = (state,action) => {
//         const {type,payload} = action;
//         switch(type) {
//             case USER_ACTION_TYPES.SET_CURRENT_USER:
//                 return {...state,currentUser : payload}

//             default : 
//                 throw new Error(`Unhandler type ${type}`)    
//         }

//     }
//     const[{currentUser},disptch] =  useReducer(userReducer,INITIAL_STATE);
//     const setCurrentUser = (user1) => {disptch({type : USER_ACTION_TYPES.SET_CURRENT_USER,payload:user1}) }
//     // const [currentUser,setCurrentUser] = useState(null);
//     const value = {currentUser,setCurrentUser};
//     useEffect (() => {
//         const unsubscribe = onAuthStateChangedListener((user) => {
//             if(user){
//                 createUserDocumentFromAuth(user);
//             }
//             console.log(user);
//             setCurrentUser(user);
//         });
//         return unsubscribe;
//     },[])
//     return <UserContext.Provider value={value}>{children}</UserContext.Provider> 
// };