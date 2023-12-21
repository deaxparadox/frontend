export interface Heading {
    id: number;
    name: string;
    description: string;
    note: string;
    start: string;
    end: string;
    updated: string;
    created: string;
}

export interface Task {
    id: number;
    heading: Heading;
    name: string;
    description: string;
    note: string;
    start: string;
    end: string;
    updated: string;
    created: string;
}