import { useToast } from "@/components/ui/use-toast";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const useSignUpForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState();
  const { signUp, isLoaded, setActive } = useSignUp();
  const router = useRouter();
  const methods = useForm();
};
