export interface I_Universe {
    name: string;
    seed: number;
    // behavior
    initialize: () => void;
}