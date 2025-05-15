"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

// ✅ Schema
const ForgotPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email"),
});

type ForgotPasswordInput = z.infer<typeof ForgotPasswordSchema>;

// ✅ API call
const sendResetLink = async (data: ForgotPasswordInput) => {
  const response = await fetch(
    "http://localhost:5000/api/auth/forgot-password",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
  );

  const result = await response.json();
  if (!response.ok) throw new Error(result.message || "Request failed");
  return result;
};

export default function ForgetPassword() {
  const [formError, setFormError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const form = useForm<ForgotPasswordInput>({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const mutation = useMutation({
    mutationFn: sendResetLink,
    onSuccess: (res) => {
      form.reset();
      setSuccessMessage("Reset link sent to your email.");
    },
    onError: (err: any) => {
      setFormError(err.message);
    },
  });

  const onSubmit = (data: ForgotPasswordInput) => {
    setFormError("");
    setSuccessMessage("");
    mutation.mutate(data);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <Card className="w-full max-w-sm p-6">
        <CardContent>
          <h2 className="mb-6 text-center text-2xl font-semibold">
            Forgot Password
          </h2>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {formError && (
                <p className="text-sm text-red-500 mt-1">{formError}</p>
              )}
              {successMessage && (
                <p className="text-sm text-green-600 mt-1">{successMessage}</p>
              )}

              <Button type="submit" className="w-full">
                Send Reset Link
              </Button>
            </form>
          </Form>

          <p className="mt-4 text-center text-sm">
            Remember your password?{" "}
            <Link to="/auth/login" className="text-blue-500 hover:underline">
              Go back to login
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
