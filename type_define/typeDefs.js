import { gql } from 'apollo-server-express'
import { AuthorSchema, BookSchema, GerneSchema } from '../schemas/schema'

const typeDefs = gql`
  scalar Date
  type Book ${BookSchema}
  type Author ${AuthorSchema}
  type Gerne ${GerneSchema}
  #BELOW IS ROOT QUERY
  type Query {
    books: [Book]
    book(id: ID!): Book
    authors: [Author]
    author(id: ID!): Author
    gernes:[Gerne]
    gerne(id: ID!): Gerne
  }
  type Mutation{
    createAuthor(nameAuthor:String,age:Int):Author,  
    createBook(
    name: String,
    authorId: ID!,
    gerneId:ID!,
    gerne:String):Book,
    createGerne(
    gerne:String!
  ):Gerne
  },
 
`
export default typeDefs
