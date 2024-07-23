import { join } from "path";

const nextConfig = {
  sassOptions: {
    includePaths: [join(process.cwd(), "styles")],
    prependData: `@import "@/app/ui/variables"; @import "@/app/ui/mixins"; `,
  },
};

export default nextConfig;
