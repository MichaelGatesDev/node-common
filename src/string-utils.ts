const TRUE_STRINGS: string[] = [
    "true", "on", "yes", "enabled", "active", "1"
]

export class StringUtils {

    /**
     * Checks if a string is blank, null, or undefined
     * @param str The string to test
     */
    public static isBlank(str: string): boolean {
        return (!str || /^\s*$/.test(str));
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


    public static parseBoolean(text: string): boolean {
        text = text.toLowerCase().trim();
        return TRUE_STRINGS.includes(text);
    }

    public static internalize(str: string): string {
        return str.toLowerCase().replace(/\s/g, "-");
    }

}