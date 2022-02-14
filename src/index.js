const express = require('express');
const dbConnection = require('./db/config');
require('./db/config');
const port = process.env.PORT || 8080;
const mongoose = require('mongoose');
const plantsAndPots = require('./model/plantsAndPots');


const app = express();
dbConnection();

app.use(express.static('public'));
app.use(express.json());


app.get('/', (req, res) => {
    res.send('API KETRAWE');
})

app.get('/productos', (req, res) => {
    plantsAndPots.find()
                .then((result) => {
                    res.send(result)
                })
                .catch(err => res.status(404).send(err));
});


app.get('/productos/:id', (req,res) => {
    const _id = req.params.id;
    plantsAndPots.findById(_id)
        .then((result) => {
            if(!result) {
                return res.status(404).send("Product not found");
            }
            res.status(200).send(result)
        }) 
        .catch(err => {
            console.log(error);
            res.status(500).send(err)  
        }) 
});


app.post('/productos', (req, res) => {
    const product = new plantsAndPots(req.body)
    product.save()
            .then(() => {
                res.status(201).send(product);
            })
            .catch((err) => {
                res.status(400).send(err);
            });
})


app.patch("/productos/:id", async (req, res) => {
    try {
      await plantsAndPots.findByIdAndUpdate(req.params.id, req.body);
      await plantsAndPots.save();
      res.send(result);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  

app.delete("/productos/:id", async (req, res) => {
    try {
      const producto = await plantsAndPots.findByIdAndDelete(req.params.id);
      if (!producto) res.status(404).send("No se encontró el producto");
      res.status(200).send();
    } catch (error) {
      response.status(400).send(error);
    }
  });



app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto 8080`)
})