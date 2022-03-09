import createMenu from '../src/usercases/v1/CreateMenu';
import deleteMenu from '../src/usercases/v1/DeleteMenu';
import showMenu from '../src/usercases/v1/ShowMenu';
import IMenu from '../src/entities/Interfaces/IMenu';
import mongoose from '../src/adapters/monbodb';

let id: String;

describe('Register menu on create menu use case', () => {

    afterAll( () => {
      mongoose.connection.close();
    })

    test('should register new menu on db with complete data', async () => {
      var menu: IMenu = {
            name:"Test Menu 1",
            relatedId:0,
            id:0
      }
      let resp = await createMenu(menu)

      expect(parseInt(resp?.id)).toBeGreaterThan(0)
      id = resp?.id;
    })

    test('should return json with tree menus on db', async () => {
      let resp = await showMenu()

      expect(resp.length).toBeGreaterThan(0)
    })

    test('should delete menu on db with id', async () => {
      let resp = await deleteMenu(id)

      expect(parseInt(resp?.id)).toBeGreaterThan(0)
    })

});