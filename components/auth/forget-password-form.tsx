"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ForgetPasswordForm() {
  return (
    <form className="flex flex-col gap-3">
      <Label className="space-y-1">
        <p className="font-heading">Email</p>
        <Input placeholder="Enter your email..." />
      </Label>

      <Button className="mt-2">Send</Button>
    </form>
  );
}
