import {RequestHandler} from "express";
import {TableModel} from "../furnitureModel";

export const getById: RequestHandler = async (req, res) => {
    const id = req.params.id;
    const data = await TableModel.findById(id);
    if (data === null) {
        res.json("Стол не найден");
    } else {
        res.json(data);
    }
} 