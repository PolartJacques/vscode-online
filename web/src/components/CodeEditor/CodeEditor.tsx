import { FunctionComponent, useEffect } from 'react';
import './CodeEditor.css';
import { createMonacoEditor } from '../../service/Monaco.service';

const CodeEditor: FunctionComponent = () => {

  useEffect(() => {
    const newEditor = createMonacoEditor('editor');

    return () => {
      if (newEditor) newEditor.dispose();
    };
  }, []);

  return (
    <div className="editor-container">
      <div id="editor"></div>
    </div> 
  );
};

export default CodeEditor;