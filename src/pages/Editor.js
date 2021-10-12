import React from 'react';
import queryString from 'query-string';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
const EditorPage = ({location, match}) => {
    const query = queryString.parse(location.search);

    return (
        <div>
            <h2>Editor</h2>
            {/* ?detail=true 로 들어올때만 출력된다*/}
            <Editor
                initialValue="hello react editor world!"
                previewStyle="vertical"
                height="600px"
                initialEditType="markdown"
                useCommandShortcut={true}
            />
        </div>
    );
};

export default EditorPage;