import { useState } from "react";

let nextId = 0;

export default function List() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([]);

  return (
    <>
      <h1>振奋人心的雕塑家们：</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          setArtists(
            // 替换 state
            [
              // 是通过传入一个新数组实现的
              ...artists, // 新数组包含原数组的所有元素
              { id: nextId++, name: name }, // 并在末尾添加了一个新的元素
            ]
          );
        }}
      >
        添加
      </button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}
