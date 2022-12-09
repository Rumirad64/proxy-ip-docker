import React from "react";
import { Typography, Box, Container } from '@mui/material';

export default function AboutUs() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          About
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          This is the web UI for the proxy detect service.
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom mt={4}>
          NPM Packages used:
        </Typography>
        <Typography variant="body1">
          https://www.npmjs.com/package/proxy-detect-module?activeTab=readme
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom mt={4}>
          Docker Images used:
        </Typography>
        <Typography variant="body1">
          https://hub.docker.com/r/2000064/proxy-web-backend
        </Typography>
        <Typography variant="body1">
          https://hub.docker.com/r/2000064/proxy-web-ui
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom mt={4}>
          GitHub Repositories used:
        </Typography>
        <Typography variant="body1">
          https://github.com/Rumirad64/proxy-ip-module
        </Typography>
        <Typography variant="body1">
          https://github.com/Rumirad64/proxy-ip-docker
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom mt={4}>
          Made with ❤ by:
        </Typography>
        <Typography variant="body1">
          https://github.com/Rumirad64
        </Typography>
        <Typography variant="body1">
          https://github.com/Navin47
        </Typography>
      </Box>
    </Container>
  );
}
