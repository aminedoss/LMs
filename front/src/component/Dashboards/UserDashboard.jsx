import React from 'react';
import FeaturedTest from './FeaturedTest';
import LineChart from './LineDatas';
import Sidebarr from './Sidebar';
import { mockTransactions } from './Data';
import { Box, Typography } from "@mui/material";
import PieChart from './Piechart';

const Dashboard = ({ user }) => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      {/* Sidebar */}
      <div style={{ flex: '0 0 250px', height: '100vh' }}>
        <Sidebarr />
      </div>

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          padding: '20px',
          overflowY: 'auto',
        }}
      >
        {/* Featured Section */}
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <FeaturedTest />
        </div>

        {/* LineChart and Transactions Section */}
        <div
          style={{
            display: 'flex',
            marginTop: '20px',
            height: '45vh',
            justifyContent: 'space-between',
          }}
        >
          {/* LineChart */}
          <div
            style={{
              flex: '1', // Take up half of the available space
              marginRight: '20px',
            }}
          >
            <LineChart />
          </div>

          {/* Transactions */}
          <div
            style={{
              flex: '1', 
              marginLeft: '20px',
              backgroundColor: '#343a40',
              padding: '15px',
              borderRadius: '8px',
              overflow: 'auto',
            }}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom="4px solid #3F51B5"
              color="#F5F5F5"
              p="15px"
            >
              <Typography color="#F5F5F5" variant="h6" fontWeight="400">
                Recent Tests
              </Typography>
            </Box>
            {mockTransactions.map((transaction, i) => (
              <Box
                key={`${transaction.txId}-${i}`}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom="4px solid #3F51B5"
                p="15px"
              >
                <Box>
                  <Typography color="#4CAF50" variant="h6" fontWeight="400">
                    {transaction.txId}
                  </Typography>
                  <Typography color="#F5F5F5">{transaction.user}</Typography>
                </Box>
                <Box color="#F5F5F5">{transaction.date}</Box>
                <Box
                  backgroundColor="#4CAF50"
                  p="5px 10px"
                  borderRadius="4px"
                >
                  ${transaction.cost}
                </Box>
              </Box>
            ))}
          </div>
        </div>

        <div
  style={{
    display: 'flex',
    marginTop: '20px',
    justifyContent: 'center', // Center the PieChart horizontally
    alignItems: 'center', // Center the PieChart vertically
    height: '60vh', // Increase the height
  }}
>
  <div style={{ width: '80%', height: '100%' }}> {/* Adjust width and height */}
    <PieChart />
  </div>
</div>
      </div>
    </div>
  );
};

export default Dashboard;
