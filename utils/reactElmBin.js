const React = require('react')

function Hello(props) {
  return React.createElement(
    "div",
    null,
    "Hello ",
    props.name,
    '!'
  )
}

const str = JSON.stringify(Hello.toString())
const bin = new Buffer(str)
const elm = eval(bin)
console.log(elm)
