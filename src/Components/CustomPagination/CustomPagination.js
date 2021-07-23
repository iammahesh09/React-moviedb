import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  },
  pagination: {
    backgroundColor: '#fbfbfb',
    padding: '10px 0',
    boxShadow: '1px 1px 10px #c3c3c3',
    '& > ul': {
      justifyContent: 'center',
    },
  }
}));

export default function CustomPagination ({ setPage, pageCount = 10 }) {
  const classes = useStyles();
  const handlePage = (page) => {
    setPage(page);
    window.scroll(0, 0);
  }
  return (
    <div className={classes.root}>
      {pageCount > 1 ? <Pagination count={pageCount} color="primary" className={`${classes.pagination}`} onChange={(e) => handlePage(e.target.textContent)} /> : ""}
    </div>
  );
}
