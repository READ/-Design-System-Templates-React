import { useState } from "react";

import React from 'react';

import AsyncSelect from 'react-select/async';
import { collectionsArray } from '../code/code';

/* const filterColors = (inputValue: string) => {
  return collections.filter((i) =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const loadOptions = (
  inputValue: string,
  callback: (options: Collection[]) => void
) => {
  setTimeout(() => {
    callback(filterColors(inputValue));
  }, 1000);
};

export default () => (
  <AsyncSelect cacheOptions loadOptions={loadOptions} defaultOptions />
); */


// 

export const UI = () => {

  const [count, setCount] = useState(5);

  const update = () => {
    window.parent.postMessage(
      {
        pluginMessage: {
          type: "update-collections",
          count,
        },
      },
      "*"
    );
  };
  const create = () => {
    window.parent.postMessage(
      {
        pluginMessage: {
          type: "create-rectangles",
          count,
        },
      },
      "*"
    );
  };
  const cancel = () => {
    window.parent.postMessage({ pluginMessage: { type: "cancel" } }, "*");
  };



  return (
    <section class="flex flex-col gap-4 justify-center h-full px-4">
      <header>
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path stroke="none" d="M0 0h24v24H0z"></path>
          <path d="M17 17v-4l-5 3-5-3v4l5 3zM17 8V4l-5 3-5-3v4l5 3z"></path>
        </svg>
        <h1>The Blender Array Modifier</h1>
      </header>
      <div class="input-wrapper">
        <label>How many rectangles?</label>

        <input
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
      </div>
      <footer class="flex gap-4 justify-center">
        <button class="primary" onClick={update}>
          Update
        </button>
        <button class="primary" onClick={create}>
          Create
        </button>
        <button class="destructive" onClick={cancel}>
          Cancel
        </button>
      </footer>
    </section>
  );
};
