import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Samsung Galaxy S21",
      description: "5G Smartphone with 128GB storage",
      price: "$799",
      image: "https://texnomart.az/wp-content/uploads/2022/11/texnomart-Daewoo-FUS089FWT0AZ-62hvx8c94lpaji75ogt3.jpg",
      quantity: 1,
    },    {
        id: 2,
        name: "Sony",
        description: "5G Smartphone with 128GB storage",
        price: "$799",
        image: "https://texnomart.az/wp-content/uploads/2022/11/texnomart-Daewoo-FUS089FWT0AZ-62hvx8c94lpaji75ogt3.jpg",
        quantity: 1,
      },
      {
        id: 3,
        name: "Iphone 15",
        description: "5G Smartphone with 128GB storage",
        price: "$230",
        image: "https://texnomart.az/wp-content/uploads/2022/11/texnomart-Daewoo-FUS089FWT0AZ-62hvx8c94lpaji75ogt3.jpg",
        quantity: 1,
      },
      {
        id: 4,
        name: "Samsung Galaxy S21",
        description: "5G Smartphone with 128GB storage",
        price: "$1200",
        image: "https://texnomart.az/wp-content/uploads/2022/11/texnomart-Daewoo-FUS089FWT0AZ-62hvx8c94lpaji75ogt3.jpg",
        quantity: 1,
      },    {
        id: 5,
        name: "Samsung Galaxy S21",
        description: "5G Smartphone with 128GB storage",
        price: "$799",
        image: "https://texnomart.az/wp-content/uploads/2022/11/texnomart-Daewoo-FUS089FWT0AZ-62hvx8c94lpaji75ogt3.jpg",
        quantity: 1,
      },
      {
        id: 6,
        name: "Samsung Galaxy S21",
        description: "5G Smartphone with 128GB storage",
        price: "$7",
        image: "https://texnomart.az/wp-content/uploads/2022/11/texnomart-Daewoo-FUS089FWT0AZ-62hvx8c94lpaji75ogt3.jpg",
        quantity: 1,
      },
      {
        id: 7,
        name: "Samsung Galaxy S21",
        description: "5G Smartphone with 128GB storage",
        price: "$799",
        image: "https://texnomart.az/wp-content/uploads/2022/11/texnomart-Daewoo-FUS089FWT0AZ-62hvx8c94lpaji75ogt3.jpg",
        quantity: 1,
      },
      {
        id: 8,
        name: "Samsung Galaxy S21",
        description: "5G Smartphone with 128GB storage",
        price: "$650",
        image: "https://texnomart.az/wp-content/uploads/2022/11/texnomart-Daewoo-FUS089FWT0AZ-62hvx8c94lpaji75ogt3.jpg",
        quantity: 1,
      }
  ]);

  const updateQuantity = (id, type) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity: type === "increase" ? product.quantity + 1 : Math.max(1, product.quantity - 1),
            }
          : product
      )
    );
  };

  return (
    <ProductContext.Provider value={{ products, updateQuantity }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
