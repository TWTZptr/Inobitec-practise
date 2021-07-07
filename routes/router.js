const Express = require('express');
const nodeController = require('../controllers/nodeController');

const router = new Express.Router();

router.get('/', nodeController.getUpperNodes);
router.post('/', nodeController.create);
router.get('/:parentId', nodeController.getNodesByParentId);
router.delete('/:id', nodeController.delete);
router.put('/', nodeController.update);

module.exports = router;