import { useRef } from "react";
import Editor from "@monaco-editor/react";

const TestCollection = () => {
  const editorRef = useRef(null);

  const initialValue = `{
      "_id" : 1,
      "description" : "Example document"
  }`;

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  const handleChange = () => {
    console.log(editorRef.current.getValue());
  };
  return (
    <div className="App">
      <Editor
        height="100vh"
        width="100vw"
        theme="vs-dark"
        onMount={handleEditorDidMount}
        onChange={handleChange}
        path="script.json"
        defaultLanguage="json"
        defaultValue={initialValue}
      />
    </div>
  );
};

export default TestCollection;
// import { CopyBlock, dracula } from 'react-code-blocks';
// const TestCollection=(props)=> {
//   return (
//     <CopyBlock
//       text={props.code}
//       language={props.language}
//       showLineNumbers={props.showLineNumbers}
//       wrapLines
//       theme={dracula}
//       codeBlock
      
//     />
//   );
// }
// export default TestCollection;
