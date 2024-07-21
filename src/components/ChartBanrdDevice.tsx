import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const options = {
  chart: {
    type: 'donut',
  },
  colors: [],
  labels: [],
  legend: {
    show: false,
    position: 'bottom',
  },

  plotOptions: {
    pie: {
      donut: {
        size: '65%',
        background: 'transparent',
      },
    },
  },
  dataLabels: {
    enabled: true,
  },
  responsive: [
    {
      breakpoint: 2600,
      options: {
        chart: {
          width: 380,
        },
      },
    },
    {
      breakpoint: 640,
      options: {
        chart: {
          width: 200,
        },
      },
    },
  ],
};

const ChartBrandDevice: React.FC = ({ data }) => {
  const [series, setSeries] = useState({
    series: [],
    color: [],
    label: []
  });

  useEffect(() => {
    const newSeries = data?.filter(item => item.percentage > 0).map(item => Number(item.percentage.toFixed(1)));
    const newColors = data?.filter(item => item.percentage > 0).map(item => item.color)
    const newLabels = data?.filter(item => item.percentage > 0).map(item => item.brand)
    setSeries({
      series: newSeries,
      color: newColors,
      label: newLabels
    });

  }, [data]);

  const colorVariants = {
    'Huawei': 'mr-2 block h-3 w-full max-w-3 rounded-full bg-[#ffbe0b]',
    'Xiaomi': 'mr-2 block h-3 w-full max-w-3 rounded-full bg-[#0077b6]',
    'LG': 'mr-2 block h-3 w-full max-w-3 rounded-full bg-[#8338ec]',
    'Nokia': 'mr-2 block h-3 w-full max-w-3 rounded-full bg-[#FF0000]',
    'Motorola': 'mr-2 block h-3 w-full max-w-3 rounded-full bg-[#A1DD70]',
    'Sony': 'mr-2 block h-3 w-full max-w-3 rounded-full bg-[#DBB5B5]',
    'OnePlus': 'mr-2 block h-3 w-full max-w-3 rounded-full bg-[#3f7d20]',
    'Samsung': 'mr-2 block h-3 w-full max-w-3 rounded-full bg-[#ee6c4d]',
    'Apple': 'mr-2 block h-3 w-full max-w-3 rounded-full bg-[#540b0e]',
    'Google': 'mr-2 block h-3 w-full max-w-3 rounded-full bg-[#2ec4b6]',
  }

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-5">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <div>
          <h5 className="text-xl font-semibold text-black dark:text-white">
            Brand Device
          </h5>
        </div>

      </div>

      <div className="mb-2">
        <div id="ChartBrandDevice" className="mx-auto flex justify-center">
          <ReactApexChart
            options={{ ...options, colors: series.color, labels: series.label }}
            series={series.series}
            type="donut"
          />
        </div>
      </div>

      <div className="-mx-8 flex flex-wrap items-center justify-center gap-y-3">
        {data?.map((item, index) => {
          return (
            <div className="w-full px-8 sm:w-1/2" key={index}>
              <div className="flex w-full items-center">
                <span className={`${colorVariants[item.brand]}`}></span>
                <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                  <span>{item.brand}</span>
                  <span>{item.percentage.toFixed(1)}%</span>
                </p>
              </div>
            </div>
          )
        }
        )}

      </div>
    </div>
  );
};

export default ChartBrandDevice;
