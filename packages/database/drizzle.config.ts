import type { Config } from "drizzle-kit";

const connectionUrl = process.env["TURSO_CONNECTION_URL"] || "file:./local.db";
const authToken = process.env["TURSO_AUTH_TOKEN"];

export default {
	schema: "./src/schema/index.ts",
	out: "./migrations",
	dialect: "turso",

	dbCredentials: {
		url: connectionUrl,
		...([undefined, ""].includes(authToken) ? {} : { token: authToken }),
	},
} satisfies Config;
