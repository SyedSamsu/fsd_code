import React from "react";
import Modal from "react-modal";
import FormComponent from "../components/FormComponent";

const CustomModal = (props) => {
  const TYPE = props.element;
  return (
    <React.Fragment>
      <Modal isOpen={props.status} ariaHideApp={false}>
        <div className="titleCloseBtn ">
          <button
            className="btn btn-outline-danger"
            onClick={() => {
              props.setModalOpen(false);
            }}
          >
            {" "}
            X
          </button>
        </div>
        <div>
          {(() => {
            switch (TYPE) {
              case "update":
                return (
                  <FormComponent
                    setModalOpen={props.setModalOpen}
                    data={props.data}
                  />
                );
              default:
                break;
            }
          })()}
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default CustomModal;
