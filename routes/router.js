const Express = require('express');
const nodeController = require('../controllers/nodeController');

const router = new Express.Router();

router.get('/', nodeController.getUpperNodes);
router.post('/', nodeController.create);
router.get('/:parentId', nodeController.getNodeById);

module.exports = router;