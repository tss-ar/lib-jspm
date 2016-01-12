function padLeft(totalWidth, paddingChar) {
    return Array(totalWidth - String(this).length + 1).join(paddingChar || '0') + this;
}
exports.padLeft = padLeft;

//# sourceMappingURL=numberExtensions.js.map
