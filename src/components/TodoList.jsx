import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Skeleton from "@material-ui/lab/Skeleton";
import axios from "axios";
import React, { useEffect, useState } from "react";

const useStyles = makeStyles(() => ({
  tableRoot: {
    overflowX: "auto",
  },
}));

const TodoList = () => {
  const classes = useStyles();

  const [todo, setTodo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("todo").then(({ data }) => {
      setTodo(data);
      setLoading(false);
    });
  }, []);

  return (
    <Paper className={classes.tableRoot}>
      <Table aria-label="simple table" size="small">
        <TableHead>
          <TableRow>
            <TableCell>Todo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(loading ? Array.from(new Array(10)) : todo).map((row, index) => (
            <TableRow key={index}>
              <TableCell component="td" scope="row">
                {row ? (
                  row.title
                ) : (
                  <Skeleton variant="rect" height={20} animation="wave" />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default TodoList;
