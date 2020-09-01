import React from 'react';

export default function NameList({nameList, onItemclick}) {
    return (
        <ul>
      {nameList.map((entry) => (
        <li className={entry.sex} key={entry.id}>
          <button onClick={() => onItemclick(entry.id)}>{entry.name}</button>
        </li>
      ))}
    </ul>
    );
}