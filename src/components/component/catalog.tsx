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

export function Catalog() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [searchTerm, setSearchTerm] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [products, setProducts] = useState([
    {
      id: 1,
      image: "/placeholder.svg",
      title: "Stylish Sunglasses",
      description: "UV protection",
      price: 29.99,
    },
    {
      id: 2,
      image: "/placeholder.svg",
      title: "Leather Crossbody Bag",
      description: "Stylish and practical",
      price: 49.99,
    },
    {
      id: 3,
      image: "/placeholder.svg",
      title: "Wireless Headphones",
      description: "High-quality sound",
      price: 79.99,
    },
    {
      id: 4,
      image: "/placeholder.svg",
      title: "Classic Wristwatch",
      description: "Timeless design",
      price: 59.99,
    },
    {
      id: 5,
      image: "/placeholder.svg",
      title: "Cozy Blanket",
      description: "Warm and Soft for Chilly Nights",
      price: 29.99,
    },
    {
      id: 6,
      image: "/placeholder.svg",
      title: "Autumn Mug",
      description: "Enjoy Your Hot Beverages in Style",
      price: 12.99,
    },
    {
      id: 7,
      image: "/placeholder.svg",
      title: "Fall Fragrance Candle",
      description: "Fill Your Space with a Cozy Scent",
      price: 16.99,
    },
    {
      id: 8,
      image: "/placeholder.svg",
      title: "Autumn Leaves Wall Art",
      description: "Decorate Your Space with Nature's Beauty",
      price: 39.99,
    },
  ]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]);
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
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="rounded-lg bg-background shadow-sm transition-all hover:shadow-md"
          >
            <Link href="#" className="block" prefetch={false}>
              <img
                src="/placeholder.svg"
                alt={product.title}
                width={400}
                height={300}
                className="h-60 w-full rounded-t-lg object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {product.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-base font-semibold">
                    ${product.price.toFixed(2)}
                  </span>
                  <Button variant="outline" size="sm">
                    Add to Cart
                  </Button>
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
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
