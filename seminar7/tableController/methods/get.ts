import {RequestHandler} from "express";
import {TableModel} from "../furnitureModel";

export const get: RequestHandler = async (req, res) => {
    const params = req.query;
	console.log(req)
    const data = await TableModel.find(params);
    if (data.length == 0) {
        res.json("В коллекции нет столов");
    } else {
        res.json({data});
		console.log({data});
    }
}