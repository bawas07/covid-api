const { crud } = require('../helpers');
const axios = require('axios');

module.exports = {
   saveData: async (data, summaryData) => {
       try {
           console.log('find or insert country with code: '+data['ISO2'])
           const where = {code_country: data['ISO2']}
           const value = {
               name: data.Country,
               slug: data.Slug
           }
           const country = await crud.findOneOrCreate('country', where, value)
           const summary = await crud.updateOrCreate('summary', {country_id: country.id}, summaryData)
           return country
       } catch (err) {
           console.log({err})
           return err
       }
   } 
}