import axios from 'axios';
import { useEffect, useState } from 'react';

import ChartAge from '../components/ChartAge';
import ChartGender from '../components/ChartGender';
import ChartBrandDevice from '../components/ChartBanrdDevice';
import ChartDigitalInterest from '../components/ChartDigitalInterest';
import Loading from '../components/Loading';



async function fecthSegmentation() {
  const data = await axios.get(process.env.REACT_APP_SEGMENT_API)

  return data.data.data

}

const Segmentation = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    (async () => {
      setLoading(true)
      const response = await fecthSegmentation()

      setData(response)
      setLoading(false)
    })()
  }, [])

  if (loading) return <Loading />

  return (
    <div className="mt-4 grid grid-cols-10  md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
      <ChartAge data={data?.ageGroup} />
      <ChartGender data={data?.gender} />
      <ChartBrandDevice data={data?.brandDevice} />
      <ChartDigitalInterest data={data?.digitalInterest} />
    </div>
  );
};

export default Segmentation;
