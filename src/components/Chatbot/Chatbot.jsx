import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from "react";
import Markdown from "react-markdown";
import TextArea from "../TextArea/TextArea";
import "./Chatbot.scss";
import SendButton from "../SendButton/SendButton";

export default function Chatbot() {
  const apiKey = "AIzaSyAIJRFWFJkh76xE_GR-kfM1BELLCn--pK4";
  const instructions = "You are going to do some roleplaying with me. I'm going to provide you a script that you need to follow. When I say: 'what's your question' you must respond: 'Is this a good outline?' and then provide short outline for a standard report.";
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ 
    model: "gemini-2.0-flash",
    systemInstruction: instructions, });
  
  const [ prompt, setPrompt ] = useState("");
  const [ history, setHistory ] = useState([]);
  const [ text, setText] = useState("");

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
              <p><Markdown>{msg.parts[msg.parts.length -1 ].text}</Markdown></p>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="form">
        <TextArea value={text} onChange={handleChangePrompt} onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && ( e.preventDefault(), e.target.form.requestSubmit())} placeholder="Ask me anything :)" className="form__textarea"/>
        <SendButton className="form__send-button" onClick={handleSubmit} />
      </form>
    </div>
    </>
  )
}