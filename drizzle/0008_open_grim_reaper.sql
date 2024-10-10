DROP TABLE "next_start_product_variant";--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "product_variant_idx" ON "next_start_order_product" USING btree ("product_id","order_id");