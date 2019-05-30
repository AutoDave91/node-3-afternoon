

const create = (req, res, next)=>{
    let db = req.app.get('db');
    let {name, description, price, image_url} = req.body;

    db.create_product([name, description, price, image_url])
        .then(()=>res.sendStatus(200))
        .catch(err =>{
            res.status(500).send({error: 'Error creating product. please try restarting your device.'})
            console.log('Error creating')
        })
};
const getAll = (req, res, next)=>{
    let db = req.app.get('db');
    db.read_products()
        .then(products => res.status(200).send(products))
        .catch(err =>{
            res.status(500).send({error: 'Error finding products. please try restarting your device.'})
            console.log('Error reading all')
        })
};
const getOne = (req, res, next)=>{
    let db = req.app.get('db');
    let {id} = req.params;

    db.read_product(id)
        .then(product =>res.status(200).send(product))
        .catch(err =>{
            res.status(500).send({error: 'Error finding product. please try restarting your device.'})
            console.log('Error reading specific')
        })
};
const update = (req, res, next)=>{
    let db = req.app.get('db');
    let {id} = req.params;
    let {desc} = req.query;

    db.update_product([id, desc])
        .then(()=>res.sendStatus(200))
        .catch(err =>{
            res.status(500).send({error: 'Error updating product. please try restarting your device.'})
            console.log('Error updating')
        })
};
const deletePro = (req, res, next)=>{
    let db = req.app.get('db');
    let {id} = req.params;

    db.delete_product(id)
        .then(()=>res.sendStatus(200))
        .catch(err =>{
            res.status(500).send({error: 'Error deleting product. please try restarting your device.'})
            console.log('Error deleting')
        })
};

module.exports ={
    create, getAll, getOne, update, deletePro
}