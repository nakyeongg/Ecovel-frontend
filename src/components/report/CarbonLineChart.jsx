import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CarbonLineChart = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height={350}>
            <LineChart
                data={data}
                // margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis unit="kg" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="vehicleCarbon" stroke="#565959" name="carbon emissions from vehicle use" />
                <Line type="monotone" dataKey="actualCarbon" stroke="green" name="consumed carbon" />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default CarbonLineChart;
