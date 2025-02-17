import { type QueryResolvers as IQuery } from './generated/graphql';
import { Context } from './context';

export const Query: IQuery<Context> = {
  hello: () => 'world',

  getTodo: async (_, { id }, { prisma }) => {
    const todo = await prisma.todo.findUnique({
      where: {id},
    });
    if (!todo){
      throw new Error('Todo not found')
    }
    return {
      id: todo.id,
      title: todo.title,
      completed: todo.completed,
      createdAt: todo.createdAt.toISOString(),
      updatedAt: todo.updatedAt.toISOString(),
    }
  },

  getTodos: async (_, { pagination }, { prisma }) => {
    //if pagination inputs are not provided, show all results
    const page = pagination?.page ?? 1;
    const limit = pagination?.limit ?? Number.MAX_SAFE_INTEGER;
    const todos = await prisma.todo.findMany({
      skip: (page - 1) * limit,
      take: limit,
      orderBy: {
        createdAt: 'asc',
      },
    });
    return todos.map(todo => ({
      id: todo.id,
      title: todo.title,
      completed: todo.completed,
      createdAt: todo.createdAt.toISOString(),
      updatedAt: todo.updatedAt.toISOString(),
    }));
  },
  getCompletedTodos: async (_, { pagination }, { prisma }) => {
    const page = pagination?.page ?? 1;
    const limit = pagination?.limit ?? Number.MAX_SAFE_INTEGER;
    const todos = await prisma.todo.findMany({
      where: {completed: true},
      skip: (page - 1) * limit,
      take: limit,
      orderBy: {
        createdAt: 'asc',
      },
    });
    return todos.map(todo => ({
      id: todo.id,
      title: todo.title,
      completed: todo.completed,
      createdAt: todo.createdAt.toISOString(),
      updatedAt: todo.updatedAt.toISOString(),
    }));
  },
  getIncompleteTodos: async (_, { pagination }, { prisma }) => {
    const page = pagination?.page ?? 1;
    const limit = pagination?.limit ?? Number.MAX_SAFE_INTEGER;
    const todos = await prisma.todo.findMany({
      where: {completed: false},
      skip: (page - 1) * limit,
      take: limit,
      orderBy: {
        createdAt: 'asc',
      },
    });
    return todos.map(todo => ({
      id: todo.id,
      title: todo.title,
      completed: todo.completed,
      createdAt: todo.createdAt.toISOString(),
      updatedAt: todo.updatedAt.toISOString(),
    }));
  },

  getTodosByCompletion: async(_, {completed, pagination}, { prisma}) => {
    if (typeof completed !== 'boolean'){
      throw new Error('Completion status must be of type boolean.');
    }
    const page = pagination?.page ?? 1;
    const limit = pagination?.limit ?? Number.MAX_SAFE_INTEGER;
    const todos = await prisma.todo.findMany({
      where: {completed: completed},
      skip: (page - 1) * limit,
      take: limit,
      orderBy: {
        createdAt: 'asc',
      },
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