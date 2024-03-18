import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import Waves from "vanta/dist/vanta.waves.min";

const useVanta = () => {
  const myRefDiv = useRef(null);
  const [vanta, setVanta] = useState(0);

  useEffect(() => {
    if (!vanta) {
      setVanta(
        Waves({
          THREE,
          el: myRefDiv.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 0,
          minWidth: 0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xb65634,
        })
      );
    }
    return () => {
      if (vanta) {
        vanta.destroy();
      }
    };
  }, [vanta]);

  return myRefDiv;
};

export default useVanta;
