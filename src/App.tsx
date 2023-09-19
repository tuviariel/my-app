import { useEffect, useRef, useState } from 'react';
import './App.css';
import ChatDisplay from "./components/ChatDisplay";
import InputSection from './components/InputSection';

type ChatItem = {
  text:string; 
  ts:Date;
  sender:string;
  elemType:string;
}

function App() {
  const [chatArr, setChatArr] = useState<ChatItem[]>([]);
  const [inputText, setInputText] = useState<string>("");
  const [disableSend, setDisableSend] = useState<boolean>(false);
  const lastChatItem = useRef<HTMLDivElement | null>(null);
  useEffect(()=>{
    chatArr.length > 2 && lastChatItem.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    })
  },[chatArr])
  function send():void {
    //in real app here would be a fetch call to the server to get the response of the chat.
    //instead I will return dummy-text, first with loading... sign:
    let userObj = {text:inputText, ts:new Date(), sender:"user", elemType:"P"};
    let chatObj = {text:"Loading...", ts:new Date(), sender:"chat", elemType:"I"};
    setChatArr((prevState)=>{
      const newArray = [...prevState, userObj, chatObj];
      return newArray
    });
    setDisableSend(true);
    setInputText("");
    // and after some time (5 sec) with the dummy answer:
    setTimeout(()=>{
      setChatArr((prevState) => {
        const newArray = [...prevState];
        const lastObject = { ...newArray[newArray.length - 1] };
        lastObject.elemType = "P";
        lastObject.text = "The answer is some dummy data...";
        newArray[newArray.length - 1] = lastObject;
        return newArray;
      })
      setDisableSend(false);
    }, 5000);
  }
  
  return (
    <div className="App">
      <ChatDisplay chatArr={chatArr} lastItem={lastChatItem}/>
      <InputSection send={()=>send()} inputText={inputText} setInputText={setInputText} disableClick={disableSend}/>
    </div>
  );
}

export default App;
