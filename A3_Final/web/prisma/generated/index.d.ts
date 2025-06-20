
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Pokemon
 * 
 */
export type Pokemon = $Result.DefaultSelection<Prisma.$PokemonPayload>
/**
 * Model PokemonBattle
 * 
 */
export type PokemonBattle = $Result.DefaultSelection<Prisma.$PokemonBattlePayload>
/**
 * Model Tournament
 * 
 */
export type Tournament = $Result.DefaultSelection<Prisma.$TournamentPayload>
/**
 * Model PokemonSkill
 * 
 */
export type PokemonSkill = $Result.DefaultSelection<Prisma.$PokemonSkillPayload>
/**
 * Model ArchivedBattles
 * 
 */
export type ArchivedBattles = $Result.DefaultSelection<Prisma.$ArchivedBattlesPayload>
/**
 * Model PokemonBattleHistory
 * 
 */
export type PokemonBattleHistory = $Result.DefaultSelection<Prisma.$PokemonBattleHistoryPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Pokemon
 * const pokemon = await prisma.pokemon.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Pokemon
   * const pokemon = await prisma.pokemon.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.pokemon`: Exposes CRUD operations for the **Pokemon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pokemon
    * const pokemon = await prisma.pokemon.findMany()
    * ```
    */
  get pokemon(): Prisma.PokemonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pokemonBattle`: Exposes CRUD operations for the **PokemonBattle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PokemonBattles
    * const pokemonBattles = await prisma.pokemonBattle.findMany()
    * ```
    */
  get pokemonBattle(): Prisma.PokemonBattleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tournament`: Exposes CRUD operations for the **Tournament** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tournaments
    * const tournaments = await prisma.tournament.findMany()
    * ```
    */
  get tournament(): Prisma.TournamentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pokemonSkill`: Exposes CRUD operations for the **PokemonSkill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PokemonSkills
    * const pokemonSkills = await prisma.pokemonSkill.findMany()
    * ```
    */
  get pokemonSkill(): Prisma.PokemonSkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.archivedBattles`: Exposes CRUD operations for the **ArchivedBattles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArchivedBattles
    * const archivedBattles = await prisma.archivedBattles.findMany()
    * ```
    */
  get archivedBattles(): Prisma.ArchivedBattlesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pokemonBattleHistory`: Exposes CRUD operations for the **PokemonBattleHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PokemonBattleHistories
    * const pokemonBattleHistories = await prisma.pokemonBattleHistory.findMany()
    * ```
    */
  get pokemonBattleHistory(): Prisma.PokemonBattleHistoryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Pokemon: 'Pokemon',
    PokemonBattle: 'PokemonBattle',
    Tournament: 'Tournament',
    PokemonSkill: 'PokemonSkill',
    ArchivedBattles: 'ArchivedBattles',
    PokemonBattleHistory: 'PokemonBattleHistory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "pokemon" | "pokemonBattle" | "tournament" | "pokemonSkill" | "archivedBattles" | "pokemonBattleHistory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Pokemon: {
        payload: Prisma.$PokemonPayload<ExtArgs>
        fields: Prisma.PokemonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PokemonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PokemonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>
          }
          findFirst: {
            args: Prisma.PokemonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PokemonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>
          }
          findMany: {
            args: Prisma.PokemonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>[]
          }
          create: {
            args: Prisma.PokemonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>
          }
          createMany: {
            args: Prisma.PokemonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PokemonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>[]
          }
          delete: {
            args: Prisma.PokemonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>
          }
          update: {
            args: Prisma.PokemonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>
          }
          deleteMany: {
            args: Prisma.PokemonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PokemonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PokemonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>[]
          }
          upsert: {
            args: Prisma.PokemonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>
          }
          aggregate: {
            args: Prisma.PokemonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePokemon>
          }
          groupBy: {
            args: Prisma.PokemonGroupByArgs<ExtArgs>
            result: $Utils.Optional<PokemonGroupByOutputType>[]
          }
          count: {
            args: Prisma.PokemonCountArgs<ExtArgs>
            result: $Utils.Optional<PokemonCountAggregateOutputType> | number
          }
        }
      }
      PokemonBattle: {
        payload: Prisma.$PokemonBattlePayload<ExtArgs>
        fields: Prisma.PokemonBattleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PokemonBattleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonBattlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PokemonBattleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonBattlePayload>
          }
          findFirst: {
            args: Prisma.PokemonBattleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonBattlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PokemonBattleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonBattlePayload>
          }
          findMany: {
            args: Prisma.PokemonBattleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonBattlePayload>[]
          }
          create: {
            args: Prisma.PokemonBattleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonBattlePayload>
          }
          createMany: {
            args: Prisma.PokemonBattleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PokemonBattleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonBattlePayload>[]
          }
          delete: {
            args: Prisma.PokemonBattleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonBattlePayload>
          }
          update: {
            args: Prisma.PokemonBattleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonBattlePayload>
          }
          deleteMany: {
            args: Prisma.PokemonBattleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PokemonBattleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PokemonBattleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonBattlePayload>[]
          }
          upsert: {
            args: Prisma.PokemonBattleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonBattlePayload>
          }
          aggregate: {
            args: Prisma.PokemonBattleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePokemonBattle>
          }
          groupBy: {
            args: Prisma.PokemonBattleGroupByArgs<ExtArgs>
            result: $Utils.Optional<PokemonBattleGroupByOutputType>[]
          }
          count: {
            args: Prisma.PokemonBattleCountArgs<ExtArgs>
            result: $Utils.Optional<PokemonBattleCountAggregateOutputType> | number
          }
        }
      }
      Tournament: {
        payload: Prisma.$TournamentPayload<ExtArgs>
        fields: Prisma.TournamentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TournamentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TournamentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          findFirst: {
            args: Prisma.TournamentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TournamentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          findMany: {
            args: Prisma.TournamentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>[]
          }
          create: {
            args: Prisma.TournamentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          createMany: {
            args: Prisma.TournamentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TournamentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>[]
          }
          delete: {
            args: Prisma.TournamentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          update: {
            args: Prisma.TournamentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          deleteMany: {
            args: Prisma.TournamentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TournamentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TournamentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>[]
          }
          upsert: {
            args: Prisma.TournamentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          aggregate: {
            args: Prisma.TournamentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTournament>
          }
          groupBy: {
            args: Prisma.TournamentGroupByArgs<ExtArgs>
            result: $Utils.Optional<TournamentGroupByOutputType>[]
          }
          count: {
            args: Prisma.TournamentCountArgs<ExtArgs>
            result: $Utils.Optional<TournamentCountAggregateOutputType> | number
          }
        }
      }
      PokemonSkill: {
        payload: Prisma.$PokemonSkillPayload<ExtArgs>
        fields: Prisma.PokemonSkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PokemonSkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonSkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PokemonSkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonSkillPayload>
          }
          findFirst: {
            args: Prisma.PokemonSkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonSkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PokemonSkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonSkillPayload>
          }
          findMany: {
            args: Prisma.PokemonSkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonSkillPayload>[]
          }
          create: {
            args: Prisma.PokemonSkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonSkillPayload>
          }
          createMany: {
            args: Prisma.PokemonSkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PokemonSkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonSkillPayload>[]
          }
          delete: {
            args: Prisma.PokemonSkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonSkillPayload>
          }
          update: {
            args: Prisma.PokemonSkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonSkillPayload>
          }
          deleteMany: {
            args: Prisma.PokemonSkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PokemonSkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PokemonSkillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonSkillPayload>[]
          }
          upsert: {
            args: Prisma.PokemonSkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonSkillPayload>
          }
          aggregate: {
            args: Prisma.PokemonSkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePokemonSkill>
          }
          groupBy: {
            args: Prisma.PokemonSkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<PokemonSkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.PokemonSkillCountArgs<ExtArgs>
            result: $Utils.Optional<PokemonSkillCountAggregateOutputType> | number
          }
        }
      }
      ArchivedBattles: {
        payload: Prisma.$ArchivedBattlesPayload<ExtArgs>
        fields: Prisma.ArchivedBattlesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArchivedBattlesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivedBattlesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArchivedBattlesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivedBattlesPayload>
          }
          findFirst: {
            args: Prisma.ArchivedBattlesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivedBattlesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArchivedBattlesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivedBattlesPayload>
          }
          findMany: {
            args: Prisma.ArchivedBattlesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivedBattlesPayload>[]
          }
          create: {
            args: Prisma.ArchivedBattlesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivedBattlesPayload>
          }
          createMany: {
            args: Prisma.ArchivedBattlesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArchivedBattlesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivedBattlesPayload>[]
          }
          delete: {
            args: Prisma.ArchivedBattlesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivedBattlesPayload>
          }
          update: {
            args: Prisma.ArchivedBattlesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivedBattlesPayload>
          }
          deleteMany: {
            args: Prisma.ArchivedBattlesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArchivedBattlesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArchivedBattlesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivedBattlesPayload>[]
          }
          upsert: {
            args: Prisma.ArchivedBattlesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivedBattlesPayload>
          }
          aggregate: {
            args: Prisma.ArchivedBattlesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArchivedBattles>
          }
          groupBy: {
            args: Prisma.ArchivedBattlesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArchivedBattlesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArchivedBattlesCountArgs<ExtArgs>
            result: $Utils.Optional<ArchivedBattlesCountAggregateOutputType> | number
          }
        }
      }
      PokemonBattleHistory: {
        payload: Prisma.$PokemonBattleHistoryPayload<ExtArgs>
        fields: Prisma.PokemonBattleHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PokemonBattleHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonBattleHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PokemonBattleHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonBattleHistoryPayload>
          }
          findFirst: {
            args: Prisma.PokemonBattleHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonBattleHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PokemonBattleHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonBattleHistoryPayload>
          }
          findMany: {
            args: Prisma.PokemonBattleHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonBattleHistoryPayload>[]
          }
          create: {
            args: Prisma.PokemonBattleHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonBattleHistoryPayload>
          }
          createMany: {
            args: Prisma.PokemonBattleHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PokemonBattleHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonBattleHistoryPayload>[]
          }
          delete: {
            args: Prisma.PokemonBattleHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonBattleHistoryPayload>
          }
          update: {
            args: Prisma.PokemonBattleHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonBattleHistoryPayload>
          }
          deleteMany: {
            args: Prisma.PokemonBattleHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PokemonBattleHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PokemonBattleHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonBattleHistoryPayload>[]
          }
          upsert: {
            args: Prisma.PokemonBattleHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonBattleHistoryPayload>
          }
          aggregate: {
            args: Prisma.PokemonBattleHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePokemonBattleHistory>
          }
          groupBy: {
            args: Prisma.PokemonBattleHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<PokemonBattleHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.PokemonBattleHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<PokemonBattleHistoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    pokemon?: PokemonOmit
    pokemonBattle?: PokemonBattleOmit
    tournament?: TournamentOmit
    pokemonSkill?: PokemonSkillOmit
    archivedBattles?: ArchivedBattlesOmit
    pokemonBattleHistory?: PokemonBattleHistoryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PokemonCountOutputType
   */

  export type PokemonCountOutputType = {
    battlesAsP1: number
    battlesAsP2: number
    battlesWon: number
  }

  export type PokemonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    battlesAsP1?: boolean | PokemonCountOutputTypeCountBattlesAsP1Args
    battlesAsP2?: boolean | PokemonCountOutputTypeCountBattlesAsP2Args
    battlesWon?: boolean | PokemonCountOutputTypeCountBattlesWonArgs
  }

  // Custom InputTypes
  /**
   * PokemonCountOutputType without action
   */
  export type PokemonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonCountOutputType
     */
    select?: PokemonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PokemonCountOutputType without action
   */
  export type PokemonCountOutputTypeCountBattlesAsP1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PokemonBattleWhereInput
  }

  /**
   * PokemonCountOutputType without action
   */
  export type PokemonCountOutputTypeCountBattlesAsP2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PokemonBattleWhereInput
  }

  /**
   * PokemonCountOutputType without action
   */
  export type PokemonCountOutputTypeCountBattlesWonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PokemonBattleWhereInput
  }


  /**
   * Count Type TournamentCountOutputType
   */

  export type TournamentCountOutputType = {
    battles: number
  }

  export type TournamentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    battles?: boolean | TournamentCountOutputTypeCountBattlesArgs
  }

  // Custom InputTypes
  /**
   * TournamentCountOutputType without action
   */
  export type TournamentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentCountOutputType
     */
    select?: TournamentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TournamentCountOutputType without action
   */
  export type TournamentCountOutputTypeCountBattlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PokemonBattleWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Pokemon
   */

  export type AggregatePokemon = {
    _count: PokemonCountAggregateOutputType | null
    _avg: PokemonAvgAggregateOutputType | null
    _sum: PokemonSumAggregateOutputType | null
    _min: PokemonMinAggregateOutputType | null
    _max: PokemonMaxAggregateOutputType | null
  }

  export type PokemonAvgAggregateOutputType = {
    id: number | null
    level: number | null
    hit_points: number | null
    max_hit_points: number | null
    battles_won: number | null
    battles_lost: number | null
    skills: number | null
  }

  export type PokemonSumAggregateOutputType = {
    id: number | null
    level: number | null
    hit_points: number | null
    max_hit_points: number | null
    battles_won: number | null
    battles_lost: number | null
    skills: number[]
  }

  export type PokemonMinAggregateOutputType = {
    id: number | null
    instance_name: string | null
    pokemon_name: string | null
    pokemon_type: string | null
    level: number | null
    hit_points: number | null
    max_hit_points: number | null
    battles_won: number | null
    battles_lost: number | null
    image_url: string | null
    is_archived: boolean | null
    createdAt: Date | null
  }

  export type PokemonMaxAggregateOutputType = {
    id: number | null
    instance_name: string | null
    pokemon_name: string | null
    pokemon_type: string | null
    level: number | null
    hit_points: number | null
    max_hit_points: number | null
    battles_won: number | null
    battles_lost: number | null
    image_url: string | null
    is_archived: boolean | null
    createdAt: Date | null
  }

  export type PokemonCountAggregateOutputType = {
    id: number
    instance_name: number
    pokemon_name: number
    pokemon_type: number
    level: number
    hit_points: number
    max_hit_points: number
    battles_won: number
    battles_lost: number
    image_url: number
    skills: number
    is_archived: number
    createdAt: number
    _all: number
  }


  export type PokemonAvgAggregateInputType = {
    id?: true
    level?: true
    hit_points?: true
    max_hit_points?: true
    battles_won?: true
    battles_lost?: true
    skills?: true
  }

  export type PokemonSumAggregateInputType = {
    id?: true
    level?: true
    hit_points?: true
    max_hit_points?: true
    battles_won?: true
    battles_lost?: true
    skills?: true
  }

  export type PokemonMinAggregateInputType = {
    id?: true
    instance_name?: true
    pokemon_name?: true
    pokemon_type?: true
    level?: true
    hit_points?: true
    max_hit_points?: true
    battles_won?: true
    battles_lost?: true
    image_url?: true
    is_archived?: true
    createdAt?: true
  }

  export type PokemonMaxAggregateInputType = {
    id?: true
    instance_name?: true
    pokemon_name?: true
    pokemon_type?: true
    level?: true
    hit_points?: true
    max_hit_points?: true
    battles_won?: true
    battles_lost?: true
    image_url?: true
    is_archived?: true
    createdAt?: true
  }

  export type PokemonCountAggregateInputType = {
    id?: true
    instance_name?: true
    pokemon_name?: true
    pokemon_type?: true
    level?: true
    hit_points?: true
    max_hit_points?: true
    battles_won?: true
    battles_lost?: true
    image_url?: true
    skills?: true
    is_archived?: true
    createdAt?: true
    _all?: true
  }

  export type PokemonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pokemon to aggregate.
     */
    where?: PokemonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pokemon to fetch.
     */
    orderBy?: PokemonOrderByWithRelationInput | PokemonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PokemonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pokemon from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pokemon.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pokemon
    **/
    _count?: true | PokemonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PokemonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PokemonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PokemonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PokemonMaxAggregateInputType
  }

  export type GetPokemonAggregateType<T extends PokemonAggregateArgs> = {
        [P in keyof T & keyof AggregatePokemon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePokemon[P]>
      : GetScalarType<T[P], AggregatePokemon[P]>
  }




  export type PokemonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PokemonWhereInput
    orderBy?: PokemonOrderByWithAggregationInput | PokemonOrderByWithAggregationInput[]
    by: PokemonScalarFieldEnum[] | PokemonScalarFieldEnum
    having?: PokemonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PokemonCountAggregateInputType | true
    _avg?: PokemonAvgAggregateInputType
    _sum?: PokemonSumAggregateInputType
    _min?: PokemonMinAggregateInputType
    _max?: PokemonMaxAggregateInputType
  }

  export type PokemonGroupByOutputType = {
    id: number
    instance_name: string | null
    pokemon_name: string
    pokemon_type: string
    level: number
    hit_points: number
    max_hit_points: number
    battles_won: number
    battles_lost: number
    image_url: string | null
    skills: number[]
    is_archived: boolean
    createdAt: Date
    _count: PokemonCountAggregateOutputType | null
    _avg: PokemonAvgAggregateOutputType | null
    _sum: PokemonSumAggregateOutputType | null
    _min: PokemonMinAggregateOutputType | null
    _max: PokemonMaxAggregateOutputType | null
  }

  type GetPokemonGroupByPayload<T extends PokemonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PokemonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PokemonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PokemonGroupByOutputType[P]>
            : GetScalarType<T[P], PokemonGroupByOutputType[P]>
        }
      >
    >


  export type PokemonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instance_name?: boolean
    pokemon_name?: boolean
    pokemon_type?: boolean
    level?: boolean
    hit_points?: boolean
    max_hit_points?: boolean
    battles_won?: boolean
    battles_lost?: boolean
    image_url?: boolean
    skills?: boolean
    is_archived?: boolean
    createdAt?: boolean
    battlesAsP1?: boolean | Pokemon$battlesAsP1Args<ExtArgs>
    battlesAsP2?: boolean | Pokemon$battlesAsP2Args<ExtArgs>
    battlesWon?: boolean | Pokemon$battlesWonArgs<ExtArgs>
    _count?: boolean | PokemonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pokemon"]>

  export type PokemonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instance_name?: boolean
    pokemon_name?: boolean
    pokemon_type?: boolean
    level?: boolean
    hit_points?: boolean
    max_hit_points?: boolean
    battles_won?: boolean
    battles_lost?: boolean
    image_url?: boolean
    skills?: boolean
    is_archived?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["pokemon"]>

  export type PokemonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instance_name?: boolean
    pokemon_name?: boolean
    pokemon_type?: boolean
    level?: boolean
    hit_points?: boolean
    max_hit_points?: boolean
    battles_won?: boolean
    battles_lost?: boolean
    image_url?: boolean
    skills?: boolean
    is_archived?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["pokemon"]>

  export type PokemonSelectScalar = {
    id?: boolean
    instance_name?: boolean
    pokemon_name?: boolean
    pokemon_type?: boolean
    level?: boolean
    hit_points?: boolean
    max_hit_points?: boolean
    battles_won?: boolean
    battles_lost?: boolean
    image_url?: boolean
    skills?: boolean
    is_archived?: boolean
    createdAt?: boolean
  }

  export type PokemonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "instance_name" | "pokemon_name" | "pokemon_type" | "level" | "hit_points" | "max_hit_points" | "battles_won" | "battles_lost" | "image_url" | "skills" | "is_archived" | "createdAt", ExtArgs["result"]["pokemon"]>
  export type PokemonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    battlesAsP1?: boolean | Pokemon$battlesAsP1Args<ExtArgs>
    battlesAsP2?: boolean | Pokemon$battlesAsP2Args<ExtArgs>
    battlesWon?: boolean | Pokemon$battlesWonArgs<ExtArgs>
    _count?: boolean | PokemonCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PokemonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PokemonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PokemonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pokemon"
    objects: {
      battlesAsP1: Prisma.$PokemonBattlePayload<ExtArgs>[]
      battlesAsP2: Prisma.$PokemonBattlePayload<ExtArgs>[]
      battlesWon: Prisma.$PokemonBattlePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      instance_name: string | null
      pokemon_name: string
      pokemon_type: string
      level: number
      hit_points: number
      max_hit_points: number
      battles_won: number
      battles_lost: number
      image_url: string | null
      skills: number[]
      is_archived: boolean
      createdAt: Date
    }, ExtArgs["result"]["pokemon"]>
    composites: {}
  }

  type PokemonGetPayload<S extends boolean | null | undefined | PokemonDefaultArgs> = $Result.GetResult<Prisma.$PokemonPayload, S>

  type PokemonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PokemonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PokemonCountAggregateInputType | true
    }

  export interface PokemonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pokemon'], meta: { name: 'Pokemon' } }
    /**
     * Find zero or one Pokemon that matches the filter.
     * @param {PokemonFindUniqueArgs} args - Arguments to find a Pokemon
     * @example
     * // Get one Pokemon
     * const pokemon = await prisma.pokemon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PokemonFindUniqueArgs>(args: SelectSubset<T, PokemonFindUniqueArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pokemon that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PokemonFindUniqueOrThrowArgs} args - Arguments to find a Pokemon
     * @example
     * // Get one Pokemon
     * const pokemon = await prisma.pokemon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PokemonFindUniqueOrThrowArgs>(args: SelectSubset<T, PokemonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pokemon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonFindFirstArgs} args - Arguments to find a Pokemon
     * @example
     * // Get one Pokemon
     * const pokemon = await prisma.pokemon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PokemonFindFirstArgs>(args?: SelectSubset<T, PokemonFindFirstArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pokemon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonFindFirstOrThrowArgs} args - Arguments to find a Pokemon
     * @example
     * // Get one Pokemon
     * const pokemon = await prisma.pokemon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PokemonFindFirstOrThrowArgs>(args?: SelectSubset<T, PokemonFindFirstOrThrowArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pokemon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pokemon
     * const pokemon = await prisma.pokemon.findMany()
     * 
     * // Get first 10 Pokemon
     * const pokemon = await prisma.pokemon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pokemonWithIdOnly = await prisma.pokemon.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PokemonFindManyArgs>(args?: SelectSubset<T, PokemonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pokemon.
     * @param {PokemonCreateArgs} args - Arguments to create a Pokemon.
     * @example
     * // Create one Pokemon
     * const Pokemon = await prisma.pokemon.create({
     *   data: {
     *     // ... data to create a Pokemon
     *   }
     * })
     * 
     */
    create<T extends PokemonCreateArgs>(args: SelectSubset<T, PokemonCreateArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pokemon.
     * @param {PokemonCreateManyArgs} args - Arguments to create many Pokemon.
     * @example
     * // Create many Pokemon
     * const pokemon = await prisma.pokemon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PokemonCreateManyArgs>(args?: SelectSubset<T, PokemonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pokemon and returns the data saved in the database.
     * @param {PokemonCreateManyAndReturnArgs} args - Arguments to create many Pokemon.
     * @example
     * // Create many Pokemon
     * const pokemon = await prisma.pokemon.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pokemon and only return the `id`
     * const pokemonWithIdOnly = await prisma.pokemon.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PokemonCreateManyAndReturnArgs>(args?: SelectSubset<T, PokemonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pokemon.
     * @param {PokemonDeleteArgs} args - Arguments to delete one Pokemon.
     * @example
     * // Delete one Pokemon
     * const Pokemon = await prisma.pokemon.delete({
     *   where: {
     *     // ... filter to delete one Pokemon
     *   }
     * })
     * 
     */
    delete<T extends PokemonDeleteArgs>(args: SelectSubset<T, PokemonDeleteArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pokemon.
     * @param {PokemonUpdateArgs} args - Arguments to update one Pokemon.
     * @example
     * // Update one Pokemon
     * const pokemon = await prisma.pokemon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PokemonUpdateArgs>(args: SelectSubset<T, PokemonUpdateArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pokemon.
     * @param {PokemonDeleteManyArgs} args - Arguments to filter Pokemon to delete.
     * @example
     * // Delete a few Pokemon
     * const { count } = await prisma.pokemon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PokemonDeleteManyArgs>(args?: SelectSubset<T, PokemonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pokemon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pokemon
     * const pokemon = await prisma.pokemon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PokemonUpdateManyArgs>(args: SelectSubset<T, PokemonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pokemon and returns the data updated in the database.
     * @param {PokemonUpdateManyAndReturnArgs} args - Arguments to update many Pokemon.
     * @example
     * // Update many Pokemon
     * const pokemon = await prisma.pokemon.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pokemon and only return the `id`
     * const pokemonWithIdOnly = await prisma.pokemon.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PokemonUpdateManyAndReturnArgs>(args: SelectSubset<T, PokemonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pokemon.
     * @param {PokemonUpsertArgs} args - Arguments to update or create a Pokemon.
     * @example
     * // Update or create a Pokemon
     * const pokemon = await prisma.pokemon.upsert({
     *   create: {
     *     // ... data to create a Pokemon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pokemon we want to update
     *   }
     * })
     */
    upsert<T extends PokemonUpsertArgs>(args: SelectSubset<T, PokemonUpsertArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pokemon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonCountArgs} args - Arguments to filter Pokemon to count.
     * @example
     * // Count the number of Pokemon
     * const count = await prisma.pokemon.count({
     *   where: {
     *     // ... the filter for the Pokemon we want to count
     *   }
     * })
    **/
    count<T extends PokemonCountArgs>(
      args?: Subset<T, PokemonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PokemonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pokemon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PokemonAggregateArgs>(args: Subset<T, PokemonAggregateArgs>): Prisma.PrismaPromise<GetPokemonAggregateType<T>>

    /**
     * Group by Pokemon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PokemonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PokemonGroupByArgs['orderBy'] }
        : { orderBy?: PokemonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PokemonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPokemonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pokemon model
   */
  readonly fields: PokemonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pokemon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PokemonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    battlesAsP1<T extends Pokemon$battlesAsP1Args<ExtArgs> = {}>(args?: Subset<T, Pokemon$battlesAsP1Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonBattlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    battlesAsP2<T extends Pokemon$battlesAsP2Args<ExtArgs> = {}>(args?: Subset<T, Pokemon$battlesAsP2Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonBattlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    battlesWon<T extends Pokemon$battlesWonArgs<ExtArgs> = {}>(args?: Subset<T, Pokemon$battlesWonArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonBattlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pokemon model
   */
  interface PokemonFieldRefs {
    readonly id: FieldRef<"Pokemon", 'Int'>
    readonly instance_name: FieldRef<"Pokemon", 'String'>
    readonly pokemon_name: FieldRef<"Pokemon", 'String'>
    readonly pokemon_type: FieldRef<"Pokemon", 'String'>
    readonly level: FieldRef<"Pokemon", 'Int'>
    readonly hit_points: FieldRef<"Pokemon", 'Int'>
    readonly max_hit_points: FieldRef<"Pokemon", 'Int'>
    readonly battles_won: FieldRef<"Pokemon", 'Int'>
    readonly battles_lost: FieldRef<"Pokemon", 'Int'>
    readonly image_url: FieldRef<"Pokemon", 'String'>
    readonly skills: FieldRef<"Pokemon", 'Int[]'>
    readonly is_archived: FieldRef<"Pokemon", 'Boolean'>
    readonly createdAt: FieldRef<"Pokemon", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pokemon findUnique
   */
  export type PokemonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * Filter, which Pokemon to fetch.
     */
    where: PokemonWhereUniqueInput
  }

  /**
   * Pokemon findUniqueOrThrow
   */
  export type PokemonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * Filter, which Pokemon to fetch.
     */
    where: PokemonWhereUniqueInput
  }

  /**
   * Pokemon findFirst
   */
  export type PokemonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * Filter, which Pokemon to fetch.
     */
    where?: PokemonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pokemon to fetch.
     */
    orderBy?: PokemonOrderByWithRelationInput | PokemonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pokemon.
     */
    cursor?: PokemonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pokemon from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pokemon.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pokemon.
     */
    distinct?: PokemonScalarFieldEnum | PokemonScalarFieldEnum[]
  }

  /**
   * Pokemon findFirstOrThrow
   */
  export type PokemonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * Filter, which Pokemon to fetch.
     */
    where?: PokemonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pokemon to fetch.
     */
    orderBy?: PokemonOrderByWithRelationInput | PokemonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pokemon.
     */
    cursor?: PokemonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pokemon from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pokemon.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pokemon.
     */
    distinct?: PokemonScalarFieldEnum | PokemonScalarFieldEnum[]
  }

  /**
   * Pokemon findMany
   */
  export type PokemonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * Filter, which Pokemon to fetch.
     */
    where?: PokemonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pokemon to fetch.
     */
    orderBy?: PokemonOrderByWithRelationInput | PokemonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pokemon.
     */
    cursor?: PokemonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pokemon from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pokemon.
     */
    skip?: number
    distinct?: PokemonScalarFieldEnum | PokemonScalarFieldEnum[]
  }

  /**
   * Pokemon create
   */
  export type PokemonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * The data needed to create a Pokemon.
     */
    data: XOR<PokemonCreateInput, PokemonUncheckedCreateInput>
  }

  /**
   * Pokemon createMany
   */
  export type PokemonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pokemon.
     */
    data: PokemonCreateManyInput | PokemonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pokemon createManyAndReturn
   */
  export type PokemonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * The data used to create many Pokemon.
     */
    data: PokemonCreateManyInput | PokemonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pokemon update
   */
  export type PokemonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * The data needed to update a Pokemon.
     */
    data: XOR<PokemonUpdateInput, PokemonUncheckedUpdateInput>
    /**
     * Choose, which Pokemon to update.
     */
    where: PokemonWhereUniqueInput
  }

  /**
   * Pokemon updateMany
   */
  export type PokemonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pokemon.
     */
    data: XOR<PokemonUpdateManyMutationInput, PokemonUncheckedUpdateManyInput>
    /**
     * Filter which Pokemon to update
     */
    where?: PokemonWhereInput
    /**
     * Limit how many Pokemon to update.
     */
    limit?: number
  }

  /**
   * Pokemon updateManyAndReturn
   */
  export type PokemonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * The data used to update Pokemon.
     */
    data: XOR<PokemonUpdateManyMutationInput, PokemonUncheckedUpdateManyInput>
    /**
     * Filter which Pokemon to update
     */
    where?: PokemonWhereInput
    /**
     * Limit how many Pokemon to update.
     */
    limit?: number
  }

  /**
   * Pokemon upsert
   */
  export type PokemonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * The filter to search for the Pokemon to update in case it exists.
     */
    where: PokemonWhereUniqueInput
    /**
     * In case the Pokemon found by the `where` argument doesn't exist, create a new Pokemon with this data.
     */
    create: XOR<PokemonCreateInput, PokemonUncheckedCreateInput>
    /**
     * In case the Pokemon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PokemonUpdateInput, PokemonUncheckedUpdateInput>
  }

  /**
   * Pokemon delete
   */
  export type PokemonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * Filter which Pokemon to delete.
     */
    where: PokemonWhereUniqueInput
  }

  /**
   * Pokemon deleteMany
   */
  export type PokemonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pokemon to delete
     */
    where?: PokemonWhereInput
    /**
     * Limit how many Pokemon to delete.
     */
    limit?: number
  }

  /**
   * Pokemon.battlesAsP1
   */
  export type Pokemon$battlesAsP1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonBattle
     */
    select?: PokemonBattleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonBattle
     */
    omit?: PokemonBattleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonBattleInclude<ExtArgs> | null
    where?: PokemonBattleWhereInput
    orderBy?: PokemonBattleOrderByWithRelationInput | PokemonBattleOrderByWithRelationInput[]
    cursor?: PokemonBattleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PokemonBattleScalarFieldEnum | PokemonBattleScalarFieldEnum[]
  }

  /**
   * Pokemon.battlesAsP2
   */
  export type Pokemon$battlesAsP2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonBattle
     */
    select?: PokemonBattleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonBattle
     */
    omit?: PokemonBattleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonBattleInclude<ExtArgs> | null
    where?: PokemonBattleWhereInput
    orderBy?: PokemonBattleOrderByWithRelationInput | PokemonBattleOrderByWithRelationInput[]
    cursor?: PokemonBattleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PokemonBattleScalarFieldEnum | PokemonBattleScalarFieldEnum[]
  }

  /**
   * Pokemon.battlesWon
   */
  export type Pokemon$battlesWonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonBattle
     */
    select?: PokemonBattleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonBattle
     */
    omit?: PokemonBattleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonBattleInclude<ExtArgs> | null
    where?: PokemonBattleWhereInput
    orderBy?: PokemonBattleOrderByWithRelationInput | PokemonBattleOrderByWithRelationInput[]
    cursor?: PokemonBattleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PokemonBattleScalarFieldEnum | PokemonBattleScalarFieldEnum[]
  }

  /**
   * Pokemon without action
   */
  export type PokemonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
  }


  /**
   * Model PokemonBattle
   */

  export type AggregatePokemonBattle = {
    _count: PokemonBattleCountAggregateOutputType | null
    _avg: PokemonBattleAvgAggregateOutputType | null
    _sum: PokemonBattleSumAggregateOutputType | null
    _min: PokemonBattleMinAggregateOutputType | null
    _max: PokemonBattleMaxAggregateOutputType | null
  }

  export type PokemonBattleAvgAggregateOutputType = {
    id: number | null
    pokemon_1_id: number | null
    pokemon_2_id: number | null
    pokemon_1_seed: number | null
    pokemon_2_seed: number | null
    winner_pokemon_id: number | null
    tournamentId: number | null
  }

  export type PokemonBattleSumAggregateOutputType = {
    id: number | null
    pokemon_1_id: number | null
    pokemon_2_id: number | null
    pokemon_1_seed: number | null
    pokemon_2_seed: number | null
    winner_pokemon_id: number | null
    tournamentId: number | null
  }

  export type PokemonBattleMinAggregateOutputType = {
    id: number | null
    pokemon_1_id: number | null
    pokemon_2_id: number | null
    pokemon_1_seed: number | null
    pokemon_2_seed: number | null
    battle_date: Date | null
    winner_pokemon_id: number | null
    battle_duration: string | null
    tournamentId: number | null
  }

  export type PokemonBattleMaxAggregateOutputType = {
    id: number | null
    pokemon_1_id: number | null
    pokemon_2_id: number | null
    pokemon_1_seed: number | null
    pokemon_2_seed: number | null
    battle_date: Date | null
    winner_pokemon_id: number | null
    battle_duration: string | null
    tournamentId: number | null
  }

  export type PokemonBattleCountAggregateOutputType = {
    id: number
    pokemon_1_id: number
    pokemon_2_id: number
    pokemon_1_seed: number
    pokemon_2_seed: number
    battle_date: number
    winner_pokemon_id: number
    battle_duration: number
    battle_log: number
    tournamentId: number
    _all: number
  }


  export type PokemonBattleAvgAggregateInputType = {
    id?: true
    pokemon_1_id?: true
    pokemon_2_id?: true
    pokemon_1_seed?: true
    pokemon_2_seed?: true
    winner_pokemon_id?: true
    tournamentId?: true
  }

  export type PokemonBattleSumAggregateInputType = {
    id?: true
    pokemon_1_id?: true
    pokemon_2_id?: true
    pokemon_1_seed?: true
    pokemon_2_seed?: true
    winner_pokemon_id?: true
    tournamentId?: true
  }

  export type PokemonBattleMinAggregateInputType = {
    id?: true
    pokemon_1_id?: true
    pokemon_2_id?: true
    pokemon_1_seed?: true
    pokemon_2_seed?: true
    battle_date?: true
    winner_pokemon_id?: true
    battle_duration?: true
    tournamentId?: true
  }

  export type PokemonBattleMaxAggregateInputType = {
    id?: true
    pokemon_1_id?: true
    pokemon_2_id?: true
    pokemon_1_seed?: true
    pokemon_2_seed?: true
    battle_date?: true
    winner_pokemon_id?: true
    battle_duration?: true
    tournamentId?: true
  }

  export type PokemonBattleCountAggregateInputType = {
    id?: true
    pokemon_1_id?: true
    pokemon_2_id?: true
    pokemon_1_seed?: true
    pokemon_2_seed?: true
    battle_date?: true
    winner_pokemon_id?: true
    battle_duration?: true
    battle_log?: true
    tournamentId?: true
    _all?: true
  }

  export type PokemonBattleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PokemonBattle to aggregate.
     */
    where?: PokemonBattleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PokemonBattles to fetch.
     */
    orderBy?: PokemonBattleOrderByWithRelationInput | PokemonBattleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PokemonBattleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PokemonBattles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PokemonBattles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PokemonBattles
    **/
    _count?: true | PokemonBattleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PokemonBattleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PokemonBattleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PokemonBattleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PokemonBattleMaxAggregateInputType
  }

  export type GetPokemonBattleAggregateType<T extends PokemonBattleAggregateArgs> = {
        [P in keyof T & keyof AggregatePokemonBattle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePokemonBattle[P]>
      : GetScalarType<T[P], AggregatePokemonBattle[P]>
  }




  export type PokemonBattleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PokemonBattleWhereInput
    orderBy?: PokemonBattleOrderByWithAggregationInput | PokemonBattleOrderByWithAggregationInput[]
    by: PokemonBattleScalarFieldEnum[] | PokemonBattleScalarFieldEnum
    having?: PokemonBattleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PokemonBattleCountAggregateInputType | true
    _avg?: PokemonBattleAvgAggregateInputType
    _sum?: PokemonBattleSumAggregateInputType
    _min?: PokemonBattleMinAggregateInputType
    _max?: PokemonBattleMaxAggregateInputType
  }

  export type PokemonBattleGroupByOutputType = {
    id: number
    pokemon_1_id: number
    pokemon_2_id: number
    pokemon_1_seed: number
    pokemon_2_seed: number
    battle_date: Date
    winner_pokemon_id: number | null
    battle_duration: string | null
    battle_log: JsonValue | null
    tournamentId: number | null
    _count: PokemonBattleCountAggregateOutputType | null
    _avg: PokemonBattleAvgAggregateOutputType | null
    _sum: PokemonBattleSumAggregateOutputType | null
    _min: PokemonBattleMinAggregateOutputType | null
    _max: PokemonBattleMaxAggregateOutputType | null
  }

  type GetPokemonBattleGroupByPayload<T extends PokemonBattleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PokemonBattleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PokemonBattleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PokemonBattleGroupByOutputType[P]>
            : GetScalarType<T[P], PokemonBattleGroupByOutputType[P]>
        }
      >
    >


  export type PokemonBattleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pokemon_1_id?: boolean
    pokemon_2_id?: boolean
    pokemon_1_seed?: boolean
    pokemon_2_seed?: boolean
    battle_date?: boolean
    winner_pokemon_id?: boolean
    battle_duration?: boolean
    battle_log?: boolean
    tournamentId?: boolean
    tournament?: boolean | PokemonBattle$tournamentArgs<ExtArgs>
    pokemon1?: boolean | PokemonDefaultArgs<ExtArgs>
    pokemon2?: boolean | PokemonDefaultArgs<ExtArgs>
    winner?: boolean | PokemonBattle$winnerArgs<ExtArgs>
  }, ExtArgs["result"]["pokemonBattle"]>

  export type PokemonBattleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pokemon_1_id?: boolean
    pokemon_2_id?: boolean
    pokemon_1_seed?: boolean
    pokemon_2_seed?: boolean
    battle_date?: boolean
    winner_pokemon_id?: boolean
    battle_duration?: boolean
    battle_log?: boolean
    tournamentId?: boolean
    tournament?: boolean | PokemonBattle$tournamentArgs<ExtArgs>
    pokemon1?: boolean | PokemonDefaultArgs<ExtArgs>
    pokemon2?: boolean | PokemonDefaultArgs<ExtArgs>
    winner?: boolean | PokemonBattle$winnerArgs<ExtArgs>
  }, ExtArgs["result"]["pokemonBattle"]>

  export type PokemonBattleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pokemon_1_id?: boolean
    pokemon_2_id?: boolean
    pokemon_1_seed?: boolean
    pokemon_2_seed?: boolean
    battle_date?: boolean
    winner_pokemon_id?: boolean
    battle_duration?: boolean
    battle_log?: boolean
    tournamentId?: boolean
    tournament?: boolean | PokemonBattle$tournamentArgs<ExtArgs>
    pokemon1?: boolean | PokemonDefaultArgs<ExtArgs>
    pokemon2?: boolean | PokemonDefaultArgs<ExtArgs>
    winner?: boolean | PokemonBattle$winnerArgs<ExtArgs>
  }, ExtArgs["result"]["pokemonBattle"]>

  export type PokemonBattleSelectScalar = {
    id?: boolean
    pokemon_1_id?: boolean
    pokemon_2_id?: boolean
    pokemon_1_seed?: boolean
    pokemon_2_seed?: boolean
    battle_date?: boolean
    winner_pokemon_id?: boolean
    battle_duration?: boolean
    battle_log?: boolean
    tournamentId?: boolean
  }

  export type PokemonBattleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pokemon_1_id" | "pokemon_2_id" | "pokemon_1_seed" | "pokemon_2_seed" | "battle_date" | "winner_pokemon_id" | "battle_duration" | "battle_log" | "tournamentId", ExtArgs["result"]["pokemonBattle"]>
  export type PokemonBattleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tournament?: boolean | PokemonBattle$tournamentArgs<ExtArgs>
    pokemon1?: boolean | PokemonDefaultArgs<ExtArgs>
    pokemon2?: boolean | PokemonDefaultArgs<ExtArgs>
    winner?: boolean | PokemonBattle$winnerArgs<ExtArgs>
  }
  export type PokemonBattleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tournament?: boolean | PokemonBattle$tournamentArgs<ExtArgs>
    pokemon1?: boolean | PokemonDefaultArgs<ExtArgs>
    pokemon2?: boolean | PokemonDefaultArgs<ExtArgs>
    winner?: boolean | PokemonBattle$winnerArgs<ExtArgs>
  }
  export type PokemonBattleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tournament?: boolean | PokemonBattle$tournamentArgs<ExtArgs>
    pokemon1?: boolean | PokemonDefaultArgs<ExtArgs>
    pokemon2?: boolean | PokemonDefaultArgs<ExtArgs>
    winner?: boolean | PokemonBattle$winnerArgs<ExtArgs>
  }

  export type $PokemonBattlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PokemonBattle"
    objects: {
      tournament: Prisma.$TournamentPayload<ExtArgs> | null
      pokemon1: Prisma.$PokemonPayload<ExtArgs>
      pokemon2: Prisma.$PokemonPayload<ExtArgs>
      winner: Prisma.$PokemonPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pokemon_1_id: number
      pokemon_2_id: number
      pokemon_1_seed: number
      pokemon_2_seed: number
      battle_date: Date
      winner_pokemon_id: number | null
      battle_duration: string | null
      battle_log: Prisma.JsonValue | null
      tournamentId: number | null
    }, ExtArgs["result"]["pokemonBattle"]>
    composites: {}
  }

  type PokemonBattleGetPayload<S extends boolean | null | undefined | PokemonBattleDefaultArgs> = $Result.GetResult<Prisma.$PokemonBattlePayload, S>

  type PokemonBattleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PokemonBattleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PokemonBattleCountAggregateInputType | true
    }

  export interface PokemonBattleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PokemonBattle'], meta: { name: 'PokemonBattle' } }
    /**
     * Find zero or one PokemonBattle that matches the filter.
     * @param {PokemonBattleFindUniqueArgs} args - Arguments to find a PokemonBattle
     * @example
     * // Get one PokemonBattle
     * const pokemonBattle = await prisma.pokemonBattle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PokemonBattleFindUniqueArgs>(args: SelectSubset<T, PokemonBattleFindUniqueArgs<ExtArgs>>): Prisma__PokemonBattleClient<$Result.GetResult<Prisma.$PokemonBattlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PokemonBattle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PokemonBattleFindUniqueOrThrowArgs} args - Arguments to find a PokemonBattle
     * @example
     * // Get one PokemonBattle
     * const pokemonBattle = await prisma.pokemonBattle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PokemonBattleFindUniqueOrThrowArgs>(args: SelectSubset<T, PokemonBattleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PokemonBattleClient<$Result.GetResult<Prisma.$PokemonBattlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PokemonBattle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonBattleFindFirstArgs} args - Arguments to find a PokemonBattle
     * @example
     * // Get one PokemonBattle
     * const pokemonBattle = await prisma.pokemonBattle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PokemonBattleFindFirstArgs>(args?: SelectSubset<T, PokemonBattleFindFirstArgs<ExtArgs>>): Prisma__PokemonBattleClient<$Result.GetResult<Prisma.$PokemonBattlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PokemonBattle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonBattleFindFirstOrThrowArgs} args - Arguments to find a PokemonBattle
     * @example
     * // Get one PokemonBattle
     * const pokemonBattle = await prisma.pokemonBattle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PokemonBattleFindFirstOrThrowArgs>(args?: SelectSubset<T, PokemonBattleFindFirstOrThrowArgs<ExtArgs>>): Prisma__PokemonBattleClient<$Result.GetResult<Prisma.$PokemonBattlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PokemonBattles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonBattleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PokemonBattles
     * const pokemonBattles = await prisma.pokemonBattle.findMany()
     * 
     * // Get first 10 PokemonBattles
     * const pokemonBattles = await prisma.pokemonBattle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pokemonBattleWithIdOnly = await prisma.pokemonBattle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PokemonBattleFindManyArgs>(args?: SelectSubset<T, PokemonBattleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonBattlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PokemonBattle.
     * @param {PokemonBattleCreateArgs} args - Arguments to create a PokemonBattle.
     * @example
     * // Create one PokemonBattle
     * const PokemonBattle = await prisma.pokemonBattle.create({
     *   data: {
     *     // ... data to create a PokemonBattle
     *   }
     * })
     * 
     */
    create<T extends PokemonBattleCreateArgs>(args: SelectSubset<T, PokemonBattleCreateArgs<ExtArgs>>): Prisma__PokemonBattleClient<$Result.GetResult<Prisma.$PokemonBattlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PokemonBattles.
     * @param {PokemonBattleCreateManyArgs} args - Arguments to create many PokemonBattles.
     * @example
     * // Create many PokemonBattles
     * const pokemonBattle = await prisma.pokemonBattle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PokemonBattleCreateManyArgs>(args?: SelectSubset<T, PokemonBattleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PokemonBattles and returns the data saved in the database.
     * @param {PokemonBattleCreateManyAndReturnArgs} args - Arguments to create many PokemonBattles.
     * @example
     * // Create many PokemonBattles
     * const pokemonBattle = await prisma.pokemonBattle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PokemonBattles and only return the `id`
     * const pokemonBattleWithIdOnly = await prisma.pokemonBattle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PokemonBattleCreateManyAndReturnArgs>(args?: SelectSubset<T, PokemonBattleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonBattlePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PokemonBattle.
     * @param {PokemonBattleDeleteArgs} args - Arguments to delete one PokemonBattle.
     * @example
     * // Delete one PokemonBattle
     * const PokemonBattle = await prisma.pokemonBattle.delete({
     *   where: {
     *     // ... filter to delete one PokemonBattle
     *   }
     * })
     * 
     */
    delete<T extends PokemonBattleDeleteArgs>(args: SelectSubset<T, PokemonBattleDeleteArgs<ExtArgs>>): Prisma__PokemonBattleClient<$Result.GetResult<Prisma.$PokemonBattlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PokemonBattle.
     * @param {PokemonBattleUpdateArgs} args - Arguments to update one PokemonBattle.
     * @example
     * // Update one PokemonBattle
     * const pokemonBattle = await prisma.pokemonBattle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PokemonBattleUpdateArgs>(args: SelectSubset<T, PokemonBattleUpdateArgs<ExtArgs>>): Prisma__PokemonBattleClient<$Result.GetResult<Prisma.$PokemonBattlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PokemonBattles.
     * @param {PokemonBattleDeleteManyArgs} args - Arguments to filter PokemonBattles to delete.
     * @example
     * // Delete a few PokemonBattles
     * const { count } = await prisma.pokemonBattle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PokemonBattleDeleteManyArgs>(args?: SelectSubset<T, PokemonBattleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PokemonBattles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonBattleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PokemonBattles
     * const pokemonBattle = await prisma.pokemonBattle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PokemonBattleUpdateManyArgs>(args: SelectSubset<T, PokemonBattleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PokemonBattles and returns the data updated in the database.
     * @param {PokemonBattleUpdateManyAndReturnArgs} args - Arguments to update many PokemonBattles.
     * @example
     * // Update many PokemonBattles
     * const pokemonBattle = await prisma.pokemonBattle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PokemonBattles and only return the `id`
     * const pokemonBattleWithIdOnly = await prisma.pokemonBattle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PokemonBattleUpdateManyAndReturnArgs>(args: SelectSubset<T, PokemonBattleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonBattlePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PokemonBattle.
     * @param {PokemonBattleUpsertArgs} args - Arguments to update or create a PokemonBattle.
     * @example
     * // Update or create a PokemonBattle
     * const pokemonBattle = await prisma.pokemonBattle.upsert({
     *   create: {
     *     // ... data to create a PokemonBattle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PokemonBattle we want to update
     *   }
     * })
     */
    upsert<T extends PokemonBattleUpsertArgs>(args: SelectSubset<T, PokemonBattleUpsertArgs<ExtArgs>>): Prisma__PokemonBattleClient<$Result.GetResult<Prisma.$PokemonBattlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PokemonBattles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonBattleCountArgs} args - Arguments to filter PokemonBattles to count.
     * @example
     * // Count the number of PokemonBattles
     * const count = await prisma.pokemonBattle.count({
     *   where: {
     *     // ... the filter for the PokemonBattles we want to count
     *   }
     * })
    **/
    count<T extends PokemonBattleCountArgs>(
      args?: Subset<T, PokemonBattleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PokemonBattleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PokemonBattle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonBattleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PokemonBattleAggregateArgs>(args: Subset<T, PokemonBattleAggregateArgs>): Prisma.PrismaPromise<GetPokemonBattleAggregateType<T>>

    /**
     * Group by PokemonBattle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonBattleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PokemonBattleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PokemonBattleGroupByArgs['orderBy'] }
        : { orderBy?: PokemonBattleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PokemonBattleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPokemonBattleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PokemonBattle model
   */
  readonly fields: PokemonBattleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PokemonBattle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PokemonBattleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tournament<T extends PokemonBattle$tournamentArgs<ExtArgs> = {}>(args?: Subset<T, PokemonBattle$tournamentArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pokemon1<T extends PokemonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PokemonDefaultArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pokemon2<T extends PokemonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PokemonDefaultArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    winner<T extends PokemonBattle$winnerArgs<ExtArgs> = {}>(args?: Subset<T, PokemonBattle$winnerArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PokemonBattle model
   */
  interface PokemonBattleFieldRefs {
    readonly id: FieldRef<"PokemonBattle", 'Int'>
    readonly pokemon_1_id: FieldRef<"PokemonBattle", 'Int'>
    readonly pokemon_2_id: FieldRef<"PokemonBattle", 'Int'>
    readonly pokemon_1_seed: FieldRef<"PokemonBattle", 'Int'>
    readonly pokemon_2_seed: FieldRef<"PokemonBattle", 'Int'>
    readonly battle_date: FieldRef<"PokemonBattle", 'DateTime'>
    readonly winner_pokemon_id: FieldRef<"PokemonBattle", 'Int'>
    readonly battle_duration: FieldRef<"PokemonBattle", 'String'>
    readonly battle_log: FieldRef<"PokemonBattle", 'Json'>
    readonly tournamentId: FieldRef<"PokemonBattle", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PokemonBattle findUnique
   */
  export type PokemonBattleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonBattle
     */
    select?: PokemonBattleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonBattle
     */
    omit?: PokemonBattleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonBattleInclude<ExtArgs> | null
    /**
     * Filter, which PokemonBattle to fetch.
     */
    where: PokemonBattleWhereUniqueInput
  }

  /**
   * PokemonBattle findUniqueOrThrow
   */
  export type PokemonBattleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonBattle
     */
    select?: PokemonBattleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonBattle
     */
    omit?: PokemonBattleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonBattleInclude<ExtArgs> | null
    /**
     * Filter, which PokemonBattle to fetch.
     */
    where: PokemonBattleWhereUniqueInput
  }

  /**
   * PokemonBattle findFirst
   */
  export type PokemonBattleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonBattle
     */
    select?: PokemonBattleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonBattle
     */
    omit?: PokemonBattleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonBattleInclude<ExtArgs> | null
    /**
     * Filter, which PokemonBattle to fetch.
     */
    where?: PokemonBattleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PokemonBattles to fetch.
     */
    orderBy?: PokemonBattleOrderByWithRelationInput | PokemonBattleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PokemonBattles.
     */
    cursor?: PokemonBattleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PokemonBattles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PokemonBattles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PokemonBattles.
     */
    distinct?: PokemonBattleScalarFieldEnum | PokemonBattleScalarFieldEnum[]
  }

  /**
   * PokemonBattle findFirstOrThrow
   */
  export type PokemonBattleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonBattle
     */
    select?: PokemonBattleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonBattle
     */
    omit?: PokemonBattleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonBattleInclude<ExtArgs> | null
    /**
     * Filter, which PokemonBattle to fetch.
     */
    where?: PokemonBattleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PokemonBattles to fetch.
     */
    orderBy?: PokemonBattleOrderByWithRelationInput | PokemonBattleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PokemonBattles.
     */
    cursor?: PokemonBattleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PokemonBattles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PokemonBattles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PokemonBattles.
     */
    distinct?: PokemonBattleScalarFieldEnum | PokemonBattleScalarFieldEnum[]
  }

  /**
   * PokemonBattle findMany
   */
  export type PokemonBattleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonBattle
     */
    select?: PokemonBattleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonBattle
     */
    omit?: PokemonBattleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonBattleInclude<ExtArgs> | null
    /**
     * Filter, which PokemonBattles to fetch.
     */
    where?: PokemonBattleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PokemonBattles to fetch.
     */
    orderBy?: PokemonBattleOrderByWithRelationInput | PokemonBattleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PokemonBattles.
     */
    cursor?: PokemonBattleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PokemonBattles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PokemonBattles.
     */
    skip?: number
    distinct?: PokemonBattleScalarFieldEnum | PokemonBattleScalarFieldEnum[]
  }

  /**
   * PokemonBattle create
   */
  export type PokemonBattleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonBattle
     */
    select?: PokemonBattleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonBattle
     */
    omit?: PokemonBattleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonBattleInclude<ExtArgs> | null
    /**
     * The data needed to create a PokemonBattle.
     */
    data: XOR<PokemonBattleCreateInput, PokemonBattleUncheckedCreateInput>
  }

  /**
   * PokemonBattle createMany
   */
  export type PokemonBattleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PokemonBattles.
     */
    data: PokemonBattleCreateManyInput | PokemonBattleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PokemonBattle createManyAndReturn
   */
  export type PokemonBattleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonBattle
     */
    select?: PokemonBattleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonBattle
     */
    omit?: PokemonBattleOmit<ExtArgs> | null
    /**
     * The data used to create many PokemonBattles.
     */
    data: PokemonBattleCreateManyInput | PokemonBattleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonBattleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PokemonBattle update
   */
  export type PokemonBattleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonBattle
     */
    select?: PokemonBattleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonBattle
     */
    omit?: PokemonBattleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonBattleInclude<ExtArgs> | null
    /**
     * The data needed to update a PokemonBattle.
     */
    data: XOR<PokemonBattleUpdateInput, PokemonBattleUncheckedUpdateInput>
    /**
     * Choose, which PokemonBattle to update.
     */
    where: PokemonBattleWhereUniqueInput
  }

  /**
   * PokemonBattle updateMany
   */
  export type PokemonBattleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PokemonBattles.
     */
    data: XOR<PokemonBattleUpdateManyMutationInput, PokemonBattleUncheckedUpdateManyInput>
    /**
     * Filter which PokemonBattles to update
     */
    where?: PokemonBattleWhereInput
    /**
     * Limit how many PokemonBattles to update.
     */
    limit?: number
  }

  /**
   * PokemonBattle updateManyAndReturn
   */
  export type PokemonBattleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonBattle
     */
    select?: PokemonBattleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonBattle
     */
    omit?: PokemonBattleOmit<ExtArgs> | null
    /**
     * The data used to update PokemonBattles.
     */
    data: XOR<PokemonBattleUpdateManyMutationInput, PokemonBattleUncheckedUpdateManyInput>
    /**
     * Filter which PokemonBattles to update
     */
    where?: PokemonBattleWhereInput
    /**
     * Limit how many PokemonBattles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonBattleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PokemonBattle upsert
   */
  export type PokemonBattleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonBattle
     */
    select?: PokemonBattleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonBattle
     */
    omit?: PokemonBattleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonBattleInclude<ExtArgs> | null
    /**
     * The filter to search for the PokemonBattle to update in case it exists.
     */
    where: PokemonBattleWhereUniqueInput
    /**
     * In case the PokemonBattle found by the `where` argument doesn't exist, create a new PokemonBattle with this data.
     */
    create: XOR<PokemonBattleCreateInput, PokemonBattleUncheckedCreateInput>
    /**
     * In case the PokemonBattle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PokemonBattleUpdateInput, PokemonBattleUncheckedUpdateInput>
  }

  /**
   * PokemonBattle delete
   */
  export type PokemonBattleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonBattle
     */
    select?: PokemonBattleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonBattle
     */
    omit?: PokemonBattleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonBattleInclude<ExtArgs> | null
    /**
     * Filter which PokemonBattle to delete.
     */
    where: PokemonBattleWhereUniqueInput
  }

  /**
   * PokemonBattle deleteMany
   */
  export type PokemonBattleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PokemonBattles to delete
     */
    where?: PokemonBattleWhereInput
    /**
     * Limit how many PokemonBattles to delete.
     */
    limit?: number
  }

  /**
   * PokemonBattle.tournament
   */
  export type PokemonBattle$tournamentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    where?: TournamentWhereInput
  }

  /**
   * PokemonBattle.winner
   */
  export type PokemonBattle$winnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pokemon
     */
    omit?: PokemonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    where?: PokemonWhereInput
  }

  /**
   * PokemonBattle without action
   */
  export type PokemonBattleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonBattle
     */
    select?: PokemonBattleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonBattle
     */
    omit?: PokemonBattleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonBattleInclude<ExtArgs> | null
  }


  /**
   * Model Tournament
   */

  export type AggregateTournament = {
    _count: TournamentCountAggregateOutputType | null
    _avg: TournamentAvgAggregateOutputType | null
    _sum: TournamentSumAggregateOutputType | null
    _min: TournamentMinAggregateOutputType | null
    _max: TournamentMaxAggregateOutputType | null
  }

  export type TournamentAvgAggregateOutputType = {
    id: number | null
    seed: number | null
  }

  export type TournamentSumAggregateOutputType = {
    id: number | null
    seed: number | null
  }

  export type TournamentMinAggregateOutputType = {
    id: number | null
    name: string | null
    venue: string | null
    seed: number | null
    createdAt: Date | null
  }

  export type TournamentMaxAggregateOutputType = {
    id: number | null
    name: string | null
    venue: string | null
    seed: number | null
    createdAt: Date | null
  }

  export type TournamentCountAggregateOutputType = {
    id: number
    name: number
    venue: number
    seed: number
    createdAt: number
    _all: number
  }


  export type TournamentAvgAggregateInputType = {
    id?: true
    seed?: true
  }

  export type TournamentSumAggregateInputType = {
    id?: true
    seed?: true
  }

  export type TournamentMinAggregateInputType = {
    id?: true
    name?: true
    venue?: true
    seed?: true
    createdAt?: true
  }

  export type TournamentMaxAggregateInputType = {
    id?: true
    name?: true
    venue?: true
    seed?: true
    createdAt?: true
  }

  export type TournamentCountAggregateInputType = {
    id?: true
    name?: true
    venue?: true
    seed?: true
    createdAt?: true
    _all?: true
  }

  export type TournamentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tournament to aggregate.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tournaments
    **/
    _count?: true | TournamentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TournamentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TournamentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TournamentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TournamentMaxAggregateInputType
  }

  export type GetTournamentAggregateType<T extends TournamentAggregateArgs> = {
        [P in keyof T & keyof AggregateTournament]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTournament[P]>
      : GetScalarType<T[P], AggregateTournament[P]>
  }




  export type TournamentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TournamentWhereInput
    orderBy?: TournamentOrderByWithAggregationInput | TournamentOrderByWithAggregationInput[]
    by: TournamentScalarFieldEnum[] | TournamentScalarFieldEnum
    having?: TournamentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TournamentCountAggregateInputType | true
    _avg?: TournamentAvgAggregateInputType
    _sum?: TournamentSumAggregateInputType
    _min?: TournamentMinAggregateInputType
    _max?: TournamentMaxAggregateInputType
  }

  export type TournamentGroupByOutputType = {
    id: number
    name: string
    venue: string
    seed: number
    createdAt: Date
    _count: TournamentCountAggregateOutputType | null
    _avg: TournamentAvgAggregateOutputType | null
    _sum: TournamentSumAggregateOutputType | null
    _min: TournamentMinAggregateOutputType | null
    _max: TournamentMaxAggregateOutputType | null
  }

  type GetTournamentGroupByPayload<T extends TournamentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TournamentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TournamentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TournamentGroupByOutputType[P]>
            : GetScalarType<T[P], TournamentGroupByOutputType[P]>
        }
      >
    >


  export type TournamentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    venue?: boolean
    seed?: boolean
    createdAt?: boolean
    battles?: boolean | Tournament$battlesArgs<ExtArgs>
    _count?: boolean | TournamentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tournament"]>

  export type TournamentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    venue?: boolean
    seed?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["tournament"]>

  export type TournamentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    venue?: boolean
    seed?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["tournament"]>

  export type TournamentSelectScalar = {
    id?: boolean
    name?: boolean
    venue?: boolean
    seed?: boolean
    createdAt?: boolean
  }

  export type TournamentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "venue" | "seed" | "createdAt", ExtArgs["result"]["tournament"]>
  export type TournamentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    battles?: boolean | Tournament$battlesArgs<ExtArgs>
    _count?: boolean | TournamentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TournamentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TournamentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TournamentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tournament"
    objects: {
      battles: Prisma.$PokemonBattlePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      venue: string
      seed: number
      createdAt: Date
    }, ExtArgs["result"]["tournament"]>
    composites: {}
  }

  type TournamentGetPayload<S extends boolean | null | undefined | TournamentDefaultArgs> = $Result.GetResult<Prisma.$TournamentPayload, S>

  type TournamentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TournamentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TournamentCountAggregateInputType | true
    }

  export interface TournamentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tournament'], meta: { name: 'Tournament' } }
    /**
     * Find zero or one Tournament that matches the filter.
     * @param {TournamentFindUniqueArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TournamentFindUniqueArgs>(args: SelectSubset<T, TournamentFindUniqueArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tournament that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TournamentFindUniqueOrThrowArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TournamentFindUniqueOrThrowArgs>(args: SelectSubset<T, TournamentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tournament that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentFindFirstArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TournamentFindFirstArgs>(args?: SelectSubset<T, TournamentFindFirstArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tournament that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentFindFirstOrThrowArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TournamentFindFirstOrThrowArgs>(args?: SelectSubset<T, TournamentFindFirstOrThrowArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tournaments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tournaments
     * const tournaments = await prisma.tournament.findMany()
     * 
     * // Get first 10 Tournaments
     * const tournaments = await prisma.tournament.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tournamentWithIdOnly = await prisma.tournament.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TournamentFindManyArgs>(args?: SelectSubset<T, TournamentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tournament.
     * @param {TournamentCreateArgs} args - Arguments to create a Tournament.
     * @example
     * // Create one Tournament
     * const Tournament = await prisma.tournament.create({
     *   data: {
     *     // ... data to create a Tournament
     *   }
     * })
     * 
     */
    create<T extends TournamentCreateArgs>(args: SelectSubset<T, TournamentCreateArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tournaments.
     * @param {TournamentCreateManyArgs} args - Arguments to create many Tournaments.
     * @example
     * // Create many Tournaments
     * const tournament = await prisma.tournament.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TournamentCreateManyArgs>(args?: SelectSubset<T, TournamentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tournaments and returns the data saved in the database.
     * @param {TournamentCreateManyAndReturnArgs} args - Arguments to create many Tournaments.
     * @example
     * // Create many Tournaments
     * const tournament = await prisma.tournament.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tournaments and only return the `id`
     * const tournamentWithIdOnly = await prisma.tournament.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TournamentCreateManyAndReturnArgs>(args?: SelectSubset<T, TournamentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tournament.
     * @param {TournamentDeleteArgs} args - Arguments to delete one Tournament.
     * @example
     * // Delete one Tournament
     * const Tournament = await prisma.tournament.delete({
     *   where: {
     *     // ... filter to delete one Tournament
     *   }
     * })
     * 
     */
    delete<T extends TournamentDeleteArgs>(args: SelectSubset<T, TournamentDeleteArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tournament.
     * @param {TournamentUpdateArgs} args - Arguments to update one Tournament.
     * @example
     * // Update one Tournament
     * const tournament = await prisma.tournament.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TournamentUpdateArgs>(args: SelectSubset<T, TournamentUpdateArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tournaments.
     * @param {TournamentDeleteManyArgs} args - Arguments to filter Tournaments to delete.
     * @example
     * // Delete a few Tournaments
     * const { count } = await prisma.tournament.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TournamentDeleteManyArgs>(args?: SelectSubset<T, TournamentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tournaments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tournaments
     * const tournament = await prisma.tournament.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TournamentUpdateManyArgs>(args: SelectSubset<T, TournamentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tournaments and returns the data updated in the database.
     * @param {TournamentUpdateManyAndReturnArgs} args - Arguments to update many Tournaments.
     * @example
     * // Update many Tournaments
     * const tournament = await prisma.tournament.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tournaments and only return the `id`
     * const tournamentWithIdOnly = await prisma.tournament.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TournamentUpdateManyAndReturnArgs>(args: SelectSubset<T, TournamentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tournament.
     * @param {TournamentUpsertArgs} args - Arguments to update or create a Tournament.
     * @example
     * // Update or create a Tournament
     * const tournament = await prisma.tournament.upsert({
     *   create: {
     *     // ... data to create a Tournament
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tournament we want to update
     *   }
     * })
     */
    upsert<T extends TournamentUpsertArgs>(args: SelectSubset<T, TournamentUpsertArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tournaments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentCountArgs} args - Arguments to filter Tournaments to count.
     * @example
     * // Count the number of Tournaments
     * const count = await prisma.tournament.count({
     *   where: {
     *     // ... the filter for the Tournaments we want to count
     *   }
     * })
    **/
    count<T extends TournamentCountArgs>(
      args?: Subset<T, TournamentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TournamentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tournament.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TournamentAggregateArgs>(args: Subset<T, TournamentAggregateArgs>): Prisma.PrismaPromise<GetTournamentAggregateType<T>>

    /**
     * Group by Tournament.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TournamentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TournamentGroupByArgs['orderBy'] }
        : { orderBy?: TournamentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TournamentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTournamentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tournament model
   */
  readonly fields: TournamentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tournament.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TournamentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    battles<T extends Tournament$battlesArgs<ExtArgs> = {}>(args?: Subset<T, Tournament$battlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonBattlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tournament model
   */
  interface TournamentFieldRefs {
    readonly id: FieldRef<"Tournament", 'Int'>
    readonly name: FieldRef<"Tournament", 'String'>
    readonly venue: FieldRef<"Tournament", 'String'>
    readonly seed: FieldRef<"Tournament", 'Int'>
    readonly createdAt: FieldRef<"Tournament", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tournament findUnique
   */
  export type TournamentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where: TournamentWhereUniqueInput
  }

  /**
   * Tournament findUniqueOrThrow
   */
  export type TournamentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where: TournamentWhereUniqueInput
  }

  /**
   * Tournament findFirst
   */
  export type TournamentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tournaments.
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tournaments.
     */
    distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[]
  }

  /**
   * Tournament findFirstOrThrow
   */
  export type TournamentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tournaments.
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tournaments.
     */
    distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[]
  }

  /**
   * Tournament findMany
   */
  export type TournamentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournaments to fetch.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tournaments.
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[]
  }

  /**
   * Tournament create
   */
  export type TournamentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * The data needed to create a Tournament.
     */
    data: XOR<TournamentCreateInput, TournamentUncheckedCreateInput>
  }

  /**
   * Tournament createMany
   */
  export type TournamentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tournaments.
     */
    data: TournamentCreateManyInput | TournamentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tournament createManyAndReturn
   */
  export type TournamentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * The data used to create many Tournaments.
     */
    data: TournamentCreateManyInput | TournamentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tournament update
   */
  export type TournamentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * The data needed to update a Tournament.
     */
    data: XOR<TournamentUpdateInput, TournamentUncheckedUpdateInput>
    /**
     * Choose, which Tournament to update.
     */
    where: TournamentWhereUniqueInput
  }

  /**
   * Tournament updateMany
   */
  export type TournamentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tournaments.
     */
    data: XOR<TournamentUpdateManyMutationInput, TournamentUncheckedUpdateManyInput>
    /**
     * Filter which Tournaments to update
     */
    where?: TournamentWhereInput
    /**
     * Limit how many Tournaments to update.
     */
    limit?: number
  }

  /**
   * Tournament updateManyAndReturn
   */
  export type TournamentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * The data used to update Tournaments.
     */
    data: XOR<TournamentUpdateManyMutationInput, TournamentUncheckedUpdateManyInput>
    /**
     * Filter which Tournaments to update
     */
    where?: TournamentWhereInput
    /**
     * Limit how many Tournaments to update.
     */
    limit?: number
  }

  /**
   * Tournament upsert
   */
  export type TournamentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * The filter to search for the Tournament to update in case it exists.
     */
    where: TournamentWhereUniqueInput
    /**
     * In case the Tournament found by the `where` argument doesn't exist, create a new Tournament with this data.
     */
    create: XOR<TournamentCreateInput, TournamentUncheckedCreateInput>
    /**
     * In case the Tournament was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TournamentUpdateInput, TournamentUncheckedUpdateInput>
  }

  /**
   * Tournament delete
   */
  export type TournamentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter which Tournament to delete.
     */
    where: TournamentWhereUniqueInput
  }

  /**
   * Tournament deleteMany
   */
  export type TournamentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tournaments to delete
     */
    where?: TournamentWhereInput
    /**
     * Limit how many Tournaments to delete.
     */
    limit?: number
  }

  /**
   * Tournament.battles
   */
  export type Tournament$battlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonBattle
     */
    select?: PokemonBattleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonBattle
     */
    omit?: PokemonBattleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonBattleInclude<ExtArgs> | null
    where?: PokemonBattleWhereInput
    orderBy?: PokemonBattleOrderByWithRelationInput | PokemonBattleOrderByWithRelationInput[]
    cursor?: PokemonBattleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PokemonBattleScalarFieldEnum | PokemonBattleScalarFieldEnum[]
  }

  /**
   * Tournament without action
   */
  export type TournamentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
  }


  /**
   * Model PokemonSkill
   */

  export type AggregatePokemonSkill = {
    _count: PokemonSkillCountAggregateOutputType | null
    _avg: PokemonSkillAvgAggregateOutputType | null
    _sum: PokemonSkillSumAggregateOutputType | null
    _min: PokemonSkillMinAggregateOutputType | null
    _max: PokemonSkillMaxAggregateOutputType | null
  }

  export type PokemonSkillAvgAggregateOutputType = {
    id: number | null
    damage: number | null
  }

  export type PokemonSkillSumAggregateOutputType = {
    id: number | null
    damage: number | null
  }

  export type PokemonSkillMinAggregateOutputType = {
    id: number | null
    is_attack: boolean | null
    name: string | null
    pokemon_type: string | null
    damage: number | null
  }

  export type PokemonSkillMaxAggregateOutputType = {
    id: number | null
    is_attack: boolean | null
    name: string | null
    pokemon_type: string | null
    damage: number | null
  }

  export type PokemonSkillCountAggregateOutputType = {
    id: number
    is_attack: number
    name: number
    pokemon_type: number
    damage: number
    _all: number
  }


  export type PokemonSkillAvgAggregateInputType = {
    id?: true
    damage?: true
  }

  export type PokemonSkillSumAggregateInputType = {
    id?: true
    damage?: true
  }

  export type PokemonSkillMinAggregateInputType = {
    id?: true
    is_attack?: true
    name?: true
    pokemon_type?: true
    damage?: true
  }

  export type PokemonSkillMaxAggregateInputType = {
    id?: true
    is_attack?: true
    name?: true
    pokemon_type?: true
    damage?: true
  }

  export type PokemonSkillCountAggregateInputType = {
    id?: true
    is_attack?: true
    name?: true
    pokemon_type?: true
    damage?: true
    _all?: true
  }

  export type PokemonSkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PokemonSkill to aggregate.
     */
    where?: PokemonSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PokemonSkills to fetch.
     */
    orderBy?: PokemonSkillOrderByWithRelationInput | PokemonSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PokemonSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PokemonSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PokemonSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PokemonSkills
    **/
    _count?: true | PokemonSkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PokemonSkillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PokemonSkillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PokemonSkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PokemonSkillMaxAggregateInputType
  }

  export type GetPokemonSkillAggregateType<T extends PokemonSkillAggregateArgs> = {
        [P in keyof T & keyof AggregatePokemonSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePokemonSkill[P]>
      : GetScalarType<T[P], AggregatePokemonSkill[P]>
  }




  export type PokemonSkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PokemonSkillWhereInput
    orderBy?: PokemonSkillOrderByWithAggregationInput | PokemonSkillOrderByWithAggregationInput[]
    by: PokemonSkillScalarFieldEnum[] | PokemonSkillScalarFieldEnum
    having?: PokemonSkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PokemonSkillCountAggregateInputType | true
    _avg?: PokemonSkillAvgAggregateInputType
    _sum?: PokemonSkillSumAggregateInputType
    _min?: PokemonSkillMinAggregateInputType
    _max?: PokemonSkillMaxAggregateInputType
  }

  export type PokemonSkillGroupByOutputType = {
    id: number
    is_attack: boolean
    name: string
    pokemon_type: string
    damage: number
    _count: PokemonSkillCountAggregateOutputType | null
    _avg: PokemonSkillAvgAggregateOutputType | null
    _sum: PokemonSkillSumAggregateOutputType | null
    _min: PokemonSkillMinAggregateOutputType | null
    _max: PokemonSkillMaxAggregateOutputType | null
  }

  type GetPokemonSkillGroupByPayload<T extends PokemonSkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PokemonSkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PokemonSkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PokemonSkillGroupByOutputType[P]>
            : GetScalarType<T[P], PokemonSkillGroupByOutputType[P]>
        }
      >
    >


  export type PokemonSkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    is_attack?: boolean
    name?: boolean
    pokemon_type?: boolean
    damage?: boolean
  }, ExtArgs["result"]["pokemonSkill"]>

  export type PokemonSkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    is_attack?: boolean
    name?: boolean
    pokemon_type?: boolean
    damage?: boolean
  }, ExtArgs["result"]["pokemonSkill"]>

  export type PokemonSkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    is_attack?: boolean
    name?: boolean
    pokemon_type?: boolean
    damage?: boolean
  }, ExtArgs["result"]["pokemonSkill"]>

  export type PokemonSkillSelectScalar = {
    id?: boolean
    is_attack?: boolean
    name?: boolean
    pokemon_type?: boolean
    damage?: boolean
  }

  export type PokemonSkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "is_attack" | "name" | "pokemon_type" | "damage", ExtArgs["result"]["pokemonSkill"]>

  export type $PokemonSkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PokemonSkill"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      is_attack: boolean
      name: string
      pokemon_type: string
      damage: number
    }, ExtArgs["result"]["pokemonSkill"]>
    composites: {}
  }

  type PokemonSkillGetPayload<S extends boolean | null | undefined | PokemonSkillDefaultArgs> = $Result.GetResult<Prisma.$PokemonSkillPayload, S>

  type PokemonSkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PokemonSkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PokemonSkillCountAggregateInputType | true
    }

  export interface PokemonSkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PokemonSkill'], meta: { name: 'PokemonSkill' } }
    /**
     * Find zero or one PokemonSkill that matches the filter.
     * @param {PokemonSkillFindUniqueArgs} args - Arguments to find a PokemonSkill
     * @example
     * // Get one PokemonSkill
     * const pokemonSkill = await prisma.pokemonSkill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PokemonSkillFindUniqueArgs>(args: SelectSubset<T, PokemonSkillFindUniqueArgs<ExtArgs>>): Prisma__PokemonSkillClient<$Result.GetResult<Prisma.$PokemonSkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PokemonSkill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PokemonSkillFindUniqueOrThrowArgs} args - Arguments to find a PokemonSkill
     * @example
     * // Get one PokemonSkill
     * const pokemonSkill = await prisma.pokemonSkill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PokemonSkillFindUniqueOrThrowArgs>(args: SelectSubset<T, PokemonSkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PokemonSkillClient<$Result.GetResult<Prisma.$PokemonSkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PokemonSkill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonSkillFindFirstArgs} args - Arguments to find a PokemonSkill
     * @example
     * // Get one PokemonSkill
     * const pokemonSkill = await prisma.pokemonSkill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PokemonSkillFindFirstArgs>(args?: SelectSubset<T, PokemonSkillFindFirstArgs<ExtArgs>>): Prisma__PokemonSkillClient<$Result.GetResult<Prisma.$PokemonSkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PokemonSkill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonSkillFindFirstOrThrowArgs} args - Arguments to find a PokemonSkill
     * @example
     * // Get one PokemonSkill
     * const pokemonSkill = await prisma.pokemonSkill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PokemonSkillFindFirstOrThrowArgs>(args?: SelectSubset<T, PokemonSkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__PokemonSkillClient<$Result.GetResult<Prisma.$PokemonSkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PokemonSkills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonSkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PokemonSkills
     * const pokemonSkills = await prisma.pokemonSkill.findMany()
     * 
     * // Get first 10 PokemonSkills
     * const pokemonSkills = await prisma.pokemonSkill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pokemonSkillWithIdOnly = await prisma.pokemonSkill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PokemonSkillFindManyArgs>(args?: SelectSubset<T, PokemonSkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PokemonSkill.
     * @param {PokemonSkillCreateArgs} args - Arguments to create a PokemonSkill.
     * @example
     * // Create one PokemonSkill
     * const PokemonSkill = await prisma.pokemonSkill.create({
     *   data: {
     *     // ... data to create a PokemonSkill
     *   }
     * })
     * 
     */
    create<T extends PokemonSkillCreateArgs>(args: SelectSubset<T, PokemonSkillCreateArgs<ExtArgs>>): Prisma__PokemonSkillClient<$Result.GetResult<Prisma.$PokemonSkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PokemonSkills.
     * @param {PokemonSkillCreateManyArgs} args - Arguments to create many PokemonSkills.
     * @example
     * // Create many PokemonSkills
     * const pokemonSkill = await prisma.pokemonSkill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PokemonSkillCreateManyArgs>(args?: SelectSubset<T, PokemonSkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PokemonSkills and returns the data saved in the database.
     * @param {PokemonSkillCreateManyAndReturnArgs} args - Arguments to create many PokemonSkills.
     * @example
     * // Create many PokemonSkills
     * const pokemonSkill = await prisma.pokemonSkill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PokemonSkills and only return the `id`
     * const pokemonSkillWithIdOnly = await prisma.pokemonSkill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PokemonSkillCreateManyAndReturnArgs>(args?: SelectSubset<T, PokemonSkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonSkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PokemonSkill.
     * @param {PokemonSkillDeleteArgs} args - Arguments to delete one PokemonSkill.
     * @example
     * // Delete one PokemonSkill
     * const PokemonSkill = await prisma.pokemonSkill.delete({
     *   where: {
     *     // ... filter to delete one PokemonSkill
     *   }
     * })
     * 
     */
    delete<T extends PokemonSkillDeleteArgs>(args: SelectSubset<T, PokemonSkillDeleteArgs<ExtArgs>>): Prisma__PokemonSkillClient<$Result.GetResult<Prisma.$PokemonSkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PokemonSkill.
     * @param {PokemonSkillUpdateArgs} args - Arguments to update one PokemonSkill.
     * @example
     * // Update one PokemonSkill
     * const pokemonSkill = await prisma.pokemonSkill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PokemonSkillUpdateArgs>(args: SelectSubset<T, PokemonSkillUpdateArgs<ExtArgs>>): Prisma__PokemonSkillClient<$Result.GetResult<Prisma.$PokemonSkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PokemonSkills.
     * @param {PokemonSkillDeleteManyArgs} args - Arguments to filter PokemonSkills to delete.
     * @example
     * // Delete a few PokemonSkills
     * const { count } = await prisma.pokemonSkill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PokemonSkillDeleteManyArgs>(args?: SelectSubset<T, PokemonSkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PokemonSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonSkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PokemonSkills
     * const pokemonSkill = await prisma.pokemonSkill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PokemonSkillUpdateManyArgs>(args: SelectSubset<T, PokemonSkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PokemonSkills and returns the data updated in the database.
     * @param {PokemonSkillUpdateManyAndReturnArgs} args - Arguments to update many PokemonSkills.
     * @example
     * // Update many PokemonSkills
     * const pokemonSkill = await prisma.pokemonSkill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PokemonSkills and only return the `id`
     * const pokemonSkillWithIdOnly = await prisma.pokemonSkill.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PokemonSkillUpdateManyAndReturnArgs>(args: SelectSubset<T, PokemonSkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonSkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PokemonSkill.
     * @param {PokemonSkillUpsertArgs} args - Arguments to update or create a PokemonSkill.
     * @example
     * // Update or create a PokemonSkill
     * const pokemonSkill = await prisma.pokemonSkill.upsert({
     *   create: {
     *     // ... data to create a PokemonSkill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PokemonSkill we want to update
     *   }
     * })
     */
    upsert<T extends PokemonSkillUpsertArgs>(args: SelectSubset<T, PokemonSkillUpsertArgs<ExtArgs>>): Prisma__PokemonSkillClient<$Result.GetResult<Prisma.$PokemonSkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PokemonSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonSkillCountArgs} args - Arguments to filter PokemonSkills to count.
     * @example
     * // Count the number of PokemonSkills
     * const count = await prisma.pokemonSkill.count({
     *   where: {
     *     // ... the filter for the PokemonSkills we want to count
     *   }
     * })
    **/
    count<T extends PokemonSkillCountArgs>(
      args?: Subset<T, PokemonSkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PokemonSkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PokemonSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonSkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PokemonSkillAggregateArgs>(args: Subset<T, PokemonSkillAggregateArgs>): Prisma.PrismaPromise<GetPokemonSkillAggregateType<T>>

    /**
     * Group by PokemonSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonSkillGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PokemonSkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PokemonSkillGroupByArgs['orderBy'] }
        : { orderBy?: PokemonSkillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PokemonSkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPokemonSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PokemonSkill model
   */
  readonly fields: PokemonSkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PokemonSkill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PokemonSkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PokemonSkill model
   */
  interface PokemonSkillFieldRefs {
    readonly id: FieldRef<"PokemonSkill", 'Int'>
    readonly is_attack: FieldRef<"PokemonSkill", 'Boolean'>
    readonly name: FieldRef<"PokemonSkill", 'String'>
    readonly pokemon_type: FieldRef<"PokemonSkill", 'String'>
    readonly damage: FieldRef<"PokemonSkill", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PokemonSkill findUnique
   */
  export type PokemonSkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonSkill
     */
    select?: PokemonSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonSkill
     */
    omit?: PokemonSkillOmit<ExtArgs> | null
    /**
     * Filter, which PokemonSkill to fetch.
     */
    where: PokemonSkillWhereUniqueInput
  }

  /**
   * PokemonSkill findUniqueOrThrow
   */
  export type PokemonSkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonSkill
     */
    select?: PokemonSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonSkill
     */
    omit?: PokemonSkillOmit<ExtArgs> | null
    /**
     * Filter, which PokemonSkill to fetch.
     */
    where: PokemonSkillWhereUniqueInput
  }

  /**
   * PokemonSkill findFirst
   */
  export type PokemonSkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonSkill
     */
    select?: PokemonSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonSkill
     */
    omit?: PokemonSkillOmit<ExtArgs> | null
    /**
     * Filter, which PokemonSkill to fetch.
     */
    where?: PokemonSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PokemonSkills to fetch.
     */
    orderBy?: PokemonSkillOrderByWithRelationInput | PokemonSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PokemonSkills.
     */
    cursor?: PokemonSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PokemonSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PokemonSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PokemonSkills.
     */
    distinct?: PokemonSkillScalarFieldEnum | PokemonSkillScalarFieldEnum[]
  }

  /**
   * PokemonSkill findFirstOrThrow
   */
  export type PokemonSkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonSkill
     */
    select?: PokemonSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonSkill
     */
    omit?: PokemonSkillOmit<ExtArgs> | null
    /**
     * Filter, which PokemonSkill to fetch.
     */
    where?: PokemonSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PokemonSkills to fetch.
     */
    orderBy?: PokemonSkillOrderByWithRelationInput | PokemonSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PokemonSkills.
     */
    cursor?: PokemonSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PokemonSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PokemonSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PokemonSkills.
     */
    distinct?: PokemonSkillScalarFieldEnum | PokemonSkillScalarFieldEnum[]
  }

  /**
   * PokemonSkill findMany
   */
  export type PokemonSkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonSkill
     */
    select?: PokemonSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonSkill
     */
    omit?: PokemonSkillOmit<ExtArgs> | null
    /**
     * Filter, which PokemonSkills to fetch.
     */
    where?: PokemonSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PokemonSkills to fetch.
     */
    orderBy?: PokemonSkillOrderByWithRelationInput | PokemonSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PokemonSkills.
     */
    cursor?: PokemonSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PokemonSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PokemonSkills.
     */
    skip?: number
    distinct?: PokemonSkillScalarFieldEnum | PokemonSkillScalarFieldEnum[]
  }

  /**
   * PokemonSkill create
   */
  export type PokemonSkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonSkill
     */
    select?: PokemonSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonSkill
     */
    omit?: PokemonSkillOmit<ExtArgs> | null
    /**
     * The data needed to create a PokemonSkill.
     */
    data: XOR<PokemonSkillCreateInput, PokemonSkillUncheckedCreateInput>
  }

  /**
   * PokemonSkill createMany
   */
  export type PokemonSkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PokemonSkills.
     */
    data: PokemonSkillCreateManyInput | PokemonSkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PokemonSkill createManyAndReturn
   */
  export type PokemonSkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonSkill
     */
    select?: PokemonSkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonSkill
     */
    omit?: PokemonSkillOmit<ExtArgs> | null
    /**
     * The data used to create many PokemonSkills.
     */
    data: PokemonSkillCreateManyInput | PokemonSkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PokemonSkill update
   */
  export type PokemonSkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonSkill
     */
    select?: PokemonSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonSkill
     */
    omit?: PokemonSkillOmit<ExtArgs> | null
    /**
     * The data needed to update a PokemonSkill.
     */
    data: XOR<PokemonSkillUpdateInput, PokemonSkillUncheckedUpdateInput>
    /**
     * Choose, which PokemonSkill to update.
     */
    where: PokemonSkillWhereUniqueInput
  }

  /**
   * PokemonSkill updateMany
   */
  export type PokemonSkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PokemonSkills.
     */
    data: XOR<PokemonSkillUpdateManyMutationInput, PokemonSkillUncheckedUpdateManyInput>
    /**
     * Filter which PokemonSkills to update
     */
    where?: PokemonSkillWhereInput
    /**
     * Limit how many PokemonSkills to update.
     */
    limit?: number
  }

  /**
   * PokemonSkill updateManyAndReturn
   */
  export type PokemonSkillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonSkill
     */
    select?: PokemonSkillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonSkill
     */
    omit?: PokemonSkillOmit<ExtArgs> | null
    /**
     * The data used to update PokemonSkills.
     */
    data: XOR<PokemonSkillUpdateManyMutationInput, PokemonSkillUncheckedUpdateManyInput>
    /**
     * Filter which PokemonSkills to update
     */
    where?: PokemonSkillWhereInput
    /**
     * Limit how many PokemonSkills to update.
     */
    limit?: number
  }

  /**
   * PokemonSkill upsert
   */
  export type PokemonSkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonSkill
     */
    select?: PokemonSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonSkill
     */
    omit?: PokemonSkillOmit<ExtArgs> | null
    /**
     * The filter to search for the PokemonSkill to update in case it exists.
     */
    where: PokemonSkillWhereUniqueInput
    /**
     * In case the PokemonSkill found by the `where` argument doesn't exist, create a new PokemonSkill with this data.
     */
    create: XOR<PokemonSkillCreateInput, PokemonSkillUncheckedCreateInput>
    /**
     * In case the PokemonSkill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PokemonSkillUpdateInput, PokemonSkillUncheckedUpdateInput>
  }

  /**
   * PokemonSkill delete
   */
  export type PokemonSkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonSkill
     */
    select?: PokemonSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonSkill
     */
    omit?: PokemonSkillOmit<ExtArgs> | null
    /**
     * Filter which PokemonSkill to delete.
     */
    where: PokemonSkillWhereUniqueInput
  }

  /**
   * PokemonSkill deleteMany
   */
  export type PokemonSkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PokemonSkills to delete
     */
    where?: PokemonSkillWhereInput
    /**
     * Limit how many PokemonSkills to delete.
     */
    limit?: number
  }

  /**
   * PokemonSkill without action
   */
  export type PokemonSkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonSkill
     */
    select?: PokemonSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonSkill
     */
    omit?: PokemonSkillOmit<ExtArgs> | null
  }


  /**
   * Model ArchivedBattles
   */

  export type AggregateArchivedBattles = {
    _count: ArchivedBattlesCountAggregateOutputType | null
    _avg: ArchivedBattlesAvgAggregateOutputType | null
    _sum: ArchivedBattlesSumAggregateOutputType | null
    _min: ArchivedBattlesMinAggregateOutputType | null
    _max: ArchivedBattlesMaxAggregateOutputType | null
  }

  export type ArchivedBattlesAvgAggregateOutputType = {
    id: number | null
    battle_history_id: number | null
  }

  export type ArchivedBattlesSumAggregateOutputType = {
    id: number | null
    battle_history_id: number | null
  }

  export type ArchivedBattlesMinAggregateOutputType = {
    id: number | null
    battle_history_id: number | null
    archive_date: Date | null
  }

  export type ArchivedBattlesMaxAggregateOutputType = {
    id: number | null
    battle_history_id: number | null
    archive_date: Date | null
  }

  export type ArchivedBattlesCountAggregateOutputType = {
    id: number
    battle_history_id: number
    archive_date: number
    _all: number
  }


  export type ArchivedBattlesAvgAggregateInputType = {
    id?: true
    battle_history_id?: true
  }

  export type ArchivedBattlesSumAggregateInputType = {
    id?: true
    battle_history_id?: true
  }

  export type ArchivedBattlesMinAggregateInputType = {
    id?: true
    battle_history_id?: true
    archive_date?: true
  }

  export type ArchivedBattlesMaxAggregateInputType = {
    id?: true
    battle_history_id?: true
    archive_date?: true
  }

  export type ArchivedBattlesCountAggregateInputType = {
    id?: true
    battle_history_id?: true
    archive_date?: true
    _all?: true
  }

  export type ArchivedBattlesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArchivedBattles to aggregate.
     */
    where?: ArchivedBattlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArchivedBattles to fetch.
     */
    orderBy?: ArchivedBattlesOrderByWithRelationInput | ArchivedBattlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArchivedBattlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArchivedBattles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArchivedBattles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArchivedBattles
    **/
    _count?: true | ArchivedBattlesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArchivedBattlesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArchivedBattlesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArchivedBattlesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArchivedBattlesMaxAggregateInputType
  }

  export type GetArchivedBattlesAggregateType<T extends ArchivedBattlesAggregateArgs> = {
        [P in keyof T & keyof AggregateArchivedBattles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArchivedBattles[P]>
      : GetScalarType<T[P], AggregateArchivedBattles[P]>
  }




  export type ArchivedBattlesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArchivedBattlesWhereInput
    orderBy?: ArchivedBattlesOrderByWithAggregationInput | ArchivedBattlesOrderByWithAggregationInput[]
    by: ArchivedBattlesScalarFieldEnum[] | ArchivedBattlesScalarFieldEnum
    having?: ArchivedBattlesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArchivedBattlesCountAggregateInputType | true
    _avg?: ArchivedBattlesAvgAggregateInputType
    _sum?: ArchivedBattlesSumAggregateInputType
    _min?: ArchivedBattlesMinAggregateInputType
    _max?: ArchivedBattlesMaxAggregateInputType
  }

  export type ArchivedBattlesGroupByOutputType = {
    id: number
    battle_history_id: number
    archive_date: Date
    _count: ArchivedBattlesCountAggregateOutputType | null
    _avg: ArchivedBattlesAvgAggregateOutputType | null
    _sum: ArchivedBattlesSumAggregateOutputType | null
    _min: ArchivedBattlesMinAggregateOutputType | null
    _max: ArchivedBattlesMaxAggregateOutputType | null
  }

  type GetArchivedBattlesGroupByPayload<T extends ArchivedBattlesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArchivedBattlesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArchivedBattlesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArchivedBattlesGroupByOutputType[P]>
            : GetScalarType<T[P], ArchivedBattlesGroupByOutputType[P]>
        }
      >
    >


  export type ArchivedBattlesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    battle_history_id?: boolean
    archive_date?: boolean
  }, ExtArgs["result"]["archivedBattles"]>

  export type ArchivedBattlesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    battle_history_id?: boolean
    archive_date?: boolean
  }, ExtArgs["result"]["archivedBattles"]>

  export type ArchivedBattlesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    battle_history_id?: boolean
    archive_date?: boolean
  }, ExtArgs["result"]["archivedBattles"]>

  export type ArchivedBattlesSelectScalar = {
    id?: boolean
    battle_history_id?: boolean
    archive_date?: boolean
  }

  export type ArchivedBattlesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "battle_history_id" | "archive_date", ExtArgs["result"]["archivedBattles"]>

  export type $ArchivedBattlesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArchivedBattles"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      battle_history_id: number
      archive_date: Date
    }, ExtArgs["result"]["archivedBattles"]>
    composites: {}
  }

  type ArchivedBattlesGetPayload<S extends boolean | null | undefined | ArchivedBattlesDefaultArgs> = $Result.GetResult<Prisma.$ArchivedBattlesPayload, S>

  type ArchivedBattlesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArchivedBattlesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArchivedBattlesCountAggregateInputType | true
    }

  export interface ArchivedBattlesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArchivedBattles'], meta: { name: 'ArchivedBattles' } }
    /**
     * Find zero or one ArchivedBattles that matches the filter.
     * @param {ArchivedBattlesFindUniqueArgs} args - Arguments to find a ArchivedBattles
     * @example
     * // Get one ArchivedBattles
     * const archivedBattles = await prisma.archivedBattles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArchivedBattlesFindUniqueArgs>(args: SelectSubset<T, ArchivedBattlesFindUniqueArgs<ExtArgs>>): Prisma__ArchivedBattlesClient<$Result.GetResult<Prisma.$ArchivedBattlesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArchivedBattles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArchivedBattlesFindUniqueOrThrowArgs} args - Arguments to find a ArchivedBattles
     * @example
     * // Get one ArchivedBattles
     * const archivedBattles = await prisma.archivedBattles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArchivedBattlesFindUniqueOrThrowArgs>(args: SelectSubset<T, ArchivedBattlesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArchivedBattlesClient<$Result.GetResult<Prisma.$ArchivedBattlesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArchivedBattles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchivedBattlesFindFirstArgs} args - Arguments to find a ArchivedBattles
     * @example
     * // Get one ArchivedBattles
     * const archivedBattles = await prisma.archivedBattles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArchivedBattlesFindFirstArgs>(args?: SelectSubset<T, ArchivedBattlesFindFirstArgs<ExtArgs>>): Prisma__ArchivedBattlesClient<$Result.GetResult<Prisma.$ArchivedBattlesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArchivedBattles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchivedBattlesFindFirstOrThrowArgs} args - Arguments to find a ArchivedBattles
     * @example
     * // Get one ArchivedBattles
     * const archivedBattles = await prisma.archivedBattles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArchivedBattlesFindFirstOrThrowArgs>(args?: SelectSubset<T, ArchivedBattlesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArchivedBattlesClient<$Result.GetResult<Prisma.$ArchivedBattlesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArchivedBattles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchivedBattlesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArchivedBattles
     * const archivedBattles = await prisma.archivedBattles.findMany()
     * 
     * // Get first 10 ArchivedBattles
     * const archivedBattles = await prisma.archivedBattles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const archivedBattlesWithIdOnly = await prisma.archivedBattles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArchivedBattlesFindManyArgs>(args?: SelectSubset<T, ArchivedBattlesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArchivedBattlesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArchivedBattles.
     * @param {ArchivedBattlesCreateArgs} args - Arguments to create a ArchivedBattles.
     * @example
     * // Create one ArchivedBattles
     * const ArchivedBattles = await prisma.archivedBattles.create({
     *   data: {
     *     // ... data to create a ArchivedBattles
     *   }
     * })
     * 
     */
    create<T extends ArchivedBattlesCreateArgs>(args: SelectSubset<T, ArchivedBattlesCreateArgs<ExtArgs>>): Prisma__ArchivedBattlesClient<$Result.GetResult<Prisma.$ArchivedBattlesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArchivedBattles.
     * @param {ArchivedBattlesCreateManyArgs} args - Arguments to create many ArchivedBattles.
     * @example
     * // Create many ArchivedBattles
     * const archivedBattles = await prisma.archivedBattles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArchivedBattlesCreateManyArgs>(args?: SelectSubset<T, ArchivedBattlesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ArchivedBattles and returns the data saved in the database.
     * @param {ArchivedBattlesCreateManyAndReturnArgs} args - Arguments to create many ArchivedBattles.
     * @example
     * // Create many ArchivedBattles
     * const archivedBattles = await prisma.archivedBattles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ArchivedBattles and only return the `id`
     * const archivedBattlesWithIdOnly = await prisma.archivedBattles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArchivedBattlesCreateManyAndReturnArgs>(args?: SelectSubset<T, ArchivedBattlesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArchivedBattlesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ArchivedBattles.
     * @param {ArchivedBattlesDeleteArgs} args - Arguments to delete one ArchivedBattles.
     * @example
     * // Delete one ArchivedBattles
     * const ArchivedBattles = await prisma.archivedBattles.delete({
     *   where: {
     *     // ... filter to delete one ArchivedBattles
     *   }
     * })
     * 
     */
    delete<T extends ArchivedBattlesDeleteArgs>(args: SelectSubset<T, ArchivedBattlesDeleteArgs<ExtArgs>>): Prisma__ArchivedBattlesClient<$Result.GetResult<Prisma.$ArchivedBattlesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArchivedBattles.
     * @param {ArchivedBattlesUpdateArgs} args - Arguments to update one ArchivedBattles.
     * @example
     * // Update one ArchivedBattles
     * const archivedBattles = await prisma.archivedBattles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArchivedBattlesUpdateArgs>(args: SelectSubset<T, ArchivedBattlesUpdateArgs<ExtArgs>>): Prisma__ArchivedBattlesClient<$Result.GetResult<Prisma.$ArchivedBattlesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArchivedBattles.
     * @param {ArchivedBattlesDeleteManyArgs} args - Arguments to filter ArchivedBattles to delete.
     * @example
     * // Delete a few ArchivedBattles
     * const { count } = await prisma.archivedBattles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArchivedBattlesDeleteManyArgs>(args?: SelectSubset<T, ArchivedBattlesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArchivedBattles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchivedBattlesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArchivedBattles
     * const archivedBattles = await prisma.archivedBattles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArchivedBattlesUpdateManyArgs>(args: SelectSubset<T, ArchivedBattlesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArchivedBattles and returns the data updated in the database.
     * @param {ArchivedBattlesUpdateManyAndReturnArgs} args - Arguments to update many ArchivedBattles.
     * @example
     * // Update many ArchivedBattles
     * const archivedBattles = await prisma.archivedBattles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ArchivedBattles and only return the `id`
     * const archivedBattlesWithIdOnly = await prisma.archivedBattles.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArchivedBattlesUpdateManyAndReturnArgs>(args: SelectSubset<T, ArchivedBattlesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArchivedBattlesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ArchivedBattles.
     * @param {ArchivedBattlesUpsertArgs} args - Arguments to update or create a ArchivedBattles.
     * @example
     * // Update or create a ArchivedBattles
     * const archivedBattles = await prisma.archivedBattles.upsert({
     *   create: {
     *     // ... data to create a ArchivedBattles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArchivedBattles we want to update
     *   }
     * })
     */
    upsert<T extends ArchivedBattlesUpsertArgs>(args: SelectSubset<T, ArchivedBattlesUpsertArgs<ExtArgs>>): Prisma__ArchivedBattlesClient<$Result.GetResult<Prisma.$ArchivedBattlesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArchivedBattles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchivedBattlesCountArgs} args - Arguments to filter ArchivedBattles to count.
     * @example
     * // Count the number of ArchivedBattles
     * const count = await prisma.archivedBattles.count({
     *   where: {
     *     // ... the filter for the ArchivedBattles we want to count
     *   }
     * })
    **/
    count<T extends ArchivedBattlesCountArgs>(
      args?: Subset<T, ArchivedBattlesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArchivedBattlesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArchivedBattles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchivedBattlesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArchivedBattlesAggregateArgs>(args: Subset<T, ArchivedBattlesAggregateArgs>): Prisma.PrismaPromise<GetArchivedBattlesAggregateType<T>>

    /**
     * Group by ArchivedBattles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchivedBattlesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArchivedBattlesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArchivedBattlesGroupByArgs['orderBy'] }
        : { orderBy?: ArchivedBattlesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArchivedBattlesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArchivedBattlesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArchivedBattles model
   */
  readonly fields: ArchivedBattlesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArchivedBattles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArchivedBattlesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ArchivedBattles model
   */
  interface ArchivedBattlesFieldRefs {
    readonly id: FieldRef<"ArchivedBattles", 'Int'>
    readonly battle_history_id: FieldRef<"ArchivedBattles", 'Int'>
    readonly archive_date: FieldRef<"ArchivedBattles", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ArchivedBattles findUnique
   */
  export type ArchivedBattlesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchivedBattles
     */
    select?: ArchivedBattlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArchivedBattles
     */
    omit?: ArchivedBattlesOmit<ExtArgs> | null
    /**
     * Filter, which ArchivedBattles to fetch.
     */
    where: ArchivedBattlesWhereUniqueInput
  }

  /**
   * ArchivedBattles findUniqueOrThrow
   */
  export type ArchivedBattlesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchivedBattles
     */
    select?: ArchivedBattlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArchivedBattles
     */
    omit?: ArchivedBattlesOmit<ExtArgs> | null
    /**
     * Filter, which ArchivedBattles to fetch.
     */
    where: ArchivedBattlesWhereUniqueInput
  }

  /**
   * ArchivedBattles findFirst
   */
  export type ArchivedBattlesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchivedBattles
     */
    select?: ArchivedBattlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArchivedBattles
     */
    omit?: ArchivedBattlesOmit<ExtArgs> | null
    /**
     * Filter, which ArchivedBattles to fetch.
     */
    where?: ArchivedBattlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArchivedBattles to fetch.
     */
    orderBy?: ArchivedBattlesOrderByWithRelationInput | ArchivedBattlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArchivedBattles.
     */
    cursor?: ArchivedBattlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArchivedBattles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArchivedBattles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArchivedBattles.
     */
    distinct?: ArchivedBattlesScalarFieldEnum | ArchivedBattlesScalarFieldEnum[]
  }

  /**
   * ArchivedBattles findFirstOrThrow
   */
  export type ArchivedBattlesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchivedBattles
     */
    select?: ArchivedBattlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArchivedBattles
     */
    omit?: ArchivedBattlesOmit<ExtArgs> | null
    /**
     * Filter, which ArchivedBattles to fetch.
     */
    where?: ArchivedBattlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArchivedBattles to fetch.
     */
    orderBy?: ArchivedBattlesOrderByWithRelationInput | ArchivedBattlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArchivedBattles.
     */
    cursor?: ArchivedBattlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArchivedBattles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArchivedBattles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArchivedBattles.
     */
    distinct?: ArchivedBattlesScalarFieldEnum | ArchivedBattlesScalarFieldEnum[]
  }

  /**
   * ArchivedBattles findMany
   */
  export type ArchivedBattlesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchivedBattles
     */
    select?: ArchivedBattlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArchivedBattles
     */
    omit?: ArchivedBattlesOmit<ExtArgs> | null
    /**
     * Filter, which ArchivedBattles to fetch.
     */
    where?: ArchivedBattlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArchivedBattles to fetch.
     */
    orderBy?: ArchivedBattlesOrderByWithRelationInput | ArchivedBattlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArchivedBattles.
     */
    cursor?: ArchivedBattlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArchivedBattles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArchivedBattles.
     */
    skip?: number
    distinct?: ArchivedBattlesScalarFieldEnum | ArchivedBattlesScalarFieldEnum[]
  }

  /**
   * ArchivedBattles create
   */
  export type ArchivedBattlesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchivedBattles
     */
    select?: ArchivedBattlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArchivedBattles
     */
    omit?: ArchivedBattlesOmit<ExtArgs> | null
    /**
     * The data needed to create a ArchivedBattles.
     */
    data: XOR<ArchivedBattlesCreateInput, ArchivedBattlesUncheckedCreateInput>
  }

  /**
   * ArchivedBattles createMany
   */
  export type ArchivedBattlesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArchivedBattles.
     */
    data: ArchivedBattlesCreateManyInput | ArchivedBattlesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArchivedBattles createManyAndReturn
   */
  export type ArchivedBattlesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchivedBattles
     */
    select?: ArchivedBattlesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArchivedBattles
     */
    omit?: ArchivedBattlesOmit<ExtArgs> | null
    /**
     * The data used to create many ArchivedBattles.
     */
    data: ArchivedBattlesCreateManyInput | ArchivedBattlesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArchivedBattles update
   */
  export type ArchivedBattlesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchivedBattles
     */
    select?: ArchivedBattlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArchivedBattles
     */
    omit?: ArchivedBattlesOmit<ExtArgs> | null
    /**
     * The data needed to update a ArchivedBattles.
     */
    data: XOR<ArchivedBattlesUpdateInput, ArchivedBattlesUncheckedUpdateInput>
    /**
     * Choose, which ArchivedBattles to update.
     */
    where: ArchivedBattlesWhereUniqueInput
  }

  /**
   * ArchivedBattles updateMany
   */
  export type ArchivedBattlesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArchivedBattles.
     */
    data: XOR<ArchivedBattlesUpdateManyMutationInput, ArchivedBattlesUncheckedUpdateManyInput>
    /**
     * Filter which ArchivedBattles to update
     */
    where?: ArchivedBattlesWhereInput
    /**
     * Limit how many ArchivedBattles to update.
     */
    limit?: number
  }

  /**
   * ArchivedBattles updateManyAndReturn
   */
  export type ArchivedBattlesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchivedBattles
     */
    select?: ArchivedBattlesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArchivedBattles
     */
    omit?: ArchivedBattlesOmit<ExtArgs> | null
    /**
     * The data used to update ArchivedBattles.
     */
    data: XOR<ArchivedBattlesUpdateManyMutationInput, ArchivedBattlesUncheckedUpdateManyInput>
    /**
     * Filter which ArchivedBattles to update
     */
    where?: ArchivedBattlesWhereInput
    /**
     * Limit how many ArchivedBattles to update.
     */
    limit?: number
  }

  /**
   * ArchivedBattles upsert
   */
  export type ArchivedBattlesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchivedBattles
     */
    select?: ArchivedBattlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArchivedBattles
     */
    omit?: ArchivedBattlesOmit<ExtArgs> | null
    /**
     * The filter to search for the ArchivedBattles to update in case it exists.
     */
    where: ArchivedBattlesWhereUniqueInput
    /**
     * In case the ArchivedBattles found by the `where` argument doesn't exist, create a new ArchivedBattles with this data.
     */
    create: XOR<ArchivedBattlesCreateInput, ArchivedBattlesUncheckedCreateInput>
    /**
     * In case the ArchivedBattles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArchivedBattlesUpdateInput, ArchivedBattlesUncheckedUpdateInput>
  }

  /**
   * ArchivedBattles delete
   */
  export type ArchivedBattlesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchivedBattles
     */
    select?: ArchivedBattlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArchivedBattles
     */
    omit?: ArchivedBattlesOmit<ExtArgs> | null
    /**
     * Filter which ArchivedBattles to delete.
     */
    where: ArchivedBattlesWhereUniqueInput
  }

  /**
   * ArchivedBattles deleteMany
   */
  export type ArchivedBattlesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArchivedBattles to delete
     */
    where?: ArchivedBattlesWhereInput
    /**
     * Limit how many ArchivedBattles to delete.
     */
    limit?: number
  }

  /**
   * ArchivedBattles without action
   */
  export type ArchivedBattlesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchivedBattles
     */
    select?: ArchivedBattlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArchivedBattles
     */
    omit?: ArchivedBattlesOmit<ExtArgs> | null
  }


  /**
   * Model PokemonBattleHistory
   */

  export type AggregatePokemonBattleHistory = {
    _count: PokemonBattleHistoryCountAggregateOutputType | null
    _avg: PokemonBattleHistoryAvgAggregateOutputType | null
    _sum: PokemonBattleHistorySumAggregateOutputType | null
    _min: PokemonBattleHistoryMinAggregateOutputType | null
    _max: PokemonBattleHistoryMaxAggregateOutputType | null
  }

  export type PokemonBattleHistoryAvgAggregateOutputType = {
    id: number | null
    battle_id: number | null
    pokemon_1_id: number | null
    pokemon_2_id: number | null
    pokemon_1_seed: number | null
    pokemon_2_seed: number | null
    winner_pokemon_id: number | null
    battle_duration: number | null
  }

  export type PokemonBattleHistorySumAggregateOutputType = {
    id: number | null
    battle_id: number | null
    pokemon_1_id: number | null
    pokemon_2_id: number | null
    pokemon_1_seed: number | null
    pokemon_2_seed: number | null
    winner_pokemon_id: number | null
    battle_duration: number | null
  }

  export type PokemonBattleHistoryMinAggregateOutputType = {
    id: number | null
    battle_id: number | null
    pokemon_1_id: number | null
    pokemon_2_id: number | null
    pokemon_1_seed: number | null
    pokemon_2_seed: number | null
    battle_date: Date | null
    winner_pokemon_id: number | null
    battle_duration: number | null
  }

  export type PokemonBattleHistoryMaxAggregateOutputType = {
    id: number | null
    battle_id: number | null
    pokemon_1_id: number | null
    pokemon_2_id: number | null
    pokemon_1_seed: number | null
    pokemon_2_seed: number | null
    battle_date: Date | null
    winner_pokemon_id: number | null
    battle_duration: number | null
  }

  export type PokemonBattleHistoryCountAggregateOutputType = {
    id: number
    battle_id: number
    pokemon_1_id: number
    pokemon_2_id: number
    pokemon_1_seed: number
    pokemon_2_seed: number
    battle_date: number
    winner_pokemon_id: number
    battle_duration: number
    battle_log: number
    _all: number
  }


  export type PokemonBattleHistoryAvgAggregateInputType = {
    id?: true
    battle_id?: true
    pokemon_1_id?: true
    pokemon_2_id?: true
    pokemon_1_seed?: true
    pokemon_2_seed?: true
    winner_pokemon_id?: true
    battle_duration?: true
  }

  export type PokemonBattleHistorySumAggregateInputType = {
    id?: true
    battle_id?: true
    pokemon_1_id?: true
    pokemon_2_id?: true
    pokemon_1_seed?: true
    pokemon_2_seed?: true
    winner_pokemon_id?: true
    battle_duration?: true
  }

  export type PokemonBattleHistoryMinAggregateInputType = {
    id?: true
    battle_id?: true
    pokemon_1_id?: true
    pokemon_2_id?: true
    pokemon_1_seed?: true
    pokemon_2_seed?: true
    battle_date?: true
    winner_pokemon_id?: true
    battle_duration?: true
  }

  export type PokemonBattleHistoryMaxAggregateInputType = {
    id?: true
    battle_id?: true
    pokemon_1_id?: true
    pokemon_2_id?: true
    pokemon_1_seed?: true
    pokemon_2_seed?: true
    battle_date?: true
    winner_pokemon_id?: true
    battle_duration?: true
  }

  export type PokemonBattleHistoryCountAggregateInputType = {
    id?: true
    battle_id?: true
    pokemon_1_id?: true
    pokemon_2_id?: true
    pokemon_1_seed?: true
    pokemon_2_seed?: true
    battle_date?: true
    winner_pokemon_id?: true
    battle_duration?: true
    battle_log?: true
    _all?: true
  }

  export type PokemonBattleHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PokemonBattleHistory to aggregate.
     */
    where?: PokemonBattleHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PokemonBattleHistories to fetch.
     */
    orderBy?: PokemonBattleHistoryOrderByWithRelationInput | PokemonBattleHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PokemonBattleHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PokemonBattleHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PokemonBattleHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PokemonBattleHistories
    **/
    _count?: true | PokemonBattleHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PokemonBattleHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PokemonBattleHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PokemonBattleHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PokemonBattleHistoryMaxAggregateInputType
  }

  export type GetPokemonBattleHistoryAggregateType<T extends PokemonBattleHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregatePokemonBattleHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePokemonBattleHistory[P]>
      : GetScalarType<T[P], AggregatePokemonBattleHistory[P]>
  }




  export type PokemonBattleHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PokemonBattleHistoryWhereInput
    orderBy?: PokemonBattleHistoryOrderByWithAggregationInput | PokemonBattleHistoryOrderByWithAggregationInput[]
    by: PokemonBattleHistoryScalarFieldEnum[] | PokemonBattleHistoryScalarFieldEnum
    having?: PokemonBattleHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PokemonBattleHistoryCountAggregateInputType | true
    _avg?: PokemonBattleHistoryAvgAggregateInputType
    _sum?: PokemonBattleHistorySumAggregateInputType
    _min?: PokemonBattleHistoryMinAggregateInputType
    _max?: PokemonBattleHistoryMaxAggregateInputType
  }

  export type PokemonBattleHistoryGroupByOutputType = {
    id: number
    battle_id: number
    pokemon_1_id: number
    pokemon_2_id: number
    pokemon_1_seed: number
    pokemon_2_seed: number
    battle_date: Date
    winner_pokemon_id: number
    battle_duration: number
    battle_log: JsonValue
    _count: PokemonBattleHistoryCountAggregateOutputType | null
    _avg: PokemonBattleHistoryAvgAggregateOutputType | null
    _sum: PokemonBattleHistorySumAggregateOutputType | null
    _min: PokemonBattleHistoryMinAggregateOutputType | null
    _max: PokemonBattleHistoryMaxAggregateOutputType | null
  }

  type GetPokemonBattleHistoryGroupByPayload<T extends PokemonBattleHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PokemonBattleHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PokemonBattleHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PokemonBattleHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], PokemonBattleHistoryGroupByOutputType[P]>
        }
      >
    >


  export type PokemonBattleHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    battle_id?: boolean
    pokemon_1_id?: boolean
    pokemon_2_id?: boolean
    pokemon_1_seed?: boolean
    pokemon_2_seed?: boolean
    battle_date?: boolean
    winner_pokemon_id?: boolean
    battle_duration?: boolean
    battle_log?: boolean
  }, ExtArgs["result"]["pokemonBattleHistory"]>

  export type PokemonBattleHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    battle_id?: boolean
    pokemon_1_id?: boolean
    pokemon_2_id?: boolean
    pokemon_1_seed?: boolean
    pokemon_2_seed?: boolean
    battle_date?: boolean
    winner_pokemon_id?: boolean
    battle_duration?: boolean
    battle_log?: boolean
  }, ExtArgs["result"]["pokemonBattleHistory"]>

  export type PokemonBattleHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    battle_id?: boolean
    pokemon_1_id?: boolean
    pokemon_2_id?: boolean
    pokemon_1_seed?: boolean
    pokemon_2_seed?: boolean
    battle_date?: boolean
    winner_pokemon_id?: boolean
    battle_duration?: boolean
    battle_log?: boolean
  }, ExtArgs["result"]["pokemonBattleHistory"]>

  export type PokemonBattleHistorySelectScalar = {
    id?: boolean
    battle_id?: boolean
    pokemon_1_id?: boolean
    pokemon_2_id?: boolean
    pokemon_1_seed?: boolean
    pokemon_2_seed?: boolean
    battle_date?: boolean
    winner_pokemon_id?: boolean
    battle_duration?: boolean
    battle_log?: boolean
  }

  export type PokemonBattleHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "battle_id" | "pokemon_1_id" | "pokemon_2_id" | "pokemon_1_seed" | "pokemon_2_seed" | "battle_date" | "winner_pokemon_id" | "battle_duration" | "battle_log", ExtArgs["result"]["pokemonBattleHistory"]>

  export type $PokemonBattleHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PokemonBattleHistory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      battle_id: number
      pokemon_1_id: number
      pokemon_2_id: number
      pokemon_1_seed: number
      pokemon_2_seed: number
      battle_date: Date
      winner_pokemon_id: number
      battle_duration: number
      battle_log: Prisma.JsonValue
    }, ExtArgs["result"]["pokemonBattleHistory"]>
    composites: {}
  }

  type PokemonBattleHistoryGetPayload<S extends boolean | null | undefined | PokemonBattleHistoryDefaultArgs> = $Result.GetResult<Prisma.$PokemonBattleHistoryPayload, S>

  type PokemonBattleHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PokemonBattleHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PokemonBattleHistoryCountAggregateInputType | true
    }

  export interface PokemonBattleHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PokemonBattleHistory'], meta: { name: 'PokemonBattleHistory' } }
    /**
     * Find zero or one PokemonBattleHistory that matches the filter.
     * @param {PokemonBattleHistoryFindUniqueArgs} args - Arguments to find a PokemonBattleHistory
     * @example
     * // Get one PokemonBattleHistory
     * const pokemonBattleHistory = await prisma.pokemonBattleHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PokemonBattleHistoryFindUniqueArgs>(args: SelectSubset<T, PokemonBattleHistoryFindUniqueArgs<ExtArgs>>): Prisma__PokemonBattleHistoryClient<$Result.GetResult<Prisma.$PokemonBattleHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PokemonBattleHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PokemonBattleHistoryFindUniqueOrThrowArgs} args - Arguments to find a PokemonBattleHistory
     * @example
     * // Get one PokemonBattleHistory
     * const pokemonBattleHistory = await prisma.pokemonBattleHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PokemonBattleHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, PokemonBattleHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PokemonBattleHistoryClient<$Result.GetResult<Prisma.$PokemonBattleHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PokemonBattleHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonBattleHistoryFindFirstArgs} args - Arguments to find a PokemonBattleHistory
     * @example
     * // Get one PokemonBattleHistory
     * const pokemonBattleHistory = await prisma.pokemonBattleHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PokemonBattleHistoryFindFirstArgs>(args?: SelectSubset<T, PokemonBattleHistoryFindFirstArgs<ExtArgs>>): Prisma__PokemonBattleHistoryClient<$Result.GetResult<Prisma.$PokemonBattleHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PokemonBattleHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonBattleHistoryFindFirstOrThrowArgs} args - Arguments to find a PokemonBattleHistory
     * @example
     * // Get one PokemonBattleHistory
     * const pokemonBattleHistory = await prisma.pokemonBattleHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PokemonBattleHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, PokemonBattleHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__PokemonBattleHistoryClient<$Result.GetResult<Prisma.$PokemonBattleHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PokemonBattleHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonBattleHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PokemonBattleHistories
     * const pokemonBattleHistories = await prisma.pokemonBattleHistory.findMany()
     * 
     * // Get first 10 PokemonBattleHistories
     * const pokemonBattleHistories = await prisma.pokemonBattleHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pokemonBattleHistoryWithIdOnly = await prisma.pokemonBattleHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PokemonBattleHistoryFindManyArgs>(args?: SelectSubset<T, PokemonBattleHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonBattleHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PokemonBattleHistory.
     * @param {PokemonBattleHistoryCreateArgs} args - Arguments to create a PokemonBattleHistory.
     * @example
     * // Create one PokemonBattleHistory
     * const PokemonBattleHistory = await prisma.pokemonBattleHistory.create({
     *   data: {
     *     // ... data to create a PokemonBattleHistory
     *   }
     * })
     * 
     */
    create<T extends PokemonBattleHistoryCreateArgs>(args: SelectSubset<T, PokemonBattleHistoryCreateArgs<ExtArgs>>): Prisma__PokemonBattleHistoryClient<$Result.GetResult<Prisma.$PokemonBattleHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PokemonBattleHistories.
     * @param {PokemonBattleHistoryCreateManyArgs} args - Arguments to create many PokemonBattleHistories.
     * @example
     * // Create many PokemonBattleHistories
     * const pokemonBattleHistory = await prisma.pokemonBattleHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PokemonBattleHistoryCreateManyArgs>(args?: SelectSubset<T, PokemonBattleHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PokemonBattleHistories and returns the data saved in the database.
     * @param {PokemonBattleHistoryCreateManyAndReturnArgs} args - Arguments to create many PokemonBattleHistories.
     * @example
     * // Create many PokemonBattleHistories
     * const pokemonBattleHistory = await prisma.pokemonBattleHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PokemonBattleHistories and only return the `id`
     * const pokemonBattleHistoryWithIdOnly = await prisma.pokemonBattleHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PokemonBattleHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, PokemonBattleHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonBattleHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PokemonBattleHistory.
     * @param {PokemonBattleHistoryDeleteArgs} args - Arguments to delete one PokemonBattleHistory.
     * @example
     * // Delete one PokemonBattleHistory
     * const PokemonBattleHistory = await prisma.pokemonBattleHistory.delete({
     *   where: {
     *     // ... filter to delete one PokemonBattleHistory
     *   }
     * })
     * 
     */
    delete<T extends PokemonBattleHistoryDeleteArgs>(args: SelectSubset<T, PokemonBattleHistoryDeleteArgs<ExtArgs>>): Prisma__PokemonBattleHistoryClient<$Result.GetResult<Prisma.$PokemonBattleHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PokemonBattleHistory.
     * @param {PokemonBattleHistoryUpdateArgs} args - Arguments to update one PokemonBattleHistory.
     * @example
     * // Update one PokemonBattleHistory
     * const pokemonBattleHistory = await prisma.pokemonBattleHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PokemonBattleHistoryUpdateArgs>(args: SelectSubset<T, PokemonBattleHistoryUpdateArgs<ExtArgs>>): Prisma__PokemonBattleHistoryClient<$Result.GetResult<Prisma.$PokemonBattleHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PokemonBattleHistories.
     * @param {PokemonBattleHistoryDeleteManyArgs} args - Arguments to filter PokemonBattleHistories to delete.
     * @example
     * // Delete a few PokemonBattleHistories
     * const { count } = await prisma.pokemonBattleHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PokemonBattleHistoryDeleteManyArgs>(args?: SelectSubset<T, PokemonBattleHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PokemonBattleHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonBattleHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PokemonBattleHistories
     * const pokemonBattleHistory = await prisma.pokemonBattleHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PokemonBattleHistoryUpdateManyArgs>(args: SelectSubset<T, PokemonBattleHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PokemonBattleHistories and returns the data updated in the database.
     * @param {PokemonBattleHistoryUpdateManyAndReturnArgs} args - Arguments to update many PokemonBattleHistories.
     * @example
     * // Update many PokemonBattleHistories
     * const pokemonBattleHistory = await prisma.pokemonBattleHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PokemonBattleHistories and only return the `id`
     * const pokemonBattleHistoryWithIdOnly = await prisma.pokemonBattleHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PokemonBattleHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, PokemonBattleHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonBattleHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PokemonBattleHistory.
     * @param {PokemonBattleHistoryUpsertArgs} args - Arguments to update or create a PokemonBattleHistory.
     * @example
     * // Update or create a PokemonBattleHistory
     * const pokemonBattleHistory = await prisma.pokemonBattleHistory.upsert({
     *   create: {
     *     // ... data to create a PokemonBattleHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PokemonBattleHistory we want to update
     *   }
     * })
     */
    upsert<T extends PokemonBattleHistoryUpsertArgs>(args: SelectSubset<T, PokemonBattleHistoryUpsertArgs<ExtArgs>>): Prisma__PokemonBattleHistoryClient<$Result.GetResult<Prisma.$PokemonBattleHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PokemonBattleHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonBattleHistoryCountArgs} args - Arguments to filter PokemonBattleHistories to count.
     * @example
     * // Count the number of PokemonBattleHistories
     * const count = await prisma.pokemonBattleHistory.count({
     *   where: {
     *     // ... the filter for the PokemonBattleHistories we want to count
     *   }
     * })
    **/
    count<T extends PokemonBattleHistoryCountArgs>(
      args?: Subset<T, PokemonBattleHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PokemonBattleHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PokemonBattleHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonBattleHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PokemonBattleHistoryAggregateArgs>(args: Subset<T, PokemonBattleHistoryAggregateArgs>): Prisma.PrismaPromise<GetPokemonBattleHistoryAggregateType<T>>

    /**
     * Group by PokemonBattleHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonBattleHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PokemonBattleHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PokemonBattleHistoryGroupByArgs['orderBy'] }
        : { orderBy?: PokemonBattleHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PokemonBattleHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPokemonBattleHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PokemonBattleHistory model
   */
  readonly fields: PokemonBattleHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PokemonBattleHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PokemonBattleHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PokemonBattleHistory model
   */
  interface PokemonBattleHistoryFieldRefs {
    readonly id: FieldRef<"PokemonBattleHistory", 'Int'>
    readonly battle_id: FieldRef<"PokemonBattleHistory", 'Int'>
    readonly pokemon_1_id: FieldRef<"PokemonBattleHistory", 'Int'>
    readonly pokemon_2_id: FieldRef<"PokemonBattleHistory", 'Int'>
    readonly pokemon_1_seed: FieldRef<"PokemonBattleHistory", 'Int'>
    readonly pokemon_2_seed: FieldRef<"PokemonBattleHistory", 'Int'>
    readonly battle_date: FieldRef<"PokemonBattleHistory", 'DateTime'>
    readonly winner_pokemon_id: FieldRef<"PokemonBattleHistory", 'Int'>
    readonly battle_duration: FieldRef<"PokemonBattleHistory", 'Int'>
    readonly battle_log: FieldRef<"PokemonBattleHistory", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * PokemonBattleHistory findUnique
   */
  export type PokemonBattleHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonBattleHistory
     */
    select?: PokemonBattleHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonBattleHistory
     */
    omit?: PokemonBattleHistoryOmit<ExtArgs> | null
    /**
     * Filter, which PokemonBattleHistory to fetch.
     */
    where: PokemonBattleHistoryWhereUniqueInput
  }

  /**
   * PokemonBattleHistory findUniqueOrThrow
   */
  export type PokemonBattleHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonBattleHistory
     */
    select?: PokemonBattleHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonBattleHistory
     */
    omit?: PokemonBattleHistoryOmit<ExtArgs> | null
    /**
     * Filter, which PokemonBattleHistory to fetch.
     */
    where: PokemonBattleHistoryWhereUniqueInput
  }

  /**
   * PokemonBattleHistory findFirst
   */
  export type PokemonBattleHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonBattleHistory
     */
    select?: PokemonBattleHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonBattleHistory
     */
    omit?: PokemonBattleHistoryOmit<ExtArgs> | null
    /**
     * Filter, which PokemonBattleHistory to fetch.
     */
    where?: PokemonBattleHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PokemonBattleHistories to fetch.
     */
    orderBy?: PokemonBattleHistoryOrderByWithRelationInput | PokemonBattleHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PokemonBattleHistories.
     */
    cursor?: PokemonBattleHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PokemonBattleHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PokemonBattleHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PokemonBattleHistories.
     */
    distinct?: PokemonBattleHistoryScalarFieldEnum | PokemonBattleHistoryScalarFieldEnum[]
  }

  /**
   * PokemonBattleHistory findFirstOrThrow
   */
  export type PokemonBattleHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonBattleHistory
     */
    select?: PokemonBattleHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonBattleHistory
     */
    omit?: PokemonBattleHistoryOmit<ExtArgs> | null
    /**
     * Filter, which PokemonBattleHistory to fetch.
     */
    where?: PokemonBattleHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PokemonBattleHistories to fetch.
     */
    orderBy?: PokemonBattleHistoryOrderByWithRelationInput | PokemonBattleHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PokemonBattleHistories.
     */
    cursor?: PokemonBattleHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PokemonBattleHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PokemonBattleHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PokemonBattleHistories.
     */
    distinct?: PokemonBattleHistoryScalarFieldEnum | PokemonBattleHistoryScalarFieldEnum[]
  }

  /**
   * PokemonBattleHistory findMany
   */
  export type PokemonBattleHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonBattleHistory
     */
    select?: PokemonBattleHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonBattleHistory
     */
    omit?: PokemonBattleHistoryOmit<ExtArgs> | null
    /**
     * Filter, which PokemonBattleHistories to fetch.
     */
    where?: PokemonBattleHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PokemonBattleHistories to fetch.
     */
    orderBy?: PokemonBattleHistoryOrderByWithRelationInput | PokemonBattleHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PokemonBattleHistories.
     */
    cursor?: PokemonBattleHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PokemonBattleHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PokemonBattleHistories.
     */
    skip?: number
    distinct?: PokemonBattleHistoryScalarFieldEnum | PokemonBattleHistoryScalarFieldEnum[]
  }

  /**
   * PokemonBattleHistory create
   */
  export type PokemonBattleHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonBattleHistory
     */
    select?: PokemonBattleHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonBattleHistory
     */
    omit?: PokemonBattleHistoryOmit<ExtArgs> | null
    /**
     * The data needed to create a PokemonBattleHistory.
     */
    data: XOR<PokemonBattleHistoryCreateInput, PokemonBattleHistoryUncheckedCreateInput>
  }

  /**
   * PokemonBattleHistory createMany
   */
  export type PokemonBattleHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PokemonBattleHistories.
     */
    data: PokemonBattleHistoryCreateManyInput | PokemonBattleHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PokemonBattleHistory createManyAndReturn
   */
  export type PokemonBattleHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonBattleHistory
     */
    select?: PokemonBattleHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonBattleHistory
     */
    omit?: PokemonBattleHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many PokemonBattleHistories.
     */
    data: PokemonBattleHistoryCreateManyInput | PokemonBattleHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PokemonBattleHistory update
   */
  export type PokemonBattleHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonBattleHistory
     */
    select?: PokemonBattleHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonBattleHistory
     */
    omit?: PokemonBattleHistoryOmit<ExtArgs> | null
    /**
     * The data needed to update a PokemonBattleHistory.
     */
    data: XOR<PokemonBattleHistoryUpdateInput, PokemonBattleHistoryUncheckedUpdateInput>
    /**
     * Choose, which PokemonBattleHistory to update.
     */
    where: PokemonBattleHistoryWhereUniqueInput
  }

  /**
   * PokemonBattleHistory updateMany
   */
  export type PokemonBattleHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PokemonBattleHistories.
     */
    data: XOR<PokemonBattleHistoryUpdateManyMutationInput, PokemonBattleHistoryUncheckedUpdateManyInput>
    /**
     * Filter which PokemonBattleHistories to update
     */
    where?: PokemonBattleHistoryWhereInput
    /**
     * Limit how many PokemonBattleHistories to update.
     */
    limit?: number
  }

  /**
   * PokemonBattleHistory updateManyAndReturn
   */
  export type PokemonBattleHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonBattleHistory
     */
    select?: PokemonBattleHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonBattleHistory
     */
    omit?: PokemonBattleHistoryOmit<ExtArgs> | null
    /**
     * The data used to update PokemonBattleHistories.
     */
    data: XOR<PokemonBattleHistoryUpdateManyMutationInput, PokemonBattleHistoryUncheckedUpdateManyInput>
    /**
     * Filter which PokemonBattleHistories to update
     */
    where?: PokemonBattleHistoryWhereInput
    /**
     * Limit how many PokemonBattleHistories to update.
     */
    limit?: number
  }

  /**
   * PokemonBattleHistory upsert
   */
  export type PokemonBattleHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonBattleHistory
     */
    select?: PokemonBattleHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonBattleHistory
     */
    omit?: PokemonBattleHistoryOmit<ExtArgs> | null
    /**
     * The filter to search for the PokemonBattleHistory to update in case it exists.
     */
    where: PokemonBattleHistoryWhereUniqueInput
    /**
     * In case the PokemonBattleHistory found by the `where` argument doesn't exist, create a new PokemonBattleHistory with this data.
     */
    create: XOR<PokemonBattleHistoryCreateInput, PokemonBattleHistoryUncheckedCreateInput>
    /**
     * In case the PokemonBattleHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PokemonBattleHistoryUpdateInput, PokemonBattleHistoryUncheckedUpdateInput>
  }

  /**
   * PokemonBattleHistory delete
   */
  export type PokemonBattleHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonBattleHistory
     */
    select?: PokemonBattleHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonBattleHistory
     */
    omit?: PokemonBattleHistoryOmit<ExtArgs> | null
    /**
     * Filter which PokemonBattleHistory to delete.
     */
    where: PokemonBattleHistoryWhereUniqueInput
  }

  /**
   * PokemonBattleHistory deleteMany
   */
  export type PokemonBattleHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PokemonBattleHistories to delete
     */
    where?: PokemonBattleHistoryWhereInput
    /**
     * Limit how many PokemonBattleHistories to delete.
     */
    limit?: number
  }

  /**
   * PokemonBattleHistory without action
   */
  export type PokemonBattleHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonBattleHistory
     */
    select?: PokemonBattleHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonBattleHistory
     */
    omit?: PokemonBattleHistoryOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PokemonScalarFieldEnum: {
    id: 'id',
    instance_name: 'instance_name',
    pokemon_name: 'pokemon_name',
    pokemon_type: 'pokemon_type',
    level: 'level',
    hit_points: 'hit_points',
    max_hit_points: 'max_hit_points',
    battles_won: 'battles_won',
    battles_lost: 'battles_lost',
    image_url: 'image_url',
    skills: 'skills',
    is_archived: 'is_archived',
    createdAt: 'createdAt'
  };

  export type PokemonScalarFieldEnum = (typeof PokemonScalarFieldEnum)[keyof typeof PokemonScalarFieldEnum]


  export const PokemonBattleScalarFieldEnum: {
    id: 'id',
    pokemon_1_id: 'pokemon_1_id',
    pokemon_2_id: 'pokemon_2_id',
    pokemon_1_seed: 'pokemon_1_seed',
    pokemon_2_seed: 'pokemon_2_seed',
    battle_date: 'battle_date',
    winner_pokemon_id: 'winner_pokemon_id',
    battle_duration: 'battle_duration',
    battle_log: 'battle_log',
    tournamentId: 'tournamentId'
  };

  export type PokemonBattleScalarFieldEnum = (typeof PokemonBattleScalarFieldEnum)[keyof typeof PokemonBattleScalarFieldEnum]


  export const TournamentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    venue: 'venue',
    seed: 'seed',
    createdAt: 'createdAt'
  };

  export type TournamentScalarFieldEnum = (typeof TournamentScalarFieldEnum)[keyof typeof TournamentScalarFieldEnum]


  export const PokemonSkillScalarFieldEnum: {
    id: 'id',
    is_attack: 'is_attack',
    name: 'name',
    pokemon_type: 'pokemon_type',
    damage: 'damage'
  };

  export type PokemonSkillScalarFieldEnum = (typeof PokemonSkillScalarFieldEnum)[keyof typeof PokemonSkillScalarFieldEnum]


  export const ArchivedBattlesScalarFieldEnum: {
    id: 'id',
    battle_history_id: 'battle_history_id',
    archive_date: 'archive_date'
  };

  export type ArchivedBattlesScalarFieldEnum = (typeof ArchivedBattlesScalarFieldEnum)[keyof typeof ArchivedBattlesScalarFieldEnum]


  export const PokemonBattleHistoryScalarFieldEnum: {
    id: 'id',
    battle_id: 'battle_id',
    pokemon_1_id: 'pokemon_1_id',
    pokemon_2_id: 'pokemon_2_id',
    pokemon_1_seed: 'pokemon_1_seed',
    pokemon_2_seed: 'pokemon_2_seed',
    battle_date: 'battle_date',
    winner_pokemon_id: 'winner_pokemon_id',
    battle_duration: 'battle_duration',
    battle_log: 'battle_log'
  };

  export type PokemonBattleHistoryScalarFieldEnum = (typeof PokemonBattleHistoryScalarFieldEnum)[keyof typeof PokemonBattleHistoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PokemonWhereInput = {
    AND?: PokemonWhereInput | PokemonWhereInput[]
    OR?: PokemonWhereInput[]
    NOT?: PokemonWhereInput | PokemonWhereInput[]
    id?: IntFilter<"Pokemon"> | number
    instance_name?: StringNullableFilter<"Pokemon"> | string | null
    pokemon_name?: StringFilter<"Pokemon"> | string
    pokemon_type?: StringFilter<"Pokemon"> | string
    level?: IntFilter<"Pokemon"> | number
    hit_points?: IntFilter<"Pokemon"> | number
    max_hit_points?: IntFilter<"Pokemon"> | number
    battles_won?: IntFilter<"Pokemon"> | number
    battles_lost?: IntFilter<"Pokemon"> | number
    image_url?: StringNullableFilter<"Pokemon"> | string | null
    skills?: IntNullableListFilter<"Pokemon">
    is_archived?: BoolFilter<"Pokemon"> | boolean
    createdAt?: DateTimeFilter<"Pokemon"> | Date | string
    battlesAsP1?: PokemonBattleListRelationFilter
    battlesAsP2?: PokemonBattleListRelationFilter
    battlesWon?: PokemonBattleListRelationFilter
  }

  export type PokemonOrderByWithRelationInput = {
    id?: SortOrder
    instance_name?: SortOrderInput | SortOrder
    pokemon_name?: SortOrder
    pokemon_type?: SortOrder
    level?: SortOrder
    hit_points?: SortOrder
    max_hit_points?: SortOrder
    battles_won?: SortOrder
    battles_lost?: SortOrder
    image_url?: SortOrderInput | SortOrder
    skills?: SortOrder
    is_archived?: SortOrder
    createdAt?: SortOrder
    battlesAsP1?: PokemonBattleOrderByRelationAggregateInput
    battlesAsP2?: PokemonBattleOrderByRelationAggregateInput
    battlesWon?: PokemonBattleOrderByRelationAggregateInput
  }

  export type PokemonWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    instance_name?: string
    AND?: PokemonWhereInput | PokemonWhereInput[]
    OR?: PokemonWhereInput[]
    NOT?: PokemonWhereInput | PokemonWhereInput[]
    pokemon_name?: StringFilter<"Pokemon"> | string
    pokemon_type?: StringFilter<"Pokemon"> | string
    level?: IntFilter<"Pokemon"> | number
    hit_points?: IntFilter<"Pokemon"> | number
    max_hit_points?: IntFilter<"Pokemon"> | number
    battles_won?: IntFilter<"Pokemon"> | number
    battles_lost?: IntFilter<"Pokemon"> | number
    image_url?: StringNullableFilter<"Pokemon"> | string | null
    skills?: IntNullableListFilter<"Pokemon">
    is_archived?: BoolFilter<"Pokemon"> | boolean
    createdAt?: DateTimeFilter<"Pokemon"> | Date | string
    battlesAsP1?: PokemonBattleListRelationFilter
    battlesAsP2?: PokemonBattleListRelationFilter
    battlesWon?: PokemonBattleListRelationFilter
  }, "id" | "instance_name">

  export type PokemonOrderByWithAggregationInput = {
    id?: SortOrder
    instance_name?: SortOrderInput | SortOrder
    pokemon_name?: SortOrder
    pokemon_type?: SortOrder
    level?: SortOrder
    hit_points?: SortOrder
    max_hit_points?: SortOrder
    battles_won?: SortOrder
    battles_lost?: SortOrder
    image_url?: SortOrderInput | SortOrder
    skills?: SortOrder
    is_archived?: SortOrder
    createdAt?: SortOrder
    _count?: PokemonCountOrderByAggregateInput
    _avg?: PokemonAvgOrderByAggregateInput
    _max?: PokemonMaxOrderByAggregateInput
    _min?: PokemonMinOrderByAggregateInput
    _sum?: PokemonSumOrderByAggregateInput
  }

  export type PokemonScalarWhereWithAggregatesInput = {
    AND?: PokemonScalarWhereWithAggregatesInput | PokemonScalarWhereWithAggregatesInput[]
    OR?: PokemonScalarWhereWithAggregatesInput[]
    NOT?: PokemonScalarWhereWithAggregatesInput | PokemonScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pokemon"> | number
    instance_name?: StringNullableWithAggregatesFilter<"Pokemon"> | string | null
    pokemon_name?: StringWithAggregatesFilter<"Pokemon"> | string
    pokemon_type?: StringWithAggregatesFilter<"Pokemon"> | string
    level?: IntWithAggregatesFilter<"Pokemon"> | number
    hit_points?: IntWithAggregatesFilter<"Pokemon"> | number
    max_hit_points?: IntWithAggregatesFilter<"Pokemon"> | number
    battles_won?: IntWithAggregatesFilter<"Pokemon"> | number
    battles_lost?: IntWithAggregatesFilter<"Pokemon"> | number
    image_url?: StringNullableWithAggregatesFilter<"Pokemon"> | string | null
    skills?: IntNullableListFilter<"Pokemon">
    is_archived?: BoolWithAggregatesFilter<"Pokemon"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Pokemon"> | Date | string
  }

  export type PokemonBattleWhereInput = {
    AND?: PokemonBattleWhereInput | PokemonBattleWhereInput[]
    OR?: PokemonBattleWhereInput[]
    NOT?: PokemonBattleWhereInput | PokemonBattleWhereInput[]
    id?: IntFilter<"PokemonBattle"> | number
    pokemon_1_id?: IntFilter<"PokemonBattle"> | number
    pokemon_2_id?: IntFilter<"PokemonBattle"> | number
    pokemon_1_seed?: IntFilter<"PokemonBattle"> | number
    pokemon_2_seed?: IntFilter<"PokemonBattle"> | number
    battle_date?: DateTimeFilter<"PokemonBattle"> | Date | string
    winner_pokemon_id?: IntNullableFilter<"PokemonBattle"> | number | null
    battle_duration?: StringNullableFilter<"PokemonBattle"> | string | null
    battle_log?: JsonNullableFilter<"PokemonBattle">
    tournamentId?: IntNullableFilter<"PokemonBattle"> | number | null
    tournament?: XOR<TournamentNullableScalarRelationFilter, TournamentWhereInput> | null
    pokemon1?: XOR<PokemonScalarRelationFilter, PokemonWhereInput>
    pokemon2?: XOR<PokemonScalarRelationFilter, PokemonWhereInput>
    winner?: XOR<PokemonNullableScalarRelationFilter, PokemonWhereInput> | null
  }

  export type PokemonBattleOrderByWithRelationInput = {
    id?: SortOrder
    pokemon_1_id?: SortOrder
    pokemon_2_id?: SortOrder
    pokemon_1_seed?: SortOrder
    pokemon_2_seed?: SortOrder
    battle_date?: SortOrder
    winner_pokemon_id?: SortOrderInput | SortOrder
    battle_duration?: SortOrderInput | SortOrder
    battle_log?: SortOrderInput | SortOrder
    tournamentId?: SortOrderInput | SortOrder
    tournament?: TournamentOrderByWithRelationInput
    pokemon1?: PokemonOrderByWithRelationInput
    pokemon2?: PokemonOrderByWithRelationInput
    winner?: PokemonOrderByWithRelationInput
  }

  export type PokemonBattleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PokemonBattleWhereInput | PokemonBattleWhereInput[]
    OR?: PokemonBattleWhereInput[]
    NOT?: PokemonBattleWhereInput | PokemonBattleWhereInput[]
    pokemon_1_id?: IntFilter<"PokemonBattle"> | number
    pokemon_2_id?: IntFilter<"PokemonBattle"> | number
    pokemon_1_seed?: IntFilter<"PokemonBattle"> | number
    pokemon_2_seed?: IntFilter<"PokemonBattle"> | number
    battle_date?: DateTimeFilter<"PokemonBattle"> | Date | string
    winner_pokemon_id?: IntNullableFilter<"PokemonBattle"> | number | null
    battle_duration?: StringNullableFilter<"PokemonBattle"> | string | null
    battle_log?: JsonNullableFilter<"PokemonBattle">
    tournamentId?: IntNullableFilter<"PokemonBattle"> | number | null
    tournament?: XOR<TournamentNullableScalarRelationFilter, TournamentWhereInput> | null
    pokemon1?: XOR<PokemonScalarRelationFilter, PokemonWhereInput>
    pokemon2?: XOR<PokemonScalarRelationFilter, PokemonWhereInput>
    winner?: XOR<PokemonNullableScalarRelationFilter, PokemonWhereInput> | null
  }, "id">

  export type PokemonBattleOrderByWithAggregationInput = {
    id?: SortOrder
    pokemon_1_id?: SortOrder
    pokemon_2_id?: SortOrder
    pokemon_1_seed?: SortOrder
    pokemon_2_seed?: SortOrder
    battle_date?: SortOrder
    winner_pokemon_id?: SortOrderInput | SortOrder
    battle_duration?: SortOrderInput | SortOrder
    battle_log?: SortOrderInput | SortOrder
    tournamentId?: SortOrderInput | SortOrder
    _count?: PokemonBattleCountOrderByAggregateInput
    _avg?: PokemonBattleAvgOrderByAggregateInput
    _max?: PokemonBattleMaxOrderByAggregateInput
    _min?: PokemonBattleMinOrderByAggregateInput
    _sum?: PokemonBattleSumOrderByAggregateInput
  }

  export type PokemonBattleScalarWhereWithAggregatesInput = {
    AND?: PokemonBattleScalarWhereWithAggregatesInput | PokemonBattleScalarWhereWithAggregatesInput[]
    OR?: PokemonBattleScalarWhereWithAggregatesInput[]
    NOT?: PokemonBattleScalarWhereWithAggregatesInput | PokemonBattleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PokemonBattle"> | number
    pokemon_1_id?: IntWithAggregatesFilter<"PokemonBattle"> | number
    pokemon_2_id?: IntWithAggregatesFilter<"PokemonBattle"> | number
    pokemon_1_seed?: IntWithAggregatesFilter<"PokemonBattle"> | number
    pokemon_2_seed?: IntWithAggregatesFilter<"PokemonBattle"> | number
    battle_date?: DateTimeWithAggregatesFilter<"PokemonBattle"> | Date | string
    winner_pokemon_id?: IntNullableWithAggregatesFilter<"PokemonBattle"> | number | null
    battle_duration?: StringNullableWithAggregatesFilter<"PokemonBattle"> | string | null
    battle_log?: JsonNullableWithAggregatesFilter<"PokemonBattle">
    tournamentId?: IntNullableWithAggregatesFilter<"PokemonBattle"> | number | null
  }

  export type TournamentWhereInput = {
    AND?: TournamentWhereInput | TournamentWhereInput[]
    OR?: TournamentWhereInput[]
    NOT?: TournamentWhereInput | TournamentWhereInput[]
    id?: IntFilter<"Tournament"> | number
    name?: StringFilter<"Tournament"> | string
    venue?: StringFilter<"Tournament"> | string
    seed?: IntFilter<"Tournament"> | number
    createdAt?: DateTimeFilter<"Tournament"> | Date | string
    battles?: PokemonBattleListRelationFilter
  }

  export type TournamentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    venue?: SortOrder
    seed?: SortOrder
    createdAt?: SortOrder
    battles?: PokemonBattleOrderByRelationAggregateInput
  }

  export type TournamentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TournamentWhereInput | TournamentWhereInput[]
    OR?: TournamentWhereInput[]
    NOT?: TournamentWhereInput | TournamentWhereInput[]
    name?: StringFilter<"Tournament"> | string
    venue?: StringFilter<"Tournament"> | string
    seed?: IntFilter<"Tournament"> | number
    createdAt?: DateTimeFilter<"Tournament"> | Date | string
    battles?: PokemonBattleListRelationFilter
  }, "id">

  export type TournamentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    venue?: SortOrder
    seed?: SortOrder
    createdAt?: SortOrder
    _count?: TournamentCountOrderByAggregateInput
    _avg?: TournamentAvgOrderByAggregateInput
    _max?: TournamentMaxOrderByAggregateInput
    _min?: TournamentMinOrderByAggregateInput
    _sum?: TournamentSumOrderByAggregateInput
  }

  export type TournamentScalarWhereWithAggregatesInput = {
    AND?: TournamentScalarWhereWithAggregatesInput | TournamentScalarWhereWithAggregatesInput[]
    OR?: TournamentScalarWhereWithAggregatesInput[]
    NOT?: TournamentScalarWhereWithAggregatesInput | TournamentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tournament"> | number
    name?: StringWithAggregatesFilter<"Tournament"> | string
    venue?: StringWithAggregatesFilter<"Tournament"> | string
    seed?: IntWithAggregatesFilter<"Tournament"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Tournament"> | Date | string
  }

  export type PokemonSkillWhereInput = {
    AND?: PokemonSkillWhereInput | PokemonSkillWhereInput[]
    OR?: PokemonSkillWhereInput[]
    NOT?: PokemonSkillWhereInput | PokemonSkillWhereInput[]
    id?: IntFilter<"PokemonSkill"> | number
    is_attack?: BoolFilter<"PokemonSkill"> | boolean
    name?: StringFilter<"PokemonSkill"> | string
    pokemon_type?: StringFilter<"PokemonSkill"> | string
    damage?: IntFilter<"PokemonSkill"> | number
  }

  export type PokemonSkillOrderByWithRelationInput = {
    id?: SortOrder
    is_attack?: SortOrder
    name?: SortOrder
    pokemon_type?: SortOrder
    damage?: SortOrder
  }

  export type PokemonSkillWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PokemonSkillWhereInput | PokemonSkillWhereInput[]
    OR?: PokemonSkillWhereInput[]
    NOT?: PokemonSkillWhereInput | PokemonSkillWhereInput[]
    is_attack?: BoolFilter<"PokemonSkill"> | boolean
    name?: StringFilter<"PokemonSkill"> | string
    pokemon_type?: StringFilter<"PokemonSkill"> | string
    damage?: IntFilter<"PokemonSkill"> | number
  }, "id">

  export type PokemonSkillOrderByWithAggregationInput = {
    id?: SortOrder
    is_attack?: SortOrder
    name?: SortOrder
    pokemon_type?: SortOrder
    damage?: SortOrder
    _count?: PokemonSkillCountOrderByAggregateInput
    _avg?: PokemonSkillAvgOrderByAggregateInput
    _max?: PokemonSkillMaxOrderByAggregateInput
    _min?: PokemonSkillMinOrderByAggregateInput
    _sum?: PokemonSkillSumOrderByAggregateInput
  }

  export type PokemonSkillScalarWhereWithAggregatesInput = {
    AND?: PokemonSkillScalarWhereWithAggregatesInput | PokemonSkillScalarWhereWithAggregatesInput[]
    OR?: PokemonSkillScalarWhereWithAggregatesInput[]
    NOT?: PokemonSkillScalarWhereWithAggregatesInput | PokemonSkillScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PokemonSkill"> | number
    is_attack?: BoolWithAggregatesFilter<"PokemonSkill"> | boolean
    name?: StringWithAggregatesFilter<"PokemonSkill"> | string
    pokemon_type?: StringWithAggregatesFilter<"PokemonSkill"> | string
    damage?: IntWithAggregatesFilter<"PokemonSkill"> | number
  }

  export type ArchivedBattlesWhereInput = {
    AND?: ArchivedBattlesWhereInput | ArchivedBattlesWhereInput[]
    OR?: ArchivedBattlesWhereInput[]
    NOT?: ArchivedBattlesWhereInput | ArchivedBattlesWhereInput[]
    id?: IntFilter<"ArchivedBattles"> | number
    battle_history_id?: IntFilter<"ArchivedBattles"> | number
    archive_date?: DateTimeFilter<"ArchivedBattles"> | Date | string
  }

  export type ArchivedBattlesOrderByWithRelationInput = {
    id?: SortOrder
    battle_history_id?: SortOrder
    archive_date?: SortOrder
  }

  export type ArchivedBattlesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ArchivedBattlesWhereInput | ArchivedBattlesWhereInput[]
    OR?: ArchivedBattlesWhereInput[]
    NOT?: ArchivedBattlesWhereInput | ArchivedBattlesWhereInput[]
    battle_history_id?: IntFilter<"ArchivedBattles"> | number
    archive_date?: DateTimeFilter<"ArchivedBattles"> | Date | string
  }, "id">

  export type ArchivedBattlesOrderByWithAggregationInput = {
    id?: SortOrder
    battle_history_id?: SortOrder
    archive_date?: SortOrder
    _count?: ArchivedBattlesCountOrderByAggregateInput
    _avg?: ArchivedBattlesAvgOrderByAggregateInput
    _max?: ArchivedBattlesMaxOrderByAggregateInput
    _min?: ArchivedBattlesMinOrderByAggregateInput
    _sum?: ArchivedBattlesSumOrderByAggregateInput
  }

  export type ArchivedBattlesScalarWhereWithAggregatesInput = {
    AND?: ArchivedBattlesScalarWhereWithAggregatesInput | ArchivedBattlesScalarWhereWithAggregatesInput[]
    OR?: ArchivedBattlesScalarWhereWithAggregatesInput[]
    NOT?: ArchivedBattlesScalarWhereWithAggregatesInput | ArchivedBattlesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ArchivedBattles"> | number
    battle_history_id?: IntWithAggregatesFilter<"ArchivedBattles"> | number
    archive_date?: DateTimeWithAggregatesFilter<"ArchivedBattles"> | Date | string
  }

  export type PokemonBattleHistoryWhereInput = {
    AND?: PokemonBattleHistoryWhereInput | PokemonBattleHistoryWhereInput[]
    OR?: PokemonBattleHistoryWhereInput[]
    NOT?: PokemonBattleHistoryWhereInput | PokemonBattleHistoryWhereInput[]
    id?: IntFilter<"PokemonBattleHistory"> | number
    battle_id?: IntFilter<"PokemonBattleHistory"> | number
    pokemon_1_id?: IntFilter<"PokemonBattleHistory"> | number
    pokemon_2_id?: IntFilter<"PokemonBattleHistory"> | number
    pokemon_1_seed?: IntFilter<"PokemonBattleHistory"> | number
    pokemon_2_seed?: IntFilter<"PokemonBattleHistory"> | number
    battle_date?: DateTimeFilter<"PokemonBattleHistory"> | Date | string
    winner_pokemon_id?: IntFilter<"PokemonBattleHistory"> | number
    battle_duration?: IntFilter<"PokemonBattleHistory"> | number
    battle_log?: JsonFilter<"PokemonBattleHistory">
  }

  export type PokemonBattleHistoryOrderByWithRelationInput = {
    id?: SortOrder
    battle_id?: SortOrder
    pokemon_1_id?: SortOrder
    pokemon_2_id?: SortOrder
    pokemon_1_seed?: SortOrder
    pokemon_2_seed?: SortOrder
    battle_date?: SortOrder
    winner_pokemon_id?: SortOrder
    battle_duration?: SortOrder
    battle_log?: SortOrder
  }

  export type PokemonBattleHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PokemonBattleHistoryWhereInput | PokemonBattleHistoryWhereInput[]
    OR?: PokemonBattleHistoryWhereInput[]
    NOT?: PokemonBattleHistoryWhereInput | PokemonBattleHistoryWhereInput[]
    battle_id?: IntFilter<"PokemonBattleHistory"> | number
    pokemon_1_id?: IntFilter<"PokemonBattleHistory"> | number
    pokemon_2_id?: IntFilter<"PokemonBattleHistory"> | number
    pokemon_1_seed?: IntFilter<"PokemonBattleHistory"> | number
    pokemon_2_seed?: IntFilter<"PokemonBattleHistory"> | number
    battle_date?: DateTimeFilter<"PokemonBattleHistory"> | Date | string
    winner_pokemon_id?: IntFilter<"PokemonBattleHistory"> | number
    battle_duration?: IntFilter<"PokemonBattleHistory"> | number
    battle_log?: JsonFilter<"PokemonBattleHistory">
  }, "id">

  export type PokemonBattleHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    battle_id?: SortOrder
    pokemon_1_id?: SortOrder
    pokemon_2_id?: SortOrder
    pokemon_1_seed?: SortOrder
    pokemon_2_seed?: SortOrder
    battle_date?: SortOrder
    winner_pokemon_id?: SortOrder
    battle_duration?: SortOrder
    battle_log?: SortOrder
    _count?: PokemonBattleHistoryCountOrderByAggregateInput
    _avg?: PokemonBattleHistoryAvgOrderByAggregateInput
    _max?: PokemonBattleHistoryMaxOrderByAggregateInput
    _min?: PokemonBattleHistoryMinOrderByAggregateInput
    _sum?: PokemonBattleHistorySumOrderByAggregateInput
  }

  export type PokemonBattleHistoryScalarWhereWithAggregatesInput = {
    AND?: PokemonBattleHistoryScalarWhereWithAggregatesInput | PokemonBattleHistoryScalarWhereWithAggregatesInput[]
    OR?: PokemonBattleHistoryScalarWhereWithAggregatesInput[]
    NOT?: PokemonBattleHistoryScalarWhereWithAggregatesInput | PokemonBattleHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PokemonBattleHistory"> | number
    battle_id?: IntWithAggregatesFilter<"PokemonBattleHistory"> | number
    pokemon_1_id?: IntWithAggregatesFilter<"PokemonBattleHistory"> | number
    pokemon_2_id?: IntWithAggregatesFilter<"PokemonBattleHistory"> | number
    pokemon_1_seed?: IntWithAggregatesFilter<"PokemonBattleHistory"> | number
    pokemon_2_seed?: IntWithAggregatesFilter<"PokemonBattleHistory"> | number
    battle_date?: DateTimeWithAggregatesFilter<"PokemonBattleHistory"> | Date | string
    winner_pokemon_id?: IntWithAggregatesFilter<"PokemonBattleHistory"> | number
    battle_duration?: IntWithAggregatesFilter<"PokemonBattleHistory"> | number
    battle_log?: JsonWithAggregatesFilter<"PokemonBattleHistory">
  }

  export type PokemonCreateInput = {
    instance_name?: string | null
    pokemon_name: string
    pokemon_type: string
    level?: number
    hit_points?: number
    max_hit_points?: number
    battles_won?: number
    battles_lost?: number
    image_url?: string | null
    skills?: PokemonCreateskillsInput | number[]
    is_archived?: boolean
    createdAt?: Date | string
    battlesAsP1?: PokemonBattleCreateNestedManyWithoutPokemon1Input
    battlesAsP2?: PokemonBattleCreateNestedManyWithoutPokemon2Input
    battlesWon?: PokemonBattleCreateNestedManyWithoutWinnerInput
  }

  export type PokemonUncheckedCreateInput = {
    id?: number
    instance_name?: string | null
    pokemon_name: string
    pokemon_type: string
    level?: number
    hit_points?: number
    max_hit_points?: number
    battles_won?: number
    battles_lost?: number
    image_url?: string | null
    skills?: PokemonCreateskillsInput | number[]
    is_archived?: boolean
    createdAt?: Date | string
    battlesAsP1?: PokemonBattleUncheckedCreateNestedManyWithoutPokemon1Input
    battlesAsP2?: PokemonBattleUncheckedCreateNestedManyWithoutPokemon2Input
    battlesWon?: PokemonBattleUncheckedCreateNestedManyWithoutWinnerInput
  }

  export type PokemonUpdateInput = {
    instance_name?: NullableStringFieldUpdateOperationsInput | string | null
    pokemon_name?: StringFieldUpdateOperationsInput | string
    pokemon_type?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    hit_points?: IntFieldUpdateOperationsInput | number
    max_hit_points?: IntFieldUpdateOperationsInput | number
    battles_won?: IntFieldUpdateOperationsInput | number
    battles_lost?: IntFieldUpdateOperationsInput | number
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: PokemonUpdateskillsInput | number[]
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    battlesAsP1?: PokemonBattleUpdateManyWithoutPokemon1NestedInput
    battlesAsP2?: PokemonBattleUpdateManyWithoutPokemon2NestedInput
    battlesWon?: PokemonBattleUpdateManyWithoutWinnerNestedInput
  }

  export type PokemonUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    instance_name?: NullableStringFieldUpdateOperationsInput | string | null
    pokemon_name?: StringFieldUpdateOperationsInput | string
    pokemon_type?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    hit_points?: IntFieldUpdateOperationsInput | number
    max_hit_points?: IntFieldUpdateOperationsInput | number
    battles_won?: IntFieldUpdateOperationsInput | number
    battles_lost?: IntFieldUpdateOperationsInput | number
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: PokemonUpdateskillsInput | number[]
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    battlesAsP1?: PokemonBattleUncheckedUpdateManyWithoutPokemon1NestedInput
    battlesAsP2?: PokemonBattleUncheckedUpdateManyWithoutPokemon2NestedInput
    battlesWon?: PokemonBattleUncheckedUpdateManyWithoutWinnerNestedInput
  }

  export type PokemonCreateManyInput = {
    id?: number
    instance_name?: string | null
    pokemon_name: string
    pokemon_type: string
    level?: number
    hit_points?: number
    max_hit_points?: number
    battles_won?: number
    battles_lost?: number
    image_url?: string | null
    skills?: PokemonCreateskillsInput | number[]
    is_archived?: boolean
    createdAt?: Date | string
  }

  export type PokemonUpdateManyMutationInput = {
    instance_name?: NullableStringFieldUpdateOperationsInput | string | null
    pokemon_name?: StringFieldUpdateOperationsInput | string
    pokemon_type?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    hit_points?: IntFieldUpdateOperationsInput | number
    max_hit_points?: IntFieldUpdateOperationsInput | number
    battles_won?: IntFieldUpdateOperationsInput | number
    battles_lost?: IntFieldUpdateOperationsInput | number
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: PokemonUpdateskillsInput | number[]
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PokemonUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    instance_name?: NullableStringFieldUpdateOperationsInput | string | null
    pokemon_name?: StringFieldUpdateOperationsInput | string
    pokemon_type?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    hit_points?: IntFieldUpdateOperationsInput | number
    max_hit_points?: IntFieldUpdateOperationsInput | number
    battles_won?: IntFieldUpdateOperationsInput | number
    battles_lost?: IntFieldUpdateOperationsInput | number
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: PokemonUpdateskillsInput | number[]
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PokemonBattleCreateInput = {
    pokemon_1_seed: number
    pokemon_2_seed: number
    battle_date?: Date | string
    battle_duration?: string | null
    battle_log?: NullableJsonNullValueInput | InputJsonValue
    tournament?: TournamentCreateNestedOneWithoutBattlesInput
    pokemon1: PokemonCreateNestedOneWithoutBattlesAsP1Input
    pokemon2: PokemonCreateNestedOneWithoutBattlesAsP2Input
    winner?: PokemonCreateNestedOneWithoutBattlesWonInput
  }

  export type PokemonBattleUncheckedCreateInput = {
    id?: number
    pokemon_1_id: number
    pokemon_2_id: number
    pokemon_1_seed: number
    pokemon_2_seed: number
    battle_date?: Date | string
    winner_pokemon_id?: number | null
    battle_duration?: string | null
    battle_log?: NullableJsonNullValueInput | InputJsonValue
    tournamentId?: number | null
  }

  export type PokemonBattleUpdateInput = {
    pokemon_1_seed?: IntFieldUpdateOperationsInput | number
    pokemon_2_seed?: IntFieldUpdateOperationsInput | number
    battle_date?: DateTimeFieldUpdateOperationsInput | Date | string
    battle_duration?: NullableStringFieldUpdateOperationsInput | string | null
    battle_log?: NullableJsonNullValueInput | InputJsonValue
    tournament?: TournamentUpdateOneWithoutBattlesNestedInput
    pokemon1?: PokemonUpdateOneRequiredWithoutBattlesAsP1NestedInput
    pokemon2?: PokemonUpdateOneRequiredWithoutBattlesAsP2NestedInput
    winner?: PokemonUpdateOneWithoutBattlesWonNestedInput
  }

  export type PokemonBattleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pokemon_1_id?: IntFieldUpdateOperationsInput | number
    pokemon_2_id?: IntFieldUpdateOperationsInput | number
    pokemon_1_seed?: IntFieldUpdateOperationsInput | number
    pokemon_2_seed?: IntFieldUpdateOperationsInput | number
    battle_date?: DateTimeFieldUpdateOperationsInput | Date | string
    winner_pokemon_id?: NullableIntFieldUpdateOperationsInput | number | null
    battle_duration?: NullableStringFieldUpdateOperationsInput | string | null
    battle_log?: NullableJsonNullValueInput | InputJsonValue
    tournamentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PokemonBattleCreateManyInput = {
    id?: number
    pokemon_1_id: number
    pokemon_2_id: number
    pokemon_1_seed: number
    pokemon_2_seed: number
    battle_date?: Date | string
    winner_pokemon_id?: number | null
    battle_duration?: string | null
    battle_log?: NullableJsonNullValueInput | InputJsonValue
    tournamentId?: number | null
  }

  export type PokemonBattleUpdateManyMutationInput = {
    pokemon_1_seed?: IntFieldUpdateOperationsInput | number
    pokemon_2_seed?: IntFieldUpdateOperationsInput | number
    battle_date?: DateTimeFieldUpdateOperationsInput | Date | string
    battle_duration?: NullableStringFieldUpdateOperationsInput | string | null
    battle_log?: NullableJsonNullValueInput | InputJsonValue
  }

  export type PokemonBattleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pokemon_1_id?: IntFieldUpdateOperationsInput | number
    pokemon_2_id?: IntFieldUpdateOperationsInput | number
    pokemon_1_seed?: IntFieldUpdateOperationsInput | number
    pokemon_2_seed?: IntFieldUpdateOperationsInput | number
    battle_date?: DateTimeFieldUpdateOperationsInput | Date | string
    winner_pokemon_id?: NullableIntFieldUpdateOperationsInput | number | null
    battle_duration?: NullableStringFieldUpdateOperationsInput | string | null
    battle_log?: NullableJsonNullValueInput | InputJsonValue
    tournamentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TournamentCreateInput = {
    name: string
    venue?: string
    seed?: number
    createdAt?: Date | string
    battles?: PokemonBattleCreateNestedManyWithoutTournamentInput
  }

  export type TournamentUncheckedCreateInput = {
    id?: number
    name: string
    venue?: string
    seed?: number
    createdAt?: Date | string
    battles?: PokemonBattleUncheckedCreateNestedManyWithoutTournamentInput
  }

  export type TournamentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    seed?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    battles?: PokemonBattleUpdateManyWithoutTournamentNestedInput
  }

  export type TournamentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    seed?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    battles?: PokemonBattleUncheckedUpdateManyWithoutTournamentNestedInput
  }

  export type TournamentCreateManyInput = {
    id?: number
    name: string
    venue?: string
    seed?: number
    createdAt?: Date | string
  }

  export type TournamentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    seed?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    seed?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PokemonSkillCreateInput = {
    is_attack: boolean
    name: string
    pokemon_type: string
    damage: number
  }

  export type PokemonSkillUncheckedCreateInput = {
    id?: number
    is_attack: boolean
    name: string
    pokemon_type: string
    damage: number
  }

  export type PokemonSkillUpdateInput = {
    is_attack?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    pokemon_type?: StringFieldUpdateOperationsInput | string
    damage?: IntFieldUpdateOperationsInput | number
  }

  export type PokemonSkillUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    is_attack?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    pokemon_type?: StringFieldUpdateOperationsInput | string
    damage?: IntFieldUpdateOperationsInput | number
  }

  export type PokemonSkillCreateManyInput = {
    id?: number
    is_attack: boolean
    name: string
    pokemon_type: string
    damage: number
  }

  export type PokemonSkillUpdateManyMutationInput = {
    is_attack?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    pokemon_type?: StringFieldUpdateOperationsInput | string
    damage?: IntFieldUpdateOperationsInput | number
  }

  export type PokemonSkillUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    is_attack?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    pokemon_type?: StringFieldUpdateOperationsInput | string
    damage?: IntFieldUpdateOperationsInput | number
  }

  export type ArchivedBattlesCreateInput = {
    battle_history_id: number
    archive_date?: Date | string
  }

  export type ArchivedBattlesUncheckedCreateInput = {
    id?: number
    battle_history_id: number
    archive_date?: Date | string
  }

  export type ArchivedBattlesUpdateInput = {
    battle_history_id?: IntFieldUpdateOperationsInput | number
    archive_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArchivedBattlesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    battle_history_id?: IntFieldUpdateOperationsInput | number
    archive_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArchivedBattlesCreateManyInput = {
    id?: number
    battle_history_id: number
    archive_date?: Date | string
  }

  export type ArchivedBattlesUpdateManyMutationInput = {
    battle_history_id?: IntFieldUpdateOperationsInput | number
    archive_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArchivedBattlesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    battle_history_id?: IntFieldUpdateOperationsInput | number
    archive_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PokemonBattleHistoryCreateInput = {
    battle_id: number
    pokemon_1_id: number
    pokemon_2_id: number
    pokemon_1_seed: number
    pokemon_2_seed: number
    battle_date: Date | string
    winner_pokemon_id: number
    battle_duration: number
    battle_log: JsonNullValueInput | InputJsonValue
  }

  export type PokemonBattleHistoryUncheckedCreateInput = {
    id?: number
    battle_id: number
    pokemon_1_id: number
    pokemon_2_id: number
    pokemon_1_seed: number
    pokemon_2_seed: number
    battle_date: Date | string
    winner_pokemon_id: number
    battle_duration: number
    battle_log: JsonNullValueInput | InputJsonValue
  }

  export type PokemonBattleHistoryUpdateInput = {
    battle_id?: IntFieldUpdateOperationsInput | number
    pokemon_1_id?: IntFieldUpdateOperationsInput | number
    pokemon_2_id?: IntFieldUpdateOperationsInput | number
    pokemon_1_seed?: IntFieldUpdateOperationsInput | number
    pokemon_2_seed?: IntFieldUpdateOperationsInput | number
    battle_date?: DateTimeFieldUpdateOperationsInput | Date | string
    winner_pokemon_id?: IntFieldUpdateOperationsInput | number
    battle_duration?: IntFieldUpdateOperationsInput | number
    battle_log?: JsonNullValueInput | InputJsonValue
  }

  export type PokemonBattleHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    battle_id?: IntFieldUpdateOperationsInput | number
    pokemon_1_id?: IntFieldUpdateOperationsInput | number
    pokemon_2_id?: IntFieldUpdateOperationsInput | number
    pokemon_1_seed?: IntFieldUpdateOperationsInput | number
    pokemon_2_seed?: IntFieldUpdateOperationsInput | number
    battle_date?: DateTimeFieldUpdateOperationsInput | Date | string
    winner_pokemon_id?: IntFieldUpdateOperationsInput | number
    battle_duration?: IntFieldUpdateOperationsInput | number
    battle_log?: JsonNullValueInput | InputJsonValue
  }

  export type PokemonBattleHistoryCreateManyInput = {
    id?: number
    battle_id: number
    pokemon_1_id: number
    pokemon_2_id: number
    pokemon_1_seed: number
    pokemon_2_seed: number
    battle_date: Date | string
    winner_pokemon_id: number
    battle_duration: number
    battle_log: JsonNullValueInput | InputJsonValue
  }

  export type PokemonBattleHistoryUpdateManyMutationInput = {
    battle_id?: IntFieldUpdateOperationsInput | number
    pokemon_1_id?: IntFieldUpdateOperationsInput | number
    pokemon_2_id?: IntFieldUpdateOperationsInput | number
    pokemon_1_seed?: IntFieldUpdateOperationsInput | number
    pokemon_2_seed?: IntFieldUpdateOperationsInput | number
    battle_date?: DateTimeFieldUpdateOperationsInput | Date | string
    winner_pokemon_id?: IntFieldUpdateOperationsInput | number
    battle_duration?: IntFieldUpdateOperationsInput | number
    battle_log?: JsonNullValueInput | InputJsonValue
  }

  export type PokemonBattleHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    battle_id?: IntFieldUpdateOperationsInput | number
    pokemon_1_id?: IntFieldUpdateOperationsInput | number
    pokemon_2_id?: IntFieldUpdateOperationsInput | number
    pokemon_1_seed?: IntFieldUpdateOperationsInput | number
    pokemon_2_seed?: IntFieldUpdateOperationsInput | number
    battle_date?: DateTimeFieldUpdateOperationsInput | Date | string
    winner_pokemon_id?: IntFieldUpdateOperationsInput | number
    battle_duration?: IntFieldUpdateOperationsInput | number
    battle_log?: JsonNullValueInput | InputJsonValue
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PokemonBattleListRelationFilter = {
    every?: PokemonBattleWhereInput
    some?: PokemonBattleWhereInput
    none?: PokemonBattleWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PokemonBattleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PokemonCountOrderByAggregateInput = {
    id?: SortOrder
    instance_name?: SortOrder
    pokemon_name?: SortOrder
    pokemon_type?: SortOrder
    level?: SortOrder
    hit_points?: SortOrder
    max_hit_points?: SortOrder
    battles_won?: SortOrder
    battles_lost?: SortOrder
    image_url?: SortOrder
    skills?: SortOrder
    is_archived?: SortOrder
    createdAt?: SortOrder
  }

  export type PokemonAvgOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    hit_points?: SortOrder
    max_hit_points?: SortOrder
    battles_won?: SortOrder
    battles_lost?: SortOrder
    skills?: SortOrder
  }

  export type PokemonMaxOrderByAggregateInput = {
    id?: SortOrder
    instance_name?: SortOrder
    pokemon_name?: SortOrder
    pokemon_type?: SortOrder
    level?: SortOrder
    hit_points?: SortOrder
    max_hit_points?: SortOrder
    battles_won?: SortOrder
    battles_lost?: SortOrder
    image_url?: SortOrder
    is_archived?: SortOrder
    createdAt?: SortOrder
  }

  export type PokemonMinOrderByAggregateInput = {
    id?: SortOrder
    instance_name?: SortOrder
    pokemon_name?: SortOrder
    pokemon_type?: SortOrder
    level?: SortOrder
    hit_points?: SortOrder
    max_hit_points?: SortOrder
    battles_won?: SortOrder
    battles_lost?: SortOrder
    image_url?: SortOrder
    is_archived?: SortOrder
    createdAt?: SortOrder
  }

  export type PokemonSumOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    hit_points?: SortOrder
    max_hit_points?: SortOrder
    battles_won?: SortOrder
    battles_lost?: SortOrder
    skills?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type TournamentNullableScalarRelationFilter = {
    is?: TournamentWhereInput | null
    isNot?: TournamentWhereInput | null
  }

  export type PokemonScalarRelationFilter = {
    is?: PokemonWhereInput
    isNot?: PokemonWhereInput
  }

  export type PokemonNullableScalarRelationFilter = {
    is?: PokemonWhereInput | null
    isNot?: PokemonWhereInput | null
  }

  export type PokemonBattleCountOrderByAggregateInput = {
    id?: SortOrder
    pokemon_1_id?: SortOrder
    pokemon_2_id?: SortOrder
    pokemon_1_seed?: SortOrder
    pokemon_2_seed?: SortOrder
    battle_date?: SortOrder
    winner_pokemon_id?: SortOrder
    battle_duration?: SortOrder
    battle_log?: SortOrder
    tournamentId?: SortOrder
  }

  export type PokemonBattleAvgOrderByAggregateInput = {
    id?: SortOrder
    pokemon_1_id?: SortOrder
    pokemon_2_id?: SortOrder
    pokemon_1_seed?: SortOrder
    pokemon_2_seed?: SortOrder
    winner_pokemon_id?: SortOrder
    tournamentId?: SortOrder
  }

  export type PokemonBattleMaxOrderByAggregateInput = {
    id?: SortOrder
    pokemon_1_id?: SortOrder
    pokemon_2_id?: SortOrder
    pokemon_1_seed?: SortOrder
    pokemon_2_seed?: SortOrder
    battle_date?: SortOrder
    winner_pokemon_id?: SortOrder
    battle_duration?: SortOrder
    tournamentId?: SortOrder
  }

  export type PokemonBattleMinOrderByAggregateInput = {
    id?: SortOrder
    pokemon_1_id?: SortOrder
    pokemon_2_id?: SortOrder
    pokemon_1_seed?: SortOrder
    pokemon_2_seed?: SortOrder
    battle_date?: SortOrder
    winner_pokemon_id?: SortOrder
    battle_duration?: SortOrder
    tournamentId?: SortOrder
  }

  export type PokemonBattleSumOrderByAggregateInput = {
    id?: SortOrder
    pokemon_1_id?: SortOrder
    pokemon_2_id?: SortOrder
    pokemon_1_seed?: SortOrder
    pokemon_2_seed?: SortOrder
    winner_pokemon_id?: SortOrder
    tournamentId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type TournamentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    venue?: SortOrder
    seed?: SortOrder
    createdAt?: SortOrder
  }

  export type TournamentAvgOrderByAggregateInput = {
    id?: SortOrder
    seed?: SortOrder
  }

  export type TournamentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    venue?: SortOrder
    seed?: SortOrder
    createdAt?: SortOrder
  }

  export type TournamentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    venue?: SortOrder
    seed?: SortOrder
    createdAt?: SortOrder
  }

  export type TournamentSumOrderByAggregateInput = {
    id?: SortOrder
    seed?: SortOrder
  }

  export type PokemonSkillCountOrderByAggregateInput = {
    id?: SortOrder
    is_attack?: SortOrder
    name?: SortOrder
    pokemon_type?: SortOrder
    damage?: SortOrder
  }

  export type PokemonSkillAvgOrderByAggregateInput = {
    id?: SortOrder
    damage?: SortOrder
  }

  export type PokemonSkillMaxOrderByAggregateInput = {
    id?: SortOrder
    is_attack?: SortOrder
    name?: SortOrder
    pokemon_type?: SortOrder
    damage?: SortOrder
  }

  export type PokemonSkillMinOrderByAggregateInput = {
    id?: SortOrder
    is_attack?: SortOrder
    name?: SortOrder
    pokemon_type?: SortOrder
    damage?: SortOrder
  }

  export type PokemonSkillSumOrderByAggregateInput = {
    id?: SortOrder
    damage?: SortOrder
  }

  export type ArchivedBattlesCountOrderByAggregateInput = {
    id?: SortOrder
    battle_history_id?: SortOrder
    archive_date?: SortOrder
  }

  export type ArchivedBattlesAvgOrderByAggregateInput = {
    id?: SortOrder
    battle_history_id?: SortOrder
  }

  export type ArchivedBattlesMaxOrderByAggregateInput = {
    id?: SortOrder
    battle_history_id?: SortOrder
    archive_date?: SortOrder
  }

  export type ArchivedBattlesMinOrderByAggregateInput = {
    id?: SortOrder
    battle_history_id?: SortOrder
    archive_date?: SortOrder
  }

  export type ArchivedBattlesSumOrderByAggregateInput = {
    id?: SortOrder
    battle_history_id?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type PokemonBattleHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    battle_id?: SortOrder
    pokemon_1_id?: SortOrder
    pokemon_2_id?: SortOrder
    pokemon_1_seed?: SortOrder
    pokemon_2_seed?: SortOrder
    battle_date?: SortOrder
    winner_pokemon_id?: SortOrder
    battle_duration?: SortOrder
    battle_log?: SortOrder
  }

  export type PokemonBattleHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    battle_id?: SortOrder
    pokemon_1_id?: SortOrder
    pokemon_2_id?: SortOrder
    pokemon_1_seed?: SortOrder
    pokemon_2_seed?: SortOrder
    winner_pokemon_id?: SortOrder
    battle_duration?: SortOrder
  }

  export type PokemonBattleHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    battle_id?: SortOrder
    pokemon_1_id?: SortOrder
    pokemon_2_id?: SortOrder
    pokemon_1_seed?: SortOrder
    pokemon_2_seed?: SortOrder
    battle_date?: SortOrder
    winner_pokemon_id?: SortOrder
    battle_duration?: SortOrder
  }

  export type PokemonBattleHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    battle_id?: SortOrder
    pokemon_1_id?: SortOrder
    pokemon_2_id?: SortOrder
    pokemon_1_seed?: SortOrder
    pokemon_2_seed?: SortOrder
    battle_date?: SortOrder
    winner_pokemon_id?: SortOrder
    battle_duration?: SortOrder
  }

  export type PokemonBattleHistorySumOrderByAggregateInput = {
    id?: SortOrder
    battle_id?: SortOrder
    pokemon_1_id?: SortOrder
    pokemon_2_id?: SortOrder
    pokemon_1_seed?: SortOrder
    pokemon_2_seed?: SortOrder
    winner_pokemon_id?: SortOrder
    battle_duration?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type PokemonCreateskillsInput = {
    set: number[]
  }

  export type PokemonBattleCreateNestedManyWithoutPokemon1Input = {
    create?: XOR<PokemonBattleCreateWithoutPokemon1Input, PokemonBattleUncheckedCreateWithoutPokemon1Input> | PokemonBattleCreateWithoutPokemon1Input[] | PokemonBattleUncheckedCreateWithoutPokemon1Input[]
    connectOrCreate?: PokemonBattleCreateOrConnectWithoutPokemon1Input | PokemonBattleCreateOrConnectWithoutPokemon1Input[]
    createMany?: PokemonBattleCreateManyPokemon1InputEnvelope
    connect?: PokemonBattleWhereUniqueInput | PokemonBattleWhereUniqueInput[]
  }

  export type PokemonBattleCreateNestedManyWithoutPokemon2Input = {
    create?: XOR<PokemonBattleCreateWithoutPokemon2Input, PokemonBattleUncheckedCreateWithoutPokemon2Input> | PokemonBattleCreateWithoutPokemon2Input[] | PokemonBattleUncheckedCreateWithoutPokemon2Input[]
    connectOrCreate?: PokemonBattleCreateOrConnectWithoutPokemon2Input | PokemonBattleCreateOrConnectWithoutPokemon2Input[]
    createMany?: PokemonBattleCreateManyPokemon2InputEnvelope
    connect?: PokemonBattleWhereUniqueInput | PokemonBattleWhereUniqueInput[]
  }

  export type PokemonBattleCreateNestedManyWithoutWinnerInput = {
    create?: XOR<PokemonBattleCreateWithoutWinnerInput, PokemonBattleUncheckedCreateWithoutWinnerInput> | PokemonBattleCreateWithoutWinnerInput[] | PokemonBattleUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: PokemonBattleCreateOrConnectWithoutWinnerInput | PokemonBattleCreateOrConnectWithoutWinnerInput[]
    createMany?: PokemonBattleCreateManyWinnerInputEnvelope
    connect?: PokemonBattleWhereUniqueInput | PokemonBattleWhereUniqueInput[]
  }

  export type PokemonBattleUncheckedCreateNestedManyWithoutPokemon1Input = {
    create?: XOR<PokemonBattleCreateWithoutPokemon1Input, PokemonBattleUncheckedCreateWithoutPokemon1Input> | PokemonBattleCreateWithoutPokemon1Input[] | PokemonBattleUncheckedCreateWithoutPokemon1Input[]
    connectOrCreate?: PokemonBattleCreateOrConnectWithoutPokemon1Input | PokemonBattleCreateOrConnectWithoutPokemon1Input[]
    createMany?: PokemonBattleCreateManyPokemon1InputEnvelope
    connect?: PokemonBattleWhereUniqueInput | PokemonBattleWhereUniqueInput[]
  }

  export type PokemonBattleUncheckedCreateNestedManyWithoutPokemon2Input = {
    create?: XOR<PokemonBattleCreateWithoutPokemon2Input, PokemonBattleUncheckedCreateWithoutPokemon2Input> | PokemonBattleCreateWithoutPokemon2Input[] | PokemonBattleUncheckedCreateWithoutPokemon2Input[]
    connectOrCreate?: PokemonBattleCreateOrConnectWithoutPokemon2Input | PokemonBattleCreateOrConnectWithoutPokemon2Input[]
    createMany?: PokemonBattleCreateManyPokemon2InputEnvelope
    connect?: PokemonBattleWhereUniqueInput | PokemonBattleWhereUniqueInput[]
  }

  export type PokemonBattleUncheckedCreateNestedManyWithoutWinnerInput = {
    create?: XOR<PokemonBattleCreateWithoutWinnerInput, PokemonBattleUncheckedCreateWithoutWinnerInput> | PokemonBattleCreateWithoutWinnerInput[] | PokemonBattleUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: PokemonBattleCreateOrConnectWithoutWinnerInput | PokemonBattleCreateOrConnectWithoutWinnerInput[]
    createMany?: PokemonBattleCreateManyWinnerInputEnvelope
    connect?: PokemonBattleWhereUniqueInput | PokemonBattleWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PokemonUpdateskillsInput = {
    set?: number[]
    push?: number | number[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PokemonBattleUpdateManyWithoutPokemon1NestedInput = {
    create?: XOR<PokemonBattleCreateWithoutPokemon1Input, PokemonBattleUncheckedCreateWithoutPokemon1Input> | PokemonBattleCreateWithoutPokemon1Input[] | PokemonBattleUncheckedCreateWithoutPokemon1Input[]
    connectOrCreate?: PokemonBattleCreateOrConnectWithoutPokemon1Input | PokemonBattleCreateOrConnectWithoutPokemon1Input[]
    upsert?: PokemonBattleUpsertWithWhereUniqueWithoutPokemon1Input | PokemonBattleUpsertWithWhereUniqueWithoutPokemon1Input[]
    createMany?: PokemonBattleCreateManyPokemon1InputEnvelope
    set?: PokemonBattleWhereUniqueInput | PokemonBattleWhereUniqueInput[]
    disconnect?: PokemonBattleWhereUniqueInput | PokemonBattleWhereUniqueInput[]
    delete?: PokemonBattleWhereUniqueInput | PokemonBattleWhereUniqueInput[]
    connect?: PokemonBattleWhereUniqueInput | PokemonBattleWhereUniqueInput[]
    update?: PokemonBattleUpdateWithWhereUniqueWithoutPokemon1Input | PokemonBattleUpdateWithWhereUniqueWithoutPokemon1Input[]
    updateMany?: PokemonBattleUpdateManyWithWhereWithoutPokemon1Input | PokemonBattleUpdateManyWithWhereWithoutPokemon1Input[]
    deleteMany?: PokemonBattleScalarWhereInput | PokemonBattleScalarWhereInput[]
  }

  export type PokemonBattleUpdateManyWithoutPokemon2NestedInput = {
    create?: XOR<PokemonBattleCreateWithoutPokemon2Input, PokemonBattleUncheckedCreateWithoutPokemon2Input> | PokemonBattleCreateWithoutPokemon2Input[] | PokemonBattleUncheckedCreateWithoutPokemon2Input[]
    connectOrCreate?: PokemonBattleCreateOrConnectWithoutPokemon2Input | PokemonBattleCreateOrConnectWithoutPokemon2Input[]
    upsert?: PokemonBattleUpsertWithWhereUniqueWithoutPokemon2Input | PokemonBattleUpsertWithWhereUniqueWithoutPokemon2Input[]
    createMany?: PokemonBattleCreateManyPokemon2InputEnvelope
    set?: PokemonBattleWhereUniqueInput | PokemonBattleWhereUniqueInput[]
    disconnect?: PokemonBattleWhereUniqueInput | PokemonBattleWhereUniqueInput[]
    delete?: PokemonBattleWhereUniqueInput | PokemonBattleWhereUniqueInput[]
    connect?: PokemonBattleWhereUniqueInput | PokemonBattleWhereUniqueInput[]
    update?: PokemonBattleUpdateWithWhereUniqueWithoutPokemon2Input | PokemonBattleUpdateWithWhereUniqueWithoutPokemon2Input[]
    updateMany?: PokemonBattleUpdateManyWithWhereWithoutPokemon2Input | PokemonBattleUpdateManyWithWhereWithoutPokemon2Input[]
    deleteMany?: PokemonBattleScalarWhereInput | PokemonBattleScalarWhereInput[]
  }

  export type PokemonBattleUpdateManyWithoutWinnerNestedInput = {
    create?: XOR<PokemonBattleCreateWithoutWinnerInput, PokemonBattleUncheckedCreateWithoutWinnerInput> | PokemonBattleCreateWithoutWinnerInput[] | PokemonBattleUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: PokemonBattleCreateOrConnectWithoutWinnerInput | PokemonBattleCreateOrConnectWithoutWinnerInput[]
    upsert?: PokemonBattleUpsertWithWhereUniqueWithoutWinnerInput | PokemonBattleUpsertWithWhereUniqueWithoutWinnerInput[]
    createMany?: PokemonBattleCreateManyWinnerInputEnvelope
    set?: PokemonBattleWhereUniqueInput | PokemonBattleWhereUniqueInput[]
    disconnect?: PokemonBattleWhereUniqueInput | PokemonBattleWhereUniqueInput[]
    delete?: PokemonBattleWhereUniqueInput | PokemonBattleWhereUniqueInput[]
    connect?: PokemonBattleWhereUniqueInput | PokemonBattleWhereUniqueInput[]
    update?: PokemonBattleUpdateWithWhereUniqueWithoutWinnerInput | PokemonBattleUpdateWithWhereUniqueWithoutWinnerInput[]
    updateMany?: PokemonBattleUpdateManyWithWhereWithoutWinnerInput | PokemonBattleUpdateManyWithWhereWithoutWinnerInput[]
    deleteMany?: PokemonBattleScalarWhereInput | PokemonBattleScalarWhereInput[]
  }

  export type PokemonBattleUncheckedUpdateManyWithoutPokemon1NestedInput = {
    create?: XOR<PokemonBattleCreateWithoutPokemon1Input, PokemonBattleUncheckedCreateWithoutPokemon1Input> | PokemonBattleCreateWithoutPokemon1Input[] | PokemonBattleUncheckedCreateWithoutPokemon1Input[]
    connectOrCreate?: PokemonBattleCreateOrConnectWithoutPokemon1Input | PokemonBattleCreateOrConnectWithoutPokemon1Input[]
    upsert?: PokemonBattleUpsertWithWhereUniqueWithoutPokemon1Input | PokemonBattleUpsertWithWhereUniqueWithoutPokemon1Input[]
    createMany?: PokemonBattleCreateManyPokemon1InputEnvelope
    set?: PokemonBattleWhereUniqueInput | PokemonBattleWhereUniqueInput[]
    disconnect?: PokemonBattleWhereUniqueInput | PokemonBattleWhereUniqueInput[]
    delete?: PokemonBattleWhereUniqueInput | PokemonBattleWhereUniqueInput[]
    connect?: PokemonBattleWhereUniqueInput | PokemonBattleWhereUniqueInput[]
    update?: PokemonBattleUpdateWithWhereUniqueWithoutPokemon1Input | PokemonBattleUpdateWithWhereUniqueWithoutPokemon1Input[]
    updateMany?: PokemonBattleUpdateManyWithWhereWithoutPokemon1Input | PokemonBattleUpdateManyWithWhereWithoutPokemon1Input[]
    deleteMany?: PokemonBattleScalarWhereInput | PokemonBattleScalarWhereInput[]
  }

  export type PokemonBattleUncheckedUpdateManyWithoutPokemon2NestedInput = {
    create?: XOR<PokemonBattleCreateWithoutPokemon2Input, PokemonBattleUncheckedCreateWithoutPokemon2Input> | PokemonBattleCreateWithoutPokemon2Input[] | PokemonBattleUncheckedCreateWithoutPokemon2Input[]
    connectOrCreate?: PokemonBattleCreateOrConnectWithoutPokemon2Input | PokemonBattleCreateOrConnectWithoutPokemon2Input[]
    upsert?: PokemonBattleUpsertWithWhereUniqueWithoutPokemon2Input | PokemonBattleUpsertWithWhereUniqueWithoutPokemon2Input[]
    createMany?: PokemonBattleCreateManyPokemon2InputEnvelope
    set?: PokemonBattleWhereUniqueInput | PokemonBattleWhereUniqueInput[]
    disconnect?: PokemonBattleWhereUniqueInput | PokemonBattleWhereUniqueInput[]
    delete?: PokemonBattleWhereUniqueInput | PokemonBattleWhereUniqueInput[]
    connect?: PokemonBattleWhereUniqueInput | PokemonBattleWhereUniqueInput[]
    update?: PokemonBattleUpdateWithWhereUniqueWithoutPokemon2Input | PokemonBattleUpdateWithWhereUniqueWithoutPokemon2Input[]
    updateMany?: PokemonBattleUpdateManyWithWhereWithoutPokemon2Input | PokemonBattleUpdateManyWithWhereWithoutPokemon2Input[]
    deleteMany?: PokemonBattleScalarWhereInput | PokemonBattleScalarWhereInput[]
  }

  export type PokemonBattleUncheckedUpdateManyWithoutWinnerNestedInput = {
    create?: XOR<PokemonBattleCreateWithoutWinnerInput, PokemonBattleUncheckedCreateWithoutWinnerInput> | PokemonBattleCreateWithoutWinnerInput[] | PokemonBattleUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: PokemonBattleCreateOrConnectWithoutWinnerInput | PokemonBattleCreateOrConnectWithoutWinnerInput[]
    upsert?: PokemonBattleUpsertWithWhereUniqueWithoutWinnerInput | PokemonBattleUpsertWithWhereUniqueWithoutWinnerInput[]
    createMany?: PokemonBattleCreateManyWinnerInputEnvelope
    set?: PokemonBattleWhereUniqueInput | PokemonBattleWhereUniqueInput[]
    disconnect?: PokemonBattleWhereUniqueInput | PokemonBattleWhereUniqueInput[]
    delete?: PokemonBattleWhereUniqueInput | PokemonBattleWhereUniqueInput[]
    connect?: PokemonBattleWhereUniqueInput | PokemonBattleWhereUniqueInput[]
    update?: PokemonBattleUpdateWithWhereUniqueWithoutWinnerInput | PokemonBattleUpdateWithWhereUniqueWithoutWinnerInput[]
    updateMany?: PokemonBattleUpdateManyWithWhereWithoutWinnerInput | PokemonBattleUpdateManyWithWhereWithoutWinnerInput[]
    deleteMany?: PokemonBattleScalarWhereInput | PokemonBattleScalarWhereInput[]
  }

  export type TournamentCreateNestedOneWithoutBattlesInput = {
    create?: XOR<TournamentCreateWithoutBattlesInput, TournamentUncheckedCreateWithoutBattlesInput>
    connectOrCreate?: TournamentCreateOrConnectWithoutBattlesInput
    connect?: TournamentWhereUniqueInput
  }

  export type PokemonCreateNestedOneWithoutBattlesAsP1Input = {
    create?: XOR<PokemonCreateWithoutBattlesAsP1Input, PokemonUncheckedCreateWithoutBattlesAsP1Input>
    connectOrCreate?: PokemonCreateOrConnectWithoutBattlesAsP1Input
    connect?: PokemonWhereUniqueInput
  }

  export type PokemonCreateNestedOneWithoutBattlesAsP2Input = {
    create?: XOR<PokemonCreateWithoutBattlesAsP2Input, PokemonUncheckedCreateWithoutBattlesAsP2Input>
    connectOrCreate?: PokemonCreateOrConnectWithoutBattlesAsP2Input
    connect?: PokemonWhereUniqueInput
  }

  export type PokemonCreateNestedOneWithoutBattlesWonInput = {
    create?: XOR<PokemonCreateWithoutBattlesWonInput, PokemonUncheckedCreateWithoutBattlesWonInput>
    connectOrCreate?: PokemonCreateOrConnectWithoutBattlesWonInput
    connect?: PokemonWhereUniqueInput
  }

  export type TournamentUpdateOneWithoutBattlesNestedInput = {
    create?: XOR<TournamentCreateWithoutBattlesInput, TournamentUncheckedCreateWithoutBattlesInput>
    connectOrCreate?: TournamentCreateOrConnectWithoutBattlesInput
    upsert?: TournamentUpsertWithoutBattlesInput
    disconnect?: TournamentWhereInput | boolean
    delete?: TournamentWhereInput | boolean
    connect?: TournamentWhereUniqueInput
    update?: XOR<XOR<TournamentUpdateToOneWithWhereWithoutBattlesInput, TournamentUpdateWithoutBattlesInput>, TournamentUncheckedUpdateWithoutBattlesInput>
  }

  export type PokemonUpdateOneRequiredWithoutBattlesAsP1NestedInput = {
    create?: XOR<PokemonCreateWithoutBattlesAsP1Input, PokemonUncheckedCreateWithoutBattlesAsP1Input>
    connectOrCreate?: PokemonCreateOrConnectWithoutBattlesAsP1Input
    upsert?: PokemonUpsertWithoutBattlesAsP1Input
    connect?: PokemonWhereUniqueInput
    update?: XOR<XOR<PokemonUpdateToOneWithWhereWithoutBattlesAsP1Input, PokemonUpdateWithoutBattlesAsP1Input>, PokemonUncheckedUpdateWithoutBattlesAsP1Input>
  }

  export type PokemonUpdateOneRequiredWithoutBattlesAsP2NestedInput = {
    create?: XOR<PokemonCreateWithoutBattlesAsP2Input, PokemonUncheckedCreateWithoutBattlesAsP2Input>
    connectOrCreate?: PokemonCreateOrConnectWithoutBattlesAsP2Input
    upsert?: PokemonUpsertWithoutBattlesAsP2Input
    connect?: PokemonWhereUniqueInput
    update?: XOR<XOR<PokemonUpdateToOneWithWhereWithoutBattlesAsP2Input, PokemonUpdateWithoutBattlesAsP2Input>, PokemonUncheckedUpdateWithoutBattlesAsP2Input>
  }

  export type PokemonUpdateOneWithoutBattlesWonNestedInput = {
    create?: XOR<PokemonCreateWithoutBattlesWonInput, PokemonUncheckedCreateWithoutBattlesWonInput>
    connectOrCreate?: PokemonCreateOrConnectWithoutBattlesWonInput
    upsert?: PokemonUpsertWithoutBattlesWonInput
    disconnect?: PokemonWhereInput | boolean
    delete?: PokemonWhereInput | boolean
    connect?: PokemonWhereUniqueInput
    update?: XOR<XOR<PokemonUpdateToOneWithWhereWithoutBattlesWonInput, PokemonUpdateWithoutBattlesWonInput>, PokemonUncheckedUpdateWithoutBattlesWonInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PokemonBattleCreateNestedManyWithoutTournamentInput = {
    create?: XOR<PokemonBattleCreateWithoutTournamentInput, PokemonBattleUncheckedCreateWithoutTournamentInput> | PokemonBattleCreateWithoutTournamentInput[] | PokemonBattleUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: PokemonBattleCreateOrConnectWithoutTournamentInput | PokemonBattleCreateOrConnectWithoutTournamentInput[]
    createMany?: PokemonBattleCreateManyTournamentInputEnvelope
    connect?: PokemonBattleWhereUniqueInput | PokemonBattleWhereUniqueInput[]
  }

  export type PokemonBattleUncheckedCreateNestedManyWithoutTournamentInput = {
    create?: XOR<PokemonBattleCreateWithoutTournamentInput, PokemonBattleUncheckedCreateWithoutTournamentInput> | PokemonBattleCreateWithoutTournamentInput[] | PokemonBattleUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: PokemonBattleCreateOrConnectWithoutTournamentInput | PokemonBattleCreateOrConnectWithoutTournamentInput[]
    createMany?: PokemonBattleCreateManyTournamentInputEnvelope
    connect?: PokemonBattleWhereUniqueInput | PokemonBattleWhereUniqueInput[]
  }

  export type PokemonBattleUpdateManyWithoutTournamentNestedInput = {
    create?: XOR<PokemonBattleCreateWithoutTournamentInput, PokemonBattleUncheckedCreateWithoutTournamentInput> | PokemonBattleCreateWithoutTournamentInput[] | PokemonBattleUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: PokemonBattleCreateOrConnectWithoutTournamentInput | PokemonBattleCreateOrConnectWithoutTournamentInput[]
    upsert?: PokemonBattleUpsertWithWhereUniqueWithoutTournamentInput | PokemonBattleUpsertWithWhereUniqueWithoutTournamentInput[]
    createMany?: PokemonBattleCreateManyTournamentInputEnvelope
    set?: PokemonBattleWhereUniqueInput | PokemonBattleWhereUniqueInput[]
    disconnect?: PokemonBattleWhereUniqueInput | PokemonBattleWhereUniqueInput[]
    delete?: PokemonBattleWhereUniqueInput | PokemonBattleWhereUniqueInput[]
    connect?: PokemonBattleWhereUniqueInput | PokemonBattleWhereUniqueInput[]
    update?: PokemonBattleUpdateWithWhereUniqueWithoutTournamentInput | PokemonBattleUpdateWithWhereUniqueWithoutTournamentInput[]
    updateMany?: PokemonBattleUpdateManyWithWhereWithoutTournamentInput | PokemonBattleUpdateManyWithWhereWithoutTournamentInput[]
    deleteMany?: PokemonBattleScalarWhereInput | PokemonBattleScalarWhereInput[]
  }

  export type PokemonBattleUncheckedUpdateManyWithoutTournamentNestedInput = {
    create?: XOR<PokemonBattleCreateWithoutTournamentInput, PokemonBattleUncheckedCreateWithoutTournamentInput> | PokemonBattleCreateWithoutTournamentInput[] | PokemonBattleUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: PokemonBattleCreateOrConnectWithoutTournamentInput | PokemonBattleCreateOrConnectWithoutTournamentInput[]
    upsert?: PokemonBattleUpsertWithWhereUniqueWithoutTournamentInput | PokemonBattleUpsertWithWhereUniqueWithoutTournamentInput[]
    createMany?: PokemonBattleCreateManyTournamentInputEnvelope
    set?: PokemonBattleWhereUniqueInput | PokemonBattleWhereUniqueInput[]
    disconnect?: PokemonBattleWhereUniqueInput | PokemonBattleWhereUniqueInput[]
    delete?: PokemonBattleWhereUniqueInput | PokemonBattleWhereUniqueInput[]
    connect?: PokemonBattleWhereUniqueInput | PokemonBattleWhereUniqueInput[]
    update?: PokemonBattleUpdateWithWhereUniqueWithoutTournamentInput | PokemonBattleUpdateWithWhereUniqueWithoutTournamentInput[]
    updateMany?: PokemonBattleUpdateManyWithWhereWithoutTournamentInput | PokemonBattleUpdateManyWithWhereWithoutTournamentInput[]
    deleteMany?: PokemonBattleScalarWhereInput | PokemonBattleScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type PokemonBattleCreateWithoutPokemon1Input = {
    pokemon_1_seed: number
    pokemon_2_seed: number
    battle_date?: Date | string
    battle_duration?: string | null
    battle_log?: NullableJsonNullValueInput | InputJsonValue
    tournament?: TournamentCreateNestedOneWithoutBattlesInput
    pokemon2: PokemonCreateNestedOneWithoutBattlesAsP2Input
    winner?: PokemonCreateNestedOneWithoutBattlesWonInput
  }

  export type PokemonBattleUncheckedCreateWithoutPokemon1Input = {
    id?: number
    pokemon_2_id: number
    pokemon_1_seed: number
    pokemon_2_seed: number
    battle_date?: Date | string
    winner_pokemon_id?: number | null
    battle_duration?: string | null
    battle_log?: NullableJsonNullValueInput | InputJsonValue
    tournamentId?: number | null
  }

  export type PokemonBattleCreateOrConnectWithoutPokemon1Input = {
    where: PokemonBattleWhereUniqueInput
    create: XOR<PokemonBattleCreateWithoutPokemon1Input, PokemonBattleUncheckedCreateWithoutPokemon1Input>
  }

  export type PokemonBattleCreateManyPokemon1InputEnvelope = {
    data: PokemonBattleCreateManyPokemon1Input | PokemonBattleCreateManyPokemon1Input[]
    skipDuplicates?: boolean
  }

  export type PokemonBattleCreateWithoutPokemon2Input = {
    pokemon_1_seed: number
    pokemon_2_seed: number
    battle_date?: Date | string
    battle_duration?: string | null
    battle_log?: NullableJsonNullValueInput | InputJsonValue
    tournament?: TournamentCreateNestedOneWithoutBattlesInput
    pokemon1: PokemonCreateNestedOneWithoutBattlesAsP1Input
    winner?: PokemonCreateNestedOneWithoutBattlesWonInput
  }

  export type PokemonBattleUncheckedCreateWithoutPokemon2Input = {
    id?: number
    pokemon_1_id: number
    pokemon_1_seed: number
    pokemon_2_seed: number
    battle_date?: Date | string
    winner_pokemon_id?: number | null
    battle_duration?: string | null
    battle_log?: NullableJsonNullValueInput | InputJsonValue
    tournamentId?: number | null
  }

  export type PokemonBattleCreateOrConnectWithoutPokemon2Input = {
    where: PokemonBattleWhereUniqueInput
    create: XOR<PokemonBattleCreateWithoutPokemon2Input, PokemonBattleUncheckedCreateWithoutPokemon2Input>
  }

  export type PokemonBattleCreateManyPokemon2InputEnvelope = {
    data: PokemonBattleCreateManyPokemon2Input | PokemonBattleCreateManyPokemon2Input[]
    skipDuplicates?: boolean
  }

  export type PokemonBattleCreateWithoutWinnerInput = {
    pokemon_1_seed: number
    pokemon_2_seed: number
    battle_date?: Date | string
    battle_duration?: string | null
    battle_log?: NullableJsonNullValueInput | InputJsonValue
    tournament?: TournamentCreateNestedOneWithoutBattlesInput
    pokemon1: PokemonCreateNestedOneWithoutBattlesAsP1Input
    pokemon2: PokemonCreateNestedOneWithoutBattlesAsP2Input
  }

  export type PokemonBattleUncheckedCreateWithoutWinnerInput = {
    id?: number
    pokemon_1_id: number
    pokemon_2_id: number
    pokemon_1_seed: number
    pokemon_2_seed: number
    battle_date?: Date | string
    battle_duration?: string | null
    battle_log?: NullableJsonNullValueInput | InputJsonValue
    tournamentId?: number | null
  }

  export type PokemonBattleCreateOrConnectWithoutWinnerInput = {
    where: PokemonBattleWhereUniqueInput
    create: XOR<PokemonBattleCreateWithoutWinnerInput, PokemonBattleUncheckedCreateWithoutWinnerInput>
  }

  export type PokemonBattleCreateManyWinnerInputEnvelope = {
    data: PokemonBattleCreateManyWinnerInput | PokemonBattleCreateManyWinnerInput[]
    skipDuplicates?: boolean
  }

  export type PokemonBattleUpsertWithWhereUniqueWithoutPokemon1Input = {
    where: PokemonBattleWhereUniqueInput
    update: XOR<PokemonBattleUpdateWithoutPokemon1Input, PokemonBattleUncheckedUpdateWithoutPokemon1Input>
    create: XOR<PokemonBattleCreateWithoutPokemon1Input, PokemonBattleUncheckedCreateWithoutPokemon1Input>
  }

  export type PokemonBattleUpdateWithWhereUniqueWithoutPokemon1Input = {
    where: PokemonBattleWhereUniqueInput
    data: XOR<PokemonBattleUpdateWithoutPokemon1Input, PokemonBattleUncheckedUpdateWithoutPokemon1Input>
  }

  export type PokemonBattleUpdateManyWithWhereWithoutPokemon1Input = {
    where: PokemonBattleScalarWhereInput
    data: XOR<PokemonBattleUpdateManyMutationInput, PokemonBattleUncheckedUpdateManyWithoutPokemon1Input>
  }

  export type PokemonBattleScalarWhereInput = {
    AND?: PokemonBattleScalarWhereInput | PokemonBattleScalarWhereInput[]
    OR?: PokemonBattleScalarWhereInput[]
    NOT?: PokemonBattleScalarWhereInput | PokemonBattleScalarWhereInput[]
    id?: IntFilter<"PokemonBattle"> | number
    pokemon_1_id?: IntFilter<"PokemonBattle"> | number
    pokemon_2_id?: IntFilter<"PokemonBattle"> | number
    pokemon_1_seed?: IntFilter<"PokemonBattle"> | number
    pokemon_2_seed?: IntFilter<"PokemonBattle"> | number
    battle_date?: DateTimeFilter<"PokemonBattle"> | Date | string
    winner_pokemon_id?: IntNullableFilter<"PokemonBattle"> | number | null
    battle_duration?: StringNullableFilter<"PokemonBattle"> | string | null
    battle_log?: JsonNullableFilter<"PokemonBattle">
    tournamentId?: IntNullableFilter<"PokemonBattle"> | number | null
  }

  export type PokemonBattleUpsertWithWhereUniqueWithoutPokemon2Input = {
    where: PokemonBattleWhereUniqueInput
    update: XOR<PokemonBattleUpdateWithoutPokemon2Input, PokemonBattleUncheckedUpdateWithoutPokemon2Input>
    create: XOR<PokemonBattleCreateWithoutPokemon2Input, PokemonBattleUncheckedCreateWithoutPokemon2Input>
  }

  export type PokemonBattleUpdateWithWhereUniqueWithoutPokemon2Input = {
    where: PokemonBattleWhereUniqueInput
    data: XOR<PokemonBattleUpdateWithoutPokemon2Input, PokemonBattleUncheckedUpdateWithoutPokemon2Input>
  }

  export type PokemonBattleUpdateManyWithWhereWithoutPokemon2Input = {
    where: PokemonBattleScalarWhereInput
    data: XOR<PokemonBattleUpdateManyMutationInput, PokemonBattleUncheckedUpdateManyWithoutPokemon2Input>
  }

  export type PokemonBattleUpsertWithWhereUniqueWithoutWinnerInput = {
    where: PokemonBattleWhereUniqueInput
    update: XOR<PokemonBattleUpdateWithoutWinnerInput, PokemonBattleUncheckedUpdateWithoutWinnerInput>
    create: XOR<PokemonBattleCreateWithoutWinnerInput, PokemonBattleUncheckedCreateWithoutWinnerInput>
  }

  export type PokemonBattleUpdateWithWhereUniqueWithoutWinnerInput = {
    where: PokemonBattleWhereUniqueInput
    data: XOR<PokemonBattleUpdateWithoutWinnerInput, PokemonBattleUncheckedUpdateWithoutWinnerInput>
  }

  export type PokemonBattleUpdateManyWithWhereWithoutWinnerInput = {
    where: PokemonBattleScalarWhereInput
    data: XOR<PokemonBattleUpdateManyMutationInput, PokemonBattleUncheckedUpdateManyWithoutWinnerInput>
  }

  export type TournamentCreateWithoutBattlesInput = {
    name: string
    venue?: string
    seed?: number
    createdAt?: Date | string
  }

  export type TournamentUncheckedCreateWithoutBattlesInput = {
    id?: number
    name: string
    venue?: string
    seed?: number
    createdAt?: Date | string
  }

  export type TournamentCreateOrConnectWithoutBattlesInput = {
    where: TournamentWhereUniqueInput
    create: XOR<TournamentCreateWithoutBattlesInput, TournamentUncheckedCreateWithoutBattlesInput>
  }

  export type PokemonCreateWithoutBattlesAsP1Input = {
    instance_name?: string | null
    pokemon_name: string
    pokemon_type: string
    level?: number
    hit_points?: number
    max_hit_points?: number
    battles_won?: number
    battles_lost?: number
    image_url?: string | null
    skills?: PokemonCreateskillsInput | number[]
    is_archived?: boolean
    createdAt?: Date | string
    battlesAsP2?: PokemonBattleCreateNestedManyWithoutPokemon2Input
    battlesWon?: PokemonBattleCreateNestedManyWithoutWinnerInput
  }

  export type PokemonUncheckedCreateWithoutBattlesAsP1Input = {
    id?: number
    instance_name?: string | null
    pokemon_name: string
    pokemon_type: string
    level?: number
    hit_points?: number
    max_hit_points?: number
    battles_won?: number
    battles_lost?: number
    image_url?: string | null
    skills?: PokemonCreateskillsInput | number[]
    is_archived?: boolean
    createdAt?: Date | string
    battlesAsP2?: PokemonBattleUncheckedCreateNestedManyWithoutPokemon2Input
    battlesWon?: PokemonBattleUncheckedCreateNestedManyWithoutWinnerInput
  }

  export type PokemonCreateOrConnectWithoutBattlesAsP1Input = {
    where: PokemonWhereUniqueInput
    create: XOR<PokemonCreateWithoutBattlesAsP1Input, PokemonUncheckedCreateWithoutBattlesAsP1Input>
  }

  export type PokemonCreateWithoutBattlesAsP2Input = {
    instance_name?: string | null
    pokemon_name: string
    pokemon_type: string
    level?: number
    hit_points?: number
    max_hit_points?: number
    battles_won?: number
    battles_lost?: number
    image_url?: string | null
    skills?: PokemonCreateskillsInput | number[]
    is_archived?: boolean
    createdAt?: Date | string
    battlesAsP1?: PokemonBattleCreateNestedManyWithoutPokemon1Input
    battlesWon?: PokemonBattleCreateNestedManyWithoutWinnerInput
  }

  export type PokemonUncheckedCreateWithoutBattlesAsP2Input = {
    id?: number
    instance_name?: string | null
    pokemon_name: string
    pokemon_type: string
    level?: number
    hit_points?: number
    max_hit_points?: number
    battles_won?: number
    battles_lost?: number
    image_url?: string | null
    skills?: PokemonCreateskillsInput | number[]
    is_archived?: boolean
    createdAt?: Date | string
    battlesAsP1?: PokemonBattleUncheckedCreateNestedManyWithoutPokemon1Input
    battlesWon?: PokemonBattleUncheckedCreateNestedManyWithoutWinnerInput
  }

  export type PokemonCreateOrConnectWithoutBattlesAsP2Input = {
    where: PokemonWhereUniqueInput
    create: XOR<PokemonCreateWithoutBattlesAsP2Input, PokemonUncheckedCreateWithoutBattlesAsP2Input>
  }

  export type PokemonCreateWithoutBattlesWonInput = {
    instance_name?: string | null
    pokemon_name: string
    pokemon_type: string
    level?: number
    hit_points?: number
    max_hit_points?: number
    battles_won?: number
    battles_lost?: number
    image_url?: string | null
    skills?: PokemonCreateskillsInput | number[]
    is_archived?: boolean
    createdAt?: Date | string
    battlesAsP1?: PokemonBattleCreateNestedManyWithoutPokemon1Input
    battlesAsP2?: PokemonBattleCreateNestedManyWithoutPokemon2Input
  }

  export type PokemonUncheckedCreateWithoutBattlesWonInput = {
    id?: number
    instance_name?: string | null
    pokemon_name: string
    pokemon_type: string
    level?: number
    hit_points?: number
    max_hit_points?: number
    battles_won?: number
    battles_lost?: number
    image_url?: string | null
    skills?: PokemonCreateskillsInput | number[]
    is_archived?: boolean
    createdAt?: Date | string
    battlesAsP1?: PokemonBattleUncheckedCreateNestedManyWithoutPokemon1Input
    battlesAsP2?: PokemonBattleUncheckedCreateNestedManyWithoutPokemon2Input
  }

  export type PokemonCreateOrConnectWithoutBattlesWonInput = {
    where: PokemonWhereUniqueInput
    create: XOR<PokemonCreateWithoutBattlesWonInput, PokemonUncheckedCreateWithoutBattlesWonInput>
  }

  export type TournamentUpsertWithoutBattlesInput = {
    update: XOR<TournamentUpdateWithoutBattlesInput, TournamentUncheckedUpdateWithoutBattlesInput>
    create: XOR<TournamentCreateWithoutBattlesInput, TournamentUncheckedCreateWithoutBattlesInput>
    where?: TournamentWhereInput
  }

  export type TournamentUpdateToOneWithWhereWithoutBattlesInput = {
    where?: TournamentWhereInput
    data: XOR<TournamentUpdateWithoutBattlesInput, TournamentUncheckedUpdateWithoutBattlesInput>
  }

  export type TournamentUpdateWithoutBattlesInput = {
    name?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    seed?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentUncheckedUpdateWithoutBattlesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    seed?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PokemonUpsertWithoutBattlesAsP1Input = {
    update: XOR<PokemonUpdateWithoutBattlesAsP1Input, PokemonUncheckedUpdateWithoutBattlesAsP1Input>
    create: XOR<PokemonCreateWithoutBattlesAsP1Input, PokemonUncheckedCreateWithoutBattlesAsP1Input>
    where?: PokemonWhereInput
  }

  export type PokemonUpdateToOneWithWhereWithoutBattlesAsP1Input = {
    where?: PokemonWhereInput
    data: XOR<PokemonUpdateWithoutBattlesAsP1Input, PokemonUncheckedUpdateWithoutBattlesAsP1Input>
  }

  export type PokemonUpdateWithoutBattlesAsP1Input = {
    instance_name?: NullableStringFieldUpdateOperationsInput | string | null
    pokemon_name?: StringFieldUpdateOperationsInput | string
    pokemon_type?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    hit_points?: IntFieldUpdateOperationsInput | number
    max_hit_points?: IntFieldUpdateOperationsInput | number
    battles_won?: IntFieldUpdateOperationsInput | number
    battles_lost?: IntFieldUpdateOperationsInput | number
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: PokemonUpdateskillsInput | number[]
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    battlesAsP2?: PokemonBattleUpdateManyWithoutPokemon2NestedInput
    battlesWon?: PokemonBattleUpdateManyWithoutWinnerNestedInput
  }

  export type PokemonUncheckedUpdateWithoutBattlesAsP1Input = {
    id?: IntFieldUpdateOperationsInput | number
    instance_name?: NullableStringFieldUpdateOperationsInput | string | null
    pokemon_name?: StringFieldUpdateOperationsInput | string
    pokemon_type?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    hit_points?: IntFieldUpdateOperationsInput | number
    max_hit_points?: IntFieldUpdateOperationsInput | number
    battles_won?: IntFieldUpdateOperationsInput | number
    battles_lost?: IntFieldUpdateOperationsInput | number
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: PokemonUpdateskillsInput | number[]
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    battlesAsP2?: PokemonBattleUncheckedUpdateManyWithoutPokemon2NestedInput
    battlesWon?: PokemonBattleUncheckedUpdateManyWithoutWinnerNestedInput
  }

  export type PokemonUpsertWithoutBattlesAsP2Input = {
    update: XOR<PokemonUpdateWithoutBattlesAsP2Input, PokemonUncheckedUpdateWithoutBattlesAsP2Input>
    create: XOR<PokemonCreateWithoutBattlesAsP2Input, PokemonUncheckedCreateWithoutBattlesAsP2Input>
    where?: PokemonWhereInput
  }

  export type PokemonUpdateToOneWithWhereWithoutBattlesAsP2Input = {
    where?: PokemonWhereInput
    data: XOR<PokemonUpdateWithoutBattlesAsP2Input, PokemonUncheckedUpdateWithoutBattlesAsP2Input>
  }

  export type PokemonUpdateWithoutBattlesAsP2Input = {
    instance_name?: NullableStringFieldUpdateOperationsInput | string | null
    pokemon_name?: StringFieldUpdateOperationsInput | string
    pokemon_type?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    hit_points?: IntFieldUpdateOperationsInput | number
    max_hit_points?: IntFieldUpdateOperationsInput | number
    battles_won?: IntFieldUpdateOperationsInput | number
    battles_lost?: IntFieldUpdateOperationsInput | number
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: PokemonUpdateskillsInput | number[]
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    battlesAsP1?: PokemonBattleUpdateManyWithoutPokemon1NestedInput
    battlesWon?: PokemonBattleUpdateManyWithoutWinnerNestedInput
  }

  export type PokemonUncheckedUpdateWithoutBattlesAsP2Input = {
    id?: IntFieldUpdateOperationsInput | number
    instance_name?: NullableStringFieldUpdateOperationsInput | string | null
    pokemon_name?: StringFieldUpdateOperationsInput | string
    pokemon_type?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    hit_points?: IntFieldUpdateOperationsInput | number
    max_hit_points?: IntFieldUpdateOperationsInput | number
    battles_won?: IntFieldUpdateOperationsInput | number
    battles_lost?: IntFieldUpdateOperationsInput | number
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: PokemonUpdateskillsInput | number[]
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    battlesAsP1?: PokemonBattleUncheckedUpdateManyWithoutPokemon1NestedInput
    battlesWon?: PokemonBattleUncheckedUpdateManyWithoutWinnerNestedInput
  }

  export type PokemonUpsertWithoutBattlesWonInput = {
    update: XOR<PokemonUpdateWithoutBattlesWonInput, PokemonUncheckedUpdateWithoutBattlesWonInput>
    create: XOR<PokemonCreateWithoutBattlesWonInput, PokemonUncheckedCreateWithoutBattlesWonInput>
    where?: PokemonWhereInput
  }

  export type PokemonUpdateToOneWithWhereWithoutBattlesWonInput = {
    where?: PokemonWhereInput
    data: XOR<PokemonUpdateWithoutBattlesWonInput, PokemonUncheckedUpdateWithoutBattlesWonInput>
  }

  export type PokemonUpdateWithoutBattlesWonInput = {
    instance_name?: NullableStringFieldUpdateOperationsInput | string | null
    pokemon_name?: StringFieldUpdateOperationsInput | string
    pokemon_type?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    hit_points?: IntFieldUpdateOperationsInput | number
    max_hit_points?: IntFieldUpdateOperationsInput | number
    battles_won?: IntFieldUpdateOperationsInput | number
    battles_lost?: IntFieldUpdateOperationsInput | number
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: PokemonUpdateskillsInput | number[]
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    battlesAsP1?: PokemonBattleUpdateManyWithoutPokemon1NestedInput
    battlesAsP2?: PokemonBattleUpdateManyWithoutPokemon2NestedInput
  }

  export type PokemonUncheckedUpdateWithoutBattlesWonInput = {
    id?: IntFieldUpdateOperationsInput | number
    instance_name?: NullableStringFieldUpdateOperationsInput | string | null
    pokemon_name?: StringFieldUpdateOperationsInput | string
    pokemon_type?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    hit_points?: IntFieldUpdateOperationsInput | number
    max_hit_points?: IntFieldUpdateOperationsInput | number
    battles_won?: IntFieldUpdateOperationsInput | number
    battles_lost?: IntFieldUpdateOperationsInput | number
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: PokemonUpdateskillsInput | number[]
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    battlesAsP1?: PokemonBattleUncheckedUpdateManyWithoutPokemon1NestedInput
    battlesAsP2?: PokemonBattleUncheckedUpdateManyWithoutPokemon2NestedInput
  }

  export type PokemonBattleCreateWithoutTournamentInput = {
    pokemon_1_seed: number
    pokemon_2_seed: number
    battle_date?: Date | string
    battle_duration?: string | null
    battle_log?: NullableJsonNullValueInput | InputJsonValue
    pokemon1: PokemonCreateNestedOneWithoutBattlesAsP1Input
    pokemon2: PokemonCreateNestedOneWithoutBattlesAsP2Input
    winner?: PokemonCreateNestedOneWithoutBattlesWonInput
  }

  export type PokemonBattleUncheckedCreateWithoutTournamentInput = {
    id?: number
    pokemon_1_id: number
    pokemon_2_id: number
    pokemon_1_seed: number
    pokemon_2_seed: number
    battle_date?: Date | string
    winner_pokemon_id?: number | null
    battle_duration?: string | null
    battle_log?: NullableJsonNullValueInput | InputJsonValue
  }

  export type PokemonBattleCreateOrConnectWithoutTournamentInput = {
    where: PokemonBattleWhereUniqueInput
    create: XOR<PokemonBattleCreateWithoutTournamentInput, PokemonBattleUncheckedCreateWithoutTournamentInput>
  }

  export type PokemonBattleCreateManyTournamentInputEnvelope = {
    data: PokemonBattleCreateManyTournamentInput | PokemonBattleCreateManyTournamentInput[]
    skipDuplicates?: boolean
  }

  export type PokemonBattleUpsertWithWhereUniqueWithoutTournamentInput = {
    where: PokemonBattleWhereUniqueInput
    update: XOR<PokemonBattleUpdateWithoutTournamentInput, PokemonBattleUncheckedUpdateWithoutTournamentInput>
    create: XOR<PokemonBattleCreateWithoutTournamentInput, PokemonBattleUncheckedCreateWithoutTournamentInput>
  }

  export type PokemonBattleUpdateWithWhereUniqueWithoutTournamentInput = {
    where: PokemonBattleWhereUniqueInput
    data: XOR<PokemonBattleUpdateWithoutTournamentInput, PokemonBattleUncheckedUpdateWithoutTournamentInput>
  }

  export type PokemonBattleUpdateManyWithWhereWithoutTournamentInput = {
    where: PokemonBattleScalarWhereInput
    data: XOR<PokemonBattleUpdateManyMutationInput, PokemonBattleUncheckedUpdateManyWithoutTournamentInput>
  }

  export type PokemonBattleCreateManyPokemon1Input = {
    id?: number
    pokemon_2_id: number
    pokemon_1_seed: number
    pokemon_2_seed: number
    battle_date?: Date | string
    winner_pokemon_id?: number | null
    battle_duration?: string | null
    battle_log?: NullableJsonNullValueInput | InputJsonValue
    tournamentId?: number | null
  }

  export type PokemonBattleCreateManyPokemon2Input = {
    id?: number
    pokemon_1_id: number
    pokemon_1_seed: number
    pokemon_2_seed: number
    battle_date?: Date | string
    winner_pokemon_id?: number | null
    battle_duration?: string | null
    battle_log?: NullableJsonNullValueInput | InputJsonValue
    tournamentId?: number | null
  }

  export type PokemonBattleCreateManyWinnerInput = {
    id?: number
    pokemon_1_id: number
    pokemon_2_id: number
    pokemon_1_seed: number
    pokemon_2_seed: number
    battle_date?: Date | string
    battle_duration?: string | null
    battle_log?: NullableJsonNullValueInput | InputJsonValue
    tournamentId?: number | null
  }

  export type PokemonBattleUpdateWithoutPokemon1Input = {
    pokemon_1_seed?: IntFieldUpdateOperationsInput | number
    pokemon_2_seed?: IntFieldUpdateOperationsInput | number
    battle_date?: DateTimeFieldUpdateOperationsInput | Date | string
    battle_duration?: NullableStringFieldUpdateOperationsInput | string | null
    battle_log?: NullableJsonNullValueInput | InputJsonValue
    tournament?: TournamentUpdateOneWithoutBattlesNestedInput
    pokemon2?: PokemonUpdateOneRequiredWithoutBattlesAsP2NestedInput
    winner?: PokemonUpdateOneWithoutBattlesWonNestedInput
  }

  export type PokemonBattleUncheckedUpdateWithoutPokemon1Input = {
    id?: IntFieldUpdateOperationsInput | number
    pokemon_2_id?: IntFieldUpdateOperationsInput | number
    pokemon_1_seed?: IntFieldUpdateOperationsInput | number
    pokemon_2_seed?: IntFieldUpdateOperationsInput | number
    battle_date?: DateTimeFieldUpdateOperationsInput | Date | string
    winner_pokemon_id?: NullableIntFieldUpdateOperationsInput | number | null
    battle_duration?: NullableStringFieldUpdateOperationsInput | string | null
    battle_log?: NullableJsonNullValueInput | InputJsonValue
    tournamentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PokemonBattleUncheckedUpdateManyWithoutPokemon1Input = {
    id?: IntFieldUpdateOperationsInput | number
    pokemon_2_id?: IntFieldUpdateOperationsInput | number
    pokemon_1_seed?: IntFieldUpdateOperationsInput | number
    pokemon_2_seed?: IntFieldUpdateOperationsInput | number
    battle_date?: DateTimeFieldUpdateOperationsInput | Date | string
    winner_pokemon_id?: NullableIntFieldUpdateOperationsInput | number | null
    battle_duration?: NullableStringFieldUpdateOperationsInput | string | null
    battle_log?: NullableJsonNullValueInput | InputJsonValue
    tournamentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PokemonBattleUpdateWithoutPokemon2Input = {
    pokemon_1_seed?: IntFieldUpdateOperationsInput | number
    pokemon_2_seed?: IntFieldUpdateOperationsInput | number
    battle_date?: DateTimeFieldUpdateOperationsInput | Date | string
    battle_duration?: NullableStringFieldUpdateOperationsInput | string | null
    battle_log?: NullableJsonNullValueInput | InputJsonValue
    tournament?: TournamentUpdateOneWithoutBattlesNestedInput
    pokemon1?: PokemonUpdateOneRequiredWithoutBattlesAsP1NestedInput
    winner?: PokemonUpdateOneWithoutBattlesWonNestedInput
  }

  export type PokemonBattleUncheckedUpdateWithoutPokemon2Input = {
    id?: IntFieldUpdateOperationsInput | number
    pokemon_1_id?: IntFieldUpdateOperationsInput | number
    pokemon_1_seed?: IntFieldUpdateOperationsInput | number
    pokemon_2_seed?: IntFieldUpdateOperationsInput | number
    battle_date?: DateTimeFieldUpdateOperationsInput | Date | string
    winner_pokemon_id?: NullableIntFieldUpdateOperationsInput | number | null
    battle_duration?: NullableStringFieldUpdateOperationsInput | string | null
    battle_log?: NullableJsonNullValueInput | InputJsonValue
    tournamentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PokemonBattleUncheckedUpdateManyWithoutPokemon2Input = {
    id?: IntFieldUpdateOperationsInput | number
    pokemon_1_id?: IntFieldUpdateOperationsInput | number
    pokemon_1_seed?: IntFieldUpdateOperationsInput | number
    pokemon_2_seed?: IntFieldUpdateOperationsInput | number
    battle_date?: DateTimeFieldUpdateOperationsInput | Date | string
    winner_pokemon_id?: NullableIntFieldUpdateOperationsInput | number | null
    battle_duration?: NullableStringFieldUpdateOperationsInput | string | null
    battle_log?: NullableJsonNullValueInput | InputJsonValue
    tournamentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PokemonBattleUpdateWithoutWinnerInput = {
    pokemon_1_seed?: IntFieldUpdateOperationsInput | number
    pokemon_2_seed?: IntFieldUpdateOperationsInput | number
    battle_date?: DateTimeFieldUpdateOperationsInput | Date | string
    battle_duration?: NullableStringFieldUpdateOperationsInput | string | null
    battle_log?: NullableJsonNullValueInput | InputJsonValue
    tournament?: TournamentUpdateOneWithoutBattlesNestedInput
    pokemon1?: PokemonUpdateOneRequiredWithoutBattlesAsP1NestedInput
    pokemon2?: PokemonUpdateOneRequiredWithoutBattlesAsP2NestedInput
  }

  export type PokemonBattleUncheckedUpdateWithoutWinnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    pokemon_1_id?: IntFieldUpdateOperationsInput | number
    pokemon_2_id?: IntFieldUpdateOperationsInput | number
    pokemon_1_seed?: IntFieldUpdateOperationsInput | number
    pokemon_2_seed?: IntFieldUpdateOperationsInput | number
    battle_date?: DateTimeFieldUpdateOperationsInput | Date | string
    battle_duration?: NullableStringFieldUpdateOperationsInput | string | null
    battle_log?: NullableJsonNullValueInput | InputJsonValue
    tournamentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PokemonBattleUncheckedUpdateManyWithoutWinnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    pokemon_1_id?: IntFieldUpdateOperationsInput | number
    pokemon_2_id?: IntFieldUpdateOperationsInput | number
    pokemon_1_seed?: IntFieldUpdateOperationsInput | number
    pokemon_2_seed?: IntFieldUpdateOperationsInput | number
    battle_date?: DateTimeFieldUpdateOperationsInput | Date | string
    battle_duration?: NullableStringFieldUpdateOperationsInput | string | null
    battle_log?: NullableJsonNullValueInput | InputJsonValue
    tournamentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PokemonBattleCreateManyTournamentInput = {
    id?: number
    pokemon_1_id: number
    pokemon_2_id: number
    pokemon_1_seed: number
    pokemon_2_seed: number
    battle_date?: Date | string
    winner_pokemon_id?: number | null
    battle_duration?: string | null
    battle_log?: NullableJsonNullValueInput | InputJsonValue
  }

  export type PokemonBattleUpdateWithoutTournamentInput = {
    pokemon_1_seed?: IntFieldUpdateOperationsInput | number
    pokemon_2_seed?: IntFieldUpdateOperationsInput | number
    battle_date?: DateTimeFieldUpdateOperationsInput | Date | string
    battle_duration?: NullableStringFieldUpdateOperationsInput | string | null
    battle_log?: NullableJsonNullValueInput | InputJsonValue
    pokemon1?: PokemonUpdateOneRequiredWithoutBattlesAsP1NestedInput
    pokemon2?: PokemonUpdateOneRequiredWithoutBattlesAsP2NestedInput
    winner?: PokemonUpdateOneWithoutBattlesWonNestedInput
  }

  export type PokemonBattleUncheckedUpdateWithoutTournamentInput = {
    id?: IntFieldUpdateOperationsInput | number
    pokemon_1_id?: IntFieldUpdateOperationsInput | number
    pokemon_2_id?: IntFieldUpdateOperationsInput | number
    pokemon_1_seed?: IntFieldUpdateOperationsInput | number
    pokemon_2_seed?: IntFieldUpdateOperationsInput | number
    battle_date?: DateTimeFieldUpdateOperationsInput | Date | string
    winner_pokemon_id?: NullableIntFieldUpdateOperationsInput | number | null
    battle_duration?: NullableStringFieldUpdateOperationsInput | string | null
    battle_log?: NullableJsonNullValueInput | InputJsonValue
  }

  export type PokemonBattleUncheckedUpdateManyWithoutTournamentInput = {
    id?: IntFieldUpdateOperationsInput | number
    pokemon_1_id?: IntFieldUpdateOperationsInput | number
    pokemon_2_id?: IntFieldUpdateOperationsInput | number
    pokemon_1_seed?: IntFieldUpdateOperationsInput | number
    pokemon_2_seed?: IntFieldUpdateOperationsInput | number
    battle_date?: DateTimeFieldUpdateOperationsInput | Date | string
    winner_pokemon_id?: NullableIntFieldUpdateOperationsInput | number | null
    battle_duration?: NullableStringFieldUpdateOperationsInput | string | null
    battle_log?: NullableJsonNullValueInput | InputJsonValue
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}