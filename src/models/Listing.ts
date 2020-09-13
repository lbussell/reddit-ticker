export interface Listing<T> {
    kind: "Listing",
    data: {
        before: string | null,
        after: string | null,
        dist: number,
        modhash: string,
        children: T[]
    }
}