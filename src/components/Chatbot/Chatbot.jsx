import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from "react";
import Markdown from "react-markdown";
import TextArea from "../TextArea/TextArea";
import "./Chatbot.scss";
import SendButton from "../SendButton/SendButton";
import { Link } from "react-router-dom";

export default function Chatbot() {
  const apiKey = "AIzaSyAIJRFWFJkh76xE_GR-kfM1BELLCn--pK4";
  const instructions = "You are going to do some roleplaying with me. I'm going to provide you a script that you need to follow. When I say: 'What's your question?' you must respond: 'Is this a good outline for each report?' and then provide a numbered list with these items 'Introduction and Latest Three Amendments'. I'll respond: 'Let's add a section about what Calgary can learn from each city '. Then you will respond 'Got it, also, what about if I add a photo of each city in their corresponding reports?'. I will respond 'Yes I would love that'. Then you will respond 'Awesome, I don't think I have any other questions'";
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ 
    model: "gemini-2.0-flash",
    systemInstruction: instructions, });
  
  const [ prompt, setPrompt ] = useState("");
  const [ history, setHistory ] = useState([]);
  const [ text, setText] = useState("");
  const [ count, setCount ] = useState(0);

  const handleChangePrompt = (event) => {
    setPrompt(event.target.value);
    setText(event.target.value);
  };

  const chat = model.startChat({ 
    history: history,
  });

  const generate = async () => {
    if (prompt.trim() === "") return; 
    setHistory( prev => [ ...prev, { role: "user", parts: [{ text: prompt }]}]);

    let accumulatedResponse = "";

    const result = await chat.sendMessageStream(prompt);

    setHistory((prev) => [...prev, { role: "model", parts: [{ text: "" }]}]);

    for await (const chunk of result.stream) {
      accumulatedResponse += chunk.text();
      setHistory( prev => {
        const updatedHistory = [...prev];
        updatedHistory[updatedHistory.length - 1] = {
          ...updatedHistory[updatedHistory.length - 1],
          parts: [{ text: accumulatedResponse }],
        };
        return updatedHistory;
      });
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    generate();
    setText("");
    setPrompt("");
    setTimeout(() => {setCount(prev => prev + 1)}, 1000)
    console.log(count)
  };

  return (
    <>
    <div className="layout">
      <div className="chat">
        <div className="chat__layout chat__layout--Chatbot" >
          <div className="chat__message chat__message--Chatbot">
              <p className={`chat__label chat__label--Chatbot`}>Chatbot</p> 
              <Markdown>I have a question</Markdown>
          </div>
        </div>
          
        {history.map((msg, index) => (
          <div key={index} className={`chat__layout chat__layout--${msg.role === "user" ? "You" : "Chatbot"}`}> 
            <div className={`chat__message chat__message--${msg.role === "user" ? "You" : "Chatbot"}`}>
              <p className={`chat__label chat__label--${msg.role === "user" ? "You" : "Chatbot"}`}>{msg.role === "user" ? "You" : "Chatbot"}</p> 
              <Markdown>{msg.parts[msg.parts.length -1 ].text}</Markdown>
            </div>
          </div>
        ))}
        
        <Link className={`chat__layout--next--next--link ${count === 3 && "chat__layout--next--next--link--display"}`} to="/status"><div className="chat__layout chat__layout--You chat__layout--next">
          <div className="chat__layout--next--next" >Let's move forward ▶</div>
        </div></Link>
      </div>

     
      <form onSubmit={handleSubmit} className="form">
        <TextArea value={text} onChange={handleChangePrompt} onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && ( e.preventDefault(), e.target.form.requestSubmit())} placeholder="What do you think?" className="form__textarea"/>
        <SendButton className="form__send-button" onClick={handleSubmit} />
      </form>
    </div>
    </>
  )
}