import { z } from "zod";

export const TMembershipApplication = z.object({
    lastname: z.string().min(1, "Please enter lastname"),
});

export type TProvinces = {
    code: string;
    name: string;
    regionCode: string;
    islandGroupCode: string;
    psgc10DigitCode: string;
};