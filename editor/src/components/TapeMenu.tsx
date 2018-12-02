import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import menuConfig from '../cfg/menu.json';
import palette from '../cfg/palette.json';

const MainPane = styled.div`
  display: flex;
  height: 28px;
  background-color: ${palette['color-primary']};
  padding: 0 16px;
`;

const MainPaneItem = styled.div`
  display: flex;
  height: 28px;
  line-height: 28px;
  padding: 0 16px;
  color: ${palette['color-max-light']};
  cursor: pointer;
  transition: color, background-color .2s ease;
  &:hover {
    background-color: ${palette['color-paper']};
    color: ${palette['color-wet-asphalt']};
  }
`;

const TapePane = styled.div`
  display: flex;
  height: 96px;
  background-color: ${palette['color-paper']};
`;

const TapePaneItem = styled.div`
  position: relative;
  height: 100%;
  padding: 4px 8px 20px;
  box-sizing: border-box;
  border-right: 1px solid ${palette['color-steel']};
`;

const TapePaneItemHeader = styled.div`
  height: 20px;
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 20px;
  font-size: 12px;
`;

interface ITapeMenuProps {
}
interface ITapeMenuState {
}

class TapeMenu extends Component<ITapeMenuProps, ITapeMenuState> {
  private propTypes = {
    classes: PropTypes.object.isRequired,
  }

  render() {
    return (
      <>
        <MainPane>
          {menuConfig.root.map(item => (
            <MainPaneItem key={item.name}>
              {item.title}
            </MainPaneItem>
          ))}
        </MainPane>
        <TapePane>
          {menuConfig.root[0].children.map(item => (
            <TapePaneItem key={item.name}>
              <TapePaneItemHeader>
                {item.title}
              </TapePaneItemHeader>
              fffffffffffffffffff
            </TapePaneItem>
          ))}
        </TapePane>
      </>
    );
  }
}

export default TapeMenu;
