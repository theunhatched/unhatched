# Loaded when the app starts, rather than it's built (as prod.exs)
import Config

IO.puts("CONFIGURED WITH #{__ENV__.file}")

config :unhatched_web, UnhatchedWeb.Endpoint,
  # secret_key_base: System.get_env("SECRET_KEY_BASE") || "hunter2",
  secret_key_base: "uhOR2UDWkrHsU2cm8wiOq47LvAqLtBSzZ/sInPZcOezOPNeOpxlhAN/8syCOBISF",
  http: [
    port: String.to_integer(System.get_env("PORT") || "4000"),
    transport_options: [socket_opts: [:inet6]]
  ],
  server: true
