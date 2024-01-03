import { Typography, Link } from "@mui/material"

const Copyright = (props) => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://danielbyrne.dev/" target="_blank">
        Daniel Byrne
      </Link>
      {' 2024.'}
    </Typography>
  )
}

export default Copyright