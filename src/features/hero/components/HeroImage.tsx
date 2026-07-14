import Image from "next/image";

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";

import { profile } from "@/data/profile";

export default function HeroImage() {
  return (
    <Card className="mx-auto max-w-sm overflow-hidden border-border/50 shadow-lg">

      <CardHeader className="items-center pb-2">

        <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-primary/20">

          <Image
            src={profile.image}
            alt={profile.name}
            fill
            priority
            className="object-cover"
          />

        </div>

      </CardHeader>

      <CardContent className="space-y-4 text-center">

        <div>
          <h3 className="text-2xl font-bold">
            {profile.name}
          </h3>

          <p className="text-muted-foreground">
            {profile.role}
          </p>
        </div>

        <p className="text-sm text-muted-foreground">
          📍 {profile.location}
        </p>

        <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-2 text-sm font-medium text-green-500">

          <span className="h-2 w-2 rounded-full rounded-full bg-green-500 animate-pulse"></span>

          {profile.status.en}

        </div>

      </CardContent>

    </Card>
  );
}