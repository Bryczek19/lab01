import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import { useReducer } from 'react';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Lab01 from './pages/lab01';
import Lab02 from './pages/Lab02';
import Lab3Page from './pages/Lab3Page';
import Lab4Page from './pages/Lab4Page';
import Lab4AddForm from './pages/Lab4AddForm';
import Lab4EditForm from './pages/Lab4EditForm';
import NotFound from './pages/NotFound';
import { people } from './module-data';
import AppReducer from './data/AppReducer';
import AppContext from './data/AppContext';
 
function App() {
  const [state, appDispatch] = useReducer(AppReducer, people);
  return (
    <>
      <AppContext.Provider value={{ items: state, dispatch: appDispatch }}>
        <Routes>
          <Route element={<RootLayout/>}>
            <Route path="home" element={<Home/>} />
            <Route path="lab01" element={<Lab01/>} />
            <Route path="lab02" element={<Lab02/>} />
            <Route path="lab02/:id" element={<Lab02/>} />
            <Route path="lab3" element={<Lab3Page/>} />
            <Route path="lab4" element={<Lab4Page/>} />
            <Route path="lab4/add" element={<Lab4AddForm/>} />
            <Route path="lab4/edit/:id" element={<Lab4EditForm/>} />
            <Route path="*" element={<NotFound/>} />
          </Route>
        </Routes>
      </AppContext.Provider>
    </>
  )
}
 
export default App