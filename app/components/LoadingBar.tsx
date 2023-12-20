import { useEffect, useState } from 'react';

type LoadingBarProps = {
    section: string;
    progressMessage: string;
    completeMessage: string;
};

export default function LoadingBar({ section, progressMessage, completeMessage }: LoadingBarProps) {
    const [progress, setProgress] = useState(0);
    const [hideBar, setHideBar] = useState(false);
    const totalCharacters = 20;

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((oldProgress) => {
                const newProgress = Math.min(oldProgress + 5, 100);
                if (newProgress === 100) {
                    clearInterval(interval);
                    setTimeout(() => setHideBar(true), 1500);
                }
                return newProgress;
            });
        }, 100);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const loadedCharacters = Math.ceil((progress / 100) * totalCharacters);
    const unloadedCharacters = totalCharacters - loadedCharacters;
    const loadedBar = '█'.repeat(loadedCharacters);
    const unloadedBar = '░'.repeat(unloadedCharacters);

    return (
        <div className="flex items-center w-full h-6 font-mono text-sm initial-hidden">
            {!hideBar ? (
                <>
                    <span className="text-lime-500">{progressMessage} {section} [</span>
                    <span className="text-lime-500">{loadedBar}</span>
                    <span className="text-lime-900">{unloadedBar}</span>
                    <span className="text-lime-500">] {progress}%</span>
                </>
            ) : (
                <span className="text-lime-500">{completeMessage}</span>
            )}
        </div>
    );
};