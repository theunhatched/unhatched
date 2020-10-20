CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."donor_disclosure_initial"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "user_id" uuid NOT NULL, "ethnicity" varchar, "birthdate" character varying, "eye_color" varchar, "hair_color" varchar, "height" varchar, "weight" character varying, "generic_education" character varying, "generic_employment" varchar, "religious_views" varchar, "talents" varchar, "passions" varchar, "commitments" varchar, PRIMARY KEY ("id") , FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON UPDATE restrict ON DELETE restrict, UNIQUE ("id"));
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
CREATE TRIGGER "set_public_donor_disclosure_initial_updated_at"
BEFORE UPDATE ON "public"."donor_disclosure_initial"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_donor_disclosure_initial_updated_at" ON "public"."donor_disclosure_initial" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
