import express from "express";
import router from "./router/Router";
import { Funcionario } from "./models/Funcionario";
import { VersaoDB } from "./models/VersaoDB";
import { Departamento } from "./models/Departamento";
import { Projeto } from "./models/Projeto";
import { Dependente } from "./models/Dependente";
import { api } from "./api.info";
import { error } from "console";
import connection from "./db/config";
import { migracoes, MigracaoDB } from "./db/migracoes";

const models = [VersaoDB, Funcionario, Departamento, Projeto, Dependente];

export class Api {
  public server: express.Application;

  constructor() {
    this.server = express();
  }

  async bootstrap(): Promise<Api> {
    try {
      await this.middleware();
      await this.router();
      await this.initModels();
      await this.migrations();
    } catch (err) {
      console.error(err);
    }

    return this;
  }

  private middleware() {
    this.server.use(express.json());
  }

  private async router() {
    this.server.use(router);

    try {
      this.server.listen(api.defaultPort);
    } catch (err) {
      console.error(err);
      throw error;
    }
  }

  private async initModels() {
    await connection
      .authenticate()
      .then(async () => {
        console.info("MySQL DB Conectado!");
        await connection.addModels(models);
        await connection.sync();
      })
      .then(() => {
        console.info("DB sync!");
      })
      .catch((err) => {
        console.error(err);
        throw error;
      });
  }

  private async migrations() {
    const versaoAtualBanco = await VersaoDB.findByPk(api.db.id);

    const numeroVersaoAtualBanco = versaoAtualBanco == null ? 0 : versaoAtualBanco.numeroVersao;

    console.info("VERSAO DO BANCO API-EMPRESA: " + numeroVersaoAtualBanco);
    if (numeroVersaoAtualBanco < api.db.dbVersion) {
      console.info(migracoes);
      const models: string[] = [];

      for (let i = numeroVersaoAtualBanco; i < api.db.dbVersion; i++) {
        const migracao: MigracaoDB | undefined = migracoes.get(i + 1);

        if (migracao && migracao.consultas) {
          if (migracao.consultas !== null) {
            for (const consulta of migracao.consultas) {
              console.info("executando: " + consulta.query);
              if (models.indexOf(consulta.model) < 0) {
                await connection.query(consulta.query);
                console.info("  executed!");
              } else {
                console.info("  not executed: new model.");
              }
            }
          }
        }
      }

      if (versaoAtualBanco == null) {
        await VersaoDB.create({ id: api.db.id, numeroVersao: api.db.dbVersion });
      } else {
        versaoAtualBanco.numeroVersao = api.db.dbVersion;
        await versaoAtualBanco.save();
      }
    }

    await connection
      .sync()
      .then(() => {
        console.info("Models sync!");
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
