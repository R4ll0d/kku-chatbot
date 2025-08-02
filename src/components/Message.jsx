function Message({ sender, text }) {
  const isBot = sender === 'bot';
  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}>
      <div
        className={`max-w-xs md:max-w-md p-3 rounded-lg ${
          isBot ? 'bg-blue-100 text-gray-800' : 'bg-blue-600 text-white'
        }`}
      >
        {text}
      </div>
    </div>
  );
}