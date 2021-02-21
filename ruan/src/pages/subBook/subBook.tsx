import * as React from 'react';
import ColumnOne from './SubBookComponents/ColumnOne/ColumnOne'
import ColumnTwo from './SubBookComponents/ColumnTwo/ColumnTwo'
import Header from './SubBookComponents/Header/Header'


export default function SubBook () {
  return (
    <div>
      <Header />
      <ColumnOne />
      <ColumnTwo />
    </div>
  );
}
