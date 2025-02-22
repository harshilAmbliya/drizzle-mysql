CREATE TABLE `post` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(255) NOT NULL,
	`description` varchar(255) NOT NULL,
	`content` varchar(255) NOT NULL,
	`TIMESTAMP1` timestamp NOT NULL,
	`TIMESTAMP2` timestamp NOT NULL,
	CONSTRAINT `post_id` PRIMARY KEY(`id`),
	CONSTRAINT `post_description_unique` UNIQUE(`description`)
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`password` varchar(255) NOT NULL,
	`postId` int NOT NULL,
	`TIMESTAMP1` timestamp NOT NULL,
	`TIMESTAMP2` timestamp NOT NULL,
	CONSTRAINT `user_id` PRIMARY KEY(`id`),
	CONSTRAINT `user_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
ALTER TABLE `user` ADD CONSTRAINT `user_postId_post_id_fk` FOREIGN KEY (`postId`) REFERENCES `post`(`id`) ON DELETE no action ON UPDATE no action;