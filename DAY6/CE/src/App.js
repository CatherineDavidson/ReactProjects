import React from "react";
import ProductList from "./components/ProductList";
import withProductList from "./components/withProductList";
import { electronics, clothing } from "./data/productData";

// Creating components with different product lists using HOC
const ElectronicsProductList = withProductList(ProductList, electronics);
const ClothingProductList = withProductList(ProductList, clothing);

function App() {
  return (
    <div>
      <h1>Product Listings</h1>
      <h2>Electronics</h2>
      <ElectronicsProductList />
      <h2>Clothing</h2>
      <ClothingProductList />
    </div>
  );
}

export default App;
