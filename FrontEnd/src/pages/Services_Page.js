import Services from "../Components/Services/Services";
import { useEffect } from "react";

export default function ServicesPage(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return<Services/>
}