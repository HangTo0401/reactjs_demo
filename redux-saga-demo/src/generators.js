console.log('Leanring Generator function')

function* generatorsFunction() {
    yield 2019
    return "abc"
}

const result = generatorsFunction();
console.log(result.next())
console.log(result.next())
console.log(result.next())
