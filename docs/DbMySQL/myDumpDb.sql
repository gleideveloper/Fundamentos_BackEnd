-- MyDatabase.projetos definition

CREATE TABLE `projetos` (
  `idprojetos` int NOT NULL,
  `data_criacao` datetime NOT NULL,
  `prazo` datetime NOT NULL,
  PRIMARY KEY (`idprojetos`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyDatabase.departamentos definition

CREATE TABLE `departamentos` (
  `iddepartamentos` int NOT NULL,
  `nome` varchar(45) NOT NULL,
  `sigla` varchar(45) NOT NULL,
  `projetos_idprojetos` int NOT NULL,
  PRIMARY KEY (`iddepartamentos`),
  KEY `fk_departamentos_projetos1_idx` (`projetos_idprojetos`),
  CONSTRAINT `fk_departamentos_projetos1` FOREIGN KEY (`projetos_idprojetos`) REFERENCES `projetos` (`idprojetos`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyDatabase.funcionarios definition

CREATE TABLE `funcionarios` (
  `matricula` int NOT NULL,
  `nome` varchar(45) NOT NULL,
  `endereco` varchar(45) NOT NULL,
  `fone` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `departamentos_iddepartamentos` int NOT NULL,
  PRIMARY KEY (`matricula`,`departamentos_iddepartamentos`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  KEY `fk_funcionarios_departamentos_idx` (`departamentos_iddepartamentos`),
  CONSTRAINT `fk_funcionarios_departamentos` FOREIGN KEY (`departamentos_iddepartamentos`) REFERENCES `departamentos` (`iddepartamentos`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyDatabase.dependentes definition

CREATE TABLE `dependentes` (
  `iddependentes` int NOT NULL,
  `nome` varchar(45) NOT NULL,
  `funcionarios_matricula` int NOT NULL,
  `funcionarios_departamentos_iddepartamentos` int NOT NULL,
  PRIMARY KEY (`iddependentes`,`funcionarios_matricula`,`funcionarios_departamentos_iddepartamentos`),
  KEY `fk_dependentes_funcionarios1_idx` (`funcionarios_matricula`,`funcionarios_departamentos_iddepartamentos`),
  CONSTRAINT `fk_dependentes_funcionarios1` FOREIGN KEY (`funcionarios_matricula`, `funcionarios_departamentos_iddepartamentos`) REFERENCES `funcionarios` (`matricula`, `departamentos_iddepartamentos`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- INSERT TABLES

INSERT INTO MyDatabase.projetos (idprojetos, data_criacao, prazo)
VALUES(1, '2023-03-01 10:00:00', '2023-03-01 10:00:00');

insert into MyDatabase.departamentos(iddepartamentos, nome, sigla, projetos_idprojetos)
values (1,'Alpha', 'A1', 1);

insert into MyDatabase.departamentos(iddepartamentos, nome, sigla, projetos_idprojetos)
values (2,'Beta', 'B2', 1);

insert into MyDatabase.departamentos(iddepartamentos, nome, sigla, projetos_idprojetos)
values (3,'Omega', 'O3', 1);

INSERT INTO MyDatabase.funcionarios (matricula, nome, endereco, fone, email, departamentos_iddepartamentos)
VALUES(012345, 'Gleides Vinente', 'Rua Goias', '92 98121-2276', 'gleidev@gmail.com', 1);

INSERT INTO MyDatabase.dependentes (iddependentes, nome, funcionarios_matricula, funcionarios_departamentos_iddepartamentos)
VALUES(01, 'Ana Rosa Vinente', 012345, 1);