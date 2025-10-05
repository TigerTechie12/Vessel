import { useState,useMemo, useEffect } from "react"
import {Header} from "../components/header/header"
import  {InputBox} from  "../components/input/input"
import {mnemonicToSeedSync} from 'bip39'
import { derivePath } from "ed25519-hd-key";
import { Keypair, PublicKey } from "@solana/web3.js";
import nacl from 'tweetnacl'
export function Wallets(){
    const [value,setValue]=useState('')
const [mnemonic,setMnemonic]=useState(localStorage.getItem('phrase'))
const [wallet,setWallet]=useState([])
const [clicksCount,setClicksCount]=useState(0)


const seed=useMemo(()=>{
 if (!mnemonic) {
      return null;
    }
    return mnemonicToSeedSync(mnemonic);
},[mnemonic])

useEffect(()=>{
let path=`m/44'/501'/${clicksCount}'/0'`

    let derivedseed=derivePath(path,seed.toString("hex")).key
      let secret = nacl.sign.keyPair.fromSeed(derivedseed).secretKey;
 let publicKey=Keypair.fromSecretKey(secret).publicKey.toBase58()
    let w=[secret,publicKey]
    let updateWallet=[...wallet,w]
         setWallet(updateWallet)
},[clicksCount])


  return <div>
   <Header></Header>
   
   <InputBox onChange={(e:any)=>{setValue(e.target.value)}}></InputBox>
   {value === mnemonic ?
  <button onClick={()=>{
    setClicksCount(clicksCount+1)}}> Add Wallet </button>
    : null
   }

<div>Vault</div>


  </div>
 
}


 