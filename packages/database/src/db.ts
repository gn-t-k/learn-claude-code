import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
// biome-ignore lint/style/noNamespaceImport: <explanation>
import * as schema from "./schema";

// 環境に応じて接続設定を切り替え
const createDbClient = () => {
	const tursoUrl = process.env["TURSO_CONNECTION_URL"];
	const tursoAuthToken = process.env["TURSO_AUTH_TOKEN"];

	if (tursoUrl && tursoAuthToken) {
		// Turso (本番環境)
		return createClient({
			url: tursoUrl,
			authToken: tursoAuthToken,
		});
	}

	// SQLite (ローカル環境)
	return createClient({
		url: "file:./local.db",
	});
};

export const db = drizzle(createDbClient(), { schema });
