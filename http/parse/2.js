function find (str) {
    let state = start; 
    for (let c of str) {
        debugger;
        state = state(c);
    }
    return state === end;
}

function start(c) {
    if (c === 'a') return foundA(c);
    return start
}

function end (c) {
    return end
}

function foundA(c) {
    if (c === 'a') return foundB;
    return start(c)
}
function foundB(c) {
    if (c === 'b') return foundC;
    return start(c)
}
function foundC(c) {
    if (c === 'c') return end;
    return start(c)
}

// console.log(find('acfabcbacbbac'));
console.log(find('ababc'))
// console.log(find('ababab'))



// abcabx