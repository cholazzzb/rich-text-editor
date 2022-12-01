import type { DocEditor, DocElement } from 'src/domains/doc/entity';

declare module 'slate' {
  interface DocTypes {
    Editor: DocEditor;
    Element: DocElement;
  }
}
