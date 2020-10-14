const { response, crud } = require('../helpers');
const axios = require('axios');
const covidService = require('../service/covidService')
const { Op } = require("sequelize");

module.exports = {
    getData: (req, res) => {
        return response(null, {message: 'Hello Here'}, res);
    },
    generateCountry: async (req, res) => {
        try {
            const countries = await axios.get('https://api.covid19api.com/summary')
            const global = {
                Country: 'global',
                Slug: 'global',
                ISO2: 'GLOBAL'
            }
            const summaryGlobal = {
                total : countries.data.Global.TotalConfirmed,
                active: countries.data.Global.TotalConfirmed - countries.data.Global.TotalDeaths - countries.data.Global.TotalRecovered,
                death: countries.data.Global.TotalDeaths,
                recovered: countries.data.Global.TotalRecovered,
                update_date: new Date()
            }
            await covidService.saveData(global, summaryGlobal)
            for (let i=0,j=countries.data.Countries.length;i<j;i++) {
                const data = countries.data.Countries[i]
                const dataCountry = {
                    Country: data.Country,
                    Slug: data.Slug,
                    ISO2: data.CountryCode
                }
                const summaryCountry = {
                    total :data.TotalConfirmed,
                    active: data.TotalConfirmed - data.TotalDeaths - data.TotalRecovered,
                    death: data.TotalDeaths,
                    recovered: data.TotalRecovered,
                    update_date: data.Date
                }
                const country = await covidService.saveData(dataCountry, summaryCountry)
            }
            return response(null, {data: countries.data}, res)
        } catch (err) {
            console.log({err})
        }
    },
    getSummaryCase: async (req, res) => {
        try {
            const {id} = req.params

            const opts = {
                where: {code_country: id.toUpperCase()},
                include: ['summary']
            }

            if (id == 'TOTAL') {
                opts.where.code_country = 'global'
            }
            const country = await crud.findOneWithCustomOpts('country', opts)
            return response(null, {data:country}, res)
        } catch (err) {
            console.log({err})
            return response(err, null, res)
        }
    },
    getCountry: async (req, res) => {
        try {
            const {word} = req.query
            const opts = {
                name: {
                    [Op.like]: word+'%'
                }
                // name: 'Indonesia'
            }
            const countries = await crud.findAllWithOpts('country', opts)
            return response(null, {data:countries}, res)
        } catch (err) {
            console.log({err})
            return response(err, null, res)
        }
    }
}