import * as React from "react";

const ReportContext = React.createContext();

let date = new Date();

// let list = [
//   [
//     "R2019-001",
//     "Fahud to Mattan",
//     `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`,
//     "Action",
//   ],
//   [
//     "R2019-002",
//     "Fahud to Yibal",
//     `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`,
//     "Action",
//   ],
//   [
//     "R2019-003",
//     "Fahud to Lekhwair",
//     `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`,
//     "Action",
//   ],
// ];

let list2 = [
  {
    reportId: "R2019-001",
    reportName: "Fahud to Mattan",
    reportDate: `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`,
    Action: "Action",
  },
];

export const ReportProvider = ({ children }) => {
  /* This allows us to change context from our tag component */
  const [reportList, setReportList] = React.useState(list2);

  return (
    <ReportContext.Provider
      value={{
        reportList,
        setReportList,
      }}
    >
      {children}
    </ReportContext.Provider>
  );
};

export default ReportContext;
