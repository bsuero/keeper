
import './App.css';

import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Note from '../Notes/Note';

function App() {
  return (
    <div className="App">
      <Header />
			<Note />
			<Footer />
    </div>
  );
}

export default App;
