const createUser = (req, res) => {
    const body = req.body
    res.send({body})
};

const getUsers = (req, res) => {
    res.send('Esto es la ruta de usaurio')
}

const getDetailUser = (req, res) => {
    const {params, query} = req
    res.send({params, query})
};

const updateUser = (req, res) => {
    res.send('algo')
};

const deleteUser = (req, res) => {
    res.send('algo')
};

module.exports = {
  createUser,
  getUsers,
  getDetailUser,
  updateUser,
  deleteUser,
};
