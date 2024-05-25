import React from "react";
import Input from "./Input";
import { useRef , useState} from "react";
import Modal from "./Modal";
export default function NewProject( { onAdd, onCancel } ) {
  const title = useRef();
  console.log(title)
  const description = useRef();
  const dueDate = useRef();
  const [showModal, setShowModal] = useState(false);

  function handleSave () {
    const enteredTitle = title.current.value;
    const entereddescription = description.current.value;
    const entereddueDate = dueDate.current.value;

    if(!enteredTitle || !entereddescription || !entereddueDate) {
      setShowModal(true);
      return;
    } 
    onAdd({
      title: enteredTitle,
      description: entereddescription,
      dueDate: entereddueDate
    })
   
    title.current.value = "";
    description.current.value = "";
    dueDate.current.value = "";
  }
  return (
    <>
      {showModal && <Modal onClose={() => setShowModal(false)} />} {/* Render the modal */}
      <div className="new-project">
        <div className="project-wrappers">
        <menu>
          <li>
            <button className="cancel" onClick={onCancel}>Cancel</button>
          </li>
          <li>
            <button className="save" onClick={handleSave}>
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
        </div>
      </div>
    </>
  );
}
