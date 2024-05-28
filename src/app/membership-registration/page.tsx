import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import React from "react";

const MembershipApplication = () => {
  return (
    <main className="container">
      <section className="grid grid-cols-4 gap-4">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="lastname">Last Name</Label>
          <Input type="lastname" id="lastname" placeholder="Last Name" />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="firstname">First Name</Label>
          <Input type="firstname" id="firstname" placeholder="irst Name" />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="middlename">Middle Name</Label>
          <Input type="middlename" id="middlename" placeholder="Middle Name" />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="nickname">Nickname</Label>
          <Input type="nickname" id="nickname" placeholder="Nickname" />
        </div>

        <div className="grid w-full items-center gap-1.5 col-span-3">
          <Label htmlFor="birthplace">Birth Place</Label>
          <Input type="birthplace" id="birthplace" placeholder="Nickname" />
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="birthplace">Birth Place</Label>
          <Select >
            <SelectTrigger >
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

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="height" >Height</Label>
          <Input type="height" id="height" placeholder="height" />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="weight">Weight</Label>
          <Input type="weight" id="weight" placeholder="weight" />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="citizenship">Citizenship</Label>
          <Input type="citizenship" id="citizenship" placeholder="citizenship" />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="religion">Religion</Label>
          <Select >
            <SelectTrigger >
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
      </section>
    </main>
  );
};

export default MembershipApplication;
