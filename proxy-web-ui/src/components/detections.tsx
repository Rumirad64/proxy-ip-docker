import React, { useMemo } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead,
  TableRow, Paper, TablePagination, Backdrop, CircularProgress,
  TextField, Box, Stack, Button, Avatar
} from '@mui/material';

import { Delete, OpenInNew } from '@mui/icons-material';
import { debounce } from 'lodash';
import axios from 'axios';

interface Row {
  ip: string;
  reason: string;
  hits: number;
  createdAt: string;
  updatedAt: string;
}
interface Window {
  _env_: {
    REACT_APP_API_URL: string;
    GENERATE_SOURCEMAP: string;
  }
}
declare let window: Window;


export default function BasicTable() {
  const [rows, setRows] = React.useState<Row[]>([]);
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(20);
  const [isLoading, setIsLoading] = React.useState(false);
  const [search, setSearch] = React.useState('');
  console.log('REACT_APP_API_URL', window._env_.REACT_APP_API_URL ?? 'not found');
  const API_URL = window._env_.REACT_APP_API_URL;

  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const { data } = await axios(`${API_URL}/detect/?page=${page}&limit=${limit}&search=${search}`);
      //in backend, we use mongoose-paginate-v2, so we need to get the docs from the response
      setTimeout(() => {
        setRows(data.docs);
        setIsLoading(false);
      }, 800);
    };
    fetchData();
  }, [page, limit, search]);

  return (
    <React.Fragment>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      {/* right aligned ip search box MUI */}
      <Box style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <TextField
          id="filled-basic"
          label="Search IP"
          variant="outlined"
          size='small'
          sx={{ m: 1 }}
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeholder="112.135.0.0"
        />
      </Box>


      <TableContainer component={Paper} sx={{ mt: 2, mb: 2 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" size="small">
          <TableHead style={{ backgroundColor: '#3f51b5', color: 'white' }}>
            <TableRow>
              <TableCell>IP Address</TableCell>
              <TableCell align="right">Reason</TableCell>
              <TableCell align="right">Hits</TableCell>
              <TableCell align="right">First Seen</TableCell>
              <TableCell align="right">Last Seen</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.ip}
                </TableCell>
                <TableCell align="right">{row.reason}</TableCell>
                <TableCell align="right">{row.hits}</TableCell>
                <TableCell align="right">{new Date(row.createdAt).toTimeString()}</TableCell>
                <TableCell align="right">{new Date(row.updatedAt).toTimeString()}</TableCell>
                <TableCell align="right">
                  <Stack direction="row" spacing={1} justifyContent="flex-end">
                    <Button
                      variant="text"
                      color="primary"
                      startIcon={<Avatar sx={{ width: 24, height: 24 }} src={'https://www.abuseipdb.com/img/abuseipdb-logo.svg'} />}
                      endIcon={<OpenInNew />}
                      href={`https://www.abuseipdb.com/check/${row.ip}`}
                      target="_blank"
                    >
                      Check
                    </Button>
                    <Button
                      variant="text"
                      color="primary"
                      startIcon={<Avatar sx={{ width: 24, height: 24 }} src={'/images/virustotal.svg'} />}
                      endIcon={<OpenInNew />}
                      href={`https://www.virustotal.com/gui/ip-address/${row.ip}/detection`}
                      target="_blank"
                    >
                      Check
                    </Button>
                    <Button
                      variant="text"
                      color="primary"
                      startIcon={<Avatar sx={{ width: 24, height: 24 }} src={'/images/CiscoTalos.png'} />}
                      endIcon={<OpenInNew />}
                      href={`https://www.talosintelligence.com/reputation_center/lookup?search=${row.ip}`}
                      target="_blank"
                    >
                      Check
                    </Button>
                    {/* delete button */}
                    <Button
                      variant="text"
                      color="error"
                      startIcon={<Delete />}
                      onClick={() => {
                        axios.delete(`${API_URL}/detect/${row.ip}`)
                          .then(() => {
                            const newRows = rows.filter((r) => r.ip !== row.ip);
                            setRows(newRows);
                          })
                          .catch((err) => {
                            console.log(err);
                          });
                      }}
                    >
                      Delete
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={-1}
          page={page - 1}
          onPageChange={(event, newPage) => setPage(newPage)}
          rowsPerPage={limit}
          onRowsPerPageChange={(event) => setLimit(parseInt(event.target.value, 10))}
          rowsPerPageOptions={[10, 20, 50]}
        />
      </TableContainer>
    </React.Fragment>
  );
}