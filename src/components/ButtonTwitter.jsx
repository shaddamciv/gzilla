import * as React from "react";
import { PlasmicButtonTwitter } from "./plasmic/gzilla/PlasmicButtonTwitter";

function ButtonTwitter_(props, ref) {
  const { plasmicProps } = PlasmicButtonTwitter.useBehavior(props, ref);
  return <PlasmicButtonTwitter {...plasmicProps} />;
}

const ButtonTwitter = React.forwardRef(ButtonTwitter_);

export default Object.assign(ButtonTwitter, {
  __plumeType: "button"
});
