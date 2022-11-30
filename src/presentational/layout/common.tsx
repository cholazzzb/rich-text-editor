import { mainStiches } from '../themes';

export const Flex = mainStiches.styled('div', {
  display: 'flex',
});

export const Center = mainStiches.styled(Flex, {
  justifyContent: 'center',
  alignItems: 'center',
});
