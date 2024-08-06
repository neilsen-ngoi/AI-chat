"use client";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { cn } from "@/lib/utils";

type Props = {
  value: string;
  title: string;
  text: string;
  register: UseFormRegister<FieldValues>;
  userType: "owner" | "student";
  setUserType: React.Dispatch<React.SetStateAction<"owner" | "student">>;
};

const UserTypeCard = ({
  value,
  text,
  title,
  register,
  userType,
  setUserType,
}: Props) => {
  return (
    <Label htmlFor={value}>
      <Card
        className={cn(
          " w-full cursor-pointer",
          userType == value && "border-orange"
        )}
      ></Card>
    </Label>
  );
};

export default UserTypeCard;
