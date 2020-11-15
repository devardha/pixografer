import dbConnect from '../utils/dbConnect'

export const resolvers = {
    Query: {
        async viewer(_parent, _args, _context, _info) {
            await dbConnect()
            return { id: 1, name: 'John Smith', status: 'cached' }
        },
    },
}