const Express = require('express');
const nodeController = require('../controllers/nodeController');

const router = new Express.Router();

router.get('/nodes', nodeController.getUpperNode);
router.get('/nodes/:parent_id/children', nodeController.getNodesByParentId);
router.delete('/nodes/:id', nodeController.delete);
router.put('/nodes/:id', nodeController.update);
router.post('/nodes', nodeController.create);

module.exports = router;