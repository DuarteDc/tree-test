export const printTree = (size = 10, branch = "0") => {

    if (typeof size !== 'number') throw "Size of tree must be a number";
    if (typeof branch !== 'string') throw "Branches of tree must be a string";

    let tree = [];
    for (let i = 0; i < size; i++) {
        if (i === 0)
            tree.push(`${' '.repeat(size - i)}${'*'}`);
        else
            tree.push(`\n ${' '.repeat(size - i)}${branch.repeat((i * 2) - 1)}`);
    }
    return tree.join('');
}

console.log(printTree());
console.log(printTree(5));
console.log(printTree(15, "^"));