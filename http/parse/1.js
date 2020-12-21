function find1(str) {
    let foundA = false, foundB = false;
    for (let c of str) {
        if (c === 'a') {
            foundA = true
        } else if (foundA && c === 'b') {
            return true
        } else {
            foundA = false
        }
    }
    return false
}

console.log(find1('acfab'));
console.log(find1('acb'))
// abc
function find2(str) {
    let foundA = false, foundB = false;
    for (let c of str) {
        if (c === 'a') {
            foundA = true
        } else if (foundA && c === 'b') {
            foundB = true
        } else if (foundB && c === 'c') {
            return true
        } else {
            foundA = false
            foundB = false
        }
    }
}