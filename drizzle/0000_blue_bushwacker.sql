-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `authors` (
	`author_id` integer,
	`full_name` text,
	`country` text
);
--> statement-breakpoint
CREATE TABLE `book_authors` (
	`book_id` integer,
	`author_id` integer
);
--> statement-breakpoint
CREATE TABLE `books` (
	`book_id` integer,
	`isbn` integer,
	`title` text,
	`category_id` integer,
	`publisher_id` integer,
	`publication_year` integer,
	`copies_total` integer,
	`copies_available` integer
);
--> statement-breakpoint
CREATE TABLE `categories` (
	`category_id` integer,
	`name` text
);
--> statement-breakpoint
CREATE TABLE `members` (
	`member_id` integer,
	`full_name` text,
	`phone` integer,
	`email` text,
	`join_date` text
);
--> statement-breakpoint
CREATE TABLE `publishers` (
	`publisher_id` integer,
	`name` text
);

*/