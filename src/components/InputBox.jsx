function InputBox({ onSend }) {
  const [input, setInput] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSend(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="พิมพ์คำถามของคุณที่นี่..."
        className="flex-1 p-3 rounded-l-lg border-none focus:outline-none text-gray-800"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white p-3 rounded-r-lg hover:bg-blue-700"
      >
        ส่ง
      </button>
    </form>
  );
}