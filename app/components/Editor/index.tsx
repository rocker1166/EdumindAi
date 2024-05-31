import React, { useEffect, useRef } from "react";
import EditorJS, { OutputData } from "@editorjs/editorjs";
import { EDITOR_TOOLS } from "../EditorTools";
import { Data } from "./notedata";
export default function Editor({ data, onChange, holder }) {
  //add a reference to editor
  const ref = useRef();

  //initialize editorjs
  useEffect(() => {
    //initialize editor if we don't have a reference
    if (!ref.current) {
      const editor = new EditorJS({
        holder: holder,
        tools: EDITOR_TOOLS,
        data: Data,
        async onChange(api, event) {
          const data = await api.saver.save();
          onChange(data);
        },
      });
      ref.current = editor;
    }

    //add a return function handle cleanup
    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
      }
    };
  }, []);


  return <div id={holder} className=" backdrop-blur-sm  text-pretty text-left  text-red-800  font-semibold rounded-lg grid-cols-1 pt-5 shadow-xl container   w-30px h-45px" />;
};
