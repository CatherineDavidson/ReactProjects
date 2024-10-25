import React from "react";

const withProductList = (WrappedComponent, products) => {
  return function WithProductList(props) {
    return <WrappedComponent {...props} products={products} />;
  };
};

export default withProductList;
