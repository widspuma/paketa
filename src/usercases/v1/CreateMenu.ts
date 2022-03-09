import Menu from '../../models/menu'
import IMenu from '../../entities/Interfaces/IMenu'

export default
     async (data: IMenu) => {
        try{

            const maxMenu = await Menu.find({}).sort({'id': -1}).limit(1);
            if (maxMenu[0]?.id)
                data.id = maxMenu[0]?.id + 1;
            else
                data.id = 1;

            if (typeof data.relatedId !== 'undefined'){
                if (data.relatedId === data.id)
                    return { message: 'RelatedId must be diferente of id.'};

                if (data.relatedId > 0){
                    const menu = await Menu.findOne({ "id": data.relatedId })
                    if (!menu || !menu?.id)
                        return { message: 'relatedId not found'};
                }
            }

            if (typeof data.relatedId !== 'undefined'){
                return { message: 'RelatedId must be diferente of id.'};
            }
            const { id } = await Menu.create(data)
            return { id: id};
            ;
        }
        catch (error){
            return { message: 'Unexpeted error.'};
        }
    }
