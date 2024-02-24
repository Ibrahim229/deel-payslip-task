export interface Payslip {
  id: string;
  fromDate: Date;
  toDate: Date;
  file: string;
}

const payslips: Payslip[] = [
  {
    id: '0',
    fromDate: new Date("2023-01-01"),
    toDate: new Date("2023-01-31"),
    file:"https://www.clickdimensions.com/links/TestPDFfile.pdf"
  },
  {
    id: '1',
    fromDate: new Date("2023-01-01"),
    toDate: new Date("2023-01-31"),
    file:"https://www.clickdimensions.com/links/TestPDFfile.pdf"
  },
  {
    id: '2',
    fromDate: new Date("2023-02-01"),
    toDate: new Date("2023-02-28"),
    file:"https://www.clickdimensions.com/links/TestPDFfile.pdf"

  },
  {
    id: '3',
    fromDate: new Date("2023-03-01"),
    toDate: new Date("2023-03-31"),
    file:"https://www.clickdimensions.com/links/TestPDFfile.pdf"
  },
  {
    id: '4',
    fromDate: new Date("2023-04-01"),
    toDate: new Date("2023-04-30"),
    file:"https://www.clickdimensions.com/links/TestPDFfile.pdf"
  },
  {
    id: '5',
    fromDate: new Date("2023-05-01"),
    toDate: new Date("2023-05-31"),
    file:"https://www.clickdimensions.com/links/TestPDFfile.pdf"
  },
  {
    id: '6',
    fromDate: new Date("2023-06-01"),
    toDate: new Date("2023-06-30"),
    file:"https://www.clickdimensions.com/links/TestPDFfile.pdf"
  },
  {
    id: '7',
    fromDate: new Date("2023-07-01"),
    toDate: new Date("2023-07-31"),
    file:"https://www.clickdimensions.com/links/TestPDFfile.pdf"
  }
];

export const getPayslips = () => payslips;

export const getPayslip = (id: string) => payslips.find(m => m.id === id);
