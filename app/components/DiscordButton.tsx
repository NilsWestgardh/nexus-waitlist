import Button from '@mui/material/Button';
import Link from 'next/link';

export default function DiscordButton() {
    const discordInviteLink = "https://discord.gg/wVtZJuxfQN";

    return (
        <Link href={discordInviteLink} passHref target="_blank">
            <Button
                variant="outlined"
                color="primary"
                size="large"
                className="rounded-full hover:shadow-md hover:shadow-black"
                sx={{ height: 48, width: "auto" }}
            >
                Join the Discord!
            </Button>
        </Link>
    );
}