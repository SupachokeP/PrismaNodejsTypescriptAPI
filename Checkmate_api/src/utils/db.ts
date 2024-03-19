import { PrismaClient as PrismaClient} from "../prisma/generated/prisma-client/index";

export const db = new PrismaClient({
  datasources : {
    db:{
      url : process.env.CONNECTIONSTRING
    }
  }
})