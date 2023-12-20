import { Box, Typography } from "@mui/material";
import Image from 'next/image';
import clsx from "clsx";
import LoadingBar from "./LoadingBar";

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
            "w-full justify-center items-center md:items-start md:justify-between gap-12",
            `${props.reverse ? "flex flex-col md:flex-row-reverse" : " flex flex-col md:flex-row"}`
        )}>
            <Box className="flex flex-col w-full space-y-0 md:space-y-6">
            <Typography
                variant="overline"
                color="secondary"
              >
                {props.section}
              </Typography>
              <Typography
                variant="h2"
                color="primary"
              >
                {props.headline}
              </Typography>
              <Typography
                variant="body1"
                className="text-slate-400"
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