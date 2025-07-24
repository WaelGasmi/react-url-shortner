import app from "./app";
import { PORT } from "./config";
import { connectDb } from "./db/connectDb";

const startServer = async () => {
  console.clear();
  await connectDb();
  app
    .listen(PORT, () => {
      console.log(`Server is running at ${PORT}`);
    })
    .on("error", (err) => {
      console.log(`Server failed ${err}`);
    });
};

startServer();
