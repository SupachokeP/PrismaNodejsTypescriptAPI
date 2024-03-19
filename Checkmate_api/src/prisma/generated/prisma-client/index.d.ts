
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
 * Model TB_otp
 * 
 */
export type TB_otp = $Result.DefaultSelection<Prisma.$TB_otpPayload>
/**
 * Model TB_UserRole
 * 
 */
export type TB_UserRole = $Result.DefaultSelection<Prisma.$TB_UserRolePayload>
/**
 * Model TB_Users
 * 
 */
export type TB_Users = $Result.DefaultSelection<Prisma.$TB_UsersPayload>
/**
 * Model TBM_Role
 * 
 */
export type TBM_Role = $Result.DefaultSelection<Prisma.$TBM_RolePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more TB_otps
 * const tB_otps = await prisma.tB_otp.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more TB_otps
   * const tB_otps = await prisma.tB_otp.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.tB_otp`: Exposes CRUD operations for the **TB_otp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TB_otps
    * const tB_otps = await prisma.tB_otp.findMany()
    * ```
    */
  get tB_otp(): Prisma.TB_otpDelegate<ExtArgs>;

  /**
   * `prisma.tB_UserRole`: Exposes CRUD operations for the **TB_UserRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TB_UserRoles
    * const tB_UserRoles = await prisma.tB_UserRole.findMany()
    * ```
    */
  get tB_UserRole(): Prisma.TB_UserRoleDelegate<ExtArgs>;

  /**
   * `prisma.tB_Users`: Exposes CRUD operations for the **TB_Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TB_Users
    * const tB_Users = await prisma.tB_Users.findMany()
    * ```
    */
  get tB_Users(): Prisma.TB_UsersDelegate<ExtArgs>;

  /**
   * `prisma.tBM_Role`: Exposes CRUD operations for the **TBM_Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TBM_Roles
    * const tBM_Roles = await prisma.tBM_Role.findMany()
    * ```
    */
  get tBM_Role(): Prisma.TBM_RoleDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.11.0
   * Query Engine version: efd2449663b3d73d637ea1fd226bafbcf45b3102
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    TB_otp: 'TB_otp',
    TB_UserRole: 'TB_UserRole',
    TB_Users: 'TB_Users',
    TBM_Role: 'TBM_Role'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'tB_otp' | 'tB_UserRole' | 'tB_Users' | 'tBM_Role'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      TB_otp: {
        payload: Prisma.$TB_otpPayload<ExtArgs>
        fields: Prisma.TB_otpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TB_otpFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TB_otpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TB_otpFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TB_otpPayload>
          }
          findFirst: {
            args: Prisma.TB_otpFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TB_otpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TB_otpFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TB_otpPayload>
          }
          findMany: {
            args: Prisma.TB_otpFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TB_otpPayload>[]
          }
          create: {
            args: Prisma.TB_otpCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TB_otpPayload>
          }
          createMany: {
            args: Prisma.TB_otpCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TB_otpDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TB_otpPayload>
          }
          update: {
            args: Prisma.TB_otpUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TB_otpPayload>
          }
          deleteMany: {
            args: Prisma.TB_otpDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TB_otpUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TB_otpUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TB_otpPayload>
          }
          aggregate: {
            args: Prisma.TB_otpAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTB_otp>
          }
          groupBy: {
            args: Prisma.TB_otpGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TB_otpGroupByOutputType>[]
          }
          count: {
            args: Prisma.TB_otpCountArgs<ExtArgs>,
            result: $Utils.Optional<TB_otpCountAggregateOutputType> | number
          }
        }
      }
      TB_UserRole: {
        payload: Prisma.$TB_UserRolePayload<ExtArgs>
        fields: Prisma.TB_UserRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TB_UserRoleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TB_UserRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TB_UserRoleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TB_UserRolePayload>
          }
          findFirst: {
            args: Prisma.TB_UserRoleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TB_UserRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TB_UserRoleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TB_UserRolePayload>
          }
          findMany: {
            args: Prisma.TB_UserRoleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TB_UserRolePayload>[]
          }
          create: {
            args: Prisma.TB_UserRoleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TB_UserRolePayload>
          }
          createMany: {
            args: Prisma.TB_UserRoleCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TB_UserRoleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TB_UserRolePayload>
          }
          update: {
            args: Prisma.TB_UserRoleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TB_UserRolePayload>
          }
          deleteMany: {
            args: Prisma.TB_UserRoleDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TB_UserRoleUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TB_UserRoleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TB_UserRolePayload>
          }
          aggregate: {
            args: Prisma.TB_UserRoleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTB_UserRole>
          }
          groupBy: {
            args: Prisma.TB_UserRoleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TB_UserRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.TB_UserRoleCountArgs<ExtArgs>,
            result: $Utils.Optional<TB_UserRoleCountAggregateOutputType> | number
          }
        }
      }
      TB_Users: {
        payload: Prisma.$TB_UsersPayload<ExtArgs>
        fields: Prisma.TB_UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TB_UsersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TB_UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TB_UsersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TB_UsersPayload>
          }
          findFirst: {
            args: Prisma.TB_UsersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TB_UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TB_UsersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TB_UsersPayload>
          }
          findMany: {
            args: Prisma.TB_UsersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TB_UsersPayload>[]
          }
          create: {
            args: Prisma.TB_UsersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TB_UsersPayload>
          }
          createMany: {
            args: Prisma.TB_UsersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TB_UsersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TB_UsersPayload>
          }
          update: {
            args: Prisma.TB_UsersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TB_UsersPayload>
          }
          deleteMany: {
            args: Prisma.TB_UsersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TB_UsersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TB_UsersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TB_UsersPayload>
          }
          aggregate: {
            args: Prisma.TB_UsersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTB_Users>
          }
          groupBy: {
            args: Prisma.TB_UsersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TB_UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.TB_UsersCountArgs<ExtArgs>,
            result: $Utils.Optional<TB_UsersCountAggregateOutputType> | number
          }
        }
      }
      TBM_Role: {
        payload: Prisma.$TBM_RolePayload<ExtArgs>
        fields: Prisma.TBM_RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TBM_RoleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TBM_RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TBM_RoleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TBM_RolePayload>
          }
          findFirst: {
            args: Prisma.TBM_RoleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TBM_RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TBM_RoleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TBM_RolePayload>
          }
          findMany: {
            args: Prisma.TBM_RoleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TBM_RolePayload>[]
          }
          create: {
            args: Prisma.TBM_RoleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TBM_RolePayload>
          }
          createMany: {
            args: Prisma.TBM_RoleCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TBM_RoleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TBM_RolePayload>
          }
          update: {
            args: Prisma.TBM_RoleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TBM_RolePayload>
          }
          deleteMany: {
            args: Prisma.TBM_RoleDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TBM_RoleUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TBM_RoleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TBM_RolePayload>
          }
          aggregate: {
            args: Prisma.TBM_RoleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTBM_Role>
          }
          groupBy: {
            args: Prisma.TBM_RoleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TBM_RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.TBM_RoleCountArgs<ExtArgs>,
            result: $Utils.Optional<TBM_RoleCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    | 'update'
    | 'updateMany'
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
   * Count Type TB_UsersCountOutputType
   */

  export type TB_UsersCountOutputType = {
    TB_otp: number
    TB_UserRole: number
  }

  export type TB_UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TB_otp?: boolean | TB_UsersCountOutputTypeCountTB_otpArgs
    TB_UserRole?: boolean | TB_UsersCountOutputTypeCountTB_UserRoleArgs
  }

  // Custom InputTypes

  /**
   * TB_UsersCountOutputType without action
   */
  export type TB_UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_UsersCountOutputType
     */
    select?: TB_UsersCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TB_UsersCountOutputType without action
   */
  export type TB_UsersCountOutputTypeCountTB_otpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TB_otpWhereInput
  }


  /**
   * TB_UsersCountOutputType without action
   */
  export type TB_UsersCountOutputTypeCountTB_UserRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TB_UserRoleWhereInput
  }



  /**
   * Count Type TBM_RoleCountOutputType
   */

  export type TBM_RoleCountOutputType = {
    TB_UserRole: number
  }

  export type TBM_RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TB_UserRole?: boolean | TBM_RoleCountOutputTypeCountTB_UserRoleArgs
  }

  // Custom InputTypes

  /**
   * TBM_RoleCountOutputType without action
   */
  export type TBM_RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TBM_RoleCountOutputType
     */
    select?: TBM_RoleCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TBM_RoleCountOutputType without action
   */
  export type TBM_RoleCountOutputTypeCountTB_UserRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TB_UserRoleWhereInput
  }



  /**
   * Models
   */

  /**
   * Model TB_otp
   */

  export type AggregateTB_otp = {
    _count: TB_otpCountAggregateOutputType | null
    _avg: TB_otpAvgAggregateOutputType | null
    _sum: TB_otpSumAggregateOutputType | null
    _min: TB_otpMinAggregateOutputType | null
    _max: TB_otpMaxAggregateOutputType | null
  }

  export type TB_otpAvgAggregateOutputType = {
    RefCode: number | null
  }

  export type TB_otpSumAggregateOutputType = {
    RefCode: number | null
  }

  export type TB_otpMinAggregateOutputType = {
    RefCode: number | null
    UserID: string | null
    Expire: Date | null
  }

  export type TB_otpMaxAggregateOutputType = {
    RefCode: number | null
    UserID: string | null
    Expire: Date | null
  }

  export type TB_otpCountAggregateOutputType = {
    RefCode: number
    UserID: number
    Expire: number
    _all: number
  }


  export type TB_otpAvgAggregateInputType = {
    RefCode?: true
  }

  export type TB_otpSumAggregateInputType = {
    RefCode?: true
  }

  export type TB_otpMinAggregateInputType = {
    RefCode?: true
    UserID?: true
    Expire?: true
  }

  export type TB_otpMaxAggregateInputType = {
    RefCode?: true
    UserID?: true
    Expire?: true
  }

  export type TB_otpCountAggregateInputType = {
    RefCode?: true
    UserID?: true
    Expire?: true
    _all?: true
  }

  export type TB_otpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TB_otp to aggregate.
     */
    where?: TB_otpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_otps to fetch.
     */
    orderBy?: TB_otpOrderByWithRelationInput | TB_otpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TB_otpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TB_otps
    **/
    _count?: true | TB_otpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TB_otpAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TB_otpSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TB_otpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TB_otpMaxAggregateInputType
  }

  export type GetTB_otpAggregateType<T extends TB_otpAggregateArgs> = {
        [P in keyof T & keyof AggregateTB_otp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTB_otp[P]>
      : GetScalarType<T[P], AggregateTB_otp[P]>
  }




  export type TB_otpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TB_otpWhereInput
    orderBy?: TB_otpOrderByWithAggregationInput | TB_otpOrderByWithAggregationInput[]
    by: TB_otpScalarFieldEnum[] | TB_otpScalarFieldEnum
    having?: TB_otpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TB_otpCountAggregateInputType | true
    _avg?: TB_otpAvgAggregateInputType
    _sum?: TB_otpSumAggregateInputType
    _min?: TB_otpMinAggregateInputType
    _max?: TB_otpMaxAggregateInputType
  }

  export type TB_otpGroupByOutputType = {
    RefCode: number
    UserID: string | null
    Expire: Date | null
    _count: TB_otpCountAggregateOutputType | null
    _avg: TB_otpAvgAggregateOutputType | null
    _sum: TB_otpSumAggregateOutputType | null
    _min: TB_otpMinAggregateOutputType | null
    _max: TB_otpMaxAggregateOutputType | null
  }

  type GetTB_otpGroupByPayload<T extends TB_otpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TB_otpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TB_otpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TB_otpGroupByOutputType[P]>
            : GetScalarType<T[P], TB_otpGroupByOutputType[P]>
        }
      >
    >


  export type TB_otpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    RefCode?: boolean
    UserID?: boolean
    Expire?: boolean
    TB_Users?: boolean | TB_otp$TB_UsersArgs<ExtArgs>
  }, ExtArgs["result"]["tB_otp"]>

  export type TB_otpSelectScalar = {
    RefCode?: boolean
    UserID?: boolean
    Expire?: boolean
  }

  export type TB_otpInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TB_Users?: boolean | TB_otp$TB_UsersArgs<ExtArgs>
  }


  export type $TB_otpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TB_otp"
    objects: {
      TB_Users: Prisma.$TB_UsersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      RefCode: number
      UserID: string | null
      Expire: Date | null
    }, ExtArgs["result"]["tB_otp"]>
    composites: {}
  }


  type TB_otpGetPayload<S extends boolean | null | undefined | TB_otpDefaultArgs> = $Result.GetResult<Prisma.$TB_otpPayload, S>

  type TB_otpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TB_otpFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: TB_otpCountAggregateInputType | true
    }

  export interface TB_otpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TB_otp'], meta: { name: 'TB_otp' } }
    /**
     * Find zero or one TB_otp that matches the filter.
     * @param {TB_otpFindUniqueArgs} args - Arguments to find a TB_otp
     * @example
     * // Get one TB_otp
     * const tB_otp = await prisma.tB_otp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TB_otpFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TB_otpFindUniqueArgs<ExtArgs>>
    ): Prisma__TB_otpClient<$Result.GetResult<Prisma.$TB_otpPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TB_otp that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TB_otpFindUniqueOrThrowArgs} args - Arguments to find a TB_otp
     * @example
     * // Get one TB_otp
     * const tB_otp = await prisma.tB_otp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TB_otpFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TB_otpFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TB_otpClient<$Result.GetResult<Prisma.$TB_otpPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TB_otp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_otpFindFirstArgs} args - Arguments to find a TB_otp
     * @example
     * // Get one TB_otp
     * const tB_otp = await prisma.tB_otp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TB_otpFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TB_otpFindFirstArgs<ExtArgs>>
    ): Prisma__TB_otpClient<$Result.GetResult<Prisma.$TB_otpPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TB_otp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_otpFindFirstOrThrowArgs} args - Arguments to find a TB_otp
     * @example
     * // Get one TB_otp
     * const tB_otp = await prisma.tB_otp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TB_otpFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TB_otpFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TB_otpClient<$Result.GetResult<Prisma.$TB_otpPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TB_otps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_otpFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TB_otps
     * const tB_otps = await prisma.tB_otp.findMany()
     * 
     * // Get first 10 TB_otps
     * const tB_otps = await prisma.tB_otp.findMany({ take: 10 })
     * 
     * // Only select the `RefCode`
     * const tB_otpWithRefCodeOnly = await prisma.tB_otp.findMany({ select: { RefCode: true } })
     * 
    **/
    findMany<T extends TB_otpFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TB_otpFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_otpPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TB_otp.
     * @param {TB_otpCreateArgs} args - Arguments to create a TB_otp.
     * @example
     * // Create one TB_otp
     * const TB_otp = await prisma.tB_otp.create({
     *   data: {
     *     // ... data to create a TB_otp
     *   }
     * })
     * 
    **/
    create<T extends TB_otpCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TB_otpCreateArgs<ExtArgs>>
    ): Prisma__TB_otpClient<$Result.GetResult<Prisma.$TB_otpPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TB_otps.
     *     @param {TB_otpCreateManyArgs} args - Arguments to create many TB_otps.
     *     @example
     *     // Create many TB_otps
     *     const tB_otp = await prisma.tB_otp.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TB_otpCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TB_otpCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TB_otp.
     * @param {TB_otpDeleteArgs} args - Arguments to delete one TB_otp.
     * @example
     * // Delete one TB_otp
     * const TB_otp = await prisma.tB_otp.delete({
     *   where: {
     *     // ... filter to delete one TB_otp
     *   }
     * })
     * 
    **/
    delete<T extends TB_otpDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TB_otpDeleteArgs<ExtArgs>>
    ): Prisma__TB_otpClient<$Result.GetResult<Prisma.$TB_otpPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TB_otp.
     * @param {TB_otpUpdateArgs} args - Arguments to update one TB_otp.
     * @example
     * // Update one TB_otp
     * const tB_otp = await prisma.tB_otp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TB_otpUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TB_otpUpdateArgs<ExtArgs>>
    ): Prisma__TB_otpClient<$Result.GetResult<Prisma.$TB_otpPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TB_otps.
     * @param {TB_otpDeleteManyArgs} args - Arguments to filter TB_otps to delete.
     * @example
     * // Delete a few TB_otps
     * const { count } = await prisma.tB_otp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TB_otpDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TB_otpDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TB_otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_otpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TB_otps
     * const tB_otp = await prisma.tB_otp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TB_otpUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TB_otpUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TB_otp.
     * @param {TB_otpUpsertArgs} args - Arguments to update or create a TB_otp.
     * @example
     * // Update or create a TB_otp
     * const tB_otp = await prisma.tB_otp.upsert({
     *   create: {
     *     // ... data to create a TB_otp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TB_otp we want to update
     *   }
     * })
    **/
    upsert<T extends TB_otpUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TB_otpUpsertArgs<ExtArgs>>
    ): Prisma__TB_otpClient<$Result.GetResult<Prisma.$TB_otpPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TB_otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_otpCountArgs} args - Arguments to filter TB_otps to count.
     * @example
     * // Count the number of TB_otps
     * const count = await prisma.tB_otp.count({
     *   where: {
     *     // ... the filter for the TB_otps we want to count
     *   }
     * })
    **/
    count<T extends TB_otpCountArgs>(
      args?: Subset<T, TB_otpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TB_otpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TB_otp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_otpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TB_otpAggregateArgs>(args: Subset<T, TB_otpAggregateArgs>): Prisma.PrismaPromise<GetTB_otpAggregateType<T>>

    /**
     * Group by TB_otp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_otpGroupByArgs} args - Group by arguments.
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
      T extends TB_otpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TB_otpGroupByArgs['orderBy'] }
        : { orderBy?: TB_otpGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TB_otpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTB_otpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TB_otp model
   */
  readonly fields: TB_otpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TB_otp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TB_otpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    TB_Users<T extends TB_otp$TB_UsersArgs<ExtArgs> = {}>(args?: Subset<T, TB_otp$TB_UsersArgs<ExtArgs>>): Prisma__TB_UsersClient<$Result.GetResult<Prisma.$TB_UsersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TB_otp model
   */ 
  interface TB_otpFieldRefs {
    readonly RefCode: FieldRef<"TB_otp", 'Int'>
    readonly UserID: FieldRef<"TB_otp", 'String'>
    readonly Expire: FieldRef<"TB_otp", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * TB_otp findUnique
   */
  export type TB_otpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_otp
     */
    select?: TB_otpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TB_otpInclude<ExtArgs> | null
    /**
     * Filter, which TB_otp to fetch.
     */
    where: TB_otpWhereUniqueInput
  }


  /**
   * TB_otp findUniqueOrThrow
   */
  export type TB_otpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_otp
     */
    select?: TB_otpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TB_otpInclude<ExtArgs> | null
    /**
     * Filter, which TB_otp to fetch.
     */
    where: TB_otpWhereUniqueInput
  }


  /**
   * TB_otp findFirst
   */
  export type TB_otpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_otp
     */
    select?: TB_otpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TB_otpInclude<ExtArgs> | null
    /**
     * Filter, which TB_otp to fetch.
     */
    where?: TB_otpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_otps to fetch.
     */
    orderBy?: TB_otpOrderByWithRelationInput | TB_otpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TB_otps.
     */
    cursor?: TB_otpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TB_otps.
     */
    distinct?: TB_otpScalarFieldEnum | TB_otpScalarFieldEnum[]
  }


  /**
   * TB_otp findFirstOrThrow
   */
  export type TB_otpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_otp
     */
    select?: TB_otpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TB_otpInclude<ExtArgs> | null
    /**
     * Filter, which TB_otp to fetch.
     */
    where?: TB_otpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_otps to fetch.
     */
    orderBy?: TB_otpOrderByWithRelationInput | TB_otpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TB_otps.
     */
    cursor?: TB_otpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TB_otps.
     */
    distinct?: TB_otpScalarFieldEnum | TB_otpScalarFieldEnum[]
  }


  /**
   * TB_otp findMany
   */
  export type TB_otpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_otp
     */
    select?: TB_otpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TB_otpInclude<ExtArgs> | null
    /**
     * Filter, which TB_otps to fetch.
     */
    where?: TB_otpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_otps to fetch.
     */
    orderBy?: TB_otpOrderByWithRelationInput | TB_otpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TB_otps.
     */
    cursor?: TB_otpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_otps.
     */
    skip?: number
    distinct?: TB_otpScalarFieldEnum | TB_otpScalarFieldEnum[]
  }


  /**
   * TB_otp create
   */
  export type TB_otpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_otp
     */
    select?: TB_otpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TB_otpInclude<ExtArgs> | null
    /**
     * The data needed to create a TB_otp.
     */
    data: XOR<TB_otpCreateInput, TB_otpUncheckedCreateInput>
  }


  /**
   * TB_otp createMany
   */
  export type TB_otpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TB_otps.
     */
    data: TB_otpCreateManyInput | TB_otpCreateManyInput[]
  }


  /**
   * TB_otp update
   */
  export type TB_otpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_otp
     */
    select?: TB_otpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TB_otpInclude<ExtArgs> | null
    /**
     * The data needed to update a TB_otp.
     */
    data: XOR<TB_otpUpdateInput, TB_otpUncheckedUpdateInput>
    /**
     * Choose, which TB_otp to update.
     */
    where: TB_otpWhereUniqueInput
  }


  /**
   * TB_otp updateMany
   */
  export type TB_otpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TB_otps.
     */
    data: XOR<TB_otpUpdateManyMutationInput, TB_otpUncheckedUpdateManyInput>
    /**
     * Filter which TB_otps to update
     */
    where?: TB_otpWhereInput
  }


  /**
   * TB_otp upsert
   */
  export type TB_otpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_otp
     */
    select?: TB_otpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TB_otpInclude<ExtArgs> | null
    /**
     * The filter to search for the TB_otp to update in case it exists.
     */
    where: TB_otpWhereUniqueInput
    /**
     * In case the TB_otp found by the `where` argument doesn't exist, create a new TB_otp with this data.
     */
    create: XOR<TB_otpCreateInput, TB_otpUncheckedCreateInput>
    /**
     * In case the TB_otp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TB_otpUpdateInput, TB_otpUncheckedUpdateInput>
  }


  /**
   * TB_otp delete
   */
  export type TB_otpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_otp
     */
    select?: TB_otpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TB_otpInclude<ExtArgs> | null
    /**
     * Filter which TB_otp to delete.
     */
    where: TB_otpWhereUniqueInput
  }


  /**
   * TB_otp deleteMany
   */
  export type TB_otpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TB_otps to delete
     */
    where?: TB_otpWhereInput
  }


  /**
   * TB_otp.TB_Users
   */
  export type TB_otp$TB_UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_Users
     */
    select?: TB_UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TB_UsersInclude<ExtArgs> | null
    where?: TB_UsersWhereInput
  }


  /**
   * TB_otp without action
   */
  export type TB_otpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_otp
     */
    select?: TB_otpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TB_otpInclude<ExtArgs> | null
  }



  /**
   * Model TB_UserRole
   */

  export type AggregateTB_UserRole = {
    _count: TB_UserRoleCountAggregateOutputType | null
    _min: TB_UserRoleMinAggregateOutputType | null
    _max: TB_UserRoleMaxAggregateOutputType | null
  }

  export type TB_UserRoleMinAggregateOutputType = {
    UserID: string | null
    RoleID: string | null
  }

  export type TB_UserRoleMaxAggregateOutputType = {
    UserID: string | null
    RoleID: string | null
  }

  export type TB_UserRoleCountAggregateOutputType = {
    UserID: number
    RoleID: number
    _all: number
  }


  export type TB_UserRoleMinAggregateInputType = {
    UserID?: true
    RoleID?: true
  }

  export type TB_UserRoleMaxAggregateInputType = {
    UserID?: true
    RoleID?: true
  }

  export type TB_UserRoleCountAggregateInputType = {
    UserID?: true
    RoleID?: true
    _all?: true
  }

  export type TB_UserRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TB_UserRole to aggregate.
     */
    where?: TB_UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_UserRoles to fetch.
     */
    orderBy?: TB_UserRoleOrderByWithRelationInput | TB_UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TB_UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TB_UserRoles
    **/
    _count?: true | TB_UserRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TB_UserRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TB_UserRoleMaxAggregateInputType
  }

  export type GetTB_UserRoleAggregateType<T extends TB_UserRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateTB_UserRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTB_UserRole[P]>
      : GetScalarType<T[P], AggregateTB_UserRole[P]>
  }




  export type TB_UserRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TB_UserRoleWhereInput
    orderBy?: TB_UserRoleOrderByWithAggregationInput | TB_UserRoleOrderByWithAggregationInput[]
    by: TB_UserRoleScalarFieldEnum[] | TB_UserRoleScalarFieldEnum
    having?: TB_UserRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TB_UserRoleCountAggregateInputType | true
    _min?: TB_UserRoleMinAggregateInputType
    _max?: TB_UserRoleMaxAggregateInputType
  }

  export type TB_UserRoleGroupByOutputType = {
    UserID: string
    RoleID: string
    _count: TB_UserRoleCountAggregateOutputType | null
    _min: TB_UserRoleMinAggregateOutputType | null
    _max: TB_UserRoleMaxAggregateOutputType | null
  }

  type GetTB_UserRoleGroupByPayload<T extends TB_UserRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TB_UserRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TB_UserRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TB_UserRoleGroupByOutputType[P]>
            : GetScalarType<T[P], TB_UserRoleGroupByOutputType[P]>
        }
      >
    >


  export type TB_UserRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    UserID?: boolean
    RoleID?: boolean
    TBM_Role?: boolean | TBM_RoleDefaultArgs<ExtArgs>
    TB_Users?: boolean | TB_UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tB_UserRole"]>

  export type TB_UserRoleSelectScalar = {
    UserID?: boolean
    RoleID?: boolean
  }

  export type TB_UserRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TBM_Role?: boolean | TBM_RoleDefaultArgs<ExtArgs>
    TB_Users?: boolean | TB_UsersDefaultArgs<ExtArgs>
  }


  export type $TB_UserRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TB_UserRole"
    objects: {
      TBM_Role: Prisma.$TBM_RolePayload<ExtArgs>
      TB_Users: Prisma.$TB_UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      UserID: string
      RoleID: string
    }, ExtArgs["result"]["tB_UserRole"]>
    composites: {}
  }


  type TB_UserRoleGetPayload<S extends boolean | null | undefined | TB_UserRoleDefaultArgs> = $Result.GetResult<Prisma.$TB_UserRolePayload, S>

  type TB_UserRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TB_UserRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: TB_UserRoleCountAggregateInputType | true
    }

  export interface TB_UserRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TB_UserRole'], meta: { name: 'TB_UserRole' } }
    /**
     * Find zero or one TB_UserRole that matches the filter.
     * @param {TB_UserRoleFindUniqueArgs} args - Arguments to find a TB_UserRole
     * @example
     * // Get one TB_UserRole
     * const tB_UserRole = await prisma.tB_UserRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TB_UserRoleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TB_UserRoleFindUniqueArgs<ExtArgs>>
    ): Prisma__TB_UserRoleClient<$Result.GetResult<Prisma.$TB_UserRolePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TB_UserRole that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TB_UserRoleFindUniqueOrThrowArgs} args - Arguments to find a TB_UserRole
     * @example
     * // Get one TB_UserRole
     * const tB_UserRole = await prisma.tB_UserRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TB_UserRoleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TB_UserRoleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TB_UserRoleClient<$Result.GetResult<Prisma.$TB_UserRolePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TB_UserRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_UserRoleFindFirstArgs} args - Arguments to find a TB_UserRole
     * @example
     * // Get one TB_UserRole
     * const tB_UserRole = await prisma.tB_UserRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TB_UserRoleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TB_UserRoleFindFirstArgs<ExtArgs>>
    ): Prisma__TB_UserRoleClient<$Result.GetResult<Prisma.$TB_UserRolePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TB_UserRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_UserRoleFindFirstOrThrowArgs} args - Arguments to find a TB_UserRole
     * @example
     * // Get one TB_UserRole
     * const tB_UserRole = await prisma.tB_UserRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TB_UserRoleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TB_UserRoleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TB_UserRoleClient<$Result.GetResult<Prisma.$TB_UserRolePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TB_UserRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_UserRoleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TB_UserRoles
     * const tB_UserRoles = await prisma.tB_UserRole.findMany()
     * 
     * // Get first 10 TB_UserRoles
     * const tB_UserRoles = await prisma.tB_UserRole.findMany({ take: 10 })
     * 
     * // Only select the `UserID`
     * const tB_UserRoleWithUserIDOnly = await prisma.tB_UserRole.findMany({ select: { UserID: true } })
     * 
    **/
    findMany<T extends TB_UserRoleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TB_UserRoleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_UserRolePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TB_UserRole.
     * @param {TB_UserRoleCreateArgs} args - Arguments to create a TB_UserRole.
     * @example
     * // Create one TB_UserRole
     * const TB_UserRole = await prisma.tB_UserRole.create({
     *   data: {
     *     // ... data to create a TB_UserRole
     *   }
     * })
     * 
    **/
    create<T extends TB_UserRoleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TB_UserRoleCreateArgs<ExtArgs>>
    ): Prisma__TB_UserRoleClient<$Result.GetResult<Prisma.$TB_UserRolePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TB_UserRoles.
     *     @param {TB_UserRoleCreateManyArgs} args - Arguments to create many TB_UserRoles.
     *     @example
     *     // Create many TB_UserRoles
     *     const tB_UserRole = await prisma.tB_UserRole.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TB_UserRoleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TB_UserRoleCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TB_UserRole.
     * @param {TB_UserRoleDeleteArgs} args - Arguments to delete one TB_UserRole.
     * @example
     * // Delete one TB_UserRole
     * const TB_UserRole = await prisma.tB_UserRole.delete({
     *   where: {
     *     // ... filter to delete one TB_UserRole
     *   }
     * })
     * 
    **/
    delete<T extends TB_UserRoleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TB_UserRoleDeleteArgs<ExtArgs>>
    ): Prisma__TB_UserRoleClient<$Result.GetResult<Prisma.$TB_UserRolePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TB_UserRole.
     * @param {TB_UserRoleUpdateArgs} args - Arguments to update one TB_UserRole.
     * @example
     * // Update one TB_UserRole
     * const tB_UserRole = await prisma.tB_UserRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TB_UserRoleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TB_UserRoleUpdateArgs<ExtArgs>>
    ): Prisma__TB_UserRoleClient<$Result.GetResult<Prisma.$TB_UserRolePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TB_UserRoles.
     * @param {TB_UserRoleDeleteManyArgs} args - Arguments to filter TB_UserRoles to delete.
     * @example
     * // Delete a few TB_UserRoles
     * const { count } = await prisma.tB_UserRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TB_UserRoleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TB_UserRoleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TB_UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_UserRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TB_UserRoles
     * const tB_UserRole = await prisma.tB_UserRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TB_UserRoleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TB_UserRoleUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TB_UserRole.
     * @param {TB_UserRoleUpsertArgs} args - Arguments to update or create a TB_UserRole.
     * @example
     * // Update or create a TB_UserRole
     * const tB_UserRole = await prisma.tB_UserRole.upsert({
     *   create: {
     *     // ... data to create a TB_UserRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TB_UserRole we want to update
     *   }
     * })
    **/
    upsert<T extends TB_UserRoleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TB_UserRoleUpsertArgs<ExtArgs>>
    ): Prisma__TB_UserRoleClient<$Result.GetResult<Prisma.$TB_UserRolePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TB_UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_UserRoleCountArgs} args - Arguments to filter TB_UserRoles to count.
     * @example
     * // Count the number of TB_UserRoles
     * const count = await prisma.tB_UserRole.count({
     *   where: {
     *     // ... the filter for the TB_UserRoles we want to count
     *   }
     * })
    **/
    count<T extends TB_UserRoleCountArgs>(
      args?: Subset<T, TB_UserRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TB_UserRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TB_UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_UserRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TB_UserRoleAggregateArgs>(args: Subset<T, TB_UserRoleAggregateArgs>): Prisma.PrismaPromise<GetTB_UserRoleAggregateType<T>>

    /**
     * Group by TB_UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_UserRoleGroupByArgs} args - Group by arguments.
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
      T extends TB_UserRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TB_UserRoleGroupByArgs['orderBy'] }
        : { orderBy?: TB_UserRoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TB_UserRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTB_UserRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TB_UserRole model
   */
  readonly fields: TB_UserRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TB_UserRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TB_UserRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    TBM_Role<T extends TBM_RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TBM_RoleDefaultArgs<ExtArgs>>): Prisma__TBM_RoleClient<$Result.GetResult<Prisma.$TBM_RolePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    TB_Users<T extends TB_UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TB_UsersDefaultArgs<ExtArgs>>): Prisma__TB_UsersClient<$Result.GetResult<Prisma.$TB_UsersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TB_UserRole model
   */ 
  interface TB_UserRoleFieldRefs {
    readonly UserID: FieldRef<"TB_UserRole", 'String'>
    readonly RoleID: FieldRef<"TB_UserRole", 'String'>
  }
    

  // Custom InputTypes

  /**
   * TB_UserRole findUnique
   */
  export type TB_UserRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_UserRole
     */
    select?: TB_UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TB_UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which TB_UserRole to fetch.
     */
    where: TB_UserRoleWhereUniqueInput
  }


  /**
   * TB_UserRole findUniqueOrThrow
   */
  export type TB_UserRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_UserRole
     */
    select?: TB_UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TB_UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which TB_UserRole to fetch.
     */
    where: TB_UserRoleWhereUniqueInput
  }


  /**
   * TB_UserRole findFirst
   */
  export type TB_UserRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_UserRole
     */
    select?: TB_UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TB_UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which TB_UserRole to fetch.
     */
    where?: TB_UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_UserRoles to fetch.
     */
    orderBy?: TB_UserRoleOrderByWithRelationInput | TB_UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TB_UserRoles.
     */
    cursor?: TB_UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TB_UserRoles.
     */
    distinct?: TB_UserRoleScalarFieldEnum | TB_UserRoleScalarFieldEnum[]
  }


  /**
   * TB_UserRole findFirstOrThrow
   */
  export type TB_UserRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_UserRole
     */
    select?: TB_UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TB_UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which TB_UserRole to fetch.
     */
    where?: TB_UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_UserRoles to fetch.
     */
    orderBy?: TB_UserRoleOrderByWithRelationInput | TB_UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TB_UserRoles.
     */
    cursor?: TB_UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TB_UserRoles.
     */
    distinct?: TB_UserRoleScalarFieldEnum | TB_UserRoleScalarFieldEnum[]
  }


  /**
   * TB_UserRole findMany
   */
  export type TB_UserRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_UserRole
     */
    select?: TB_UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TB_UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which TB_UserRoles to fetch.
     */
    where?: TB_UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_UserRoles to fetch.
     */
    orderBy?: TB_UserRoleOrderByWithRelationInput | TB_UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TB_UserRoles.
     */
    cursor?: TB_UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_UserRoles.
     */
    skip?: number
    distinct?: TB_UserRoleScalarFieldEnum | TB_UserRoleScalarFieldEnum[]
  }


  /**
   * TB_UserRole create
   */
  export type TB_UserRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_UserRole
     */
    select?: TB_UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TB_UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a TB_UserRole.
     */
    data: XOR<TB_UserRoleCreateInput, TB_UserRoleUncheckedCreateInput>
  }


  /**
   * TB_UserRole createMany
   */
  export type TB_UserRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TB_UserRoles.
     */
    data: TB_UserRoleCreateManyInput | TB_UserRoleCreateManyInput[]
  }


  /**
   * TB_UserRole update
   */
  export type TB_UserRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_UserRole
     */
    select?: TB_UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TB_UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a TB_UserRole.
     */
    data: XOR<TB_UserRoleUpdateInput, TB_UserRoleUncheckedUpdateInput>
    /**
     * Choose, which TB_UserRole to update.
     */
    where: TB_UserRoleWhereUniqueInput
  }


  /**
   * TB_UserRole updateMany
   */
  export type TB_UserRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TB_UserRoles.
     */
    data: XOR<TB_UserRoleUpdateManyMutationInput, TB_UserRoleUncheckedUpdateManyInput>
    /**
     * Filter which TB_UserRoles to update
     */
    where?: TB_UserRoleWhereInput
  }


  /**
   * TB_UserRole upsert
   */
  export type TB_UserRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_UserRole
     */
    select?: TB_UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TB_UserRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the TB_UserRole to update in case it exists.
     */
    where: TB_UserRoleWhereUniqueInput
    /**
     * In case the TB_UserRole found by the `where` argument doesn't exist, create a new TB_UserRole with this data.
     */
    create: XOR<TB_UserRoleCreateInput, TB_UserRoleUncheckedCreateInput>
    /**
     * In case the TB_UserRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TB_UserRoleUpdateInput, TB_UserRoleUncheckedUpdateInput>
  }


  /**
   * TB_UserRole delete
   */
  export type TB_UserRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_UserRole
     */
    select?: TB_UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TB_UserRoleInclude<ExtArgs> | null
    /**
     * Filter which TB_UserRole to delete.
     */
    where: TB_UserRoleWhereUniqueInput
  }


  /**
   * TB_UserRole deleteMany
   */
  export type TB_UserRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TB_UserRoles to delete
     */
    where?: TB_UserRoleWhereInput
  }


  /**
   * TB_UserRole without action
   */
  export type TB_UserRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_UserRole
     */
    select?: TB_UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TB_UserRoleInclude<ExtArgs> | null
  }



  /**
   * Model TB_Users
   */

  export type AggregateTB_Users = {
    _count: TB_UsersCountAggregateOutputType | null
    _min: TB_UsersMinAggregateOutputType | null
    _max: TB_UsersMaxAggregateOutputType | null
  }

  export type TB_UsersMinAggregateOutputType = {
    UserID: string | null
    Email: string | null
    Password: string | null
    Phone: string | null
    FirstName: string | null
    LastName: string | null
    DateCreated: Date | null
    DateModified: Date | null
  }

  export type TB_UsersMaxAggregateOutputType = {
    UserID: string | null
    Email: string | null
    Password: string | null
    Phone: string | null
    FirstName: string | null
    LastName: string | null
    DateCreated: Date | null
    DateModified: Date | null
  }

  export type TB_UsersCountAggregateOutputType = {
    UserID: number
    Email: number
    Password: number
    Phone: number
    FirstName: number
    LastName: number
    DateCreated: number
    DateModified: number
    _all: number
  }


  export type TB_UsersMinAggregateInputType = {
    UserID?: true
    Email?: true
    Password?: true
    Phone?: true
    FirstName?: true
    LastName?: true
    DateCreated?: true
    DateModified?: true
  }

  export type TB_UsersMaxAggregateInputType = {
    UserID?: true
    Email?: true
    Password?: true
    Phone?: true
    FirstName?: true
    LastName?: true
    DateCreated?: true
    DateModified?: true
  }

  export type TB_UsersCountAggregateInputType = {
    UserID?: true
    Email?: true
    Password?: true
    Phone?: true
    FirstName?: true
    LastName?: true
    DateCreated?: true
    DateModified?: true
    _all?: true
  }

  export type TB_UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TB_Users to aggregate.
     */
    where?: TB_UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_Users to fetch.
     */
    orderBy?: TB_UsersOrderByWithRelationInput | TB_UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TB_UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TB_Users
    **/
    _count?: true | TB_UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TB_UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TB_UsersMaxAggregateInputType
  }

  export type GetTB_UsersAggregateType<T extends TB_UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateTB_Users]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTB_Users[P]>
      : GetScalarType<T[P], AggregateTB_Users[P]>
  }




  export type TB_UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TB_UsersWhereInput
    orderBy?: TB_UsersOrderByWithAggregationInput | TB_UsersOrderByWithAggregationInput[]
    by: TB_UsersScalarFieldEnum[] | TB_UsersScalarFieldEnum
    having?: TB_UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TB_UsersCountAggregateInputType | true
    _min?: TB_UsersMinAggregateInputType
    _max?: TB_UsersMaxAggregateInputType
  }

  export type TB_UsersGroupByOutputType = {
    UserID: string
    Email: string
    Password: string
    Phone: string
    FirstName: string
    LastName: string
    DateCreated: Date | null
    DateModified: Date | null
    _count: TB_UsersCountAggregateOutputType | null
    _min: TB_UsersMinAggregateOutputType | null
    _max: TB_UsersMaxAggregateOutputType | null
  }

  type GetTB_UsersGroupByPayload<T extends TB_UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TB_UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TB_UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TB_UsersGroupByOutputType[P]>
            : GetScalarType<T[P], TB_UsersGroupByOutputType[P]>
        }
      >
    >


  export type TB_UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    UserID?: boolean
    Email?: boolean
    Password?: boolean
    Phone?: boolean
    FirstName?: boolean
    LastName?: boolean
    DateCreated?: boolean
    DateModified?: boolean
    TB_otp?: boolean | TB_Users$TB_otpArgs<ExtArgs>
    TB_UserRole?: boolean | TB_Users$TB_UserRoleArgs<ExtArgs>
    _count?: boolean | TB_UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tB_Users"]>

  export type TB_UsersSelectScalar = {
    UserID?: boolean
    Email?: boolean
    Password?: boolean
    Phone?: boolean
    FirstName?: boolean
    LastName?: boolean
    DateCreated?: boolean
    DateModified?: boolean
  }

  export type TB_UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TB_otp?: boolean | TB_Users$TB_otpArgs<ExtArgs>
    TB_UserRole?: boolean | TB_Users$TB_UserRoleArgs<ExtArgs>
    _count?: boolean | TB_UsersCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TB_UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TB_Users"
    objects: {
      TB_otp: Prisma.$TB_otpPayload<ExtArgs>[]
      TB_UserRole: Prisma.$TB_UserRolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      UserID: string
      Email: string
      Password: string
      Phone: string
      FirstName: string
      LastName: string
      DateCreated: Date | null
      DateModified: Date | null
    }, ExtArgs["result"]["tB_Users"]>
    composites: {}
  }


  type TB_UsersGetPayload<S extends boolean | null | undefined | TB_UsersDefaultArgs> = $Result.GetResult<Prisma.$TB_UsersPayload, S>

  type TB_UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TB_UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: TB_UsersCountAggregateInputType | true
    }

  export interface TB_UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TB_Users'], meta: { name: 'TB_Users' } }
    /**
     * Find zero or one TB_Users that matches the filter.
     * @param {TB_UsersFindUniqueArgs} args - Arguments to find a TB_Users
     * @example
     * // Get one TB_Users
     * const tB_Users = await prisma.tB_Users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TB_UsersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TB_UsersFindUniqueArgs<ExtArgs>>
    ): Prisma__TB_UsersClient<$Result.GetResult<Prisma.$TB_UsersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TB_Users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TB_UsersFindUniqueOrThrowArgs} args - Arguments to find a TB_Users
     * @example
     * // Get one TB_Users
     * const tB_Users = await prisma.tB_Users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TB_UsersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TB_UsersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TB_UsersClient<$Result.GetResult<Prisma.$TB_UsersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TB_Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_UsersFindFirstArgs} args - Arguments to find a TB_Users
     * @example
     * // Get one TB_Users
     * const tB_Users = await prisma.tB_Users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TB_UsersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TB_UsersFindFirstArgs<ExtArgs>>
    ): Prisma__TB_UsersClient<$Result.GetResult<Prisma.$TB_UsersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TB_Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_UsersFindFirstOrThrowArgs} args - Arguments to find a TB_Users
     * @example
     * // Get one TB_Users
     * const tB_Users = await prisma.tB_Users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TB_UsersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TB_UsersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TB_UsersClient<$Result.GetResult<Prisma.$TB_UsersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TB_Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_UsersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TB_Users
     * const tB_Users = await prisma.tB_Users.findMany()
     * 
     * // Get first 10 TB_Users
     * const tB_Users = await prisma.tB_Users.findMany({ take: 10 })
     * 
     * // Only select the `UserID`
     * const tB_UsersWithUserIDOnly = await prisma.tB_Users.findMany({ select: { UserID: true } })
     * 
    **/
    findMany<T extends TB_UsersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TB_UsersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_UsersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TB_Users.
     * @param {TB_UsersCreateArgs} args - Arguments to create a TB_Users.
     * @example
     * // Create one TB_Users
     * const TB_Users = await prisma.tB_Users.create({
     *   data: {
     *     // ... data to create a TB_Users
     *   }
     * })
     * 
    **/
    create<T extends TB_UsersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TB_UsersCreateArgs<ExtArgs>>
    ): Prisma__TB_UsersClient<$Result.GetResult<Prisma.$TB_UsersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TB_Users.
     *     @param {TB_UsersCreateManyArgs} args - Arguments to create many TB_Users.
     *     @example
     *     // Create many TB_Users
     *     const tB_Users = await prisma.tB_Users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TB_UsersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TB_UsersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TB_Users.
     * @param {TB_UsersDeleteArgs} args - Arguments to delete one TB_Users.
     * @example
     * // Delete one TB_Users
     * const TB_Users = await prisma.tB_Users.delete({
     *   where: {
     *     // ... filter to delete one TB_Users
     *   }
     * })
     * 
    **/
    delete<T extends TB_UsersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TB_UsersDeleteArgs<ExtArgs>>
    ): Prisma__TB_UsersClient<$Result.GetResult<Prisma.$TB_UsersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TB_Users.
     * @param {TB_UsersUpdateArgs} args - Arguments to update one TB_Users.
     * @example
     * // Update one TB_Users
     * const tB_Users = await prisma.tB_Users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TB_UsersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TB_UsersUpdateArgs<ExtArgs>>
    ): Prisma__TB_UsersClient<$Result.GetResult<Prisma.$TB_UsersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TB_Users.
     * @param {TB_UsersDeleteManyArgs} args - Arguments to filter TB_Users to delete.
     * @example
     * // Delete a few TB_Users
     * const { count } = await prisma.tB_Users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TB_UsersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TB_UsersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TB_Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TB_Users
     * const tB_Users = await prisma.tB_Users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TB_UsersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TB_UsersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TB_Users.
     * @param {TB_UsersUpsertArgs} args - Arguments to update or create a TB_Users.
     * @example
     * // Update or create a TB_Users
     * const tB_Users = await prisma.tB_Users.upsert({
     *   create: {
     *     // ... data to create a TB_Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TB_Users we want to update
     *   }
     * })
    **/
    upsert<T extends TB_UsersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TB_UsersUpsertArgs<ExtArgs>>
    ): Prisma__TB_UsersClient<$Result.GetResult<Prisma.$TB_UsersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TB_Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_UsersCountArgs} args - Arguments to filter TB_Users to count.
     * @example
     * // Count the number of TB_Users
     * const count = await prisma.tB_Users.count({
     *   where: {
     *     // ... the filter for the TB_Users we want to count
     *   }
     * })
    **/
    count<T extends TB_UsersCountArgs>(
      args?: Subset<T, TB_UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TB_UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TB_Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TB_UsersAggregateArgs>(args: Subset<T, TB_UsersAggregateArgs>): Prisma.PrismaPromise<GetTB_UsersAggregateType<T>>

    /**
     * Group by TB_Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_UsersGroupByArgs} args - Group by arguments.
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
      T extends TB_UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TB_UsersGroupByArgs['orderBy'] }
        : { orderBy?: TB_UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TB_UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTB_UsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TB_Users model
   */
  readonly fields: TB_UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TB_Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TB_UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    TB_otp<T extends TB_Users$TB_otpArgs<ExtArgs> = {}>(args?: Subset<T, TB_Users$TB_otpArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_otpPayload<ExtArgs>, T, 'findMany'> | Null>;

    TB_UserRole<T extends TB_Users$TB_UserRoleArgs<ExtArgs> = {}>(args?: Subset<T, TB_Users$TB_UserRoleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_UserRolePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TB_Users model
   */ 
  interface TB_UsersFieldRefs {
    readonly UserID: FieldRef<"TB_Users", 'String'>
    readonly Email: FieldRef<"TB_Users", 'String'>
    readonly Password: FieldRef<"TB_Users", 'String'>
    readonly Phone: FieldRef<"TB_Users", 'String'>
    readonly FirstName: FieldRef<"TB_Users", 'String'>
    readonly LastName: FieldRef<"TB_Users", 'String'>
    readonly DateCreated: FieldRef<"TB_Users", 'DateTime'>
    readonly DateModified: FieldRef<"TB_Users", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * TB_Users findUnique
   */
  export type TB_UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_Users
     */
    select?: TB_UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TB_UsersInclude<ExtArgs> | null
    /**
     * Filter, which TB_Users to fetch.
     */
    where: TB_UsersWhereUniqueInput
  }


  /**
   * TB_Users findUniqueOrThrow
   */
  export type TB_UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_Users
     */
    select?: TB_UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TB_UsersInclude<ExtArgs> | null
    /**
     * Filter, which TB_Users to fetch.
     */
    where: TB_UsersWhereUniqueInput
  }


  /**
   * TB_Users findFirst
   */
  export type TB_UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_Users
     */
    select?: TB_UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TB_UsersInclude<ExtArgs> | null
    /**
     * Filter, which TB_Users to fetch.
     */
    where?: TB_UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_Users to fetch.
     */
    orderBy?: TB_UsersOrderByWithRelationInput | TB_UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TB_Users.
     */
    cursor?: TB_UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TB_Users.
     */
    distinct?: TB_UsersScalarFieldEnum | TB_UsersScalarFieldEnum[]
  }


  /**
   * TB_Users findFirstOrThrow
   */
  export type TB_UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_Users
     */
    select?: TB_UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TB_UsersInclude<ExtArgs> | null
    /**
     * Filter, which TB_Users to fetch.
     */
    where?: TB_UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_Users to fetch.
     */
    orderBy?: TB_UsersOrderByWithRelationInput | TB_UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TB_Users.
     */
    cursor?: TB_UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TB_Users.
     */
    distinct?: TB_UsersScalarFieldEnum | TB_UsersScalarFieldEnum[]
  }


  /**
   * TB_Users findMany
   */
  export type TB_UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_Users
     */
    select?: TB_UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TB_UsersInclude<ExtArgs> | null
    /**
     * Filter, which TB_Users to fetch.
     */
    where?: TB_UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_Users to fetch.
     */
    orderBy?: TB_UsersOrderByWithRelationInput | TB_UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TB_Users.
     */
    cursor?: TB_UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_Users.
     */
    skip?: number
    distinct?: TB_UsersScalarFieldEnum | TB_UsersScalarFieldEnum[]
  }


  /**
   * TB_Users create
   */
  export type TB_UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_Users
     */
    select?: TB_UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TB_UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a TB_Users.
     */
    data: XOR<TB_UsersCreateInput, TB_UsersUncheckedCreateInput>
  }


  /**
   * TB_Users createMany
   */
  export type TB_UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TB_Users.
     */
    data: TB_UsersCreateManyInput | TB_UsersCreateManyInput[]
  }


  /**
   * TB_Users update
   */
  export type TB_UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_Users
     */
    select?: TB_UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TB_UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a TB_Users.
     */
    data: XOR<TB_UsersUpdateInput, TB_UsersUncheckedUpdateInput>
    /**
     * Choose, which TB_Users to update.
     */
    where: TB_UsersWhereUniqueInput
  }


  /**
   * TB_Users updateMany
   */
  export type TB_UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TB_Users.
     */
    data: XOR<TB_UsersUpdateManyMutationInput, TB_UsersUncheckedUpdateManyInput>
    /**
     * Filter which TB_Users to update
     */
    where?: TB_UsersWhereInput
  }


  /**
   * TB_Users upsert
   */
  export type TB_UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_Users
     */
    select?: TB_UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TB_UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the TB_Users to update in case it exists.
     */
    where: TB_UsersWhereUniqueInput
    /**
     * In case the TB_Users found by the `where` argument doesn't exist, create a new TB_Users with this data.
     */
    create: XOR<TB_UsersCreateInput, TB_UsersUncheckedCreateInput>
    /**
     * In case the TB_Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TB_UsersUpdateInput, TB_UsersUncheckedUpdateInput>
  }


  /**
   * TB_Users delete
   */
  export type TB_UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_Users
     */
    select?: TB_UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TB_UsersInclude<ExtArgs> | null
    /**
     * Filter which TB_Users to delete.
     */
    where: TB_UsersWhereUniqueInput
  }


  /**
   * TB_Users deleteMany
   */
  export type TB_UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TB_Users to delete
     */
    where?: TB_UsersWhereInput
  }


  /**
   * TB_Users.TB_otp
   */
  export type TB_Users$TB_otpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_otp
     */
    select?: TB_otpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TB_otpInclude<ExtArgs> | null
    where?: TB_otpWhereInput
    orderBy?: TB_otpOrderByWithRelationInput | TB_otpOrderByWithRelationInput[]
    cursor?: TB_otpWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TB_otpScalarFieldEnum | TB_otpScalarFieldEnum[]
  }


  /**
   * TB_Users.TB_UserRole
   */
  export type TB_Users$TB_UserRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_UserRole
     */
    select?: TB_UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TB_UserRoleInclude<ExtArgs> | null
    where?: TB_UserRoleWhereInput
    orderBy?: TB_UserRoleOrderByWithRelationInput | TB_UserRoleOrderByWithRelationInput[]
    cursor?: TB_UserRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TB_UserRoleScalarFieldEnum | TB_UserRoleScalarFieldEnum[]
  }


  /**
   * TB_Users without action
   */
  export type TB_UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_Users
     */
    select?: TB_UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TB_UsersInclude<ExtArgs> | null
  }



  /**
   * Model TBM_Role
   */

  export type AggregateTBM_Role = {
    _count: TBM_RoleCountAggregateOutputType | null
    _min: TBM_RoleMinAggregateOutputType | null
    _max: TBM_RoleMaxAggregateOutputType | null
  }

  export type TBM_RoleMinAggregateOutputType = {
    RoleID: string | null
    RoleName: string | null
  }

  export type TBM_RoleMaxAggregateOutputType = {
    RoleID: string | null
    RoleName: string | null
  }

  export type TBM_RoleCountAggregateOutputType = {
    RoleID: number
    RoleName: number
    _all: number
  }


  export type TBM_RoleMinAggregateInputType = {
    RoleID?: true
    RoleName?: true
  }

  export type TBM_RoleMaxAggregateInputType = {
    RoleID?: true
    RoleName?: true
  }

  export type TBM_RoleCountAggregateInputType = {
    RoleID?: true
    RoleName?: true
    _all?: true
  }

  export type TBM_RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TBM_Role to aggregate.
     */
    where?: TBM_RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TBM_Roles to fetch.
     */
    orderBy?: TBM_RoleOrderByWithRelationInput | TBM_RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TBM_RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TBM_Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TBM_Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TBM_Roles
    **/
    _count?: true | TBM_RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TBM_RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TBM_RoleMaxAggregateInputType
  }

  export type GetTBM_RoleAggregateType<T extends TBM_RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateTBM_Role]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTBM_Role[P]>
      : GetScalarType<T[P], AggregateTBM_Role[P]>
  }




  export type TBM_RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TBM_RoleWhereInput
    orderBy?: TBM_RoleOrderByWithAggregationInput | TBM_RoleOrderByWithAggregationInput[]
    by: TBM_RoleScalarFieldEnum[] | TBM_RoleScalarFieldEnum
    having?: TBM_RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TBM_RoleCountAggregateInputType | true
    _min?: TBM_RoleMinAggregateInputType
    _max?: TBM_RoleMaxAggregateInputType
  }

  export type TBM_RoleGroupByOutputType = {
    RoleID: string
    RoleName: string | null
    _count: TBM_RoleCountAggregateOutputType | null
    _min: TBM_RoleMinAggregateOutputType | null
    _max: TBM_RoleMaxAggregateOutputType | null
  }

  type GetTBM_RoleGroupByPayload<T extends TBM_RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TBM_RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TBM_RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TBM_RoleGroupByOutputType[P]>
            : GetScalarType<T[P], TBM_RoleGroupByOutputType[P]>
        }
      >
    >


  export type TBM_RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    RoleID?: boolean
    RoleName?: boolean
    TB_UserRole?: boolean | TBM_Role$TB_UserRoleArgs<ExtArgs>
    _count?: boolean | TBM_RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tBM_Role"]>

  export type TBM_RoleSelectScalar = {
    RoleID?: boolean
    RoleName?: boolean
  }

  export type TBM_RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TB_UserRole?: boolean | TBM_Role$TB_UserRoleArgs<ExtArgs>
    _count?: boolean | TBM_RoleCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TBM_RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TBM_Role"
    objects: {
      TB_UserRole: Prisma.$TB_UserRolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      RoleID: string
      RoleName: string | null
    }, ExtArgs["result"]["tBM_Role"]>
    composites: {}
  }


  type TBM_RoleGetPayload<S extends boolean | null | undefined | TBM_RoleDefaultArgs> = $Result.GetResult<Prisma.$TBM_RolePayload, S>

  type TBM_RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TBM_RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: TBM_RoleCountAggregateInputType | true
    }

  export interface TBM_RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TBM_Role'], meta: { name: 'TBM_Role' } }
    /**
     * Find zero or one TBM_Role that matches the filter.
     * @param {TBM_RoleFindUniqueArgs} args - Arguments to find a TBM_Role
     * @example
     * // Get one TBM_Role
     * const tBM_Role = await prisma.tBM_Role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TBM_RoleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TBM_RoleFindUniqueArgs<ExtArgs>>
    ): Prisma__TBM_RoleClient<$Result.GetResult<Prisma.$TBM_RolePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TBM_Role that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TBM_RoleFindUniqueOrThrowArgs} args - Arguments to find a TBM_Role
     * @example
     * // Get one TBM_Role
     * const tBM_Role = await prisma.tBM_Role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TBM_RoleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TBM_RoleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TBM_RoleClient<$Result.GetResult<Prisma.$TBM_RolePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TBM_Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TBM_RoleFindFirstArgs} args - Arguments to find a TBM_Role
     * @example
     * // Get one TBM_Role
     * const tBM_Role = await prisma.tBM_Role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TBM_RoleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TBM_RoleFindFirstArgs<ExtArgs>>
    ): Prisma__TBM_RoleClient<$Result.GetResult<Prisma.$TBM_RolePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TBM_Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TBM_RoleFindFirstOrThrowArgs} args - Arguments to find a TBM_Role
     * @example
     * // Get one TBM_Role
     * const tBM_Role = await prisma.tBM_Role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TBM_RoleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TBM_RoleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TBM_RoleClient<$Result.GetResult<Prisma.$TBM_RolePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TBM_Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TBM_RoleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TBM_Roles
     * const tBM_Roles = await prisma.tBM_Role.findMany()
     * 
     * // Get first 10 TBM_Roles
     * const tBM_Roles = await prisma.tBM_Role.findMany({ take: 10 })
     * 
     * // Only select the `RoleID`
     * const tBM_RoleWithRoleIDOnly = await prisma.tBM_Role.findMany({ select: { RoleID: true } })
     * 
    **/
    findMany<T extends TBM_RoleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TBM_RoleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TBM_RolePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TBM_Role.
     * @param {TBM_RoleCreateArgs} args - Arguments to create a TBM_Role.
     * @example
     * // Create one TBM_Role
     * const TBM_Role = await prisma.tBM_Role.create({
     *   data: {
     *     // ... data to create a TBM_Role
     *   }
     * })
     * 
    **/
    create<T extends TBM_RoleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TBM_RoleCreateArgs<ExtArgs>>
    ): Prisma__TBM_RoleClient<$Result.GetResult<Prisma.$TBM_RolePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TBM_Roles.
     *     @param {TBM_RoleCreateManyArgs} args - Arguments to create many TBM_Roles.
     *     @example
     *     // Create many TBM_Roles
     *     const tBM_Role = await prisma.tBM_Role.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TBM_RoleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TBM_RoleCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TBM_Role.
     * @param {TBM_RoleDeleteArgs} args - Arguments to delete one TBM_Role.
     * @example
     * // Delete one TBM_Role
     * const TBM_Role = await prisma.tBM_Role.delete({
     *   where: {
     *     // ... filter to delete one TBM_Role
     *   }
     * })
     * 
    **/
    delete<T extends TBM_RoleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TBM_RoleDeleteArgs<ExtArgs>>
    ): Prisma__TBM_RoleClient<$Result.GetResult<Prisma.$TBM_RolePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TBM_Role.
     * @param {TBM_RoleUpdateArgs} args - Arguments to update one TBM_Role.
     * @example
     * // Update one TBM_Role
     * const tBM_Role = await prisma.tBM_Role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TBM_RoleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TBM_RoleUpdateArgs<ExtArgs>>
    ): Prisma__TBM_RoleClient<$Result.GetResult<Prisma.$TBM_RolePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TBM_Roles.
     * @param {TBM_RoleDeleteManyArgs} args - Arguments to filter TBM_Roles to delete.
     * @example
     * // Delete a few TBM_Roles
     * const { count } = await prisma.tBM_Role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TBM_RoleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TBM_RoleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TBM_Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TBM_RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TBM_Roles
     * const tBM_Role = await prisma.tBM_Role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TBM_RoleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TBM_RoleUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TBM_Role.
     * @param {TBM_RoleUpsertArgs} args - Arguments to update or create a TBM_Role.
     * @example
     * // Update or create a TBM_Role
     * const tBM_Role = await prisma.tBM_Role.upsert({
     *   create: {
     *     // ... data to create a TBM_Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TBM_Role we want to update
     *   }
     * })
    **/
    upsert<T extends TBM_RoleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TBM_RoleUpsertArgs<ExtArgs>>
    ): Prisma__TBM_RoleClient<$Result.GetResult<Prisma.$TBM_RolePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TBM_Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TBM_RoleCountArgs} args - Arguments to filter TBM_Roles to count.
     * @example
     * // Count the number of TBM_Roles
     * const count = await prisma.tBM_Role.count({
     *   where: {
     *     // ... the filter for the TBM_Roles we want to count
     *   }
     * })
    **/
    count<T extends TBM_RoleCountArgs>(
      args?: Subset<T, TBM_RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TBM_RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TBM_Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TBM_RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TBM_RoleAggregateArgs>(args: Subset<T, TBM_RoleAggregateArgs>): Prisma.PrismaPromise<GetTBM_RoleAggregateType<T>>

    /**
     * Group by TBM_Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TBM_RoleGroupByArgs} args - Group by arguments.
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
      T extends TBM_RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TBM_RoleGroupByArgs['orderBy'] }
        : { orderBy?: TBM_RoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TBM_RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTBM_RoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TBM_Role model
   */
  readonly fields: TBM_RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TBM_Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TBM_RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    TB_UserRole<T extends TBM_Role$TB_UserRoleArgs<ExtArgs> = {}>(args?: Subset<T, TBM_Role$TB_UserRoleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_UserRolePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TBM_Role model
   */ 
  interface TBM_RoleFieldRefs {
    readonly RoleID: FieldRef<"TBM_Role", 'String'>
    readonly RoleName: FieldRef<"TBM_Role", 'String'>
  }
    

  // Custom InputTypes

  /**
   * TBM_Role findUnique
   */
  export type TBM_RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TBM_Role
     */
    select?: TBM_RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TBM_RoleInclude<ExtArgs> | null
    /**
     * Filter, which TBM_Role to fetch.
     */
    where: TBM_RoleWhereUniqueInput
  }


  /**
   * TBM_Role findUniqueOrThrow
   */
  export type TBM_RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TBM_Role
     */
    select?: TBM_RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TBM_RoleInclude<ExtArgs> | null
    /**
     * Filter, which TBM_Role to fetch.
     */
    where: TBM_RoleWhereUniqueInput
  }


  /**
   * TBM_Role findFirst
   */
  export type TBM_RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TBM_Role
     */
    select?: TBM_RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TBM_RoleInclude<ExtArgs> | null
    /**
     * Filter, which TBM_Role to fetch.
     */
    where?: TBM_RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TBM_Roles to fetch.
     */
    orderBy?: TBM_RoleOrderByWithRelationInput | TBM_RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TBM_Roles.
     */
    cursor?: TBM_RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TBM_Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TBM_Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TBM_Roles.
     */
    distinct?: TBM_RoleScalarFieldEnum | TBM_RoleScalarFieldEnum[]
  }


  /**
   * TBM_Role findFirstOrThrow
   */
  export type TBM_RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TBM_Role
     */
    select?: TBM_RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TBM_RoleInclude<ExtArgs> | null
    /**
     * Filter, which TBM_Role to fetch.
     */
    where?: TBM_RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TBM_Roles to fetch.
     */
    orderBy?: TBM_RoleOrderByWithRelationInput | TBM_RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TBM_Roles.
     */
    cursor?: TBM_RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TBM_Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TBM_Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TBM_Roles.
     */
    distinct?: TBM_RoleScalarFieldEnum | TBM_RoleScalarFieldEnum[]
  }


  /**
   * TBM_Role findMany
   */
  export type TBM_RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TBM_Role
     */
    select?: TBM_RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TBM_RoleInclude<ExtArgs> | null
    /**
     * Filter, which TBM_Roles to fetch.
     */
    where?: TBM_RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TBM_Roles to fetch.
     */
    orderBy?: TBM_RoleOrderByWithRelationInput | TBM_RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TBM_Roles.
     */
    cursor?: TBM_RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TBM_Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TBM_Roles.
     */
    skip?: number
    distinct?: TBM_RoleScalarFieldEnum | TBM_RoleScalarFieldEnum[]
  }


  /**
   * TBM_Role create
   */
  export type TBM_RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TBM_Role
     */
    select?: TBM_RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TBM_RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a TBM_Role.
     */
    data: XOR<TBM_RoleCreateInput, TBM_RoleUncheckedCreateInput>
  }


  /**
   * TBM_Role createMany
   */
  export type TBM_RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TBM_Roles.
     */
    data: TBM_RoleCreateManyInput | TBM_RoleCreateManyInput[]
  }


  /**
   * TBM_Role update
   */
  export type TBM_RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TBM_Role
     */
    select?: TBM_RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TBM_RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a TBM_Role.
     */
    data: XOR<TBM_RoleUpdateInput, TBM_RoleUncheckedUpdateInput>
    /**
     * Choose, which TBM_Role to update.
     */
    where: TBM_RoleWhereUniqueInput
  }


  /**
   * TBM_Role updateMany
   */
  export type TBM_RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TBM_Roles.
     */
    data: XOR<TBM_RoleUpdateManyMutationInput, TBM_RoleUncheckedUpdateManyInput>
    /**
     * Filter which TBM_Roles to update
     */
    where?: TBM_RoleWhereInput
  }


  /**
   * TBM_Role upsert
   */
  export type TBM_RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TBM_Role
     */
    select?: TBM_RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TBM_RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the TBM_Role to update in case it exists.
     */
    where: TBM_RoleWhereUniqueInput
    /**
     * In case the TBM_Role found by the `where` argument doesn't exist, create a new TBM_Role with this data.
     */
    create: XOR<TBM_RoleCreateInput, TBM_RoleUncheckedCreateInput>
    /**
     * In case the TBM_Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TBM_RoleUpdateInput, TBM_RoleUncheckedUpdateInput>
  }


  /**
   * TBM_Role delete
   */
  export type TBM_RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TBM_Role
     */
    select?: TBM_RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TBM_RoleInclude<ExtArgs> | null
    /**
     * Filter which TBM_Role to delete.
     */
    where: TBM_RoleWhereUniqueInput
  }


  /**
   * TBM_Role deleteMany
   */
  export type TBM_RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TBM_Roles to delete
     */
    where?: TBM_RoleWhereInput
  }


  /**
   * TBM_Role.TB_UserRole
   */
  export type TBM_Role$TB_UserRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_UserRole
     */
    select?: TB_UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TB_UserRoleInclude<ExtArgs> | null
    where?: TB_UserRoleWhereInput
    orderBy?: TB_UserRoleOrderByWithRelationInput | TB_UserRoleOrderByWithRelationInput[]
    cursor?: TB_UserRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TB_UserRoleScalarFieldEnum | TB_UserRoleScalarFieldEnum[]
  }


  /**
   * TBM_Role without action
   */
  export type TBM_RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TBM_Role
     */
    select?: TBM_RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TBM_RoleInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable',
    Snapshot: 'Snapshot'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TB_otpScalarFieldEnum: {
    RefCode: 'RefCode',
    UserID: 'UserID',
    Expire: 'Expire'
  };

  export type TB_otpScalarFieldEnum = (typeof TB_otpScalarFieldEnum)[keyof typeof TB_otpScalarFieldEnum]


  export const TB_UserRoleScalarFieldEnum: {
    UserID: 'UserID',
    RoleID: 'RoleID'
  };

  export type TB_UserRoleScalarFieldEnum = (typeof TB_UserRoleScalarFieldEnum)[keyof typeof TB_UserRoleScalarFieldEnum]


  export const TB_UsersScalarFieldEnum: {
    UserID: 'UserID',
    Email: 'Email',
    Password: 'Password',
    Phone: 'Phone',
    FirstName: 'FirstName',
    LastName: 'LastName',
    DateCreated: 'DateCreated',
    DateModified: 'DateModified'
  };

  export type TB_UsersScalarFieldEnum = (typeof TB_UsersScalarFieldEnum)[keyof typeof TB_UsersScalarFieldEnum]


  export const TBM_RoleScalarFieldEnum: {
    RoleID: 'RoleID',
    RoleName: 'RoleName'
  };

  export type TBM_RoleScalarFieldEnum = (typeof TBM_RoleScalarFieldEnum)[keyof typeof TBM_RoleScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type TB_otpWhereInput = {
    AND?: TB_otpWhereInput | TB_otpWhereInput[]
    OR?: TB_otpWhereInput[]
    NOT?: TB_otpWhereInput | TB_otpWhereInput[]
    RefCode?: IntFilter<"TB_otp"> | number
    UserID?: StringNullableFilter<"TB_otp"> | string | null
    Expire?: DateTimeNullableFilter<"TB_otp"> | Date | string | null
    TB_Users?: XOR<TB_UsersNullableRelationFilter, TB_UsersWhereInput> | null
  }

  export type TB_otpOrderByWithRelationInput = {
    RefCode?: SortOrder
    UserID?: SortOrderInput | SortOrder
    Expire?: SortOrderInput | SortOrder
    TB_Users?: TB_UsersOrderByWithRelationInput
  }

  export type TB_otpWhereUniqueInput = Prisma.AtLeast<{
    RefCode?: number
    AND?: TB_otpWhereInput | TB_otpWhereInput[]
    OR?: TB_otpWhereInput[]
    NOT?: TB_otpWhereInput | TB_otpWhereInput[]
    UserID?: StringNullableFilter<"TB_otp"> | string | null
    Expire?: DateTimeNullableFilter<"TB_otp"> | Date | string | null
    TB_Users?: XOR<TB_UsersNullableRelationFilter, TB_UsersWhereInput> | null
  }, "RefCode">

  export type TB_otpOrderByWithAggregationInput = {
    RefCode?: SortOrder
    UserID?: SortOrderInput | SortOrder
    Expire?: SortOrderInput | SortOrder
    _count?: TB_otpCountOrderByAggregateInput
    _avg?: TB_otpAvgOrderByAggregateInput
    _max?: TB_otpMaxOrderByAggregateInput
    _min?: TB_otpMinOrderByAggregateInput
    _sum?: TB_otpSumOrderByAggregateInput
  }

  export type TB_otpScalarWhereWithAggregatesInput = {
    AND?: TB_otpScalarWhereWithAggregatesInput | TB_otpScalarWhereWithAggregatesInput[]
    OR?: TB_otpScalarWhereWithAggregatesInput[]
    NOT?: TB_otpScalarWhereWithAggregatesInput | TB_otpScalarWhereWithAggregatesInput[]
    RefCode?: IntWithAggregatesFilter<"TB_otp"> | number
    UserID?: StringNullableWithAggregatesFilter<"TB_otp"> | string | null
    Expire?: DateTimeNullableWithAggregatesFilter<"TB_otp"> | Date | string | null
  }

  export type TB_UserRoleWhereInput = {
    AND?: TB_UserRoleWhereInput | TB_UserRoleWhereInput[]
    OR?: TB_UserRoleWhereInput[]
    NOT?: TB_UserRoleWhereInput | TB_UserRoleWhereInput[]
    UserID?: StringFilter<"TB_UserRole"> | string
    RoleID?: StringFilter<"TB_UserRole"> | string
    TBM_Role?: XOR<TBM_RoleRelationFilter, TBM_RoleWhereInput>
    TB_Users?: XOR<TB_UsersRelationFilter, TB_UsersWhereInput>
  }

  export type TB_UserRoleOrderByWithRelationInput = {
    UserID?: SortOrder
    RoleID?: SortOrder
    TBM_Role?: TBM_RoleOrderByWithRelationInput
    TB_Users?: TB_UsersOrderByWithRelationInput
  }

  export type TB_UserRoleWhereUniqueInput = Prisma.AtLeast<{
    UserID_RoleID?: TB_UserRoleUserIDRoleIDCompoundUniqueInput
    AND?: TB_UserRoleWhereInput | TB_UserRoleWhereInput[]
    OR?: TB_UserRoleWhereInput[]
    NOT?: TB_UserRoleWhereInput | TB_UserRoleWhereInput[]
    UserID?: StringFilter<"TB_UserRole"> | string
    RoleID?: StringFilter<"TB_UserRole"> | string
    TBM_Role?: XOR<TBM_RoleRelationFilter, TBM_RoleWhereInput>
    TB_Users?: XOR<TB_UsersRelationFilter, TB_UsersWhereInput>
  }, "UserID_RoleID">

  export type TB_UserRoleOrderByWithAggregationInput = {
    UserID?: SortOrder
    RoleID?: SortOrder
    _count?: TB_UserRoleCountOrderByAggregateInput
    _max?: TB_UserRoleMaxOrderByAggregateInput
    _min?: TB_UserRoleMinOrderByAggregateInput
  }

  export type TB_UserRoleScalarWhereWithAggregatesInput = {
    AND?: TB_UserRoleScalarWhereWithAggregatesInput | TB_UserRoleScalarWhereWithAggregatesInput[]
    OR?: TB_UserRoleScalarWhereWithAggregatesInput[]
    NOT?: TB_UserRoleScalarWhereWithAggregatesInput | TB_UserRoleScalarWhereWithAggregatesInput[]
    UserID?: StringWithAggregatesFilter<"TB_UserRole"> | string
    RoleID?: StringWithAggregatesFilter<"TB_UserRole"> | string
  }

  export type TB_UsersWhereInput = {
    AND?: TB_UsersWhereInput | TB_UsersWhereInput[]
    OR?: TB_UsersWhereInput[]
    NOT?: TB_UsersWhereInput | TB_UsersWhereInput[]
    UserID?: StringFilter<"TB_Users"> | string
    Email?: StringFilter<"TB_Users"> | string
    Password?: StringFilter<"TB_Users"> | string
    Phone?: StringFilter<"TB_Users"> | string
    FirstName?: StringFilter<"TB_Users"> | string
    LastName?: StringFilter<"TB_Users"> | string
    DateCreated?: DateTimeNullableFilter<"TB_Users"> | Date | string | null
    DateModified?: DateTimeNullableFilter<"TB_Users"> | Date | string | null
    TB_otp?: TB_otpListRelationFilter
    TB_UserRole?: TB_UserRoleListRelationFilter
  }

  export type TB_UsersOrderByWithRelationInput = {
    UserID?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    Phone?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    DateCreated?: SortOrderInput | SortOrder
    DateModified?: SortOrderInput | SortOrder
    TB_otp?: TB_otpOrderByRelationAggregateInput
    TB_UserRole?: TB_UserRoleOrderByRelationAggregateInput
  }

  export type TB_UsersWhereUniqueInput = Prisma.AtLeast<{
    UserID?: string
    Email?: string
    AND?: TB_UsersWhereInput | TB_UsersWhereInput[]
    OR?: TB_UsersWhereInput[]
    NOT?: TB_UsersWhereInput | TB_UsersWhereInput[]
    Password?: StringFilter<"TB_Users"> | string
    Phone?: StringFilter<"TB_Users"> | string
    FirstName?: StringFilter<"TB_Users"> | string
    LastName?: StringFilter<"TB_Users"> | string
    DateCreated?: DateTimeNullableFilter<"TB_Users"> | Date | string | null
    DateModified?: DateTimeNullableFilter<"TB_Users"> | Date | string | null
    TB_otp?: TB_otpListRelationFilter
    TB_UserRole?: TB_UserRoleListRelationFilter
  }, "UserID" | "Email">

  export type TB_UsersOrderByWithAggregationInput = {
    UserID?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    Phone?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    DateCreated?: SortOrderInput | SortOrder
    DateModified?: SortOrderInput | SortOrder
    _count?: TB_UsersCountOrderByAggregateInput
    _max?: TB_UsersMaxOrderByAggregateInput
    _min?: TB_UsersMinOrderByAggregateInput
  }

  export type TB_UsersScalarWhereWithAggregatesInput = {
    AND?: TB_UsersScalarWhereWithAggregatesInput | TB_UsersScalarWhereWithAggregatesInput[]
    OR?: TB_UsersScalarWhereWithAggregatesInput[]
    NOT?: TB_UsersScalarWhereWithAggregatesInput | TB_UsersScalarWhereWithAggregatesInput[]
    UserID?: StringWithAggregatesFilter<"TB_Users"> | string
    Email?: StringWithAggregatesFilter<"TB_Users"> | string
    Password?: StringWithAggregatesFilter<"TB_Users"> | string
    Phone?: StringWithAggregatesFilter<"TB_Users"> | string
    FirstName?: StringWithAggregatesFilter<"TB_Users"> | string
    LastName?: StringWithAggregatesFilter<"TB_Users"> | string
    DateCreated?: DateTimeNullableWithAggregatesFilter<"TB_Users"> | Date | string | null
    DateModified?: DateTimeNullableWithAggregatesFilter<"TB_Users"> | Date | string | null
  }

  export type TBM_RoleWhereInput = {
    AND?: TBM_RoleWhereInput | TBM_RoleWhereInput[]
    OR?: TBM_RoleWhereInput[]
    NOT?: TBM_RoleWhereInput | TBM_RoleWhereInput[]
    RoleID?: StringFilter<"TBM_Role"> | string
    RoleName?: StringNullableFilter<"TBM_Role"> | string | null
    TB_UserRole?: TB_UserRoleListRelationFilter
  }

  export type TBM_RoleOrderByWithRelationInput = {
    RoleID?: SortOrder
    RoleName?: SortOrderInput | SortOrder
    TB_UserRole?: TB_UserRoleOrderByRelationAggregateInput
  }

  export type TBM_RoleWhereUniqueInput = Prisma.AtLeast<{
    RoleID?: string
    RoleName?: string
    AND?: TBM_RoleWhereInput | TBM_RoleWhereInput[]
    OR?: TBM_RoleWhereInput[]
    NOT?: TBM_RoleWhereInput | TBM_RoleWhereInput[]
    TB_UserRole?: TB_UserRoleListRelationFilter
  }, "RoleID" | "RoleName">

  export type TBM_RoleOrderByWithAggregationInput = {
    RoleID?: SortOrder
    RoleName?: SortOrderInput | SortOrder
    _count?: TBM_RoleCountOrderByAggregateInput
    _max?: TBM_RoleMaxOrderByAggregateInput
    _min?: TBM_RoleMinOrderByAggregateInput
  }

  export type TBM_RoleScalarWhereWithAggregatesInput = {
    AND?: TBM_RoleScalarWhereWithAggregatesInput | TBM_RoleScalarWhereWithAggregatesInput[]
    OR?: TBM_RoleScalarWhereWithAggregatesInput[]
    NOT?: TBM_RoleScalarWhereWithAggregatesInput | TBM_RoleScalarWhereWithAggregatesInput[]
    RoleID?: StringWithAggregatesFilter<"TBM_Role"> | string
    RoleName?: StringNullableWithAggregatesFilter<"TBM_Role"> | string | null
  }

  export type TB_otpCreateInput = {
    RefCode: number
    Expire?: Date | string | null
    TB_Users?: TB_UsersCreateNestedOneWithoutTB_otpInput
  }

  export type TB_otpUncheckedCreateInput = {
    RefCode: number
    UserID?: string | null
    Expire?: Date | string | null
  }

  export type TB_otpUpdateInput = {
    RefCode?: IntFieldUpdateOperationsInput | number
    Expire?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TB_Users?: TB_UsersUpdateOneWithoutTB_otpNestedInput
  }

  export type TB_otpUncheckedUpdateInput = {
    RefCode?: IntFieldUpdateOperationsInput | number
    UserID?: NullableStringFieldUpdateOperationsInput | string | null
    Expire?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TB_otpCreateManyInput = {
    RefCode: number
    UserID?: string | null
    Expire?: Date | string | null
  }

  export type TB_otpUpdateManyMutationInput = {
    RefCode?: IntFieldUpdateOperationsInput | number
    Expire?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TB_otpUncheckedUpdateManyInput = {
    RefCode?: IntFieldUpdateOperationsInput | number
    UserID?: NullableStringFieldUpdateOperationsInput | string | null
    Expire?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TB_UserRoleCreateInput = {
    TBM_Role: TBM_RoleCreateNestedOneWithoutTB_UserRoleInput
    TB_Users: TB_UsersCreateNestedOneWithoutTB_UserRoleInput
  }

  export type TB_UserRoleUncheckedCreateInput = {
    UserID: string
    RoleID: string
  }

  export type TB_UserRoleUpdateInput = {
    TBM_Role?: TBM_RoleUpdateOneRequiredWithoutTB_UserRoleNestedInput
    TB_Users?: TB_UsersUpdateOneRequiredWithoutTB_UserRoleNestedInput
  }

  export type TB_UserRoleUncheckedUpdateInput = {
    UserID?: StringFieldUpdateOperationsInput | string
    RoleID?: StringFieldUpdateOperationsInput | string
  }

  export type TB_UserRoleCreateManyInput = {
    UserID: string
    RoleID: string
  }

  export type TB_UserRoleUpdateManyMutationInput = {

  }

  export type TB_UserRoleUncheckedUpdateManyInput = {
    UserID?: StringFieldUpdateOperationsInput | string
    RoleID?: StringFieldUpdateOperationsInput | string
  }

  export type TB_UsersCreateInput = {
    UserID: string
    Email: string
    Password: string
    Phone: string
    FirstName: string
    LastName: string
    DateCreated?: Date | string | null
    DateModified?: Date | string | null
    TB_otp?: TB_otpCreateNestedManyWithoutTB_UsersInput
    TB_UserRole?: TB_UserRoleCreateNestedManyWithoutTB_UsersInput
  }

  export type TB_UsersUncheckedCreateInput = {
    UserID: string
    Email: string
    Password: string
    Phone: string
    FirstName: string
    LastName: string
    DateCreated?: Date | string | null
    DateModified?: Date | string | null
    TB_otp?: TB_otpUncheckedCreateNestedManyWithoutTB_UsersInput
    TB_UserRole?: TB_UserRoleUncheckedCreateNestedManyWithoutTB_UsersInput
  }

  export type TB_UsersUpdateInput = {
    UserID?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Phone?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    DateCreated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TB_otp?: TB_otpUpdateManyWithoutTB_UsersNestedInput
    TB_UserRole?: TB_UserRoleUpdateManyWithoutTB_UsersNestedInput
  }

  export type TB_UsersUncheckedUpdateInput = {
    UserID?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Phone?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    DateCreated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TB_otp?: TB_otpUncheckedUpdateManyWithoutTB_UsersNestedInput
    TB_UserRole?: TB_UserRoleUncheckedUpdateManyWithoutTB_UsersNestedInput
  }

  export type TB_UsersCreateManyInput = {
    UserID: string
    Email: string
    Password: string
    Phone: string
    FirstName: string
    LastName: string
    DateCreated?: Date | string | null
    DateModified?: Date | string | null
  }

  export type TB_UsersUpdateManyMutationInput = {
    UserID?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Phone?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    DateCreated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TB_UsersUncheckedUpdateManyInput = {
    UserID?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Phone?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    DateCreated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TBM_RoleCreateInput = {
    RoleID: string
    RoleName?: string | null
    TB_UserRole?: TB_UserRoleCreateNestedManyWithoutTBM_RoleInput
  }

  export type TBM_RoleUncheckedCreateInput = {
    RoleID: string
    RoleName?: string | null
    TB_UserRole?: TB_UserRoleUncheckedCreateNestedManyWithoutTBM_RoleInput
  }

  export type TBM_RoleUpdateInput = {
    RoleID?: StringFieldUpdateOperationsInput | string
    RoleName?: NullableStringFieldUpdateOperationsInput | string | null
    TB_UserRole?: TB_UserRoleUpdateManyWithoutTBM_RoleNestedInput
  }

  export type TBM_RoleUncheckedUpdateInput = {
    RoleID?: StringFieldUpdateOperationsInput | string
    RoleName?: NullableStringFieldUpdateOperationsInput | string | null
    TB_UserRole?: TB_UserRoleUncheckedUpdateManyWithoutTBM_RoleNestedInput
  }

  export type TBM_RoleCreateManyInput = {
    RoleID: string
    RoleName?: string | null
  }

  export type TBM_RoleUpdateManyMutationInput = {
    RoleID?: StringFieldUpdateOperationsInput | string
    RoleName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TBM_RoleUncheckedUpdateManyInput = {
    RoleID?: StringFieldUpdateOperationsInput | string
    RoleName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type TB_UsersNullableRelationFilter = {
    is?: TB_UsersWhereInput | null
    isNot?: TB_UsersWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TB_otpCountOrderByAggregateInput = {
    RefCode?: SortOrder
    UserID?: SortOrder
    Expire?: SortOrder
  }

  export type TB_otpAvgOrderByAggregateInput = {
    RefCode?: SortOrder
  }

  export type TB_otpMaxOrderByAggregateInput = {
    RefCode?: SortOrder
    UserID?: SortOrder
    Expire?: SortOrder
  }

  export type TB_otpMinOrderByAggregateInput = {
    RefCode?: SortOrder
    UserID?: SortOrder
    Expire?: SortOrder
  }

  export type TB_otpSumOrderByAggregateInput = {
    RefCode?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[] | null
    notIn?: string[] | null
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type TBM_RoleRelationFilter = {
    is?: TBM_RoleWhereInput
    isNot?: TBM_RoleWhereInput
  }

  export type TB_UsersRelationFilter = {
    is?: TB_UsersWhereInput
    isNot?: TB_UsersWhereInput
  }

  export type TB_UserRoleUserIDRoleIDCompoundUniqueInput = {
    UserID: string
    RoleID: string
  }

  export type TB_UserRoleCountOrderByAggregateInput = {
    UserID?: SortOrder
    RoleID?: SortOrder
  }

  export type TB_UserRoleMaxOrderByAggregateInput = {
    UserID?: SortOrder
    RoleID?: SortOrder
  }

  export type TB_UserRoleMinOrderByAggregateInput = {
    UserID?: SortOrder
    RoleID?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type TB_otpListRelationFilter = {
    every?: TB_otpWhereInput
    some?: TB_otpWhereInput
    none?: TB_otpWhereInput
  }

  export type TB_UserRoleListRelationFilter = {
    every?: TB_UserRoleWhereInput
    some?: TB_UserRoleWhereInput
    none?: TB_UserRoleWhereInput
  }

  export type TB_otpOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TB_UserRoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TB_UsersCountOrderByAggregateInput = {
    UserID?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    Phone?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    DateCreated?: SortOrder
    DateModified?: SortOrder
  }

  export type TB_UsersMaxOrderByAggregateInput = {
    UserID?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    Phone?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    DateCreated?: SortOrder
    DateModified?: SortOrder
  }

  export type TB_UsersMinOrderByAggregateInput = {
    UserID?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    Phone?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    DateCreated?: SortOrder
    DateModified?: SortOrder
  }

  export type TBM_RoleCountOrderByAggregateInput = {
    RoleID?: SortOrder
    RoleName?: SortOrder
  }

  export type TBM_RoleMaxOrderByAggregateInput = {
    RoleID?: SortOrder
    RoleName?: SortOrder
  }

  export type TBM_RoleMinOrderByAggregateInput = {
    RoleID?: SortOrder
    RoleName?: SortOrder
  }

  export type TB_UsersCreateNestedOneWithoutTB_otpInput = {
    create?: XOR<TB_UsersCreateWithoutTB_otpInput, TB_UsersUncheckedCreateWithoutTB_otpInput>
    connectOrCreate?: TB_UsersCreateOrConnectWithoutTB_otpInput
    connect?: TB_UsersWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TB_UsersUpdateOneWithoutTB_otpNestedInput = {
    create?: XOR<TB_UsersCreateWithoutTB_otpInput, TB_UsersUncheckedCreateWithoutTB_otpInput>
    connectOrCreate?: TB_UsersCreateOrConnectWithoutTB_otpInput
    upsert?: TB_UsersUpsertWithoutTB_otpInput
    disconnect?: TB_UsersWhereInput | boolean
    delete?: TB_UsersWhereInput | boolean
    connect?: TB_UsersWhereUniqueInput
    update?: XOR<XOR<TB_UsersUpdateToOneWithWhereWithoutTB_otpInput, TB_UsersUpdateWithoutTB_otpInput>, TB_UsersUncheckedUpdateWithoutTB_otpInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TBM_RoleCreateNestedOneWithoutTB_UserRoleInput = {
    create?: XOR<TBM_RoleCreateWithoutTB_UserRoleInput, TBM_RoleUncheckedCreateWithoutTB_UserRoleInput>
    connectOrCreate?: TBM_RoleCreateOrConnectWithoutTB_UserRoleInput
    connect?: TBM_RoleWhereUniqueInput
  }

  export type TB_UsersCreateNestedOneWithoutTB_UserRoleInput = {
    create?: XOR<TB_UsersCreateWithoutTB_UserRoleInput, TB_UsersUncheckedCreateWithoutTB_UserRoleInput>
    connectOrCreate?: TB_UsersCreateOrConnectWithoutTB_UserRoleInput
    connect?: TB_UsersWhereUniqueInput
  }

  export type TBM_RoleUpdateOneRequiredWithoutTB_UserRoleNestedInput = {
    create?: XOR<TBM_RoleCreateWithoutTB_UserRoleInput, TBM_RoleUncheckedCreateWithoutTB_UserRoleInput>
    connectOrCreate?: TBM_RoleCreateOrConnectWithoutTB_UserRoleInput
    upsert?: TBM_RoleUpsertWithoutTB_UserRoleInput
    connect?: TBM_RoleWhereUniqueInput
    update?: XOR<XOR<TBM_RoleUpdateToOneWithWhereWithoutTB_UserRoleInput, TBM_RoleUpdateWithoutTB_UserRoleInput>, TBM_RoleUncheckedUpdateWithoutTB_UserRoleInput>
  }

  export type TB_UsersUpdateOneRequiredWithoutTB_UserRoleNestedInput = {
    create?: XOR<TB_UsersCreateWithoutTB_UserRoleInput, TB_UsersUncheckedCreateWithoutTB_UserRoleInput>
    connectOrCreate?: TB_UsersCreateOrConnectWithoutTB_UserRoleInput
    upsert?: TB_UsersUpsertWithoutTB_UserRoleInput
    connect?: TB_UsersWhereUniqueInput
    update?: XOR<XOR<TB_UsersUpdateToOneWithWhereWithoutTB_UserRoleInput, TB_UsersUpdateWithoutTB_UserRoleInput>, TB_UsersUncheckedUpdateWithoutTB_UserRoleInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type TB_otpCreateNestedManyWithoutTB_UsersInput = {
    create?: XOR<TB_otpCreateWithoutTB_UsersInput, TB_otpUncheckedCreateWithoutTB_UsersInput> | TB_otpCreateWithoutTB_UsersInput[] | TB_otpUncheckedCreateWithoutTB_UsersInput[]
    connectOrCreate?: TB_otpCreateOrConnectWithoutTB_UsersInput | TB_otpCreateOrConnectWithoutTB_UsersInput[]
    createMany?: TB_otpCreateManyTB_UsersInputEnvelope
    connect?: TB_otpWhereUniqueInput | TB_otpWhereUniqueInput[]
  }

  export type TB_UserRoleCreateNestedManyWithoutTB_UsersInput = {
    create?: XOR<TB_UserRoleCreateWithoutTB_UsersInput, TB_UserRoleUncheckedCreateWithoutTB_UsersInput> | TB_UserRoleCreateWithoutTB_UsersInput[] | TB_UserRoleUncheckedCreateWithoutTB_UsersInput[]
    connectOrCreate?: TB_UserRoleCreateOrConnectWithoutTB_UsersInput | TB_UserRoleCreateOrConnectWithoutTB_UsersInput[]
    createMany?: TB_UserRoleCreateManyTB_UsersInputEnvelope
    connect?: TB_UserRoleWhereUniqueInput | TB_UserRoleWhereUniqueInput[]
  }

  export type TB_otpUncheckedCreateNestedManyWithoutTB_UsersInput = {
    create?: XOR<TB_otpCreateWithoutTB_UsersInput, TB_otpUncheckedCreateWithoutTB_UsersInput> | TB_otpCreateWithoutTB_UsersInput[] | TB_otpUncheckedCreateWithoutTB_UsersInput[]
    connectOrCreate?: TB_otpCreateOrConnectWithoutTB_UsersInput | TB_otpCreateOrConnectWithoutTB_UsersInput[]
    createMany?: TB_otpCreateManyTB_UsersInputEnvelope
    connect?: TB_otpWhereUniqueInput | TB_otpWhereUniqueInput[]
  }

  export type TB_UserRoleUncheckedCreateNestedManyWithoutTB_UsersInput = {
    create?: XOR<TB_UserRoleCreateWithoutTB_UsersInput, TB_UserRoleUncheckedCreateWithoutTB_UsersInput> | TB_UserRoleCreateWithoutTB_UsersInput[] | TB_UserRoleUncheckedCreateWithoutTB_UsersInput[]
    connectOrCreate?: TB_UserRoleCreateOrConnectWithoutTB_UsersInput | TB_UserRoleCreateOrConnectWithoutTB_UsersInput[]
    createMany?: TB_UserRoleCreateManyTB_UsersInputEnvelope
    connect?: TB_UserRoleWhereUniqueInput | TB_UserRoleWhereUniqueInput[]
  }

  export type TB_otpUpdateManyWithoutTB_UsersNestedInput = {
    create?: XOR<TB_otpCreateWithoutTB_UsersInput, TB_otpUncheckedCreateWithoutTB_UsersInput> | TB_otpCreateWithoutTB_UsersInput[] | TB_otpUncheckedCreateWithoutTB_UsersInput[]
    connectOrCreate?: TB_otpCreateOrConnectWithoutTB_UsersInput | TB_otpCreateOrConnectWithoutTB_UsersInput[]
    upsert?: TB_otpUpsertWithWhereUniqueWithoutTB_UsersInput | TB_otpUpsertWithWhereUniqueWithoutTB_UsersInput[]
    createMany?: TB_otpCreateManyTB_UsersInputEnvelope
    set?: TB_otpWhereUniqueInput | TB_otpWhereUniqueInput[]
    disconnect?: TB_otpWhereUniqueInput | TB_otpWhereUniqueInput[]
    delete?: TB_otpWhereUniqueInput | TB_otpWhereUniqueInput[]
    connect?: TB_otpWhereUniqueInput | TB_otpWhereUniqueInput[]
    update?: TB_otpUpdateWithWhereUniqueWithoutTB_UsersInput | TB_otpUpdateWithWhereUniqueWithoutTB_UsersInput[]
    updateMany?: TB_otpUpdateManyWithWhereWithoutTB_UsersInput | TB_otpUpdateManyWithWhereWithoutTB_UsersInput[]
    deleteMany?: TB_otpScalarWhereInput | TB_otpScalarWhereInput[]
  }

  export type TB_UserRoleUpdateManyWithoutTB_UsersNestedInput = {
    create?: XOR<TB_UserRoleCreateWithoutTB_UsersInput, TB_UserRoleUncheckedCreateWithoutTB_UsersInput> | TB_UserRoleCreateWithoutTB_UsersInput[] | TB_UserRoleUncheckedCreateWithoutTB_UsersInput[]
    connectOrCreate?: TB_UserRoleCreateOrConnectWithoutTB_UsersInput | TB_UserRoleCreateOrConnectWithoutTB_UsersInput[]
    upsert?: TB_UserRoleUpsertWithWhereUniqueWithoutTB_UsersInput | TB_UserRoleUpsertWithWhereUniqueWithoutTB_UsersInput[]
    createMany?: TB_UserRoleCreateManyTB_UsersInputEnvelope
    set?: TB_UserRoleWhereUniqueInput | TB_UserRoleWhereUniqueInput[]
    disconnect?: TB_UserRoleWhereUniqueInput | TB_UserRoleWhereUniqueInput[]
    delete?: TB_UserRoleWhereUniqueInput | TB_UserRoleWhereUniqueInput[]
    connect?: TB_UserRoleWhereUniqueInput | TB_UserRoleWhereUniqueInput[]
    update?: TB_UserRoleUpdateWithWhereUniqueWithoutTB_UsersInput | TB_UserRoleUpdateWithWhereUniqueWithoutTB_UsersInput[]
    updateMany?: TB_UserRoleUpdateManyWithWhereWithoutTB_UsersInput | TB_UserRoleUpdateManyWithWhereWithoutTB_UsersInput[]
    deleteMany?: TB_UserRoleScalarWhereInput | TB_UserRoleScalarWhereInput[]
  }

  export type TB_otpUncheckedUpdateManyWithoutTB_UsersNestedInput = {
    create?: XOR<TB_otpCreateWithoutTB_UsersInput, TB_otpUncheckedCreateWithoutTB_UsersInput> | TB_otpCreateWithoutTB_UsersInput[] | TB_otpUncheckedCreateWithoutTB_UsersInput[]
    connectOrCreate?: TB_otpCreateOrConnectWithoutTB_UsersInput | TB_otpCreateOrConnectWithoutTB_UsersInput[]
    upsert?: TB_otpUpsertWithWhereUniqueWithoutTB_UsersInput | TB_otpUpsertWithWhereUniqueWithoutTB_UsersInput[]
    createMany?: TB_otpCreateManyTB_UsersInputEnvelope
    set?: TB_otpWhereUniqueInput | TB_otpWhereUniqueInput[]
    disconnect?: TB_otpWhereUniqueInput | TB_otpWhereUniqueInput[]
    delete?: TB_otpWhereUniqueInput | TB_otpWhereUniqueInput[]
    connect?: TB_otpWhereUniqueInput | TB_otpWhereUniqueInput[]
    update?: TB_otpUpdateWithWhereUniqueWithoutTB_UsersInput | TB_otpUpdateWithWhereUniqueWithoutTB_UsersInput[]
    updateMany?: TB_otpUpdateManyWithWhereWithoutTB_UsersInput | TB_otpUpdateManyWithWhereWithoutTB_UsersInput[]
    deleteMany?: TB_otpScalarWhereInput | TB_otpScalarWhereInput[]
  }

  export type TB_UserRoleUncheckedUpdateManyWithoutTB_UsersNestedInput = {
    create?: XOR<TB_UserRoleCreateWithoutTB_UsersInput, TB_UserRoleUncheckedCreateWithoutTB_UsersInput> | TB_UserRoleCreateWithoutTB_UsersInput[] | TB_UserRoleUncheckedCreateWithoutTB_UsersInput[]
    connectOrCreate?: TB_UserRoleCreateOrConnectWithoutTB_UsersInput | TB_UserRoleCreateOrConnectWithoutTB_UsersInput[]
    upsert?: TB_UserRoleUpsertWithWhereUniqueWithoutTB_UsersInput | TB_UserRoleUpsertWithWhereUniqueWithoutTB_UsersInput[]
    createMany?: TB_UserRoleCreateManyTB_UsersInputEnvelope
    set?: TB_UserRoleWhereUniqueInput | TB_UserRoleWhereUniqueInput[]
    disconnect?: TB_UserRoleWhereUniqueInput | TB_UserRoleWhereUniqueInput[]
    delete?: TB_UserRoleWhereUniqueInput | TB_UserRoleWhereUniqueInput[]
    connect?: TB_UserRoleWhereUniqueInput | TB_UserRoleWhereUniqueInput[]
    update?: TB_UserRoleUpdateWithWhereUniqueWithoutTB_UsersInput | TB_UserRoleUpdateWithWhereUniqueWithoutTB_UsersInput[]
    updateMany?: TB_UserRoleUpdateManyWithWhereWithoutTB_UsersInput | TB_UserRoleUpdateManyWithWhereWithoutTB_UsersInput[]
    deleteMany?: TB_UserRoleScalarWhereInput | TB_UserRoleScalarWhereInput[]
  }

  export type TB_UserRoleCreateNestedManyWithoutTBM_RoleInput = {
    create?: XOR<TB_UserRoleCreateWithoutTBM_RoleInput, TB_UserRoleUncheckedCreateWithoutTBM_RoleInput> | TB_UserRoleCreateWithoutTBM_RoleInput[] | TB_UserRoleUncheckedCreateWithoutTBM_RoleInput[]
    connectOrCreate?: TB_UserRoleCreateOrConnectWithoutTBM_RoleInput | TB_UserRoleCreateOrConnectWithoutTBM_RoleInput[]
    createMany?: TB_UserRoleCreateManyTBM_RoleInputEnvelope
    connect?: TB_UserRoleWhereUniqueInput | TB_UserRoleWhereUniqueInput[]
  }

  export type TB_UserRoleUncheckedCreateNestedManyWithoutTBM_RoleInput = {
    create?: XOR<TB_UserRoleCreateWithoutTBM_RoleInput, TB_UserRoleUncheckedCreateWithoutTBM_RoleInput> | TB_UserRoleCreateWithoutTBM_RoleInput[] | TB_UserRoleUncheckedCreateWithoutTBM_RoleInput[]
    connectOrCreate?: TB_UserRoleCreateOrConnectWithoutTBM_RoleInput | TB_UserRoleCreateOrConnectWithoutTBM_RoleInput[]
    createMany?: TB_UserRoleCreateManyTBM_RoleInputEnvelope
    connect?: TB_UserRoleWhereUniqueInput | TB_UserRoleWhereUniqueInput[]
  }

  export type TB_UserRoleUpdateManyWithoutTBM_RoleNestedInput = {
    create?: XOR<TB_UserRoleCreateWithoutTBM_RoleInput, TB_UserRoleUncheckedCreateWithoutTBM_RoleInput> | TB_UserRoleCreateWithoutTBM_RoleInput[] | TB_UserRoleUncheckedCreateWithoutTBM_RoleInput[]
    connectOrCreate?: TB_UserRoleCreateOrConnectWithoutTBM_RoleInput | TB_UserRoleCreateOrConnectWithoutTBM_RoleInput[]
    upsert?: TB_UserRoleUpsertWithWhereUniqueWithoutTBM_RoleInput | TB_UserRoleUpsertWithWhereUniqueWithoutTBM_RoleInput[]
    createMany?: TB_UserRoleCreateManyTBM_RoleInputEnvelope
    set?: TB_UserRoleWhereUniqueInput | TB_UserRoleWhereUniqueInput[]
    disconnect?: TB_UserRoleWhereUniqueInput | TB_UserRoleWhereUniqueInput[]
    delete?: TB_UserRoleWhereUniqueInput | TB_UserRoleWhereUniqueInput[]
    connect?: TB_UserRoleWhereUniqueInput | TB_UserRoleWhereUniqueInput[]
    update?: TB_UserRoleUpdateWithWhereUniqueWithoutTBM_RoleInput | TB_UserRoleUpdateWithWhereUniqueWithoutTBM_RoleInput[]
    updateMany?: TB_UserRoleUpdateManyWithWhereWithoutTBM_RoleInput | TB_UserRoleUpdateManyWithWhereWithoutTBM_RoleInput[]
    deleteMany?: TB_UserRoleScalarWhereInput | TB_UserRoleScalarWhereInput[]
  }

  export type TB_UserRoleUncheckedUpdateManyWithoutTBM_RoleNestedInput = {
    create?: XOR<TB_UserRoleCreateWithoutTBM_RoleInput, TB_UserRoleUncheckedCreateWithoutTBM_RoleInput> | TB_UserRoleCreateWithoutTBM_RoleInput[] | TB_UserRoleUncheckedCreateWithoutTBM_RoleInput[]
    connectOrCreate?: TB_UserRoleCreateOrConnectWithoutTBM_RoleInput | TB_UserRoleCreateOrConnectWithoutTBM_RoleInput[]
    upsert?: TB_UserRoleUpsertWithWhereUniqueWithoutTBM_RoleInput | TB_UserRoleUpsertWithWhereUniqueWithoutTBM_RoleInput[]
    createMany?: TB_UserRoleCreateManyTBM_RoleInputEnvelope
    set?: TB_UserRoleWhereUniqueInput | TB_UserRoleWhereUniqueInput[]
    disconnect?: TB_UserRoleWhereUniqueInput | TB_UserRoleWhereUniqueInput[]
    delete?: TB_UserRoleWhereUniqueInput | TB_UserRoleWhereUniqueInput[]
    connect?: TB_UserRoleWhereUniqueInput | TB_UserRoleWhereUniqueInput[]
    update?: TB_UserRoleUpdateWithWhereUniqueWithoutTBM_RoleInput | TB_UserRoleUpdateWithWhereUniqueWithoutTBM_RoleInput[]
    updateMany?: TB_UserRoleUpdateManyWithWhereWithoutTBM_RoleInput | TB_UserRoleUpdateManyWithWhereWithoutTBM_RoleInput[]
    deleteMany?: TB_UserRoleScalarWhereInput | TB_UserRoleScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type TB_UsersCreateWithoutTB_otpInput = {
    UserID: string
    Email: string
    Password: string
    Phone: string
    FirstName: string
    LastName: string
    DateCreated?: Date | string | null
    DateModified?: Date | string | null
    TB_UserRole?: TB_UserRoleCreateNestedManyWithoutTB_UsersInput
  }

  export type TB_UsersUncheckedCreateWithoutTB_otpInput = {
    UserID: string
    Email: string
    Password: string
    Phone: string
    FirstName: string
    LastName: string
    DateCreated?: Date | string | null
    DateModified?: Date | string | null
    TB_UserRole?: TB_UserRoleUncheckedCreateNestedManyWithoutTB_UsersInput
  }

  export type TB_UsersCreateOrConnectWithoutTB_otpInput = {
    where: TB_UsersWhereUniqueInput
    create: XOR<TB_UsersCreateWithoutTB_otpInput, TB_UsersUncheckedCreateWithoutTB_otpInput>
  }

  export type TB_UsersUpsertWithoutTB_otpInput = {
    update: XOR<TB_UsersUpdateWithoutTB_otpInput, TB_UsersUncheckedUpdateWithoutTB_otpInput>
    create: XOR<TB_UsersCreateWithoutTB_otpInput, TB_UsersUncheckedCreateWithoutTB_otpInput>
    where?: TB_UsersWhereInput
  }

  export type TB_UsersUpdateToOneWithWhereWithoutTB_otpInput = {
    where?: TB_UsersWhereInput
    data: XOR<TB_UsersUpdateWithoutTB_otpInput, TB_UsersUncheckedUpdateWithoutTB_otpInput>
  }

  export type TB_UsersUpdateWithoutTB_otpInput = {
    UserID?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Phone?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    DateCreated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TB_UserRole?: TB_UserRoleUpdateManyWithoutTB_UsersNestedInput
  }

  export type TB_UsersUncheckedUpdateWithoutTB_otpInput = {
    UserID?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Phone?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    DateCreated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TB_UserRole?: TB_UserRoleUncheckedUpdateManyWithoutTB_UsersNestedInput
  }

  export type TBM_RoleCreateWithoutTB_UserRoleInput = {
    RoleID: string
    RoleName?: string | null
  }

  export type TBM_RoleUncheckedCreateWithoutTB_UserRoleInput = {
    RoleID: string
    RoleName?: string | null
  }

  export type TBM_RoleCreateOrConnectWithoutTB_UserRoleInput = {
    where: TBM_RoleWhereUniqueInput
    create: XOR<TBM_RoleCreateWithoutTB_UserRoleInput, TBM_RoleUncheckedCreateWithoutTB_UserRoleInput>
  }

  export type TB_UsersCreateWithoutTB_UserRoleInput = {
    UserID: string
    Email: string
    Password: string
    Phone: string
    FirstName: string
    LastName: string
    DateCreated?: Date | string | null
    DateModified?: Date | string | null
    TB_otp?: TB_otpCreateNestedManyWithoutTB_UsersInput
  }

  export type TB_UsersUncheckedCreateWithoutTB_UserRoleInput = {
    UserID: string
    Email: string
    Password: string
    Phone: string
    FirstName: string
    LastName: string
    DateCreated?: Date | string | null
    DateModified?: Date | string | null
    TB_otp?: TB_otpUncheckedCreateNestedManyWithoutTB_UsersInput
  }

  export type TB_UsersCreateOrConnectWithoutTB_UserRoleInput = {
    where: TB_UsersWhereUniqueInput
    create: XOR<TB_UsersCreateWithoutTB_UserRoleInput, TB_UsersUncheckedCreateWithoutTB_UserRoleInput>
  }

  export type TBM_RoleUpsertWithoutTB_UserRoleInput = {
    update: XOR<TBM_RoleUpdateWithoutTB_UserRoleInput, TBM_RoleUncheckedUpdateWithoutTB_UserRoleInput>
    create: XOR<TBM_RoleCreateWithoutTB_UserRoleInput, TBM_RoleUncheckedCreateWithoutTB_UserRoleInput>
    where?: TBM_RoleWhereInput
  }

  export type TBM_RoleUpdateToOneWithWhereWithoutTB_UserRoleInput = {
    where?: TBM_RoleWhereInput
    data: XOR<TBM_RoleUpdateWithoutTB_UserRoleInput, TBM_RoleUncheckedUpdateWithoutTB_UserRoleInput>
  }

  export type TBM_RoleUpdateWithoutTB_UserRoleInput = {
    RoleID?: StringFieldUpdateOperationsInput | string
    RoleName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TBM_RoleUncheckedUpdateWithoutTB_UserRoleInput = {
    RoleID?: StringFieldUpdateOperationsInput | string
    RoleName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TB_UsersUpsertWithoutTB_UserRoleInput = {
    update: XOR<TB_UsersUpdateWithoutTB_UserRoleInput, TB_UsersUncheckedUpdateWithoutTB_UserRoleInput>
    create: XOR<TB_UsersCreateWithoutTB_UserRoleInput, TB_UsersUncheckedCreateWithoutTB_UserRoleInput>
    where?: TB_UsersWhereInput
  }

  export type TB_UsersUpdateToOneWithWhereWithoutTB_UserRoleInput = {
    where?: TB_UsersWhereInput
    data: XOR<TB_UsersUpdateWithoutTB_UserRoleInput, TB_UsersUncheckedUpdateWithoutTB_UserRoleInput>
  }

  export type TB_UsersUpdateWithoutTB_UserRoleInput = {
    UserID?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Phone?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    DateCreated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TB_otp?: TB_otpUpdateManyWithoutTB_UsersNestedInput
  }

  export type TB_UsersUncheckedUpdateWithoutTB_UserRoleInput = {
    UserID?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Phone?: StringFieldUpdateOperationsInput | string
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    DateCreated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TB_otp?: TB_otpUncheckedUpdateManyWithoutTB_UsersNestedInput
  }

  export type TB_otpCreateWithoutTB_UsersInput = {
    RefCode: number
    Expire?: Date | string | null
  }

  export type TB_otpUncheckedCreateWithoutTB_UsersInput = {
    RefCode: number
    Expire?: Date | string | null
  }

  export type TB_otpCreateOrConnectWithoutTB_UsersInput = {
    where: TB_otpWhereUniqueInput
    create: XOR<TB_otpCreateWithoutTB_UsersInput, TB_otpUncheckedCreateWithoutTB_UsersInput>
  }

  export type TB_otpCreateManyTB_UsersInputEnvelope = {
    data: TB_otpCreateManyTB_UsersInput | TB_otpCreateManyTB_UsersInput[]
  }

  export type TB_UserRoleCreateWithoutTB_UsersInput = {
    TBM_Role: TBM_RoleCreateNestedOneWithoutTB_UserRoleInput
  }

  export type TB_UserRoleUncheckedCreateWithoutTB_UsersInput = {
    RoleID: string
  }

  export type TB_UserRoleCreateOrConnectWithoutTB_UsersInput = {
    where: TB_UserRoleWhereUniqueInput
    create: XOR<TB_UserRoleCreateWithoutTB_UsersInput, TB_UserRoleUncheckedCreateWithoutTB_UsersInput>
  }

  export type TB_UserRoleCreateManyTB_UsersInputEnvelope = {
    data: TB_UserRoleCreateManyTB_UsersInput | TB_UserRoleCreateManyTB_UsersInput[]
  }

  export type TB_otpUpsertWithWhereUniqueWithoutTB_UsersInput = {
    where: TB_otpWhereUniqueInput
    update: XOR<TB_otpUpdateWithoutTB_UsersInput, TB_otpUncheckedUpdateWithoutTB_UsersInput>
    create: XOR<TB_otpCreateWithoutTB_UsersInput, TB_otpUncheckedCreateWithoutTB_UsersInput>
  }

  export type TB_otpUpdateWithWhereUniqueWithoutTB_UsersInput = {
    where: TB_otpWhereUniqueInput
    data: XOR<TB_otpUpdateWithoutTB_UsersInput, TB_otpUncheckedUpdateWithoutTB_UsersInput>
  }

  export type TB_otpUpdateManyWithWhereWithoutTB_UsersInput = {
    where: TB_otpScalarWhereInput
    data: XOR<TB_otpUpdateManyMutationInput, TB_otpUncheckedUpdateManyWithoutTB_UsersInput>
  }

  export type TB_otpScalarWhereInput = {
    AND?: TB_otpScalarWhereInput | TB_otpScalarWhereInput[]
    OR?: TB_otpScalarWhereInput[]
    NOT?: TB_otpScalarWhereInput | TB_otpScalarWhereInput[]
    RefCode?: IntFilter<"TB_otp"> | number
    UserID?: StringNullableFilter<"TB_otp"> | string | null
    Expire?: DateTimeNullableFilter<"TB_otp"> | Date | string | null
  }

  export type TB_UserRoleUpsertWithWhereUniqueWithoutTB_UsersInput = {
    where: TB_UserRoleWhereUniqueInput
    update: XOR<TB_UserRoleUpdateWithoutTB_UsersInput, TB_UserRoleUncheckedUpdateWithoutTB_UsersInput>
    create: XOR<TB_UserRoleCreateWithoutTB_UsersInput, TB_UserRoleUncheckedCreateWithoutTB_UsersInput>
  }

  export type TB_UserRoleUpdateWithWhereUniqueWithoutTB_UsersInput = {
    where: TB_UserRoleWhereUniqueInput
    data: XOR<TB_UserRoleUpdateWithoutTB_UsersInput, TB_UserRoleUncheckedUpdateWithoutTB_UsersInput>
  }

  export type TB_UserRoleUpdateManyWithWhereWithoutTB_UsersInput = {
    where: TB_UserRoleScalarWhereInput
    data: XOR<TB_UserRoleUpdateManyMutationInput, TB_UserRoleUncheckedUpdateManyWithoutTB_UsersInput>
  }

  export type TB_UserRoleScalarWhereInput = {
    AND?: TB_UserRoleScalarWhereInput | TB_UserRoleScalarWhereInput[]
    OR?: TB_UserRoleScalarWhereInput[]
    NOT?: TB_UserRoleScalarWhereInput | TB_UserRoleScalarWhereInput[]
    UserID?: StringFilter<"TB_UserRole"> | string
    RoleID?: StringFilter<"TB_UserRole"> | string
  }

  export type TB_UserRoleCreateWithoutTBM_RoleInput = {
    TB_Users: TB_UsersCreateNestedOneWithoutTB_UserRoleInput
  }

  export type TB_UserRoleUncheckedCreateWithoutTBM_RoleInput = {
    UserID: string
  }

  export type TB_UserRoleCreateOrConnectWithoutTBM_RoleInput = {
    where: TB_UserRoleWhereUniqueInput
    create: XOR<TB_UserRoleCreateWithoutTBM_RoleInput, TB_UserRoleUncheckedCreateWithoutTBM_RoleInput>
  }

  export type TB_UserRoleCreateManyTBM_RoleInputEnvelope = {
    data: TB_UserRoleCreateManyTBM_RoleInput | TB_UserRoleCreateManyTBM_RoleInput[]
  }

  export type TB_UserRoleUpsertWithWhereUniqueWithoutTBM_RoleInput = {
    where: TB_UserRoleWhereUniqueInput
    update: XOR<TB_UserRoleUpdateWithoutTBM_RoleInput, TB_UserRoleUncheckedUpdateWithoutTBM_RoleInput>
    create: XOR<TB_UserRoleCreateWithoutTBM_RoleInput, TB_UserRoleUncheckedCreateWithoutTBM_RoleInput>
  }

  export type TB_UserRoleUpdateWithWhereUniqueWithoutTBM_RoleInput = {
    where: TB_UserRoleWhereUniqueInput
    data: XOR<TB_UserRoleUpdateWithoutTBM_RoleInput, TB_UserRoleUncheckedUpdateWithoutTBM_RoleInput>
  }

  export type TB_UserRoleUpdateManyWithWhereWithoutTBM_RoleInput = {
    where: TB_UserRoleScalarWhereInput
    data: XOR<TB_UserRoleUpdateManyMutationInput, TB_UserRoleUncheckedUpdateManyWithoutTBM_RoleInput>
  }

  export type TB_otpCreateManyTB_UsersInput = {
    RefCode: number
    Expire?: Date | string | null
  }

  export type TB_UserRoleCreateManyTB_UsersInput = {
    RoleID: string
  }

  export type TB_otpUpdateWithoutTB_UsersInput = {
    RefCode?: IntFieldUpdateOperationsInput | number
    Expire?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TB_otpUncheckedUpdateWithoutTB_UsersInput = {
    RefCode?: IntFieldUpdateOperationsInput | number
    Expire?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TB_otpUncheckedUpdateManyWithoutTB_UsersInput = {
    RefCode?: IntFieldUpdateOperationsInput | number
    Expire?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TB_UserRoleUpdateWithoutTB_UsersInput = {
    TBM_Role?: TBM_RoleUpdateOneRequiredWithoutTB_UserRoleNestedInput
  }

  export type TB_UserRoleUncheckedUpdateWithoutTB_UsersInput = {
    RoleID?: StringFieldUpdateOperationsInput | string
  }

  export type TB_UserRoleUncheckedUpdateManyWithoutTB_UsersInput = {
    RoleID?: StringFieldUpdateOperationsInput | string
  }

  export type TB_UserRoleCreateManyTBM_RoleInput = {
    UserID: string
  }

  export type TB_UserRoleUpdateWithoutTBM_RoleInput = {
    TB_Users?: TB_UsersUpdateOneRequiredWithoutTB_UserRoleNestedInput
  }

  export type TB_UserRoleUncheckedUpdateWithoutTBM_RoleInput = {
    UserID?: StringFieldUpdateOperationsInput | string
  }

  export type TB_UserRoleUncheckedUpdateManyWithoutTBM_RoleInput = {
    UserID?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use TB_UsersCountOutputTypeDefaultArgs instead
     */
    export type TB_UsersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TB_UsersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TBM_RoleCountOutputTypeDefaultArgs instead
     */
    export type TBM_RoleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TBM_RoleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TB_otpDefaultArgs instead
     */
    export type TB_otpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TB_otpDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TB_UserRoleDefaultArgs instead
     */
    export type TB_UserRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TB_UserRoleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TB_UsersDefaultArgs instead
     */
    export type TB_UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TB_UsersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TBM_RoleDefaultArgs instead
     */
    export type TBM_RoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TBM_RoleDefaultArgs<ExtArgs>

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