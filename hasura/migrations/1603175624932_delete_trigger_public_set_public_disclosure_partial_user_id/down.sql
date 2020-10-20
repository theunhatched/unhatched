CREATE TRIGGER "set_public_disclosure_partial_user_id"
BEFORE UPDATE ON "public"."disclosure_partial"
FOR EACH ROW EXECUTE FUNCTION set_current_timestamp_user_id();COMMENT ON TRIGGER "set_public_disclosure_partial_user_id" ON "public"."disclosure_partial"
IS E'trigger to set value of column "user_id" to current timestamp on row update';
