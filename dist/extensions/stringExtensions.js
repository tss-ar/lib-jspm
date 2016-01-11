function trimChar(trimChar) {
    if (!trimChar) {
        trimChar = '\\s';
    }
    var regex = new RegExp("^" + trimChar + "+|" + trimChar + "+$", 'gm');
    return this.replace(regex, '');
}
exports.trimChar = trimChar;
function trimCharLeft(trimChar) {
    if (!trimChar) {
        trimChar = '\\s';
    }
    var regex = new RegExp("^" + trimChar + "+", 'gm');
    return this.replace(regex, '');
}
exports.trimCharLeft = trimCharLeft;
function trimCharRight(trimChar) {
    if (!trimChar) {
        trimChar = '\\s';
    }
    var regex = new RegExp(trimChar + "+$", 'gm');
    return this.replace(regex, '');
}
exports.trimCharRight = trimCharRight;

//# sourceMappingURL=stringExtensions.js.map
