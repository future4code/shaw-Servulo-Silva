CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

-- Exercício 1)

-- a)
-- VARCHAR é um tipo de variável que permite a entrada de strings até um certo tamanho (255 caracteres neste  caso). 
-- DATE é usada para datas e NOT NULL quer dizer que essa formação precisa ser passada obrigatoriamente, não pode ser nulo. 
-- PRIMARY KEY é o ID daquela informação.


-- b)
SHOW DATABASES;
-- Mostra qual o banco de dados que está sendo utilizado

SHOW TABLES;
-- Mostra todas as tabelas que estão nesse banco de dados

-- c)
DESCRIBE Actor;
-- Descreve os detalhes de uma tabela

-- Exercício 2)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

-- a)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);

-- b) Error Code: 1062. Duplicate entry '002' for key PRIMARY.
-- Resumidamente, significa que já existe uma chave, ID, Key com esse mesmo nome. Ela deve ser única, por isso o problema.

-- c) 
INSERT INTO Actor (id, name, salary, birth_date, gender )
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
 "1929-10-19", 
 "female"
);
-- A data de nascimento e gênero não foram passados nos parâmetros

-- d)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Milton Gonçalves",
  400000,
  "1949-04-18", 
  "male"
);
-- Faltou passar o name como parâmetro (ele é obrigatório

-- e) 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
-- Faltou colocar as aspas na data de nascimento

-- f)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "William Bradley Pitt",
  25000000,
  "1963-12-18", 
  "male"
  );
  
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Angelina Jolie",
  25000000,
  "1975-06-04", 
  "female"
  );



-- Exercício 3

SELECT * FROM Actor;
SELECT id, salary from Actor;

-- a)
SELECT * FROM Actor
WHERE gender = "female";

-- b)
SELECT salary FROM Actor
WHERE name = "Tony Ramos";

-- c) 
SELECT * FROM Actor
WHERE gender = "invalid";

-- d)
SELECT id, name, salary FROM Actor
WHERE salary>500000;

-- e)
SELECT id, name from Actor WHERE id = "002";
-- O parâmetro "nome" está errado. Deveria ser Name


-- Exercício 4)

SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

-- a) Seleciona os ítens da tabela que iniciam com a letra A ou J e que possuem salário maior que 300000

-- b)
SELECT * FROM Actor
WHERE name NOT LIKE "A%"  AND salary > 350000;

-- c)
SELECT * FROM Actor
WHERE name LIKE "G%" OR name LIKE "%g%";

-- d) 
SELECT * FROM Actor
WHERE name LIKE "A%" OR name LIKE "%a%" OR name LIKE "G%" OR name LIKE "%g%"
AND salary BETWEEN 350000 AND 900000;



CREATE TABLE Filmes (
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR (255) NOT NULL,
    sinopse TEXT NOT NULL,
    data_lancamento DATE NOT NULL,
    avaliacao INT NOT NULL
);

-- a) Já criado

-- b) 
INSERT INTO Filmes (id, nome, sinopse, data_lancamento, avaliacao)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  7
);

-- c)
INSERT INTO Filmes (id, nome, sinopse, data_lancamento, avaliacao)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
  10
);

-- d) 
INSERT INTO Filmes (id, nome, sinopse, data_lancamento, avaliacao)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce",
  "2017-11-02", 
  8
);

-- e)
INSERT INTO Filmes (id, nome, sinopse, data_lancamento, avaliacao)
VALUES(
  "004", 
  "O Auto da Compadecida",
  "As aventuras dos nordestinos João Grilo, um sertanejo pobre e mentiroso, e Chicó, o mais covarde dos homens. Ambos lutam pelo pão de cada dia e atravessam por vários episódios enganando a todos do pequeno vilarejo de Taperoá, no sertão da Paraíba. A salvação da dupla acontece com a aparição da Nossa Senhora. Adaptação da obra de Ariano Suassuna",
  "2000-07-10", 
  10
);


