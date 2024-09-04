import { BlockType } from "@/lib/types";
import { createContext, Dispatch, useContext, useState } from "react";

export enum SettingType {
  Global = "Global",
  Block = "Block",
}

interface Setting {
  componentId?: string;
  type: SettingType;
  blockType?: BlockType;
}

interface SettingContextType {
  setting: Setting;
  setSetting: Dispatch<React.SetStateAction<Setting>>;
}

const SettingContext = createContext<SettingContextType>({
  setting: {
    type: SettingType.Global,
  },
  setSetting: () => {},
});

interface ContextProviderProps {
  children: React.ReactNode;
}

export const SettingProvider = ({ children }: ContextProviderProps) => {
  const [setting, setSetting] = useState<Setting>({
    type: SettingType.Global,
  });

  return (
    <SettingContext.Provider
      value={{
        setting,
        setSetting,
      }}
    >
      {children}
    </SettingContext.Provider>
  );
};

export const useSettingContext = () => {
  return useContext(SettingContext);
};
