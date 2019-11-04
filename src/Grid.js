import { Button, Card, Snackbar } from '@material-ui/core';
import React, { useState } from 'react';
import Algorithms from './algorithms/algorithms';
import Cell from './Cell';
import './Grid.css';
import MySnackbarContentWrapper from './MySnackbarContentWrapper';

export default function Grid(props) {

  const NUM_ROWS = (3 / 4) * window.innerHeight / 26;
  const NUM_COLUMNS = (window.innerWidth - 120) / 26;
  const rows = [];

  const [startPos, setStartPos] = useState({ x: Math.floor(NUM_ROWS / 2), y: Math.floor(NUM_COLUMNS / 5) });
  const [endPos, setEndPos] = useState({ x: Math.floor(NUM_ROWS / 2), y: Math.floor(NUM_COLUMNS - NUM_COLUMNS / 5) });
  const [walls, setWalls] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [changingStartPos, setChangingStartPos] = useState(false);
  const [changingEndPos, setChangingEndPos] = useState(false);
  const [pathFound, setPathFound] = useState(false);
  const [pathNotFound, setPathNotFound] = useState(false);
  const [pathLength, setPathLength] = useState(0);
  const [pathTime, setPathTime] = useState(0);

  const isStartPos = (pos) => {
    return pos.x === startPos.x && pos.y === startPos.y;
  };

  const isEndPos = (pos) => {
    return pos.x === endPos.x && pos.y === endPos.y;
  };

  const isWall = (pos) => {
    return walls.some(n => n.x === pos.x && n.y === pos.y);
  };

  const animate = (visited, path) => {
    let counter = 0;
    for (const node of visited) {
      if (isStartPos(node) || isEndPos(node)) continue;
      setTimeout(() => {
        document.getElementById(`cell-${node.x}-${node.y}`).classList.add('visited');
      }, 2.5 / props.speed * counter);
      counter++;
    }
    for (const node of path) {
      if (isStartPos(node) || isEndPos(node)) continue;
      setTimeout(() => {
        document.getElementById(`cell-${node.x}-${node.y}`).classList.add('path');
      }, 2.5 / props.speed * counter);
      counter++;
    }
  };

  const clearCells = () => {
    for (let i = 0; i < NUM_ROWS; i++) {
      for (let j = 0; j < NUM_COLUMNS; j++) {
        document.getElementById(`cell-${i}-${j}`).classList.remove('path');
        document.getElementById(`cell-${i}-${j}`).classList.remove('visited');
      }
    }
  };

  const addWall = (pos) => {
    if (isStartPos(pos) || isEndPos(pos)) return;
    if (isWall(pos)) {
      removeWall(pos);
    } else {
      setWalls(walls => [...walls, pos]);
    }
  };

  const removeWall = (pos) => {
    const index = walls.findIndex(n => n.x === pos.x && n.y === pos.y);
    if (index === -1) return;
    walls.splice(index, 1);
    setWalls(walls => [...walls]);
  };

  for (let i = 0; i < NUM_ROWS; i++) {
    const elements = [];
    for (let j = 0; j < NUM_COLUMNS; j++) {
      const pos = { x: i, y: j };
      elements.push(
        <Cell
          key={j}
          start={isStartPos(pos)}
          end={isEndPos(pos)}
          pos={pos}
          wall={isWall(pos)}
          mouseDownHandler={(pos) => {
            setClicked(true);
            addWall(pos);
          }}
          mouseEnterHandler={(pos) => {
            if (changingStartPos) {
              setStartPos(pos);
            }
            if (changingEndPos) {
              setEndPos(pos);
            }
            if (clicked) {
              addWall(pos);
            }
          }}
          mouseLeaveHandler={(pos) => {
            setClicked(false);
          }}
          clickHandler={() => {
            if (changingStartPos) {
              setStartPos(pos);
              setChangingStartPos(false);
              removeWall(pos);
            }
            if (changingEndPos) {
              setEndPos(pos);
              setChangingEndPos(false);
              removeWall(pos);
            }
            if (isStartPos(pos) && !changingStartPos) {
              setChangingStartPos(true);
            }
            if (isEndPos(pos) && !changingEndPos) {
              setChangingEndPos(true);
            }
          }}
        />
      );
    }
    rows.push(<div className="row" key={i}>{elements}</div>);
  }

  return (
    <>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={pathNotFound}
        autoHideDuration={6000}
        onClose={() => { setPathNotFound(false); }}
      >
        <MySnackbarContentWrapper
          onClose={() => { setPathNotFound(false); }}
          variant="error"
          message="Path not found!"
        />
      </Snackbar>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={pathFound}
        autoHideDuration={6000}
        onClose={() => { setPathFound(false); }}
      >
        <MySnackbarContentWrapper
          onClose={() => { setPathFound(false); }}
          variant="success"
          message={`Path found! (Path length: ${pathLength}, time: ${pathTime.toFixed(2)}ms)`}
        />
      </Snackbar>
      <Card style={{ marginTop: 12 }} className="menu">
        <Button color="primary" onClick={() => {
          clearCells();
          const algorithms = new Algorithms(NUM_ROWS, NUM_COLUMNS, startPos, endPos, walls);
          try {
            const result = algorithms.bfs();
            animate(result.visited, result.path);
            setPathLength(result.path.length);
            setPathTime(result.time);
            setPathFound(true);
          } catch (error) {
            setPathNotFound(true);
          }
        }}>
          Breadth first Search
          </Button>
        <Button color="primary" onClick={() => {
          clearCells();
          const algorithms = new Algorithms(NUM_ROWS, NUM_COLUMNS, startPos, endPos, walls);
          try {
            const result = algorithms.dfs();
            animate(result.visited, result.path);
            setPathLength(result.path.length);
            setPathTime(result.time);
            setPathFound(true);
          } catch (error) {
            setPathNotFound(true);
          }
        }}>
          Depth first Search
          </Button>
        <Button color="primary" onClick={() => {
          clearCells();
          const algorithms = new Algorithms(NUM_ROWS, NUM_COLUMNS, startPos, endPos, walls);
          try {
            const result = algorithms.bidirectionalBFS();
            animate(result.visited, result.path);
            setPathLength(result.path.length);
            setPathTime(result.time);
            setPathFound(true);
          } catch (error) {
            setPathNotFound(true);
          }
        }}>
          Bidirectional BFS
          </Button>
        <Button color="primary" onClick={() => {
          clearCells();
          const algorithms = new Algorithms(NUM_ROWS, NUM_COLUMNS, startPos, endPos, walls);
          try {
            const result = algorithms.aStar();
            animate(result.visited, result.path);
            setPathLength(result.path.length);
            setPathTime(result.time);
            setPathFound(true);
          } catch (error) {
            setPathNotFound(true);
          }
        }}>
          A* Search
          </Button>
        <br />
        <Button color="default" onClick={() => {
          setWalls([]);
        }}>
          Clear walls
          </Button>
        <Button color="default" onClick={() => {
          clearCells();
        }}>
          Clear path
          </Button>
      </Card>
      <div>
        {rows}
      </div>
    </>
  );
};