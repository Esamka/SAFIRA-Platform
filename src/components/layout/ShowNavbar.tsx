 "use client";
 
 import { usePathname } from "next/navigation";
 import { Navbar } from "@/components/layout/Navbar";
 
 export function ShowNavbar() {
   const pathname = usePathname();
   if (pathname === "/sign-in") {
     return null;
   }
   return <Navbar />;
 }
