import React, { useState } from "react";

function CreateArea(props) {
  
  const [note, setnote] = useState({
    title: "",
    content:""
  });

  function handleChange(event){
    const {name, value} = event.target;
    setnote(prevnote =>{
      return{
        ...prevnote,
      [name]: value
    }
    })
  }
  function submitNote(event){
    props.onAdd(note)
    event.preventDefault();
    setnote({
      title: "",
      content:""
    });

  }

  return (
    <div>
      <form>
        <input onChange={handleChange} value={note.title} name="title" placeholder="Title" />
        <textarea onChange={handleChange} value={note.content} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={submitNote} >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
