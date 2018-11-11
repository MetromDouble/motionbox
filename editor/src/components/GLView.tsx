import React, { Component } from 'react';
import { initGL } from '../gl';

interface IViewProps {
}
interface IViewState {
}

class View extends Component<IViewProps, IViewState> {
  private _threeWrapper: React.RefObject<HTMLDivElement>;

  constructor(props: IViewProps) {
    super(props);

    this._threeWrapper = React.createRef();
  }
  componentDidMount() {
    const element = this._threeWrapper.current;

    if (!element) return;

    initGL(element);
  }
  render() {
    return (
      <div ref={this._threeWrapper} style={{ width: '100%', height: '100%' }} />
    );
  }
}

export default View;
