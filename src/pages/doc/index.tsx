import {
  faAlignCenter,
  faAlignJustify,
  faAlignLeft,
  faAlignRight,
  faBold,
  faCode,
  faDiamond,
  faItalic,
  faListDots,
  faListNumeric,
  faUnderline,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FunctionComponent, useCallback, useMemo } from 'react';
import { createEditor } from 'slate';
import { withHistory } from 'slate-history';
import {
  Editable,
  RenderElementProps,
  RenderLeafProps,
  Slate,
  withReact,
} from 'slate-react';

import { initialValue } from 'src/domains/doc/constants';
import { Spacer } from 'src/presentational/components';
import {
  DocElementRenderer,
  DocLeafRenderer,
} from 'src/presentational/doc/renderer';
import AlignTextButton from 'src/presentational/doc/toolbar/AlignTextButton';
import CardButton from 'src/presentational/doc/toolbar/CardButton';
import FontStyleButton from 'src/presentational/doc/toolbar/FontStyleButton';
import ListButton from 'src/presentational/doc/toolbar/ListButton';
import { Flex } from 'src/presentational/layout/common';
import { Layout } from 'src/presentational/layout/Layout';
import Toolbar from 'src/presentational/layout/Toolbar';

type DocProps = {};

const Doc: FunctionComponent<DocProps> = ({}) => {
  const renderElement = useCallback(
    (props: RenderElementProps) => <DocElementRenderer {...props} />,
    [],
  );
  const renderLeaf = useCallback(
    (props: RenderLeafProps) => <DocLeafRenderer {...props} />,
    [],
  );
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  return (
    <Layout>
      <Slate editor={editor} value={initialValue}>
        <Toolbar>
          <Flex>
            <FontStyleButton
              fontStyle="bold"
              icon={<FontAwesomeIcon icon={faBold} size="1x" />}
            />
            <FontStyleButton
              fontStyle="italic"
              icon={<FontAwesomeIcon icon={faItalic} size="1x" />}
            />
            <FontStyleButton
              fontStyle="underline"
              icon={<FontAwesomeIcon icon={faUnderline} size="1x" />}
            />
            <FontStyleButton
              fontStyle="code"
              icon={<FontAwesomeIcon icon={faCode} size="1x" />}
            />
            <Spacer />
            <ListButton
              list="numbered-list"
              icon={<FontAwesomeIcon icon={faListNumeric} size="2x" />}
            />
            <ListButton
              list="bulleted-list"
              icon={<FontAwesomeIcon icon={faListDots} size="2x" />}
            />
            <Spacer />
            <AlignTextButton
              alignText="left"
              icon={<FontAwesomeIcon icon={faAlignLeft} size="2x" />}
            />
            <AlignTextButton
              alignText="center"
              icon={<FontAwesomeIcon icon={faAlignCenter} size="2x" />}
            />
            <AlignTextButton
              alignText="right"
              icon={<FontAwesomeIcon icon={faAlignRight} size="2x" />}
            />
            <AlignTextButton
              alignText="justify"
              icon={<FontAwesomeIcon icon={faAlignJustify} size="2x" />}
            />
          </Flex>
          <Flex>
            <CardButton
              cardStyle="info"
              icon={<FontAwesomeIcon icon={faDiamond} />}
              label="Card"
            />
          </Flex>
        </Toolbar>
        <Editable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          placeholder="Enter some rich text???"
          spellCheck
          autoFocus
        />
      </Slate>
    </Layout>
  );
};

export default Doc;
