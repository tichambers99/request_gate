import React, { useState, createContext, useContext} from 'react';

const UserContext = createContext();

export function UserProvider(props){
  const [user, setUser] = useState({});
  const [isLogin, setIsLogin] = useState(false);
  const onHandleLogin = () =>{}
  return(
    <UserContext.Provider value={{
      user: user,
      isLogin: isLogin,
      onHandleLogin: onHandleLogin
    }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContext;