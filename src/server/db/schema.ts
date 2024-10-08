// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { relations, sql } from "drizzle-orm";
import {
  index,
  integer,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `next_start_${name}`);

export const posts = createTable(
  "post",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date()
    ),
  },
  (post) => ({
    nameIndex: index("name_idx").on(post.name),
  })
);
export const products = createTable(
  "product",
  {
    id: serial("id").primaryKey(),
    title: varchar("title", { length: 256 }),
    status: varchar('status', { enum: ["active", "archived","draft"] }),
    description: varchar("description", { length: 512 }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date()
    ),
    publishedAt: timestamp("published_at", { withTimezone: true }).$onUpdate(
      () => new Date()
    ),
    productType: varchar("product_type", { length: 256 }),
  },
  (product) => ({
    titleIndex: index("title_idx").on(product.title),
    statusIndex: index("status_idx").on(product.status),

  })
);
export const images = createTable(
  "image",
  {
    id: serial("id").primaryKey(),
    position: integer('position'),
    width: integer('width'),
    height: integer('height'),
    src: varchar("src", { length: 256 }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date()
    ),
    productId: integer("product_id").references(() => products.id),
  },
);
export const variants = createTable(
  "variant",
  {
    id: serial("id").primaryKey(),
    title: varchar("title", { length: 256 }),
    position: integer('position'),
    inventoryQuantity: integer('inventory_quantity'),
    grams: integer('grams'),
    originalPrice: integer('original_price'),
    price: integer('price'),
    sku: varchar("sku", { length: 256 }),
    
    imageId: integer("image_id").references(() => images.id),
    productId: integer("product_id").references(() => products.id),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date()
    ),

  }
);
export const options = createTable(
  "option",
  {
    id: serial("id").primaryKey(),
    position: integer('position'),
    name: varchar("name", { length: 256 }),
    value: varchar("value", { length: 256 }),
    productId: integer("product_id").references(() => products.id),
  }
)
export const tags = createTable(
  "tags",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }),
    productId: integer("product_id").references(() => products.id),
  }
);
export const productsRelations = relations(products, ({ many }) => ({
  images: many(images),
  options: many(options),
  tags: many(tags),
}));
export const imagesRelations = relations(images, ({ one,many }) => ({
  product: one(products, { fields: [images.productId], references: [products.id] }),
  variants: many(variants),
}));
export const variantsRelations = relations(variants, ({ one }) => ({
  image: one(images, { fields: [variants.imageId], references: [images.id] })
}));
export const optionsRelations = relations(options, ({ one }) => ({
  product: one(products, { fields: [options.productId], references: [products.id] }),
}));
export const tagsRelations = relations(tags, ({ one }) => ({
  product: one(products, { fields: [tags.productId], references: [products.id] }),
}));
