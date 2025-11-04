import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Lab01 from './pages/lab01';
import Lab02 from './pages/Lab02';
import Lab3Page from './pages/Lab3Page';
import Lab4Page from './pages/Lab4Page';
import Lab4AddForm from './pages/Lab4AddForm';
import Lab4EditForm from './pages/Lab4EditForm';
import Lab5Page from './pages/Lab5Page';
import UserPage from './pages/UserPage';
import PostPage from './pages/PostPage';
import NotFound from './pages/NotFound';
import AppProvider from './data/AppProvider';

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="lab01" element={<Lab01 />} />
          <Route path="lab02" element={<Lab02 />} />
          <Route path="lab02/:id" element={<Lab02 />} />
          <Route path="lab3" element={<Lab3Page />} />
          <Route path="lab4" element={<Lab4Page />} />
          <Route path="lab4/add" element={<Lab4AddForm />} />
          <Route path="lab4/edit/:id" element={<Lab4EditForm />} />
          <Route path="lab5" element={<Lab5Page />} />
          <Route path="lab5/user/:id" element={<UserPage />} />
          <Route path="lab5/post/:id" element={<PostPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AppProvider>
  );
}

export default App;
