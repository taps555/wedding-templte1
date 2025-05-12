import React, { useState } from "react";
import NameTable from "./Table"; // Pastikan Anda sudah mengimpor komponen NameTable

const App = () => {
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [invitationLink, setInvitationLink] = useState("");
  const [newEntries, setNewEntries] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Pastikan nama tidak kosong sebelum submit
    if (!name.trim()) {
      setMessage("Nama pengantin harus diisi!");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        "https://be-weeding-invitation-production.up.railway.app/admin",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
        setInvitationLink(data.invitationLink); // Menampilkan link undangan
        setNewEntries((prev) => [
          ...prev,
          {
            id: Date.now(),
            name: name,
            link: data.invitationLink,
            timestamp: new Date().toLocaleTimeString(),
          },
        ]);
        setName(""); // Reset input setelah berhasil
      } else {
        setMessage("Gagal menambah pengantin.");
      }
    } catch (err) {
      console.error("Error:", err);
      setMessage("Terjadi kesalahan.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-indigo-600 flex justify-center items-center p-4">
      <div className="w-full max-w-3xl">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-700 mb-8">
            Daftar Nama
          </h1>

          <form onSubmit={handleSubmit} className="mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Masukkan nama..."
                className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                disabled={isLoading}
              />
              <button
                type="submit"
                className={`px-6 py-3 rounded-lg font-medium text-white transition-all ${
                  isLoading || !name.trim()
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-indigo-600 hover:bg-indigo-700 hover:-translate-y-0.5 shadow-md"
                }`}
                disabled={isLoading || !name.trim()}
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
                ) : (
                  "Tambah"
                )}
              </button>
            </div>
          </form>

          {message && <p className="text-center text-gray-600">{message}</p>}
          {invitationLink && (
            <div className="text-center mt-4">
              <p>Undangan Link:</p>
              <a
                href={invitationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {invitationLink}
              </a>
            </div>
          )}

          {/* Table component that fetches data via GET API */}
          <NameTable />
        </div>
      </div>
    </div>
  );
};

export default App;
