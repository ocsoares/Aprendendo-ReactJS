import { useContext } from "react";
import {
  ISidebarContextData,
  SidebarContext,
} from "../contexts/SidebarContext";

export const useSidebar = (): ISidebarContextData => {
  const context = useContext(SidebarContext);

  return context;
};
