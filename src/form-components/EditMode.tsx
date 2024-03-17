import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true); // Initially, the user is assumed to be a student
    const [edit, setEdit] = useState<boolean>(false);

    const toggleEdit = () => {
        setEdit(!edit);
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (edit) {
            setName(event.target.value);
        }
    };

    const handleStudentChange = () => {
        if (edit) {
            setStudent(!student);
        }
    };

    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                        disabled={!edit}
                    />
                </label>
            </div>
            <div>
                <label>
                    Student:
                    <input
                        type="checkbox"
                        checked={student}
                        onChange={handleStudentChange}
                        disabled={!edit}
                    />
                </label>
            </div>
            <Form.Check
                type="switch"
                id="edit-mode"
                label="Edit Mode:"
                checked={edit}
                onChange={toggleEdit}
            />
        </div>
    );
}
