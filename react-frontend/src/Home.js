import { Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthProvider";
// export const Home = ({ user }) => {
//   //when we pass user from our App.js which is set with the useState
//   //if it is null we navigate back to landing, else we show home
//   if (!user) {
//      return <Navigate to="/landing" replace />;
//   }
//  return <h2>Home (Protected: authenticated user required)</h2>;
// };

//to get our protected routes to scale we created a ProtectedRoute.js
export const Home = () => {
    const { value } = useAuth();
    return (
      <>
        <h2>Home (Public)</h2>
        <button type="button" onClick={value.onLogin}>
          Sign In
        </button>
    </>
  );
  };