import { styled } from "../stitches.config"
import { HeadingTwo } from "./ui/Typography"

const Row = styled("header", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "1rem",
  padding: "24px 0",
  marginBottom: "24px",
})

export const Header = ({ children }) => {
  return (
    <Row>
      <HeadingTwo>
        Stonks inc.
      </HeadingTwo>
      {children}
    </Row>
  )
}