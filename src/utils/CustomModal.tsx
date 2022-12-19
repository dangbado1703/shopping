import React from "react";
import { useForm } from "react-hook-form";
import { Modal } from "@mui/material";
import { IFormPropsModal } from "../model/props.model";

const CustomModal = ({ isOpen, setIsOpen, title, footer, children, onSubmit, handleSubmit }: IFormPropsModal) => {
    return (
        <div>
            <Modal
                open={isOpen}
                onClose={() => setIsOpen(false)}
                classes={{ root: 'w-[500px] m-auto flex justify-center items-center' }}
            >
                <div className="text-white bg-slate-50 w-[500px] p-[20px] border-none">
                    <div className="mb-4">
                        <span className="text-black text-3xl font-bold">{title}</span>
                    </div>
                    <form onSubmit={onSubmit(handleSubmit)}>
                        {children}
                        <div className="flex justify-end">
                            {footer}
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    );
};

export default CustomModal;
