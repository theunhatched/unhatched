CREATE FUNCTION public.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$;
CREATE TABLE public.disclosure (
    disclosure_id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    user_id uuid NOT NULL,
    birthdate character varying,
    ethnicity character varying,
    eye_color character varying,
    hair_color character varying,
    height character varying,
    weight character varying,
    education character varying,
    employment character varying,
    religion character varying,
    talents character varying,
    passions character varying,
    commitments character varying,
    photo_album character varying,
    detailed_ethnicity character varying,
    detailed_employment character varying,
    detailed_talents character varying,
    detailed_passions character varying,
    detailed_commitments character varying,
    philosophical_views character varying,
    religious_views character varying,
    life_milestones character varying,
    achievements character varying,
    circle_of_friends character varying,
    genetic_reports character varying,
    physiological_reports character varying,
    letters_of_recommendation character varying
);
CREATE VIEW public.disclosure_complete AS
 SELECT disclosure.disclosure_id,
    disclosure.created_at,
    disclosure.updated_at,
    disclosure.user_id,
    disclosure.genetic_reports,
    disclosure.physiological_reports,
    disclosure.letters_of_recommendation
   FROM public.disclosure;
CREATE VIEW public.disclosure_initial AS
 SELECT disclosure.disclosure_id,
    disclosure.created_at,
    disclosure.updated_at,
    disclosure.user_id,
    disclosure.birthdate,
    disclosure.ethnicity,
    disclosure.eye_color,
    disclosure.hair_color,
    disclosure.height,
    disclosure.weight,
    disclosure.education,
    disclosure.employment,
    disclosure.religion,
    disclosure.talents,
    disclosure.passions,
    disclosure.commitments
   FROM public.disclosure;
CREATE VIEW public.disclosure_partial AS
 SELECT disclosure.disclosure_id,
    disclosure.created_at,
    disclosure.updated_at,
    disclosure.user_id,
    disclosure.photo_album,
    disclosure.detailed_ethnicity,
    disclosure.detailed_employment,
    disclosure.detailed_talents,
    disclosure.detailed_passions,
    disclosure.detailed_commitments,
    disclosure.philosophical_views,
    disclosure.religious_views,
    disclosure.life_milestones,
    disclosure.achievements,
    disclosure.circle_of_friends
   FROM public.disclosure;
CREATE TABLE public."user" (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    last_seen_at timestamp with time zone DEFAULT now() NOT NULL,
    name character varying NOT NULL,
    auth0_id text
);
ALTER TABLE ONLY public.disclosure
    ADD CONSTRAINT disclosure_pkey PRIMARY KEY (disclosure_id);
ALTER TABLE ONLY public."user"
    ADD CONSTRAINT users_auth0_id_key UNIQUE (auth0_id);
ALTER TABLE ONLY public."user"
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
CREATE TRIGGER set_public_disclosure_updated_at BEFORE UPDATE ON public.disclosure FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_disclosure_updated_at ON public.disclosure IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_users_updated_at BEFORE UPDATE ON public."user" FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_users_updated_at ON public."user" IS 'trigger to set value of column "updated_at" to current timestamp on row update';
ALTER TABLE ONLY public.disclosure
    ADD CONSTRAINT disclosure_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
