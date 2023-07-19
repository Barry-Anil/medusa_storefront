import { useEffect, useState, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const HydrationZustand: React.FC<Props> = ({ children }) => {
  const [isHydrated, setIsHydrated] = useState<boolean>(false);

  // Wait until Next.js rehydration completes
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <>{isHydrated ? <div>{children}</div> : null}</>
  );
};

export default HydrationZustand;