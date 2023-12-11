import './App.css';
import { Routes, Route } from 'react-router';
import AppHeader from '../appHeader.js/AppHeader';

import NotFoundPage from '../../page/NotFoundPage';
import MasterPage from '../../page/MasterPage';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Routes>
        <Route path="/master" element={<MasterPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
