
import React from 'react'
import Editor from '../../components/3d-editor/Editor';
// import './builder-3D-page'; 


// --> First scene: a selection of the different building systems: 
// --> 

interface Props {}

function Builder3DPage(props: Props) {
    const {} = props

    React.useEffect(() => {
        const handleKeyDown = (ev: KeyboardEvent) => {
          if (ev.key === "i") {
              console.log('i button pressed')
            // setEditMode(EditMode.Insert);
          } else if (ev.key === "m" || ev.key === "Escape") {
            // setEditMode(EditMode.Move);
          } else if (ev.key === "r") {
            // setEditMode(EditMode.Resize);
          } else if (ev.key === "s") {
            // setEditMode(EditMode.Slice);
          } else if (ev.key === "z" && ev.metaKey && !ev.shiftKey) {
            // setHangars(undoable.undo);
          } else if (ev.key === "z" && ev.metaKey && ev.shiftKey) {
            // setHangars(undoable.redo);
          } else if (ev.key === "c") {
            // toggleClippingHeight();
          }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => {
          document.removeEventListener("keydown", handleKeyDown);
        };
      }, []);



    return (
        <div className='builder-3D-page'>
            <Editor/>
        

            <a href="https://github.com/hector-crean/io-ts-validation" className="top-left" children="Github" />
            <a href="https://www.notion.so/Housing-4-0-Energy-e83e0e7f455a4a419463619a29c4cf51" className="top-right" children="Notion Page" />
            <a href="https://www.opensystemslab.io/" className="bottom-left" children="+ Open Systems Lab " />
            {/* <a href="" className="bottom-right" children="" /> */}
            <span className="header"> H4.OE</span>



            <div className="action-btn" onClick={()=> {}} />

            
        </div>
    )
}

export default Builder3DPage
