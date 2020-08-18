import { ID } from 'utils/types';

const keyExtractor = (item: any, key: string): string => item[key]?.toString();

export const produceKeyExtractor = (key: string) => (item: object) =>
  keyExtractor(item, key);

export const defaultKeyExtractor = (item: { id: ID }) => item?.id?.toString();
