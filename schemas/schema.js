// import { makeExecutableSchema } from '@graphql-tools/schema'
// import resolvers from '../resolvers/resolvers'
// import typeDefs from '../type_define/typeDefs'

// const schema = makeExecutableSchema({
//     typeDefs,
//     resolvers,
// })

// export default schema

export const BookSchema = `{
    id: ID!
    name: String
    authorId: ID
    gerneId:ID
    gerne: Gerne
    author: Author
  }`

export const AuthorSchema = `
{
  id: ID!
  nameAuthor: String
  age:Int
  books: [Book]
}`

export const GerneSchema = `{
    id: ID!
    gerne: String
    books: [Book]
  }`
