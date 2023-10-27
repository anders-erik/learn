const keys = range.values[0];
const json = range.values.slice(1).map(entry => {
    const retVal = {};
    keys.forEach((key, index) => {
        retVal[key] = entry[index];
    });
    return retVal;
});
console.log(json);
