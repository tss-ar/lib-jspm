function trimChar(value, trimChar) {
    if (!trimChar) {
        trimChar = '\\s';
    }
    var regex = new RegExp("^" + trimChar + "+|" + trimChar + "+$", 'gm');
    return value.replace(regex, '');
}
exports.trimChar = trimChar;
function trimCharLeft(value, trimChar) {
    if (!trimChar) {
        trimChar = '\\s';
    }
    var regex = new RegExp("^" + trimChar + "+", 'gm');
    return value.replace(regex, '');
}
exports.trimCharLeft = trimCharLeft;
function trimCharRight(value, trimChar) {
    if (!trimChar) {
        trimChar = '\\s';
    }
    var regex = new RegExp(trimChar + "+$", 'gm');
    return value.replace(regex, '');
}
exports.trimCharRight = trimCharRight;

//# sourceMappingURL=stringExtensions.js.map
