import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" The text is converted to upperCase" , "success")
    
  }
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" The text is converted to lowerCase" , "success")
  }


  const handleCopy = () => {
    var text = document.getElementById("myBox");
      text.select();
     document.execCommand("copy")
     props.showAlert(" The text is copied" , "success")
    }
  const handleExtraSpaceClick=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert(" No extra space ..! " , "success")
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleClearClick =()=>{
    let newText = "";
    setText(newText);
    props.showAlert(" The text is cleared " , "success")

  }

  const [text, setText] = useState("");
  return (
    <>
      <div className="container" my-3 style={{color:props.mode === 'light'?'#042743':'white'}}>
        <h1 >{props.heading}</h1>
        <div className="container my-1">
          <label htmlFor="myBox" className="form-label"></label>
          <textarea className='form-control' value={text} style={{backgroundColor:props.mode === 'light'?'white':'#13466e' , color:props.mode ==='light'?'black':'white'}}  onChange={handleOnChange} id="myBox" rows="8" ></textarea>

          <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>convert to upperCase</button>
          <button className="btn btn-primary my-3 mx-2" onClick={handleLoClick}>convert to lowerCase</button>
          <button className= "btn btn-primary mx-1" onClick={handleCopy}> Copy Text</button>
          <button className="btn btn-primary my-3 mx-2" onClick={handleExtraSpaceClick}> Remove extra space</button>
          <button className="btn btn-primary my-3 mx-2" onClick={handleClearClick}> Clear Text</button>
          

        </div>
        <div className="container" style={{color:props.mode === 'light'?'#042743':'white'}} >
        
          <h1 >Textsummery :-</h1>
          <h5> Total no. of words = {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} </h5>
          <h5> Total no. of characters = {text.length} </h5>
          <h5>
            required time to read the textarea:-{" "}
            {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}minutes
          </h5>
          <h3>preview :- </h3>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
