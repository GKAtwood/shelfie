module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db');

        db.get_inventory()
        .then(products => res.status(200).send(products))
        .catch(err => res.status(500).send(err))
    },

    addProduct: (req, res) => {
        const {productName, productPrice, productImg} = req.body,
              db = req.app.get('db');
    
        console.log(req.body)
    
        db.create_product({productName, productPrice, productImg})
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    },
    deleteProduct: (req, res) => {
        const {id} = req.params,
              db = req.app.get('db');

        db.delete_product(id)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    },

    editProduct: (req, res) => {
        const {id} = req.params,
              {productName, productPrice, productImg} = req.body,
              db = req.app.get('db');

        db.edit_product({productName, productPrice, productImg, id})
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    },
 
}

