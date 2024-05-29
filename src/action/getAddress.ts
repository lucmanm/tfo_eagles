
const psgcApiUrl = "https://psgc.gitlab.io/api"
export async function getProvinces() {
    const provincesData = await fetch(`${psgcApiUrl}/provinces`, {
        headers: {
            "Content-type": "application/json",
        },
    });

    const data = await provincesData.json();

    return data
}
export async function getMunicipalites(provinceCode: string) {
    const municipalitiesData = await fetch(`${psgcApiUrl}/provinces/${provinceCode}/cities-municipalities.json`, {
        headers: {
            "Content-type": "application/json",
        },
    });

    const data = await municipalitiesData.json();
    return data
}

export async function getBarangays(code: string) {
    const barangays = await fetch(`${psgcApiUrl}/cities-municipalities/${code}/barangays.json`, {
        headers: {
            "Content-type": "application/json",
        },
    });

    const data = await barangays.json();
    console.log(data);
    
    return data
}

