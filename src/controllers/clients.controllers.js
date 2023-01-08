import { insertClientDB } from '../repositories/clients.repository.js';

export async function newClient(req, res) {
	const { name, address, phone } = req.body;

	try {
		await insertClientDB(name, address, phone);

		res.sendStatus(201);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}
