import React, {useState, useEffect, useRef} from 'react';
import { EditorState, ContentState, convertToRaw, convertFromHTML } from 'draft-js';
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from 'draftjs-to-html';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import '../../styles/editorStyle.css';



export const WysiwygEditor = ({register}:any) => {
    const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty());
    const [content, setContent] = useState('');

    const ref = useRef(register)
    // if (props.content) {
    //     const content = convertFromHTML(props.content);
    //     setEditorState(EditorState.createWithContent(
    //         ContentState.createFromBlockArray(content.contentBlocks, content.entityMap)
    //     ))
    // }

    // const uploadImageCallBack = (file:any) => {
    //     // long story short, every time we upload an image, we
    //     // need to save it to the state so we can get it's data
    //     // later when we decide what to do with it.
        
    //    // Make sure you have a uploadImages: [] as your default state
    //     let uploadedImages = this.state.uploadedImages;
    
    //     const imageObject = {
    //       file: file,
    //       localSrc: URL.createObjectURL(file),
    //     }
    
    //     uploadedImages.push(imageObject);
    
    //     this.setState(uploadedImages: uploadedImages)
        
    //     // We need to return a promise with the image src
    //     // the img src we will use here will be what's needed
    //     // to preview it in the browser. This will be different than what
    //     // we will see in the index.md file we generate.
    //     return new Promise(
    //       (resolve, reject) => {
    //         resolve({ data: { link: imageObject.localSrc } });
    //       }
    //     );
    //   }
    
    return (
        <div>
        <input name="notice" ref={ref} value={content} onChange={}/>
        <Editor
            placeholder="본문을 적어주세요"
            editorState={editorState}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class"
            onEditorStateChange={newState => {
                setEditorState(newState);
                setContent(
                    draftToHtml(
                        convertToRaw(
                            newState.getCurrentContent()
                        )
                    )
                );
                ref.current.focus();
            }}
            toolbar={{
                options: [
                    'inline', 'blockType', 'fontSize', 'list', 'textAlign',
                    'history', 'embedded', 'emoji', 'image'],
                inline: { 
                    inDropdown: false 
                },
                list: { 
                    inDropdown: true 
                },
                textAlign: { 
                    inDropdown: true 
                },
                link: { 
                    inDropdown: true 
                },
                history: { 
                    inDropdown: true 
                },
                image: {
                    uploadEnabled:true,
                    previewImage: true,
                    uploadCallback: {},
                    alt: { present: true, mandatory: false }
                },
            }}
        />
        </div>
    )
}