import React from 'react'
import Image from 'next/image';

const OneProduct = ({product}: any) => {
  return (
    <div>
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <div className="h-56 w-full">
                <a href="#">
                  <Image
                    className="mx-auto h-full dark:hidden"
                    src={`/${product?.images?.[0]?.src}`}
                    alt="Description of image"
                    width={500}
                    height={300}
                    />
                </a>
              </div>
              <div className="pt-6">
                

                <div
                  className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
                >
                  {product?.title}
                </div>

                <div className="mt-4 flex items-center justify-between gap-4">
                  <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
                    {product?.variants?.[0]?.price} EGP
                  </p>
                  <div className="flex items-center justify-end gap-1">
                    <button
                      type="button"
                      data-tooltip-target="tooltip-add-to-favorites"
                      className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <span className="sr-only"> Add to Cart </span>
                      <Image src='/add-to-cart-svgrepo-com.svg'  alt="Icon" width={20} height={20} />

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
                </div>
              </div>
            </div>
    </div>
  )
}

export default OneProduct