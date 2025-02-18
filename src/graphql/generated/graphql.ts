import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateSomethingInput = {
  name: Scalars['String']['input'];
};

export type CreateTodoInput = {
  dueDate?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type DeleteTodoInput = {
  id: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createSomething: Something;
  createTodo: Todo;
  deleteTodo: Todo;
  updateTodoCompletion: Todo;
  updateTodoTitle: Todo;
};


export type MutationCreateSomethingArgs = {
  input: CreateSomethingInput;
};


export type MutationCreateTodoArgs = {
  input: CreateTodoInput;
};


export type MutationDeleteTodoArgs = {
  input: DeleteTodoInput;
};


export type MutationUpdateTodoCompletionArgs = {
  input: UpdateTodoCompletionInput;
};


export type MutationUpdateTodoTitleArgs = {
  input: UpdateTodoTitleInput;
};

export type PaginationInput = {
  limit: Scalars['Int']['input'];
  page: Scalars['Int']['input'];
};

export type Query = {
  __typename?: 'Query';
  getCompletedTodos?: Maybe<Array<Todo>>;
  getIncompleteTodos?: Maybe<Array<Todo>>;
  getOverdueTodos?: Maybe<Array<Todo>>;
  getTodo?: Maybe<Todo>;
  getTodos?: Maybe<Array<Todo>>;
  getTodosByCompletion?: Maybe<Array<Todo>>;
  getUpcomingTodos?: Maybe<Array<Todo>>;
  hello?: Maybe<Scalars['String']['output']>;
};


export type QueryGetCompletedTodosArgs = {
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryGetIncompleteTodosArgs = {
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryGetOverdueTodosArgs = {
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryGetTodoArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetTodosArgs = {
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryGetTodosByCompletionArgs = {
  completed: Scalars['Boolean']['input'];
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryGetUpcomingTodosArgs = {
  pagination?: InputMaybe<PaginationInput>;
};

export type Something = {
  __typename?: 'Something';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Todo = {
  __typename?: 'Todo';
  completed: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  dueDate?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type UpdateTodoCompletionInput = {
  completed: Scalars['Boolean']['input'];
  id: Scalars['ID']['input'];
};

export type UpdateTodoTitleInput = {
  id: Scalars['ID']['input'];
  title: Scalars['String']['input'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CreateSomethingInput: CreateSomethingInput;
  CreateTodoInput: CreateTodoInput;
  DeleteTodoInput: DeleteTodoInput;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  PaginationInput: PaginationInput;
  Query: ResolverTypeWrapper<{}>;
  Something: ResolverTypeWrapper<Something>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Todo: ResolverTypeWrapper<Todo>;
  UpdateTodoCompletionInput: UpdateTodoCompletionInput;
  UpdateTodoTitleInput: UpdateTodoTitleInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  CreateSomethingInput: CreateSomethingInput;
  CreateTodoInput: CreateTodoInput;
  DeleteTodoInput: DeleteTodoInput;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Mutation: {};
  PaginationInput: PaginationInput;
  Query: {};
  Something: Something;
  String: Scalars['String']['output'];
  Todo: Todo;
  UpdateTodoCompletionInput: UpdateTodoCompletionInput;
  UpdateTodoTitleInput: UpdateTodoTitleInput;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createSomething?: Resolver<ResolversTypes['Something'], ParentType, ContextType, RequireFields<MutationCreateSomethingArgs, 'input'>>;
  createTodo?: Resolver<ResolversTypes['Todo'], ParentType, ContextType, RequireFields<MutationCreateTodoArgs, 'input'>>;
  deleteTodo?: Resolver<ResolversTypes['Todo'], ParentType, ContextType, RequireFields<MutationDeleteTodoArgs, 'input'>>;
  updateTodoCompletion?: Resolver<ResolversTypes['Todo'], ParentType, ContextType, RequireFields<MutationUpdateTodoCompletionArgs, 'input'>>;
  updateTodoTitle?: Resolver<ResolversTypes['Todo'], ParentType, ContextType, RequireFields<MutationUpdateTodoTitleArgs, 'input'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getCompletedTodos?: Resolver<Maybe<Array<ResolversTypes['Todo']>>, ParentType, ContextType, Partial<QueryGetCompletedTodosArgs>>;
  getIncompleteTodos?: Resolver<Maybe<Array<ResolversTypes['Todo']>>, ParentType, ContextType, Partial<QueryGetIncompleteTodosArgs>>;
  getOverdueTodos?: Resolver<Maybe<Array<ResolversTypes['Todo']>>, ParentType, ContextType, Partial<QueryGetOverdueTodosArgs>>;
  getTodo?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType, RequireFields<QueryGetTodoArgs, 'id'>>;
  getTodos?: Resolver<Maybe<Array<ResolversTypes['Todo']>>, ParentType, ContextType, Partial<QueryGetTodosArgs>>;
  getTodosByCompletion?: Resolver<Maybe<Array<ResolversTypes['Todo']>>, ParentType, ContextType, RequireFields<QueryGetTodosByCompletionArgs, 'completed'>>;
  getUpcomingTodos?: Resolver<Maybe<Array<ResolversTypes['Todo']>>, ParentType, ContextType, Partial<QueryGetUpcomingTodosArgs>>;
  hello?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type SomethingResolvers<ContextType = any, ParentType extends ResolversParentTypes['Something'] = ResolversParentTypes['Something']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TodoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Todo'] = ResolversParentTypes['Todo']> = {
  completed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dueDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Something?: SomethingResolvers<ContextType>;
  Todo?: TodoResolvers<ContextType>;
};

