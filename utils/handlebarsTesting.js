const hb = require('handlebars'),
    fs = require('fs')
const source = fs.readFileSync('./tes.hbs', 'utf-8')

const course = hb.compile(source)
console.log(course({ message: 'Hello friend!' }))