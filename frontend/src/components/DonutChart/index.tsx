import axios from 'axios';
import Chart from 'react-apexcharts'
import { SaleSum } from 'types/sale';
import { BASE_URL } from 'utils/requests';
import { useState, useEffect } from 'react';

type ChartData = {


    labels: string[];
    series: number[];
}



const DonutChart = () => {


    const [ChartData, setChartData] = useState<ChartData>({ labels: [], series: [] });

    useEffect(() => {

        axios.get(`${BASE_URL}/sales/amount-by-seller`)

            .then(response => {
                const data = response.data as SaleSum[];
                const myLabels = data.map(x => x.sellerName);
                const mySeries = data.map(x => x.sum);

                setChartData({ labels: myLabels, series: mySeries });


            });

    }, []);


    const options = {

        legend: {

            show: true
        }
    }



    return (
        <Chart
            options={{ ...options, labels: ChartData.labels }}
            series={ChartData.series}
            type="donut"
            height="240" />


    );

}

export default DonutChart;