FROM elixir:1.9.1-alpine as build

ENV MIX_ENV=prod

WORKDIR /build

RUN apk add --update git build-base nodejs npm python
RUN mix local.hex --force
RUN mix local.rebar --force

ENV MIX_ENV=prod

COPY mix.exs mix.lock config/ ./
COPY apps/unhatched_web/mix.exs ./apps/unhatched_web/
# COPY apps/database/mix.exs ./apps/database/

RUN mix deps.get --only prod
RUN mix deps.compile

COPY . .

RUN npm run deploy --prefix apps/unhatched_web/assets
RUN cd apps/unhatched_web && mix phx.digest

RUN mix release

FROM elixir:1.9.1-alpine

RUN addgroup -S release && \
    adduser -S -G release release && \
    mkdir /release && \
    chown -R release: /release

WORKDIR /release

COPY --from=build --chown=release:release /build/_build/prod/rel/unhatched_umbrella .

USER release
EXPOSE 4000

CMD ["bin/unhatched_umbrella", "start"]
