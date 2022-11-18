import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Profile from './components/pages/Profile';
import ErrorPage from './components/pages/ErrorPage';
import { GithubProvider } from './context/github/GithubContext';
import { AlertProvider } from './context/alert/AlertContext';
import UserItem from './components/users/UserItem';
import UserRepos from './components/users/UserRepos';

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div className="container mx-auto px-4 pt-10 pb-12 bg-center">
                <Home />
              </div>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <Profile />
              </>
            }
          />
          <Route
            path="/user/:login"
            element={
              <>
                <UserItem />
              </>
            }
          />
          <Route
            path="/user/:login/:repo"
            element={
              <>
                <UserRepos />
              </>
            }
          />
          <Route
            path="/*"
            element={
              <>
                {' '}
                <ErrorPage />{' '}
              </>
            }
          />
        </Routes>
        <Footer />
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
