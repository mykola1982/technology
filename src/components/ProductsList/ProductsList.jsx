import { ProductItem } from "../ProductItem";

import List from "@mui/material/List";

export const ProductsList = ({ products, onSelectProduct }) => {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        position: "relative",
        overflow: "auto",
        maxHeight: "75vh",
        "& ul": { padding: 0 },
      }}
    >
      {products.map(({ id, name, number }) => {
        return (
          <ProductItem
            key={id}
            id={id}
            name={name}
            number={number}
            onSelectProduct={onSelectProduct}
          />
        );
      })}
    </List>
  );
};
