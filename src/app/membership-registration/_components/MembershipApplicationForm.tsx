"use client";
import { getMunicipalites } from "@/action/getAddress";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { TMembershipApplication, TProvinces } from "@/data.type";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const MembershipApplicationForm: React.FC<{ provinces: TProvinces[] }> = ({ provinces }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<z.infer<typeof TMembershipApplication>>({
    resolver: zodResolver(TMembershipApplication),
    defaultValues: {
      lastname: "",
    },
  });

  const onSubmit = (data: z.infer<typeof TMembershipApplication>) => {
    console.log(data);
  };

  const onChnage = async (data: string) => {
    const municipalities = await getMunicipalites(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <section className="grid grid-cols-12 gap-4">
        <div className="space-y-4 col-span-12">
          <h4 className="text-xl font-bold leading-none">Personal Information</h4>

          <Separator className="my-4" />
        </div>
        <div className="grid w-full items-center gap-1.5 max-sm:col-span-6 col-span-3">
          <Label htmlFor="lastname">Last Name</Label>
          <Input type="text" id="lastname" placeholder="Last Name" />
        </div>
        <div className="grid w-full items-center gap-1.5 max-sm:col-span-6 col-span-3">
          <Label htmlFor="firstname">First Name</Label>
          <Input type="text" id="firstname" placeholder="First Name" />
        </div>
        <div className="grid w-full items-center gap-1.5 max-sm:col-span-6 col-span-3">
          <Label htmlFor="middlename">Middle Name</Label>
          <Input type="text" id="middlename" placeholder="Middle Name" />
        </div>
        <div className="grid w-full items-center gap-1.5 max-sm:col-span-6 col-span-3">
          <Label htmlFor="nickname">Nickname</Label>
          <Input type="text" id="nickname" placeholder="Nickname" />
        </div>

        <div className="grid w-full items-center gap-1.5 max-sm:col-span-12 col-span-6">
          <Label htmlFor="birthplace">Birth Place</Label>
          <Input type="text" id="birthplace" placeholder="Birth Place" />
        </div>

        <div className="grid w-full items-center gap-1.5 max-sm:col-span-6 col-span-3">
          <Label htmlFor="birthplace">Civil Status</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Civil Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="single">Single</SelectItem>
              <SelectItem value="married">Married</SelectItem>
              <SelectItem value="separated">Separated</SelectItem>
              <SelectItem value="widower">Widower</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid w-full items-center gap-1.5 max-sm:col-span-6 col-span-3">
          <Label htmlFor="bloodType">Blood type</Label>
          <Input type="text" id="height" placeholder="Blood type" />
        </div>

        <div className="grid w-full items-center gap-1.5 max-sm:col-span-4 col-span-2">
          <Label htmlFor="height">Height</Label>
          <Input type="text" id="height" placeholder="Height" />
        </div>
        <div className="grid w-full items-center gap-1.5 max-sm:col-span-4 col-span-2">
          <Label htmlFor="weight">Weight</Label>
          <Input type="text" id="weight" placeholder="Height" />
        </div>
        <div className="grid w-full items-center gap-1.5 max-sm:col-span-4 col-span-2">
          <Label htmlFor="citizenship">Citizenship</Label>
          <Input type="text" id="citizenship" placeholder="Citizenship" />
        </div>
        <div className="grid w-full items-center gap-1.5 max-sm:col-span-4 col-span-2">
          <Label htmlFor="religion">Religion</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Religion" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="islam">Islam</SelectItem>
              <SelectItem value="romanCatholic">Roman Catholic</SelectItem>
              <SelectItem value="married">Iglesia ni Cristo</SelectItem>
              <SelectItem value="separated">Philippine Independent Church</SelectItem>
              <SelectItem value="Seventh-day Adventist">Seventh-day Adventist</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid w-full items-center gap-1.5 max-sm:col-span-4 col-span-2">
          <Label htmlFor="telephone">Telephone</Label>
          <Input type="text" id="height" placeholder="Telephone" />
        </div>

        <div className="grid w-full items-center gap-1.5 max-sm:col-span-4 col-span-2">
          <Label htmlFor="cellphone">Cellphone No.</Label>
          <Input type="text" id="height" placeholder="Cellphone No." />
        </div>

        {/* Address */}
        <section className="grid grid-cols-12 col-span-12 gap-4  ">
          <div className="grid items-center gap-1.5 max-sm:col-span-12 col-span-4">
            <Label htmlFor="street_no">Steet No.</Label>
            <Input type="text" id="height" placeholder="Street" />
          </div>

          <div className="grid items-center gap-1.5  max-sm:col-span-6 col-span-2">
            <Label htmlFor="province">Province</Label>
            <Select onValueChange={onChnage}>
              <SelectTrigger>
                <SelectValue placeholder="Province" />
              </SelectTrigger>
              <SelectContent>
                {provinces
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((data, index) => (
                    <SelectItem key={index} value={data.code}>
                      {data.name}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid items-center gap-1.5  max-sm:col-span-6 col-span-2">
            <Label htmlFor="municipality">Municipality/City</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Municipality" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="example1">example1</SelectItem>
                <SelectItem value="example2">example2</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid items-center gap-1.5  max-sm:col-span-6 col-span-2">
            <Label htmlFor="barangay">Barangay</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Barangay" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="example1">example1</SelectItem>
                <SelectItem value="example2">example2</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid items-center gap-1.5  max-sm:col-span-6 col-span-2">
            <Label htmlFor="zip_code">Zip Code</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Zip Code" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="zip_code1">zip_code1</SelectItem>
                <SelectItem value="zip_code2">zip_code2</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </section>

        {/* Employment or Prefession */}

        <section className="grid grid-cols-12 gap-4 col-span-12 pt-8">
          <div className="space-y-4 col-span-12">
            <h4 className="text-xl font-bold leading-none">Employment or Prefession</h4>

            <Separator className="my-4" />
          </div>
          <div className="grid w-full items-center gap-1.5 col-span-6">
            <Label htmlFor="Name_of_office_line_of_bussiness">
              Name of Office line of bussiness
            </Label>
            <Input
              type="text"
              id="Name_of_office_line_of_bussiness"
              placeholder="Name of Office line of bussiness"
            />
          </div>
          <div className="grid w-full items-center gap-1.5 col-span-6">
            <Label htmlFor="address">Address</Label>
            <Input type="text" id="address" placeholder="Address" />
          </div>
          <div className="grid w-full items-center gap-1.5 col-span-6">
            <Label htmlFor="title_and_position">Title and Position</Label>
            <Input type="text" id="title_and_position" placeholder="Title and Position" />
          </div>

          <div className="grid w-full items-center gap-1.5 max-sm:col-span-6 col-span-3">
            <Label htmlFor="telephone_number">Telephone Number</Label>
            <Input type="text" id="telephone_number" placeholder="Telephone Number" />
          </div>
          <div className="grid w-full items-center gap-1.5 max-sm:col-span-6 col-span-3">
            <Label htmlFor="fax_number">Fax Number</Label>
            <Input type="text" id="fax_number" placeholder="Fax Number" />
          </div>
        </section>
      </section>
      <Button className="my-4">Submit</Button>
    </form>
  );
};

export default MembershipApplicationForm;
