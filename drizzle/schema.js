import { boolean, int, mysqlTable, varchar } from 'drizzle-orm/mysql-core';
export const Players = mysqlTable('player', {
    id: int().autoincrement().primaryKey(),
    name: varchar({ length: 255 }).notNull(),
    age: int().notNull(),
    gender: varchar({ length: 10 }).notNull(),
    isMarried: boolean().notNull(),
});