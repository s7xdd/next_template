"use client";

import React, { useEffect } from "react";
import RenderEditDataForm from "@/components/common/form/render-edit-form";
import { useProducts } from "@/hooks/products/use-products";
import { ProductFormDefaultValues, ProductFormFields } from "@/utils/modules/form-structures/product-form-structure";
import { ProductValidationSchema } from "@/utils/validators/admin/ecommerce/product-schema";
import { useBrands } from "@/hooks/brand/use-brand";

const ProductDetailPage = () => {
  const { triggerAllItemsList: triggerBrandsList, allItemsList: allBrands } = useBrands();
  const { triggerAllItemsList: triggerCategoriesList, allItemsList: allCategories } = useBrands();

  useEffect(() => {
    triggerBrandsList();
    triggerCategoriesList();
  }, []);

  const productForm = ProductFormFields({ brands: allBrands, categories: allCategories });
  
  return (
    <RenderEditDataForm
      title="Product Details"
      editTitle="Edit Product"
      dataHook={useProducts}
      formFields={productForm}
      validationSchema={ProductValidationSchema}
      defaultValues={ProductFormDefaultValues}
    />
  );
};

export default ProductDetailPage;
