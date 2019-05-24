const express = require('express');
const router = express.Router();
const list = require('./actions/List');
const store = require('./actions/Store');
const update = require('./actions/Update');
const remove = require('./actions/Remove');

router.get('/', list.index);
router.post('/', store.index);
router.put('/:id', update.index);
router.delete('/:id', remove.index);

module.exports = router;
