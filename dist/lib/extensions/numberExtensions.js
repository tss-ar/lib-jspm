function padLeft(value, totalWidth, paddingChar) {
    return Array(totalWidth - String(value).length + 1).join(paddingChar || '0') + value;
}
exports.padLeft = padLeft;

//# sourceMappingURL=numberExtensions.js.map
