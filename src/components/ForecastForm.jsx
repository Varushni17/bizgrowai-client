import { useState } from "react";

function ForecastForm({ setForecastData }) {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("http://127.0.0.1:8000/forecast", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setForecastData(data.forecast);
  };

  return (
    <div className="bg-white p-4 shadow-md rounded flex items-center gap-4">
      <input
        type="file"
        accept=".csv"
        onChange={(e) => setFile(e.target.files[0])}
        className="border p-2"
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleUpload}
      >
        Upload CSV
      </button>
    </div>
  );
}

export default ForecastForm;
