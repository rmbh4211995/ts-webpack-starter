import { getUsers } from '../../prisma/queries'

export const resolvers = {
  Query: {
    users: () => getUsers(),
  },
}
