import { int, mysqlTable, timestamp, varchar, } from 'drizzle-orm/mysql-core';
import { Users } from './userSchema';

export const Posts = mysqlTable('post', {
    id: int().autoincrement().primaryKey(),
    title: varchar({ length: 255 }).notNull(),
    description: varchar({ length: 255 }).notNull().unique(),
    content: varchar({ length: 255 }).notNull(),
    user: int().notNull().references(() => Users.id),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow().onUpdateNow(),
});
