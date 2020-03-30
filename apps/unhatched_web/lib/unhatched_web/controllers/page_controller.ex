defmodule UnhatchedWeb.PageController do
  use UnhatchedWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
