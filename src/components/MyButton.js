import {Button} from "react-bootstrap";

export function MyButton(props) {
    const {onClick, children} = props;
    return (<>
        <Button variant={"primary"} onClick={onClick}>{children}</Button>
    </>)
}