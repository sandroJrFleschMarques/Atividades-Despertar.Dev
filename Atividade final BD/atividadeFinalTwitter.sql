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
