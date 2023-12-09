import './App.css';
import { Router, Route } from 'react-router';

import NotFoundPage from '../../page/NotFoundPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='*' element={<NotFoundPage />} />
      </Router>
    </div>
  );
}

export default App;
