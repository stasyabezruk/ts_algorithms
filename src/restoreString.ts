const restoreString = (str: string, indices: number[]): string => {
    return indices.reduce((acc, curValue, i) => {
        acc[curValue] = str[i];
        return acc;
    }, [] as string[]).join('');
}

console.log(restoreString('abc', [0,1,2]));
console.log(restoreString('aiohn',  [3,1,4,2,0]));
console.log(restoreString('aaiougrt',  [4,0,2,6,7,3,1,5]));
console.log(restoreString('art',  [1,0,2]));
