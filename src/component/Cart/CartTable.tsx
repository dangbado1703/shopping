import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { IFormCart } from "../../model/cart.model";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Tooltip } from "@mui/joy";
import { Rating } from "@mui/material";
import { viewCart } from "../../pages/Home/home.reducer";
const CartTable = () => {
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const dispatch = useAppDispatch();
  const columns: GridColDef<IFormCart>[] = [
    {
      field: "no",
      headerName: "STT",
      width: 50,
      sortable: false,
      align: "center",
      disableColumnMenu: true,
    },
    {
      field: "product_name",
      headerName: "Tên sản phẩm",
      width: 200,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "product_code",
      headerName: "Mã sản phẩm",
      width: 200,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "image",
      headerName: "Hình ảnh",
      width: 200,
      sortable: false,
      disableColumnMenu: true,
      renderCell({ value }) {
        return (
          <Tooltip
            placement="right"
            title={
              <div className="p-2 w-60 h-60">
                <img src={value} className="h-full w-full" />;
              </div>
            }
          >
            <div className="p-2 w-full h-full">
              <img src={value} className="h-full w-full" />;
            </div>
          </Tooltip>
        );
      },
    },
    {
      field: "product_price",
      headerName: "Giá sản phẩm",
      width: 200,
      sortable: false,
      disableColumnMenu: true,
      align: "center",
      headerAlign: "center",
      valueFormatter({ value }) {
        if (!value) return "";
        return `$${value}`;
      },
    },
    {
      field: "star",
      headerName: "Đánh giá",
      width: 200,
      sortable: false,
      disableColumnMenu: true,
      align: "center",
      headerAlign: "center",
      renderCell({ value }) {
        return <Rating value={value} readOnly />;
      },
    },
    {
      field: "stock",
      headerName: "Số lượng hàng còn",
      width: 200,
      sortable: false,
      disableColumnMenu: true,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "total",
      headerName: "Số lượng đơn đặt hàng",
      width: 200,
      sortable: false,
      disableColumnMenu: true,
      align: "center",
      headerAlign: "center",
    },
  ];
  useEffect(() => {
    dispatch(viewCart({ page: page + 1, size }));
  }, [page, size]);
  const { dataCart, isLoading, totalCart } = useAppSelector(
    (state) => state.homeReducer
  );
  return (
    <div className="w-full h-[600px]">
      <DataGrid
        rows={dataCart}
        columns={columns}
        disableSelectionOnClick
        loading={isLoading}
        onPageChange={(page) => {
          setPage(page);
        }}
        onPageSizeChange={(pageSize) => {
          setSize(pageSize);
        }}
        page={page}
        pageSize={size}
        autoHeight
        paginationMode="server"
        pagination
        rowCount={totalCart}
        rowsPerPageOptions={[5, 10, 15]}
      />
    </div>
  );
};

export default CartTable;
