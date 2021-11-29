import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const DashContent = () => {
  return (
    <>
      <main className="main__grid--wrapper">
        <Card >
          <CardHeader 
            className="card__header"
            title="My Schedule"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. 
            </Typography>
          </CardContent>
        </Card>
        <Card >
          <CardHeader 
            className="card__header"
            title="Announcements"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests.
            </Typography>
          </CardContent>
        </Card>
      </main>
    </>
  );
};

export default DashContent;
