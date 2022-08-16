create table postagem(
 id varchar(255) primary key,
 mensagem varchar(255) not null
);

create table comentarios(
 id varchar(255) primary key,
 comentario varchar(255) not null,
 id_postagem varchar(255),
 foreign key (id_postagem) references postagem(id) on delete cascade
);

create table curtida(
 id varchar(255) primary key,
 curtir int not null,
 id_postagem varchar(255),
 foreign key (id_postagem) references postagem(id) on delete cascade
);

insert into postagem values ("001", "Oi, tudo bem? Eu sou um teste");
insert into postagem values ("002", "Oi, tudo bem? Eu sou o teste 2");

select * from postagem;


select * from comentarios;


