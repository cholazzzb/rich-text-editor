import { FunctionComponent } from 'react';
import { useSlate } from 'slate-react';

import { isAlignTextActive, toggleAlignText } from 'src/domains/doc/block';
import { AlignText } from 'src/domains/doc/entity';
import { Button } from 'src/presentational/components';

type AlignTextButtonProps = {
  alignText: AlignText;
  icon: React.ReactNode;
};

const AlignTextButton: FunctionComponent<AlignTextButtonProps> = (props) => {
  const editor = useSlate();
  const active = isAlignTextActive(editor, props.alignText);

  return (
    <Button
      css={{
        color: active ? 'white' : '$gray100',
        borderColor: active ? '$tertiary100' : '$secondary100',
      }}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleAlignText(editor, props.alignText);
      }}>
      {props.icon}
    </Button>
  );
};

export default AlignTextButton;
