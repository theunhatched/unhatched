# This file is responsible for configuring your umbrella
# and **all applications** and their dependencies with the
# help of Mix.Config.
#
# Note that all applications in your umbrella share the
# same configuration and dependencies, which is why they
# all use the same configuration file. If you want different
# configurations or dependencies per app, it is best to
# move said applications out of the umbrella.
use Mix.Config

config :unhatched_web,
  generators: [context_app: :unhatched]

# Configures the endpoint
config :unhatched_web, UnhatchedWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "uhOR2UDWkrHsU2cm8wiOq47LvAqLtBSzZ/sInPZcOezOPNeOpxlhAN/8syCOBISF",
  render_errors: [view: UnhatchedWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: UnhatchedWeb.PubSub, adapter: Phoenix.PubSub.PG2],
  live_view: [signing_salt: "KNWWsNG8"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
