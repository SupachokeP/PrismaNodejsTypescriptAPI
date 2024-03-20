import { app } from "./server";

const start = async () => {
  const port = process.env.PORT;
  app.listen(port || 8800, () => {
    console.log(`App is listening on port ${port}!`);
  });
};

start();
