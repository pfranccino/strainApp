const axios = require('axios');


let request = async(name) => {

    let results = await axios.get('http://strainapi.evanbusse.com/bniGSiK/strains/search/all')


    let resultado = results.data

    return resultado[name]

}


module.exports = {
    request
}