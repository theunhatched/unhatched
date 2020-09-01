import { gql, ApolloServer } from 'apollo-server-micro'
import Cors from 'micro-cors'
import db from '../../lib/db'

const typeDefs = gql`
  type Query {
    donors(first: Int = 25, skip: Int = 0): [Donors!]!
  }

  type Donors {
    id: ID!
    name: String!
  }
`

const resolvers = {
  Query: {
    donors: (_parent, args, _context) => {
      return db
        .select('*')
        .from('donors')
        .orderBy('name', 'asc')
        .limit(Math.min(args.first, 10))
        .offset(args.skip)
    },
  },

  Donors: {
    id: (donors, _args, _context) => donors.id,
  },
}

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
})

const handler = apolloServer.createHandler({ path: '/api/graphql' })

export const config = {
  api: {
    bodyParser: false,
  },
}

export default Cors({
  allowMethods: ['GET', 'POST', 'OPTIONS'],
})(handler)
