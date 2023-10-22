import React, { useMemo } from "react";

function FilteredList({ list }) {
  const filteredList = useMemo(() => {
    return list.filter((item) => item.age > 18);
  }, [list]);

  return (
    <div>
      <h2>Filterd List</h2>
      <hr />
      <ul>
        {filteredList.map((item) => (
          <li key={item.id}>
            {item.name} Age ({item.age}) 
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilteredList;
