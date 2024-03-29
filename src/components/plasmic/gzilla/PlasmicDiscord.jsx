// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: a7TAS5D5YXQzv692CQ5xSD
// Component: rCy3GbArI5
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic_gzilla.module.css"; // plasmic-import: a7TAS5D5YXQzv692CQ5xSD/projectcss
import * as sty from "./PlasmicDiscord.module.css"; // plasmic-import: rCy3GbArI5/css
import Group3Icon from "./icons/PlasmicIcon__Group3"; // plasmic-import: XV3v1go3yG/icon

export const PlasmicDiscord__VariantProps = new Array();

export const PlasmicDiscord__ArgProps = new Array();

function PlasmicDiscord__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <Group3Icon
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root)}
      link={"https://discord.gg/eaysQKDkj6"}
      role={"img"}
    />
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicDiscord__ArgProps,
      internalVariantPropNames: PlasmicDiscord__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicDiscord__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDiscord";
  } else {
    func.displayName = `PlasmicDiscord.${nodeName}`;
  }
  return func;
}

export const PlasmicDiscord = Object.assign(
  // Top-level PlasmicDiscord renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicDiscord
    internalVariantProps: PlasmicDiscord__VariantProps,
    internalArgProps: PlasmicDiscord__ArgProps
  }
);

export default PlasmicDiscord;
/* prettier-ignore-end */
