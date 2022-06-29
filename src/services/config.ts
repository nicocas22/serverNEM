import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 3000;
export const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://prueba:prueba1@clustertbk.ix5ws2i.mongodb.net/pruebaMongo'