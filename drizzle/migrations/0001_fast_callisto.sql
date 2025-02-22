ALTER TABLE `user` DROP FOREIGN KEY `user_postId_post_id_fk`;
--> statement-breakpoint
ALTER TABLE `post` ADD `user` int NOT NULL;--> statement-breakpoint
ALTER TABLE `post` ADD CONSTRAINT `post_user_user_id_fk` FOREIGN KEY (`user`) REFERENCES `user`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `user` DROP COLUMN `postId`;