import { type MutationResolvers as IMutation } from "./generated/graphql";
import { Context } from "./context";

export const Mutation: IMutation<Context> = {
  createSomething: async (_, { input }, { prisma }) => {
    const something = await prisma.something.create({
      data: {
        name: input.name,
      },
    });

    return {
      id: something.id,
      name: something.name,
    };
  },
  createTodo: async (_, { input }, { prisma }) => {
    const todo = await prisma.todo.create({
      data:  {
        title: input.title,
        completed: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
    });
    return {
      id: todo.id,
      title: todo.title,
      completed: todo.completed,
      createdAt: todo.createdAt.toISOString(),
      updatedAt: todo.updatedAt.toISOString(),
    };
  },
  updateTodoCompletion: async(_, { input }, { prisma }) => {
    const {id, completed} = input;
    const todo = await prisma.todo.update({
      where: {id},
      data: {
        completed,
        updatedAt: new Date().toISOString(),
      }
    });
    return {
      id: todo.id,
      title: todo.title,
      completed: todo.completed,
      createdAt: todo.createdAt.toISOString(),
      updatedAt: todo.updatedAt.toISOString(),
    };
  },
  updateTodoTitle: async(_, { input }, { prisma }) => {
    const {id, title} = input;
    const todo = await prisma.todo.update({
      where: {id},
      data: {
        title,
        updatedAt: new Date().toISOString(),
      }
    });
    return {
      id: todo.id,
      title: todo.title,
      completed: todo.completed,
      createdAt: todo.createdAt.toISOString(),
      updatedAt: todo.updatedAt.toISOString(),
    };
  }
};
