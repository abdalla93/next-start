"use client";
import React, { useState } from 'react';

const Cart = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const remove = () => setCount(0);
  return (
    <div>
      <div className="relative mx-auto w-full bg-white">
        <div className="grid min-h-screen grid-cols-10">
          <div className="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24">
            <div className="mx-auto w-full max-w-lg">
              <h1 className="relative text-2xl font-medium text-gray-700 sm:text-3xl">
                Order Checkout
                <span className="mt-2 block h-1 w-10 bg-teal-600 sm:w-20"></span>
              </h1>
              <form className="mt-10 flex flex-col space-y-4">
                <div>
                  <label htmlFor="email" className="text-xs font-semibold text-gray-500">
                    Name
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder=""
                    className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div className="relative">
                  <label htmlFor="card-number" className="text-xs font-semibold text-gray-500">
                    Mobile number
                  </label>
                  <input
                    type="text"
                    id="number"
                    name="number"
                    placeholder="01XXXXXXXX"
                    className="block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label htmlFor="address" className="text-xs font-semibold text-gray-500">
                    Address
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    placeholder=""
                    className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500">Reservation date</p>
                  <div className="mr-6 flex flex-wrap">
                    <div className="my-1 ml-3 mr-2">
                      <label htmlFor="year" className="sr-only">
                        Select reservation year
                      </label>
                      <select
                        name="year"
                        id="year"
                        className="cursor-pointer rounded border-gray-300 bg-gray-50 py-3 px-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                      >
                        <option value="">Year</option>
                      </select>
                    </div>
                    <div className="my-1">
                      <label htmlFor="month" className="sr-only">
                        Select reservation month
                      </label>
                      <select
                        name="month"
                        id="month"
                        className="cursor-pointer rounded border-gray-300 bg-gray-50 py-3 px-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                      >
                        <option value="">Month</option>
                      </select>
                    </div>
                    <div className="my-1 ml-3 mr-6">
                      <label htmlFor="day" className="sr-only">
                        Select reservation day
                      </label>
                      <select
                        name="day"
                        id="day"
                        className="cursor-pointer rounded border-gray-300 bg-gray-50 py-3 px-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                      >
                        <option value="">Day</option>
                      </select>
                    </div>
                  </div>
                </div>
              </form>
              <button
                type="submit"
                className="mt-4 inline-flex w-full items-center justify-center rounded bg-teal-600 py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-teal-500 sm:text-lg"
              >
                Place Order
              </button>
            </div>
          </div>
          <div className="relative col-span-full flex flex-col py-6 pl-8 pr-4 sm:py-12 lg:col-span-4 lg:py-24">
            <h2 className="sr-only">Order summary</h2>
            <div>
              
              <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-teal-800 to-teal-400 opacity-95"></div>
            </div>
            <div className="relative">
              <ul className="space-y-5">
                <li className="flex justify-between">
                  <div className="inline-flex">
                    <img
                      src="/1690847554060579501.png"
                      alt=""
                      className="max-h-16"
                    />
                    <div className="ml-3">
                      <p className="text-base font-semibold text-white">mini burgers</p>
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-white">260 EGP</p>
                </li>
                <li className="flex justify-between">
                  <div className="inline-flex">
                    <img
                      src="/1690849428006968575.png"
                      alt=""
                      className="max-h-16"
                    />
                    <div className="ml-3">
                      <p className="text-base font-semibold text-white">crackers</p>
                    </div>
                
</div>
                  <p className="text-sm font-semibold text-white">350 EGP</p>
                </li>
              </ul>
              <div className="my-5 h-0.5 w-full bg-white bg-opacity-30"></div>
              <div className="space-y-2">
                <p className="flex justify-between text-lg font-bold text-white">
                  <span>Total price:</span>
                  <span>510 EGP</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
