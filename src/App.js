import React from 'react';
import './App.css';
import './index.css';
import Counter from './features/counter/Counter'
import Product from './features/product-list/Product'

function App() {
  return (
    <div className="App">
     <Counter></Counter>
     <Product></Product>
    </div>
  );
}

export default App;
