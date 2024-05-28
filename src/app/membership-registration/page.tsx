import React from "react";
import MembershipApplicationForm from "./_components/MembershipApplicationForm";
import { getMunicipalites, getProvinces } from "@/action/getAddress";

const MembershipApplication = async () => {
  const provinces = await getProvinces();



  return (
    <main className="container py-12">
      <MembershipApplicationForm provinces={provinces} />
    </main>
  );
};

export default MembershipApplication;
