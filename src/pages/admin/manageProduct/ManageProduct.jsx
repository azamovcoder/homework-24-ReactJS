import "./manageProduct.scss";

import React, { memo } from "react";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "../../../context/api/peoductsApi";

const ManageProduct = () => {
  const { data } = useGetProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();

  let products = data?.map((product) => (
    <div className="manage__card" key={product.id}>
      <div className="manage__card__img">
        <img src={product.url} alt={product.title} />
      </div>
      <div className="manage__card__info">
        <h3>{product.title}</h3>
        <p>{product.category}</p>
        <p>${product.price}</p>
        <div className="manage__btns">
          <button onClick={() => deleteProduct(product.id)}>Delete</button>
        </div>
      </div>
    </div>
  ));

  return (
    <section className="manage">
      <div className="manage__cards">{products}</div>
    </section>
  );
};

export default memo(ManageProduct);
