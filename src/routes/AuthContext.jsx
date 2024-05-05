import React, {createContext, useState, useContext} from 'react';

const AuthContext= createContext(null);

export const AuthProvider = ({children})=>{
    const [userRole, setUserRole]= useState('normal');

    const loginAsAdmin = ()=> setUserRole('admin')
    const logout = ()=> setUserRole('normal');

    return(
        <AuthContext.Provider value={{userRole, loginAsAdmin, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = ()=> useContext(AuthContext)
