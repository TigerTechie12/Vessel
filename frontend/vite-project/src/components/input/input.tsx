type InputBoxProps={
    onChange:(event:React.ChangeEvent<HTMLInputElement>)=>void
}
export function InputBox({onChange}:InputBoxProps){
    return (
        <input type="text" placeholder="Write your secret phrase here" onChange={onChange}  />
    )
}