import React, { useState } from 'react';
import './App.css';

import Grid from './components/Grid';

function App() {
  const [selectedImagesCount, setSelectedImagesCount] = useState(0);

  const onDeleteSelectedImages = () => {
    setSelectedImagesCount(0);
  };

  return (
    <div className="App">

      <Grid
        selectedImagesCount={selectedImagesCount}
        setSelectedImagesCount={setSelectedImagesCount}
        onDeleteSelectedImages={onDeleteSelectedImages}
      />
    </div>
  );
}

export default App;
