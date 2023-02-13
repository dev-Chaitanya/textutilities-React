import React, { useState } from 'react'

export default function TexthtmlForm(props) {
    const [text,setText]=useState("")

    const onhandelText=()=>{
        let txtP=document.querySelector('.textPreview');

        if(text.length===0){
            props.ShowAlert("Check Preview","danger")
            txtP.innerHTML="No Text To Make UppeCase";
        }
        else{
            let newText=text.toUpperCase();
            setText(newText)
            props.ShowAlert(" Your Text Was Maked To UpperCase","success")
        }
    }
    const onhandelText2=()=>{
        let txtP=document.querySelector('.textPreview');

        if(text.length===0){
            props.ShowAlert("Check Preview","danger")
            txtP.innerHTML="No Text To Make LowerCase";
        }
        else{
            let newText=text.toLowerCase();
            setText(newText)
            props.ShowAlert(" Your Text Was Maked To LowerCase","success")
        }
    }
    const onhandelText3=(e)=>{
        let txtP=document.querySelector('.textPreview');
        
        if(text.length===0){
            txtP.innerHTML="No Text To Copy";
            txtP.style.fontSize="20px";
            props.ShowAlert("Check Preview","danger")
        }
        else{
            navigator.clipboard.writeText(text)
            txtP.innerHTML="Text Copied";   
            txtP.style.fontSize="20px";
            props.ShowAlert("Text Copied","success")
        }
    }
    const onhandelText4=()=>{
        let txtP=document.querySelector('.textPreview');
        if(text.length===0){
            txtP.innerHTML="No Text To Clear";
            txtP.style.fontSize="20px";
            props.ShowAlert("Check Preview","danger")
        }
        else{
            setText("")
            props.ShowAlert("Text Cleared","success")
        }
    }
const onhandelChange=(event)=>{
setText(event.target.value);
}
  return (
 <div>
    <h1>{props.heading}</h1>
    <div className="mb-3">
        <label htmlFor="myBox" className="form-label"></label>
<textarea value={text} id="myBox" onChange={onhandelChange} cols="10" rows="15" className="form-control"></textarea>
    </div>
    <div className="container ">
<button className="btn btn-primary"  onClick={onhandelText}>Convert Upper Case</button>
<button className="btn btn-primary m-3"  onClick={onhandelText2}>Convert Lower Case</button>
<button className="btn btn-primary m-3"  onClick={onhandelText3}>Copy Text</button>
<button className="btn btn-primary m-3"  onClick={onhandelText4}>Clear</button>
</div>
<div className="container my-3">
    <h1>Your Text Summery</h1>
    <p>{text.split(" ").length -1 } Number Of Words  {text.length} Number Of Characters</p>
    <p>{ 0.008 * text.split(" ").length }Minutes to read</p>
    <h2>Preview</h2>
    <p className='textPreview'>{text}</p>
</div>
 </div>
  )
}
