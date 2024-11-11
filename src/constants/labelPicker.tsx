import { RecordCircle, Music, Apple, HeartCircle } from 'iconsax-react-native';

export interface TypeFilterCategories {
  id: string;
  title: string;
  icon: React.ReactNode;
  backgroundColor: string;
}

export const filterCategories: TypeFilterCategories[] = [
  {
    title: 'Sport',
    icon: <RecordCircle size="20" color="white" />,
    id: '1',
    backgroundColor: '#F0635A',
  },
  {
    title: 'Music',
    icon: <Music size="20" color="white" />,
    id: '2',
    backgroundColor: '#F59762',
  },
  {
    title: 'Food',
    icon: <Apple size="20" color="white" />,
    id: '3',
    backgroundColor: '#29D697',
  },
  {
    title: 'Art',
    icon: <HeartCircle size="20" color="white" />,
    id: '4',
    backgroundColor: '#46CDFB',
  },
];
