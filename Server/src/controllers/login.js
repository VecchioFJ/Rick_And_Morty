const users = require('../utils/users')

const login = (req, res) => {
    const { email, password } = req.query;

    const userFound = users.find((user) => user.email === email && user.password === password)

    userFound
    ? res.status(200).json({ access: true })
    : res.status(200).json({ access: false })  // tendria mas sentido devolver un 404, en la HW pedia 200
}

module.exports = {
    login
}