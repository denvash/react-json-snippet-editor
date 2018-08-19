import React from 'react';
import AceEditor from 'react-ace';
import ace from 'brace';

import 'brace/mode/json';
import 'brace/theme/dreamweaver';
import 'brace/snippets/json';
import 'brace/ext/language_tools';

import snippet from '../lib/json-snippet';

// SUPER HACK FOR ADDING SNIPPETS
ace.define('ace/snippets/json', ['require', 'exports', 'module'], (e, t, n) => {
  // eslint-disable-next-line
  (t.snippetText = snippet), (t.scope = 'json');
});

const JsonEditor = ({ pipe , jsonTemplate}) => {
  return (
    <div>
      <AceEditor
        mode="json"
        theme="dreamweaver"
        name="json-editor"
        fontSize={14}
        width="760px"
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={jsonTemplate}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2
        }}
        editorProps={{ $blockScrolling: true }}
        onChange={ newPipe => pipe(newPipe) }
      />
    </div>
  );
};

export default JsonEditor;
