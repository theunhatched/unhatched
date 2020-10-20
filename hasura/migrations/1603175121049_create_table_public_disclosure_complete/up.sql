CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."disclosure_complete"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "user_id" uuid NOT NULL, "genetic_reports" varchar, "physiological_reports" varchar, "letters_of_recommendation" varchar, PRIMARY KEY ("id") , FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON UPDATE restrict ON DELETE restrict, UNIQUE ("id"));
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_disclosure_complete_updated_at"
BEFORE UPDATE ON "public"."disclosure_complete"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_disclosure_complete_updated_at" ON "public"."disclosure_complete" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
