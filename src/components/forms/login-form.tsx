"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/lib/toast";
import { authService } from "@/services/auth.service";
import { useAuthStore } from "@/store/auth.store";
import { loginSchema, type LoginInput } from "@/validators/auth.schema";

export function LoginForm() {
  const setSession = useAuthStore((s) => s.setSession);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const mutation = useMutation({
    mutationFn: authService.login,
    onSuccess: ({ user, token }) => {
      setSession(user, token);
      toast.success("Welcome back", user.email);
    },
    onError: (err: Error) => toast.error("Login failed", err.message),
  });

  const onSubmit = handleSubmit((values) => mutation.mutate(values));

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div className="space-y-1.5">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          aria-invalid={!!errors.email}
          {...register("email")}
        />
        {errors.email ? <p className="text-xs text-red-600">{errors.email.message}</p> : null}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          autoComplete="current-password"
          aria-invalid={!!errors.password}
          {...register("password")}
        />
        {errors.password ? <p className="text-xs text-red-600">{errors.password.message}</p> : null}
      </div>

      {/* <Button type="submit" fullWidth isLoading={isSubmitting || mutation.isPending}>
        Sign in
      </Button> */}
    </form>
  );
}
