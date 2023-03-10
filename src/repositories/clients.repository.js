import db from '../database/db.js';

export async function insertClientDB(name, address, phone) {
	db.query(
		`
    INSERT INTO clients (name, address, phone)
    VALUES ($1, $2, $3);
    `,
		[name, address, phone]
	);
}

export async function checkClientExistsByID(id) {
	return db.query(
		`
    SELECT *
    FROM clients
    WHERE id = $1;
    `,
		[id]
	);
}
