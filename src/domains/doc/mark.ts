import { BaseEditor, Editor } from 'slate';
import { Format, Marks } from './entity';

export const isMarkActive = (editor: BaseEditor, format: Format) => {
  const marks = Editor.marks(editor) as Marks;

  return !!(marks && marks[format]);
};

export const toggleMark = (editor: BaseEditor, format: Format) => {
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};
