export class ArrayUtils {

    public static delete<T>(array: T[], item: T): T[] {
        return array.filter((elem) => {
            return elem !== item;
        });
    }

}
