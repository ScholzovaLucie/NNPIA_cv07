import React from 'react';

function ReactConcept({ title, description, image }) {
  return (
    <div className="concept">
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={image}/>
    </div>
  );
}

export default ReactConcept;
