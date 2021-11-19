import Authors from '../models/author.model'
import Gernes from '../models/gerne.model'
/*
_ : parent
__ : args
___ : context
____ : info
*/
const resolvers = {
    Query: {
        books: async (_, __, { mongoMethods }) => await mongoMethods.getAllBooks(),
        authors: async (_, __, { mongoMethods }) => await mongoMethods.getAllAuthors(),
        gernes: async (_, __, { mongoMethods }) => await mongoMethods.getAllGernes(),
        book: async (_, { id }, { mongoMethods }) => await mongoMethods.getSingleBook(id),
        author: async (_, { id }) => await Authors.findById(id),
        gerne: async (_, { id }) => await Gernes.findById(id),
    },
    Book: {
        author: async (parent, __, { mongoMethods }) => await mongoMethods.getSingleAuthor(parent.authorId),
        gerne: async (parent, __, { mongoMethods }) => await mongoMethods.getSingleGerne(parent.gerneId),
    },
    Author: {
        books: async (parent, args, { mongoMethods }) => await mongoMethods.getManyBooksFromAuthor(parent._id),
    },
    Gerne: {
        books: async (parent, args, { mongoMethods }) => await mongoMethods.getManyBooksFromGerne(parent._id),
    },
    Mutation: {
        createAuthor: async (parent, args, { mongoMethods }) => await mongoMethods.createAuthor(args),
        createBook: async (parent, args, { mongoMethods }) => await mongoMethods.createBook(args),
        createGerne: async (parent, args, { mongoMethods }) => await mongoMethods.createGerne(args),
    },
}

export default resolvers
