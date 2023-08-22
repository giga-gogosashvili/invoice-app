import { Box, List, ListItemText, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { InvoiceResponse } from "./Invoices";
import Chip from "@mui/material/Chip";
import StyledInvoicesRow from "src/customize/StyledInvoicesRow";
import InvoiceItemMenu from "./InvoiceItemMenu";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate } from "react-router-dom";

interface Props {
  data: InvoiceResponse[];
  func: any;
}

export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
const formatingNumbers = (number: number) => {
  return number.toLocaleString(undefined, { minimumFractionDigits: 2 });
};

export default function InvoiceItem({ data, func }: Props) {
  const matchesXS = useMediaQuery("(min-width:768px)");
  const navigate = useNavigate();

  return (
    <div>
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <Grid item xs={10}>
              <List
                sx={{
                  m: 0,
                  p: 0,
                }}
              >
                {data.map((invoice, index: number) => (
                  <StyledInvoicesRow
                    key={index}
                    onClick={() => {
                      navigate(`/invoices/${invoice.id}`);
                    }}
                  >
                    <ListItemText>
                      <Typography
                        component="div"
                        variant="h4"
                        color="text.primary"
                      >
                        <Box display="inline" color={"#7E88C3"}>
                          #
                        </Box>
                        {invoice.id}
                      </Typography>
                    </ListItemText>
                    <ListItemText>
                      <Typography
                        component="div"
                        variant="body1"
                        color="info.main"
                      >
                        Due{" "}
                        <Box
                          display="inline"
                          color={"primary.dark"}
                          sx={{
                            fontWeight: 500,
                            fontSize: "13px",
                            lineHeight: "18px",
                            letterSpacing: -0.1,
                          }}
                        >
                          {invoice.paymentDue}
                        </Box>
                      </Typography>
                    </ListItemText>

                    <ListItemText
                      primary={invoice.clientName}
                      sx={{
                        "& .MuiListItemText-primary": {
                          color: "grey.100",
                          typography: "body1",
                        },
                      }}
                      color="info"
                    />
                    <ListItemText
                      primary={`£${formatingNumbers(invoice.total)}`}
                      sx={{
                        "& .MuiListItemText-primary": {
                          color: "text.primary",
                          typography: "h3",
                        },
                      }}
                    />

                    <Stack direction="row" spacing={2}>
                      <Chip
                        label={capitalizeFirstLetter(invoice.status)}
                        color={func(invoice.status)}
                        sx={{
                          mr: 5,
                          width: 100,
                          typography: "h4",
                          "& .MuiChip-label": {
                            color: "white",
                          },
                          "&::first-letter": {
                            textTransform: "capitalize",
                          },
                        }}
                      ></Chip>
                    </Stack>
                  </StyledInvoicesRow>
                ))}
              </List>
            </Grid>
            <Grid item xs={2}>
              {matchesXS ? (
                <InvoiceItemMenu invoice={data}></InvoiceItemMenu>
              ) : (
                ""
              )}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
