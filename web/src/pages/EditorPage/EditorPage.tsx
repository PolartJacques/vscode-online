import { FunctionComponent } from 'react';
import CodeEditor from '../../components/CodeEditor';
import './EditorPage.css';

const EditorPage: FunctionComponent = () => {
  return (
    <div className='container'>
      <div className='sidebar'>sidebar</div>
      <div className='right-part'>
        <div className='editor'>
          <CodeEditor />
        </div>
        <div className='console'>console</div>
      </div>
    </div>
  );
};

export default EditorPage;