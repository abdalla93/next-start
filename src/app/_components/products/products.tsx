import { getProducts } from "app/server/services/products";
import React from "react";

interface product {
  id: number;
  title: string;
}
const Products = async () => {
  // const products:product[] =  await new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve([
  //       {
  //         id: 1,
  //         title: "Product 1"
  //       },
  //       {
  //         id: 2,
  //         title: "Product 2"
  //       },
  //       {
  //         id: 3,
  //         title: "Product 3"
  //       }
  //     ]);
  //   }, 3000);
  // });
const products = await getProducts()
  return (
    <div>
      {products?.map((product) => (
        <p key={product?.id}>{product?.title}</p>
      ))}
    </div>
  );

};

export default Products;
