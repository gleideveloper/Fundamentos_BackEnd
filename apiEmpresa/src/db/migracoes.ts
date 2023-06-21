export interface MigracaoDB {
  consultas?: Array<{ model: string; query: string }>;
}

const migracoes: Map<number, MigracaoDB> = new Map<number, MigracaoDB>();

migracoes.set(1, {
  consultas: [
    {
      model: "Dependente",
      query: `ALTER TABLE Dependentes ADD telefone VARCHAR(45);`,
    },
  ],
});

migracoes.set(2, {
  consultas: [
    {
      model: "Dependente",
      query: `ALTER TABLE Dependentes ADD telefone VARCHAR(45) NOT NULL DEFAULT "";`,
    },
  ],
});

export { migracoes };
