import { Slot } from "expo-router";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { authStore } from "@/stores/authStore";
import { usePathname, router } from "expo-router";
import "../global.css";
const RootLayout = observer(() => {
  const pathname = usePathname();
  console.log(pathname);

  useEffect(() => {
    const checkAuth = async () => {
      const isAuth = await authStore.checkAuth();
      if (!isAuth && pathname === "/list") {
        router.replace("/");
      }
    };
    checkAuth();
  }, [pathname]);

  return <Slot />;
});

export default RootLayout;
