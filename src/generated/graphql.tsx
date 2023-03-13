/* eslint-disable */
import { GraphQLResolveInfo } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Cat = {
  __typename?: 'Cat';
  color?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  owner?: Maybe<Owner>;
  ownerId?: Maybe<Scalars['String']>;
};

export type CatInput = {
  color?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  ownerId?: InputMaybe<Scalars['String']>;
};

export type Dog = {
  __typename?: 'Dog';
  breed: Scalars['String'];
  gender: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  owner?: Maybe<Owner>;
  ownerId?: Maybe<Scalars['String']>;
};

export type DogInput = {
  breed: Scalars['String'];
  gender: Scalars['String'];
  name: Scalars['String'];
  ownerId?: InputMaybe<Scalars['String']>;
};

export type Elephant = {
  __typename?: 'Elephant';
  gender: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  owner?: Maybe<Owner>;
  ownerId?: Maybe<Scalars['String']>;
  trunkLength: Scalars['Float'];
};

export type ElephantInput = {
  gender: Scalars['String'];
  name: Scalars['String'];
  ownerId?: InputMaybe<Scalars['String']>;
  trunkLength: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCat: Cat;
  createDog: Dog;
  createElephant: Elephant;
  createOwner: Owner;
  increaseOwnerAge: Owner;
};


export type MutationCreateCatArgs = {
  createCatInput: CatInput;
};


export type MutationCreateDogArgs = {
  createDogInput: DogInput;
};


export type MutationCreateElephantArgs = {
  createElephantInput: ElephantInput;
};


export type MutationCreateOwnerArgs = {
  createOwnerData: OwnerInput;
};


export type MutationIncreaseOwnerAgeArgs = {
  ownerId: Scalars['String'];
};

export type Owner = {
  __typename?: 'Owner';
  age?: Maybe<Scalars['Int']>;
  gender: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
};

export type OwnerInput = {
  age?: InputMaybe<Scalars['Int']>;
  gender: Scalars['String'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  cat: Cat;
  cats: Array<Cat>;
  dog: Dog;
  dogs: Array<Dog>;
  elephant: Elephant;
  elephants: Array<Elephant>;
  owner: Owner;
  owners: Array<Owner>;
};


export type QueryCatArgs = {
  name: Scalars['String'];
};


export type QueryDogArgs = {
  name: Scalars['String'];
};


export type QueryElephantArgs = {
  name: Scalars['String'];
};


export type QueryOwnerArgs = {
  name: Scalars['String'];
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
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Cat: ResolverTypeWrapper<Cat>;
  CatInput: CatInput;
  Dog: ResolverTypeWrapper<Dog>;
  DogInput: DogInput;
  Elephant: ResolverTypeWrapper<Elephant>;
  ElephantInput: ElephantInput;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  Owner: ResolverTypeWrapper<Owner>;
  OwnerInput: OwnerInput;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Cat: Cat;
  CatInput: CatInput;
  Dog: Dog;
  DogInput: DogInput;
  Elephant: Elephant;
  ElephantInput: ElephantInput;
  Float: Scalars['Float'];
  Int: Scalars['Int'];
  Mutation: {};
  Owner: Owner;
  OwnerInput: OwnerInput;
  Query: {};
  String: Scalars['String'];
};

export type CatResolvers<ContextType = any, ParentType extends ResolversParentTypes['Cat'] = ResolversParentTypes['Cat']> = {
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['Owner']>, ParentType, ContextType>;
  ownerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DogResolvers<ContextType = any, ParentType extends ResolversParentTypes['Dog'] = ResolversParentTypes['Dog']> = {
  breed?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gender?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['Owner']>, ParentType, ContextType>;
  ownerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ElephantResolvers<ContextType = any, ParentType extends ResolversParentTypes['Elephant'] = ResolversParentTypes['Elephant']> = {
  gender?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['Owner']>, ParentType, ContextType>;
  ownerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  trunkLength?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createCat?: Resolver<ResolversTypes['Cat'], ParentType, ContextType, RequireFields<MutationCreateCatArgs, 'createCatInput'>>;
  createDog?: Resolver<ResolversTypes['Dog'], ParentType, ContextType, RequireFields<MutationCreateDogArgs, 'createDogInput'>>;
  createElephant?: Resolver<ResolversTypes['Elephant'], ParentType, ContextType, RequireFields<MutationCreateElephantArgs, 'createElephantInput'>>;
  createOwner?: Resolver<ResolversTypes['Owner'], ParentType, ContextType, RequireFields<MutationCreateOwnerArgs, 'createOwnerData'>>;
  increaseOwnerAge?: Resolver<ResolversTypes['Owner'], ParentType, ContextType, RequireFields<MutationIncreaseOwnerAgeArgs, 'ownerId'>>;
};

export type OwnerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Owner'] = ResolversParentTypes['Owner']> = {
  age?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gender?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  cat?: Resolver<ResolversTypes['Cat'], ParentType, ContextType, RequireFields<QueryCatArgs, 'name'>>;
  cats?: Resolver<Array<ResolversTypes['Cat']>, ParentType, ContextType>;
  dog?: Resolver<ResolversTypes['Dog'], ParentType, ContextType, RequireFields<QueryDogArgs, 'name'>>;
  dogs?: Resolver<Array<ResolversTypes['Dog']>, ParentType, ContextType>;
  elephant?: Resolver<ResolversTypes['Elephant'], ParentType, ContextType, RequireFields<QueryElephantArgs, 'name'>>;
  elephants?: Resolver<Array<ResolversTypes['Elephant']>, ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Owner'], ParentType, ContextType, RequireFields<QueryOwnerArgs, 'name'>>;
  owners?: Resolver<Array<ResolversTypes['Owner']>, ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Cat?: CatResolvers<ContextType>;
  Dog?: DogResolvers<ContextType>;
  Elephant?: ElephantResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Owner?: OwnerResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};


export type CatQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type CatQuery = { __typename?: 'Query', cat: { __typename?: 'Cat', name: string, color?: string | null | undefined, owner?: { __typename?: 'Owner', name: string, gender: string, age?: number | null | undefined } | null | undefined } };

export type CatsQueryVariables = Exact<{ [key: string]: never; }>;


export type CatsQuery = { __typename?: 'Query', cats: Array<{ __typename?: 'Cat', name: string }> };

export type DogQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type DogQuery = { __typename?: 'Query', dog: { __typename?: 'Dog', name: string, breed: string, gender: string, owner?: { __typename?: 'Owner', name: string, gender: string, age?: number | null | undefined } | null | undefined } };

export type DogsQueryVariables = Exact<{ [key: string]: never; }>;


export type DogsQuery = { __typename?: 'Query', dogs: Array<{ __typename?: 'Dog', name: string }> };

export type ElephantQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type ElephantQuery = { __typename?: 'Query', elephant: { __typename?: 'Elephant', name: string, trunkLength: number, gender: string, owner?: { __typename?: 'Owner', name: string, gender: string, age?: number | null | undefined } | null | undefined } };

export type ElephantsQueryVariables = Exact<{ [key: string]: never; }>;


export type ElephantsQuery = { __typename?: 'Query', elephants: Array<{ __typename?: 'Elephant', name: string }> };

export type OwnerQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type OwnerQuery = { __typename?: 'Query', owner: { __typename?: 'Owner', name: string, age?: number | null | undefined, gender: string } };

export type OwnersQueryVariables = Exact<{ [key: string]: never; }>;


export type OwnersQuery = { __typename?: 'Query', owners: Array<{ __typename?: 'Owner', name: string }> };


export const CatDocument = gql`
    query Cat($name: String!) {
  cat(name: $name) {
    name
    color
    owner {
      name
      gender
      age
    }
  }
}
    `;

/**
 * __useCatQuery__
 *
 * To run a query within a React component, call `useCatQuery` and pass it any options that fit your needs.
 * When your component renders, `useCatQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCatQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCatQuery(baseOptions: Apollo.QueryHookOptions<CatQuery, CatQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CatQuery, CatQueryVariables>(CatDocument, options);
      }
export function useCatLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CatQuery, CatQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CatQuery, CatQueryVariables>(CatDocument, options);
        }
export type CatQueryHookResult = ReturnType<typeof useCatQuery>;
export type CatLazyQueryHookResult = ReturnType<typeof useCatLazyQuery>;
export type CatQueryResult = Apollo.QueryResult<CatQuery, CatQueryVariables>;
export function refetchCatQuery(variables: CatQueryVariables) {
      return { query: CatDocument, variables: variables }
    }
export const CatsDocument = gql`
    query Cats {
  cats {
    name
  }
}
    `;

/**
 * __useCatsQuery__
 *
 * To run a query within a React component, call `useCatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCatsQuery({
 *   variables: {
 *   },
 * });
 */
export function useCatsQuery(baseOptions?: Apollo.QueryHookOptions<CatsQuery, CatsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CatsQuery, CatsQueryVariables>(CatsDocument, options);
      }
export function useCatsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CatsQuery, CatsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CatsQuery, CatsQueryVariables>(CatsDocument, options);
        }
export type CatsQueryHookResult = ReturnType<typeof useCatsQuery>;
export type CatsLazyQueryHookResult = ReturnType<typeof useCatsLazyQuery>;
export type CatsQueryResult = Apollo.QueryResult<CatsQuery, CatsQueryVariables>;
export function refetchCatsQuery(variables?: CatsQueryVariables) {
      return { query: CatsDocument, variables: variables }
    }
export const DogDocument = gql`
    query Dog($name: String!) {
  dog(name: $name) {
    name
    breed
    gender
    owner {
      name
      gender
      age
    }
  }
}
    `;

/**
 * __useDogQuery__
 *
 * To run a query within a React component, call `useDogQuery` and pass it any options that fit your needs.
 * When your component renders, `useDogQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDogQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useDogQuery(baseOptions: Apollo.QueryHookOptions<DogQuery, DogQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DogQuery, DogQueryVariables>(DogDocument, options);
      }
export function useDogLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DogQuery, DogQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DogQuery, DogQueryVariables>(DogDocument, options);
        }
export type DogQueryHookResult = ReturnType<typeof useDogQuery>;
export type DogLazyQueryHookResult = ReturnType<typeof useDogLazyQuery>;
export type DogQueryResult = Apollo.QueryResult<DogQuery, DogQueryVariables>;
export function refetchDogQuery(variables: DogQueryVariables) {
      return { query: DogDocument, variables: variables }
    }
export const DogsDocument = gql`
    query Dogs {
  dogs {
    name
  }
}
    `;

/**
 * __useDogsQuery__
 *
 * To run a query within a React component, call `useDogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useDogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDogsQuery({
 *   variables: {
 *   },
 * });
 */
export function useDogsQuery(baseOptions?: Apollo.QueryHookOptions<DogsQuery, DogsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DogsQuery, DogsQueryVariables>(DogsDocument, options);
      }
export function useDogsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DogsQuery, DogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DogsQuery, DogsQueryVariables>(DogsDocument, options);
        }
export type DogsQueryHookResult = ReturnType<typeof useDogsQuery>;
export type DogsLazyQueryHookResult = ReturnType<typeof useDogsLazyQuery>;
export type DogsQueryResult = Apollo.QueryResult<DogsQuery, DogsQueryVariables>;
export function refetchDogsQuery(variables?: DogsQueryVariables) {
      return { query: DogsDocument, variables: variables }
    }
export const ElephantDocument = gql`
    query Elephant($name: String!) {
  elephant(name: $name) {
    name
    trunkLength
    gender
    owner {
      name
      gender
      age
    }
  }
}
    `;

/**
 * __useElephantQuery__
 *
 * To run a query within a React component, call `useElephantQuery` and pass it any options that fit your needs.
 * When your component renders, `useElephantQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useElephantQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useElephantQuery(baseOptions: Apollo.QueryHookOptions<ElephantQuery, ElephantQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ElephantQuery, ElephantQueryVariables>(ElephantDocument, options);
      }
export function useElephantLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ElephantQuery, ElephantQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ElephantQuery, ElephantQueryVariables>(ElephantDocument, options);
        }
export type ElephantQueryHookResult = ReturnType<typeof useElephantQuery>;
export type ElephantLazyQueryHookResult = ReturnType<typeof useElephantLazyQuery>;
export type ElephantQueryResult = Apollo.QueryResult<ElephantQuery, ElephantQueryVariables>;
export function refetchElephantQuery(variables: ElephantQueryVariables) {
      return { query: ElephantDocument, variables: variables }
    }
export const ElephantsDocument = gql`
    query Elephants {
  elephants {
    name
  }
}
    `;

/**
 * __useElephantsQuery__
 *
 * To run a query within a React component, call `useElephantsQuery` and pass it any options that fit your needs.
 * When your component renders, `useElephantsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useElephantsQuery({
 *   variables: {
 *   },
 * });
 */
export function useElephantsQuery(baseOptions?: Apollo.QueryHookOptions<ElephantsQuery, ElephantsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ElephantsQuery, ElephantsQueryVariables>(ElephantsDocument, options);
      }
export function useElephantsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ElephantsQuery, ElephantsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ElephantsQuery, ElephantsQueryVariables>(ElephantsDocument, options);
        }
export type ElephantsQueryHookResult = ReturnType<typeof useElephantsQuery>;
export type ElephantsLazyQueryHookResult = ReturnType<typeof useElephantsLazyQuery>;
export type ElephantsQueryResult = Apollo.QueryResult<ElephantsQuery, ElephantsQueryVariables>;
export function refetchElephantsQuery(variables?: ElephantsQueryVariables) {
      return { query: ElephantsDocument, variables: variables }
    }
export const OwnerDocument = gql`
    query Owner($name: String!) {
  owner(name: $name) {
    name
    age
    gender
  }
}
    `;

/**
 * __useOwnerQuery__
 *
 * To run a query within a React component, call `useOwnerQuery` and pass it any options that fit your needs.
 * When your component renders, `useOwnerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOwnerQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useOwnerQuery(baseOptions: Apollo.QueryHookOptions<OwnerQuery, OwnerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OwnerQuery, OwnerQueryVariables>(OwnerDocument, options);
      }
export function useOwnerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OwnerQuery, OwnerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OwnerQuery, OwnerQueryVariables>(OwnerDocument, options);
        }
export type OwnerQueryHookResult = ReturnType<typeof useOwnerQuery>;
export type OwnerLazyQueryHookResult = ReturnType<typeof useOwnerLazyQuery>;
export type OwnerQueryResult = Apollo.QueryResult<OwnerQuery, OwnerQueryVariables>;
export function refetchOwnerQuery(variables: OwnerQueryVariables) {
      return { query: OwnerDocument, variables: variables }
    }
export const OwnersDocument = gql`
    query Owners {
  owners {
    name
  }
}
    `;

/**
 * __useOwnersQuery__
 *
 * To run a query within a React component, call `useOwnersQuery` and pass it any options that fit your needs.
 * When your component renders, `useOwnersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOwnersQuery({
 *   variables: {
 *   },
 * });
 */
export function useOwnersQuery(baseOptions?: Apollo.QueryHookOptions<OwnersQuery, OwnersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OwnersQuery, OwnersQueryVariables>(OwnersDocument, options);
      }
export function useOwnersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OwnersQuery, OwnersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OwnersQuery, OwnersQueryVariables>(OwnersDocument, options);
        }
export type OwnersQueryHookResult = ReturnType<typeof useOwnersQuery>;
export type OwnersLazyQueryHookResult = ReturnType<typeof useOwnersLazyQuery>;
export type OwnersQueryResult = Apollo.QueryResult<OwnersQuery, OwnersQueryVariables>;
export function refetchOwnersQuery(variables?: OwnersQueryVariables) {
      return { query: OwnersDocument, variables: variables }
    }