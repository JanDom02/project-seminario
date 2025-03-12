import React from "react";
// import { TitleHeaderStyles } from "@/styles/titleHeaderStyles";

// type Styles = typeof TitleHeaderStyles

type TituloProps = {
    title: string
    subtitle: string
}

export default function TituloHeader({title, subtitle}:TituloProps) {
    return (
        <div>
            <h1>
                {title}
            </h1> <span>{subtitle}</span>
        </div>
    );

}