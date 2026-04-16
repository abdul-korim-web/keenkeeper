import React, { createContext, useEffect, useState } from "react";
export const inVoicecontext = createContext();
const InvoiceContextProvider = ({ children }) => {
  const [inVoice, setInVoice] = useState([]);
  const [chartData, setChartData] = useState([]);
  const getChartData = () => {
    const call = inVoice.filter((item) => item?.comType == "Call");
    const totalCall = call.length;
    const video = inVoice.filter((item) => item?.comType == "Video");
    const totalVideo = video.length;
    const text = inVoice.filter((item) => item?.comType == "Text");
    const totalText = text.length;
    setChartData([
      { name: "Call", value: call.length, color: "#244d3f" },
      { name: "Text", value: text.length, color: "#7e35e1" },
      { name: "Video", value: video.length, color: "#37a163" },
    ]);
  };
  useEffect(() => {
    getChartData();
  }, [inVoice]);
  return (
    <inVoicecontext.Provider value={{ inVoice, setInVoice, chartData }}>
      {children}
    </inVoicecontext.Provider>
  );
};

export default InvoiceContextProvider;
