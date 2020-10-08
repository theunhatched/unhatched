alter table "public"."donors"
           add constraint "donors_user_id_fkey"
           foreign key ("user_id")
           references "public"."users"
           ("id") on update restrict on delete restrict;
