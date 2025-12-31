import Container from "@/components/Container";
import { SubTitle } from "@/components/ui/text";

const TermsPage = () => {
  return (
    <div className="bg-white min-h-screen py-16">
      <Container>
        <h1 className="text-3xl font-bold mb-8 text-darkColor">Terms and Conditions</h1>
        
        <div className="space-y-8 text-gray-700 leading-relaxed">
          {/* Section 1: Fertilizers & Perishables */}
          <section>
            <SubTitle className="mb-2">1. No Refund and No Return Policy</SubTitle>
            <p>
              Due to the nature of our products (organic fertilizers, live plants, and soil enhancers), 
              <strong> all sales are final</strong>. We do not accept returns, exchanges, or provide 
              refunds once an order has been processed and dispatched. Fertilizers are sensitive 
              to storage conditions which are beyond our control once they leave our facility.
            </p>
          </section>

          {/* Section 2: Post-Delivery Responsibility */}
          <section>
            <SubTitle className="mb-2">2. Transfer of Responsibility</SubTitle>
            <p>
              Shopcartyt (the "Owner") is <strong>not responsible</strong> for the health of plants 
              or the efficacy of fertilizers after the point of delivery. Responsibility for 
              storage, application, and usage shifts entirely to the buyer upon receipt.
            </p>
          </section>

          {/* Section 3: Misuse & Results */}
          <section>
            <SubTitle className="mb-2">3. Disclaimer of Results</SubTitle>
            <p>
              Agricultural results depend on various factors including weather, soil pH, water 
              quality, and user application techniques. The Owner provides no guarantee of 
              specific crop yields or plant growth. We are not liable for any damage to 
              foliage, roots, or soil caused by over-fertilization or improper application 
              by the customer.
            </p>
          </section>

          {/* Section 4: Shipping & Damage */}
          <section>
            <SubTitle className="mb-2">4. Third-Party Shipping</SubTitle>
            <p>
              While we package products with care, we are not liable for delays, mishandling, 
              or damage caused by third-party courier services. Any claims for transit damage 
              must be filed directly with the carrier.
            </p>
          </section>

          {/* Section 5: Limitation of Liability */}
          <section className="bg-gray-50 p-6 border-l-4 border-red-500">
            <SubTitle className="mb-2">5. Final Indemnity</SubTitle>
            <p className="font-medium">
              By purchasing from this site, you agree to indemnify and hold harmless the 
              Owner from any legal claims, damages, or losses arising from the use or 
              inability to use our products. You agree that you purchase at your own risk.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default TermsPage;