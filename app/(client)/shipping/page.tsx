import Container from "@/components/Container";
import { SubTitle } from "@/components/ui/text";

const ShippingPolicy = () => {
  return (
    <div className="bg-white min-h-screen py-16">
      <Container>
        <h1 className="text-3xl font-bold mb-8">Shipping & Delivery Policy</h1>
        <div className="space-y-6 text-gray-700">
          <section>
            <SubTitle>Dispatch & Handling</SubTitle>
            <p>Orders are processed within 2-4 business days. Fertilizer bags are inspected for leaks before sealing. Once the package is handed to the courier, Shopcartyt is no longer liable for the physical state of the package.</p>
          </section>
          <section>
            <SubTitle>Address Accuracy</SubTitle>
            <p>The customer is responsible for providing a correct shipping address. If a package is delivered to the wrong address provided by the customer or left in the sun/rain resulting in product degradation, no replacement will be issued.</p>
          </section>
          <section className="bg-yellow-50 p-4 border-l-4 border-yellow-500 text-sm">
            <strong>Note:</strong> We do not ship to P.O. Boxes for certain bulk organic fertilizers due to size and weight restrictions.
          </section>
        </div>
      </Container>
    </div>
  );
};

export default ShippingPolicy;