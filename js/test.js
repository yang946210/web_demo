
function stringTest() {
    // 案例1
    let string1 = 'foo';
    let string2 = string1;
    string1 = 'bar';
    alert(string1+"---"+ string2);
}

function objectTest() {
    let object1 = {
        name: 'johan',
        age: 23,
    };
    let object2 = object1;
    alert(object1.name+"---"+ object2.name);
}