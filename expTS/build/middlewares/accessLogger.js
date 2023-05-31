"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function accessLogger(format) {
    return (req, res, next) => {
        const logFolder = process.env.LOG_FOLDER || 'logs';
        const logFilePath = path_1.default.join(__dirname, logFolder, 'access.log');
        const logData = {
            timestamp: new Date().toISOString(),
            url: req.url,
            method: req.method,
        };
        if (format === 'completo') {
            logData.httpVersion = req.httpVersion;
            logData.userAgent = req.headers['user-agent'];
        }
        const logEntry = `${logData.timestamp} - ${logData.url} - ${logData.method}` +
            (logData.httpVersion ? ` - ${logData.httpVersion}` : '') +
            (logData.userAgent ? ` - ${logData.userAgent}` : '');
        fs_1.default.appendFile(logFilePath, logEntry + '\n', (err) => {
            if (err) {
                console.error('Erro ao salvar o log de acesso:', err);
            }
        });
        next();
    };
}
exports.default = accessLogger;
