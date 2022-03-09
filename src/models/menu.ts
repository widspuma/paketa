import { model, Schema } from 'mongoose'
import IMenu from '../entities/Interfaces/IMenu'

const schema = new Schema<IMenu>({
    name: { type: String, required: true },
    relatedId: { type: Number, required: false },
    id: { type: Number, required: false }
})

export default model<IMenu>('menu', schema, 'menus')
