import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Route, Home, Truck, Plus, ArrowLeftRight, QrCode } from "lucide-react"; //Construction a remttre si besoin
import React from "react";
interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function NavBar({ className }: SidebarProps) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">

        <div className="px-3 py-2">
          <div className="space-y-1">
            <Link href="/" passHref>
              <Button variant="ghost" className="w-full justify-start">
                <Home className="mr-2 h-4 w-4" />
                Home
              </Button>
            </Link>
            <Link href="/trade" passHref>
              <Button variant="ghost" className="w-full justify-start">
                <ArrowLeftRight className="mr-2 h-4 w-4" />
                Trade
              </Button>
            </Link>
            </div>
            </div>
      </div>
    </div>
  );
}