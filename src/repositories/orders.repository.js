import db from '../database/db.js';

export async function insertOrder(clientId, cakeId, quantity, totalPrice) {
	return db.query(
		`
    INSERT INTO orders ("clientId", "cakeId", quantity, "totalPrice")
    VALUES ($1, $2, $3, $4);
    `,
		[clientId, cakeId, quantity, totalPrice]
	);
}
