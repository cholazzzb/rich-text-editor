import { FunctionComponent, PropsWithChildren } from 'react';
import { CardStyle } from 'src/domains/doc/entity';
import { mainStiches } from '../themes';

type CardProps = PropsWithChildren<{
  cardStyle: CardStyle;
}>;
export const Card: FunctionComponent<CardProps> = (props) => {
  return (
    <CardContainer
      css={{
        backgroundColor: (() => {
          switch (props.cardStyle) {
            case 'info':
              return '$blue100';
            case 'success':
              return '$green100';
            case 'warning':
              return '$yellow100';
            case 'danger':
              return '$red100';
          }
        })(),
      }}>
      {props.children}
    </CardContainer>
  );
};

const CardContainer = mainStiches.styled('p', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '150px',
  padding: '10px',
  margin: '20px',
  color: 'black',
});

export const CardHeader = mainStiches.styled('span', {
  fontSize: '22px',
  lineHeight: '22px',
  fontWeight: 700,
});

export const CardBody = mainStiches.styled('span', {
  marginBlockStart: '20px',
});

export const CardSpacer = mainStiches.styled('span', {
  height: '20px',
  width: '100%',
});
