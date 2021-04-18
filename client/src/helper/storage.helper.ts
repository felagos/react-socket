export class StorageHelper {

    static saveItem<T>(key: string, value: T) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    static getItem<T>(key: string): T | null {
        const data = localStorage.getItem(key);
        if (data) return JSON.parse(data);
        return null;
    }

}