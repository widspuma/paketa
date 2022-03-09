import Menu from '../../models/menu'
import IMenu from '../../entities/interfaces/IMenu'

function getChild(arr: Array<IMenu> | Array<any>, parent : IMenu | null){
    
    if (parent !== null){
        let arrChild: Array<any> = [];
        arr.map((item:IMenu) => {
            if (item?.relatedId === parent.id){
                let subitem: any = {id:item.id.toString(), name:item.name, relatedId:item?.relatedId};
                subitem.submenus = getChild(arr, item)
                if (subitem.submenus.length === 0)
                    delete subitem.submenus;
                delete subitem.relatedId;
                arrChild.push(subitem)
            }
        });
        return arrChild;
    }
    let final:Array<any> = []
    arr.map( ( item ) => {
        if (typeof item?.relatedId === 'undefined'){
            let subitem: any = {id:item.id.toString(), name:item.name, relatedId:item?.relatedId, submenus:[]};
            subitem.submenus = getChild(arr, item)
            if (subitem.submenus.length === 0)
                delete subitem.submenus;
            delete subitem.relatedId;
            final.push(subitem);
        }
    });
    return final;
}

export default 
    async () => {
        const menu = await Menu.find()
        return getChild(menu, null);
    }

