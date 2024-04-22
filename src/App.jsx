import React from 'react';
import ReactConcept from './components/ReactConcept';
import { concepts } from './../init-data';
import './App.css'

function App() {
  return (
    <div className="app">
    {concepts.map((concept, index) => (
      <ReactConcept key={index} title={concept.title} description={concept.description} image={concept.image}/>
    ))}
  </div>
  );
}
export default App
