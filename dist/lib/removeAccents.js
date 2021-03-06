'use strict';
function removeAccents(input) {
    var accentsMap = {
        a: 'àáâãäåæ',
        c: 'ç',
        e: 'èéêëæ',
        i: 'ìíîï',
        n: 'ñ',
        o: 'òóôõöø',
        s: 'ß',
        u: 'ùúûü',
        y: 'ÿ'
    };
    var process = function (input) {
        if (!input) {
            return '';
        }
        var ret = '';
        for (var i = 0; i < input.length; i++) {
            var newValue = input.charAt(i);
            var objectKeys = Object.keys(accentsMap);
            for (var k = 0; k < objectKeys.length; k++) {
                if (accentsMap[objectKeys[k]].indexOf(newValue) > -1) {
                    newValue = objectKeys[k];
                    break;
                }
            }
            ret += newValue;
        }
        return ret;
    };
    return process(input);
}
exports.removeAccents = removeAccents;

//# sourceMappingURL=removeAccents.js.map
