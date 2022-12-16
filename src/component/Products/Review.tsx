import React from "react";
import { useForm } from "react-hook-form";
import { Modal } from "@mui/material";
import { IFormPropsModal } from "../../model/props.model";

const Review = ({ isOpen, setIsOpen }: IFormPropsModal) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>hello</div>
      </Modal>
    </div>
  );
};

export default Review;
