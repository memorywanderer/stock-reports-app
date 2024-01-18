import { styled } from "../../stitches.config"

const HeadingOne = styled('h1', {
  fontFamily: "PPNeueMontreal",
  fontSize: "42px",
  fontWeight: "700",
  margin: 0,
  marginBottom: "1rem",
  padding: "40px 0 0 0"
})

const HeadingTwo = styled("div", {
  fontFamily: "PPNeueMontreal",
  fontSize: "32px",
  fontWeight: "700",
  margin: 0
})

const Text = styled("p", {
  fontFamily: "PPNeueMontreal",
  fontSize: "16px",
  fontWeight: "500",
  margin: 0,
  maxWidth: '740px',
  marginTop: "8px",
})

export {
  HeadingOne,
  HeadingTwo,
  Text
}