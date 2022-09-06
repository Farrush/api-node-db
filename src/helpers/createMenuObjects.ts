type menuOptions = '' | 'index' | 'pedidos' | 'historia' |'cardapio'
export const createMenuObject = (activeMenu: menuOptions) =>{
    let returnObjects = {
        index:false,
        pedidos:false,
        historia:false,
        cardapio:false,
    }

    if(activeMenu !== ''){
        returnObjects[activeMenu] = true
    }
    return returnObjects

}