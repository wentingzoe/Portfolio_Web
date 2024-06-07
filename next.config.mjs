import { join } from "path";

const nextConfig = {
  sassOptions: {
    includePaths: [join(process.cwd(), "styles")],
    prependData: `@import "@/app/variables";`,
  },
};

export default nextConfig;
