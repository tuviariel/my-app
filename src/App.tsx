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
  const [rerender, setRerender] = useState<boolean>(true)
  const lastChatItem = useRef<HTMLDivElement | null>(null);
  useEffect(()=>{
    lastChatItem.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    })
  },[chatArr])
  function send():void {
    //in real app here would be a fetch call to the server to get the response of the chat.
    //instead I will return dummy-text, first with loading... sign:
    let userObj = {text:inputText, ts:new Date(), sender:"user", elemType:"P"};
    let chatObj = {text:"Loading...", ts:new Date(), sender:"chat", elemType:"P"};
    setChatArr((prevState)=>{
      const newArray = [...prevState, userObj, chatObj];
      return newArray
    });
    setInputText("");
    // and after some time (5 sec) with the dummy answer:
    setTimeout(()=>{
      setChatArr((prevState) => {
        const newArray = [...prevState];
        const lastObject = { ...newArray[newArray.length - 1] };
        lastObject.text = "The answer is some dummy data...";
        newArray[newArray.length - 1] = lastObject;
        return newArray;
      })
    }, 5000);
  }
  
  return (
    <div className="App">
      <ChatDisplay chatArr={chatArr} lastItem={lastChatItem}/>
      <InputSection send={()=>send()} inputText={inputText} setInputText={setInputText}/>
    </div>
  );
}

export default App;

//and enter click to the input
//and loader gif to loading sign
//and a few neat tests regarding input vs button