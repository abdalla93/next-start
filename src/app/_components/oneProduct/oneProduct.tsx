/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import Image from 'next/image';
import {AddToCurt} from './addToCurt';

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
                  <AddToCurt />
                </div>
              </div>
            </div>
    </div>
  )
}

export default OneProduct