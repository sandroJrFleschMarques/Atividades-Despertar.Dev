create table usuarios (
id int auto_increment primary key,
nome varchar(50),
email varchar(30),
username varchar (30),
senha varchar (6)
);
create table tweet (
id int auto_increment primary key,
conteudo varchar(255),
usuario_id int,
foreign key(usuario_id) references usuarios(id)
);
create table liked (
id int auto_increment primary key,
usuario_id int,
tweet_id int,
foreign key (usuario_id) references usuarios(id),
foreign key (tweet_id) references tweet(id) 
);
create table retweet (
usuario_id int,
tweet_id int,
foreign key (usuario_id) references usuarios(id),
foreign key (tweet_id) references tweet(id) 
primary key (usuario_id, tweet_id)
);
create table seguidor (
id int auto_increment primary key,
seguidor_id int,
usuario_seguido_id int,
foreign key (seguidor_id) references usuarios (id),
foreign key (usuario_seguido_id) references usuarios (id)
);

-- CRIANDO USUARIO PABLO E DOUGLAS
insert into usuarios (nome, email, username, senha)
values ('Pablo', 'pablo@sicredi.com', '@pablo', 'gr1983'),('Douglas', 'doug@sicredi.com', '@douglas', 'notfox')

-- insert into usuarios (nome, email, username, senha)
-- values ('Teste', 'teste@sicredi.com', '@teste', '444444')

-- CRIANDO UM TWEET PARA PABLO E UM TWEET PARA DOUGLAS
insert into tweet (conteudo, usuario_id)

values ('Como é bom ser gremista', 1), ('Como é bom ser dev!', 2)

-- values ('TesteTeste', 3)

-- PABLO CURTIU O TWEET DE DOUGLAS
insert into liked (usuario_id, tweet_id)
values (1,2)

-- insert into liked (usuario_id, tweet_id)
-- values (2,1)
-- 
-- insert into liked (usuario_id, tweet_id)
-- values (2,3)

-- PABLO RETWEETOU O TWEET DE DOUGLAS
insert into retweet (usuario_id, tweet_id)
values (1,2)

-- DOUGLAS PASSOU A SEGUIR PABLO
insert into seguidor (seguidor_id, usuario_seguido_id)
values (2,1)

-- TODOS OS LIKES
select * from liked l

-- TODOS OS LIKES DO DOUGLAS
select * from liked l
inner join tweet t on t.id = l.tweet_id 
inner join usuarios u on u.id = l.usuario_id 
where u.nome like 'Douglas'










