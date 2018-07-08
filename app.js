const argv = require('./config/config').argv
const { request } = require('./api/strainApi')
const colors = require('colors')



request(argv.name).then(msje => {

    console.log('==========================================='.red)

    console.log(`Nombre: ${ argv.name }`)
    console.log(`Id : ${ msje.id }`)
    console.log(`Race: ${ msje.race }`)

    let positive = msje.effects["positive"]
    let negative = msje.effects["negative"]
    let medical = msje.effects["medical"]

    console.log('================== Flavors ================='.red)

    for (var i = 0; i < msje.flavors.length; i++) {

        console.log(msje.flavors[i])
    }

    console.log('============= Effects positive =============')


    for (var i = 0; i < positive.length; i++) {

        console.log(positive[i])
    }

    console.log('============= Effects negative ============='.red)

    for (var i = 0; i < negative.length; i++) {

        console.log(negative[i])
    }

    console.log('============= Efects Medical ==============='.red)

    for (var i = 0; i < medical.length; i++) {

        console.log(medical[i])
    }

    console.log('==========================================='.red)




}).catch(e => {

    console.log(e)
})