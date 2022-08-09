import * as dotenv from "dotenv"
import {AddressInfo} from "net";
import * as express from "express"
import * as cors from "cors";
import { userRouter } from "./router/userRouter";

dotenv.config();
const app = express();

app.use(express.json());

app.use(cors());

app.use("/", userRouter);

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Servidor rodando em http://localhost:${address.port}`);
    } else {
      console.error(`Falha ao rodar o servidor.`);
    }
});
