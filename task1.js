function insertWhitespace(str) {
  return str.replace(/([A-Z])/g, ' $1').trim()
}

console.log(insertWhitespace('HelloWorld') === 'Hello World');
console.log(insertWhitespace('MarvinTalksTooMuch') === 'Marvin Talks Too Much');
