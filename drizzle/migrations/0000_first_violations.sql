CREATE TABLE `player` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`age` int NOT NULL,
	`gender` varchar(10) NOT NULL,
	`isMarried` boolean NOT NULL,
	CONSTRAINT `player_id` PRIMARY KEY(`id`)
);
