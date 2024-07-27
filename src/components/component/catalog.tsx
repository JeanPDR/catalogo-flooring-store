"use client";

import { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import Link from "next/link";
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
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState<null | {
    id: number;
    newImage: string;
    title: string;
  }>(null);

  const [products, setProducts] = useState([
    {
      id: 1,
      image: "/images/products/durato/colorWillow.jpg",
      newImage: "/images/rooms/durawood/roomWillow.jpg",
      title: "Willow",
      brand: "Durawood",
    },
    {
      id: 2,
      image: "/images/products/durato/colorRowan.jpg",
      newImage: "/images/rooms/durawood/roomRowan.jpg",
      title: "Rowan",
      brand: "Durawood",
    },
    {
      id: 3,
      image: "/images/products/durato/colorMulberry.jpg",
      newImage: "/images/rooms/durawood/roomMulberry.jpg",
      title: "Mulberry",
      brand: "Durawood",
    },
    {
      id: 4,
      image: "/images/products/durato/colorLaurel.jpg",
      newImage: "/images/rooms/durawood/roomLaurel.jpg",
      title: "Laurel",
      brand: "Durawood",
    },
    {
      id: 5,
      image: "/images/products/durato/colorHawthorn.jpg",
      newImage: "/images/rooms/durawood/roomHawthorn.jpg",
      title: "Hawthorn",
      brand: "Durawood",
    },
    {
      id: 6,
      image: "/images/products/durato/colorCypress.jpg",
      newImage: "/images/rooms/durawood/roomCypress.jpg",
      title: "Cypress",
      brand: "Durawood",
    },
    {
      id: 7,
      image: "/images/products/durato/colorBalsa.jpg",
      newImage: "/images/rooms/durawood/roomBalsa.jpg",
      title: "Balsa",
      brand: "Durawood",
    },
    {
      id: 8,
      image: "/images/products/durato/colorAlder.jpg",
      newImage: "/images/rooms/durawood/roomAlder.jpg",
      title: "Alder",
      brand: "Durawood",
    },
    {
      id: 9,
      image: "/images/products/durato/colorTeak.jpg",
      newImage: "/images/rooms/durawood/roomTeak.jpg",
      title: "Teak",
      brand: "Durawood",
    },
    {
      id: 10,
      image: "/images/products/durato/colorTamarind.jpg",
      newImage: "/images/rooms/durawood/roomTamarind.jpg",
      title: "Tamarind",
      brand: "Durawood",
    },
    {
      id: 11,
      image: "/images/products/vevo-max/colorWoolworth.jpg",
      newImage: "/images/rooms/vevo-max/roomWoolworth.jpg",
      title: "Woolworth",
      brand: "Vevo Max",
    },
    {
      id: 12,
      image: "/images/products/vevo-max/colorDresden.jpg",
      newImage: "/images/rooms/vevo-max/roomDresden.jpg",
      title: "Dresden",
      brand: "Vevo Max",
    },
    {
      id: 13,
      image: "/images/products/vevo-max/colorSistine.jpg",
      newImage: "/images/rooms/vevo-max/roomSistine.jpg",
      title: "Sistine",
      brand: "Vevo Max",
    },
    {
      id: 14,
      image: "/images/products/vevo-max/colorGherkin.jpg",
      newImage: "/images/rooms/vevo-max/roomGherkin.jpg",
      title: "Gherkin",
      brand: "Vevo Max",
    },
    {
      id: 15,
      image: "/images/products/vevo-max/colorSavoye.jpg",
      newImage: "/images/rooms/vevo-max/roomSavoye.jpg",
      title: "Savoye",
      brand: "Vevo Max",
    },
    {
      id: 16,
      image: "/images/products/vevo-max/colorPetronas.jpg",
      newImage: "/images/rooms/vevo-max/roomPetronas.jpg",
      title: "Petronas",
      brand: "Vevo Max",
    },
    {
      id: 17,
      image: "/images/products/vevo-max/colorCayan.jpg",
      newImage: "/images/rooms/vevo-max/roomCayan.jpg",
      title: "Cayan",
      brand: "Vevo Max",
    },
    {
      id: 18,
      image: "/images/products/vevo-max/colorBaymont.jpg",
      newImage: "/images/rooms/vevo-max/roomBaymont.jpg",
      title: "Baymont",
      brand: "Vevo Max",
    },
    {
      id: 19,
      image: "/images/products/vevo-max/colorWentworth.jpg",
      newImage: "/images/rooms/vevo-max/roomWentworth.jpg",
      title: "Wentworth",
      brand: "Vevo Max",
    },
    {
      id: 20,
      image: "/images/products/vevo-max/colorBlenheim.jpg",
      newImage: "/images/rooms/vevo-max/roomBlenheim.jpeg",
      title: "Blenheim",
      brand: "Vevo Max",
    },
    {
      id: 21,
      image: "/images/products/vevo-max/colorBuckingham.jpg",
      newImage: "/images/rooms/vevo-max/roomBuckingham.jpg",
      title: "Buckingham",
      brand: "Vevo Max",
    },
    {
      id: 22,
      image: "/images/products/vevo-max/colorFlorence.jpg",
      newImage: "/images/rooms/vevo-max/roomFlorence.jpg",
      title: "Florence",
      brand: "Vevo Max",
    },
    {
      id: 23,
      image: "/images/products/vevo-xl/colorSeaSalt.jpg",
      newImage: "/images/rooms/vevo xl/roomSeaSalt.jpg",
      title: "SeaSalt",
      brand: "Vevo XL",
    },
    {
      id: 24,
      image: "/images/products/vevo-xl/colorOyster.jpg",
      newImage: "/images/rooms/vevo xl/roomOyster.jpg",
      title: "Oyster",
      brand: "Vevo XL",
    },
    {
      id: 25,
      image: "/images/products/vevo-xl/colorPorcini.jpg",
      newImage: "/images/rooms/vevo xl/roomPorcini.jpg",
      title: "Porcini",
      brand: "Vevo XL",
    },
    {
      id: 26,
      image: "/images/products/vevo-xl/colorOat.jpg",
      newImage: "/images/rooms/vevo xl/roomOat.jpg",
      title: "Oat",
      brand: "Vevo XL",
    },
    {
      id: 27,
      image: "/images/products/vevo-xl/colorCaramel.jpg",
      newImage: "/images/rooms/vevo xl/roomCaramel.jpg",
      title: "Caramel",
      brand: "Vevo XL",
    },
    {
      id: 28,
      image: "/images/products/vevo-xl/colorBiscotti.jpg",
      newImage: "/images/rooms/vevo xl/roomBiscotti.jpg",
      title: "Biscotti",
      brand: "Vevo XL",
    },
    {
      id: 29,
      image: "/images/products/vevo-xl/colorMaple.jpg",
      newImage: "/images/rooms/vevo xl/roomMaple.jpg",
      title: "Maple",
      brand: "Vevo XL",
    },
    {
      id: 30,
      image: "/images/products/vevo-xl/colorBonbon.jpg",
      newImage: "/images/rooms/vevo xl/roomBonbon.jpg",
      title: "Bonbon",
      brand: "Vevo XL",
    },
    {
      id: 31,
      image: "/images/products/vevo-xl/colorTruffle.jpg",
      newImage: "/images/rooms/vevo xl/roomTruffle.jpg",
      title: "Truffle",
      brand: "Vevo XL",
    },
    {
      id: 32,
      image: "/images/products/vevo-xl/colorMocha.jpg",
      newImage: "/images/rooms/vevo xl/roomMocha.jpg",
      title: "Mocha",
      brand: "Vevo XL",
    },
    {
      id: 33,
      image: "/images/products/azul-tortuga/colorAmelia.jpg",
      newImage: "/images/rooms/azul-tortuga/roomAmelia.jpg",
      title: "Amelia",
      brand: "Azul Tortuga",
    },
    {
      id: 34,
      image: "/images/products/azul-tortuga/colorWhiteHaven.jpg",
      newImage: "", //Não Possui Foto no momento
      title: "White Haven",
      brand: "Azul Tortuga",
    },
    {
      id: 35,
      image: "/images/products/azul-tortuga/colorBlueSands.jpg",
      newImage: "/images/rooms/azul-tortuga/roomBlueSands.jpg",
      title: "Blue Sands",
      brand: "Azul Tortuga",
    },
    {
      id: 36,
      image: "/images/products/azul-tortuga/colorLoredo.jpg",
      newImage: "/images/rooms/azul-tortuga/roomLoredo.jpg",
      title: "Loredo",
      brand: "Azul Tortuga",
    },
    {
      id: 37,
      image: "/images/products/azul-tortuga/colorVenicebeach.jpg",
      newImage: "/images/rooms/azul-tortuga/roomVenicebeach.jpg",
      title: "Venice Beach",
      brand: "Azul Tortuga",
    },
    {
      id: 38,
      image: "/images/products/azul-tortuga/colorAntigua.jpg",
      newImage: "/images/rooms/azul-tortuga/roomAntigua.jpg",
      title: "Antigua",
      brand: "Azul Tortuga",
    },
    {
      id: 39,
      image: "/images/products/azul-tortuga/colorMancora.jpg",
      newImage: "/images/rooms/azul-tortuga/roomMancora.jpg",
      title: "Mancora",
      brand: "Azul Tortuga",
    },
    {
      id: 40,
      image: "/images/products/azul-tortuga/colorRehoboth.jpg",
      newImage: "/images/rooms/azul-tortuga/roomRehoboth.jpg",
      title: "Rehoboth",
      brand: "Azul Tortuga",
    },
    {
      id: 41,
      image: "/images/products/azul-tortuga/colorMilehigh.jpg",
      newImage: "/images/rooms/azul-tortuga/roomMilehigh.jpg",
      title: "Mile High",
      brand: "Azul Tortuga",
    },
    {
      id: 42,
      image: "/images/products/azul-tortuga/colorPalomino.jpg",
      newImage: "/images/rooms/azul-tortuga/roomPalomino.jpg",
      title: "Palomino",
      brand: "Azul Tortuga",
    },
    {
      id: 43,
      image: "/images/products/azul-tortuga/colorWildwoodcrest.jpg",
      newImage: "/images/rooms/azul-tortuga/roomWildwoodcrest.jpg",
      title: "Wild Wood Crest",
      brand: "Azul Tortuga",
    },
    {
      id: 44,
      image: "/images/products/azul-tortuga/colorSantorini.jpg",
      newImage: "/images/rooms/azul-tortuga/roomSantorini.jpg",
      title: "Santorini",
      brand: "Azul Tortuga",
    },
    {
      id: 45,
      image: "/images/products/azul-tortuga/colorCaptiva.jpg",
      newImage: "/images/rooms/azul-tortuga/roomCaptiva.jpg",
      title: "Captiva",
      brand: "Azul Tortuga",
    },
    {
      id: 46,
      image: "/images/products/azul-tortuga/colorOakwood.jpg",
      newImage: "/images/rooms/azul-tortuga/roomOakwood.jpg",
      title: "Oakwood",
      brand: "Azul Tortuga",
    },
    {
      id: 47,
      image: "/images/products/azul-tortuga/colorCannes.jpg",
      newImage: "/images/rooms/azul-tortuga/roomCannes.jpg",
      title: "Cannes",
      brand: "Azul Tortuga",
    },
    {
      id: 48,
      image: "/images/products/azul-tortuga/colorBiscayne.jpg",
      newImage: "/images/rooms/azul-tortuga/roomBiscayne.jpg",
      title: "Biscayne",
      brand: "Azul Tortuga",
    },
    {
      id: 49,
      image: "/images/products/azul-tortuga/colorGalway.jpg",
      newImage: "", //Não Possui Foto no momento
      title: "Galway",
      brand: "Azul Tortuga",
    },
    {
      id: 50,
      image: "/images/products/azul-tortuga/colorBrighton.jpg",
      newImage: "/images/rooms/azul-tortuga/roomBrighton.jpg",
      title: "Brighton",
      brand: "Azul Tortuga",
    },
    {
      id: 51,
      image: "/images/products/azul-tortuga/colorMyrtleBeach.jpg",
      newImage: "/images/rooms/azul-tortuga/roomMyrtleBeach.jpg",
      title: "Myrtle Beach",
      brand: "Azul Tortuga",
    },
    {
      id: 52,
      image: "/images/products/azul-tortuga/colorIslamorada.jpg",
      newImage: "/images/rooms/azul-tortuga/roomIslamorada.jpg",
      title: "Islamorada",
      brand: "Azul Tortuga",
    },
    {
      id: 53,
      image: "/images/products/panzu/colorSicily.jpg",
      newImage: "/images/rooms/panzu/roomSicily.jpg",
      title: "Sicily",
      brand: "Panzu",
    },
    {
      id: 54,
      image: "/images/products/panzu/colorKyoto.jpg",
      newImage: "/images/rooms/panzu/roomKyoto.jpg",
      title: "Kyoto",
      brand: "Panzu",
    },
    {
      id: 55,
      image: "/images/products/panzu/colorOslo.jpg",
      newImage: "/images/rooms/panzu/roomOslo.jpg",
      title: "Oslo",
      brand: "Panzu",
    },
    {
      id: 56,
      image: "/images/products/panzu/colorMadrid.jpg",
      newImage: "/images/rooms/panzu/roomMadrid.jpg",
      title: "Madrid",
      brand: "Panzu",
    },
    {
      id: 57,
      image: "/images/products/panzu/colorSydney.jpg",
      newImage: "/images/rooms/panzu/roomSydney.jpg",
      title: "Sydney",
      brand: "Panzu",
    },
    {
      id: 58,
      image: "/images/products/panzu/colorVenice.jpg",
      newImage: "/images/rooms/panzu/roomVenice.jpg",
      title: "Venice",
      brand: "Panzu",
    },
    {
      id: 59,
      image: "/images/products/panzu/colorCopa.jpg",
      newImage: "/images/rooms/panzu/roomCopa.jpg",
      title: "Copa",
      brand: "Panzu",
    },
    {
      id: 60,
      image: "/images/products/panzu/colorBerlin.jpg",
      newImage: "/images/rooms/panzu/roomBerlin.jpg",
      title: "Berlin",
      brand: "Panzu",
    },
    {
      id: 61,
      image: "/images/products/panzu/colorCancun.jpg",
      newImage: "/images/rooms/panzu/roomCancun.jpg",
      title: "Cancun",
      brand: "Panzu",
    },
    {
      id: 62,
      image: "/images/products/panzu/colorTulum.jpg",
      newImage: "/images/rooms/panzu/roomTulum.jpg",
      title: "Tulum",
      brand: "Panzu",
    },
    {
      id: 63,
      image: "/images/products/panzu/colorDublin.jpg",
      newImage: "/images/rooms/panzu/roomDublin.jpg",
      title: "Dublin",
      brand: "Panzu",
    },
    {
      id: 64,
      image: "/images/products/panzu/colorAmsterdam.jpg",
      newImage: "/images/rooms/panzu/roomAmsterdam.jpg",
      title: "Amsterdam",
      brand: "Panzu",
    },
  ]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get("search") || "";
    setSearchTerm(searchQuery);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && searchTerm !== "") {
      const newUrl = new URL(window.location.href);
      newUrl.searchParams.set("search", searchTerm);
      router.push(newUrl.toString());
    }
  }, [searchTerm, router]);

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

  const handleImageClick = (product: { id: number; newImage: string }) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-center mb-8">
        <a
          href="https://flooring-store.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/Transparent-Logo.avif" // Substitua pelo caminho correto para sua imagem
            alt="Search"
            className="w-36 h-[100%]"
          />
        </a>
      </div>
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
            onClick={() => handleImageClick(product)}
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
      {selectedProduct && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <div className="rounded-lg max-w-full max-h-full flex items-center justify-center">
            <img
              src={selectedProduct.newImage}
              alt="Product"
              className="w-full h-full object-contain md:max-w-[50%] md:max-h-[50%]"
            />
          </div>
        </div>
      )}
    </div>
  );
}
