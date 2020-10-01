function (user, context, callback) {
  const userId = user.user_id;
  const nickname = user.nickname;
  
  const admin_secret = configuration.ADMIN_SECRET;
  const url = configuration.HASURA_GRAPHQL_URL;
  console.log({admin_secret, url});
  const query = `mutation($userId: String!, $nickname: String) {
    insert_users(objects: [{
      id: $userId, name: $nickname
    }], on_conflict: {constraint: users_pkey, update_columns: [last_seen, name]}
    ) {
      affected_rows
    }
  }`;
  const variables = { "userId": userId, "nickname": nickname };
  const post = {
      url: url,
      headers: {'content-type' : 'application/json', 'x-hasura-admin-secret': admin_secret},
      body: JSON.stringify({
        query: query,
        variables: variables
      })
  };
  // console.log(post);
  request.post(post, function(error, response, body){
       console.log(body);
       callback(null, user, context);
  });
}