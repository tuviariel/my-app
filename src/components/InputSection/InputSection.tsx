import { Dispatch, SetStateAction } from "react";
import Button from "../Button";
import Input from "../Input";

type InputSectionProps = {
    send:() => void;
    inputText:string;
    setInputText: Dispatch<SetStateAction<string>>;
    disableClick: boolean;
}

export const InputSection = (props: InputSectionProps) => {
    const {
        send,
        inputText,
        setInputText,
        disableClick
    } = props;
    return (
        <div className="inputSection">
            <Input className="userInput" setValue={setInputText} value={inputText} placeholder={"Type your question here..."} labelClassName={""} type={""} label={""} required={false} id={""} name={""} autoComplete={""} onKeyDown={send} dataTestId="input"/>
            <Button className="userButton" onClick={send} children="Send" type="text" disabled={inputText === "" || disableClick ? true : false} dataTestId="button"/>
        </div>
    )
}