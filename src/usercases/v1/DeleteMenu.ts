import Menu from '../../models/menu'
import IMenu from '../../entities/interfaces/IMenu'

function deleteChild(arr: Array<IMenu> | Array<any>, parent : IMenu){
    let arrChild: Array<Number> = [];
    arr.map((item:IMenu) => {
        if (item?.relatedId === parent.id){
            let subitem: any = {id:item.id, relatedId:item?.relatedId, submenus:[]};
            subitem.submenus = deleteChild(arr, item)
            Menu.deleteOne({ id: item.id })
            arrChild.push(subitem)
        }
    });
    return arrChild;
}
export default
    async (id : String) => {
        const menu = await Menu.findOne({ "id": id })
        if (!menu || !menu?.id)
            return { message: 'Menu item not found' };

        const menuAll = await Menu.find();

        deleteChild(menuAll, menu);

        await Menu.deleteOne({ id: menu.id })
        return { id: menu.id };
    }
