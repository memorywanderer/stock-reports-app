import { styled } from "../../stitches.config"

const TableContainer = styled('div', {
  overflowX: "auto",
  marginBottom: "24px",
})

const Table = styled('table', {
  backgroundColor: "$backgroundSecondary",
  padding: ".7rem 0",
  width: "100%",
  border: "none",
  borderRadius: "8px",
  boxShadow: '10px 10px 5px #888',
  marginTop: "24px",
  borderSpacing: 0,
  borderCollapse: 'separate',
})

const HeadTableRow = styled('tr', {
  textAlign: "left",
})

const TableRow = styled('tr', {
  backgroundColor: "$backgroundTertiary",
  '&:nth-of-type(even)': {
    backgroundColor: "$backgroundSecondary",
  }
})

const TH = styled('th', {
  padding: "1rem",
})

const TD = styled('td', {
  padding: "1rem",
  fontFamily: "PPNeueMontreal",
  fontWeight: '500',
  variants: {
    color: {
      growth: {
        color: '$growth',
      },
      decline: {
        color: '$negative',
      }
    }
  }
})

export {
  TableContainer,
  Table,
  TableRow,
  HeadTableRow,
  TH,
  TD,
}
