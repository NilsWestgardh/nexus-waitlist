import { Box, Typography } from "@mui/material";
import Image from 'next/image';
import clsx from "clsx";

type SectionProps = {
    props: {
        reverse: boolean;
        section: string;
        headline: string;
        body: string;
        image: string;
    }
};

export default function Section({ props }: SectionProps) {
    return (
        <Box className="flex flex-col w-full my-24">
          <Box className={clsx(
            "w-full justify-center items-center md:items-start md:justify-between gap-12 mx-6 md:mx-0",
            `${props.reverse ? "flex flex-col md:flex-row-reverse" : " flex flex-col md:flex-row"}`
        )}>
            <Box className="flex flex-col w-full space-y-0 md:space-y-6">
            <Typography
                variant="overline"
                color="secondary"
                className="w-full"
              >
                {props.section}
              </Typography>
              <Typography
                variant="h2"
                color="primary"
                className="w-full"
              >
                {props.headline}
              </Typography>
              <Typography
                variant="body1"
                className="w-full text-slate-400"
              >
                {props.body}
              </Typography>
            </Box>
            <Image
              src={`/images/` + props.image}
              alt="USP image"
              width={500}
              height={500}
              style={{
                objectFit: "cover",
                borderRadius: "2.5%",
              }}
            />
          </Box>
        </Box>
    )
}