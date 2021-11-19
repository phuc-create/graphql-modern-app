const authors = [
    { id: 1, nameAuthor: 'Steven Joly' },
    { id: 2, nameAuthor: 'Roxan Davinci' },
    { id: 3, nameAuthor: 'Alexander David' },
    { id: 4, nameAuthor: 'Michali Kay' },
]
const gernes = [
    {
        id: 1,
        type: 'Drama',
    },
    {
        id: 2,
        type: 'Cartoon',
    },
    {
        id: 3,
        type: 'Novel',
    },
    {
        id: 4,
        type: 'Mirror',
    },
    {
        id: 5,
        type: 'Romantic',
    },
]
const books = [
    {
        id: 1,
        name: 'Beyond the sea',
        g: 2,
        authorId: 1,
    },
    {
        id: 2,
        name: 'What your name Phuc ???',
        g: 3,
        authorId: 2,
    },
    {
        id: 3,
        name: 'The World',
        g: 1,
        authorId: 1,
    },
    {
        id: 4,
        name: 'When you say Sorry',
        g: 4,
        authorId: 3,
    },
    {
        id: 5,
        name: 'Harry Poter in outside ',
        g: 3,
        authorId: 3,
    },
    {
        id: 6,
        name: 'Make it easy',
        g: 2,
        authorId: 4,
    },
    {
        id: 7,
        name: 'Don\'t forget to clean the house',
        g: 4,
        authorId: 4,
    },
    {
        id: 8,
        name: 'World War III',
        g: 1,
        authorId: 1,
    },
    {
        id: 9,
        name: 'Hello World',
        g: 1,
        authorId: 2,
    },
]

module.exports = { books, authors, gernes }
