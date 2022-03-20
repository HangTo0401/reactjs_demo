console.log('Leanring Generator function')

function* printName() {
    yield 'Print name';
}

function* hello() {
    yield 'Hello';
    yield* printName();
    yield 'Bye';
}

function* generatorsFunction() {
    while(true) {
        yield 'Loading...';
    }

    // câu lệnh 1
    yield 2019 // dừng tại đây, done là false do vẫn còn giá trị trả về

    // chạy lại vị trí đã dừng
    // câu lệnh 2
    return "abc" // sẽ kết thúc luôn generator functions và câu gọi next tiếp theo sẽ không còn thực thi
}

const result = generatorsFunction(); // iterators
console.log(result.next())
console.log(result.next())
console.log(result.next())

const result1 = hello();
console.log(result1.next())
console.log(result1.next())
console.log(result1.next())
