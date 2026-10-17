"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import { db, storage } from "../../../../services/firebase";
import ProductsHero from "@/components/Products/ProductInfo/ProductsHero";
import FeaturesSection from "@/components/Products/ProductInfo/FeaturesSection";
import ShowcaseSection from "@/components/Products/ProductInfo/ShowcaseSection";
import PricingSection from "@/components/Products/ProductInfo/PricingSection";
import CTASection from "@/components/Products/ProductInfo/CTASection";
import DeveloperInfo from "@/components/Products/ProductInfo/DeveloperInfo";
import ProductSection from "./ProductSection";

const defaultColors = {
  primary: "#FF2E63",
  secondary: "#2FFFA3",
  accent: "#C1BB41",
  warm: "#FFD1DD",
  dark: "#1a1a1a",
  light: "#ffffff",
  text: "#2B0F18",
  bg: "#FBD1C7",
  bgAlt: "#f5fdfa",
  warning: "#c62828",
  warningBg: "#ffebee",
};

const colorProperties = {
  primary: ["primary"],
  secondary: ["secondary"],
  accent: ["accent"],
  warm: ["warm"],
  dark: ["dark"],
  light: ["light"],
  text: ["text"],
  bg: ["bg"],
  bgAlt: ["bgAlt", "bg-alt"],
  warning: ["warning"],
  warningBg: ["warningBg", "warning-bg"],
};

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

async function resolveStorageAsset(path) {
  if (typeof path !== "string" || !path.trim()) return null;

  const assetPath = path.trim();
  if (/^(https?:\/\/|\/|data:)/i.test(assetPath)) return assetPath;

  return getDownloadURL(ref(storage, assetPath));
}

async function resolveReadMeAsset(path) {
  if (typeof path !== "string" || !path.trim()) return null;

  const assetPath = path.trim();
  if (/^(https?:\/\/|data:)/i.test(assetPath) || /^\/readmes\//i.test(assetPath)) {
    return assetPath;
  }

  return getDownloadURL(ref(storage, assetPath.replace(/^\/+/, "")));
}

async function loadProduct(productId) {
  const snapshot = await getDoc(doc(db, "products", productId));
  if (!snapshot.exists()) return null;

  const data = snapshot.data();
  if (typeof data.imagePrimary !== "string" || !data.imagePrimary.trim()) {
    throw new Error(`Product ${productId} has no valid imagePrimary path.`);
  }

  const galleryPaths = data.gallery ?? [];
  if (
    !Array.isArray(galleryPaths) ||
    galleryPaths.some((path) => typeof path !== "string" || !path.trim())
  ) {
    throw new Error(`Product ${productId} has an invalid gallery.`);
  }

  const [imagePrimary, imagePhone, gallery, readMe] = await Promise.all([
    resolveStorageAsset(data.imagePrimary),
    resolveStorageAsset(data.imagePhone),
    Promise.all(galleryPaths.map(resolveStorageAsset)),
    resolveReadMeAsset(data.readMe),
  ]);

  return {
    ...data,
    id: snapshot.id,
    imagePrimary,
    imagePhone,
    gallery: gallery.filter(Boolean),
    readMe,
  };
}

function getColorStyle(colors) {
  const style = {};

  for (const [property, keys] of Object.entries(colorProperties)) {
    const value = keys
      .map((key) => colors?.[key])
      .find((color) => typeof color === "string" && color.trim());
    const cssProperty = property.replace(
      /[A-Z]/g,
      (letter) => `-${letter.toLowerCase()}`,
    );
    style[`--${cssProperty}`] = value?.trim() ?? defaultColors[property];
  }

  return style;
}

export default function ProductInfoPage() {
  const { id } = useParams();
  const [status, setStatus] = useState("loading");
  const [product, setProduct] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setStatus("loading");
    setProduct(null);

    async function load() {
      try {
        const loadedProduct = await loadProduct(id);
        if (!isMounted) return;
        if (!loadedProduct) {
          setStatus("not-found");
          return;
        }

        setProduct(loadedProduct);
        setStatus("ready");
        scrollToTop();
      } catch (error) {
        console.error(`Failed to load product ${id} from Firestore.`, error);
        if (isMounted) setStatus("error");
      }
    }

    load();
    scrollToTop();

    return () => {
      isMounted = false;
    };
  }, [id]);

  const colorStyle = useMemo(
    () => getColorStyle(product?.colors),
    [product?.colors],
  );
  const handleSectionLoadError = useCallback(() => {
    setStatus("error");
  }, []);

  return (
    <main
      style={colorStyle}
      aria-live={status === "loading" ? "polite" : undefined}
    >
      {status === "not-found" ? (
        "Product not found."
      ) : status === "error" ? (
        <p role="alert">
          Unable to load this product. Please try again later.
        </p>
      ) : (
        <>
          <ProductSection
            key={`${id}-hero`}
            section="hero"
            product={product}
            Component={ProductsHero}
            onLoadError={handleSectionLoadError}
          />
          <ProductSection
            key={`${id}-features`}
            section="features"
            product={product}
            Component={FeaturesSection}
            onLoadError={handleSectionLoadError}
          />
          {(!product || product.gallery.length > 0) && (
            <ProductSection
              key={`${id}-showcase`}
              section="showcase"
              product={product}
              Component={ShowcaseSection}
              onLoadError={handleSectionLoadError}
            />
          )}
          <ProductSection
            key={`${id}-pricing`}
            section="pricing"
            product={product}
            Component={PricingSection}
            onLoadError={handleSectionLoadError}
          />
          <ProductSection
            key={`${id}-cta`}
            section="cta"
            product={product}
            Component={CTASection}
            onLoadError={handleSectionLoadError}
          />
          <ProductSection
            key={`${id}-developer`}
            section="developer"
            product={product}
            Component={DeveloperInfo}
            onLoadError={handleSectionLoadError}
          />
        </>
      )}
    </main>
  );
}
