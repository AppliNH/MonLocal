export const getBasketContent = (state) => {
    console.log(state)
    var actualBasket = state.data.basket;
    var stallItems = [];

    state.stallsdata.stalls.forEach(stall => {
        if (stall.name !== "") {
            stall.items.map(item => stallItems.push(item));
        }
    })

    //state.stallsdata.stalls.find(stall => stall.id == stallID).items;

    actualBasket.map(elem => {
        const { name, price, image } = stallItems.find(item => item.id === elem.id);
        
        elem.name = name;
        elem.price = price;
        elem.image = image;
        return null;
    });

    return actualBasket;
}