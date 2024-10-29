// src/pages/Dashboard.js
import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Card>
        <h2>Card 1</h2>
        <p>This is a card with some content.</p>
        <Button>Learn More</Button>
      </Card>
      <Card>
        <h2>Card 2</h2>
        <p>This is another card with different content.</p>
        <Button>Explore</Button>
      </Card>
      <Card>
        <h2>Card 3</h2>
        <p>Another card with more details.</p>
        <Button>Read More</Button>
      </Card>
    </DashboardContainer>
  );
};

export default Dashboard;
