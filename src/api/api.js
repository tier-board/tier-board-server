'use strict';

import express from 'express';
const router = express.Router();
import dateFormat from 'dateformat';
const now = new Date();

import modelFinder from '../middleware/models.js';
router.param('model', modelFinder);

let sendJSON = (res,data) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.setHeader('Content-Type', 'application/json');
  res.write( JSON.stringify(data) );
  res.end();
};

router.get('/', (req,res) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.write(`Hello, welcome to my Tier board beginning`);
  res.end();
});

router.get('/api/v1/:model', (req,res,next) => {
  //req.model.find({})
  req.model.find({date: dateFormat(now,'mmm dd, yyyy')})
    .then( data => sendJSON(res,data) )
    .catch( next );
});

router.get('/api/v1/:model/:id', (req,res,next) => {
  req.model.findById(req.params.id)
    .then( data => sendJSON(res,data) )
    .catch( next );
});

// router.get('api/v1/:model/:id', (req,res,next) => {
//   req.model.findById(req.params.id)
//     .populate('station').exec()
//     .then(data => sendJSON(res,data))
//     .catch(next);
// });

router.post('/api/v1/:model', (req,res,next) => {
  let record = new req.model(req.body);
  record.save()
    .then( data => sendJSON(res,data) )
    .catch( next );
});

router.put('/api/v1/:model/:id', (req,res, next) => {
  req.model.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then( data => sendJSON(res,data) )
    .catch(next);
});

router.delete('/api/v1/:model/:id', (req,res,next) => {
  req.model.findByIdAndDelete(req.params.id)//or .findByIdAndRemove
    .then(data => sendJSON(res, data))
    .catch(next);
});

export default router;