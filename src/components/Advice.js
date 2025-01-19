import React, { useState, useEffect } from "react";
import axios from "axios";

const Advice = () => {
    const [advice, setAdvice] = useState("");

    const fetchAdvice = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/advice");
            setAdvice(response.data.slip.advice);
        } catch (error) {
            console.error("Error fetching advice", error);
        }
    };

    useEffect(() => {
        fetchAdvice();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500   text-black">
            <div className="bg-gradient-to-br from-green-500 to-yellow-800 p-6 rounded-lg shadow-md text-center">
                <h1 className="text-2xl font-bold mb-4">Advice Generator</h1>
                <p className="text-lg italic mb-4">{advice}</p>
                <button 
                    onClick={fetchAdvice} 
                    className="bg-blue-500 px-4 py-2 rounded-full hover:bg-red-700 transition"
                >
                    Get New Advice
                </button>
            </div>
        </div>
    );
};

export default Advice;
