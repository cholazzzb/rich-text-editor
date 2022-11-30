import { BaseEditor, Editor, Element as SlateElement, Transforms } from 'slate';
import { LIST_TYPES, TEXT_ALIGN_TYPES } from './constants';
import { AlignText, List, ListElement, ParagraphElement } from './entity';

export const isAlignTextActive = (editor: BaseEditor, alignText: AlignText) => {
  const { selection } = editor;
  if (!selection) return false;

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: (node) => {
        if (!Editor.isEditor(node) && SlateElement.isElement(node)) {
          const docElement = node as unknown as Record<string, string>;
          return docElement['align'] === alignText;
        }
        return false;
      },
    }),
  );

  return !!match;
};

export const toggleAlignText = (editor: Editor, alignText: AlignText) => {
  const isActive = isAlignTextActive(editor, alignText);

  Transforms.unwrapNodes(editor, {
    match: (node) => {
      return (
        !Editor.isEditor(node) &&
        SlateElement.isElement(node) &&
        !TEXT_ALIGN_TYPES[alignText]
      );
    },
    split: true,
  });
  if (TEXT_ALIGN_TYPES[alignText]) {
    const newProperties: Partial<ParagraphElement> = {
      align: isActive ? undefined : alignText,
    };
    Transforms.setNodes<SlateElement>(editor, newProperties);
  }
};

export const isListActive = (editor: Editor, list: List) => {
  const { selection } = editor;
  if (!selection) return false;

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: (node) => {
        if (!Editor.isEditor(node) && SlateElement.isElement(node)) {
          const docElement = node as unknown as Record<string, string>;
          return docElement['type'] === list;
        }
        return false;
      },
    }),
  );

  return !!match;
};

export const toggleList = (editor: Editor, list: List) => {
  const isActive = isListActive(editor, list);

  Transforms.unwrapNodes(editor, {
    match: (node) => {
      if (!Editor.isEditor(node) && SlateElement.isElement(node)) {
        const docElement = node as unknown as Record<string, string>;
        return !!LIST_TYPES[docElement.type];
      }
      return false;
    },
    split: true,
  });
  if (LIST_TYPES[list]) {
    const newProperties: Partial<ListElement> = {
      type: isActive ? 'paragraph' : 'list-item',
    };
    Transforms.setNodes<SlateElement>(editor, newProperties);
  }

  if (!isActive) {
    const block = { type: list, children: [] };
    Transforms.wrapNodes(editor, block);
  }
};
