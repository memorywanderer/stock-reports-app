import { styled } from "../stitches.config"
import { Text } from "./ui/Typography"

const Row = styled("footer", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "1rem",
  padding: "24px 0",
})

export const Footer = ({ children }) => {
  return (
    <Row>
      <Text>Stonks inc. 2024</Text>
    </Row>
  )
}