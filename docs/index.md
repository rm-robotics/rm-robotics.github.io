---
title: "ev3wrap documentation"
description: "description"
nav_order: -1
tag: "Hello!"
---

# Welcome to the documentation site for Ev3Wrap!

# ARCHIVE NOTICE
Since the EV3 bricks are now being replaced by new Spike Prime bricks and the original developers (Eisverygoodletter, txxvgnx, NotOnAClient) have graduated and left the robotics club. This repository no longer has an active maintainer and will be archived.

This repository will still remain available and all of its functionality will be intact, but no new features would be added unless a new maintainer is willing to implement features. If you are interested in using this repository or contributing to it, contact me (Eisverygoodletter) at yuetlongfeng@gmail.com

## This icosahedron below is just kept as a historical artifact.

<script async src="https://unpkg.com/es-module-shims@1.3.6/dist/es-module-shims.js"></script>

<script type="importmap">
  {
    "imports": {
      "three": "https://unpkg.com/three@0.140.0/build/three.module.js",
      "orbitalControls": "https://unpkg.com/three@0.140.0/examples/jsm/controls/OrbitControls.js",
      "objLoader": "https://unpkg.com/three@0.140.0/examples/jsm/loaders/OBJLoader"
    }
  }
</script>

<canvas id="3dcanvas" style="width:100vw; height:100vw; border: 2px solid black; display: block;"></canvas>
<div id="container"></div>
<script defer src="/assets/js/3d.js" type="module"></script>