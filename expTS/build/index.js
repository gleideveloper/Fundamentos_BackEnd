"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validateEnv_1 = __importDefault(require("./utils/validateEnv"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
// import accessLogger from './middlewares/accessLogger';
dotenv_1.default.config();
(0, validateEnv_1.default)();
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3333;
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('combined'));
// app.use(accessLogger('completo'));
app.use((req, res, next) => {
    console.log('oi');
    next();
});
app.get('/welcome', (req, res) => {
    res.send('Welcome to Web Academy');
});
app.listen(PORT, () => {
    console.log(`Servidor escultando na port ${PORT}`);
});
