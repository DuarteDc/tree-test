
const printTree = (size = 10, branch = "0") => {
    let tree = [];  
    for (let i = 0; i < size; i++) {
        if (i === 0)
            tree.push(`${' '.repeat(size - i)}${'*'}`);
        else
            tree.push(`\n ${' '.repeat(size - i)}${branch.repeat((i * 2) - 1)}`);
    }
    console.log(tree.join(''));
}

//printTree(5)

//printTree(10, "X")
printTree(15, "^")