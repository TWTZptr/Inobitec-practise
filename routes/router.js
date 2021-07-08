const Express = require('express');
const nodeController = require('../controllers/nodeController');

const router = new Express.Router();

router.get('/', nodeController.getUpperNode);
router.get('/:parent_id', nodeController.getNodesByParentId);
router.delete('/:id', nodeController.delete);
router.put('/', nodeController.update);
router.post('/', nodeController.create);

module.exports = router;