import { checkClientExistsByID } from '../repositories/clients.repository.js';
import { checkCakeExistsByID } from '../repositories/cakes.repository.js';
import {
	fetchOrders,
	fetchOrdersById,
	fetchOrdersWithQuery,
	insertOrder,
	updateOrderStatus,
} from '../repositories/orders.repository.js';

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

export async function getOrders(req, res) {
	const date = req.query.date;

	try {
		if (date) {
			const orders = await fetchOrdersWithQuery(date);

			if (orders.rows.length === 0) {
				res.status(404).send(orders.rows);
				return;
			}

			res.status(200).send(orders.rows);
			return;
		} else {
			const orders = await fetchOrders();

			if (orders.rows.length === 0) {
				res.status(404).send(orders.rows);
				return;
			}

			res.status(200).send(orders.rows);
			return;
		}
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}

export async function getOrdersById(req, res) {
	const { id } = req.params;

	try {
		const order = await fetchOrdersById(id);

		if (order.rows.length === 0) {
			res.sendStatus(404);
			return;
		}

		res.status(200).send(order.rows[0]);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}

export async function updateDelivered(req, res) {
	const { id } = req.params;

	try {
		const order = await fetchOrdersById(id);

		if (order.rows.length === 0) {
			res.sendStatus(404);
			return;
		}

		await updateOrderStatus(id);

		res.sendStatus(204);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}
