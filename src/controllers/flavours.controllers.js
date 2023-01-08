import {
	addFlavourToDB,
	checkFlavourExists,
} from '../repositories/flavours.repository.js';

export async function newFlavour(req, res) {
	const { name } = req.body;

	try {
		const cakeExists = await checkFlavourExists(name);

		if (cakeExists.rows.length > 0) {
			return res.sendStatus(409);
		}

		await addFlavourToDB(name);

		res.sendStatus(201);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}
