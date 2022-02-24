module.exports = function check(str, bracketsConfig) {
  let checker = true;
    while (checker) {
        checker = false;
        for (let i = 0; i < bracketsConfig.length; i++) {
            let indexFromToDelete = str.indexOf(bracketsConfig[i][0] + bracketsConfig[i][1]);
            if (indexFromToDelete >= 0) {
                str = str.slice(0, indexFromToDelete) + str.slice(indexFromToDelete + 2);
                checker = true;
            }
        }
    }
    if (str.length === 0) {
        return true;
    }
    return false;
}
