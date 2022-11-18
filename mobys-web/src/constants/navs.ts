import i18n from "i18n";
import { UserRole } from "./statuses";

const NAVS: any[] = [
  {
    icon: "dashboard-line",
    to: "/",
    name: "Gösterge Paneli",
  },
  {
    section: "Tanımlar",
  },
  {
    icon: "group-line",
    to: "/customers",
    name: "Müşteriler",
    roles: [UserRole.SUPPLIER],
  },
  {
    icon: "building-2-line",
    to: "/suppliers",
    name: "Tedarikçiler",
    roles: [UserRole.SUPPLIER, UserRole.CUSTOMER],
  },
  {
    icon: "layout-grid-line",
    to: "/products",
    name: "Ürünler",
    roles: [UserRole.SUPPLIER, UserRole.CUSTOMER],
  },
  {
    section: "Yönetim",
  },
  {
    icon: "bill-line",
    to: "/invoices",
    name: "Faturalar",
    roles: [UserRole.SUPPLIER, UserRole.CUSTOMER],
  },
  {
    icon: "shopping-basket-line",
    to: "/orders",
    name: "Siparişler",
    roles: [UserRole.SUPPLIER, UserRole.CUSTOMER],
  },
  {
    section: "Anazlizler",
    roles: [UserRole.SUPPLIER],
  },
  {
    icon: "pie-chart-line",
    name: "Raporlar",
    menu: [
      {
        to: "/",
        name: "Stok Raporları",
      },
      {
        to: "/",
        name: "Satış Raporları",
      },
    ],
    roles: [UserRole.SUPPLIER],
  },
  {
    icon: "bar-chart-2-line",
    name: "İstatistikler",
    menu: [
      {
        icon: "home-fill",
        to: "/",
        name: "Stok İstatistikleri",
      },
      {
        icon: "home-fill",
        to: "/",
        name: "Satış İstatistikleri",
      },
    ],
    roles: [UserRole.SUPPLIER],
  },
  {
    section: "Ayarlar",
  },
  {
    icon: "settings-2-line",
    to: "/",
    name: "Tedarikçi Ayarları",
    roles: [UserRole.SUPPLIER],
  },
  {
    icon: "settings-2-line",
    to: "/",
    name: "Müşteri Ayarları",
    roles: [UserRole.CUSTOMER],
  },
];

export default NAVS;
