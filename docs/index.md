---
title: "ev3wrap documentation"
description: "description"
nav_order: -1
tag: "Hello!"
---

# Welcome to the documentation site for Ev3Wrap!

---
# Current plans:
- none
---
## since you spent all that time reading that wall of text above, here, have a spinning icosahedron as your reward

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
cool icosahedron above