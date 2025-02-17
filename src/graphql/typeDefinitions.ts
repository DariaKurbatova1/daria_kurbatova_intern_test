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
    createTodo(input: CreateTodoInput!): Todo!
    updateTodoCompletion(input: UpdateTodoCompletionInput!): Todo!
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
  input UpdateTodoCompletionInput {
    id: ID!
    completed: Boolean!
  }
  
`;
