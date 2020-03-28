import React, {useState, useEffect} from 'react';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import Autocomplete from '@material-ui/lab/Autocomplete';

const Api = () => {
  const [data, setData] = useState([]);
  const [param, setParam] = useState(null);
  const [value, setValue] = useState('');
  const [result, setResult] = useState(null);

  const defaultProps = {
    options: data,
    getOptionLabel: option => option.endpoint,
  };

  useEffect(() => {
    axios.post('api').then((resp) => {
      setData(resp.data);
    });
  }, []);

  const send = () => {
    axios.get(`${param.endpoint}/${value}`).then(response => {
      setResult(response.data);
    });
  };

  return (
    <Grid container spacing={2} alignItems={'center'}>
      <Grid item xs={12}>
        <Typography component="h3" variant="h6">
          前缀：{process.env.REACT_APP_API_URL}
        </Typography>
      </Grid>

      <Grid item>
        <Autocomplete
          {...defaultProps}
          value={param}
          onChange={(event, newValue) => {
            setParam(newValue);
          }}
          renderInput={params =>
            <TextField
              {...params}
              label="方法"
              variant="outlined"
              size="small"
              style={{width: 200}}
            />
          }
        />
      </Grid>

      <Grid item>
        <TextField
          label="参数"
          size="small"
          variant="outlined"
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
            console.log(event.target.value);
          }}
        />
      </Grid>

      <Grid item>
        <Button
          variant="contained"
          color="primary"
          endIcon={<Icon>send</Icon>}
          onClick={() => send()}
        >
          Send
        </Button>
      </Grid>

      <Grid item>
        <Typography component="h4" variant="body1">
          结果：{result}
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>api</TableCell>
                <TableCell>参数</TableCell>
                <TableCell>介绍</TableCell>
                <TableCell>举例</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>{row.endpoint}</TableCell>
                  <TableCell>{row.param}</TableCell>
                  <TableCell>{row.content}</TableCell>
                  <TableCell>{row.example}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default Api;
