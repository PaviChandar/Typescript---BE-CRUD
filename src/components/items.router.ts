// import express, { Request, Response } from "express";
// import * as ItemService from "./items.service";
// import { MainItem, Item } from "./item.interface";
// import * as status from "./constants/status_code"

// export const itemsRouter = express.Router()

// itemsRouter.post("/", async (req: Request, res: Response) => {

//     try {
//         const item: MainItem = req.body

//         const newItem = await ItemService.createItem(item)
//         res.status(status.CREATED).json(newItem)
//     } catch {
//         res.status(status.INTERNAL_SERVER_ERROR).send(status.CREATE_FAILURE)
//     }
// })

// itemsRouter.put("/:id", async (req: Request, res: Response) => {
//     const id: number = parseInt(req.params.id, 10);

//     try {
//         const upgradeItem: Item = req.body;

//         const existingItem: Item = await ItemService.findSingleItem(id);

//         if (existingItem) {
//             const updatedItem = await ItemService.updateItem(id, upgradeItem);
//             return res.status(status.SUCCESS).json(updatedItem);
//         }
//     } catch {
//         res.status(status.INTERNAL_SERVER_ERROR).send(status.UPDATE_FAIL);
//     }
// });

// itemsRouter.get("/", async (req: Request, res: Response) => {

//     try {
//         const getAllItems: Item[] = await ItemService.findAllItems()
//         res.status(status.SUCCESS).json(getAllItems)
//     } catch {
//         res.status(status.INTERNAL_SERVER_ERROR).send(status.GET_ITEM_FAIL)
//     }
// })

// itemsRouter.get("/:id", async (req: Request, res: Response) => {
//     const id: number = parseInt(req.params.id,10)

//     try {
//         const getItem: Item = await ItemService.findSingleItem(id)
//         if (getItem) {
//             res.status(status.SUCCESS).json(getItem)
//         } else {
//             res.status(status.NOT_FOUND).send(status.ITEM_NOT_FOUND)
//         }
//     } catch {
//         res.status(status.INTERNAL_SERVER_ERROR).send(status.GET_ITEM_FAIL)
//     }
// })

// itemsRouter.delete("/:id", async (req: Request, res: Response) => {
//     const id: number = parseInt(req.params.id, 10)

//     try {
//         await ItemService.deleteItem(id)
//         res.status(status.SUCCESS).send(status.DELETE_SUCCESS)
//     } catch {
//         res.status(status.INTERNAL_SERVER_ERROR).send(status.DELETE_FAIL)
//     }
// })

import express from "express"
import ItemController from "./item.controller"

const router = express.Router()
const items = new ItemController()

router.post('/',items.createItem)
router.put('/:id',items.updateItem)
router.get('/', items.getAllItems)
router.get('/:id', items.getSingleItem)
router.delete('/:id',items.deleteItem)

export default router