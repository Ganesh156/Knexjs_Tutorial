const usersDAO = require('../dao/users')

class UserService{
    createUser(usersDTO){
        const {firstName, lastName,email} = usersDTO;
        return usersDAO.createUser(firstName, lastName, email);
    }
}

module.exports = new UserService();