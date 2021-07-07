const Express = require('express');
const nodeController = require('../controllers/nodeController');

const router = new Express.Router();

router.get('/', nodeController.getUpperNodes);
router.post('/', nodeController.create);
router.get('/:parentId', nodeController.getNodeByParentId);
router.delete('/:id', nodeController.delete);

module.exports = router;