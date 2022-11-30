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
