export async function getProvinces() {
    const provincesData = await fetch(`https://psgc.gitlab.io/api/provinces`, {
        headers: {
            "Content-type": "application/json",
        },
    });

    const provinces = await provincesData.json();

    return provinces
}
export async function getMunicipalites(provinceCode: string) {
    const municipalitiesData = await fetch(`https://psgc.gitlab.io/api/provinces/${provinceCode}/municipalities`, {
        headers: {
            "Content-type": "application/json",
        },
    });

    const municipalities = await municipalitiesData.json();
    return municipalities
}