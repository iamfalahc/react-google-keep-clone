import React from "react";
import ClearIcon from '@mui/icons-material/Clear';
function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}><ClearIcon/></button>
    </div>
  );
}

export default Note;
