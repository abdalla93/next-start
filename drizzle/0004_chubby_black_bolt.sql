ALTER TABLE "next_start_variant" ADD COLUMN "image_id" integer;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "next_start_variant" ADD CONSTRAINT "next_start_variant_image_id_next_start_image_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."next_start_image"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
