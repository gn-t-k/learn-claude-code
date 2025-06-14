import { createId } from "@paralleldrive/cuid2";
import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { projects } from "./projects";
import { users } from "./users";

export const tasks = sqliteTable("tasks", {
	id: text("id")
		.primaryKey()
		.$defaultFn(() => createId()),
	title: text("title").notNull(),
	description: text("description").notNull().default(""),
	status: text("status").notNull().default("todo"),
	priority: text("priority").notNull().default("medium"),
	projectId: text("project_id")
		.notNull()
		.references(() => projects.id, { onDelete: "restrict" }),
	assigneeId: text("assignee_id")
		.notNull()
		.references(() => users.id, { onDelete: "restrict" }),
	dueDate: integer("due_date", { mode: "timestamp" }).notNull(),
	createdAt: integer("created_at", { mode: "timestamp" })
		.notNull()
		.default(sql`(unixepoch())`),
	updatedAt: integer("updated_at", { mode: "timestamp" })
		.notNull()
		.default(sql`(unixepoch())`)
		.$onUpdate(() => new Date()),
});
