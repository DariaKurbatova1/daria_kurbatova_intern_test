export const typeDefs = /* GraphQL */ `
  input CreateSomethingInput {
    name: String!
  }

  type Something {
    id: ID!
    name: String!
  }

  type Mutation {
    createSomething(input: CreateSomethingInput!): Something!
  }

  type Query {
    hello: String,
    getTodo(id: ID!): Todo
  }
  
  input CreateTodoInput {
    title: String!
  }
  
  type Todo {
    id: ID!
    title: String!
    completed: Boolean!
    createdAt: String!
    updatedAt: String!
  }
  
  type Mutation {
    createTodo(input: CreateTodoInput!): Todo!
  }
`;
