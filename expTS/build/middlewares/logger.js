"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function logger(tipo) {
    return (req, res, next) => {
        if (tipo === 'completo') {
            console.log(`${new Date().toISOString} ${req.method} ${req.url}`);
        }
        else {
            console.log(`${new Date().toISOString} ${req.url}`);
        }
        next();
    };
}
exports.default = logger;
