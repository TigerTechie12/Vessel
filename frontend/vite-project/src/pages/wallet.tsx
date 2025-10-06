import { useState,useMemo, useEffect } from "react"
import {Header} from "../components/header/header"
import  {InputBox} from  "../components/input/input"
import {mnemonicToSeedSync} from 'bip39'
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import nacl from 'tweetnacl'

interface Wallet{
  secret:Uint8Array;
  publicKey:string;
}
export function Wallets(){
    const [value,setValue]=useState('')
const [mnemonic]=useState(localStorage.getItem('phrase'))
const [wallet,setWallet]=useState<Wallet[]>([])
const [clicksCount,setClicksCount]=useState(0)


const seed=useMemo(()=>{
 if (!mnemonic) {
      return null;
    }
    return mnemonicToSeedSync(mnemonic);
},[mnemonic])

useEffect(()=>{
let path=`m/44'/501'/${clicksCount-1}'/0'`
if(!seed){return;}
    let derivedseed=derivePath(path,seed.toString("hex")).key
      let secret = nacl.sign.keyPair.fromSeed(derivedseed).secretKey;
 let publicKey=Keypair.fromSecretKey(secret).publicKey.toBase58()
    let w={secret,publicKey}
    let updateWallet=[...wallet,w]
         setWallet(updateWallet)
},[clicksCount,seed])


  return <div>
   <Header></Header>
   
   <InputBox onChange={(e:any)=>{setValue(e.target.value)}}></InputBox>
   {value === mnemonic ?
  <button onClick={()=>{
    setClicksCount(clicksCount+1)}}> Add Wallet </button>
    : null
   }

<h2>Vault</h2>
<ul>
{
wallet.map((w)=>(
  <li key={w.publicKey}>
    <p><strong>Public Key:</strong>{w.publicKey}</p>
    <p><strong>Secret Key (Hex):</strong> {Buffer.from(w.secret).toString('hex')}</p>
  </li>
))

}

</ul>
  </div>
 
}


  