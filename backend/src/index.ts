import express from 'express';
import nacl from 'tweetnacl';
import { generateMnemonic,mnemonicToSeedSync } from 'bip39';
import cors from 'cors';
const app=express()  

app.use(cors())

app.get('/generateMnemonic',(req,res)=>{
const mnemonic=generateMnemonic()

res.json({mnemonic})


})
app.get('/addWallet',(req,res)=>{
const seed=mnemonicToSeedSync(mnemonic)

})


app.listen(3000)