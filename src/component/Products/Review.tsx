import React from "react";
import { useForm } from "react-hook-form";
import { Modal } from "@mui/material";
import { IFormPropsModal } from "../../model/props.model";
import ButtonSubmit from "../../utils/ButtonSubmit";
import ButtonCancel from "../../utils/ButtonCancel";

const Review = ({ isOpen, setIsOpen }: IFormPropsModal) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const handleClose = () => {
    setIsOpen(false)
  }
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        classes={{ root: 'w-[500px] m-auto flex justify-center items-center' }}
      >
        <div className="text-white">
          <div>
            <span>Hello</span>
          </div>
          <div className="flex justify-end">
            <ButtonSubmit className="mr-4">
              <span>Đăng review</span>
            </ButtonSubmit>
            <ButtonCancel onClick={handleClose}>
              <span>Huỷ</span>
            </ButtonCancel>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Review;
