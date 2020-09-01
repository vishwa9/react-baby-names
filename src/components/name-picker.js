import React from "react";
import NameList from './name-list';
import { useNames } from '../provider/names';

export default function NamePicker({
  searchValue,
  shortList,
  setShortList,
}) {
  const names = useNames();
  const filteredNames = names
    .filter((entry) =>
      entry.name.toLowerCase().includes(searchValue.toLowerCase())
    )
    .filter((entry) => !shortList.includes(entry.id));

  function addToshortList(id) {
    setShortList([...shortList, id]);
    console.log({ shortList });
  }
  return (
    <NameList nameList={filteredNames} onItemclick={addToshortList} />
  );
}
