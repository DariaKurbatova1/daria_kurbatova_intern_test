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
    updateTodoTitle(input: UpdateTodoTitleInput!): Todo!
    deleteTodo(input: DeleteTodoInput!): Todo!
  }

  type Query {
    hello: String,
    getTodo(id: ID!): Todo,
    getTodos(pagination: PaginationInput): [Todo!],
    getTodosByCompletion(completed: Boolean!, pagination: PaginationInput): [Todo!],
    getCompletedTodos(pagination: PaginationInput): [Todo!],
    getIncompleteTodos(pagination: PaginationInput): [Todo!],
    getOverdueTodos(pagination: PaginationInput): [Todo!],
    getUpcomingTodos(pagination: PaginationInput): [Todo!],
  }
  
  input CreateTodoInput {
    title: String!
    dueDate: String
  }
  input DeleteTodoInput {
    id: String!
  }
  
  type Todo {
    id: ID!
    title: String!
    completed: Boolean!
    createdAt: String!
    updatedAt: String!
    dueDate: String
  }
  input UpdateTodoCompletionInput {
    id: ID!
    completed: Boolean!
  }
  input UpdateTodoTitleInput {
    id: ID!
    title: String!
  }
  input PaginationInput {
    page: Int!
    limit: Int!
  }
  
`;
