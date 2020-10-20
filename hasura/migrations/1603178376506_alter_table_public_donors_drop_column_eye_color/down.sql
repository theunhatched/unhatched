ALTER TABLE "public"."donors" ADD COLUMN "eye_color" varchar;
ALTER TABLE "public"."donors" ALTER COLUMN "eye_color" DROP NOT NULL;
