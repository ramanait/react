const mongoose = require('mongoose');
let Schema = mongoose.Schema;
const DealsSchema = new Schema({
    dealInfo: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
    },
    dealDate: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
    },
    img: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
    },
    startTime: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
    },
    endtTime: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
    },
})

const Deal = mongoose.model('deal', DealsSchema);
module.exports = Deal;