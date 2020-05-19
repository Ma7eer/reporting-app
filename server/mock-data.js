/**
id (index) - Sequence?
reportName (nickname that allows anyone to identify the report) - String
reportDate (will be auto generated from the native App, can be a string or a date whichever is easier) String or Date
preparedBy (person that issued the report/performed the site survey) - String
*/
exports.MOCK_REPORTS = [
  {
    id: 1,
    reportName: "Road report 1",
    reportDate: "2020-05-19T12:17:14+0000",
    preparedBy: "Nate"
  },
  {
    id: 2,
    reportName: "Road report 2",
    reportDate: "2020-05-17T12:17:14+0000",
    preparedBy: "Mahir"
  },
  {
    id: 3,
    reportName: "Road report 3",
    reportDate: "2020-05-04T12:17:14+0000",
    preparedBy: "Mahir"
  }
];

/**
id (index) - Sequence?
reportId (reference to a report)
latitude
longitude
chainage (this is the distance from the first point can be in km or m etc)
defectType (pothole? washout? damaged sign? damaged light pole? etc)
image or reference to the image (1 per defect)
length (can be "not applicable")
width (can be "not applicable")
depth/thickness (can be "not applicable")
notes (for general remarks) - String
 */

exports.MOCK_DEFECTS = [
  {
    id: 1,
    reportId: 1,
    latitude: "35.639027",
    longitude: "139.762409",
    chainage: "1km",
    defectType: "pothole",
    image: "12345",
    length: "not applicable",
    width: "not applicable",
    depth: "not applicable",
    notes: "Pothole on bridge"
  },
  {
    id: 2,
    reportId: 2,
    latitude: "35.639027",
    longitude: "139.762409",
    chainage: "1km",
    defectType: "washout",
    image: "12345",
    length: "not applicable",
    width: "not applicable",
    depth: "not applicable",
    notes: "Pothole on bridge"
  },
  {
    id: 3,
    reportId: 2,
    latitude: "35.639027",
    longitude: "139.762409",
    chainage: "1km",
    defectType: "pothole",
    image: "12345",
    length: "not applicable",
    width: "not applicable",
    depth: "not applicable",
    notes: "Pothole on bridge"
  },
  {
    id: 4,
    reportId: 3,
    latitude: "35.639027",
    longitude: "139.762409",
    chainage: "1km",
    defectType: "damaged sign",
    image: "12345",
    length: "not applicable",
    width: "not applicable",
    depth: "not applicable",
    notes: "Pothole on bridge"
  }
];
