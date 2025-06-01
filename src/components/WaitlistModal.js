const WaitlistModal = ({ isOpen, onClose, toolName }) => {
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleWaitlistSubmit = async () => {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage("Please enter a valid email address.");
      setTimeout(() => setMessage(""), 3000);
      return;
    }

    setIsLoading(true);
    setMessage("");

    // Replace with your actual Google Apps Script Web App URL
    const GOOGLE_SHEETS_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzICyMu6vkDPBLyb3ReWdLKbtLmoB0A7UYCZRmDyW3DxTEjme8YS1dzStuc1MnXJFI/exec";

    try {
      const response = await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, tool: toolName })
      });

      setMessage(`Thank you for joining the ${toolName} waitlist!`);
      setEmail("");
      setTimeout(() => {
        setMessage("");
        onClose();
      }, 2000);
    } catch (error) {
      console.error("Waitlist submission error:", error);
      setMessage("Failed to join waitlist. Please try again later.");
      setTimeout(() => setMessage(""), 3000);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-medium text-blue-900">Join the {toolName} Waitlist</h3>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
        <p className="text-gray-600 mb-4">Be the first to try {toolName} when it launches! We’ll notify you when it’s ready, which may take a few months.</p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="waitlist-input p-2 w-full text-sm border rounded-md bg-white text-gray-700 border-gray-300 focus:outline-none focus:border-blue-600 mb-4"
        />
        <button
          onClick={handleWaitlistSubmit}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Join Waitlist"}
        </button>
        {message && (
          <div className={`text-center text-sm mt-2 ${message.includes("Thank") ? "text-green-600" : "text-red-500"}`}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
};
