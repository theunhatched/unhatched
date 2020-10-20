CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."disclosure_partial"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" Timestamp NOT NULL DEFAULT now(), "user_id" uuid NOT NULL, "name" character varying, "photo_album" character varying, "detailed_ethnicity" varchar, "detailed_employment" varchar, "detailed_talents" varchar, "detailed_passions" varchar, "detailed_commitments" varchar, "philosophical_views" varchar, "religious_views" varchar, "life_milestones" varchar, "achievements" varchar, "height" varchar, "weight" varchar, "circle_of_friends" varchar, PRIMARY KEY ("id") , FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON UPDATE restrict ON DELETE restrict, UNIQUE ("id"));
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_user_id"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."user_id" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_disclosure_partial_user_id"
BEFORE UPDATE ON "public"."disclosure_partial"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_user_id"();
COMMENT ON TRIGGER "set_public_disclosure_partial_user_id" ON "public"."disclosure_partial" 
IS 'trigger to set value of column "user_id" to current timestamp on row update';
