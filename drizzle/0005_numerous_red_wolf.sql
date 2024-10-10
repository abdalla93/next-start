CREATE TABLE IF NOT EXISTS "next_start_order" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256),
	"mobile" varchar(256),
	"address" varchar(256),
	"status" varchar,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "next_start_order_product" (
	"order_id" integer,
	"product_id" integer,
	"quantity" integer
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "next_start_order_product" ADD CONSTRAINT "next_start_order_product_order_id_next_start_order_id_fk" FOREIGN KEY ("order_id") REFERENCES "public"."next_start_order"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "next_start_order_product" ADD CONSTRAINT "next_start_order_product_product_id_next_start_product_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."next_start_product"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
