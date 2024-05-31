import React, { useEffect, useRef } from "react";
import EditorJS, { OutputData } from "@editorjs/editorjs";
import { EDITOR_TOOLS } from "../EditorTools";
import { Data } from "./notedata";

interface EditorProps {
  data: OutputData;
  onChange: (data: OutputData) => void;
  holder: string;
}

export default function Editor({ data, onChange, holder }: EditorProps) {
  const ref = useRef<EditorJS | null>(null);

  useEffect(() => {
    if (!ref.current) {
      const editor = new EditorJS({
        holder: holder,
        tools: EDITOR_TOOLS,
        data: Data,
        onChange: async (api, event) => {
          const savedData = await api.saver.save();
          onChange(savedData);
        },
      });
      ref.current = editor;
    }

    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
      }
    };
  }, []);

  return (
    <div
      id={holder}
      className="backdrop-blur-sm text-pretty text-left text-red-800 font-semibold rounded-lg grid-cols-1 pt-5 shadow-xl container w-30px h-45px"
    />
  );
}