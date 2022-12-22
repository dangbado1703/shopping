import { Rating, TextareaAutosize } from "@mui/material";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { IFormPropsModal } from "../../model/props.model";
import { addReview } from "../../pages/Products/products.reducer";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import ButtonCancel from "../../utils/ButtonCancel";
import ButtonSubmit from "../../utils/ButtonSubmit";
import CustomModal from "../../utils/CustomModal";
import FieldError from "../../utils/FieldError";
import ReactStars from "react-rating-stars-component";
import { USER_INFO } from "../../utils/contants";
import path from "../../router/path";

const Review = ({
  isOpen,
  setIsOpen,
  title,
}: Pick<IFormPropsModal, "isOpen" | "setIsOpen" | "title">) => {
  const [star, setStar] = useState(0);
  const navigate = useNavigate();
  const params = useParams<{ product_id: string | undefined }>();
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.productsReducer);
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
  } = useForm({
    defaultValues: {
      comment: "",
    },
  });
  const handleSubmitForm = (data: any) => {
    const userInfo = JSON.parse(localStorage.getItem(USER_INFO) as string);
    if (!userInfo) {
      navigate(path.login);
      return;
    }
    dispatch(
      addReview({
        comment: data.comment,
        product_id: params.product_id,
        star,
        user_id: 1,
      })
    ).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        handleClose();
        reset();
      }
    });
  };
  const handleClose = () => {
    setIsOpen(false);
    reset();
  };
  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement, Element>) => {
    setValue("comment", e.target.value.trim(), { shouldDirty: true });
  };
  const footer = (
    <div className="flex">
      <ButtonSubmit className="mr-4" type="submit">
        <span>Gửi review</span>
      </ButtonSubmit>
      <ButtonCancel onClick={handleClose}>
        <span>Huỷ</span>
      </ButtonCancel>
    </div>
  );
  return (
    <div>
      <CustomModal
        onSubmit={handleSubmit}
        handleSubmit={handleSubmitForm}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={title}
        footer={footer}
      >
        <>
          <Controller
            rules={{
              required: "Trường này là bắt buộc",
              maxLength: { value: 10, message: "Tối đa 10 ký tự" },
            }}
            control={control}
            name="comment"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <FieldError
                hasError={!!errors && !!errors.comment}
                message={errors?.comment?.message}
              >
                <TextareaAutosize
                  value={value}
                  onChange={onChange}
                  onBlur={handleBlur}
                  minRows={4}
                  className={
                    `${!!errors && !!errors.comment ? "border-red-400" : ""}` +
                    " text-black outline-none border p-3 w-full"
                  }
                />
              </FieldError>
            )}
          />
          <div>
            <Rating
              name="simple-controlled"
              value={star}
              onChange={(event, newValue) => {
                if (newValue) {
                  setStar(newValue);
                }
              }}
            />
          </div>
        </>
      </CustomModal>
    </div>
  );
};

export default Review;
