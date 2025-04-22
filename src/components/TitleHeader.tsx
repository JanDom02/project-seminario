import React from "react";
// import { TitleHeaderStyles } from "@/styles/titleHeaderStyles";

// type Styles = typeof TitleHeaderStyles

type TituloProps = {
    title: string
    subtitle: string
}
export default function TituloHeader({title, subtitle}:TituloProps) {
    return (
        <div className="flex flex-col items-center justify-center" >
            <h1 className="text-2xl text-black font-bold">
                {title}
            </h1> <span className="text-lg font-thin text-black">{subtitle}</span>
        </div>
    );

}
