"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MONGODB_URI = exports.PORT = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.PORT = process.env.PORT || 3000;
exports.MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://prueba:prueba1@clustertbk.ix5ws2i.mongodb.net/pruebaMongo';
