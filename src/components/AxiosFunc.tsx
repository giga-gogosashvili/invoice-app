import axios from "axios";

export function AxiosFunc(
  id: string | undefined,
  invoice: any,
  senderStreet: string | undefined,
  senderCity: string,
  senderPostCode: string,
  senderCountry: string,
  clientName: string,
  clientEmail: string,
  clientStreet: string,
  clientCity: string,
  clientPostCode: string,
  clientCountry: string,
  dateJSON: any,
  paymentTerms: number,
  paymentDue: string,
  status: string,
  description: string,
  items: any,
  navigate: any
) {
  if (invoice) {
    axios
      .put(
        `http://localhost:9481/invoices/${id}`,

        {
          id: id,
          senderAddress: {
            street: invoice
              ? senderStreet || invoice.senderAddress.street
              : senderStreet,
            city: senderCity || invoice.senderAddress.city,
            postCode: senderPostCode || invoice.senderAddress.postCode,
            country: senderCountry || invoice.senderAddress.country,
          },
          clientName: clientName || invoice.clientName,
          clientEmail: clientEmail || invoice.clientEmail,
          clientAddress: {
            street: clientStreet || invoice.clientAddress.street,
            city: clientCity || invoice.clientAddress.city,
            postCode: clientPostCode || invoice.clientAddress.postCode,
            country: clientCountry || invoice.clientAddress.country,
          },
          createdAt: dateJSON,
          paymentTerms: paymentTerms || invoice.paymentTerms,
          paymentDue: paymentDue || invoice.paymentDue,
          status: status,
          description: description || invoice.description,

          items: items.map((item: any, index: any) => ({
            name: item.name || items[index].name,
            quantity: item.quantity || items[index].quantity,
            price: item.price || items[index].price,
            total: item.total || items[index].total,
          })),
        }
      )
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      )
      .then(() => {
        navigate("/invoices");
      });
  } else {
    axios
      .post("http://localhost:9481/invoices", {
        senderAddress: {
          street: senderStreet,
          city: senderCity,
          postCode: senderPostCode,
          country: senderCountry,
        },
        clientName: clientName,
        clientEmail: clientEmail,
        clientAddress: {
          street: clientStreet,
          city: clientCity,
          postCode: clientPostCode,
          country: clientCountry,
        },
        createdAt: dateJSON,
        paymentTerms: paymentTerms,
        paymentDue: paymentDue,
        status: status,
        description: description,

        items: items.map((item: any, index: any) => ({
          name: item.name,
          quantity: item.quantity,
          price: item.price,
          total: item.total,
        })),
      })
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      )
      .then(() => {
        navigate("/invoices");
      });
  }
}
