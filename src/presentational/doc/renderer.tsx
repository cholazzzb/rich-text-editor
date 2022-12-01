import { FunctionComponent } from 'react';
import { RenderElementProps, RenderLeafProps } from 'slate-react';
import { DocElement, DocLeaf, FontStyle } from 'src/domains/doc/entity';
import { Card, CardBody, CardHeader, CardSpacer } from './Card';

export const DocElementRenderer: FunctionComponent<RenderElementProps> = ({
  attributes,
  children,
  element,
}) => {
  const el = element as DocElement;
  if (el?.type) {
    switch (el.type) {
      case 'list-item':
        return <li {...attributes}>{children}</li>;
      case 'bulleted-list':
        return <ul {...attributes}>{children}</ul>;
      case 'numbered-list':
        return <ol {...attributes}>{children}</ol>;

      case 'card': {
        return <Card cardStyle={el.cardStyle}>{children}</Card>;
      }

      case 'paragraph': {
        const style = { textAlign: el.align };

        return (
          <p style={style} {...attributes}>
            {children}
          </p>
        );
      }
      default: {
        return <></>;
      }
    }
  }

  return <></>;
};

type DocLeafRendererProps = RenderLeafProps & {
  leaf: Partial<Record<FontStyle, true>>;
};
export const DocLeafRenderer: FunctionComponent<DocLeafRendererProps> = ({
  attributes,
  children,
  leaf,
}) => {
  const docLeaf = leaf as DocLeaf;
  if (docLeaf?.type) {
    switch (docLeaf.type) {
      case 'card-header': {
        return <CardHeader>{children}</CardHeader>;
      }
      case 'card-body': {
        return (
          <>
            <CardSpacer />
            <CardBody>{children}</CardBody>
          </>
        );
      }
    }
  }

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
