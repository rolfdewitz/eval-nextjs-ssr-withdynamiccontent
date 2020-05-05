import React, { FunctionComponent } from 'react';

interface ListComponentProps {
  list: string[];
}

const ListComponent: FunctionComponent<ListComponentProps> = ({ list }) => 
  <ul>
    { list.map((item, index) => (
    <li key={ index }>{item}</li>
    )) }
  </ul>

export default ListComponent;