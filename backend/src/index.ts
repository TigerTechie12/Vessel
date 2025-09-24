import express from 'express';
import nacl from 'tweetnacl';
import { generateMnemonic,mnemonicToSeedSync } from 'bip39';
import cors from 'cors';
const app=express()  

app.use(cors())
app.use(express.json())
app.listen(3000)