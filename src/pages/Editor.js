import React, {useRef, useEffect,useState} from 'react';
import queryString from 'query-string';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

const EditorPage = ({location, match}) => {
    const query = queryString.parse(location.search);
    const [text,setText] = useState();
    console.log(query);
    const editorRef = useRef();

    useEffect(() => {
      if (editorRef.current) {
        editorRef.current.getInstance().removeHook("addImageBlobHook");
        editorRef.current
          .getInstance()
          .addHook("addImageBlobHook", (blob, callback) => {
            (async () => {
              let formData = new FormData();
              formData.append("file", blob);
  
            //   axios.defaults.withCredentials = true;
            //   const { data: url } = await axios.post(
            //     `${backUrl}image.do`,
            //     formData,
            //     {
            //       header: { "content-type": "multipart/formdata" },
            //     }
            //   );
            //   callback(url, "alt text");
            })();
  
            return false;
          });
      }
  
      return () => {};
    }, [editorRef]);

    return (
        <div>
            <h2>Editor</h2>    
            <Editor
                initialValue="hello react editor world!"
                previewStyle="vertical"
                height="600px"
                initialEditType="wysiwyg"
                useCommandShortcut={true}
                onChange={() => {
                  const innerTxt = editorRef.current.getInstance().getMarkdown();
                  setText(innerTxt);
                }}
                ref={editorRef}
            
            />
        </div>
    );
};

export default EditorPage;