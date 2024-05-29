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

export type TMunicipalities = {
    code: string,
    name: string,
    oldName: string,
    isCapital: boolean
    districtCode: string,
    provinceCode: string,
    regionCode: string,
    islandGroupCode: string
}

export type TBarangays = {
    code: string,
    name: string,
    oldName: string,
    subMunicipalityCode: string,
    cityCode: string,
    municipalityCode: string,
    districtCode: string,
    provinceCode: string,
    regionCode: string,
    islandGroupCode: string
  }