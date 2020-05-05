defmodule Unhatched.Repo do
  use Ecto.Repo,
    otp_app: :unhatched,
    adapter: Ecto.Adapters.Postgres
end
