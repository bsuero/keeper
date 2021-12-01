
import './App.css';

import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Note from '../Notes/Note';

import notes from "../notes";

function addNotes(notes){
	return (
	<Note
		key= {notes.key}
		title={notes.title}
		content={notes.content}
		/>
	);
}

function App() {
  return (
    <div className="App">
      <Header />
			{notes.map(addNotes)}
			<Footer />
    </div>
  );
}

export default App;
