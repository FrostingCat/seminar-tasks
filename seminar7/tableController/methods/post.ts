import { RequestHandler } from "express";
import { TableModel } from "../furnitureModel";

export const post: RequestHandler = async (req, res) => {
	if (
		"size" in req.body &&
		"material" in req.body &&
		"name" in req.body.color &&
		"HEX" in req.body.color &&
		"quantity" in req.body &&
		"description" in req.body &&
		"image" in req.body
	) {
		if (
			typeof req.body.size === "string" &&
			typeof req.body.material === "string" &&
			typeof req.body.color.name === "string" &&
			typeof req.body.color.HEX === "string" &&
			typeof req.body.quantity === "number" &&
			typeof req.body.description === "string" &&
			typeof req.body.image === "string"
		) {
			await TableModel.create(req.body);
			res.status(200);
			res.json("Стул добавлен в коллекцию.");
		} else {
			res.status(400);
			res.json("Неверные типы у параметров");
		}
	} else {
		res.status(400);
		res.json("Нет всех необходимых параметров.");
	}
};
