import { Api } from "./server";
import { api } from "./api-info";

const server = new Api();
try {
  server.bootstrap().then((server) => {
    console.info(`API Empresa rodando na porta ${api.defaultPort}`);
  });
} catch (error) {
  console.error("Server failed to start.");
  console.error(error);
  process.exit(1);
}
