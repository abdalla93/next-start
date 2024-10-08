CREATE TABLE IF NOT EXISTS "next-start_iamge" (
	"id" serial PRIMARY KEY NOT NULL,
	"int" integer,
	"src" varchar(256),
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone,
	"product_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "next-start_option" (
	"id" serial PRIMARY KEY NOT NULL,
	"int" integer,
	"name" varchar(256),
	"value" varchar(256),
	"product_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "next-start_post" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256),
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "next-start_product" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(256),
	"status" varchar,
	"description" varchar(512),
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone,
	"published_at" timestamp with time zone,
	"product_type" varchar(256)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "next-start_tags" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256),
	"product_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "next-start_variant" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(256),
	"int" integer,
	"sku" varchar(256),
	"product_id" integer,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "next-start_iamge" ADD CONSTRAINT "next-start_iamge_product_id_next-start_product_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."next-start_product"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "next-start_option" ADD CONSTRAINT "next-start_option_product_id_next-start_product_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."next-start_product"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "next-start_tags" ADD CONSTRAINT "next-start_tags_product_id_next-start_product_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."next-start_product"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "next-start_variant" ADD CONSTRAINT "next-start_variant_product_id_next-start_product_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."next-start_product"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "name_idx" ON "next-start_post" USING btree ("name");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "title_idx" ON "next-start_product" USING btree ("title");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "status_idx" ON "next-start_product" USING btree ("status");