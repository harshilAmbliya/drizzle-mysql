ALTER TABLE `post` RENAME COLUMN `TIMESTAMP1` TO `created_at`;--> statement-breakpoint
ALTER TABLE `post` RENAME COLUMN `TIMESTAMP2` TO `updated_at`;--> statement-breakpoint
ALTER TABLE `user` RENAME COLUMN `TIMESTAMP1` TO `created_at`;--> statement-breakpoint
ALTER TABLE `user` RENAME COLUMN `TIMESTAMP2` TO `updated_at`;--> statement-breakpoint
ALTER TABLE `post` MODIFY COLUMN `created_at` timestamp NOT NULL DEFAULT (now());--> statement-breakpoint
ALTER TABLE `post` MODIFY COLUMN `updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP;--> statement-breakpoint
ALTER TABLE `user` MODIFY COLUMN `created_at` timestamp NOT NULL DEFAULT (now());--> statement-breakpoint
ALTER TABLE `user` MODIFY COLUMN `updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP;