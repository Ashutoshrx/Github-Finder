import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Profile from './components/pages/Profile';
import ErrorPage from './components/pages/ErrorPage';
import { GithubProvider } from './context/github/GithubContext';
function App() {
  return (
    <GithubProvider>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="container mx-auto px-4 pt-10 pb-12 bg-center">
              <Home />
            </div>
          }
        ></Route>
        <Route
          path="/profile"
          element={
            <>
              <Profile />
            </>
          }
        ></Route>
        <Route
          path="/*"
          element={
            <>
              <ErrorPage />
            </>
          }
        ></Route>
      </Routes>
      <Footer />
    </GithubProvider>
  );
}

export default App;
