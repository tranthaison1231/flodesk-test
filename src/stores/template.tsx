import { Template } from "@/lib/types";
import { createContext, Dispatch, useContext, useState } from "react";

interface TemplateContextType {
  template: Template;
  setTemplate: Dispatch<React.SetStateAction<Template>>;
}

const TemplateContext = createContext<TemplateContextType>({
  template: {} as Template,
  setTemplate: () => {},
});

interface ContextProviderProps {
  children: React.ReactNode;
  initialTemplate: Template;
}

export const TemplateProvider = ({
  children,
  initialTemplate,
}: ContextProviderProps) => {
  const [template, setTemplate] = useState(initialTemplate);

  return (
    <TemplateContext.Provider
      value={{
        template,
        setTemplate,
      }}
    >
      {children}
    </TemplateContext.Provider>
  );
};

export const useTemplateContext = () => {
  return useContext(TemplateContext);
};
