function ChatWindow({ messages }) {
  const chatRef = React.useRef(null);

  React.useEffect(() => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages]);

  return (
    <div
      ref={chatRef}
      className="h-[70vh] overflow-y-auto p-4 bg-white text-gray-800 rounded-lg shadow-md mb-4"
    >
      {messages.map((msg, index) => (
        <Message key={index} sender={msg.sender} text={msg.text} />
      ))}
    </div>
  );
}