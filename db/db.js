import { drizzle } from "drizzle-orm/mysql2"
import mysql from "mysql2/promise";
// const db = drizzle({ connection: { uri: process.env.DATABASE_URL } })

const pool = mysql.createPool({
    uri: process.env.DATABASE_URL,
    waitForConnections: true,
    connectionLimit: 10,  // Set a limit to prevent overloading
    queueLimit: 0
});

// Initialize Drizzle with the connection pool
const db = drizzle(pool);

// Test database connection
(async () => {
    try {
        const connection = await pool.getConnection();
        console.log("✅ Database connected successfully!");
        connection.release(); // Release connection back to the pool
    } catch (error) {
        console.error("❌ Database connection failed:", error.message);
    }
})();

export default db;