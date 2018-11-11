import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';

import { cursor3D } from '../gl';
import { Vector3 } from 'three';

const styles = createStyles({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  gridRoot: {
    marginTop: '20px',
  },
});

interface IPanelProps extends WithStyles <typeof styles> {
}
interface IPanelState {
  cursor3DPosition: {
    x: number;
    y: number;
    z: number;
  }
}

class Panel extends Component<IPanelProps, IPanelState> {
  private propTypes = {
    classes: PropTypes.object.isRequired,
  }

  constructor(props: IPanelProps) {
    super(props);

    this.state = {
      cursor3DPosition: {
        x: 0,
        y: 0,
        z: 0,
      },
    };
  }

  componentDidMount() {
    if (cursor3D && cursor3D.mesh) {
      this.setState({
        cursor3DPosition: { ...cursor3D.mesh.position },
      });
    }
  }

  syncPosition() {
    const { x, y, z } = this.state.cursor3DPosition;
  }

  updatePosition() {
    const { x, y, z } = this.state.cursor3DPosition;

    cursor3D.mesh.position.x = isNaN(Number(x)) ? cursor3D.mesh.position.x : Number(x);
    cursor3D.mesh.position.y = isNaN(Number(y)) ? cursor3D.mesh.position.y : Number(y);
    cursor3D.mesh.position.z = isNaN(Number(z)) ? cursor3D.mesh.position.z : Number(z);
  }

  private _handlePositionChange = (field: ('x'|'y'|'z')) => (ev: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(ev.currentTarget.value);
    this.setState({
      cursor3DPosition: {
        ...this.state.cursor3DPosition,
        [field]: ev.currentTarget.value
      }
    }, () => this.updatePosition());
  }

  render() {
    const { classes } = this.props;
    const {
      cursor3DPosition
    } = this.state;
    const {
      _handlePositionChange
    } = this;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <Grid container spacing={16} className={classes.gridRoot} justify="space-between">
          <Grid item xs={3}>
            <Card>
              <CardContent>
                <Typography variant="h6" color="inherit">
                  3D-cursor
                </Typography>
                <div>
                  <TextField
                    id="cursor-3d-x-coord"
                    label="X"
                    value={cursor3DPosition.x}
                    onChange={_handlePositionChange('x')}
                    margin="normal"
                  />
                </div>
                <div>
                  <TextField
                    id="cursor-3d-y-coord"
                    label="Y"
                    value={cursor3DPosition.y}
                    onChange={_handlePositionChange('y')}
                    margin="normal"
                  />
                </div>
                <div>
                  <TextField
                    id="cursor-3d-z-coord"
                    label="Z"
                    value={cursor3DPosition.z}
                    onChange={_handlePositionChange('z')}
                    margin="normal"
                  />
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Panel);
