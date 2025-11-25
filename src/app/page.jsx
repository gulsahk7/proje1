import Banner from "@/components/HomePage/Banner";
import PhotoGallery from "@/components/HomePage/PhotoGallery";
import ProductCart from "@/components/HomePage/ProductCart";
import TextHeader from "@/components/HomePage/TextHeader";
import React from "react";

export default function page() {
  return (
    <div className="space-y-12 mb-12">
      <Banner />
      <TextHeader />
      <PhotoGallery />
      <ProductCart />
    </div>
  );
}
