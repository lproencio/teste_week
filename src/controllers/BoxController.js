const Box = require('../models/Box');

class BoxController {
    async home(req, res){
        return res.send('==+ OK +==')
    }

    async store(req, res) {
        
        const box = await Box.create( req.body.title );

        return res.json(box);
    };

    async show(req, res) {
        const box = await Box.findById(req.params.id).populate({
            path:'files',
            options: { sort: { createdAt: -1 }}
        });

        return res.json(box)
    }
}

module.exports = new BoxController;