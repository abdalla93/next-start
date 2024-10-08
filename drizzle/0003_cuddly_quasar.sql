ALTER TABLE "next-start_image" RENAME TO "next_start_image";--> statement-breakpoint
ALTER TABLE "next-start_option" RENAME TO "next_start_option";--> statement-breakpoint
ALTER TABLE "next-start_post" RENAME TO "next_start_post";--> statement-breakpoint
ALTER TABLE "next-start_product" RENAME TO "next_start_product";--> statement-breakpoint
ALTER TABLE "next-start_tags" RENAME TO "next_start_tags";--> statement-breakpoint
ALTER TABLE "next-start_variant" RENAME TO "next_start_variant";--> statement-breakpoint
ALTER TABLE "next_start_image" DROP CONSTRAINT "next-start_image_product_id_next-start_product_id_fk";
--> statement-breakpoint
ALTER TABLE "next_start_option" DROP CONSTRAINT "next-start_option_product_id_next-start_product_id_fk";
--> statement-breakpoint
ALTER TABLE "next_start_tags" DROP CONSTRAINT "next-start_tags_product_id_next-start_product_id_fk";
--> statement-breakpoint
ALTER TABLE "next_start_variant" DROP CONSTRAINT "next-start_variant_product_id_next-start_product_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "next_start_image" ADD CONSTRAINT "next_start_image_product_id_next_start_product_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."next_start_product"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "next_start_option" ADD CONSTRAINT "next_start_option_product_id_next_start_product_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."next_start_product"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "next_start_tags" ADD CONSTRAINT "next_start_tags_product_id_next_start_product_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."next_start_product"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "next_start_variant" ADD CONSTRAINT "next_start_variant_product_id_next_start_product_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."next_start_product"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
