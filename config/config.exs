# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :unhatched,
  ecto_repos: [Unhatched.Repo]

# Configures the endpoint
config :unhatched, UnhatchedWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "zFv3mRdoKg/xsSAw9PKVfHp0wJZOgh6n6unGRSMTqZRsn3cV3wmGx4F3I15q/Bh8",
  render_errors: [view: UnhatchedWeb.ErrorView, accepts: ~w(html json), layout: false],
  pubsub_server: Unhatched.PubSub,
  live_view: [signing_salt: "y/77Ta0H"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
