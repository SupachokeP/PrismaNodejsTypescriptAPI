
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.11.0
 * Query Engine version: efd2449663b3d73d637ea1fd226bafbcf45b3102
 */
Prisma.prismaVersion = {
  client: "5.11.0",
  engine: "efd2449663b3d73d637ea1fd226bafbcf45b3102"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable',
  Snapshot: 'Snapshot'
});

exports.Prisma.TB_otpScalarFieldEnum = {
  RefCode: 'RefCode',
  UserID: 'UserID',
  Expire: 'Expire'
};

exports.Prisma.TB_UserRoleScalarFieldEnum = {
  UserID: 'UserID',
  RoleID: 'RoleID'
};

exports.Prisma.TB_UsersScalarFieldEnum = {
  UserID: 'UserID',
  Email: 'Email',
  Password: 'Password',
  Phone: 'Phone',
  FirstName: 'FirstName',
  LastName: 'LastName',
  DateCreated: 'DateCreated',
  DateModified: 'DateModified'
};

exports.Prisma.TBM_RoleScalarFieldEnum = {
  RoleID: 'RoleID',
  RoleName: 'RoleName'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  TB_otp: 'TB_otp',
  TB_UserRole: 'TB_UserRole',
  TB_Users: 'TB_Users',
  TBM_Role: 'TBM_Role'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\idtim\\Desktop\\Coding\\PrismaNodejsTypescriptAPI\\Checkmate_api\\src\\prisma\\generated\\prisma-client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      },
      {
        "fromEnvVar": null,
        "value": "rhel-openssl-1.0.x"
      }
    ],
    "previewFeatures": [
      "filterJson",
      "fullTextIndex",
      "fullTextSearch",
      "relationJoins"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.11.0",
  "engineVersion": "efd2449663b3d73d637ea1fd226bafbcf45b3102",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "sqlserver",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "CONNECTIONSTRING",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider        = \"prisma-client-js\"\n  output          = \"./generated/prisma-client\"\n  previewFeatures = [\"filterJson\", \"fullTextIndex\", \"fullTextSearch\", \"relationJoins\"]\n  binaryTargets   = [\"native\", \"rhel-openssl-1.0.x\"]\n}\n\ndatasource db {\n  provider = \"sqlserver\"\n  url      = env(\"CONNECTIONSTRING\")\n}\n\nmodel TB_otp {\n  RefCode  Int       @id(map: \"PK__TB_otp__1C4F52A667378910\")\n  UserID   String?   @db.VarChar(50)\n  Expire   DateTime?\n  TB_Users TB_Users? @relation(fields: [UserID], references: [UserID], onDelete: NoAction, onUpdate: NoAction, map: \"FK__TB_otp__UserID__412EB0B6\")\n}\n\nmodel TB_UserRole {\n  UserID   String   @db.VarChar(50)\n  RoleID   String   @db.VarChar(50)\n  TBM_Role TBM_Role @relation(fields: [RoleID], references: [RoleID], onUpdate: NoAction, map: \"FK__TB_UserRo__RoleI__3E52440B\")\n  TB_Users TB_Users @relation(fields: [UserID], references: [UserID], onUpdate: NoAction, map: \"FK__TB_UserRo__UserI__3D5E1FD2\")\n\n  @@id([UserID, RoleID], map: \"PK__TB_UserR__AF27604FA880CB92\")\n}\n\nmodel TB_Users {\n  UserID       String        @id(map: \"PK__TB_Users__1788CCAC84A64C1B\") @db.VarChar(50)\n  Email        String        @unique(map: \"UQ__TB_Users__A9D10534EED850F3\") @db.VarChar(100)\n  Password     String        @db.NVarChar(100)\n  Phone        String        @db.VarChar(10)\n  FirstName    String        @db.VarChar(50)\n  LastName     String        @db.VarChar(50)\n  DateCreated  DateTime?\n  DateModified DateTime?\n  TB_otp       TB_otp[]\n  TB_UserRole  TB_UserRole[]\n}\n\nmodel TBM_Role {\n  RoleID      String        @id(map: \"PK__TBM_Role__8AFACE3A5F13C123\") @db.VarChar(50)\n  RoleName    String?       @unique(map: \"UQ__TBM_Role__8A2B6160CEBC4FD1\") @db.VarChar(50)\n  TB_UserRole TB_UserRole[]\n}\n",
  "inlineSchemaHash": "e21225bc8121156d9badabe86405928c263396a629779a4b8adfaace0a8b6fc1",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"TB_otp\":{\"dbName\":null,\"fields\":[{\"name\":\"RefCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UserID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Expire\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TB_Users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TB_Users\",\"relationName\":\"TB_UsersToTB_otp\",\"relationFromFields\":[\"UserID\"],\"relationToFields\":[\"UserID\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TB_UserRole\":{\"dbName\":null,\"fields\":[{\"name\":\"UserID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RoleID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TBM_Role\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TBM_Role\",\"relationName\":\"TBM_RoleToTB_UserRole\",\"relationFromFields\":[\"RoleID\"],\"relationToFields\":[\"RoleID\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TB_Users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TB_Users\",\"relationName\":\"TB_UserRoleToTB_Users\",\"relationFromFields\":[\"UserID\"],\"relationToFields\":[\"UserID\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"UserID\",\"RoleID\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TB_Users\":{\"dbName\":null,\"fields\":[{\"name\":\"UserID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FirstName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LastName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DateCreated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DateModified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TB_otp\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TB_otp\",\"relationName\":\"TB_UsersToTB_otp\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TB_UserRole\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TB_UserRole\",\"relationName\":\"TB_UserRoleToTB_Users\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TBM_Role\":{\"dbName\":null,\"fields\":[{\"name\":\"RoleID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RoleName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TB_UserRole\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TB_UserRole\",\"relationName\":\"TBM_RoleToTB_UserRole\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    CONNECTIONSTRING: typeof globalThis !== 'undefined' && globalThis['CONNECTIONSTRING'] || typeof process !== 'undefined' && process.env && process.env.CONNECTIONSTRING || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

