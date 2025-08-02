function App() {
  const [messages, setMessages] = React.useState([
    { sender: 'bot', text: 'สวัสดี! ยินดีต้อนรับสู่ KKU IntelliSphere Chatbot ฉันเป็นผู้ช่วยอัจฉริยะของมหาวิทยาลัยขอนแก่น พร้อมช่วยตอบคำถามด้านการศึกษาและการทำงาน ค่ะ/ครับ' }
  ]);

  const handleSendMessage = (text) => {
    setMessages([...messages, { sender: 'user', text }]);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: 'ขอบคุณสำหรับคำถาม! ตัวอย่างคำตอบ: คุณสามารถใช้ KKU IntelliSphere เพื่อช่วยในการเรียนการสอนและงานวิจัยได้ฟรี! ต้องการข้อมูลเพิ่มเติมเกี่ยวกับอะไรคะ/ครับ?' }
      ]);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-blue-600 to-blue-400 text-white">
      <header className="w-full p-4 flex items-center justify-center bg-blue-800 shadow-md">
        <img src="/kku-logo.png" alt="KKU Logo" className="h-12 mr-4" />
        <h1 className="text-2xl font-bold">KKU IntelliSphere Chatbot</h1>
      </header>
      <main className="flex-1 w-full max-w-4xl p-4">
        <ChatWindow messages={messages} />
        <InputBox onSend={handleSendMessage} />
      </main>
      <footer className="w-full p-4 text-center bg-blue-800">
        <p>&copy; 2025 มหาวิทยาลัยขอนแก่น. พัฒนาโดยสำนักเทคโนโลยีดิจิทัล.</p>
      </footer>
    </div>
  );
}