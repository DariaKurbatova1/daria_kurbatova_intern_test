import { type QueryResolvers as IQuery } from "./generated/graphql";
import { Context } from "./context";

export const Query: IQuery<Context> = {
  hello: () => "world",

  getTodo: async (_, { id }, { prisma }) => {
    const todo = await prisma.todo.findUnique({
      where: {id},
    });
    if (!todo){
      throw new Error("Todo not found")
    }
    return {
      id: todo.id,
      title: todo.title,
      completed: todo.completed,
      createdAt: todo.createdAt.toISOString(),
      updatedAt: todo.updatedAt.toISOString(),
    }
  },

  getTodos: async (_, __, { prisma }) => {
    const todos = await prisma.todo.findMany();
    return todos.map(todo => ({
      id: todo.id,
      title: todo.title,
      completed: todo.completed,
      createdAt: todo.createdAt.toISOString(),
      updatedAt: todo.updatedAt.toISOString(),
    }));
  },

  getTodosByCompletion: async(_, {completed}, { prisma}) => {
    if (typeof completed !== 'boolean'){
      throw new Error('Completion status must be of type boolean.');
    }
    const todos = await prisma.todo.findMany({
      where: {completed: completed}
    });
    return todos.map(todo => ({
      id: todo.id,
      title: todo.title,
      completed: todo.completed,
      createdAt: todo.createdAt.toISOString(),
      updatedAt: todo.updatedAt.toISOString(),
    }));
  }
}