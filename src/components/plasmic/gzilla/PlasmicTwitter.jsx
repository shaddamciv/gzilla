// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: a7TAS5D5YXQzv692CQ5xSD
// Component: ymGsLy5iOY
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic_gzilla.module.css"; // plasmic-import: a7TAS5D5YXQzv692CQ5xSD/projectcss
import * as sty from "./PlasmicTwitter.module.css"; // plasmic-import: ymGsLy5iOY/css
import Vector3Icon from "./icons/PlasmicIcon__Vector3"; // plasmic-import: XyJq-zU79E/icon

export const PlasmicTwitter__VariantProps = new Array();

export const PlasmicTwitter__ArgProps = new Array();

function PlasmicTwitter__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <Vector3Icon
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root)}
      href={"https://twitter.com/GMZTA_NFT"}
      link={"https://twitter.com/GMZTA_NFT"}
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
      internalArgPropNames: PlasmicTwitter__ArgProps,
      internalVariantPropNames: PlasmicTwitter__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicTwitter__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTwitter";
  } else {
    func.displayName = `PlasmicTwitter.${nodeName}`;
  }
  return func;
}

export const PlasmicTwitter = Object.assign(
  // Top-level PlasmicTwitter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicTwitter
    internalVariantProps: PlasmicTwitter__VariantProps,
    internalArgProps: PlasmicTwitter__ArgProps
  }
);

export default PlasmicTwitter;
/* prettier-ignore-end */
