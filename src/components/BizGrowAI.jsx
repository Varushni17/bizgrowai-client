import React, { useState } from 'react';
import ForecastForm from './ForecastForm';
import ForecastTable from './ForecastTable';
import ForecastChart from './ForecastChart';
import ChatBot from './ChatBot';

const BizGrowAI = () => {
  const [forecastData, setForecastData] = useState([]);

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col md:flex-row gap-6">
      {/* Left Panel: Upload + Results */}
      <div className="md:w-2/3 bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">📊 Demand Forecasting</h2>
        <ForecastForm setForecastData={setForecastData} />
        {forecastData.length > 0 && (
          <>
            <ForecastTable forecastData={forecastData} />
            <ForecastChart forecastData={forecastData} />
          </>
        )}
      </div>

      {/* Right Panel: Chatbot */}
      <div className="md:w-1/3 bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">🤖 BizGrowAI Chatbot</h2>
        <ChatBot />
      </div>
    </div>
  );
};

export default BizGrowAI;
