import { cache } from "react";
import type { Messages } from "@/app/lib/i18n/dictionaries";
import {
  Briefcase,
  Calculator,
  Headphones,
  Megaphone,
  PenLine,
  ShoppingCart,
  SlidersHorizontal,
  Video,
  Wrench,
  type IconComponent,
} from "./components/icons";

export type Employee = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  idealFor: string;
  skills: string[];
  starterFeatures: string[];
  proFeatures: string[];
  starterPrice: number;
  proPrice: number;
  icon: IconComponent;
  featured?: boolean;
  proBadge?: string;
  disclaimer?: string;
};

export type Category = {
  id: string;
  name: string;
  description: string;
  employees: Employee[];
};

type EmployeeMeta = {
  slug: string;
  icon: IconComponent;
  starterPrice: number;
  proPrice: number;
  featured?: boolean;
};

type CategoryMeta = {
  id: string;
  employees: EmployeeMeta[];
};

export const categoriesMeta: CategoryMeta[] = [
  {
    id: "ventas",
    employees: [
      {
        slug: "b2b-ia",
        icon: Briefcase,
        starterPrice: 199900,
        proPrice: 499900,
        featured: true,
      },
      {
        slug: "asesor-comercial-ia",
        icon: Headphones,
        starterPrice: 49900,
        proPrice: 89900,
      },
    ],
  },
  {
    id: "marketing",
    employees: [
      {
        slug: "marketing-ia",
        icon: Megaphone,
        starterPrice: 199900,
        proPrice: 349900,
      },
    ],
  },
  {
    id: "contenido",
    employees: [
      {
        slug: "tiktok-autopilot-ia",
        icon: Video,
        starterPrice: 89900,
        proPrice: 499900,
        featured: true,
      },
    ],
  },
  {
    id: "legal",
    employees: [
      {
        slug: "abogado-ia",
        icon: PenLine,
        starterPrice: 49900,
        proPrice: 89900,
      },
    ],
  },
  {
    id: "finanzas",
    employees: [
      {
        slug: "financiero-ia",
        icon: Calculator,
        starterPrice: 49900,
        proPrice: 89900,
      },
    ],
  },
  {
    id: "ecommerce",
    employees: [
      {
        slug: "ecommerce-ia",
        icon: ShoppingCart,
        starterPrice: 89900,
        proPrice: 189900,
      },
    ],
  },
  {
    id: "operaciones",
    employees: [
      {
        slug: "referencista-ia",
        icon: Wrench,
        starterPrice: 149900,
        proPrice: 349900,
      },
    ],
  },
  {
    id: "autoservicio",
    employees: [
      {
        slug: "agente-autoconfigurable",
        icon: SlidersHorizontal,
        starterPrice: 9900,
        proPrice: 49900,
        featured: true,
      },
    ],
  },
];

export const allEmployeeSlugs: string[] = categoriesMeta.flatMap((category) =>
  category.employees.map((employee) => employee.slug),
);

export const getCategories = cache(function getCategories(
  dict: Messages,
): Category[] {
  return categoriesMeta.map((meta) => {
    const categoryContent = dict.catalog.categories[
      meta.id as keyof Messages["catalog"]["categories"]
    ];

    const employees: Employee[] = meta.employees.map((m) => {
      const content = dict.catalog.employees[
        m.slug as keyof Messages["catalog"]["employees"]
      ];
      return {
        slug: m.slug,
        name: content.name,
        tagline: content.tagline,
        description: content.description,
        idealFor: content.idealFor,
        skills: content.skills,
        starterFeatures: content.starterFeatures,
        proFeatures: content.proFeatures,
        starterPrice: m.starterPrice,
        proPrice: m.proPrice,
        icon: m.icon,
        featured: m.featured,
        proBadge: (content as { proBadge?: string }).proBadge,
        disclaimer: (content as { disclaimer?: string }).disclaimer,
      };
    });

    return {
      id: meta.id,
      name: categoryContent.name,
      description: categoryContent.description,
      employees,
    };
  });
});

export function findEmployee(
  categories: Category[],
  slug: string,
): Employee | undefined {
  for (const category of categories) {
    const employee = category.employees.find((e) => e.slug === slug);
    if (employee) return employee;
  }
  return undefined;
}

export function findCategory(
  categories: Category[],
  employee: Employee,
): Category | undefined {
  return categories.find((category) =>
    category.employees.some((e) => e.slug === employee.slug),
  );
}