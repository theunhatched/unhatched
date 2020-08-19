import { gql, ApolloServer } from 'apollo-server-micro'
import Cors from 'micro-cors'
import db from '../../lib/db'

const typeDefs = gql`
  type Query {
    bepis(first: Int = 25, skip: Int = 0): [Bepis!]!
  }

  type Bepis {
    id: ID!
    name: String!
    description: String!
  }
`

const resolvers = {
  Query: {
    bepis: (_parent, args, _context) => {
      return db
        .select('*')
        .from('bepis')
        .orderBy('name', 'asc')
        .limit(Math.min(args.first, 10))
        .offset(args.skip)
    },
  },

  Bepis: {
    id: (bepis, _args, _context) => bepis.id,
  },
}

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
})

const handler = apolloServer.createHandler({ path: '/api/db' })

export const config = {
  api: {
    bodyParser: false,
  },
}

export default Cors({
  allowMethods: ['GET', 'POST', 'OPTIONS'],
})(handler)
