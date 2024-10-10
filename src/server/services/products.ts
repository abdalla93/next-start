import { db } from "../db";
import { variants } from "../db/schema";

export async function getProducts() {
  const products = await db.query.products.findMany({
    with:{
      variants:true,
      images:true
    },
    orderBy: (product, { desc }) => [desc(product.createdAt)],
  });

  return products ?? null;
}
