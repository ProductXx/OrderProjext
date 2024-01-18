import React, { useState } from "react";
import FilterBtn from "./FilterBtn";
import LineChart from "./LineChart";

// Fake Data
const filterTitle = [
  { id: 1, title: "Weekly",data:[60,20,50,100,40] },
  { id: 2, title: "Monthly",data:[10,90,100,20,90]  },
  { id: 3, title: "Yearly",data:[67,22,59,98,83]  },
];

const Chart = () => {
  const [active, setActive] = useState("Weekly");
  const [data,setData] = useState(filterTitle[0].data);
  const handleActive = (title) => {
    setActive(title);
    const activeData = filterTitle.find(el=>el.title === title).data;
    setData(activeData)
  };

  return (
    <div>
      {/* Filter buttons group */}
      <div className="flex space-x-3">
        {filterTitle.map((el) => (
          <FilterBtn
            key={el.id}
            title={el.title}
            handleActive={handleActive}
            active={active}
          />
        ))}
      </div>
      {/* Chart */}
      <div className="h-[280px] mt-5">
        <LineChart data={data}/>
      </div>
    </div>
  );
};

export default Chart;
