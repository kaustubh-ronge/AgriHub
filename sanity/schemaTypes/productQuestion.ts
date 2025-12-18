// schemas/productQuestion.ts
export default {
  name: "productQuestion",
  title: "Product Questions",
  type: "document",
  fields: [
    { name: "product", type: "reference", to: [{ type: "product" }] },
    { name: "name", type: "string" },
    { name: "phone", type: "string" },
    { name: "question", type: "text" },
    { name: "createdAt", type: "datetime", initialValue: () => new Date().toISOString() }
  ]
};
