import React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { IFormCart } from "../../model/cart.model";
import { useAppSelector } from "../../store/hooks";
import { Tooltip } from "@mui/joy";
import { Rating } from "@mui/material";
const CartTable = () => {
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
      headerName: "Số lượng hàng",
      width: 200,
      sortable: false,
      disableColumnMenu: true,
      align: "center",
      headerAlign: "center",
    },
  ];
  const { dataCart } = useAppSelector((state) => state.homeReducer);
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={dataCart}
        columns={columns}
        disableSelectionOnClick={true}
        density="comfortable"
      />
    </div>
  );
};

export default CartTable;
