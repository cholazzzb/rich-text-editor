import { FunctionComponent } from 'react';
import { RenderElementProps, RenderLeafProps } from 'slate-react';
import { AlignText, FontStyle, List } from 'src/domains/doc/entity';

type DocElement = RenderElementProps & {
  element: Partial<{
    align: AlignText;
    type: 'list-item' | List;
  }>;
};
export const DocElement: FunctionComponent<DocElement> = ({
  attributes,
  children,
  element,
}) => {
  const style = { textAlign: element.align };
  switch (element.type) {
    case 'list-item':
      return (
        <li style={style} {...attributes}>
          {children}
        </li>
      );
    case 'bulleted-list':
      return (
        <ul style={style} {...attributes}>
          {children}
        </ul>
      );
    case 'numbered-list':
      return (
        <ol style={style} {...attributes}>
          {children}
        </ol>
      );
    default:
      return (
        <p style={style} {...attributes}>
          {children}
        </p>
      );
  }
};

type DocLeafProps = RenderLeafProps & {
  leaf: Partial<Record<FontStyle, true>>;
};
export const DocLeaf: FunctionComponent<DocLeafProps> = ({
  attributes,
  children,
  leaf,
}) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.code) {
    children = <code>{children}</code>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  return <span {...attributes}>{children}</span>;
};
