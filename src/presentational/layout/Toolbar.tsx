import { FunctionComponent, PropsWithChildren } from 'react';

import { mainStiches } from '../themes';
import { Flex } from './common';

type ToolbarProps = {};

const Toolbar: FunctionComponent<PropsWithChildren<ToolbarProps>> = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default Toolbar;

const Wrapper = mainStiches.styled(Flex, {
  position: 'sticky',
  zIndex: '$toolbar',
  top: '0px',
  width: '100%',
  height: '50px',
  backgroundColor: '$primary100',
  alignItems: 'center',
  paddingInlineStart: '5px',
});
