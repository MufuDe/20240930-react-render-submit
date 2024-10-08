import { useState } from "react";

let initialArtists = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
];

export default function List() {
  const [artists, setArtists] = useState(initialArtists);

  return (
    <>
      <h1>振奋人心的雕塑家们：</h1>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>
            {artist.name}{" "}
            <button
              onClick={() => {
                // 对于 artists 数组中的每一个元素，filter 方法都会调用提供的回调函数，
                // 并将当前元素作为参数传递给这个回调函数。
                // 在这个例子中，这个参数被命名为 a。
                setArtists(artists.filter((a) => a.id !== artist.id));
              }}
            >
              删除
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
