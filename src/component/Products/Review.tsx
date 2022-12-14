import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Rating,
  TextareaAutosize,
} from "@mui/material";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { IFormPropsModal } from "../../model/props.model";
import {
  addReview,
  getDetailProduct,
} from "../../pages/Products/products.reducer";
import path from "../../router/path";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import ButtonCancel from "../../utils/ButtonCancel";
import ButtonSubmit from "../../utils/ButtonSubmit";
import { TOKEN_KEY } from "../../utils/contants";
import FieldError from "../../utils/FieldError";

type productId = string;
const Review = ({
  isOpen,
  setIsOpen,
  title,
}: Pick<IFormPropsModal, "isOpen" | "setIsOpen" | "title">) => {
  const [star, setStar] = useState<number | null>(0);
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
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) {
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
        const newPayload: any = res.payload;
        toast.success(newPayload.data.message);
        if (params.product_id) {
          dispatch(getDetailProduct(params.product_id));
        }
        handleClose();
        reset();
      }
    });
  };
  const handleClose = () => {
    setStar(null);
    setIsOpen(false);
    reset();
  };
  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement, Element>) => {
    setValue("comment", e.target.value.trim(), { shouldDirty: true });
  };
  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        fullWidth
      >
        <DialogTitle className="text-[30px] custom-font">{title}</DialogTitle>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <DialogContent id="alert-dialog-slide-description">
            <DialogContentText>
              <Controller
                control={control}
                name="comment"
                rules={{
                  required: { value: true, message: "Vui l??ng nh???p ????nh gi??" },
                }}
                render={({ field: { onChange, value } }) => (
                  <FieldError
                    hasError={!!errors && !!errors.comment}
                    message={errors.comment?.message}
                  >
                    <TextareaAutosize
                      onChange={onChange}
                      value={value}
                      className={`w-[552px] outline-none text-base border p-4 max-w-[552px] min-w-[552px] ${
                        !!errors && !!errors.comment ? "border-red-400" : ""
                      }`}
                      minRows={8}
                      placeholder="Nh???p ????nh gi??"
                      onBlur={handleBlur}
                    />
                  </FieldError>
                )}
              />
            </DialogContentText>
            <DialogContentText>
              <Rating
                name="simple-controlled"
                value={star}
                onChange={(event, newValue) => {
                  setStar(newValue);
                }}
              />
            </DialogContentText>
          </DialogContent>
        </form>
        <DialogActions>
          <ButtonSubmit
            loading={isLoading}
            type="submit"
            onClick={handleSubmit(handleSubmitForm)}
          >
            <span>G???i review</span>
          </ButtonSubmit>
          <ButtonCancel onClick={handleClose}>
            <span>H???y</span>
          </ButtonCancel>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Review;
