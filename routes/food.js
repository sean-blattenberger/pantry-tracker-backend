const express = require('express');
const knex = require('./foodStores')
const router = module.exports = require('express').Router();
const queries = require('../db/queries')

router.get("/", (request, response, next) => {
    queries.list().then(foodStores => {
        response.json({foodStores});
    }).catch(next);
});

router.get("/:id", (request, response, next) => {
    queries.read(request.params.id).then(foodStores => {
        foodStores
            ? response.json({foodStores})
            : response.status(404).json({message: 'Not found'})
    }).catch(next);
});

router.post("/", (request, response, next) => {
    queries.create(request.body).then(foodStores => {
        response.status(201).json({foodStores: foodStores});
    }).catch(next);
});

router.delete("/:id", (request, response, next) => {
    queries.delete(request.params.id).then(() => {
        response.status(204).json({deleted: true});
    }).catch(next);
});

router.put("/:id", (request, response, next) => {
    queries.update(request.params.id, request.body).then(foodStores => {
        response.json({foodStores: foodStores[0]});
    }).catch(next);
});

module.exports = router;
