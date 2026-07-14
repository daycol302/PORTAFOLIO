import HeroActions from "./HeroActions";
import HeroTechStack from "./HeroTechStack";

export default function HeroContent() {
  return (
    <div className="flex flex-col justify-center space-y-8">

      {/* Greeting */}

      <span className="text-sm font-medium tracking-widest uppercase text-primary">
        👋 Hello, I'm
      </span>

      {/* Name */}

      <div>
        <h1 className="text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
            Daynover{" "}
            <span className="text-primary">
                García Zapata
            </span>
        </h1>
      </div>

      {/* Role */}

      <h2 className="text-2xl font-semibold text-muted-foreground">
        Cloud & Infrastructure Engineer
      </h2>

      {/* Description */}

      <p className="max-w-xl text-lg leading-8 text-muted-foreground">
        I build reliable infrastructure, modern web applications and scalable
        cloud solutions focused on performance, security and user experience.
      </p>

      <HeroActions />

      <HeroTechStack />

    </div>
  );
}