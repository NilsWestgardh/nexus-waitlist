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
              <LoadingBar section={props.section} progressMessage="LOADING" completeMessage={props.section} />
              <Typography
                variant="h3"
                component="h3"
                color="primary"
                className=""
              >
                {props.headline}
              </Typography>
              <Typography
                variant="subtitle1"
                color="primary.contrastText"
                className="font-light text-slate-400"
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