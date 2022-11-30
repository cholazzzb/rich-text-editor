import { Element } from 'slate';

export type Group = 'font-style' | 'align-text';

export type FontStyle = 'bold' | 'italic' | 'underline' | 'code';
export type AlignText = 'left' | 'center' | 'right' | 'justify';
export type List = 'numbered-list' | 'bulleted-list';

export type Format = FontStyle | AlignText;
export type Marks = Record<Format, boolean> | null;

export type ParagraphElement = Element & {
  type: 'paragraph';
  align?: AlignText;
};

export type ListElement = Element & {
  type: 'paragraph' | 'list-item';
};

export type DocElement = Element | ParagraphElement | ListElement;
