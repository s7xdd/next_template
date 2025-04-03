"use client";

import React, { useEffect } from "react";
import RenderCreateForm from "@/components/common/form/render-create-form";
import { useProducts } from "@/hooks/products/use-products";
import { ProductFormDefaultValues, ProductFormFields } from "@/utils/modules/form-structures/product-form-structure";
import { ProductValidationSchema } from "@/utils/validators/admin/ecommerce/product-schema";
import { useBrands } from "@/hooks/brand/use-brand";
import { useCategories } from "@/hooks/category/use-category";

const CreateProductPage = () => {
  const { triggerAllItemsList: triggerBrandsList, allItemsList: allBrands } = useBrands();
  const { triggerAllItemsList: triggerCategoriesList, allItemsList: allCategories } = useCategories();

  useEffect(() => {
    triggerBrandsList();
    triggerCategoriesList();
  }, []);

  const productForm = ProductFormFields({ brands: allBrands, categories: allCategories });

  return (
    <RenderCreateForm
      title="Create Product"
      dataHook={useProducts}
      formFields={productForm}
      validationSchema={ProductValidationSchema}
      defaultValues={ProductFormDefaultValues}
    />
  );
};

export default CreateProductPage;
