const countrySchema = new mongoose.Schema({


    country: [{
        capital: { type: String },
        currency: { type: String },
        flag: { type: String },
        phoneCode: { type: String },
        Flag: { type: String },
        name: { type: String },
    }],
    timestamps: false
})

const Country = mongoose.model('Country', countrySchema)

export default Country

