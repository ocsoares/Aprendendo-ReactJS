import { PropsWithChildren, createContext, useCallback, useState } from "react";

export interface ISidebarContextData {
  isSidebarOpen: boolean;
  toggleSidebarOpen: () => void;
}
export const SidebarContext = createContext<ISidebarContextData>(
  {} as ISidebarContextData,
);

export const SidebarProvider = ({ children }: PropsWithChildren) => {
  // A Sidebar vai Começar FECHADA !!!
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebarOpen = useCallback(() => {
    // Se estiver ABERTA, irá FECHAR, se estiver FECHADO, irá ABRIR !!
    setIsSidebarOpen((oldSidebarOpen) => (oldSidebarOpen ? false : true));
  }, []);

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebarOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};
