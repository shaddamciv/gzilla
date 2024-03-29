// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import { PlasmicDiscord } from "./plasmic/gzilla/PlasmicDiscord";

function Discord_(props, ref) {
  // Use PlasmicDiscord to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicDiscord are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, we are just piping all DiscordProps here, but feel free
  // to do whatever works for you.
  return <PlasmicDiscord root={{ onClick: () => {window.open('https://discord.gg/eaysQKDkj6', '_blank') }}}  {...props} />;
}

const Discord = React.forwardRef(Discord_);

export default Discord;
