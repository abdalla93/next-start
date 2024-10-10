CREATE TABLE IF NOT EXISTS "next_start_product_variant" (
	"product_id" integer,
	"variant_id" integer
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "next_start_product_variant" ADD CONSTRAINT "next_start_product_variant_product_id_next_start_product_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."next_start_product"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "next_start_product_variant" ADD CONSTRAINT "next_start_product_variant_variant_id_next_start_variant_id_fk" FOREIGN KEY ("variant_id") REFERENCES "public"."next_start_variant"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "product_variant_idx" ON "next_start_product_variant" USING btree ("product_id","variant_id");