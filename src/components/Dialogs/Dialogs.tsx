import firebase from 'firebase';
import React, { useEffect, useState } from 'react';

interface DialogsProps {
  name: string;
  value: string;
  id: number;
}

export const Dialogs: React.FunctionComponent<DialogsProps> = ({ name, value, id }) => {
  return (
    <div key={id}>
      <h3>{name}</h3>
      <p>{value}</p>
    </div>
  );
};
