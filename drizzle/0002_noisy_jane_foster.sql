ALTER TABLE "next-start_image" RENAME COLUMN "int" TO "position";--> statement-breakpoint
ALTER TABLE "next-start_option" RENAME COLUMN "int" TO "position";--> statement-breakpoint
ALTER TABLE "next-start_variant" RENAME COLUMN "int" TO "position";--> statement-breakpoint
ALTER TABLE "next-start_image" ADD COLUMN "width" integer;--> statement-breakpoint
ALTER TABLE "next-start_image" ADD COLUMN "height" integer;--> statement-breakpoint
ALTER TABLE "next-start_variant" ADD COLUMN "inventory_quantity" integer;--> statement-breakpoint
ALTER TABLE "next-start_variant" ADD COLUMN "grams" integer;--> statement-breakpoint
ALTER TABLE "next-start_variant" ADD COLUMN "original_price" integer;--> statement-breakpoint
ALTER TABLE "next-start_variant" ADD COLUMN "price" integer;