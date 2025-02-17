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
  }
}