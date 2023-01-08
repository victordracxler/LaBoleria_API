import {
	addFlavourToDB,
	checkFlavourExists,
} from '../repositories/flavours.repository.js';

export async function newFlavour(req, res) {
	const { name } = req.body;

	try {
		const flavourExists = await checkFlavourExists(name);

		if (flavourExists.rows.length > 0) {
			return res.sendStatus(409);
		}

		await addFlavourToDB(name);

		res.sendStatus(201);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}
