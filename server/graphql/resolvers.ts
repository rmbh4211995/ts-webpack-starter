import { getUsers } from '../../prisma/index'

export const resolvers = {
  Query: {
    users: () => getUsers(),
  },
}
