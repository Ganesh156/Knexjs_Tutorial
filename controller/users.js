const usersService = require('../service/users')

class UsersController {
    async createUsers(req, res){
        try{
            const id = await usersService.createUser(req.body);
            res.status(201).json(id);
        }catch(e){
            console.error(e);
        }
    }
}

module.exports = new UsersController();