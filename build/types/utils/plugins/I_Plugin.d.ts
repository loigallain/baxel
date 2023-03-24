export interface I_Plugin {
    init(): void;
    cleanup(): void;
    run(): void;
    name: string;
    version: string;
    description?: string;
    author?: string;
    dependencies?: string[];
}
