import { Box } from "@mui/material";
import Image from 'next/image';

type FullWidthImageProps = {
    url: string;
    alt: string;
};

export default function FullWidthImage(props: FullWidthImageProps) {
    return (
        <Box className="w-full py-24 overflow-hidden hidden md:block" sx={{ position: "relative", height: 400 }}>
            <Image
                src={`/images/${props.url}`}
                fill={true}
                alt={props.alt}
                style={{
                    objectFit: 'cover',
                }}
            />
        </Box>
    )
}