import { cache } from "react";
import type { Messages } from "@/app/lib/i18n/dictionaries";
import { COP_PER_USD } from "./currency";
import {
  Briefcase,
  Calculator,
  Headphones,
  PenLine,
  ShoppingCart,
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
  custom?: { description: string; features: string[] };
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
        starterPrice: Math.round(164 * COP_PER_USD),
        proPrice: Math.round(220 * COP_PER_USD),
        featured: true,
      },
      {
        slug: "asesor-comercial-ia",
        icon: Headphones,
        starterPrice: 99900,
        proPrice: 169900,
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
        starterPrice: 449900,
        proPrice: 599000,
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
];

export const minStarterPrice = Math.min(
  ...categoriesMeta.flatMap((category) =>
    category.employees.map((employee) => employee.starterPrice),
  ),
);

export const minProPrice = Math.min(
  ...categoriesMeta.flatMap((category) =>
    category.employees.map((employee) => employee.proPrice),
  ),
);

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
      const contentMeta = content as {
        proBadge?: string;
        disclaimer?: string;
        custom?: { description?: string; features?: string[] };
      };
      const custom = contentMeta.custom;
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
        proBadge: contentMeta.proBadge,
        disclaimer: contentMeta.disclaimer,
        custom:
          custom && custom.features
            ? {
                description: custom.description ?? "",
                features: custom.features,
              }
            : undefined,
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