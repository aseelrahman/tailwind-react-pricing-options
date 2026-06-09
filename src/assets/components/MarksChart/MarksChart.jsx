import { use } from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

const MarksChart = ({marksPromise}) => {
    const marksDataRes = use(marksPromise)
    const marksData = marksDataRes.data

    // data processing for chart
    const marksChartData = marksData.map(studentData => {
        const student = {
            id: studentData.id,
            name: studentData.name,
            physics: studentData.physics,
            chemistry: studentData.chemistry,
            math: studentData.math
        }
        const avg = (student.physics + student.chemistry + student.math)/3
        student.avg = avg
        return student;
    })
    console.log(marksChartData);
    
    return (
        <div>
            <BarChart width={500} height={300} data={marksChartData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey={'avg'} fill="yellow"/>
                <Bar dataKey={'chemistry'} fill="blue"/>
            </BarChart>
        </div>
    );
};

export default MarksChart;