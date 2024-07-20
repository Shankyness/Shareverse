//yeh ek validation scehma hai ki frontend se jo aa raha hai woh thik bhi ya nhi shi
// fornmat mein hai ya nhi 

import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
    path: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    downloadContent: {
        type: Number,
        required: true,
        default: 0
    },
})

const File = mongoose.model('file', fileSchema);  // yeh ek model banaya gya hai collection ka name and and fileschema se vallidate karn ahia 

export default File;
