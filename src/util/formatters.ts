import moment from "moment";

export const largeNumberFormatter = (n: number): string => {
    return Math.abs(n) > 999
        ? (Math.sign(n) * (Math.abs(n) / 1000)).toFixed(1) + "k"
        : (Math.sign(n) * Math.abs(n)).toString();
};

moment.updateLocale("en", {
    relativeTime: {
        s: "just now",
        ss: "%ds",
        m: "1m",
        mm: "%dm",
        h: "1h",
        hh: "%dh",
        d: "1d",
        dd: "%dd",
        w: "1w",
        M: "1m",
        MM: "%dm",
        y: "1y",
        yy: "%dy",
    },
});

export const relativeDateTimeFormatter = (utc: number): string => {
    const formattedString = moment(utc * 1000).fromNow(true);
    return formattedString === "just now"
        ? formattedString
        : formattedString + " ago";
};

export const pluralFormatter = (n: number, singular: string, plural: string) =>
    Math.abs(n) == 1 ? `${n} ${singular}` : `${n} ${plural}`;
