import { useRef, useEffect, useState } from "react";

const TextArea = ({ value, onChange, placeholder, className, onKeyDown }) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "28px"; // Ensures it starts at a defined height
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [value]); // Re-run effect when text changes

  const handleChange = (e) => {
    if (onChange) onChange(e);
  };

  const keyDown = (e) => {
    if (onKeyDown) onKeyDown(e);
  };

  return (
    <textarea
      ref={textareaRef}
      className={className}
      value={value}
      onChange={handleChange}
      onKeyDown={keyDown}
      placeholder={placeholder}
    />
  );
};

export default TextArea;