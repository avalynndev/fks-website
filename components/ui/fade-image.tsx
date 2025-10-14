"use client";

import Image, { ImageProps } from "next/image";
import React from "react";

type FadeImageProps = ImageProps & {
    enableSkeleton?: boolean;
    fadeDurationMs?: number;
};

export default function FadeImage({
    className,
    enableSkeleton = true,
    fadeDurationMs = 700,
    ...props
}: FadeImageProps) {
    const [isLoaded, setIsLoaded] = React.useState(false);

    const transitionClasses = `transition-opacity duration-[${fadeDurationMs}ms] ${isLoaded ? "opacity-100" : "opacity-0"
        }`;

    return (
        <>
            <Image
                {...props}
                className={className ? `${className} ${transitionClasses}` : transitionClasses}
                onLoad={(e) => {
                    setIsLoaded(true);
                    if (props.onLoad) props.onLoad(e);
                }}
            />
        </>
    );
}


