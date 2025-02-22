import { int, mysqlTable, timestamp, varchar, } from 'drizzle-orm/mysql-core';

export const Users = mysqlTable('user', {
    id: int().autoincrement().primaryKey(),
    name: varchar({ length: 255 }).notNull(),
    email: varchar({ length: 255 }).notNull().unique(),
    password: varchar({ length: 255 }).notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow().onUpdateNow(),
});
