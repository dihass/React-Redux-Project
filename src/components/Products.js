import React from "react";
import Product from "./Product";
const DUMMY_PRODUCTS = [
  {
    id: 1,
    name: "MacBook",
    imgURL:
      "https://media.istockphoto.com/id/1358386001/photo/apple-macbook-pro.jpg?s=612x612&w=0&k=20&c=d14HA-i0EHpdvNvccdJQ5pAkQt8bahxjjb6fO6hs4E8=",
    price: 250,
  },
  {
    id: 2,
    name: "Lenovo Yoga",
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJgI_gPj7Zy6fNw7gWYM3VY3z86xkL9RlcSRRdRe7iFQ&s",
    price: 200,
  },
  {
    id: 3,
    name: "Dell lattitude",
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB8hLDeinxWomQrXF7WGj77oLrh1xqK5nrlnnViHZP2w&s",
    price: 150,
  },
  {
    id: 4,
    name: "HP Pavillion",
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGDPSzmU2wv1jmaZ7hpJFIumi-OC0JeHC73oUyyzJHwQ&s",
    price: 175,
  },
  {
    id: 5,
    name: "ASUS Vivo",
    imgURL:
      "https://www.globalbrandsmagazine.com/wp-content/uploads/2014/02/Asus.png",
    price: 100,
  },
];
const Products = () => {
  return (
    <div>
      <ul className="products-container">
        {DUMMY_PRODUCTS.map((product, index) => (
          <li key={index}>
            <Product
              id={product.id}
              name={product.name}
              imgURL={product.imgURL}
              price={product.price}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
