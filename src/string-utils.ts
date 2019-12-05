const TRUE_STRINGS: string[] = [
    "true", "on", "yes", "enabled", "active", "1",
];

export class StringUtils {

    /**
     * Checks if a string is blank, null, or undefined
     * @param str The string to test
     */
    public static isBlank(str: string | null | undefined): boolean {
        return (str === undefined || str === null || /^\s*$/.test(str));
    }

    /**
     * Splits up a string based on title casing
     * Example: ThisIsASmushedString => [this, is, a, smushed, string]
     * Example 2: ThisIs A LongString => [This, Is , A , Long, String]
     * @param str The string to split up
     */
    public static splitCompressedTitle(str: string): string[] {
        const match = str.match(/([A-Z]?[^A-Z]*)/g);
        if (match === null) { return []; }
        const split = match.slice(0, -1);
        return split;
    }

    /**
     * Capitalizes the first letter of each word
     * @param str The string to capitalize
     */
    public static capitalizeFirstLetter(str: string): string {
        return str
            .toLowerCase()
            .split(" ")
            .map((word): string => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    }

    /**
     * Parses a boolean and returns true if it matches any of the following:
     * true, on, yes, enabled, active, 1
     * @param text string to parse
     */
    public static parseBoolean(text: string): boolean {
        text = text.toLowerCase().trim();
        return TRUE_STRINGS.includes(text);
    }

    /**
     * Strips all non-alphanumeric characters from a string and replaces all spaces in a string with dashes (-)
     * @param str string to internalize
     */
    public static internalize(str: string): string {
        return this.stripNonAlphanumeric(str.toLowerCase(), true).replace(/[ ]/g, "-");
    }

    /**
     * Strips all non-alphanumeric characters from a string (e.g. !@#$%&*()_=+)
     * @param text string to strip from
     * @param allowSpaces if spaces should not be stripped
     */
    public static stripNonAlphanumeric(text: string, allowSpaces = false): string {
        const pattern = allowSpaces ? /[^a-zA-Z0-9 ]/g : /[^a-zA-Z0-9]/g;
        text = text.replace(pattern, "");
        return text;
    }

    /**
     * 
     * @param str the string to pad
     * @param padStr the string to pad the string with
     * @param length the expected length of the resulting string after padding
     */
    public static pad(str: string, padStr: string, length: number): string {
        let result = str;
        while (result.length < length) {
            result = padStr + str;
        }
        return result;
    }

}
