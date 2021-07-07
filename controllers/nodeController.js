const network = require('../models/models');

class NodeController {
    async create(req, res) {
        try {
            const {name, ip, port, parentId} = req.query;
            const node = await network.create({
                name,
                ip,
                port,
                parentId
            });
            await res.send(node);
        } catch (err) {
            console.log(err);
        }
    }

    async getUpperNodes(req, res) {
        try {
            const nodes = await network.findAll({where: {parentId: -1}, raw: true});
            res.send(nodes);
        } catch (err) {
            console.log(err);
        }
    }

    async getNodesByParentId(req, res) {
        try {
            const parentId = req.params.parentId;
            const nodes = await network.findAll({where: {parentId}, raw: true});
            res.send(nodes);
        } catch (err) {
            console.log(err);
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id;
            await network.destroy({where: {id}});
            res.sendStatus(200);
        } catch (err) {
            console.log(err);
        }
    }

    async update(req, res) {
        try {
            const {id, name, ip, port, parentId} = req.query;
            const result = await network.update({name, ip, port, parentId}, {where: {id}});
            res.sendStatus(200);
        } catch (err) {
            console.log(err);
        }
    }
}

const nodeController = new NodeController();

module.exports = nodeController;