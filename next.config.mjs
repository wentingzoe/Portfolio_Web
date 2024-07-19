import { join } from "path";

const nextConfig = {
  sassOptions: {
    includePaths: [join(process.cwd(), "styles")],
    prependData: `@import "@/app/ui/variables"; @import "@/app/ui/mixins"; @import "@/app/ui/fonts";`,
  },
};

export default nextConfig;
