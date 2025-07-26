import React from 'react';

const ForecastTable = ({ forecastData }) => {
  if (!forecastData || forecastData.length === 0) {
    return null;
  }

  const downloadCSV = () => {
    const header = Object.keys(forecastData[0]).join(',');
    const rows = forecastData.map(row =>
      Object.values(row).join(',')
    );
    const csvContent = [header, ...rows].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'forecast_result.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="mt-4">
      <h3 className="text-xl font-bold mb-2">Forecast Table</h3>

      <button
        onClick={downloadCSV}
        className="mb-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        📥 Download Forecast CSV
      </button>

      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            {Object.keys(forecastData[0]).map((key, index) => (
              <th key={index} className="border p-2">{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {forecastData.map((row, index) => (
            <tr key={index} className="text-center">
              {Object.values(row).map((value, i) => (
                <td key={i} className="border p-2">{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ForecastTable;
