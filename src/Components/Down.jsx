import { useState } from "react";
import QRCode from "react-qr-code";

const Down = () => {
  const [qrCode,setQrCode] = useState('')
  const [input,setInput] = useState('')
  const handleGenerateQRCode = () =>{
    setQrCode(input)
    var element = document.getElementById("qr-code-value")
    element.classList.remove("visually-hidden")
  }
  return (
    <>
    <div className="qr-code">
      <div className="row">
        <div className="col">
        <input onChange={(e)=>setInput(e.target.value)} type="text" name="qr-code-text" placeholder="  Enter you text here..."/>
        </div>
        <div className="col">
        <button disabled={input&&input.trim() !== ""?false:true} onClick={handleGenerateQRCode} className="btn btn-primary">Generate</button>
        </div>
        
        
        </div>
        
       
        
    </div>

<div className="row">
<QRCode
className="visually-hidden"
id="qr-code-value"
value={qrCode}
size={300}
/>
</div>
</>
  )
}

export default Down