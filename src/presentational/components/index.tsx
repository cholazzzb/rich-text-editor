import {
  forwardRef,
  FunctionComponent,
  MouseEventHandler,
  PropsWithChildren,
} from 'react';
import ReactDOM from 'react-dom';
import { Flex } from '../layout/common';
import { mainStiches } from '../themes';

export const Icon = mainStiches.styled('span', {
  height: '10px',
  width: '10px',
});

export const Button = mainStiches.styled('button', {
  border: '1px solid',
  borderColor: '$secondary100',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '$primary100',
  color: 'white',
  height: '40px',
  width: '40px',
});

export const Spacer = mainStiches.styled('div', {
  width: '5px',
  height: '100%',
});

export const TextParagraph = mainStiches.styled('p', {});

export const Portal: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return typeof document === 'object'
    ? ReactDOM.createPortal(children, document.body)
    : null;
};

type TooltipProps = PropsWithChildren<{
  onMouseDown: MouseEventHandler<HTMLDivElement>;
}>;

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  (props, ref) => {
    return (
      <Flex
        {...props}
        ref={ref}
        css={{
          width: '120px',
          backgroundColor: 'black',
          color: '#fff',
          textAlign: 'center',
          borderRadius: '6px',
          padding: '5px 0',
          position: 'absolute',
          zIndex: 1,
        }}>
        {props.children}
      </Flex>
    );
  },
);
