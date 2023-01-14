import { Routes, Route, Link } from "react-router-dom";
import { ProtectedRoute } from "./utils/ProtectedRoute";
import {Landing} from "./Landing";
import {Home} from "./Home"
import { fakeAuth } from "./utils/FakeAuth";
import React, { useState } from "react";
import { AuthProvider } from "./context/AuthProvider";
import { useAuth } from "./context/AuthProvider";

// export const AuthContext = React.createContext(null);  // we will use this in other components



// const App = () => {
//     // const [user, setUser] = useState(0);
//     // const handleLogin = () => setUser({ id: "1", name: "bj" });
//     // const handleLogout = () => setUser(null);
//     const [token, setToken] = React.useState(null);
//     const handleLogin = async () => {
//         const tokenToSet = await fakeAuth();
//         setToken(tokenToSet);

//     };

//     const handleLogout = () => {
//         setToken(null);
//     };
//     return (
//       <>
//        <AuthContext.Provider value={token}>
//        <h1>React Router</h1>
//        <Navigation />
//        {/* if the user is not null, then we have the sign out button */}
//        {/* else we have the sign in button */}
//        {token ? (
//          <button onClick={handleLogout}>Sign Out</button>
//         ) : (
//          <button onClick={handleLogin}>Sign In</button>
//         )}
     
      
            
//       <Routes>
//         <Route index element={<Home onLogin={handleLogin} />} />
//         <Route path="landing" element={<Landing />} />
//         <Route path="home" element={ <Home onLogin={handleLogin} />} />
//         {/* <Route path="*" element={<p>There's nothing here: 404!</p>} /> */}

//         {/* <Route index element={<Landing />} />
//         <Route 
//             path="home" 
//             element={ 
//             <ProtectedRoute user={user}> 
//                 <Home /> 
//             </ProtectedRoute> 
//             }
//         />
//         <Route path="landing" element={<Landing />} />
//         <Route path="*" element={<p>There's nothing here: 404!</p>} /> */}
//       </Routes>
//       </AuthContext.Provider>
//     </>
//   );
// };

const App = () => {
    return (
        <>
            {/* wrapping everything in authProvider allows for these elements to request parent information for AuthProvider via React Context */}
            {/* React's context allows you to share information to any component, by storing it in a central place and allowing access 
            to any component that requests it (usually you are only able to pass data from parent to child via props). */}
            <AuthProvider>
            <Navigation />
            
            <h1>React Router</h1>
        
            <Routes>
                {/* index element is the first element that renders at parents URL */}
                <Route index element={<Home />} />
                <Route
                    path="landing"
                    element={
                      <ProtectedRoute>
                        <Landing />
                      </ProtectedRoute>
                    }
                    />
                <Route path="home" element={<Home />} />
                <Route path="*" element={<p>There's nothing here: 404!</p>} />
            </Routes>
            </AuthProvider>
        </>
    );
};

const Navigation = () => {
    const { value } = useAuth();
    return (
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/landing">Landing</Link>
        {value.token && (
          <button type="button" onClick={value.onLogout}>
            Sign Out
            </button>
        )}  
        
    </nav>
);
};


// const Navigation = ({ token, onLogout }) => (
//     <nav>
//         <Link to="/landing">Landing</Link>
//         {token && (
//             <button type="button" onClick={onLogout}>
//                 Sign Out
//             </button>
//         )}  
//         <Link to="/home">Home</Link>
        
//     </nav>
// );



export default App;