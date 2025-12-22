// import { Product } from "@/sanity.types"; 
// import React from "react";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "./ui/accordion";
// import { PortableText } from "@portabletext/react";

// // ✅ TYPE FIX: Removed 'any', added specific types allowed for rendering
// const SpecRow = ({ label, value }: { label: string; value: string | number | boolean | null | undefined }) => {
//   if (!value) return null; 
//   return (
//     <p className="flex items-center justify-between py-1.5 border-b border-gray-100">
//       <span className="text-gray-600">{label}:</span>
//       <span className="font-semibold tracking-wide text-right">{value.toString()}</span>
//     </p>
//   );
// };

// // --- Helper Components for each Product Type ---

// const SeedSpecs = ({ product }: { product: Product }) => (
//   <>
//     <SpecRow label="Seed Type" value={product.seedType} />
//     <SpecRow label="Crop Type" value={product.cropType} />
//     <SpecRow
//       label="Germination Rate"
//       value={product.germinationRate ? `${product.germinationRate}%` : null}
//     />
//     <SpecRow
//       label="Purity"
//       value={product.purity ? `${product.purity}%` : null}
//     />
//     <SpecRow label="Seed Treatment" value={product.seedTreatment} />
//     <SpecRow label="Sowing Season" value={product.sowingSeason?.join(", ")} />
//     <SpecRow label="Days to Harvest" value={product.timeToHarvest} />
//     <SpecRow
//       label="Disease Resistance"
//       value={product.diseaseResistance?.join(", ")}
//     />
//   </>
// );

// const FertilizerSpecs = ({ product }: { product: Product }) => (
//   <>
//     <SpecRow label="Form" value={product.fertilizerForm} />
//     <SpecRow label="NPK Composition" value={product.nutrientComposition} />
//     <SpecRow
//       label="Micronutrients"
//       value={product.micronutrients?.join(", ")}
//     />
//     <SpecRow
//       label="Application"
//       value={product.applicationMethod?.join(", ")}
//     />
//     <SpecRow label="Release Type" value={product.releaseType} />
//     <SpecRow
//       label="Organic"
//       value={
//         product.isOrganic
//           ? `Yes (${product.certificationBody || "Certified"})`
//           : "No"
//       }
//     />
//   </>
// );

// const ChemicalSpecs = ({ product }: { product: Product }) => (
//   <>
//     <SpecRow label="Active Ingredient" value={product.chemicalName} />
//     <SpecRow label="Target" value={product.targetPestsOrWeeds?.join(", ")} />
//     <SpecRow label="Mode of Action" value={product.modeOfAction} />
//     <SpecRow label="Dosage" value={product.dilutionRatio} />
//     <SpecRow label="Waiting Period" value={product.waitingPeriod} />
//     <SpecRow label="Toxicity" value={product.toxicityClass} />
//   </>
// );

// const MachinerySpecs = ({ product }: { product: Product }) => (
//   <>
//     <SpecRow label="Power Source" value={product.powerSource} />
//     <SpecRow label="Horsepower (HP)" value={product.horsepower} />
//     <SpecRow label="Engine Specs" value={product.engineSpecs} />
//     <SpecRow label="Warranty" value={product.warrantyInfo} />
//     <SpecRow label="Service Available" value={product.afterSalesService ? "Yes" : "No"} />
//   </>
// );

// const FeedSpecs = ({ product }: { product: Product }) => (
//   <>
//     <SpecRow label="Target Animal" value={product.animalType?.join(", ")} />
//     <SpecRow label="Feed Type" value={product.feedType} />
//     <SpecRow label="Storage" value={product.storageInstructions} />
//     {/* Special handling for block content */}
//     {product.nutritionalAnalysis && (
//        <div className="py-2">
//          <span className="text-gray-600">Nutritional Analysis:</span>
//          <div className="prose prose-sm max-w-none text-right font-semibold tracking-wide">
//            <PortableText value={product.nutritionalAnalysis} />
//          </div>
//        </div>
//     )}
//   </>
// );


// // --- The Main Component ---

// const ProductCharacteristics = ({
//   product,
// }: {
//   product: Product | null | undefined;
// }) => {
//   if (!product) return null;

//   const renderVariantSpecs = () => {
//     switch (product.productVariant) {
//       case "seeds":
//         return <SeedSpecs product={product} />;
//       case "fertilizer":
//         return <FertilizerSpecs product={product} />;
//       case "pesticide":
//       case "herbicide":
//       case "fungicide":
//         return <ChemicalSpecs product={product} />;
//       case "machinery":
//         return <MachinerySpecs product={product} />;
//       case "feed":
//         return <FeedSpecs product={product} />;
//       default:
//         return (
//           <p className="py-2 text-sm text-gray-500">
//             This product has no additional specifications.
//           </p>
//         );
//     }
//   };

//   const variantLabel = product.productVariant 
//     ? product.productVariant.charAt(0).toUpperCase() + product.productVariant.slice(1)
//     : "Product";

//   return (
//     <Accordion type="single" collapsible defaultValue="item-1">
//       <AccordionItem value="item-1">
//         <AccordionTrigger>Product Characteristics</AccordionTrigger>
//         <AccordionContent className="space-y-3 space-x-3">
//           {/* General Specs (for all products) */}
//           {/* @ts-expect-error - nursery is expanded in GROQ query but typed as reference in schema */}
//           <SpecRow label="Nursery" value={product.nursery?.title} />
//           <SpecRow label="Unit" value={product.unit} />
//           <SpecRow
//             label="Stock"
//             value={(product.stock as number) > 0 ? `${product.stock} units` : "Out of Stock"}
//           />
//           <SpecRow label="Product Type" value={variantLabel} />
//           <SpecRow label="SKU" value={product.sku} />

//           <div className="pt-4 mt-4 border-t border-gray-200">
//             <h4 className="text-sm font-bold text-black mb-2">
//               {variantLabel} Specifications
//             </h4>
//             {renderVariantSpecs()}
//           </div>
//         </AccordionContent>
//       </AccordionItem>
//     </Accordion>
//   );
// };

// export default ProductCharacteristics;













// "use client";

// import { Product } from "@/sanity.types";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "./ui/accordion";
// import { Leaf, FlaskConical, CheckCircle, Info, Target, Calendar } from "lucide-react";

// interface ExpandedProduct extends Product {
//   plantBreedData?: any;
//   fertilizerFormulaData?: any;
//   trayPlantCount?: number;
//   trayPrice?: number;
// }

// const SpecRow = ({ label, value, icon: Icon }: { label: string; value: any, icon?: any }) => {
//   if (!value) return null;
//   return (
//     <div className="flex justify-between items-start py-3 border-b border-gray-100 last:border-0">
//       <span className="text-gray-500 font-medium text-sm flex items-center gap-2">
//         {Icon && <Icon size={14} className="text-gray-400" />} {label}
//       </span>
//       <span className="text-gray-900 font-bold text-sm text-right max-w-[60%]">{value.toString()}</span>
//     </div>
//   );
// };

// const PlantCharacteristics = ({ product }: { product: ExpandedProduct }) => {
//   const breed = product.plantBreedData;
//   if (!breed) return <div className="p-4 text-sm text-gray-500">No variety details found. Please select a breed in Sanity.</div>;

//   return (
//     <div className="space-y-4">
//       <div className="bg-green-50 p-4 rounded-xl border border-green-100">
//         <h4 className="flex items-center gap-2 text-green-800 font-black text-base mb-1">
//           <Leaf size={18} /> {breed.breedName} ({breed.varietyType})
//         </h4>
//         <p className="text-sm text-green-700 leading-relaxed">{breed.description}</p>
//       </div>

//       <div className="grid grid-cols-1 gap-1">
//         <SpecRow label="Parent Plant" value={breed.plantName} />
//         <SpecRow label="Seed Source" value={breed.seedUsed} icon={Target} />
//         <SpecRow label="Growth Habit" value={breed.growthHabit} icon={Info} />
        
//         <div className="bg-gray-50 p-4 rounded-lg mt-2 border border-gray-200">
//           <h5 className="text-xs font-black uppercase text-gray-400 mb-3">Commercial Specs (Per Tray)</h5>
//           <SpecRow label="Plants per Tray" value={product.trayPlantCount} />
//           {product.trayPrice && product.trayPlantCount && (
//             <SpecRow 
//               label="Price per Seedling" 
//               value={`₹${(product.trayPrice / product.trayPlantCount).toFixed(2)}`} 
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// const FertilizerCharacteristics = ({ product }: { product: ExpandedProduct }) => {
//   const formula = product.fertilizerFormulaData;
//   if (!formula) return <div className="p-4 text-sm text-gray-500">No formula details found.</div>;

//   return (
//     <div className="space-y-5">
//       <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
//         <h4 className="flex items-center gap-2 text-blue-800 font-black text-base mb-1">
//           <FlaskConical size={18} /> Grade: {formula.formulaName}
//         </h4>
//         <p className="text-sm text-blue-700">{formula.description}</p>
//       </div>

//       <div className="space-y-4">
//         <div>
//           <h5 className="text-xs font-black uppercase text-gray-400 mb-2">Technical Details</h5>
//           <SpecRow label="NPK Composition" value={formula.npk} icon={Info} />
//           <SpecRow label="Application Timing" value={formula.whenToUse} icon={Calendar} />
//           <SpecRow label="Release" value={formula.releaseType} />
//         </div>

//         {formula.howToUse && (
//           <div className="p-4 bg-orange-50/50 rounded-xl border border-orange-100">
//             <h5 className="text-xs font-black uppercase text-orange-600 mb-2 flex items-center gap-2">
//               <Info size={14}/> Usage Instructions
//             </h5>
//             <p className="text-sm text-gray-700 leading-relaxed italic">"{formula.howToUse}"</p>
//           </div>
//         )}

//         {formula.benefits && (
//           <div>
//              <h5 className="text-xs font-black uppercase text-gray-400 mb-3">Expected Benefits</h5>
//              <div className="grid grid-cols-1 gap-2">
//                 {formula.benefits.map((b: string, i: number) => (
//                   <div key={i} className="flex items-center gap-2 text-sm text-gray-700 bg-white p-2 rounded border border-gray-100">
//                     <CheckCircle size={16} className="text-green-500" /> {b}
//                   </div>
//                 ))}
//              </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// const ProductCharacteristics = ({ product }: { product: Product }) => {
//   if (!product) return null;
//   const variant = product.productVariant as string;

//   return (
//     <Accordion type="single" collapsible defaultValue="specs" className="w-full">
//       <AccordionItem value="specs" className="border rounded-xl bg-white overflow-hidden">
//         <AccordionTrigger className="px-5 py-4 hover:no-underline hover:bg-gray-50 transition-all">
//           <div className="flex items-center gap-3">
//              <div className="p-2 bg-green-100 rounded-lg text-green-700">
//                 {variant === "plants" ? <Leaf size={20}/> : <FlaskConical size={20}/>}
//              </div>
//              <div className="text-left">
//                 <span className="block font-black text-gray-900 uppercase tracking-tighter text-lg">Full Specifications</span>
//                 <span className="block text-xs text-gray-400 font-medium">Detailed variety & usage info</span>
//              </div>
//           </div>
//         </AccordionTrigger>
//         <AccordionContent className="px-5 pb-6 pt-4 border-t border-gray-100">
//           {variant === "plants" ? (
//             <PlantCharacteristics product={product as ExpandedProduct} />
//           ) : variant === "fertilizer" ? (
//             <FertilizerCharacteristics product={product as ExpandedProduct} />
//           ) : (
//             <SpecRow label="Category" value={variant.toUpperCase()} />
//           )}
//         </AccordionContent>
//       </AccordionItem>
//     </Accordion>
//   );
// };

// export default ProductCharacteristics;










// "use client";

// import { Product } from "@/sanity.types";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "./ui/accordion";
// import { Leaf, FlaskConical, CheckCircle, Info, Target, Calendar, Package, Weight } from "lucide-react";

// interface ExpandedProduct extends Product {
//   plantBreedData?: any;
//   fertilizerFormulaData?: any;
//   trayPlantCount?: number;
//   trayPrice?: number;
//   daysInNursery?: number;
//   transplantDeadline?: number;
// }

// const SpecRow = ({ label, value, icon: Icon }: { label: string; value: any, icon?: any }) => {
//   if (value === null || value === undefined || value === "") return null;
//   return (
//     <div className="flex justify-between items-start py-3 border-b border-gray-100 last:border-0">
//       <span className="text-gray-500 font-medium text-sm flex items-center gap-2">
//         {Icon && <Icon size={14} className="text-gray-400" />} {label}
//       </span>
//       <span className="text-gray-900 font-bold text-sm text-right max-w-[60%]">{value.toString()}</span>
//     </div>
//   );
// };

// const PlantCharacteristics = ({ product }: { product: ExpandedProduct }) => {
//   const breed = product.plantBreedData;
//   const perPlantPrice = product.trayPrice && product.trayPlantCount 
//     ? (product.trayPrice / product.trayPlantCount).toFixed(2) 
//     : null;

//   return (
//     <div className="space-y-6">
//       {/* 1. Variety Info */}
//       <div className="bg-green-50 p-4 rounded-xl border border-green-100">
//         <h4 className="flex items-center gap-2 text-green-800 font-black text-base mb-1">
//           <Leaf size={18} /> Variety: {breed?.breedName || "Standard Variety"}
//         </h4>
//         <p className="text-sm text-green-700 leading-relaxed">{breed?.description || product.shortDescription}</p>
//       </div>

//       {/* 2. Professional Growth Specs */}
//       <div>
//         <h5 className="text-xs font-black uppercase text-gray-400 mb-2 tracking-widest">Nursery Growth Status</h5>
//         <div className="grid grid-cols-1 border rounded-xl px-4 bg-white shadow-sm">
//           <SpecRow label="Age of Plant" value={product.daysInNursery ? `${product.daysInNursery} Days` : "Ready to Plant"} icon={Calendar} />
//           <SpecRow label="Transplant Deadline" value={product.transplantDeadline ? `Best within ${product.transplantDeadline} days` : null} icon={Info} />
//           <SpecRow label="Seed Source" value={breed?.seedUsed} icon={Target} />
//           <SpecRow label="Variety Type" value={breed?.varietyType?.toUpperCase()} />
//         </div>
//       </div>

//       {/* 3. Commercial Tray Breakdown */}
//       <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
//         <h5 className="text-xs font-black uppercase text-gray-400 mb-3 tracking-widest">Commercial Breakdown</h5>
//         <div className="space-y-1">
//             <SpecRow label="Quantity in Tray" value={product.trayPlantCount ? `${product.trayPlantCount} Plants` : null} icon={Package} />
//             <SpecRow label="Price per Tray" value={product.trayPrice ? `₹${product.trayPrice}` : null} />
//             {perPlantPrice && (
//                 <div className="flex justify-between items-center pt-2 mt-2 border-t border-gray-200">
//                     <span className="text-green-700 font-bold text-sm">Individual Plant Cost</span>
//                     <span className="text-green-700 font-black text-lg">₹{perPlantPrice}</span>
//                 </div>
//             )}
//         </div>
//       </div>
      
//       {/* 4. Genetic Traits */}
//       {breed?.specialFeatures && (
//           <div className="grid grid-cols-2 gap-2">
//               {breed.specialFeatures.map((f: string, i: number) => (
//                   <div key={i} className="flex items-center gap-2 text-[11px] font-bold text-gray-600 bg-white border border-gray-100 p-2 rounded-lg">
//                       <CheckCircle size={12} className="text-green-500" /> {f}
//                   </div>
//               ))}
//           </div>
//       )}
//     </div>
//   );
// };

// const FertilizerCharacteristics = ({ product }: { product: ExpandedProduct }) => {
//   const formula = product.fertilizerFormulaData;
//   return (
//     <div className="space-y-6">
//       <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
//         <h4 className="flex items-center gap-2 text-blue-800 font-black text-base mb-1">
//           <FlaskConical size={18} /> Grade: {formula?.formulaName || "Standard Grade"}
//         </h4>
//         <p className="text-sm text-blue-700 leading-relaxed">{formula?.description || product.shortDescription}</p>
//       </div>

//       <div>
//         <h5 className="text-xs font-black uppercase text-gray-400 mb-2 tracking-widest">Product Details</h5>
//         <div className="grid grid-cols-1 border rounded-xl px-4 bg-white shadow-sm">
//           <SpecRow label="Packaging Quantity" value={product.unit} icon={Weight} />
//           <SpecRow label="NPK Ratio" value={formula?.npk} icon={Info} />
//           <SpecRow label="Physical Form" value={formula?.fertilizerForm?.toUpperCase()} icon={Package} />
//           <SpecRow label="Application Timing" value={formula?.whenToUse} icon={Calendar} />
//         </div>
//       </div>

//       {formula?.howToUse && (
//         <div className="p-4 bg-orange-50/50 rounded-xl border border-orange-100">
//           <h5 className="text-xs font-black uppercase text-orange-600 mb-2 flex items-center gap-2">
//             <Info size={14}/> Usage Instructions
//           </h5>
//           <p className="text-sm text-gray-700 leading-relaxed italic">"{formula.howToUse}"</p>
//         </div>
//       )}

//       {formula?.benefits && (
//           <div className="space-y-2">
//              <h5 className="text-xs font-black uppercase text-gray-400 tracking-widest">Results & Benefits</h5>
//              <div className="grid grid-cols-1 gap-2">
//                 {formula.benefits.map((b: string, i: number) => (
//                   <div key={i} className="flex items-center gap-2 text-sm text-gray-700 bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
//                     <CheckCircle size={16} className="text-blue-500" /> {b}
//                   </div>
//                 ))}
//              </div>
//           </div>
//       )}
//     </div>
//   );
// };

// const ProductCharacteristics = ({ product }: { product: Product }) => {
//   if (!product) return null;
//   const variant = product.productVariant as string;

//   return (
//     <Accordion type="single" collapsible defaultValue="specs" className="w-full">
//       <AccordionItem value="specs" className="border rounded-xl bg-white overflow-hidden shadow-sm">
//         <AccordionTrigger className="px-5 py-4 hover:no-underline hover:bg-gray-50 transition-all">
//           <div className="flex items-center gap-3">
//              <div className="p-2 bg-green-100 rounded-lg text-green-700">
//                 {variant === "plants" ? <Leaf size={20}/> : <FlaskConical size={20}/>}
//              </div>
//              <div className="text-left">
//                 <span className="block font-black text-gray-900 uppercase tracking-tighter text-lg">Detailed Specifications</span>
//                 <span className="block text-xs text-gray-400 font-medium">Verified Agricultural Data</span>
//              </div>
//           </div>
//         </AccordionTrigger>
//         <AccordionContent className="px-5 pb-6 pt-4 border-t border-gray-100">
//           {variant === "plants" ? (
//             <PlantCharacteristics product={product as ExpandedProduct} />
//           ) : variant === "fertilizer" ? (
//             <FertilizerCharacteristics product={product as ExpandedProduct} />
//           ) : (
//             <div className="space-y-1">
//                <SpecRow label="Category" value={variant.toUpperCase()} />
//                <SpecRow label="Unit" value={product.unit} />
//             </div>
//           )}
//         </AccordionContent>
//       </AccordionItem>
//     </Accordion>
//   );
// };

// export default ProductCharacteristics;












// "use client";

// import { Product } from "@/sanity.types";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "./ui/accordion";
// import { Leaf, FlaskConical, CheckCircle, Info, Calendar, Gauge, AlertTriangle } from "lucide-react";
// import { differenceInDays, parseISO, addDays, format } from "date-fns";

// interface ExpandedProduct extends Product {
//   plantBreedData?: any;
//   fertilizerFormulaData?: any;
//   trayPlantCount?: number;
//   trayPrice?: number;
//   seedingDate?: string; // ISO Date String
//   transplantDeadlineDays?: number;
// }

// const SpecRow = ({ label, value, icon: Icon, colorClass = "text-gray-900" }: { label: string; value: any, icon?: any, colorClass?: string }) => {
//   if (value === null || value === undefined || value === "") return null;
//   return (
//     <div className="flex justify-between items-start py-3 border-b border-gray-100 last:border-0">
//       <span className="text-gray-500 font-medium text-sm flex items-center gap-2">
//         {Icon && <Icon size={14} className="text-gray-400" />} {label}
//       </span>
//       <span className={`font-bold text-sm text-right max-w-[60%] ${colorClass}`}>{value.toString()}</span>
//     </div>
//   );
// };

// const PlantCharacteristics = ({ product }: { product: ExpandedProduct }) => {
//   const breed = product.plantBreedData;
  
//   // LOGIC: Calculate Age and Deadlines
//   const today = new Date();
//   const seedingDate = product.seedingDate ? parseISO(product.seedingDate) : null;
//   const ageInDays = seedingDate ? differenceInDays(today, seedingDate) : null;
//   const deadlineDate = (seedingDate && product.transplantDeadlineDays) 
//     ? addDays(seedingDate, product.transplantDeadlineDays) 
//     : null;
  
//   const isUrgent = (ageInDays && product.transplantDeadlineDays) 
//     ? ageInDays > (product.transplantDeadlineDays - 5) 
//     : false;

//   return (
//     <div className="space-y-6">
//       {/* Age & Health Status Dashboard */}
//       <div className={`p-4 rounded-xl border ${isUrgent ? 'bg-red-50 border-red-100' : 'bg-green-50 border-green-100'}`}>
//         <div className="flex justify-between items-center mb-3">
//             <h4 className="flex items-center gap-2 font-black text-base" style={{ color: isUrgent ? '#991b1b' : '#166534' }}>
//               <Calendar size={18} /> Nursery Status
//             </h4>
//             {isUrgent && <span className="text-[10px] bg-red-600 text-white px-2 py-0.5 rounded-full animate-pulse">PLANT SOON</span>}
//         </div>
        
//         <div className="grid grid-cols-2 gap-4">
//             <div>
//                 <p className="text-[10px] uppercase text-gray-500 font-bold">Current Plant Age</p>
//                 <p className="text-xl font-black text-gray-900">{ageInDays ?? '--'} Days</p>
//             </div>
//             <div>
//                 <p className="text-[10px] uppercase text-gray-500 font-bold">Transplant By</p>
//                 <p className="text-sm font-bold text-gray-900">{deadlineDate ? format(deadlineDate, 'dd MMM yyyy') : 'Contact Nursery'}</p>
//             </div>
//         </div>
//       </div>

      

//       {/* Commercial Breakdown */}
//       <div className="border rounded-xl p-4 bg-white shadow-sm">
//         <h5 className="text-xs font-black uppercase text-gray-400 mb-2">Commercial Details</h5>
//         <SpecRow label="Plants per Tray" value={product.trayPlantCount} icon={Gauge} />
//         <SpecRow label="Full Tray Price" value={product.trayPrice ? `₹${product.trayPrice}` : null} />
//         {product.trayPrice && product.trayPlantCount && (
//             <SpecRow 
//               label="Calculated Price/Plant" 
//               value={`₹${(product.trayPrice / product.trayPlantCount).toFixed(2)}`} 
//               colorClass="text-green-700 font-black text-base"
//             />
//         )}
//       </div>

//       {/* Breed Specs */}
//       <div>
//         <h5 className="text-xs font-black uppercase text-gray-400 mb-2">Variety Specifications</h5>
//         <div className="border rounded-xl px-4 bg-white shadow-sm">
//             <SpecRow label="Variety" value={breed?.breedName} />
//             <SpecRow label="Growth Habit" value={breed?.growthHabit} />
//             <SpecRow label="First Harvest" value={breed?.daysToHarvest} />
//             <SpecRow label="Yield Potential" value={breed?.yieldPotential} />
//         </div>
//       </div>
//     </div>
//   );
// };

// const FertilizerCharacteristics = ({ product }: { product: ExpandedProduct }) => {
//   const formula = product.fertilizerFormulaData;
//   return (
//     <div className="space-y-6">
//       <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
//         <h4 className="flex items-center gap-2 text-blue-800 font-black text-base mb-1">
//           <FlaskConical size={18} /> Formula: {formula?.formulaName}
//         </h4>
//         <SpecRow label="NPK Ratio" value={formula?.npk} />
//       </div>

      

//       <div className="space-y-4">
//         <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
//           <h5 className="text-xs font-black uppercase text-gray-600 mb-2 flex items-center gap-2">
//             <Info size={14}/> Application Instructions
//           </h5>
//           <p className="text-sm text-gray-700 leading-relaxed font-medium">
//             {formula?.howToUse || "Apply as per soil test results."}
//           </p>
//         </div>

//         {formula?.benefits && (
//           <div className="grid grid-cols-1 gap-2">
//             {formula.benefits.map((b: string, i: number) => (
//               <div key={i} className="flex items-center gap-2 text-sm font-bold text-gray-700 bg-white p-3 rounded-lg border border-gray-100">
//                 <CheckCircle size={16} className="text-blue-500" /> {b}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };




// "use client";

// import { Product } from "@/sanity.types";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "./ui/accordion";
// import { Leaf, FlaskConical, CheckCircle, Info, Calendar, Gauge, Target } from "lucide-react";
// import { differenceInDays, parseISO, addDays, format } from "date-fns";

// interface ExpandedProduct extends Product {
//   plantBreedData?: any;
//   fertilizerFormulaData?: any;
//   trayPlantCount?: number;
//   trayPrice?: number;
//   seedingDate?: string; 
//   transplantDeadlineDays?: number;
// }

// const SpecRow = ({ label, value, icon: Icon, colorClass = "text-gray-900" }: { label: string; value: any, icon?: any, colorClass?: string }) => {
//   if (value === null || value === undefined || value === "") return null;
//   return (
//     <div className="flex justify-between items-start py-3 border-b border-gray-100 last:border-0">
//       <span className="text-gray-500 font-medium text-sm flex items-center gap-2">
//         {Icon && <Icon size={14} className="text-gray-400" />} {label}
//       </span>
//       <span className={`font-bold text-sm text-right max-w-[60%] ${colorClass}`}>{value.toString()}</span>
//     </div>
//   );
// };

// const PlantSpecs = ({ product }: { product: ExpandedProduct }) => {
//   const breed = product.plantBreedData;
  
//   const today = new Date();
//   const seedingDate = product.seedingDate ? parseISO(product.seedingDate) : null;
//   const ageInDays = seedingDate ? differenceInDays(today, seedingDate) : null;
//   const deadlineDate = (seedingDate && product.transplantDeadlineDays) 
//     ? addDays(seedingDate, product.transplantDeadlineDays) 
//     : null;
  
//   const isUrgent = (ageInDays && product.transplantDeadlineDays) 
//     ? ageInDays > (product.transplantDeadlineDays - 5) 
//     : false;

//   return (
//     <div className="space-y-6">
//       <div className={`p-4 rounded-xl border ${isUrgent ? 'bg-red-50 border-red-100' : 'bg-green-50 border-green-100'}`}>
//         <div className="flex justify-between items-center mb-3">
//             <h4 className="flex items-center gap-2 font-black text-base" style={{ color: isUrgent ? '#991b1b' : '#166534' }}>
//               <Calendar size={18} /> Nursery Status
//             </h4>
//         </div>
//         <div className="grid grid-cols-2 gap-4">
//             <div>
//                 <p className="text-[10px] uppercase text-gray-500 font-bold">Plant Age</p>
//                 <p className="text-xl font-black text-gray-900">{ageInDays ?? '--'} Days</p>
//             </div>
//             <div>
//                 <p className="text-[10px] uppercase text-gray-500 font-bold">Transplant By</p>
//                 <p className="text-sm font-bold text-gray-900">{deadlineDate ? format(deadlineDate, 'dd MMM yyyy') : 'TBD'}</p>
//             </div>
//         </div>
//       </div>

      

//       <div>
//         <h5 className="text-xs font-black uppercase text-gray-400 mb-2">Soil & Yield Specs</h5>
//         <div className="border rounded-xl px-4 bg-white shadow-sm">
//             <SpecRow label="Best Soil" value={breed?.soilRecommendation?.toUpperCase()} icon={Target} colorClass="text-orange-700" />
//             <SpecRow label="Yield" value={breed?.yieldPotential} />
//             <SpecRow label="Harvest" value={breed?.daysToHarvest} />
//         </div>
//       </div>

//       <div className="border rounded-xl p-4 bg-white shadow-sm">
//         <h5 className="text-xs font-black uppercase text-gray-400 mb-2">Commercial Details</h5>
//         <SpecRow label="Plants/Tray" value={product.trayPlantCount} icon={Gauge} />
//         {product.trayPrice && product.trayPlantCount && (
//             <SpecRow 
//               label="Price per Seedling" 
//               value={`₹${(product.trayPrice / product.trayPlantCount).toFixed(2)}`} 
//               colorClass="text-green-700 font-black text-base"
//             />
//         )}
//       </div>
//     </div>
//   );
// };

// const FertilizerSpecs = ({ product }: { product: ExpandedProduct }) => {
//   const formula = product.fertilizerFormulaData;
//   return (
//     <div className="space-y-6">
//       <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
//         <h4 className="flex items-center gap-2 text-blue-800 font-black text-base mb-1">
//           <FlaskConical size={18} /> Formula: {formula?.formulaName}
//         </h4>
//         <SpecRow label="NPK Ratio" value={formula?.npk} />
//       </div>

      

//       <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
//         <h5 className="text-xs font-black uppercase text-gray-600 mb-2 flex items-center gap-2">
//           <Info size={14}/> Instructions
//         </h5>
//         <p className="text-sm text-gray-700 leading-relaxed font-medium">{formula?.howToUse}</p>
//       </div>
//     </div>
//   );
// };

// const ProductCharacteristics = ({ product }: { product: Product }) => {
//   if (!product) return null;
//   const variant = product.productVariant as string;

//   return (
//     <Accordion type="single" collapsible defaultValue="specs" className="w-full">
//       <AccordionItem value="specs" className="border-none">
//         <AccordionTrigger className="px-5 py-4 hover:no-underline bg-gray-50/50 rounded-xl">
//           <span className="font-black text-gray-900 uppercase tracking-tight">Full Specifications</span>
//         </AccordionTrigger>
//         <AccordionContent className="px-5 pb-6 pt-4">
//           {variant === "plants" ? (
//             <PlantSpecs product={product as ExpandedProduct} />
//           ) : variant === "fertilizer" ? (
//             <FertilizerSpecs product={product as ExpandedProduct} />
//           ) : (
//             <SpecRow label="Category" value={variant.toUpperCase()} />
//           )}
//         </AccordionContent>
//       </AccordionItem>
//     </Accordion>
//   );
// };

// // ✅ THE MISSING LINE THAT CAUSED YOUR ERROR:
// export default ProductCharacteristics;






















// "use client";

// import { Product } from "@/sanity.types";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "./ui/accordion";
// import { 
//   Leaf, FlaskConical, CheckCircle, Info, 
//   Calendar, Gauge, Target, Package, ThermometerSun 
// } from "lucide-react";
// import { differenceInDays, parseISO, addDays, format } from "date-fns";

// // Extended Interface for Agricultural Fields
// interface ExpandedProduct extends Product {
//   plantBreedData?: any;
//   fertilizerFormulaData?: any;
//   trayPlantCount?: number;
//   trayPrice?: number;
//   seedingDate?: string; 
//   transplantDeadlineDays?: number;
// }

// const SpecRow = ({ label, value, icon: Icon, colorClass = "text-gray-900" }: { label: string; value: any, icon?: any, colorClass?: string }) => {
//   if (value === null || value === undefined || value === "") return null;
//   return (
//     <div className="flex justify-between items-start py-3 border-b border-gray-100 last:border-0">
//       <span className="text-gray-500 font-medium text-sm flex items-center gap-2">
//         {Icon && <Icon size={14} className="text-gray-400" />} {label}
//       </span>
//       <span className={`font-bold text-sm text-right max-w-[60%] ${colorClass}`}>{value.toString()}</span>
//     </div>
//   );
// };

// const PlantSpecs = ({ product }: { product: ExpandedProduct }) => {
//   const breed = product.plantBreedData;
  
//   // Date Logic
//   const today = new Date();
//   const seedingDate = product.seedingDate ? parseISO(product.seedingDate) : null;
//   const ageInDays = seedingDate ? differenceInDays(today, seedingDate) : null;
//   const deadlineDate = (seedingDate && product.transplantDeadlineDays) 
//     ? addDays(seedingDate, product.transplantDeadlineDays) 
//     : null;
  
//   const isUrgent = (ageInDays && product.transplantDeadlineDays) 
//     ? ageInDays > (product.transplantDeadlineDays - 5) 
//     : false;

//   return (
//     <div className="space-y-6">
//       {/* 1. Nursery Health Dashboard */}
//       <div className={`p-4 rounded-xl border ${isUrgent ? 'bg-red-50 border-red-100' : 'bg-green-50 border-green-100'}`}>
//         <div className="flex justify-between items-center mb-3">
//             <h4 className="flex items-center gap-2 font-black text-base" style={{ color: isUrgent ? '#991b1b' : '#166534' }}>
//               <Calendar size={18} /> Nursery Status
//             </h4>
//             {isUrgent && <span className="text-[10px] bg-red-600 text-white px-2 py-0.5 rounded-full animate-pulse font-bold">PLANT NOW</span>}
//         </div>
//         <div className="grid grid-cols-2 gap-4">
//             <div>
//                 <p className="text-[10px] uppercase text-gray-500 font-bold">Plant Age</p>
//                 <p className="text-xl font-black text-gray-900">{ageInDays ?? '--'} Days</p>
//             </div>
//             <div>
//                 <p className="text-[10px] uppercase text-gray-500 font-bold">Best Planting Date</p>
//                 <p className="text-sm font-bold text-gray-900">{deadlineDate ? format(deadlineDate, 'dd MMM yyyy') : 'Ready'}</p>
//             </div>
//         </div>
//       </div>

      

//       {/* 2. Soil & Environment */}
//       <div>
//         <h5 className="text-xs font-black uppercase text-gray-400 mb-2 tracking-widest">Environment & Growth</h5>
//         <div className="border rounded-xl px-4 bg-white shadow-sm">
//             <SpecRow label="Recommended Soil" value={breed?.soilRecommendation?.toUpperCase()} icon={Target} colorClass="text-orange-700" />
//             <SpecRow label="Growth Habit" value={breed?.growthHabit} icon={ThermometerSun} />
//             <SpecRow label="Yield Potential" value={breed?.yieldPotential} />
//             <SpecRow label="First Harvest" value={breed?.daysToHarvest} />
//         </div>
//       </div>

//       {/* 3. Expert Advice */}
//       <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
//         <h5 className="text-xs font-black uppercase text-blue-600 mb-1 flex items-center gap-2">
//             <Info size={14}/> Consultancy Advice
//         </h5>
//         <p className="text-sm text-blue-800 italic leading-relaxed">
//             "For {breed?.breedName || 'this variety'}, maintain consistent moisture and ensure 
//             {breed?.soilRecommendation?.toLowerCase().includes('black') ? ' deep plowing for better root penetration.' : ' high organic matter in the soil.'}"
//         </p>
//       </div>

//       {/* 4. Commercial Tray Details */}
//       <div className="border rounded-xl p-4 bg-white shadow-sm">
//         <h5 className="text-xs font-black uppercase text-gray-400 mb-2 tracking-widest">Commercial Breakdown</h5>
//         <SpecRow label="Quantity in Tray" value={product.trayPlantCount ? `${product.trayPlantCount} Plants` : null} icon={Package} />
//         <SpecRow label="Full Tray Price" value={product.trayPrice ? `₹${product.trayPrice}` : null} />
//         {product.trayPrice && product.trayPlantCount && (
//             <SpecRow 
//               label="Cost Per Seedling" 
//               value={`₹${(product.trayPrice / product.trayPlantCount).toFixed(2)}`} 
//               colorClass="text-green-700 font-black text-lg"
//             />
//         )}
//       </div>
//     </div>
//   );
// };

// const FertilizerSpecs = ({ product }: { product: ExpandedProduct }) => {
//   const formula = product.fertilizerFormulaData;
//   return (
//     <div className="space-y-6">
//       <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
//         <h4 className="flex items-center gap-2 text-blue-800 font-black text-base mb-1">
//           <FlaskConical size={18} /> Grade: {formula?.formulaName}
//         </h4>
//         <SpecRow label="Nutrient Ratio (NPK)" value={formula?.npk} />
//       </div>

      

//       <div className="space-y-4">
//         <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 shadow-sm">
//           <h5 className="text-xs font-black uppercase text-gray-600 mb-2 flex items-center gap-2">
//             <Info size={14}/> How & When to Use
//           </h5>
//           <p className="text-sm text-gray-700 leading-relaxed font-medium mb-3">{formula?.howToUse}</p>
//           <div className="flex items-center gap-2 text-xs font-bold text-blue-600 bg-blue-50 p-2 rounded w-fit">
//             <Calendar size={14}/> Apply During: {formula?.whenToUse}
//           </div>
//         </div>

//         {formula?.benefits && (
//           <div className="grid grid-cols-1 gap-2">
//             <h5 className="text-xs font-black uppercase text-gray-400">Key Benefits</h5>
//             {formula.benefits.map((b: string, i: number) => (
//               <div key={i} className="flex items-center gap-2 text-sm font-bold text-gray-700 bg-white p-3 rounded-lg border border-gray-100">
//                 <CheckCircle size={16} className="text-green-500" /> {b}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// const ProductCharacteristics = ({ product }: { product: Product }) => {
//   if (!product) return null;
//   const variant = product.productVariant as string;

//   return (
//     <Accordion type="single" collapsible defaultValue="specs" className="w-full">
//       <AccordionItem value="specs" className="border-none">
//         <AccordionTrigger className="px-5 py-5 hover:no-underline bg-green-700 text-white rounded-xl shadow-md transition-all">
//           <div className="flex items-center gap-3">
//              <span className="font-black uppercase tracking-widest text-base">View Full Specifications</span>
//           </div>
//         </AccordionTrigger>
//         <AccordionContent className="px-5 pb-6 pt-6 border-x border-b border-gray-100 rounded-b-xl bg-white/50">
//           {variant === "plants" ? (
//             <PlantSpecs product={product as ExpandedProduct} />
//           ) : variant === "fertilizer" ? (
//             <FertilizerSpecs product={product as ExpandedProduct} />
//           ) : (
//             <SpecRow label="Category" value={variant.toUpperCase()} />
//           )}
//         </AccordionContent>
//       </AccordionItem>
//     </Accordion>
//   );
// };

// // Fixed the import error by adding this:
// export default ProductCharacteristics;

















// "use client";

// import { Product } from "@/sanity.types";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "./ui/accordion";
// import { 
//   Leaf, FlaskConical, CheckCircle, Info, 
//   Calendar, Gauge, Target, Package, ThermometerSun,
//   Sprout, Droplets, ShieldAlert, Settings, Wrench, Truck
// } from "lucide-react";
// import { differenceInDays, parseISO, addDays, format } from "date-fns";

// // Extended Interface to map all GROQ expanded fields
// interface ExpandedProduct extends Product {
//   plantBreedData?: any;
//   fertilizerFormulaData?: any;
//   trayPlantCount?: number;
//   trayPrice?: number;
//   seedingDate?: string; 
//   transplantDeadlineDays?: number;
//   soilRecommendation?: string;
// }

// const SpecRow = ({ label, value, icon: Icon, colorClass = "text-gray-900" }: { label: string; value: any, icon?: any, colorClass?: string }) => {
//   if (value === null || value === undefined || value === "" || (Array.isArray(value) && value.length === 0)) return null;
//   return (
//     <div className="flex justify-between items-start py-3 border-b border-gray-100 last:border-0">
//       <span className="text-gray-500 font-medium text-sm flex items-center gap-2">
//         {Icon && <Icon size={14} className="text-gray-400" />} {label}
//       </span>
//       <span className={`font-bold text-sm text-right max-w-[60%] ${colorClass}`}>
//         {Array.isArray(value) ? value.join(", ") : value.toString()}
//       </span>
//     </div>
//   );
// };

// // --- PLANT & BREED SPECS ---
// const PlantSpecs = ({ product }: { product: ExpandedProduct }) => {
//   const breed = product.plantBreedData;
//   const today = new Date();
//   const seedingDate = product.seedingDate ? parseISO(product.seedingDate) : null;
//   const ageInDays = seedingDate ? differenceInDays(today, seedingDate) : null;
//   const deadlineDate = (seedingDate && product.transplantDeadlineDays) ? addDays(seedingDate, product.transplantDeadlineDays) : null;
//   const isUrgent = (ageInDays && product.transplantDeadlineDays) ? ageInDays > (product.transplantDeadlineDays - 5) : false;

//   return (
//     <div className="space-y-6">
//       <div className={`p-4 rounded-xl border ${isUrgent ? 'bg-red-50 border-red-100' : 'bg-green-50 border-green-100'}`}>
//         <h4 className="flex items-center gap-2 font-black text-base mb-3" style={{ color: isUrgent ? '#991b1b' : '#166534' }}>
//           <Calendar size={18} /> Nursery Status
//         </h4>
//         <div className="grid grid-cols-2 gap-4">
//             <div>
//                 <p className="text-[10px] uppercase text-gray-500 font-bold tracking-tighter">Current Plant Age</p>
//                 <p className="text-xl font-black text-gray-900">{ageInDays ?? '--'} Days</p>
//             </div>
//             <div>
//                 <p className="text-[10px] uppercase text-gray-500 font-bold tracking-tighter">Transplant By</p>
//                 <p className="text-sm font-bold text-gray-900">{deadlineDate ? format(deadlineDate, 'dd MMM yyyy') : 'Ready'}</p>
//             </div>
//         </div>
//       </div>

//       <div className="border rounded-xl px-4 bg-white shadow-sm">
//           <SpecRow label="Variety" value={breed?.breedName} icon={Target} colorClass="text-green-700" />
//           <SpecRow label="Soil Support" value={product.soilRecommendation?.toUpperCase()} icon={ThermometerSun} colorClass="text-orange-700" />
//           <SpecRow label="Growth Habit" value={breed?.growthHabit} />
//           <SpecRow label="Yield Potential" value={breed?.yieldPotential} />
//           <SpecRow label="Quantity" value={product.trayPlantCount ? `${product.trayPlantCount} Plants/Tray` : null} icon={Package} />
//           {product.trayPrice && product.trayPlantCount && (
//             <SpecRow label="Price/Seedling" value={`₹${(product.trayPrice / product.trayPlantCount).toFixed(2)}`} colorClass="text-blue-700 font-black" />
//           )}
//       </div>

//       <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
//         <h5 className="text-xs font-black uppercase text-blue-600 mb-1 flex items-center gap-2">Consultancy Advice</h5>
//         <p className="text-sm text-blue-800 italic">"Maintain {breed?.breedName} in {product.soilRecommendation || 'recommended'} soil for maximum yield."</p>
//       </div>
//     </div>
//   );
// };

// // --- FERTILIZER & CHEMICAL SPECS ---
// const FertilizerSpecs = ({ product }: { product: ExpandedProduct }) => {
//   const formula = product.fertilizerFormulaData;
//   return (
//     <div className="space-y-4">
//       <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
//         <h4 className="flex items-center gap-2 text-blue-800 font-black text-base">
//           <FlaskConical size={18} /> Grade: {formula?.formulaName || product.nutrientComposition}
//         </h4>
//         <p className="text-sm text-blue-700 mt-1">{formula?.description}</p>
//       </div>
//       <div className="border rounded-xl px-4 bg-white shadow-sm">
//           <SpecRow label="NPK Ratio" value={formula?.npk || product.nutrientComposition} icon={Droplets} />
//           <SpecRow label="Form" value={product.fertilizerForm || formula?.fertilizerForm} />
//           <SpecRow label="Application" value={product.applicationMethod} />
//           <SpecRow label="Timing" value={formula?.whenToUse} icon={Calendar} />
//           <SpecRow label="Organic" value={product.isOrganic ? `Yes (${product.certificationBody})` : "No"} />
//       </div>
//       {formula?.howToUse && (
//         <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
//           <h5 className="text-xs font-black uppercase text-gray-500 mb-1 flex items-center gap-2"><Info size={14}/> Directions</h5>
//           <p className="text-sm text-gray-700 leading-relaxed">{formula.howToUse}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// // --- SEED SPECS ---
// const SeedSpecs = ({ product }: { product: ExpandedProduct }) => (
//   <div className="border rounded-xl px-4 bg-white shadow-sm">
//     <SpecRow label="Seed Type" value={product.seedType} icon={Sprout} />
//     <SpecRow label="Crop Type" value={product.cropType} />
//     <SpecRow label="Germination" value={product.germinationRate ? `${product.germinationRate}%` : null} />
//     <SpecRow label="Sowing Season" value={product.sowingSeason} icon={Calendar} />
//     <SpecRow label="Harvest Time" value={product.timeToHarvest} />
//     <SpecRow label="Treatment" value={product.seedTreatment} />
//   </div>
// );

// // --- MACHINERY SPECS ---
// const MachinerySpecs = ({ product }: { product: ExpandedProduct }) => (
//   <div className="border rounded-xl px-4 bg-white shadow-sm">
//     <SpecRow label="Power Source" value={product.powerSource} icon={Settings} />
//     <SpecRow label="Horsepower" value={product.horsepower ? `${product.horsepower} HP` : null} />
//     <SpecRow label="Warranty" value={product.warrantyInfo} icon={ShieldAlert} />
//     <SpecRow label="Material" value={product.material} />
//   </div>
// );

// const ProductCharacteristics = ({ product }: { product: Product }) => {
//   if (!product) return null;
//   const variant = product.productVariant as string;

//   return (
//     <Accordion type="single" collapsible defaultValue="specs" className="w-full">
//       <AccordionItem value="specs" className="border-none">
//         <AccordionTrigger className="px-5 py-5 hover:no-underline bg-green-800 text-white rounded-xl shadow-md">
//           <span className="font-black uppercase tracking-widest text-base">View Full Specifications</span>
//         </AccordionTrigger>
//         <AccordionContent className="px-5 pb-6 pt-6 border-x border-b border-gray-100 rounded-b-xl bg-white/50">
//           <div className="mb-4 space-y-1">
//              <SpecRow label="Nursery" value={(product as any).nursery?.title} icon={Truck} />
//              <SpecRow label="Stock Available" value={product.stock ? `${product.stock} Units` : 'Out of Stock'} icon={Gauge} />
//              <SpecRow label="Product Category" value={variant.toUpperCase()} icon={Info} />
//           </div>
//           <div className="pt-4 border-t border-gray-200">
//             {variant === "plants" && <PlantSpecs product={product as ExpandedProduct} />}
//             {variant === "fertilizer" && <FertilizerSpecs product={product as ExpandedProduct} />}
//             {variant === "seeds" && <SeedSpecs product={product as ExpandedProduct} />}
//             {variant === "machinery" && <MachinerySpecs product={product as ExpandedProduct} />}
//             {["pesticide", "herbicide", "fungicide"].includes(variant) && (
//                <div className="border rounded-xl px-4 bg-white shadow-sm">
//                   <SpecRow label="Active Ingredient" value={(product as any).chemicalName} icon={FlaskConical} />
//                   <SpecRow label="Mode of Action" value={(product as any).modeOfAction} />
//                   <SpecRow label="Dosage" value={(product as any).dilutionRatio} />
//                   <SpecRow label="Waiting Period" value={(product as any).waitingPeriod} />
//                </div>
//             )}
//           </div>
//         </AccordionContent>
//       </AccordionItem>
//     </Accordion>
//   );
// };

// export default ProductCharacteristics;


















"use client";

import { Product } from "@/sanity.types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { 
  Leaf, FlaskConical, CheckCircle, Info, 
  Calendar, Gauge, Target, Package, ThermometerSun,
  Sprout, Droplets, ShieldAlert, Settings, Truck,
  ChevronRight
} from "lucide-react";
import { differenceInDays, parseISO, addDays, format } from "date-fns";

interface ExpandedProduct extends Product {
  plantBreedData?: any;
  fertilizerFormulaData?: any;
  trayPlantCount?: number;
  trayPrice?: number;
  seedingDate?: string; 
  transplantDeadlineDays?: number;
  soilRecommendation?: string;
}

const SpecRow = ({ label, value, icon: Icon, colorClass = "text-gray-900" }: { label: string; value: any, icon?: any, colorClass?: string }) => {
  if (!value || (Array.isArray(value) && value.length === 0)) return null;
  return (
    <div className="flex justify-between items-start py-4 border-b border-gray-100 last:border-0">
      <span className="text-gray-500 font-bold text-base flex items-center gap-3">
        {Icon && <Icon size={20} className="text-green-600" />} {label}
      </span>
      <span className={`font-black text-base text-right max-w-[60%] ${colorClass}`}>
        {Array.isArray(value) ? value.join(", ") : value.toString()}
      </span>
    </div>
  );
};

const ProductCharacteristics = ({ product }: { product: Product }) => {
  if (!product) return null;
  const p = product as ExpandedProduct;
  const variant = p.productVariant as string;
  const breed = p.plantBreedData;
  const formula = p.fertilizerFormulaData;

  // Date Calculations
  const today = new Date();
  const seedingDate = p.seedingDate ? parseISO(p.seedingDate) : null;
  const ageInDays = seedingDate ? differenceInDays(today, seedingDate) : null;
  const deadlineDate = (seedingDate && p.transplantDeadlineDays) ? addDays(seedingDate, p.transplantDeadlineDays) : null;

  return (
    <Accordion type="single" collapsible defaultValue="specs" className="w-full">
      <AccordionItem value="specs" className="border-none">
        <AccordionTrigger className="px-6 py-6 hover:no-underline bg-green-800 text-white rounded-2xl shadow-lg">
          <span className="font-black uppercase tracking-widest text-lg"> Technical Specifications</span>
        </AccordionTrigger>
        <AccordionContent className="px-6 pb-8 pt-8 border-x border-b border-gray-100 rounded-b-2xl bg-white">
          
          {/* General Business Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 mb-6">
             <SpecRow label="Provider Nursery" value={(p as any).nursery?.title} icon={Truck} />
             <SpecRow label="Packaging Unit" value={p.unit} icon={Package} />
             <SpecRow label="Stock Status" value={p.stock ? `${p.stock} Units` : ' Booking Available '} icon={Gauge} />
             <SpecRow label="Category" value={variant.toUpperCase()} icon={Info} />
          </div>

          <div className="space-y-8 pt-6 border-t border-gray-200">
            {/* PLANTS SPECIFIC */}
            {variant === "plants" && (
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                  <h4 className="flex items-center gap-3 font-black text-xl text-green-900 mb-4 uppercase tracking-tighter">
                    <Calendar size={24} /> Nursery Batch Status
                  </h4>
                  <div className="grid grid-cols-2 gap-8">
                      <div>
                          <p className="text-xs uppercase text-green-600 font-black">Current Age</p>
                          <p className="text-3xl font-black text-gray-900">{ageInDays ?? '--'} Days</p>
                      </div>
                      <div>
                          <p className="text-xs uppercase text-green-600 font-black">Transplant Deadline</p>
                          <p className="text-lg font-black text-gray-900">{deadlineDate ? format(deadlineDate, 'dd MMM yyyy') : 'Ready'}</p>
                      </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                  <SpecRow label="Breed Variety" value={breed?.breedName} icon={Target} colorClass="text-green-700" />
                  <SpecRow label="Soil Type" value={p.soilRecommendation?.toUpperCase()} icon={ThermometerSun} colorClass="text-orange-700" />
                  <SpecRow label="Yield Potential" value={breed?.yieldPotential} />
                  <SpecRow label="Harvest Window" value={breed?.daysToHarvest} />
                  <SpecRow label="Plants/Tray" value={p.trayPlantCount} />
                  {p.trayPrice && p.trayPlantCount && (
                    <SpecRow label="Price/Seedling" value={`₹${(p.trayPrice / p.trayPlantCount).toFixed(2)}`} colorClass="text-blue-700 font-black" />
                  )}
                </div>
              </div>
            )}

            {/* FERTILIZER SPECIFIC */}
            {variant === "fertilizer" && (
              <div className="space-y-6">
                <div className="border rounded-2xl p-6 bg-blue-50/50 border-blue-100">
                  <SpecRow label="NPK Composition" value={formula?.npk || p.nutrientComposition} icon={FlaskConical} colorClass="text-blue-800" />
                  <SpecRow label="Application Timing" value={formula?.whenToUse} icon={Calendar} />
                  <SpecRow label="Form" value={p.fertilizerForm} />
                </div>
                {formula?.howToUse && (
                  <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                    <h5 className="text-sm font-black uppercase text-gray-500 mb-2 flex items-center gap-2"><Info size={18}/> Usage Instructions</h5>
                    <p className="text-base text-gray-700 leading-relaxed font-medium">{formula.howToUse}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ProductCharacteristics;