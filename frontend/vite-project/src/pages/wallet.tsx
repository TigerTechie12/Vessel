import { useState,useMemo } from "react"
import {Header} from "../components/header/header"
import  {InputBox} from  "../components/input/input"
import {mnemonicToSeedSync} from 'bip39'
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import nacl from 'tweetnacl'
export function Wallets(){
    const [value,setValue]=useState('')
const [mnemonic,setMnemonic]=useState(localStorage.getItem('phrase'))
const [wallet,setWallet]=useState([])
const [clicksCount,setClicksCount]=useState(0)

const [publicKey,setPublicKey]=useState('')
const seed=useMemo(()=>{
 if (!mnemonic) {
      return null;
    }
    return mnemonicToSeedSync(mnemonic);
},[mnemonic])
if(seed){

 let path=`m/44'/501'/${clicksCount}'/0'`
   let derivedseed=derivePath(path,seed.toString("hex")).key
   const secret=nacl.sign.keyPair.fromSeed(derivedseed).secretKey 
   setPublicKey(Keypair.fromSecretKey(secret).publicKey.toBase58()
)

} 

  return <div>
   <Header></Header>
   
   <InputBox onChange={(e:any)=>{setValue(e.target.value)}}></InputBox>
   {value === mnemonic ?
  <button onClick={()=>{setClicksCount(clicksCount+1)}}> Add Wallet </button>
   : null
   }


  </div>
 
}


