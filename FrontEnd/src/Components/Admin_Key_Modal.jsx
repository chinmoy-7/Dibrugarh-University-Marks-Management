import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect } from 'react';
export default function Admin_Key_Modal(props) {

    const [input, setInput] = useState("")

    const [showKey, SetShowKey] = useState(false)


    const handleSubmit = () => {
        console.log(process.env.REACT_APP_ADMIN_KEY);
        if (input === process.env.REACT_APP_ADMIN_KEY) {
            props.onHide()
        } else {
            return alert("WRONG INPUT")
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeydown);
        return () => {
            document.removeEventListener('keydown', handleKeydown);
        };
    }, []);

    function handleKeydown(event) {
        if (event.key === 'Escape') {
          return event.preventDefault();
        }
    }

    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            size="sm"
            centered
            backdrop="static"
            keyboard="true"
        >
            <Modal.Body>
                <h4>Enter Admin Key To Continue</h4>
                <input className='mx-2'autoFocus type={showKey ? "text" : "password"} onChange={(e) => { setInput(e.target.value) }} />
                <span onClick={() => { SetShowKey(!showKey) }}>{showKey ? "Hide" : "Show"}</span>
            </Modal.Body>
            <Modal.Footer>
                <Button style={{ margin: "0 auto" }} onClick={handleSubmit}>Submit</Button>
            </Modal.Footer>
        </Modal >
    );
}
