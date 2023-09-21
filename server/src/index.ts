import {config} from 'dotenv'
config();

import express, { Request, Response } from "express"
import mongoose from "mongoose"
import cors from 'cors'
import { getDecksController } from './controllers/getDecksController';
import { createDeckController } from './controllers/createDeckController';
import { deleteDeckController } from './controllers/deleteDeckController';
import { getDeckController } from './controllers/getDeckController';
import { createCardForDeckController } from "./controllers/createCardForDeckController";
import { deleteCardOnDeckController } from "./controllers/deleteCardOnDeckController";
// import { loginController } from "./controllers/loginController";

const PORT = 5000

const app = express()

app.use(cors({
    origin: '*'
}))

app.use(express.json())

app.get('/decks/', getDecksController)
app.post('/decks/', createDeckController)
app.delete('/decks/:deckId', deleteDeckController)
app.get("/decks/:deckId", getDeckController);
app.post("/decks/:deckId/cards", createCardForDeckController);
app.delete("/decks/:deckId/cards/:index", deleteCardOnDeckController);

/**
 * app.get('/login', loginController) // login and sign up
 */

const pw = process.env.PW
const connect = `mongodb+srv://michaeljgoerlitz:${pw}@cluster0.6gp3dlk.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(connect).then(() => {
    console.log(`Listening on ${PORT}`);
    app.listen(PORT)
});