import { useMediaQuery } from "@react-hookz/web";

// Check whether the current screen is a mobile or not
export const useMobile = () => useMediaQuery("(max-width: 767px)");

// Check whether the current screen is a mobile to tablet or not
export const useTablet = () => useMediaQuery("(min-width: 100px) and (max-width: 1180px)");