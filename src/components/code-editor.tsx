import "./code-editor.css";
import { useRef, useEffect, useState, useCallback } from "react";
import Editor, { OnMount, OnChange } from "@monaco-editor/react";
import prettier from "prettier";
import parser from "prettier/parser-babel";

window.Buffer = window.Buffer || require("buffer").Buffer;
window.process = {
  ...window.process,
};

console.log("process\n", window.process);

interface CodeEditorProps {
  initialValue: string;
  onChange(value: string): void;
}

// fancy dynamic loader attached to the @monaco-editor/react's onMount callback
const activateMonacoJSXHighlighter = async (monacoEditor: any, monaco: any) => {
  // monaco-jsx-highlighter depends on these in addition to Monaco and an instance of a Monaco Editor.

  const { default: traverse } = await import("@babel/traverse");
  // // console.log(traverse);

  const { parse } = await import("@babel/parser");
  // >>> The star of the show =P >>>
  const { default: MonacoJSXHighlighter, JSXTypes } = await import(
    "monaco-jsx-highlighter" // Note: there is a polyfilled version alongside the regular version.
  ); // For example, starting with 2.0.2, 2.0.2-polyfilled is also available.
  // Instantiate the highlighter
  const monacoJSXHighlighter = new MonacoJSXHighlighter(
    monaco, // references Range and other APIs
    parse, // obtains an AST, internally passes to parse options: {...options, sourceType: "module",plugins: ["jsx"],errorRecovery: true}
    traverse, // helps collecting the JSX expressions within the AST
    monacoEditor // highlights the content of that editor via decorations
  );
  console.log("monacoJSXHighlighter\n", monacoJSXHighlighter);
  // Start the JSX highlighting and get the dispose function
  // let disposeJSXHighlighting =
  monacoJSXHighlighter.highLightOnDidChangeModelContent();
  // Enhance monaco's editor.action.commentLine with JSX commenting and get its disposer
  // let disposeJSXCommenting = monacoJSXHighlighter.addJSXCommentCommand();
  monacoJSXHighlighter.addJSXCommentCommand();
  // <<< You are all set. >>>

  console.log("highlighter is activated");
  // // Optional: customize the color font in JSX texts (style class JSXElement.JSXText.tastyPizza from ./index.css)
  // JSXTypes.JSXText.options.inlineClassName = "JSXElement.JSXText.tastyPizza";
  // // more details here: https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.IModelDecorationOptions.html
  // console.log(
  //   "Customize each JSX expression type's options, they must match monaco.editor.IModelDecorationOptions:",
  //   JSXTypes
  // );

  // // This example's shorthands for toggling actions
  // const toggleJSXHighlighting = () => {
  //   if (disposeJSXHighlighting) {
  //     disposeJSXHighlighting();
  //     disposeJSXHighlighting = null;
  //     return false;
  //   }

  //   disposeJSXHighlighting =
  //     monacoJSXHighlighter.highlightOnDidChangeModelContent();
  //   return true;
  // };

  // const toggleJSXCommenting = () => {
  //   if (disposeJSXCommenting) {
  //     disposeJSXCommenting();
  //     disposeJSXCommenting = null;
  //     return false;
  //   }

  //   disposeJSXCommenting = monacoJSXHighlighter.addJSXCommentCommand();
  //   return true;
  // };

  // const isToggleJSXHighlightingOn = () => !!disposeJSXHighlighting;
  // const isToggleJSXCommentingOn = () => !!disposeJSXCommenting;

  // return {
  //   monacoJSXHighlighter,
  //   toggleJSXHighlighting,
  //   toggleJSXCommenting,
  //   isToggleJSXHighlightingOn,
  //   isToggleJSXCommentingOn,
  // };
};

const CodeEditor: React.FC<CodeEditorProps> = ({ onChange, initialValue }) => {
  const editorRef = useRef<any>();
  const monacoJSXHighlighterRef = useRef<any>(null);
  const [isEditorReady, setIsEditorReady] = useState(false);
  const [isJSXHighlightingOn, setIsJSXHighlightingOn] = useState(false);

  const handleEditorDidMount: OnMount = useCallback((monacoEditor, monaco) => {
    editorRef.current = monacoEditor;
    activateMonacoJSXHighlighter(monacoEditor, monaco)
      .then((monacoJSXHighlighterRefCurrent) => {
        monacoJSXHighlighterRef.current = monacoJSXHighlighterRefCurrent;
        // setIsEditorReady(!!monacoEditor);
        // setIsJSXHighlightingOn(
        //   monacoJSXHighlighterRefCurrent.isToggleJSXHighlightingOn()
        // );
        // setIsJSXCommentingOn(
        //   monacoJSXHighlighterRefCurrent.isToggleJSXCommentingOn()
        // );
      })
      .catch((e) => console.log(e));
  }, []);

  const handleEditorDidChange: OnChange = (value, event) => {
    if (value) {
      onChange(value);
    }
  };

  const onFormatClick = () => {
    // get current value from editor
    const unformatted = editorRef.current.getModel().getValue();

    // format that value
    const formatted = prettier
      .format(unformatted, {
        parser: "babel",
        plugins: [parser],
        useTabs: false,
        semi: true,
        singleQuote: true,
      })
      .replace(/\n$/, "");

    // set the formatted value back in the editor
    editorRef.current.setValue(formatted);
  };

  return (
    <div className="editor-wrapper">
      <button
        className="button button-format is-primary is-small"
        onClick={onFormatClick}
      >
        Format
      </button>
      <Editor
        onMount={handleEditorDidMount}
        onChange={handleEditorDidChange}
        value={initialValue}
        theme="vs-dark"
        language="javascript"
        height="500px"
        options={{
          wordWrap: "on",
          minimap: { enabled: false },
          showUnused: false,
          folding: false,
          lineNumbersMinChars: 3,
          fontSize: 16,
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 2,
        }}
      />
    </div>
  );
};

export default CodeEditor;
