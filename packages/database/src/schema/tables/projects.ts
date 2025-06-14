import { createId } from "@paralleldrive/cuid2";
import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { users } from "./users";

export const projects = sqliteTable("projects", {
	id: text("id").primaryKey().$defaultFn(() => createId()),
	name: text("name").notNull(),
	description: text("description").notNull(),
	ownerId: text("owner_id")
		.notNull()
		.references(() => users.id, { onDelete: "restrict" }),
	createdAt: integer("created_at", { mode: "timestamp" })
		.notNull()
		.default(sql`(unixepoch())`),
	updatedAt: integer("updated_at", { mode: "timestamp" })
		.notNull()
		.default(sql`(unixepoch())`)
		.$onUpdate(() => new Date()),
});