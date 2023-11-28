export type courseState = {
    searchTerm: string,
    data: {
        name: string,
        description: string,
        cost?:  number,
        id:string
    }[],
}

export type formState = {
    name: string,
    description: string,
    cost?:  number,
}

export type formatedState = {
    name: string,
    description: string,
    cost:  number,
    id:string,
}