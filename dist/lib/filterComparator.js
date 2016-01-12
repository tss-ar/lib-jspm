'use strict';
var removeAccents_1 = require('./removeAccents');
function filterComparator(obj, text) {
    if (obj && text && typeof obj === 'object' && typeof text === 'object') {
        for (var objKey in obj) {
            if (objKey.charAt(0) !== '$' && Object.prototype.hasOwnProperty.call(obj, objKey) &&
                filterComparator(obj[objKey], text[objKey])) {
                return true;
            }
        }
        return false;
    }
    if (text === undefined || text === null) {
        return false;
    }
    if (text === '') {
        return true;
    }
    text = text.toLowerCase();
    var textSplit = text.split(' ');
    for (var i = 0; i < textSplit.length; i++) {
        var result = removeAccents_1.removeAccents(("" + obj).toLowerCase()).indexOf(removeAccents_1.removeAccents(textSplit[i])) > -1;
        if (!result) {
            return false;
        }
    }
    return true;
}
exports.filterComparator = filterComparator;

//# sourceMappingURL=filterComparator.js.map
