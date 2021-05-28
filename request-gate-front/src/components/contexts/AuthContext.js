import React, { useState, createContext, useContext} from 'react';

const AuthContext = createContext();

export function AuthProvider(props){
  const [ user, setUser ] = useState({
    id: 4,
    email: "chambers@hblab.vn",
    name: "Chambers",
    part: "Developer",
    role: "user"
  })
  const fakeAuth = {
    isAuthenticated: true,
    signin(cb) {
      fakeAuth.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },
    signout(cb) {
      fakeAuth.isAuthenticated = false;
      setTimeout(cb, 100);
    }
  };

  const signIn = cb => {
    return fakeAuth.signin(() => {
      setUser({
        id: 4,
        email: "chambers@hblab.vn",
        name: "Chambers",
        part: "Developer",
        role: "user"
      });
      cb();
    });
  };

  const signOut = cb => {
    return fakeAuth.signout(() => {
      setUser(null);
      cb();
    });
  };

  return(
    <AuthContext.Provider value={{
      user: user,
      signIn: signIn,
      signOut: signOut
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext;