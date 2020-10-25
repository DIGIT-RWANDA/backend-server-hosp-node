const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')

var schema = buildSchema(`
  type Query {
    hello: String
    createDoctor: String
    getDoctors: [Doctor]
  },
  type Doctor {
    id: String!
    name: String!
  }
`)

const app = express()

const root = {
  hello: () => {
    return 'Hello world!';
  },
  getDoctors: () => {

  },
  createDoctor: () => {

    return 'Doctor created'
  },
  updatedDoctor: (id: string) => {
    return id
  },
  deleteDoctor: () => {

  }
};

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  }),
)

app.listen(4000)
console.log('Listening to port 4000');
