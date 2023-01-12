import React,{useState}from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=>{
    let newText= Text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case" , "success" );
  }

  const handleLwClick = ()=>{
    let newText= Text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case" , "success" );
  }

  const handleCaptalizeClick = ()=>{
    let newText=Text.charAt(0).toUpperCase() + Text.slice(1);
    setText(newText);
    props.showAlert("Captalize first Letter" , "success");
  }

  const handleClearClick = ()=>{
    let newText='';
    setText(newText);
    props.showAlert("Clear all text." , "success");
  }

  const handleOnChange =(event)=>{
    setText(event.target.value)
  }

  const[Text,setText] = useState ('');
  return (
    <>
    <div className="container" style={{color:props.mode === 'dark'?'white':'black'}}>
    <h1> {props.Heading} </h1>
        <div className="mb-3">
  <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark'?'gray':'white',color: props.mode === 'dark'?'white':'gray'}} id="myBox" value={Text} onChange={handleOnChange} rows="8" ></textarea>
  </div>
  <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}> Convert to Uppercase </button>
  <button className="btn btn-primary my-3 mx-2"onClick={handleLwClick}> Convert to Lowercase </button>
  <button className="btn btn-primary my-3 mx-2"onClick={handleCaptalizeClick}> Captalize first letter </button>
  <button className="btn btn-primary my-3 mx-2"onClick={handleClearClick}> Clear Text </button>

</div>

<div className="container my-3"style={{color:props.mode === 'dark'?'white':'black'}}>
  <h2>Your Text Summary</h2>
  <p> <b>{Text.split(" ").length} </b>words and <b>{Text.length}</b> Characters </p>
  <p> <b>{0.008*Text.split(" ").length}</b> minutes reads</p>
  <h2>Preview</h2>
  <p>{Text.length>0 ?Text: "Enter something in textbox above to preview it here." }</p>
</div>
</>
  )
}

