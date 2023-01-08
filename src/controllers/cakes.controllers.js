import {
	addCakeToDB,
	checkCakeExists,
} from '../repositories/cakes.repository.js';

export async function newCake(req, res) {
	const { name, price, image, description, flavourId } = req.body;

	try {
		const cakeExists = await checkCakeExists(name);

		if (cakeExists.rows.length > 0) {
			return res.sendStatus(409);
		}

		await addCakeToDB(name, price, image, description, flavourId);

		res.sendStatus(201);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}
