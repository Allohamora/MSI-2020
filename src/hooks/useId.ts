import { useMemo } from "react";

const generateId = (prefix?: string) => {
    const id: string = `${prefix ? prefix + "-" : ""}${Date.now()}`;
    return () => id;
}

export const useId = (prefix?: string) => {
    const id = useMemo(generateId(prefix), []);

    return {id};
}