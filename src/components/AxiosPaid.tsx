import axios from "axios";

export function AxiosPaid(
  setStatus: any,

  id: string | undefined,
  invoice: any
  //   senderStreet: string | undefined,
  //   senderCity: string,
  //   senderPostCode: string,
  //   senderCountry: string,
  //   clientName: string,
  //   clientEmail: string,
  //   clientStreet: string,
  //   clientCity: string,
  //   clientPostCode: string,
  //   clientCountry: string,
  //   dateJSON: any,
  //   paymentTerms: number,
  //   paymentDue: string,
  //   status: string,
  //   description: string,
  //   items: any,
  //   navigate: any
) {
  setStatus("paid");
  // to do!!!
  axios
    .put(`http://localhost:9481/invoices/${id}`, {
      id: id,
      senderAddress: {
        street: invoice.senderAddress.street,
        city: invoice.senderAddress.city,
        postCode: invoice.senderAddress.postCode,
        country: invoice.senderAddress.country,
      },
      clientName: invoice.clientName,
      clientEmail: invoice.clientEmail,
      clientAddress: {
        street: invoice.clientAddress.street,
        city: invoice.clientAddress.city,
        postCode: invoice.clientAddress.postCode,
        country: invoice.clientAddress.country,
      },
      createdAt: invoice.createdAt,
      paymentTerms: invoice.paymentTerms,
      paymentDue: invoice.paymentDue,
      status: "paid",
      description: invoice.description,
      items: invoice.items.map((item: any) => ({
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
      window.location.reload();
    });
}
