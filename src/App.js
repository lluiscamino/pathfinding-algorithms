import { AppBar, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Icon, IconButton, Link, Slider, Toolbar, Typography } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import { loadCSS } from 'fg-loadcss';
import React, { useState } from 'react';
import './App.css';
import Grid from './Grid';

function App() {

  React.useEffect(() => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
  }, []);

  const [speed, setSpeed] = useState(0.5);
  const [realSpeed, setRealSpeed] = useState(0.5);
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar style={{ minHeight: 48 }}>
          <Typography variant="h6" style={{ marginRight: 16, marginLeft: -12 }}>
            Pathfinding Algorithms
        </Typography>
          <IconButton color="inherit" style={{ marginLeft: 'auto', marginRight: -12 }}
            onClick={() => setSettingsOpen(true)}>
            <SettingsIcon />
          </IconButton>
          <IconButton color="inherit" style={{ marginLeft: 10 }}
            href="https://github.com/lluiscamino/pathfinding-algorithms" target="_blank" rel="noopener">
            <Icon className="fab fa-github" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Dialog open={settingsOpen} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Settings</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Adjust the speed of the simulation.
          </DialogContentText>
          <div>
            <Typography gutterBottom>
              Speed
            </Typography>
            <Slider min={1} value={speed * 100} onChange={(ev, s) => setSpeed(s / 100)} aria-labelledby="continuous-slider" />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {
            setSpeed(realSpeed);
            setSettingsOpen(false);
          }} color="default">
            Cancel
          </Button>
          <Button onClick={() => {
            setRealSpeed(speed);
            setSettingsOpen(false);
          }} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
      <Container maxWidth={false}>
        <Grid speed={realSpeed} />
        <footer>
          Made by <Link href="https://lluis.life" target="_blank" rel="noopener">Lluís Camino</Link> with React
        </footer>
      </Container>
    </div>
  );
}

export default App;
