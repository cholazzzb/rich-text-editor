import { FunctionComponent } from 'react';
import { useSlate } from 'slate-react';

import { isListActive, toggleList } from 'src/domains/doc/block';
import { List } from 'src/domains/doc/entity';
import { Button } from 'src/presentational/components';

type ListButtonProps = {
  list: List;
  icon: React.ReactNode;
};

const ListButton: FunctionComponent<ListButtonProps> = (props) => {
  const editor = useSlate();
  const active = isListActive(editor, props.list);

  return (
    <Button
      css={{
        color: active ? 'white' : '$gray100',
        borderColor: active ? '$tertiary100' : '$secondary100',
      }}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleList(editor, props.list);
      }}>
      {props.icon}
    </Button>
  );
};

export default ListButton;
