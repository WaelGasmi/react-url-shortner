import app from "./app";
import { connectDb } from "./db/connectDb";

const startServer = async () => {
  console.clear();
  await connectDb();
  app
    .listen(process.env.PORT, () => {
      console.log(`Server is running at ${process.env.PORT}`);
    })
    .on("error", (err) => {
      console.log(`Server failed ${err}`);
    });
};

startServer();
