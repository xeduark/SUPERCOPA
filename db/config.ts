//Xoloeduarkore@22

// Importar el cliente
import { createClient } from "@supabase/supabase-js"

// Configurar las credenciales
const supabaseUrl = "https://surgsnvhfwbhvkflkbcx.supabase.co"
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN1cmdzbnZoZndiaHZrZmxrYmN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcxMzEwMDEsImV4cCI6MjA1MjcwNzAwMX0.qkjUm3ZJSE3nv0kP-1HxGB07IkAdvxSm3wmem6KtkgM"

// Crear el cliente
const supabase = createClient(supabaseUrl, supabaseKey)

// Ejemplo de consulta
async function fetchCapitanes() {
	const { data, error } = await supabase.from("capitanes").select("*")

	if (error) {
		console.error("Error fetching capitanes", error)
		return null
	}
	return data
}
// import { column, defineDb } from "astro:db"

// const VoteSelections = {
// 	columns: {
// 		id: column.text({ primaryKey: true }),
// 	},
// }

// const Votes = {
// 	columns: {
// 		id: column.text({ primaryKey: true }), // `userId-combatId`
// 		combatId: column.text(),
// 		userId: column.text(),
// 		voteId: column.text({ references: () => VoteSelections.columns.id }),
// 		votedAt: column.date(),
// 	},
// }

// const Cache = {
// 	columns: {
// 		id: column.text({ primaryKey: true }),
// 		data: column.json(),
// 		timestamp: column.date(),
// 	},
// }

// // https://astro.build/db/config
// export default defineDb({
// 	tables: {
// 		Cache,
// 		VoteSelections,
// 		Votes,
// 	},
// })
