import DescriptionIcon from "@mui/icons-material/Description";

import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

import { type Navigation } from "@toolpad/core/AppProvider";

export const NAVIGATION: Navigation = [
  {
    kind: "header",
    title: "Main Menu",
  },
  {
    segment: "admin",
    title: "Dashboard",
    icon: <DashboardIcon fontSize="small" />,
  },
  {
    segment: "admin/ecommerce",
    title: "E-Commerce",
    icon: <ShoppingBasketIcon fontSize="small" />,
    children: [
      {
        segment: "products",
        title: "Products",
        icon: <DescriptionIcon fontSize="small" />,
      },
    ],
  },

  {
    kind: "divider",
  },
];
