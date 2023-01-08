import { checkClientExistsByID } from '../repositories/clients.repository.js';
import { checkCakeExistsByID } from '../repositories/cakes.repository.js';
import { insertOrder } from '../repositories/orders.repository.js';

export async function newOrder(req, res) {
	const { clientId, cakeId, quantity, totalPrice } = req.body;

	try {
		const clientExists = await checkClientExistsByID(clientId);
		const cakeExists = await checkCakeExistsByID(cakeId);

		if (cakeExists.rows.length === 0 || clientExists.rows.length === 0) {
			return res.sendStatus(404);
		}

		await insertOrder(clientId, cakeId, quantity, totalPrice);

		res.sendStatus(201);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}
