import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import Todo from './pages/Todo';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/todo' element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
