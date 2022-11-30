import { Descendant } from 'slate';
import { DocElement } from './entity';

export const LIST_TYPES: Record<string, true> = {
  'numbered-list': true,
  'bulleted-list': true,
};

export const TEXT_ALIGN_TYPES: Record<string, true> = {
  left: true,
  center: true,
  right: true,
  justify: true,
};

export const initialValue: Array<Descendant | DocElement> = [
  {
    type: 'paragraph',
    children: [{ text: 'Start typing here!' }],
  },
];
