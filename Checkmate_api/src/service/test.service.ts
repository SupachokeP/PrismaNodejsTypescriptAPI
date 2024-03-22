import { Request } from "mssql";

export const deleteBeforeTest = async (table: string, pool: Request) => {
  pool.input("table", table);

  try {
    console.log(table);
    const deleteData = `DELETE FROM ${table}`;
    const isSuccess = await pool.query(deleteData);

    return isSuccess;
  } catch (error) {
    console.log("Delete data from table error:", error);
    return error;
  }
};
