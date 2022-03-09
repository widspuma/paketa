import { Request, Response } from 'express'

import createMenu from '../usercases/V1/CreateMenu';
import deleteMenu from '../usercases/v1/DeleteMenu';
import showMenu from '../usercases/v1/ShowMenu';

export default{
     create: async (req: Request, res: Response): Promise<Response> => {
        const data = await createMenu(req.body);

        if (data?.id)
            return res.status(201).json({ id: data.id })
        else
            return res.status(400).json({ message : data.message });
    },
    delete: async (req: Request, res: Response): Promise<Response> => {

        const data = await deleteMenu(req.params.id);

        if (data?.id)
            return res.status(200);
        else
            return res.status(400).json({ message : data.message });
    },
    getAll: async (req: Request, res: Response): Promise<Response> => {

        const data = await showMenu();
        if (data)
            return res.status(200).json(data)
        else
            return res.status(400).json({ message : 'Unexpeted error.' });
   },
}