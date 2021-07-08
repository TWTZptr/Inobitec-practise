const network = require('../models/model');

class NodeController {
    async create(req, res) {
        try {
            const {name, ip, port, parent_id} = req.body;
            const node = await network.create({
                name,
                ip,
                port,
                parent_id
            });
            await res.json(node);
        } catch (err) {
            console.log(err);
        }
    }

    async getUpperNodes(req, res) {
        try {
            const nodes = await network.findAll({where: {parent_id: null}, raw: true});
            res.send(nodes);
        } catch (err) {
            console.log(err);
        }
    }

    async getNodesByParentId(req, res) {
        try {
            const {parent_id} = req.params;
            const nodes = await network.findAll({where: {parent_id}, raw: true});
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
            const {id, name, ip, port, parent_id} = req.body;
            const node = {name, ip, port, parent_id};
            await network.update(node, {where: {id}});
            res.json(node);
        } catch (err) {
            console.log(err);
        }
    }
}

const nodeController = new NodeController();

module.exports = nodeController;