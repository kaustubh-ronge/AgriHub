import Container from "@/components/Container";
import { SubTitle } from "@/components/ui/text";

const PrivacyPolicy = () => {
  return (
    <div className="bg-white min-h-screen py-16">
      <Container>
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        <div className="space-y-6 text-gray-700">
          <section>
            <SubTitle>Information Collection</SubTitle>
            <p>We collect your email address when you subscribe to our newsletter and your shipping details when you place an order. This data is used solely to fulfill orders and send product updates.</p>
          </section>
          <section>
            <SubTitle>Data Security</SubTitle>
            <p>We do not sell, trade, or rent your personal information to third parties. Your payment information is processed through secure, encrypted gateways and is never stored on our servers.</p>
          </section>
          <section>
            <SubTitle>Cookies</SubTitle>
            <p>Our website uses cookies to improve your browsing experience and remember your cart items.</p>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default PrivacyPolicy;