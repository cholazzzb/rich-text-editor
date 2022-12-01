import { BaseEditor, Descendant, Element } from 'slate';
import { HistoryEditor } from 'slate-history';
import { ReactEditor } from 'slate-react';

export type Group = 'font-style' | 'align-text';

export type FontStyle = 'bold' | 'italic' | 'underline' | 'code';
export type AlignText = 'left' | 'center' | 'right' | 'justify';
export type List = 'numbered-list' | 'bulleted-list';
export type CardStyle = 'info' | 'success' | 'warning' | 'danger';

export type Format = FontStyle | AlignText;
export type Marks = Record<Format, boolean> | null;

export type CardHeaderLeaf = Element & {
  type: 'card-header';
  text: string;
};

export type CardBodyLeaf = Element & {
  type: 'card-body';
  text: string;
};

export type DocLeaf = CardHeaderLeaf | CardBodyLeaf;

export type ParagraphElement = Element & {
  type: 'paragraph';
  align?: AlignText;
};

export type ListElement = Element & {
  type: 'list-item';
};

export type BulletElement = Element & {
  type: 'bulleted-list';
};

export type NumberElement = Element & {
  type: 'numbered-list';
};

export type CardElement = Element & {
  type: 'card';
  cardStyle: CardStyle;
  children: Array<Descendant | CardHeaderLeaf | CardBodyLeaf>;
};

export type DocElement =
  | ParagraphElement
  | ListElement
  | BulletElement
  | NumberElement
  | CardElement;
export type DocElementType = List | 'list-item' | 'card';

export type DocEditor = BaseEditor & ReactEditor & HistoryEditor;
