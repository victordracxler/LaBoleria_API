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
		json_build_object('id', cakes.id, 'name', cakes.name, 'price', cakes.price, 'description', cakes.description, 'image', cakes.image, 'flavour', flavours.name) AS "cake",
		orders.id AS "orderId", orders."createdAt", orders.quantity, orders."totalPrice", orders."isDelivered"
	FROM orders
	JOIN clients ON orders."clientId" = clients.id
	JOIN cakes ON orders."cakeId" = cakes.id
	JOIN flavours ON cakes."flavourId" = flavours.id;

	`);
}

export async function fetchOrdersWithQuery(date) {
	return db.query(
		`
	SELECT 
		json_build_object('id', clients.id, 'name', clients.name, 'address', clients.address, 'phone', clients.phone) AS "client",
		json_build_object('id', cakes.id, 'name', cakes.name, 'price', cakes.price, 'description', cakes.description, 'image', cakes.image, 'flavour', flavours.name) AS "cake",
		orders.id AS "orderId", orders."createdAt", orders.quantity, orders."totalPrice", orders."isDelivered"
	FROM orders
	JOIN clients ON orders."clientId" = clients.id
	JOIN cakes ON orders."cakeId" = cakes.id
	JOIN flavours ON cakes."flavourId" = flavours.id
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
		json_build_object('id', cakes.id, 'name', cakes.name, 'price', cakes.price, 'description', cakes.description, 'image', cakes.image, 'flavour', flavours.name) AS "cake",
		orders.id AS "orderId", orders."createdAt", orders.quantity, orders."totalPrice", orders."isDelivered"
	FROM orders
	JOIN clients ON orders."clientId" = clients.id
	JOIN cakes ON orders."cakeId" = cakes.id
	JOIN flavours ON cakes."flavourId" = flavours.id
	WHERE orders.id >= $1;
	`,
		[id]
	);
}

export async function updateOrderStatus(id) {
	return db.query(
		`
	UPDATE orders
	SET "isDelivered" = TRUE
	WHERE id = $1;
	`,
		[id]
	);
}

export async function fetchClientsOrders(id) {
	return db.query(
		`
	SELECT 
	orders.id AS "orderId", orders.quantity, orders."createdAt", orders."totalPrice", cakes.name AS "cakeName"
	FROM orders
	JOIN cakes ON orders."cakeId" = cakes.id
	WHERE orders."clientId" = $1;
	`,
		[id]
	);
}
