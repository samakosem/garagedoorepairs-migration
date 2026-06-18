import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  turbopack: {
    root: path.join(__dirname),
  },
  async redirects() {
    return [
      { source: "/banning", destination: "/garage-door-technician-banning", statusCode: 301 },
      { source: "/agoura-hills", destination: "/garage-door-repair-agoura-hills", statusCode: 301 },
      { source: "/beaumont", destination: "/garage-door-maintenance-beaumont", statusCode: 301 },
      { source: "/alhambra", destination: "/garage-door-fixing-alhambra", statusCode: 301 },
      { source: "/arcadia", destination: "/garage-door-repair-in-arcadia", statusCode: 301 },
      { source: "/blythe", destination: "/garage-door-repair-in-blythe", statusCode: 301 },
      { source: "/adelanto", destination: "/garage-door-fixing-adelanto", statusCode: 301 },
      { source: "/aliso-viejo", destination: "/garage-door-maintenance-aliso-viejo", statusCode: 301 },
    ];
  },
};

export default nextConfig;
