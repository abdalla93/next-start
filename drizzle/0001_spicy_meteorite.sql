ALTER TABLE "next-start_iamge" RENAME TO "next-start_image";--> statement-breakpoint
ALTER TABLE "next-start_image" DROP CONSTRAINT "next-start_iamge_product_id_next-start_product_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "next-start_image" ADD CONSTRAINT "next-start_image_product_id_next-start_product_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."next-start_product"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
