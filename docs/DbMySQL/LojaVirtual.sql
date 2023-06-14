-- Criação da tabela Categoria
CREATE TABLE Categoria (
  id INT PRIMARY KEY,
  descricao VARCHAR(255)
);

-- Criação da tabela Cliente
CREATE TABLE Cliente (
  id INT PRIMARY KEY,
  nome VARCHAR(255),
  endereco VARCHAR(255),
  email VARCHAR(255),
  criacao DATETIME,
  alteracao DATETIME
);

-- Criação da tabela Produto
CREATE TABLE Produto (
  id INT PRIMARY KEY,
  descricao VARCHAR(255),
  preco DECIMAL(10,2),
  quantidade INT,
  categoria_id INT,
  criacao DATETIME,
  alteracao DATETIME,
  FOREIGN KEY (categoria_id) REFERENCES Categoria(id)
);

-- Criação da tabela Venda
CREATE TABLE Venda (
  id INT PRIMARY KEY,
  cliente_id INT,
  data DATETIME,
  FOREIGN KEY (cliente_id) REFERENCES Cliente(id)
);

-- Criação da tabela de associação entre Venda e Produto
CREATE TABLE Venda_Produto (
  venda_id INT,
  produto_id INT,
  PRIMARY KEY (venda_id, produto_id),
  FOREIGN KEY (venda_id) REFERENCES Venda(id),
  FOREIGN KEY (produto_id) REFERENCES Produto(id)
);
