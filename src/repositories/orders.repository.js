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

export async function fetchOrders() {
	return db.query(`
	SELECT 
		json_build_object('id', clients.id, 'name', clients.name, 'address', clients.address, 'phone', clients.phone) AS "client",
		json_build_object('id', cakes.id, 'name', cakes.name, 'price', cakes.price, 'description', cakes.description, 'image', cakes.image) AS "cake",
		orders.id AS "orderId", orders."createdAt", orders.quantity, orders."totalPrice", orders."isDelivered"
	FROM orders
	JOIN clients ON orders."clientId" = clients.id
	JOIN cakes ON orders."cakeId" = cakes.id;

	`);
}

export async function fetchOrdersWithQuery(date) {
	return db.query(
		`
	SELECT 
		json_build_object('id', clients.id, 'name', clients.name, 'address', clients.address, 'phone', clients.phone) AS "client",
		json_build_object('id', cakes.id, 'name', cakes.name, 'price', cakes.price, 'description', cakes.description, 'image', cakes.image) AS "cake",
		orders.id AS "orderId", orders."createdAt", orders.quantity, orders."totalPrice", orders."isDelivered"
	FROM orders
	JOIN clients ON orders."clientId" = clients.id
	JOIN cakes ON orders."cakeId" = cakes.id
	WHERE orders."createdAt" >= $1;
	`,
		[date]
	);
}

export async function fetchOrdersById(id) {
	return db.query(
		`
	SELECT 
		json_build_object('id', clients.id, 'name', clients.name, 'address', clients.address, 'phone', clients.phone) AS "client",
		json_build_object('id', cakes.id, 'name', cakes.name, 'price', cakes.price, 'description', cakes.description, 'image', cakes.image) AS "cake",
		orders.id AS "orderId", orders."createdAt", orders.quantity, orders."totalPrice", orders."isDelivered"
	FROM orders
	JOIN clients ON orders."clientId" = clients.id
	JOIN cakes ON orders."cakeId" = cakes.id
	WHERE orders.id >= $1;
	`,
		[id]
	);
}

export async function checkOrderExists(id) {
	return db.query(
		`
	SELECT *
	FROM orders
	WHERE orders.id >= $1;
	`,
		[id]
	);
}
