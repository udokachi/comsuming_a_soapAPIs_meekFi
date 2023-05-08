import mongoose from"mongoose";
const countrySchema = new mongoose.Schema({


    country: [{
        name: { type: String },
        capital: { type: String },
        currency: { type: String },
        flag: { type: String },
        phoneCode: { type: String },
        Flag: { type: String },
        
    }]
})

const Country = mongoose.model('Country', countrySchema)

export default Country