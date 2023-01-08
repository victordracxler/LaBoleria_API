import db from '../database/db.js';

export async function checkCakeExists(name) {
	return db.query(
		`
    SELECT *
    FROM cakes
    WHERE name = $1;
    `,
		[name]
	);
}

export async function insertCakeToDB(
	name,
	price,
	image,
	description,
	flavourId
) {
	return db.query(
		`
    INSERT INTO cakes (name, price, image, description, "flavourId")
    VALUES ($1, $2, $3, $4, $5);
    `,
		[name, price, image, description, flavourId]
	);
}
