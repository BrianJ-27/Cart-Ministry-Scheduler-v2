import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

const CardHeader = styled.div`
  --fp-weight-main: 600;
  background: var(--clr-accent-color);
  color: var(--clr-header-color);
  padding: 20px !important;
  font-weight: var(--fp-weight-main);
  border-bottom: 1px solid var(--clr-header-color);
`;

const Cards = () => {
  return (
    <div className="main__grid--wrapper">
      <Card>
        <CardHeader>My Schedule</CardHeader>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </Typography>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>Announcements</CardHeader>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Cards;
