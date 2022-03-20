console.log('Leanring Generator function')

function* generatorsFunction() {
    // câu lệnh 1
    yield 2019 // dừng tại đây, done là false do vẫn còn giá trị trả về

    // chạy lại vị trí đã dừng
    // câu lệnh 2
    return "abc" // sẽ kết thúc luôn generator functions và câu gọi next tiếp theo sẽ không còn thực thi
}

const result = generatorsFunction();
console.log(result.next())
console.log(result.next())
console.log(result.next())
