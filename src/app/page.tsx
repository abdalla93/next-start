import Link from "next/link";
import Image from "next/image";

import { LatestPost } from "app/app/_components/post";
import { api, HydrateClient } from "app/trpc/server";
import Navbar from "./_components/navbar/navbar";
import { getProducts } from "app/server/services/products";
import Products from "./_components/products/products";
import OneProduct from "./_components/oneProduct/oneProduct";

import { Suspense } from "react";
// import Product from "./_components/products/product";
export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const products = await getProducts();
  console.log("products", products);

  // const products = await api.product.getAll();
  // const products = await getProducts()
  // console.log("products", products);

  return (
    <HydrateClient>
      <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <Link href="/cart">
            <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
              <div>
                <Image src="/logo.jpg" alt="Icon" width={70} height={70} />
                {/* <h2 className="mt-3 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                Onbarding
                </h2> */}
              </div>
              <div className="flex items-center space-x-4">
                <button
                  data-modal-toggle="filterModal"
                  data-modal-target="filterModal"
                  type="button"
                  className="hover:text-primary-700 flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
                >
                  <Image src="/cart.svg" alt="Icon" width={20} height={20} />
                </button>
              </div>
            </div>
          </Link>
          <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <OneProduct key={product.id} product={product} />
            ))}
          </div>

          <div className="w-full text-center"></div>
        </div>
      </section>
    </HydrateClient>
  );
}
