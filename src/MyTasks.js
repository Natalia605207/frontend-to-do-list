import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";

export const MyTasks = ({ addText, updatingInput, deleteTask }) => {
    return(
        <div className="line">
            <p>{ addText }</p>
            <div className="edite-delete">
            <AiFillEdit className="edite-btn" onClick={ updatingInput } />
            <AiFillDelete className="delete-btn" onClick={ deleteTask } />
            </div>
        </div>
    )
}