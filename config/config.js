const argv = require('yargs').options({

    name: {
        alias: 'n',
        desc: 'con este parametro ingresamos el nombre de la planta',
        demand: true

    }

})

.options({
        list: {
            alias: 'l',
            desc: 'con este parametro listas el nombre y tipo de toda las plantas',
        }

    })
    .help()
    .argv


module.exports = {

    argv

}