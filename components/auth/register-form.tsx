"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RegisterForm() {
  return (
    <form className="flex flex-col gap-3">
      <Label className="space-y-1">
        <p className="font-heading">Email</p>
        <Input placeholder="Enter your email..." />
      </Label>
      <Label className="space-y-1">
        <p className="font-heading">Username</p>
        <Input placeholder="Enter your username..." />
      </Label>
      <Label className="space-y-1">
        <p className="font-heading">Password</p>
        <Input type="password" placeholder="Enter your password..." />
      </Label>
      <Label className="space-y-1">
        <p className="font-heading">Confirm password</p>
        <Input type="password" placeholder="Confirm your password..." />
      </Label>

      <Button className="mt-2">Register</Button>
    </form>
  );
}
