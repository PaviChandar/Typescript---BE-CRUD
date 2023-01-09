import { Request, Response } from "express"
import Item from "./item.model"
import * as status from "./constants/status_code"
import { Stats } from "fs"

class ItemController {

    createItem = async (req: Request, res: Response) => {

        try {
            const product = new Item(req.body)

            const newItem = await product.save()
            res.status(status.CREATED).json(newItem)
        } catch {
            res.status(status.INTERNAL_SERVER_ERROR).send(status.CREATE_FAILURE)
        }
    }

    updateItem = async (req: Request, res: Response) => {
        const id = req.params.id

        try {
            const upgradeItem = await Item.findByIdAndUpdate(id, req.body)
            res.status(status.SUCCESS).json(upgradeItem)
        } catch {
            res.status(status.INTERNAL_SERVER_ERROR).send(status.UPDATE_SUCCESS)
        }
    }

    getSingleItem = async (req: Request, res: Response) => {
        try {
            const getItem = await Item.findById(req.params.id)
            res.status(status.SUCCESS).json(getItem)
        } catch {
            res.status(status.INTERNAL_SERVER_ERROR).send(status.GET_ITEM_FAIL)
        }
    }

    getAllItems = async (req: Request, res: Response) => {
        try {
            const getItems = await Item.find()
            res.status(status.SUCCESS).json(getItems)
        } catch {
            res.status(status.INTERNAL_SERVER_ERROR).send(status.GET_ITEM_FAIL)
        }
    }

    deleteItem = async (req: Request, res: Response) => {
        // const id = req.params.id
        try {
            const removeItem = await Item.deleteOne({ id: req.params.id })
            res.status(status.SUCCESS).json(removeItem)
        } catch {
            res.status(status.INTERNAL_SERVER_ERROR).send(status.DELETE_FAIL)
        }
    }

}

export default ItemController