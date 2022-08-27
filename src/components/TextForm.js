import React,{useState} from  'react'



export default function TextForm(props) {
  const  handleUpClick = () =>{
    let newText= text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Upper Case","success");
  }
  const  handleLoClick = () =>{
    let newText= text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lower Case","success");
  }
  const  handleClear = () =>{
    let newText= text.replace(text,"hello")
    setText(newText)
    props.showAlert("Printed Hello in it ","success");
  }
  const  handleOnChange = (event) =>{
    setText(event.target.value)
  }

  const [text,setText]=useState(' ');
  return (
    <>
    <div className='container' style={{color:props.mode === 'dark'?'white':'#042743'}}>
        <h1 >{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange}style={{backgroundColor:props.mode === 'dark'?'grey':'white',color:props.mode === 'dark'?'white':'black'}}id="myBox"  rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>  Conver to upperCase</button>
        <button className="btn btn-primary" onClick={handleLoClick}>  Conver to LowerCase</button>
        <button className="btn btn-primary" onClick={handleClear}>  Print Hello</button>
    </div>
    <div className="container my-3" style={{color:props.mode === 'dark'?'white':'#042743'}}>
      <h1>Your text summary</h1>
      <p>you have typed {text.split(" ").length} words and  {text.length} characters</p>
      <p>{0.008 * text.split(" ").length}</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter the text above to preview"}</p>
    </div>
    </>

  )
}
