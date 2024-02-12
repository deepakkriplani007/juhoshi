import React, { useEffect, useState } from "react";
import Axios from "axios";
const Admin = () => {
  const [result, setResult] = useState([[]]);
  // const host = "http://localhost:5000";
  const host = "https://juhoshi.onrender.com";
  function groupObjectsById(objects) {
    const groupedArrays = {};

    objects.forEach((obj) => {
      const id = obj.uid;
      if (!groupedArrays[id]) {
        groupedArrays[id] = [obj];
      } else {
        groupedArrays[id].push(obj);
      }
    });

    return Object.values(groupedArrays);
  }
  function calculateTotals(arrayOfArrays) {
    const resultArray = [];

    arrayOfArrays.forEach((innerArray) => {
      let totalWeight = 0;
      let totalCount = 0;
      let totalQuantity = 0;

      innerArray.forEach((obj) => {
        totalWeight += obj.weight;
        totalCount += obj.count;
        totalQuantity += obj.quantity;
      });

      resultArray.push([totalWeight, totalCount, totalQuantity]);
    });

    return resultArray;
  }

  // const handleonSubmit = async () => {
  //   await Axios.get(`${host}/api/form/getall`)
  //     .then((res) => {
  //       const data = res.data;
  //       console.log(data);

  //       const groupedArrays = groupObjectsById(data);
  //       console.log(groupedArrays);
  //       // console.log(groupedArrays[1][0]);
  //       result = calculateTotals(groupedArrays);
  //       console.log(result);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  useEffect(() => {
    const fetchdata = async () => {
      await Axios.get(`${host}/api/form/getall`)
        .then((res) => {
          const data = res.data;
          console.log(data);

          const groupedArrays = groupObjectsById(data);
          console.log(groupedArrays);
          // console.log(groupedArrays[1][0]);
          setResult(calculateTotals(groupedArrays));
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchdata();
  }, []);
  return (
    <div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Cutomer
              </th>
              <th scope="col" className="px-6 py-3">
                Weight
              </th>
              <th scope="col" className="px-6 py-3">
                Box Count
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
            </tr>
          </thead>
          <tbody>
            {result?.map((r, j) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Customer {j + 1}
                </th>
                {r?.map((item, i) => (
                  <td key={i} className="px-6 py-4">
                    {item}
                  </td>
                ))}

                {/* /<td className="px-6 py-4">r[1]</td> */}
                {/* <td className="px-6 py-4">r[2]</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* <button
        onClick={handleonSubmit}
        className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
      >
        Submit
      </button> */}
    </div>
  );
};

export default Admin;

{
  /*  */
}
