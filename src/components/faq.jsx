import React, { useState, useEffect } from "react";
import Faq from "react-faq-component";

const data = {
  title: "",
  rows: [
    {
      title: "What are refurbished gadgets?",
      content:
        "Refurbished gadgets are pre-owned devices that have been professionally inspected, tested, and restored to full working condition. They may have minor cosmetic imperfections but function like new.",
    },
    {
      title: "Are refurbished products reliable?",
      content:
        "Absolutely! All our refurbished gadgets go through a rigorous quality check and are backed by a warranty. We ensure they meet high performance and safety standards before listing them for sale.",
    },
    {
      title: "Do refurbished gadgets come with a warranty?",
      content:
        "Yes, every product comes with a minimum 6-month warranty. Some items may include extended warranty options at checkout.",
    },
    {
      title: "What’s included in the box?",
      content:
        "Each product includes essential accessories (like chargers or cables) unless otherwise stated. All items are securely packaged for safe delivery.",
    },
    {
      title: "Can I return or exchange a refurbished product?",
      content:
        "Yes, we offer a 7-day return policy. If you're not satisfied, you can return the product for a full refund or exchange, provided it’s in its original condition.",
    },
    {
      title: "How do I know the condition of the product?",
      content:
        "Each listing clearly states the condition (e.g., Like New, Very Good, Good) along with photos and a detailed description. We’re transparent so you know exactly what to expect.",
    },
    {
      title: "Are refurbished gadgets cheaper than new ones?",
      content:
        "Yes! Refurbished gadgets typically cost 20–50% less than new ones, offering great value without compromising on quality.",
    },
    {
      title: "Is it safe to shop on your website?",
      content:
        "Definitely. Our website uses secure payment gateways and SSL encryption to protect your personal and payment information.",
    },
    {
      title: "Do you offer customer support?",
      content:
        "Yes, our support team is available via chat, email, and phone to assist you with any questions before or after your purchase.",
    },
    {
      title: "Where do you source your refurbished products from?",
      content:
        "We partner with certified refurbishers, manufacturers, and trusted suppliers to ensure authenticity and quality.",
    },
  ],
};

const styles = {
  titleTextColor: "purple",
  rowTitleColor: "#333",
  rowContentTextSize: "14px",
};

const config = {
  animate: true,
  expandIcon: "+",
  collapseIcon: "-",
};

export default function FaqDemo() {
  const [rows, setRows] = useState(null);

  useEffect(() => {
    if (rows) {
      rows[1].expand();
    }
  }, [rows]);

  return (
    <Faq data={data} styles={styles} config={config} getRowOptions={setRows} />
  );
}
