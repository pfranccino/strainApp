const argv = require('yargs').options({

        name: {
            alias: 'n',
            desc: 'con este parametro ingresamos el nombre de la planta',
            demand: true

        }

    }).help()
    .argv


module.exports = {

    argv

}