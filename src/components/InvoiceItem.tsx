import { Box, List, ListItemText, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { InvoiceResponse } from "./Invoices";
import Chip from "@mui/material/Chip";
import { StyledListItem, StatusButton } from "../customize/StyledElements";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
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
            <Grid
              item
              xs={10}
              sx={
                {
                  // flexDirection: { xs: "column", md: "row" },
                }
              }
            >
              <List
                sx={{
                  m: 0,
                  p: 0,
                  // flexDirection: { xs: "column", md: "row" },
                }}
              >
                {data.map((invoice, index: number) => (
                  <StyledListItem
                    key={index}
                    sx={{
                      bgcolor: "grey.50",
                      width: { md: "650px", xs: "327px" },
                      height: { md: "72px", xs: "134px" },
                      borderRadius: "8px",
                      display: { xs: "flex", md: "auto" },
                      flexDirection: { xs: "column", md: "row" },
                      flexFlow: { xs: "column wrap", md: "nowrap" },
                    }}
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
                            opacity: "1!important",
                          },
                        }}
                        icon={<FiberManualRecordIcon />}
                      ></Chip>
                    </Stack>
                  </StyledListItem>
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

// OLD VERSION
{
  /* <List>
{data.map((invoice, index: number) => (
  <StyledListItem key={index}>
    <ListItemText>
      <Typography component="div" variant="h4">
        <Box display="inline" color={"#7E88C3"}>
          #
        </Box>
        {invoice.id}
      </Typography>
    </ListItemText>
    <ListItemText>
      <Typography component="div" variant="body1" color="info.main">
        Due{" "}
        <Box display="inline" color={"info.light"}>
          {invoice.paymentDue}
        </Box>
      </Typography>
    </ListItemText>

    <ListItemText
      primary={invoice.clientName}
      sx={{
        "& .MuiListItemText-primary": {
          color: "info.main",
          typography: "body1",
        },
      }}
      color="info"
    />
    <ListItemText
      primary={`£${formatingNumbers(invoice.total)}`}
      sx={{
        "& .MuiListItemText-primary": {
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
        }}
        icon={<FiberManualRecordIcon />}
      ></Chip>
    </Stack> */
}

{
  /* <ConfirmDeletion
      open={open}
      closeDialog={handleClose}
      id={invoice.id}
      deleteFunction={() => deleteFunction(invoice.id)}
    /> */
}

{
  /* <InvoiceItemMenu invoice={invoice}></InvoiceItemMenu> */
}

{
  /* <InvoiceItemMenu invoice={data}></InvoiceItemMenu> */
}
//   </StyledListItem>
// ))}
{
  /* <Box
  sx={{
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
  }}
>
  <InvoiceItemMenu invoice={data}></InvoiceItemMenu>
</Box> */
}
// </List>
