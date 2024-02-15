
    import { useState } from "react";
    export const QrCode = () => {
const [tests,settests]= useState("");
const[loading,setloading]=useState(false);
const [qrdata,setqrdata]=useState("https://chat.openai.com/");
const [qrsize,setqrsize]=useState("150");
 console.log("");
       async function generateQR(){
            setloading(true);
            try{
                const url=`https://api.qrserver.com/v1/create-qr-code/?size=${qrsize}x${qrsize}&data=${encodeURIComponent(qrdata)}`;
                settests(url);
            } catch (error){
                console.error ("error generating QR Code",error);
            } finally {
                setloading(false);
                        }
        }
        function downloadQR(){
            fetch (tests).then((response)=>response.blob())
            .then((blob)=>{
                const link=document.createElement("a");
                link.href=URL.createObjectURL(blob);
                link.download="qrcode.png";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            });
        }
    return (
    <><div className="app-container">
        {loading && <p>please wait</p>}
        {<img src={tests} className="QR image"></img>}
            <div>
                <label htmlFor="data input" className="input-label">data for QR CODE</label>
               <input type="text" value={qrdata} id="datainput" placeholder="enter the data for QR code" onChange={(e)=>setqrdata(e.target.value)}/>
               <label htmlFor="size" className="input-label">image size(e.g.,100):</label>
                <input type="text" value={qrsize} id="size" placeholder="enter image size" onChange={(e)=>setqrsize(e.target.value)}/>
               <button  disabled={loading}onClick={generateQR}>
                generate QR code 
               </button>
               <button onClick={downloadQR}>
                Download QR code
               </button>
                </div>
        </div><div>QrCode</div></>
    );
    };
