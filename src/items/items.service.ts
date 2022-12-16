import { Item, MainItem } from "./item.interface";
import { Items } from "./items.interface";

let items: Items = {
    1: {
        id: 1,
        name: "Pasta",
        price: 321,
        description: "white and creamy",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJxmdHN1z_3-qz82I8EZp_ItzgiXqPMwFrhw&usqp=CAU"
    },
    2: {
        id: 2,
        name: "Burger",
        price: 499,
        description: "Cheesy",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd58lyW8pR4ks1obzr-ghUHe-_IGUnml9zAg&usqp=CAU"
    },
    3: {
        id: 3,
        name: "Milkshake",
        price: 299,
        description: "Cold with ice-cream",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfoPptnJBeIUYVXVuO37OeiYO-5xvbiMsxWg&usqp=CAU"
    }
};

//Service Methods

export const findAllItems = async (): Promise<Item[]> => Object.values(items)

export const findSingleItem = async (id: number): Promise<Item> => items[id]

export const createItem = async (newItem: MainItem): Promise<Item> => {
    const id = new Date().valueOf();

    items[id] = { id, ...newItem };
    
    return items[id]
}

export const updateItem = async (id: number, upgradeItem: MainItem): Promise<Item | null> => {
    const item = await findSingleItem(id)

    if (!item) {
        throw "No item found!"
    }

    items[id] = { id, ...upgradeItem }
    
    return items[id]
}

export const deleteItem = async(id:number) : Promise<null | void> => {
    const item = await findSingleItem(id)

    if(!item){
        throw "Cannot delete item"
    }

    delete items[id]
}