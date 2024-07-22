"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
} from "@/components/ui/pagination";

const ITEMS_PER_PAGE = 12;

export function Catalog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [products, setProducts] = useState([
    {
      id: 1,
      image: "/images/products/durato/colorWillow.jpg",
      title: "Willow",
      brand: "Durawood",
    },
    {
      id: 2,
      image: "/images/products/durato/colorRowan.jpg",
      title: "Rowan",
      brand: "Durawood",
    },
    {
      id: 3,
      image: "/images/products/durato/colorMulberry.jpg",
      title: "Mulberry",
      brand: "Durawood",
    },
    {
      id: 4,
      image: "/images/products/durato/colorLaurel.jpg",
      title: "Laurel",
      brand: "Durawood",
    },
    {
      id: 5,
      image: "/images/products/durato/colorHawthorn.jpg",
      title: "Hawthorn",
      brand: "Durawood",
    },
    {
      id: 6,
      image: "/images/products/durato/colorCypress.jpg",
      title: "Cypress",
      brand: "Durawood",
    },
    {
      id: 7,
      image: "/images/products/durato/colorBalsa.jpg",
      title: "Balsa",
      brand: "Durawood",
    },
    {
      id: 8,
      image: "/images/products/durato/colorAlder.jpg",
      title: "Alder",
      brand: "Durawood",
    },
    {
      id: 9,
      image: "/images/products/durato/colorTeak.jpg",
      title: "Teak",
      brand: "Durawood",
    },
    {
      id: 10,
      image: "/images/products/durato/colorTamarind.jpg",
      title: "Tamarind",
      brand: "Durawood",
    },
    {
      id: 11,
      image: "/images/products/vevo-max/colorWoolworth.jpg",
      title: "Woolworth",
      brand: "Vevo Max",
    },
    {
      id: 12,
      image: "/images/products/vevo-max/colorDresden.jpg",
      title: "Dresden",
      brand: "Vevo Max",
    },
    {
      id: 13,
      image: "/images/products/vevo-max/colorSistine.jpg",
      title: "Sistine",
      brand: "Vevo Max",
    },
    {
      id: 14,
      image: "/images/products/vevo-max/colorGherkin.jpg",
      title: "Gherkin",
      brand: "Vevo Max",
    },
    {
      id: 15,
      image: "/images/products/vevo-max/colorSavoye.jpg",
      title: "Savoye",
      brand: "Vevo Max",
    },
    {
      id: 16,
      image: "/images/products/vevo-max/colorPetronas.jpg",
      title: "Petronas",
      brand: "Vevo Max",
    },
    {
      id: 17,
      image: "/images/products/vevo-max/colorCayan.jpg",
      title: "Cayan",
      brand: "Vevo Max",
    },
    {
      id: 18,
      image: "/images/products/vevo-max/colorBaymont.jpg",
      title: "Baymont",
      brand: "Vevo Max",
    },
    {
      id: 19,
      image: "/images/products/vevo-max/colorWentworth.jpg",
      title: "Wentworth",
      brand: "Vevo Max",
    },
    {
      id: 20,
      image: "/images/products/vevo-max/colorBlenheim.jpg",
      title: "Blenheim",
      brand: "Vevo Max",
    },
    {
      id: 21,
      image: "/images/products/vevo-max/colorBuckingham.jpg",
      title: "Buckingham",
      brand: "Vevo Max",
    },
    {
      id: 22,
      image: "/images/products/vevo-max/colorFlorence.jpg",
      title: "Florence",
      brand: "Vevo Max",
    },
  ]);

  const filteredProducts = useMemo(() => {
    return products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]);

  const totalItems = filteredProducts.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-lg bg-muted px-4 py-2 text-muted-foreground"
        />
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {paginatedProducts.map((product) => (
          <div
            key={product.id}
            className="rounded-lg bg-background shadow-sm transition-all hover:shadow-md"
          >
            <Link href="#" className="block" prefetch={false}>
              <img
                src={product.image}
                alt={product.title}
                width={400}
                height={300}
                className="h-60 w-full rounded-t-lg object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-base font-semibold">
                    {product.brand}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage > 1) handlePageChange(currentPage - 1);
                }}
              />
            </PaginationItem>
            {[...Array(totalPages)].map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  href="#"
                  isActive={currentPage === index + 1}
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(index + 1);
                  }}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage < totalPages)
                    handlePageChange(currentPage + 1);
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
