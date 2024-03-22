import sql, { ConnectionPool } from "mssql";

let connection: ConnectionPool | null = null;

export const sqlConnection = async () => {
  if (!connection) {
    const sqlConfig = {
      user: "dev2",
      password: "1234",
      database: "Checkmate_dev",
      server: "localhost",
      pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000,
      },
      options: {
        trustServerCertificate: true,
      },
    };
    connection = await sql.connect(sqlConfig);
  }

  return connection;
};

export const sqlTransaction = async () => {
  const connection = await sqlConnection();
  const transaction = new sql.Transaction(connection);
  return transaction;
};
