import { useEffect, useState } from "react";
import InvoiceItem from "./InvoiceItem";

export type InvoiceResponse = {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;
  senderAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  clientAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  items: [
    {
      name: string;
      quantity: number;
      price: number;
      total: number;
    }
  ];
  total: number;
};
const abc: InvoiceResponse[] = [
  {
    id: "RT3080",
    createdAt: "2021-08-18",
    paymentDue: "2021-08-19",
    description: "Re-branding",
    paymentTerms: 1,
    clientName: "Jensen Huang",
    clientEmail: "jensenh@mail.com",
    status: "paid",
    senderAddress: {
      street: "19 Union Terrace",
      city: "London",
      postCode: "E1 3EZ",
      country: "United Kingdom",
    },
    clientAddress: {
      street: "106 Kendell Street",
      city: "Sharrington",
      postCode: "NR24 5WQ",
      country: "United Kingdom",
    },
    items: [
      {
        name: "Brand Guidelines",
        quantity: 1,
        price: 1800.9,
        total: 1800.9,
      },
    ],
    total: 1800.9,
  },
  {
    id: "XM9141",
    createdAt: "2021-08-21",
    paymentDue: "2021-09-20",
    description: "Graphic Design",
    paymentTerms: 30,
    clientName: "Alex Grim",
    clientEmail: "alexgrim@mail.com",
    status: "pending",
    senderAddress: {
      street: "19 Union Terrace",
      city: "London",
      postCode: "E1 3EZ",
      country: "United Kingdom",
    },
    clientAddress: {
      street: "84 Church Way",
      city: "Bradford",
      postCode: "BD1 9PB",
      country: "United Kingdom",
    },
    items: [
      {
        name: "Banner Design",
        quantity: 1,
        price: 156.0,
        total: 156.0,
      },
      // {
      //   name: "Email Design",
      //   quantity: 2,
      //   price: 200.0,
      //   total: 400.0,
      // },
    ],
    total: 556.0,
  },
  {
    id: "FV2353",
    createdAt: "2021-11-05",
    paymentDue: "2021-11-12",
    description: "Logo Re-design",
    paymentTerms: 7,
    clientName: "Anita Wainwright",
    clientEmail: "",
    status: "draft",
    senderAddress: {
      street: "19 Union Terrace",
      city: "London",
      postCode: "E1 3EZ",
      country: "United Kingdom",
    },
    clientAddress: {
      street: "",
      city: "",
      postCode: "",
      country: "",
    },
    items: [
      {
        name: "Logo Re-design",
        quantity: 1,
        price: 3102.04,
        total: 3102.04,
      },
    ],
    total: 3102.04,
  },
];
//

export const getStatusColor = (
  status: string
):
  | "success"
  | "error"
  | "primary"
  | "inherit"
  | "secondary"
  | "info"
  | "warning"
  | undefined => {
  switch (status) {
    case "paid":
      return "success";
    case "pending":
      return "error";
    case "draft":
      return "primary";
  }
  return "info";
};

export default function Invoices() {
  const [invoices, setInvoices] = useState<InvoiceResponse[]>([]);

  useEffect(() => {
    //zamiast google static content (JSON), data.json{} wykorzystac w setInvoices
    fetch("www.google.com").then((data) => setInvoices(abc));
  });

  return (
    <div>
      <h1>Invoices</h1>
      <p>There are {invoices.length} total invoices</p>
      <InvoiceItem test={abc} func={getStatusColor} />
    </div>
  );
}
