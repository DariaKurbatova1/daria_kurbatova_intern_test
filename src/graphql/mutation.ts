import { type MutationResolvers as IMutation } from './generated/graphql';
import { Context } from './context';

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
    if (!input.title || typeof input.title !== 'string'){
      throw new Error('Title input is required and must be a string.')
    }
    let dueDate = null;
    //if dueDate is specified, format it correctly
    if (input.dueDate){
      const formattedDate = new Date(input.dueDate)
      if(isNaN(formattedDate.getTime())){
        throw new Error('Invalid due date format, must be ISO String');
      }
      dueDate = formattedDate.toISOString();
    }
    const todo = await prisma.todo.create({
      data:  {
        title: input.title,
        completed: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        dueDate: dueDate,
      }
    });
    return {
      id: todo.id,
      title: todo.title,
      completed: todo.completed,
      createdAt: todo.createdAt.toISOString(),
      updatedAt: todo.updatedAt.toISOString(),
      dueDate: todo.dueDate? todo.dueDate.toISOString() : null,
    };
  },
  updateTodoCompletion: async(_, { input }, { prisma }) => {
    if (!input.completed || typeof input.completed !== 'boolean'){
      throw new Error('Completion status input is required and must be a boolean.')
    }
    const {id, completed} = input;
    let todo = await prisma.todo.findUnique({
      where: {id},
    });
    if (!todo){
      throw new Error('Todo not found')
    }
    todo = await prisma.todo.update({
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
    if (!input.id || typeof input.id !== 'string' 
      || !input.title || typeof input.title !== 'string'){
      throw new Error('Todo id and title are required and must be strings.')
    }
    const {id, title} = input;
    let todo = await prisma.todo.findUnique({
      where: {id},
    });
    if (!todo){
      throw new Error('Todo not found')
    }
    todo = await prisma.todo.update({
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
  },

  deleteTodo: async(_, { input }, { prisma }) => {
    
    if (!input.id || typeof input.id !== 'string'){
      throw new Error('Todo id and title are required and must be strings.')
    }
    const {id} = input;
    let todo = await prisma.todo.findUnique({
      where: {id},
    });
    if (!todo){
      throw new Error('Todo not found')
    }
    todo = await prisma.todo.delete({
      where: {id}
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
