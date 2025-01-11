import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { useAuthStore } from "@/store/useAuthStore";

export const withAuth = (WrappedComponent: React.ComponentType) => {
  return function WithAuthComponent(props: any) {
    const router = useRouter();
    const [mounted, setMounted] = useState(false);
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

    useEffect(() => {
      setMounted(true);
    }, []);

    useEffect(() => {
      if (mounted && !isAuthenticated) {
        router.replace("/");
      }
    }, [isAuthenticated, mounted]);

    return isAuthenticated ? <WrappedComponent {...props} /> : null;
  };
};
