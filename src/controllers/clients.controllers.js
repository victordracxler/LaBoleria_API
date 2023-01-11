import { insertClientDB } from '../repositories/clients.repository.js';
import { fetchClientsOrders } from '../repositories/orders.repository.js';

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

export async function getOrdersByClient(req, res) {
	const { id } = req.params;

	try {
		const orders = await fetchClientsOrders(id);

		if (orders.rows.length === 0) {
			res.sendStatus(404);
			return;
		}

		res.status(200).send(orders.rows);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}
