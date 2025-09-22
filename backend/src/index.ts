import express from 'express';
import nacl from 'tweetnacl';
import { generateMnemonic } from 'bip39';
import cors from 'cors';
const app=express()  

app.use(cors())

app.get('/',(req,res)=>{
const mnemonic=generateMnemonic()
res.json({mnemonic})

})
app.listen(3000)