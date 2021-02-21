import * as React from 'react';
import ColumnOne from './HomeComponents/ColumnOne/ColumnOne';
import ColumnTwo from './HomeComponents/ColumnTwo/ColumnTwo';
import Header from './HomeComponents/Header/Header';

export interface  BookOneProps {
}

export default function BookOne (props:  BookOneProps) {
  return (
    <div>
      <Header />
      <ColumnOne />
      <ColumnTwo />
    </div>
  );
}

