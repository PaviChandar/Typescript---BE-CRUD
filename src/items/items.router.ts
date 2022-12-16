import express, { Request, Response } from "express";
import * as ItemService from "./items.service";
import { MainItem, Item } from "./item.interface";

export const itemsRouter = express.Router()

itemsRouter.post("/", async (req: Request, res: Response) => {

    try {
        const item: MainItem = req.body

        const newItem = await ItemService.createItem(item)
        res.status(200).json(newItem)
    } catch {
        res.status(500).send("Enter valid product details")
    }
})

itemsRouter.put("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);

    try {
        const upgradeItem: Item = req.body;

        const existingItem: Item = await ItemService.findSingleItem(id);

        if (existingItem) {
            const updatedItem = await ItemService.updateItem(id, upgradeItem);
            return res.status(200).json(updatedItem);
        }
    } catch {
        res.status(500).send("Cannot update item");
    }
});

itemsRouter.get("/", async (req: Request, res: Response) => {

    try {
        const getAllItems: Item[] = await ItemService.findAllItems()
        res.status(200).json(getAllItems)
    } catch {
        res.status(500).send("Cannot get items")
    }
})

itemsRouter.get("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id,10)

    try {
        const getItem: Item = await ItemService.findSingleItem(id)
        if (getItem) {
            res.status(200).json(getItem)
        } else {
            res.status(404).send("Item not found!")
        }
    } catch {
        res.status(500).send("Cannot get product")
    }
})

itemsRouter.delete("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10)

    try {
        await ItemService.deleteItem(id)
        res.status(200).send("Item deleted")
    } catch {
        res.status(500).send("Cannot delete item")
    }
})