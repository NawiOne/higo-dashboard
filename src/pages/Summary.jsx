import axios from 'axios';
import CardTotalData from '../components/CardTotalData';
import CardTotalUser from '../components/CardTotalUser';
import CardTotalReturning from '../components/CardTotalReturning';
import CardCrowdedHour from '../components/CardCrowdedHour';
import CardCrowdedDay from '../components/CardCrowdedDay';
import TableUserNewAndReturing from '../components/TableUserNewReturning';
import TableUserPerDay from '../components/TableUserPerDay';
import Loading from '../components/Loading';
import { useEffect, useState } from 'react';

async function fecthSummary() {
  const data = await axios.get(process.env.REACT_APP_SUMMARY_API)

  return data.data.data

}

const Summary = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    (async () => {
      setLoading(true)
      const response = await fecthSummary()

      setData(response)
      setLoading(false)
    })()
  }, [])


  if (loading) return <Loading />

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardTotalData data={data?.totalData} />
        <CardTotalUser data={data?.uniqueUsersTotal} />
        <CardTotalReturning data={data?.totalNewAndReturningUser} />
        <CardCrowdedHour data={data?.crowdedHours} />
        <CardCrowdedDay data={data?.crowdedDays} />
      </div>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="col-span-12 xl:col-span-6">
          <TableUserPerDay data={data?.uniqueUsersPerDay} />
        </div>
        <div className="col-span-12 xl:col-span-6">
          <TableUserNewAndReturing data={data?.newAndReturningPerDay} />
        </div>
      </div>
    </>
  );
};

export default Summary;
