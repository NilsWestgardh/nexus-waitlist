import { useEffect, useState } from 'react';

type LoadingBarProps = {
    progressMessage: string;
    completeMessage: string;
};

export default function LoadingBar({ progressMessage, completeMessage }: LoadingBarProps) {
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
        <div className="flex flex-col md:flex-row items-center w-full h-6 font-mono text-sm">
            {!hideBar ? (
                <>
                    <div className="flex items-center justify-center w-full">
                        <span className="text-lime-500">{progressMessage} [</span>
                        <span className="text-lime-500">{loadedBar}</span>
                        <span className="text-lime-900">{unloadedBar}</span>
                        <span className="text-lime-500">] {progress}%</span>
                    </div>
                    
                </>
            ) : (
                <span className="text-lime-500">{completeMessage}</span>
            )}
        </div>
    );
};