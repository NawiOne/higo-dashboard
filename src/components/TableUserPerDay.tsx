const TableUserPerDay = ({ data }) => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        User Per Day
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 ">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Date
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Users
            </h5>
          </div>
        </div>

        {data?.map((item, index) => (
          <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark" key={index}>
            <div className=" p-2.5 xl:p-5">
              <p className="text-black dark:text-white" >{item.date}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">{item.uniqueUserCount}</p>
            </div>
          </div>
        ))}



        {/* <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark">
          <div className=" p-2.5 xl:p-5">
            <p className="text-black dark:text-white">2022-01-10</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-meta-3">$5,768</p>
          </div>

        </div>

        <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark">
          <div className=" p-2.5 xl:p-5">
            <p className="text-black dark:text-white">2022-01-10</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-meta-3">$5,768</p>
          </div>

        </div>

        <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark">
          <div className=" p-2.5 xl:p-5">
            <p className="text-black dark:text-white">2022-01-10</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-meta-3">$5,768</p>
          </div>

        </div> */}
      </div>
    </div>
  );
};

export default TableUserPerDay;
