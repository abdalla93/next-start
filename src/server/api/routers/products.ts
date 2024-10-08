import { getProducts } from "app/server/services/products";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const productRouter = createTRPCRouter({
  
    getAll: publicProcedure.query(async ({ ctx }) => {
      return getProducts()
    }),
  });
  