create table users (
id int auto_increment primary key,
name varchar(50) not null,
email varchar(30) unique not null,
username varchar(30) unique not null,
pass varchar (20) not null
);

create table tweets (
id int auto_increment primary key,
content varchar(255) not null,
userid int not null,
type ENUM('tweet', 'retweet') not null,
foreign key(userid) references users(id)
);
create table likes (
id int auto_increment primary key,
userid int not null,
tweetid int not null,
foreign key (userid) references users(id),
foreign key (tweetid) references tweets(id) 
);
create table retweets (
userid int not null,
tweetid int not null,
foreign key (userid) references users(id),
foreign key (tweetid) references tweets(id) 
);
create table followers (
id int auto_increment primary key,
userid int not null,
followerid int not null,
foreign key (userid) references users (id),
foreign key (followerid) references users (id)
);

-- CRIANDO USUARIO PABLO E DOUGLAS
insert into users (name, email, username, pass)
values ('Pablo', 'pablo@sicredi.com', '@pablo', 'gr1983'),('Douglas', 'doug@sicredi.com', '@douglas', 'notfox')

-- CRIANDO UM TWEET PARA PABLO E UM TWEET PARA DOUGLAS
insert into tweets (content, userid, `type`)
values ('Como é bom ser gremista', 1, 1), ('Como é bom ser dev!', 2, 1)

-- PABLO CURTIU O TWEET DE DOUGLAS
insert into likes (userid, tweetid)
values (1,2)

-- PABLO RETWEETOU O TWEET DE DOUGLAS
INSERT INTO retweets (userid, tweetid)
VALUES (1, 2);
-- Inserindo o retweet na tabela `tweets` para ver o type ENUM mudar para `retweet`
INSERT INTO tweets (content, userid, type)
values ((SELECT t.content FROM tweets t WHERE t.id = 2), 1, 2);

-- DOUGLAS PASSOU A SEGUIR PABLO
insert into followers (userid, followerid)
values (1,2)

