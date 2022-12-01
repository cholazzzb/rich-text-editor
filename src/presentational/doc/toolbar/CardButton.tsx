import { FunctionComponent } from 'react';
import { BaseRange } from 'slate';
import { useSlate } from 'slate-react';
import { insertCard } from 'src/domains/doc/block';

import { CardStyle } from 'src/domains/doc/entity';
import { Button, Icon, TextParagraph } from 'src/presentational/components';

type CardButtonProps = {
  target?: BaseRange;
  cardStyle: CardStyle;
  icon: React.ReactNode;
  label?: string;
};

const CardButton: FunctionComponent<CardButtonProps> = (props) => {
  const editor = useSlate();

  return (
    <Button
      css={{
        width: '100px',
        color: 'white',
        borderColor: '$tertiary100',
      }}
      onMouseDown={(event) => {
        event.preventDefault();
        insertCard(editor, props.cardStyle);
      }}>
      <Icon css={{ height: '15px', width: '15px' }}>{props.icon}</Icon>
      <TextParagraph css={{ marginInlineStart: '10px' }}>
        {props.label}
      </TextParagraph>
    </Button>
  );
};

export default CardButton;
