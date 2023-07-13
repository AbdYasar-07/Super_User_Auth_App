import React from "react";
import { FaMixer } from "react-icons/fa";
//
export const AllGroupsContent = ({ description }) => {
  return (
    <div className="container mt-4">
      <p>{description}</p>
    </div>
  );
};

export const AllGroupTable = ({ tableRows}) => {
  let tabvalue = "AllGrop";
  let tableRow = ["Name", "Description"];
  let tableColums = [
    {
      id: 12,
      groupName: "C",
      GroupDescription: "	Concepcion Group Top level",
    },
    {
      id: 13,
      groupName: "C_B",
      GroupDescription: "	Concepcion Group Top level",
    },
  ];
  const getId = (IdValue) => {
    console.log(IdValue);
  };
  return (
    <>
      {tabvalue == "ALL GROUPS" ||
        ("GROUPS" && (
          <table class="table container">
            <thead>
              <tr>
                {tableRow.map((tableRow) => {
                  return <th>{tableRow}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {tableColums.map((tabColumns, index) => {
                return (
                  <tr key={index}>
                    <td>{tabColumns.groupName}</td>
                    <td>{tabColumns.GroupDescription}</td>
                    <td
                      id={tabColumns.id}
                      style={{
                        display: `${tabvalue == "AllGroup" ? "none" : "block"}`,
                      }}
                      onClick={() => getId(tabColumns.id)}
                    >
                      <FaMixer />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ))}
    </>
  );
};
