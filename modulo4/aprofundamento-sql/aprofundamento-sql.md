SET SQL_SAFE_UPDATES = 0;

ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);

ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";

SELECT * FROM Actor;

-- Exercício 1)
-- a) 
ALTER TABLE Actor DROP COLUMN salary;
-- exclui a coluna salary 

-- b) 
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
-- altera o gender para sex 

-- c) 
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
-- agora o gender pode ter até 255 caracteres 

-- d)
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
-- 

-- Exercício 2)

-- a)
UPDATE Actor
SET name = "Moacyr Franco", birth_date =  "1955-08-25"
WHERE id = "003";

-- b)
UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PAES";

-- c)
UPDATE Actor
SET name = "Juliana Paes e Amor", salary = 50000,  birth_date =  "1979-03-26", gender = "female", favorite_ice_cream_flavor = "chocolate", type = "NotDirector"
WHERE id = "005";

-- d) 

UPDATE Actor
SET home = "Apartment"
WHERE id = "150";

-- Error Code: 1054. Unknown column 'home' in 'field list'

-- 3)
-- a)
DELETE FROM Actor WHERE name = "Fernanda Montenegro";

-- b)
DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000;


-- Exercício 4)
SELECT COUNT(*) FROM Actor;
SELECT COUNT(*) FROM Actor WHERE gender = "female";
SELECT AVG(salary) FROM Actor;

-- a) Maior salário
SELECT MAX(salary) FROM Actor;

-- b) Menor salário
SELECT MIN(salary) FROM Actor;

-- c) Quantidade de atrizes
SELECT COUNT(*) FROM Actor WHERE gender = "female";

-- d) Soma dos salários
SELECT SUM(salary) FROM Actor;

-- Exercício 5)
SELECT * FROM Actor LIMIT 3;
SELECT * FROM Actor ORDER BY name ASC;
SELECT * FROM Actor ORDER BY name ASC LIMIT 4;
SELECT * FROM Actor
WHERE gender = 'female'
ORDER BY name ASC
LIMIT 4;

-- a)
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;
-- Essa query agrupa todos os ítens que estão naquele parâmetro. No caso, retornou 2 male e 4 female


-- b)
SELECT id, name 
FROM Actor 
ORDER BY name ASC;

-- c)
SELECT * 
FROM Actor
ORDER BY salary DESC;

-- d)
SELECT * 
FROM Actor 
ORDER BY salary DESC
LIMIT 3;

-- e)
SELECT AVG (salary), gender 
FROM Actor
GROUP BY gender;
