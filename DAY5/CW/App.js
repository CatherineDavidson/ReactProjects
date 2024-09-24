import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import List from './List';

function App() {
  const items = ['Apple', 'Banana', 'Orange'];

  return (
    <div className="App">
      <ErrorBoundary>
        <List items={items} />
      </ErrorBoundary>
    </div>
  );
}

export default App;
