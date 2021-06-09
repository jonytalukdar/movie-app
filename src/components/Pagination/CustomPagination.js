import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
const darkTheme = createMuiTheme({
  palate: {
    type: 'dark',
  },
});

const CustomPagination = ({ setPage, numOfPages = 10 }) => {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        margin: '12px 0',
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <Pagination
          hideNextButton
          hidePrevButton
          color="primary"
          count={numOfPages}
          onChange={(e) => handlePageChange(e.target.textContent)}
        />
      </ThemeProvider>
    </div>
  );
};

export default CustomPagination;
