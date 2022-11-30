import { FunctionComponent } from 'react';
import { useSlate } from 'slate-react';

import { FontStyle } from 'src/domains/doc/entity';
import { isMarkActive, toggleMark } from 'src/domains/doc/mark';
import { Button, Icon } from 'src/presentational/components';

type FontStyleButtonProps = {
  fontStyle: FontStyle;
  icon: React.ReactNode;
};

const FontStyleButton: FunctionComponent<FontStyleButtonProps> = (props) => {
  const editor = useSlate();
  const active = isMarkActive(editor, props.fontStyle);
  return (
    <Button
      css={{
        color: active ? 'white' : '$gray100',
        borderColor: active ? '$tertiary100' : '$secondary100',
      }}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleMark(editor, props.fontStyle);
      }}>
      <Icon>{props.icon}</Icon>
    </Button>
  );
};

export default FontStyleButton;
