import Stall_Item from "./Stall_Item";

interface Stall {
    name: string;
    color:string;
    backgroundImage: string;
    items: Array<Stall_Item>;

    // constructor(name: string, backgroundImage: string, items: Array<Stall_Item>) {
    //     this.name = name;
    //     this.backgrounImage = backgroundImage;
    //     this.items = items;
    // }

}

export default Stall