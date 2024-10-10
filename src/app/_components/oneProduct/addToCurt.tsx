/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
"use client";
import Image from "next/image";
import React from "react";

export const AddToCurt = ({productId}:{productId:string}) => {
    const handleAddToCart = () => {
        // Get the current cart from local storage
        const cart = JSON.parse(localStorage.getItem("cart") ?? "[]") || [];
    
        if (!cart?.includes(productId)) {
            cart?.push(productId);
            localStorage.setItem("cart", JSON.stringify(cart));
      
            alert("Product added to cart!");
          } else {
            alert("Product is already in the cart!");
          }
      };
  return (
    <div className="flex items-center justify-end gap-1">
      <button
        type="button"
        data-tooltip-target="tooltip-add-to-favorites"
        className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        onClick={handleAddToCart}
      >
        <span className="sr-only"> Add to Cart </span>
        <Image
          src="/add-to-cart-svgrepo-com.svg"
          alt="Icon"
          width={20}
          height={20}
        />
      </button>
      <div
        id="tooltip-add-to-favorites"
        role="tooltip"
        className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
        data-popper-placement="top"
      >
        Add to cart
        <div className="tooltip-arrow" data-popper-arrow=""></div>
      </div>
    </div>
  );
};

