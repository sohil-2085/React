import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  // this is the method to take the env variable when we create react app using the create react app
  // console.log(process.env.REACT_APP_APPWRITE_URL);

  // now when we create the react project using the vite then this is the method
  // console.log(import.meta.env.VITE_APPWRITE_URL);

  // this is the loading state because the data coming from the db is take time so we can do the conditional rendering with the loading state
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-col bg-gray-50 text-black">
      <Header />
      <main className="flex-1 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  ) : null;
}

export default App;
