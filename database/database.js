import dotenv from "dotenv";
import path from "path";
import Sequelize from "sequelize";
import fileURLToPath from "url";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
dotenv.config({ path: path.join(dirname, "../.env") });

const { DB_NAME, DB_PASS, DB_HOST, DB_USER } = process.env;
const sequelize = new Sequelize(DB_NAME, DB_PASS, DB_USER, {
  host: DB_HOST,
  dialect: "mysql",
  logging: console.log,
});

try {
  await sequelize.authenticate();
  console.log("connection has been established successfully");
} catch (error) {
  console.log("Unable to connect to the database:", error);
}

export default sequelize;
