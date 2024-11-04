import {timestamp,text,pgTable,serial,varchar,integer} from "drizzle-orm/pg-core"

export const Users = pgTable("users", {
    id: serial("id").primaryKey(),
    address: varchar("address", { length: 42 }).notNull(),
    email: varchar("email", { length: 255 }).notNull(),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
    lastLogin: timestamp("last_login"),
  });