// For adding item to the Cart
export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

// For deleting item from the Cart
export const delCart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};
