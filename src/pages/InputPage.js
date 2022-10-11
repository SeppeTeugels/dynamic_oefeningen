import {useState} from "react";
import {Card, Form} from "react-bootstrap";

export function InputPage() {
    const [testInput, setTestInput] = useState()
    return <>
        <div className={"mx-3"}>
            <div className={"m-3"}>
                <Form>
                    <Form.Label htmlFor="search">test input:</Form.Label>
                    <Form.Control id="search"
                                  value={testInput}
                                  onChange={e => setTestInput(e.target.value)}/>
                </Form>
                <div>{`de waarde is: ${testInput}`}</div>
            </div>
        </div>
    </>
}