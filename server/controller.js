module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db');

        db.get_inventory()
        .then(inventory => res.status(200).send(inventory))
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
}

