import { useCallback } from 'react';
import { toRomaji } from 'wanakana';
import { KanaChar, segmentKana } from '../components/ui/cards/KanaChar';

export const useRomajiTranslation = () => {
    const renderRomaji = useCallback((japanese: string, romaji: string, inline: boolean = false) => {
        // Attempt automatic segmentation for Kana -> Romaji
        const segmentize = (jpStr: string, romStr: string) => {
            const segments: { jp: string; rom: string }[] = [];
            let currJp = jpStr;
            let currRom = romStr.toLowerCase().trim();
            const originalRom = romStr.trim();
            let romOffset = 0; // To track position in originalRom for correct casing

            while (currJp.length > 0) {
                let matched = false;
                // Try lengths 3 down to 1 (covers digraphs and small tsu)
                for (let len = Math.min(3, currJp.length); len >= 1; len--) {
                    const subJp = currJp.substring(0, len);
                    let converted = toRomaji(subJp);
                    let matchLen = 0;

                    if (currRom.startsWith(converted)) {
                        matchLen = converted.length;
                    }
                    // Handle macron mismatches (wanakana 'ou' vs user 'ō')
                    else {
                        const checkMacron = (long: string, short: string) => {
                            if (converted.endsWith(long)) {
                                const target = converted.slice(0, -long.length) + short;
                                if (currRom.startsWith(target)) {
                                    return target.length;
                                }
                            }
                            return 0;
                        };

                        matchLen = checkMacron('aa', 'ā') ||
                            checkMacron('ii', 'ī') ||
                            checkMacron('uu', 'ū') ||
                            checkMacron('ee', 'ē') ||
                            checkMacron('ou', 'ō') ||
                            checkMacron('oo', 'ō');
                    }

                    if (matchLen > 0) {
                        const matchedRom = originalRom.substring(romOffset, romOffset + matchLen);
                        segments.push({ jp: subJp, rom: matchedRom });

                        currJp = currJp.substring(len);
                        currRom = currRom.substring(matchLen);
                        romOffset += matchLen;
                        matched = true;
                        break;
                    }

                    // Fallback for "m" vs "n"
                    if (converted === 'n' && currRom.startsWith('m')) {
                        const matchedRom = originalRom.substring(romOffset, romOffset + 1);
                        segments.push({ jp: subJp, rom: matchedRom });
                        currJp = currJp.substring(len);
                        currRom = currRom.substring(1);
                        romOffset += 1;
                        matched = true;
                        break;
                    }
                }

                if (!matched) return null; // Failed to segment cleanly
            }

            if (currRom.length > 0) return null; // Leftover romaji (e.g. user provided extra text)
            return segments;
        };

        const segments = segmentize(japanese, romaji);

        const containerClass = inline
            ? "inline-flex flex-wrap items-end gap-x-1 align-bottom mx-1"
            : "flex flex-wrap items-end gap-x-1 gap-y-4 justify-center";

        if (segments) {
            return (
                <span className={containerClass}>
                    {segments.map((seg, i) => (
                        <KanaChar
                            key={i}
                            kana={seg.jp}
                            romaji={seg.rom}
                            showRomaji={true}
                            size={inline ? "sm" : "lg"}
                        />
                    ))}
                </span>
            );
        }

        const jpParts = japanese.trim().split(/\s+/);
        const romajiParts = romaji.trim().split(/\s+/);

        // If simple 1-to-1 mapping is possible via spaces
        if (jpParts.length === romajiParts.length && jpParts.length > 0) {
            return (
                <span className={containerClass}>
                    {jpParts.map((jp, i) => (
                        <KanaChar
                            key={i}
                            kana={jp}
                            romaji={romajiParts[i]}
                            showRomaji={true}
                            size={inline ? "sm" : "lg"}
                        />
                    ))}
                </span>
            );
        }

        // Default single block if no clear segmentation
        return (
            <span className={containerClass}>
                <KanaChar
                    kana={japanese}
                    romaji={romaji}
                    showRomaji={true}
                    size={inline ? "sm" : "lg"}
                />
            </span>
        );
    }, []);

    return { renderRomaji };
};

