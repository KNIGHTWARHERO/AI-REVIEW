import Editor from "@monaco-editor/react";

export default function EditorPanel({
  language,
  setLanguage,
  code,
  setCode,
  dark
}) {
  return (
    <div className="flex flex-col h-full border-r border-gray-200 dark:border-gray-800">
      <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-800">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-transparent outline-none text-sm"
        >
          <option value="java">Java</option>
          <option value="python">Python</option>
          <option value="javascript">JavaScript</option>
        </select>
      </div>

      <Editor
        height="100%"
        language={language}
        value={code}
        onChange={(value) => setCode(value)}
        theme={dark ? "vs-dark" : "light"}
        options={{
          fontSize: 14,
          minimap: { enabled: false },
          smoothScrolling: true
        }}
      />
    </div>
  );
}