import Link from "next/link";

import { LatestPost } from "app/app/_components/post";
import { api, HydrateClient } from "app/trpc/server";
import Navbar from "./_components/navbar/navbar";
import { getProducts } from "app/server/services/products";
import Products from "./_components/products/products";
import { Suspense } from "react";
// import Product from "./_components/products/product";
export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  console.log('hello',hello);
  
  // const products = await api.product.getAll();
  // const products = await getProducts()
  // console.log("products", products);

  return (
    <HydrateClient>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Start App
          </h1>
          <Suspense fallback={<div>Loading...</div>}>
            <Products />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <LatestPost />
          </Suspense>
        </div>
      </main>
    </HydrateClient>
  );
}
