import { db } from "../db";

export async function getProducts() {
  const products = await db.query.products.findMany({
    orderBy: (product, { desc }) => [desc(product.createdAt)],
  });

  return products ?? null;
}
