import { styled } from "../../stitches.config"
import { keyframes } from "@stitches/react"

const Shine = keyframes({
  '0%': { backgroundPosition: '-460px' },
  '100%': { backgroundPositon: '468px' },
})

const Line = styled('div', {
  borderRadius: "8px",
  height: "20px",
  background: "rgba(130, 130, 130, 0.2)",
  background: "-webkit-gradient(linear, left top, right top, color-stop(8%, rgba(130, 130, 130, 0.2)), color-stop(18%, rgba(130, 130, 130, 0.3)), color-stop(33%, rgba(130, 130, 130, 0.2)))",
  background: "linear-gradient(to right, rgba(130, 130, 130, 0.2) 8%, rgba(130, 130, 130, 0.3) 18%, rgba(130, 130, 130, 0.2) 33%)",
  backgroundSize: "800px 100px",
  animation: `${Shine} 1s infinite ease-out`,
})

export {
  Line
}
