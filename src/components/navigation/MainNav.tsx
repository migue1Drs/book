"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";  
import { VALID_AREAS } from "../../lib/constants";

export default function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="bg-slate-800 shadow">
      <div className="max-w-6xl mx-auto flex gap-6 p-4">
        {VALID_AREAS.map((area) => {
          const isActive = pathname === `/api/${area}`;
          return (
            <Link
              key={area}
              href={`/api/${area}`}
              className={`capitalize border-b-2 font-medium bg-slate-700 px-8 py-2 rounded-2xl ${
                isActive
                  ? "text-blue-400  border-blue-600"
                  : "text-gray-400  border-blue-400/50"
              }`}
            >
              {area}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}