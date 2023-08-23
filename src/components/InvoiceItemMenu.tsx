import { Box } from "@mui/material";
import { InvoiceResponse } from "./Invoices";
import IsolatedMenu from "./IsolatedMenu";

interface Props {
  invoice: InvoiceResponse[];
}

export default function InvoiceItemMenu({ invoice }: Props) {
  return (
    <>
      {invoice.map((invoice: any, index: number) => (
        <Box key={index}>
          <IsolatedMenu id={invoice.id}></IsolatedMenu>
        </Box>
      ))}
    </>
  );
}
