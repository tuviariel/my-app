import TextElement from "../TextElement"
import chatLogo from "./chat.svg"
import userLogo from "./user.svg"

type ChatObject = {
    text:string;
    ts:Date;
    sender:string;
    elemType:string;
}
type ChatProps = {
    chatArr: ChatObject[];
    lastItem: React.RefObject<HTMLDivElement>;
}

export const ChatDisplay = (props: ChatProps) => {
    return (
        <div className="chatDisplay">
            {props.chatArr.map((chatItem,i)=>{
                return (<div key={i} className="chatItem" ref={i === props.chatArr.length-1 ? props.lastItem : null}>
                    <img src={chatItem.sender === "user" ? userLogo : chatLogo} className="icon" alt={chatItem.sender === "user" ? "User logo" : "Chat logo"} />
                    <TextElement chatItem={chatItem} />
                </div>)
            })}
        </div>
    )
}
