import React from 'react';
import Feather from '@expo/vector-icons/build/Feather';

export function TabBarIcon(props: {
  name: React.ComponentProps<typeof Feather>['name'];
  color: string;
}) {
  return <Feather size={25} {...props} />;
}
