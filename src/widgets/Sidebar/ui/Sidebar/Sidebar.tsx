import { useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher/ui/ThemeSwitcher";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
   className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
   const [collapsed, setCollapsed] = useState(false);

   const onToggle = () => {
      setCollapsed((prev) => !prev);
   };

   return (
      <div
         className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
            className,
         ])}
      >
         <button onClick={onToggle}>togg</button>
         <div className={cls.swithers}>
            <ThemeSwitcher />
            <LangSwitcher className={cls.lang} />
         </div>
      </div>
   );
};
