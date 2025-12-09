import { type SchemaTypeDefinition } from "sanity";
import { categoryType } from "./categoryType";
import { blockContentType } from "./blockContentType";
import { productType } from "./productType";
import { orderType } from "./orderType";
import {  nursery } from "./nursery";
import { blogType } from "./blogType";
import { blogCategoryType } from "./blogCategoryType";
import { authorType } from "./authorType";
import { addressType } from "./addressType";
import { blockContent } from "./blockContent";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    categoryType,
    // blockContentType,
    productType,
    orderType,
    nursery,
    blogType,
    blogCategoryType,
    authorType,
    addressType,
    blockContent,
  ],
};
