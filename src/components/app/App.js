import './App.css';
import { Routes, Route } from 'react-router';
import AppHeader from '../appHeader.js/AppHeader';

import NotFoundPage from '../../page/NotFoundPage';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Routes>
        <Route path="/master" element={<NotFoundPage />} />
        <Route path='/' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
