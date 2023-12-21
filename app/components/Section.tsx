import { Box, Button, Chip, Typography } from "@mui/material";
import Image from 'next/image';
import clsx from "clsx";
import Link from "next/link";

type SectionProps = {
    props: {
        reverse: boolean;
        section: string;
        headline: string;
        body: string;
        image: string;
        alt: string;
        caption: string;
        showCta: boolean;
        cta: string;
        link: string;
    }
};

export default function Section({ props }: SectionProps) {
    const showCta = props.showCta && props.cta && props.link;

    return (
        <Box className="flex flex-col justify-center md:justify-start w-full my-12 md:my-24 px-6 md:px-0">
          {/* TEXT CONTENT */}
          <Box className={clsx(
            "w-full justify-center items-center md:items-start md:justify-between gap-12",
            `${props.reverse ? "flex flex-col md:flex-row-reverse" : " flex flex-col md:flex-row"}`
        )}>
            <Box className="flex flex-col w-full">
            <Typography
                variant="overline"
                color="secondary"
                className="w-full mb-2"
              >
                {props.section}
              </Typography>
              <Typography
                variant="h2"
                color="primary"
                className="w-full mb-4"
              >
                {props.headline}
              </Typography>
              <Typography
                variant="body1"
                className="w-full text-slate-400"
              >
                {props.body}
              </Typography>
              <Typography
                variant="overline"
                color="primary"
                className="w-full"
              >
                
              </Typography>

              {showCta && (<Link href={props.link} passHref target="_blank">
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  className="mt-4 rounded-full hover:shadow-md hover:shadow-lime-800"
                >
                  {props.cta}
                </Button>
              </Link>)}
            </Box>
            {/* IMAGE */}
            <Box className="w-full overflow-hidden rounded-lg" sx={{ position: 'relative' }}>
              <Box className="aspect-ratio-box" sx={{ width: '100%', height: 0, paddingBottom: '100%', position: 'relative' }}>
                <Box sx={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 }}>
                  <Image
                    src={`/images/` + props.image}
                    alt={props.alt}
                    fill={true}
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                  <Typography variant="overline" className="text-md">
                      {props.caption}
                  </Typography>
                </Box>
              </Box>
            </Box>
            
          </Box>
        </Box>
    )
}