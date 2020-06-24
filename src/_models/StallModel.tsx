import Stall_Item from "./Stall_Item";
import Category from "./Category";

interface Stall {
    id: number;
    name: string;
    color:string;
    categories: Array<Category>;
    backgroundImage: string;
    items: Array<Stall_Item>;

    // constructor(name: string, backgroundImage: string, items: Array<Stall_Item>) {
    //     this.name = name;
    //     this.backgrounImage = backgroundImage;
    //     this.items = items;
    // }

}

export default Stall