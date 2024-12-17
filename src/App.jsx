import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./pages/Auth/Auth";
import pageLinks from "./site/pageLinks";
import Landing from "./pages/Landing/Landing";
import { AuthProvider } from "./context/AuthContext";
import { Flip, ToastContainer, Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Survey from "./pages/Survey/Survey";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="*" element={<Landing />} />
            <Route path={pageLinks.authPage.dynamicUrl} element={<Auth />} />
            <Route path={pageLinks.authPage.baseUrl} element={<Auth />} />
            <Route
              path={pageLinks.dashboardPage.baseUrl}
              element={<Dashboard />}
            />
            <Route
              path={pageLinks.surveyPage.dynamicUrl}
              element={<Survey />}
            />
          </Routes>
          <ToastContainer
            position={window.innerWidth > 800 ? "bottom-left" : "top-center"}
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition={window.innerWidth > 800 ? Flip : Bounce}
          />
          <Loader />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
