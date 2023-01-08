import db from '../database/db.js';

export async function checkFlavourExists(name) {
	return db.query(
		`
    SELECT *
    FROM flavours
    WHERE name = $1;
    `,
		[name]
	);
}

export async function checkFlavourExistsByID(id) {
	return db.query(
		`
    SELECT *
    FROM flavours
    WHERE id = $1;
    `,
		[id]
	);
}

export async function addFlavourToDB(name) {
	return db.query(
		`
    INSERT INTO flavours (name)
    VALUES ($1);
    `,
		[name]
	);
}
