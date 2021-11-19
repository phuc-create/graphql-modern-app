import Authors from '../models/author.model'
import Books from '../models/book.model'
import Gernes from '../models/gerne.model'

const mongoMethods = {
    getAllBooks: async () => await Books.find(),
    getAllAuthors: async () => await Authors.find(),
    getAllGernes: async () => await Gernes.find(),
    getSingleBook: async (args) => await Books.findById(args),
    getSingleAuthor: async (args) => await Authors.findById(args),
    getSingleGerne: async (args) => await Gernes.findById(args),
    getManyBooksFromGerne: async (args) => await Books.find({ gerneId: args }),
    getManyBooksFromAuthor: async (args) => await Books.find({ authorId: args }),
    createBook: async (args) => {
        const newBook = new Books(args)
        return await newBook.save()
    },
    createAuthor: async (args) => {
        const newAuthor = new Authors(args)
        return await newAuthor.save()
    },
    createGerne: async (args) => {
        const newGerne = new Gernes(args)
        return await newGerne.save()
    },
}
export default mongoMethods
