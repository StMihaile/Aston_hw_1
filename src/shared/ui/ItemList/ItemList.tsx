import React from 'react';

export interface ItemListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

export function ItemList<T>({ items, renderItem }: ItemListProps<T>): React.ReactElement {
  return (
    <div>
      {items.map(renderItem)}
    </div>
  );
}