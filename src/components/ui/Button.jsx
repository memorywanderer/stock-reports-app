import { styled } from "../../stitches.config"

const Button = styled('button', {
  cursor: "pointer",
  padding: ".7rem 1rem",
  fontSize: "1rem",
  border: "none",
  borderRadius: ".5rem",
  variants: {
    color: {
      primary: {
        backgroundColor: '$accent',
        color: '$typographyAccent',
        '&:hover': {
          backgroundColor: '$accentHover',
        },
      },
      secondary: {
        backgroundColor: '$backgroundTertiary',
        color: '$typography',
        '&:hover': {
          backgroundColor: '$backgroundTertiary',
        },
      },
    },
    position: {
      absolute: {
        position: "absolute",
        top: "2%",
        right: "2%",
      }
    }
  },
})

export {
  Button
}