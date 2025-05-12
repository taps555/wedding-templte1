import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NameTable = ({ newEntries = [] }) => {
  const [names, setNames] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchNames = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://be-weeding-invitation-production.up.railway.app/admin/view"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setData(data); // Set names dengan data yang diterima
      setNames(data.name); // Set names dengan data yang diterima

      console.log("Data fetched:", data); // Log untuk memeriksa data
    } catch (err) {
      setError("Failed to load data. Please try again later.");
      console.error("Error fetching data:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // Efek pertama kali untuk mengambil data saat halaman pertama kali dimuat
  useEffect(() => {
    fetchNames();
  }, [names]);

  if (isLoading && data.length === 0) {
    return (
      <div className="overflow-hidden rounded-lg shadow-md bg-white">
        <div className="p-8 flex justify-center items-center">
          <div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
          <span className="ml-3 text-gray-600">Loading data...</span>
        </div>
      </div>
    );
  }

  if (error && data.length === 0) {
    return (
      <div className="overflow-hidden rounded-lg shadow-md bg-white">
        <div className="p-8 text-center text-red-500">
          <p>{error}</p>
          <button
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg shadow-md">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                No
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Nama
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Link
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                aciton
              </th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence>
              {data.length > 0 ? (
                data.map((entry, index) => (
                  <motion.tr
                    key={entry.id}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-b border-gray-200 hover:bg-gray-50"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {entry.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {/* If the link is valid, display it as a clickable link */}
                      {entry.link !== "No Link Available" ? (
                        <a
                          href={entry.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline animate-fade-in"
                        >
                          {entry.link}
                        </a>
                      ) : (
                        <span className="text-gray-400">{entry.link}</span> // Display placeholder if no link
                      )}
                    </td>
                  </motion.tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="3"
                    className="px-6 py-10 text-center text-gray-400 italic"
                  >
                    Belum ada data nama
                  </td>
                </tr>
              )}
            </AnimatePresence>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NameTable;
