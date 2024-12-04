import FirstTrBody from "./FirstTrBody";

function Body({ currentCulomns, sortData, records }) {
  return (
    <tbody>
      <FirstTrBody currentCulomns={currentCulomns} sortData={sortData} />
      {records.length > 0
        ? records.map((el) => (
            <tr key={el.id}>
              {currentCulomns.map((col) => {
                if (
                  col.head === "ID" ||
                  col.head === "Branch" ||
                  col.head === "City" ||
                  col.head === "Customer type" ||
                  col.head === "Gender" ||
                  col.head === "Product line"
                ) {
                  return (
                    <td key={col.id}>
                      {el[col.head.toLowerCase().replace(" ", "_")]}
                    </td>
                  );
                } else {
                  return <td key={col.id}>Empty</td>;
                }
              })}
            </tr>
          ))
        : "Empty Data"}
    </tbody>
  );
}

export default Body;
