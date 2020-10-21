function hasuraUpsert(user, context, callback) {
  const userId = user.user_id;
  const nickname = user.nickname;

  const admin_secret = configuration.ADMIN_SECRET;
  const url = configuration.HASURA_GRAPHQL_URL;
  const query = `
mutation($userId: String!, $nickname: String) {
  insert_user_one(
		object: {
      auth0_id: $userId,
      name: $nickname
  	}
  	on_conflict: {
			constraint: users_auth0_id_key,
			update_columns: [last_seen_at, name]
		}
  ) {
		id
	}
}`;
  const variables = { userId: userId, nickname: nickname };
  const post = {
    url: url,
    headers: {
      "content-type": "application/json",
      "x-hasura-admin-secret": admin_secret,
    },
    body: JSON.stringify({
      query: query,
      variables: variables,
    }),
  };
  request.post(post, (error, response, body) => {
    const uuid = JSON.parse(body).data.insert_user_one.id;
    context.accessToken["https://hasura.io/jwt/claims"] = {
      "x-hasura-default-role": "user",
      "x-hasura-allowed-roles": ["user"],
      "x-hasura-user-id": uuid,
    };
    context.idToken.user = uuid;
    callback(null, user, context);
  });
}
