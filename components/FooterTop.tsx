import { Clock, Mail, MapPin, Phone } from "lucide-react";
import React from "react";

interface ContactItemData {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  link?: string; // Optional clickable link
}

const data: ContactItemData[] = [
  {
    title: "Visit Us",
    subtitle: "At/post Chikmahud, Chick-Mahud, Maharashtra 413306",
    icon: <MapPin className="h-6 w-6 text-gray-600" />,
    link: "https://maps.app.goo.gl/MJh5w7HE8N8pM1B47", // clickable map
  },
  {
    title: "Call Us",
    subtitle: "+919765797782",
    icon: <Phone className="h-6 w-6 text-gray-600" />,
    link: "tel:+919765797782", // clickable phone
  },
  {
    title: "Working Hours",
    subtitle: "Mon - Sat: 10:00 AM - 7:00 PM",
    icon: <Clock className="h-6 w-6 text-gray-600" />,
  },
  {
    title: "Email Us",
    subtitle: "bajbalkarropvatika@gmail.com",
    icon: <Mail className="h-6 w-6 text-gray-600" />,
    link: "mailto:bajbalkarropvatika@gmail.com", // clickable email
  },
];

const FooterTop = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-b">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors"
        >
          {item.icon}
          <div className="text-sm">
            <h3 className="font-semibold text-gray-900">{item.title}</h3>
            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black underline"
              >
                {item.subtitle}
              </a>
            ) : (
              <p className="text-gray-600">{item.subtitle}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FooterTop;
