import { useEffect, useRef, useState } from "react";

type IntersectionObserverOptions = {
  root?: HTMLElement | null;
  rootMargin?: string;
  threshold?: number | number[];
};

type UseIntersectionObserverResult = [React.RefObject<HTMLDivElement>, boolean];

const useIntersectionObserver = (
  options: IntersectionObserverOptions
): UseIntersectionObserverResult => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [options]);

  return [targetRef, isIntersecting];
};

export default useIntersectionObserver;
