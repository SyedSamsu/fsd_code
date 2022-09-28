import React, { useState } from 'react'
import CustomModal from '../modal/CustomModal';

const EditComponent = ({data}) => {

  const [modalOpen, setModalOpen] = useState(false);
  const [element, setElement] = useState();

  const onClickEditFunction = () => {
    setModalOpen(true);
    setElement("update");
  };


  return (
    <div><button type="button" onClick={() => onClickEditFunction()} className="btn btn-primary">Edit Profile</button>
    <CustomModal
        status={modalOpen}
        setModalOpen={setModalOpen}
        element={element}
        data={data}
      /></div>
  )
}

export default EditComponent