module.exports = [
  {
    "type": "beam",
    "name": "electric-beam",
    "flags": [
      "not-on-map"
    ],
    "width": 0.5,
    "damage_interval": 20,
    "working_sound": [
      {
        "filename": "__base__/sound/fight/electric-beam.ogg",
        "volume": 0.7
      }
    ],
    "action": {
      "type": "direct",
      "action_delivery": {
        "type": "instant",
        "target_effects": [
          {
            "type": "damage",
            "damage": {
              "amount": 10,
              "type": "electric"
            }
          }
        ]
      }
    },
    "head": {
      "filename": "__base__/graphics/entity/beam/beam-head.png",
      "line_length": 16,
      "width": 45,
      "height": 39,
      "frame_count": 16,
      "animation_speed": 0.5
    },
    "tail": {
      "filename": "__base__/graphics/entity/beam/beam-tail.png",
      "line_length": 16,
      "width": 45,
      "height": 39,
      "frame_count": 16
    },
    "body": [
      {
        "filename": "__base__/graphics/entity/beam/beam-body-1.png",
        "line_length": 16,
        "width": 45,
        "height": 39,
        "frame_count": 16
      },
      {
        "filename": "__base__/graphics/entity/beam/beam-body-2.png",
        "line_length": 16,
        "width": 45,
        "height": 39,
        "frame_count": 16
      },
      {
        "filename": "__base__/graphics/entity/beam/beam-body-3.png",
        "line_length": 16,
        "width": 45,
        "height": 39,
        "frame_count": 16
      },
      {
        "filename": "__base__/graphics/entity/beam/beam-body-4.png",
        "line_length": 16,
        "width": 45,
        "height": 39,
        "frame_count": 16
      },
      {
        "filename": "__base__/graphics/entity/beam/beam-body-5.png",
        "line_length": 16,
        "width": 45,
        "height": 39,
        "frame_count": 16
      },
      {
        "filename": "__base__/graphics/entity/beam/beam-body-6.png",
        "line_length": 16,
        "width": 45,
        "height": 39,
        "frame_count": 16
      }
    ]
  },
  {
    "type": "noise-layer",
    "name": "pita"
  },
  {
    "type": "noise-layer",
    "name": "pita-mini"
  },
  {
    "type": "noise-layer",
    "name": "brown-cane"
  },
  {
    "type": "noise-layer",
    "name": "coral"
  },
  {
    "type": "noise-layer",
    "name": "fluff"
  },
  {
    "type": "noise-layer",
    "name": "garballo"
  },
  {
    "type": "noise-layer",
    "name": "garballo-mini"
  },
  {
    "type": "noise-layer",
    "name": "garballo-mini"
  },
  {
    "type": "noise-layer",
    "name": "grass1"
  },
  {
    "type": "noise-layer",
    "name": "grass2"
  },
  {
    "type": "decorative",
    "name": "brown-asterisk",
    "flags": [
      "placeable-neutral",
      "placeable-off-grid",
      "not-on-map"
    ],
    "icon": "__base__/graphics/icons/brown-asterisk.png",
    "subgroup": "grass",
    "order": "b[decorative]-b[asterisk]-a[brown]",
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.7,
        0.7
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ],
    "selectable_in_game": false,
    "render_layer": "decorative",
    "pictures": [
      {
        "filename": "__base__/graphics/entity/decorative/brown-asterisk/brown-asterisk-01.png",
        "width": 30,
        "height": 26
      },
      {
        "filename": "__base__/graphics/entity/decorative/brown-asterisk/brown-asterisk-02.png",
        "width": 24,
        "height": 27
      },
      {
        "filename": "__base__/graphics/entity/decorative/brown-asterisk/brown-asterisk-03.png",
        "width": 27,
        "height": 23
      },
      {
        "filename": "__base__/graphics/entity/decorative/brown-asterisk/brown-asterisk-04.png",
        "width": 35,
        "height": 26
      },
      {
        "filename": "__base__/graphics/entity/decorative/brown-asterisk/brown-asterisk-05.png",
        "width": 30,
        "height": 25
      },
      {
        "filename": "__base__/graphics/entity/decorative/brown-asterisk/brown-asterisk-06.png",
        "width": 46,
        "height": 32
      },
      {
        "filename": "__base__/graphics/entity/decorative/brown-asterisk/brown-asterisk-07.png",
        "width": 46,
        "height": 31
      },
      {
        "filename": "__base__/graphics/entity/decorative/brown-asterisk/brown-asterisk-08.png",
        "width": 18,
        "height": 15
      },
      {
        "filename": "__base__/graphics/entity/decorative/brown-asterisk/brown-asterisk-09.png",
        "width": 21,
        "height": 14
      },
      {
        "filename": "__base__/graphics/entity/decorative/brown-asterisk/brown-asterisk-10.png",
        "width": 16,
        "height": 17
      },
      {
        "filename": "__base__/graphics/entity/decorative/brown-asterisk/brown-asterisk-11.png",
        "width": 20,
        "height": 18
      },
      {
        "filename": "__base__/graphics/entity/decorative/brown-asterisk/brown-asterisk-12.png",
        "width": 21,
        "height": 18
      },
      {
        "filename": "__base__/graphics/entity/decorative/brown-asterisk/brown-asterisk-13.png",
        "width": 22,
        "height": 19
      },
      {
        "filename": "__base__/graphics/entity/decorative/brown-asterisk/brown-asterisk-14.png",
        "width": 28,
        "height": 22
      },
      {
        "filename": "__base__/graphics/entity/decorative/brown-asterisk/brown-asterisk-15.png",
        "width": 30,
        "height": 21
      },
      {
        "filename": "__base__/graphics/entity/decorative/brown-asterisk/brown-asterisk-16.png",
        "width": 26,
        "height": 22
      },
      {
        "filename": "__base__/graphics/entity/decorative/brown-asterisk/brown-asterisk-17.png",
        "width": 22,
        "height": 15
      },
      {
        "filename": "__base__/graphics/entity/decorative/brown-asterisk/brown-asterisk-18.png",
        "width": 21,
        "height": 27
      },
      {
        "filename": "__base__/graphics/entity/decorative/brown-asterisk/brown-asterisk-19.png",
        "width": 21,
        "height": 20
      },
      {
        "filename": "__base__/graphics/entity/decorative/brown-asterisk/brown-asterisk-20.png",
        "width": 71,
        "height": 58
      },
      {
        "filename": "__base__/graphics/entity/decorative/brown-asterisk/brown-asterisk-21.png",
        "width": 78,
        "height": 59
      },
      {
        "filename": "__base__/graphics/entity/decorative/brown-asterisk/brown-asterisk-22.png",
        "width": 56,
        "height": 49
      }
    ]
  },
  {
    "type": "decorative",
    "name": "green-asterisk",
    "flags": [
      "placeable-neutral",
      "placeable-off-grid",
      "not-on-map"
    ],
    "icon": "__base__/graphics/icons/green-asterisk.png",
    "subgroup": "grass",
    "order": "b[decorative]-b[asterisk]-b[green]",
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.7,
        0.7
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ],
    "selectable_in_game": false,
    "render_layer": "decorative",
    "pictures": [
      {
        "filename": "__base__/graphics/entity/decorative/green-asterisk/green-asterisk-01.png",
        "width": 25,
        "height": 24
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-asterisk/green-asterisk-02.png",
        "width": 25,
        "height": 22
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-asterisk/green-asterisk-03.png",
        "width": 29,
        "height": 21
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-asterisk/green-asterisk-04.png",
        "width": 27,
        "height": 23
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-asterisk/green-asterisk-05.png",
        "width": 38,
        "height": 24
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-asterisk/green-asterisk-06.png",
        "width": 32,
        "height": 22
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-asterisk/green-asterisk-07.png",
        "width": 40,
        "height": 21
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-asterisk/green-asterisk-08.png",
        "width": 40,
        "height": 29
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-asterisk/green-asterisk-09.png",
        "width": 33,
        "height": 26
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-asterisk/green-asterisk-10.png",
        "width": 24,
        "height": 14
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-asterisk/green-asterisk-11.png",
        "width": 22,
        "height": 28
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-asterisk/green-asterisk-12.png",
        "width": 20,
        "height": 20
      }
    ]
  },
  {
    "type": "decorative",
    "name": "red-asterisk",
    "flags": [
      "placeable-neutral",
      "placeable-off-grid",
      "not-on-map"
    ],
    "icon": "__base__/graphics/icons/red-asterisk.png",
    "subgroup": "grass",
    "order": "b[decorative]-b[asterisk]-c[red]",
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.7,
        0.7
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ],
    "selectable_in_game": false,
    "render_layer": "decorative",
    "pictures": [
      {
        "filename": "__base__/graphics/entity/decorative/red-asterisk/red-asterisk-01.png",
        "width": 31,
        "height": 29
      },
      {
        "filename": "__base__/graphics/entity/decorative/red-asterisk/red-asterisk-02.png",
        "width": 24,
        "height": 27
      },
      {
        "filename": "__base__/graphics/entity/decorative/red-asterisk/red-asterisk-03.png",
        "width": 28,
        "height": 24
      },
      {
        "filename": "__base__/graphics/entity/decorative/red-asterisk/red-asterisk-04.png",
        "width": 36,
        "height": 24
      },
      {
        "filename": "__base__/graphics/entity/decorative/red-asterisk/red-asterisk-05.png",
        "width": 30,
        "height": 28
      },
      {
        "filename": "__base__/graphics/entity/decorative/red-asterisk/red-asterisk-06.png",
        "width": 32,
        "height": 21
      },
      {
        "filename": "__base__/graphics/entity/decorative/red-asterisk/red-asterisk-07.png",
        "width": 29,
        "height": 26
      }
    ]
  },
  {
    "type": "decorative",
    "name": "green-pita",
    "flags": [
      "placeable-neutral",
      "placeable-off-grid",
      "not-on-map"
    ],
    "icon": "__base__/graphics/icons/green-pita.png",
    "subgroup": "grass",
    "order": "b[decorative]-c[pita]-a[green]",
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.7,
        0.7
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ],
    "render_layer": "object",
    "selectable_in_game": false,
    "autoplace": {
      "sharpness": 0.9,
      "order": "a[doodad]-b[pita]",
      "max_probability": 0.25
    },
    "pictures": [
      {
        "filename": "__base__/graphics/entity/decorative/green-pita/green-pita-01.png",
        "width": 60,
        "height": 49
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-pita/green-pita-02.png",
        "width": 62,
        "height": 46
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-pita/green-pita-03.png",
        "width": 57,
        "height": 56
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-pita/green-pita-04.png",
        "width": 60,
        "height": 54
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-pita/green-pita-05.png",
        "width": 60,
        "height": 49
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-pita/green-pita-06.png",
        "width": 57,
        "height": 47
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-pita/green-pita-07.png",
        "width": 59,
        "height": 51
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-pita/green-pita-08.png",
        "width": 60,
        "height": 46
      }
    ]
  },
  {
    "type": "decorative",
    "name": "green-pita-mini",
    "flags": [
      "placeable-neutral",
      "placeable-off-grid",
      "not-on-map"
    ],
    "icon": "__base__/graphics/icons/green-pita-mini.png",
    "subgroup": "grass",
    "order": "b[decorative]-d[pita-mini]-a[green]",
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.7,
        0.7
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ],
    "render_layer": "decorative",
    "selectable_in_game": false,
    "autoplace": {
      "sharpness": 0.9,
      "order": "a[doodad]-b[pita]",
      "max_probability": 0.25
    },
    "pictures": [
      {
        "filename": "__base__/graphics/entity/decorative/green-pita-mini/green-pita-mini-01.png",
        "width": 32,
        "height": 29
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-pita-mini/green-pita-mini-02.png",
        "width": 37,
        "height": 28
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-pita-mini/green-pita-mini-03.png",
        "width": 35,
        "height": 28
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-pita-mini/green-pita-mini-04.png",
        "width": 32,
        "height": 28
      }
    ]
  },
  {
    "type": "decorative",
    "name": "brown-cane-cluster",
    "flags": [
      "placeable-neutral",
      "placeable-off-grid",
      "not-on-map"
    ],
    "icon": "__base__/graphics/icons/brown-cane-cluster.png",
    "subgroup": "grass",
    "order": "b[decorative]-e[cane]-a[cluster]-a[brown]",
    "collision_box": [
      [
        null,
        null
      ],
      [
        1.5,
        0.7
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        1.3,
        0.7
      ]
    ],
    "render_layer": "object",
    "selectable_in_game": false,
    "autoplace": {
      "order": "a[doodad]-c[cane]",
      "max_probability": 0.1,
      "sharpness": 1
    },
    "pictures": [
      {
        "filename": "__base__/graphics/entity/decorative/brown-cane-cluster/brown-cane-cluster-01.png",
        "width": 131,
        "height": 146,
        "shift": [
          0.5,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/decorative/brown-cane-cluster/brown-cane-cluster-02.png",
        "width": 154,
        "height": 176,
        "shift": [
          0.6,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/decorative/brown-cane-cluster/brown-cane-cluster-03.png",
        "width": 264,
        "height": 156,
        "shift": [
          0.7,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/decorative/brown-cane-cluster/brown-cane-cluster-04.png",
        "width": 119,
        "height": 138,
        "shift": [
          0.4,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/decorative/brown-cane-cluster/brown-cane-cluster-05.png",
        "width": 140,
        "height": 230,
        "shift": [
          0.4,
          0
        ]
      }
    ]
  },
  {
    "type": "decorative",
    "name": "brown-cane-single",
    "flags": [
      "placeable-neutral",
      "placeable-off-grid",
      "not-on-map"
    ],
    "icon": "__base__/graphics/icons/brown-cane-single.png",
    "subgroup": "grass",
    "order": "b[decorative]-e[cane]-b[single]-a[brown]",
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.9,
        0.7
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.7,
        0.5
      ]
    ],
    "render_layer": "object",
    "selectable_in_game": false,
    "pictures": [
      {
        "filename": "__base__/graphics/entity/decorative/brown-cane-single/brown-cane-single-01.png",
        "width": 56,
        "height": 60,
        "shift": [
          0.6,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/decorative/brown-cane-single/brown-cane-single-02.png",
        "width": 44,
        "height": 43,
        "shift": [
          0.3,
          0
        ]
      },
      {
        "filename": "__base__/graphics/entity/decorative/brown-cane-single/brown-cane-single-03.png",
        "width": 48,
        "height": 51,
        "shift": [
          0.3,
          0
        ]
      },
      {
        "filename": "__base__/graphics/entity/decorative/brown-cane-single/brown-cane-single-04.png",
        "width": 45,
        "height": 37
      },
      {
        "filename": "__base__/graphics/entity/decorative/brown-cane-single/brown-cane-single-05.png",
        "width": 81,
        "height": 57,
        "shift": [
          0.9,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/decorative/brown-cane-single/brown-cane-single-06.png",
        "width": 31,
        "height": 94,
        "shift": [
          0.1,
          0.4
        ]
      }
    ]
  },
  {
    "type": "decorative",
    "name": "green-coral-mini",
    "flags": [
      "placeable-neutral",
      "placeable-off-grid",
      "not-on-map"
    ],
    "icon": "__base__/graphics/icons/green-coral-mini.png",
    "subgroup": "grass",
    "order": "b[decorative]-f[coral]-b[mini]-a[green]",
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ],
    "render_layer": "object",
    "selectable_in_game": false,
    "pictures": [
      {
        "filename": "__base__/graphics/entity/decorative/green-coral-mini/green-coral-mini-01.png",
        "width": 52,
        "height": 57,
        "shift": [
          0,
          0.3
        ]
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-coral-mini/green-coral-mini-02.png",
        "width": 20,
        "height": 27
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-coral-mini/green-coral-mini-03.png",
        "width": 37,
        "height": 39,
        "shift": [
          0.2,
          0
        ]
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-coral-mini/green-coral-mini-04.png",
        "width": 46,
        "height": 49,
        "shift": [
          0.4,
          0.3
        ]
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-coral-mini/green-coral-mini-05.png",
        "width": 33,
        "height": 54,
        "shift": [
          0.2,
          0.2
        ]
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-coral-mini/green-coral-mini-06.png",
        "width": 34,
        "height": 41,
        "shift": [
          null,
          0
        ]
      }
    ]
  },
  {
    "type": "decorative",
    "name": "brown-coral-mini",
    "flags": [
      "placeable-neutral",
      "placeable-off-grid",
      "not-on-map"
    ],
    "icon": "__base__/graphics/icons/brown-coral-mini.png",
    "subgroup": "grass",
    "order": "b[decorative]-f[coral]-b[mini]-b[brown]",
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ],
    "render_layer": "object",
    "selectable_in_game": false,
    "pictures": [
      {
        "filename": "__base__/graphics/entity/decorative/brown-coral-mini/brown-coral-mini-01.png",
        "width": 39,
        "height": 40
      },
      {
        "filename": "__base__/graphics/entity/decorative/brown-coral-mini/brown-coral-mini-02.png",
        "width": 18,
        "height": 23
      }
    ]
  },
  {
    "type": "decorative",
    "name": "orange-coral-mini",
    "flags": [
      "placeable-neutral",
      "placeable-off-grid",
      "not-on-map"
    ],
    "icon": "__base__/graphics/icons/orange-coral-mini.png",
    "subgroup": "grass",
    "order": "b[decorative]-f[coral]-b[mini]-c[orange]",
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ],
    "render_layer": "object",
    "selectable_in_game": false,
    "pictures": [
      {
        "filename": "__base__/graphics/entity/decorative/orange-coral-mini/orange-coral-mini-01.png",
        "width": 50,
        "height": 58,
        "shift": [
          0,
          0.3
        ]
      },
      {
        "filename": "__base__/graphics/entity/decorative/orange-coral-mini/orange-coral-mini-02.png",
        "width": 21,
        "height": 28,
        "shift": [
          0.1,
          0
        ]
      },
      {
        "filename": "__base__/graphics/entity/decorative/orange-coral-mini/orange-coral-mini-03.png",
        "width": 39,
        "height": 39,
        "shift": [
          0.3,
          0
        ]
      },
      {
        "filename": "__base__/graphics/entity/decorative/orange-coral-mini/orange-coral-mini-04.png",
        "width": 47,
        "height": 50,
        "shift": [
          0.6,
          0.35
        ]
      },
      {
        "filename": "__base__/graphics/entity/decorative/orange-coral-mini/orange-coral-mini-05.png",
        "width": 33,
        "height": 55,
        "shift": [
          0.25,
          0.2
        ]
      },
      {
        "filename": "__base__/graphics/entity/decorative/orange-coral-mini/orange-coral-mini-06.png",
        "width": 36,
        "height": 42
      }
    ]
  },
  {
    "type": "decorative",
    "name": "brown-fluff",
    "flags": [
      "placeable-neutral",
      "placeable-off-grid",
      "not-on-map"
    ],
    "icon": "__base__/graphics/icons/brown-fluff.png",
    "subgroup": "grass",
    "order": "b[decorative]-g[fluff]-a[normal]-a[brown]",
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ],
    "selectable_in_game": false,
    "autoplace": {
      "order": "a[doodad]-d[fluff]",
      "sharpness": 1,
      "placement_density": 3,
      "max_probability": 0.25
    },
    "pictures": [
      {
        "filename": "__base__/graphics/entity/decorative/brown-fluff/brown-fluff-01.png",
        "width": 21,
        "height": 21
      },
      {
        "filename": "__base__/graphics/entity/decorative/brown-fluff/brown-fluff-02.png",
        "width": 30,
        "height": 17
      },
      {
        "filename": "__base__/graphics/entity/decorative/brown-fluff/brown-fluff-03.png",
        "width": 27,
        "height": 21
      },
      {
        "filename": "__base__/graphics/entity/decorative/brown-fluff/brown-fluff-04.png",
        "width": 23,
        "height": 19
      },
      {
        "filename": "__base__/graphics/entity/decorative/brown-fluff/brown-fluff-05.png",
        "width": 28,
        "height": 21
      },
      {
        "filename": "__base__/graphics/entity/decorative/brown-fluff/brown-fluff-06.png",
        "width": 32,
        "height": 20
      },
      {
        "filename": "__base__/graphics/entity/decorative/brown-fluff/brown-fluff-07.png",
        "width": 22,
        "height": 21
      },
      {
        "filename": "__base__/graphics/entity/decorative/brown-fluff/brown-fluff-08.png",
        "width": 27,
        "height": 32
      },
      {
        "filename": "__base__/graphics/entity/decorative/brown-fluff/brown-fluff-09.png",
        "width": 27,
        "height": 32
      },
      {
        "filename": "__base__/graphics/entity/decorative/brown-fluff/brown-fluff-10.png",
        "width": 22,
        "height": 19
      }
    ]
  },
  {
    "type": "decorative",
    "name": "brown-fluff-dry",
    "flags": [
      "placeable-neutral",
      "placeable-off-grid",
      "not-on-map"
    ],
    "icon": "__base__/graphics/icons/brown-fluff-dry.png",
    "subgroup": "grass",
    "order": "b[decorative]-g[fluff]-b[dry]-a[brown]",
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ],
    "selectable_in_game": false,
    "autoplace": {
      "max_probability": 0.25,
      "order": "a[doodad]-d[fluff]",
      "sharpness": 1,
      "placement_density": 3
    },
    "pictures": [
      {
        "filename": "__base__/graphics/entity/decorative/brown-fluff-dry/brown-fluff-dry-01.png",
        "width": 19,
        "height": 21
      },
      {
        "filename": "__base__/graphics/entity/decorative/brown-fluff-dry/brown-fluff-dry-02.png",
        "width": 31,
        "height": 17
      },
      {
        "filename": "__base__/graphics/entity/decorative/brown-fluff-dry/brown-fluff-dry-03.png",
        "width": 27,
        "height": 23
      },
      {
        "filename": "__base__/graphics/entity/decorative/brown-fluff-dry/brown-fluff-dry-04.png",
        "width": 24,
        "height": 23
      },
      {
        "filename": "__base__/graphics/entity/decorative/brown-fluff-dry/brown-fluff-dry-05.png",
        "width": 25,
        "height": 29
      },
      {
        "filename": "__base__/graphics/entity/decorative/brown-fluff-dry/brown-fluff-dry-06.png",
        "width": 25,
        "height": 20
      },
      {
        "filename": "__base__/graphics/entity/decorative/brown-fluff-dry/brown-fluff-dry-07.png",
        "width": 31,
        "height": 20
      }
    ]
  },
  {
    "name": "garballo",
    "type": "decorative",
    "flags": [
      "placeable-neutral",
      "placeable-off-grid",
      "not-on-map"
    ],
    "icon": "__base__/graphics/icons/garballo.png",
    "subgroup": "grass",
    "order": "b[decorative]-i[garballo]-a[normal]",
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ],
    "render_layer": "object",
    "selectable_in_game": false,
    "autoplace": {
      "order": "a[doodad]-e[garballo]",
      "sharpness": 1
    },
    "pictures": [
      {
        "filename": "__base__/graphics/entity/decorative/garballo/garballo-01.png",
        "width": 50,
        "height": 39
      },
      {
        "filename": "__base__/graphics/entity/decorative/garballo/garballo-02.png",
        "width": 53,
        "height": 40
      },
      {
        "filename": "__base__/graphics/entity/decorative/garballo/garballo-03.png",
        "width": 29,
        "height": 34
      },
      {
        "filename": "__base__/graphics/entity/decorative/garballo/garballo-04.png",
        "width": 44,
        "height": 43,
        "shift": [
          0.2,
          0
        ]
      },
      {
        "filename": "__base__/graphics/entity/decorative/garballo/garballo-05.png",
        "width": 48,
        "height": 46
      },
      {
        "filename": "__base__/graphics/entity/decorative/garballo/garballo-06.png",
        "width": 59,
        "height": 49
      },
      {
        "filename": "__base__/graphics/entity/decorative/garballo/garballo-07.png",
        "width": 54,
        "height": 58,
        "shift": [
          0.3,
          0.2
        ]
      },
      {
        "filename": "__base__/graphics/entity/decorative/garballo/garballo-08.png",
        "width": 42,
        "height": 36
      },
      {
        "filename": "__base__/graphics/entity/decorative/garballo/garballo-09.png",
        "width": 58,
        "height": 45
      },
      {
        "filename": "__base__/graphics/entity/decorative/garballo/garballo-10.png",
        "width": 58,
        "height": 39
      },
      {
        "filename": "__base__/graphics/entity/decorative/garballo/garballo-11.png",
        "width": 71,
        "height": 54,
        "shift": [
          0.3,
          0.2
        ]
      }
    ]
  },
  {
    "type": "decorative",
    "name": "garballo-mini-dry",
    "flags": [
      "placeable-neutral",
      "placeable-off-grid",
      "not-on-map"
    ],
    "icon": "__base__/graphics/icons/garballo-mini-dry.png",
    "subgroup": "grass",
    "order": "b[decorative]-i[garballo]-a[mini-dry]",
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ],
    "render_layer": "object",
    "selectable_in_game": false,
    "autoplace": {
      "order": "a[doodad]-e[garballo]",
      "sharpness": 1
    },
    "pictures": [
      {
        "filename": "__base__/graphics/entity/decorative/garballo-mini-dry/garballo-mini-dry-01.png",
        "width": 18,
        "height": 25
      },
      {
        "filename": "__base__/graphics/entity/decorative/garballo-mini-dry/garballo-mini-dry-02.png",
        "width": 27,
        "height": 25
      },
      {
        "filename": "__base__/graphics/entity/decorative/garballo-mini-dry/garballo-mini-dry-03.png",
        "width": 31,
        "height": 21
      },
      {
        "filename": "__base__/graphics/entity/decorative/garballo-mini-dry/garballo-mini-dry-04.png",
        "width": 31,
        "height": 25
      },
      {
        "filename": "__base__/graphics/entity/decorative/garballo-mini-dry/garballo-mini-dry-05.png",
        "width": 31,
        "height": 24
      },
      {
        "filename": "__base__/graphics/entity/decorative/garballo-mini-dry/garballo-mini-dry-06.png",
        "width": 21,
        "height": 27
      },
      {
        "filename": "__base__/graphics/entity/decorative/garballo-mini-dry/garballo-mini-dry-07.png",
        "width": 25,
        "height": 28
      },
      {
        "filename": "__base__/graphics/entity/decorative/garballo-mini-dry/garballo-mini-dry-08.png",
        "width": 26,
        "height": 32
      },
      {
        "filename": "__base__/graphics/entity/decorative/garballo-mini-dry/garballo-mini-dry-09.png",
        "width": 23,
        "height": 24
      },
      {
        "filename": "__base__/graphics/entity/decorative/garballo-mini-dry/garballo-mini-dry-10.png",
        "width": 29,
        "height": 26
      },
      {
        "filename": "__base__/graphics/entity/decorative/garballo-mini-dry/garballo-mini-dry-11.png",
        "width": 43,
        "height": 34
      }
    ]
  },
  {
    "type": "decorative",
    "name": "green-bush-mini",
    "flags": [
      "placeable-neutral",
      "placeable-off-grid",
      "not-on-map"
    ],
    "icon": "__base__/graphics/icons/green-bush-mini.png",
    "subgroup": "grass",
    "order": "b[decorative]-j[bush]-a[mini]-a[green]",
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ],
    "selectable_in_game": false,
    "autoplace": {
      "order": "a[doodad]-e[garballo]",
      "sharpness": 1
    },
    "pictures": [
      {
        "filename": "__base__/graphics/entity/decorative/green-bush-mini/green-bush-mini-01.png",
        "width": 33,
        "height": 24
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-bush-mini/green-bush-mini-02.png",
        "width": 30,
        "height": 21
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-bush-mini/green-bush-mini-03.png",
        "width": 50,
        "height": 26
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-bush-mini/green-bush-mini-04.png",
        "width": 31,
        "height": 22
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-bush-mini/green-bush-mini-05.png",
        "width": 16,
        "height": 15
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-bush-mini/green-bush-mini-06.png",
        "width": 17,
        "height": 15
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-bush-mini/green-bush-mini-07.png",
        "width": 33,
        "height": 18
      }
    ]
  },
  {
    "type": "decorative",
    "name": "green-hairy-grass",
    "flags": [
      "placeable-neutral",
      "placeable-off-grid",
      "not-on-map"
    ],
    "icon": "__base__/graphics/icons/green-hairy-grass.png",
    "subgroup": "grass",
    "order": "b[decorative]-a[grass]-a[hairy]",
    "collision_box": [
      [
        null,
        null
      ],
      [
        1,
        1
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ],
    "selectable_in_game": false,
    "autoplace": {
      "order": "a[doodad]-f[grass]-b",
      "sharpness": 0.2,
      "max_probability": 0.01
    },
    "pictures": [
      {
        "filename": "__base__/graphics/entity/decorative/green-hairy-grass/green-hairy-grass-01.png",
        "width": 87,
        "height": 28
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-hairy-grass/green-hairy-grass-02.png",
        "width": 45,
        "height": 26
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-hairy-grass/green-hairy-grass-03.png",
        "width": 43,
        "height": 38
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-hairy-grass/green-hairy-grass-04.png",
        "width": 49,
        "height": 29
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-hairy-grass/green-hairy-grass-05.png",
        "width": 61,
        "height": 29
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-hairy-grass/green-hairy-grass-06.png",
        "width": 27,
        "height": 27
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-hairy-grass/green-hairy-grass-07.png",
        "width": 33,
        "height": 34
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-hairy-grass/green-hairy-grass-08.png",
        "width": 38,
        "height": 30
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-hairy-grass/green-hairy-grass-09.png",
        "width": 33,
        "height": 35
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-hairy-grass/green-hairy-grass-10.png",
        "width": 39,
        "height": 46
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-hairy-grass/green-hairy-grass-11.png",
        "width": 93,
        "height": 47
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-hairy-grass/green-hairy-grass-12.png",
        "width": 40,
        "height": 47
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-hairy-grass/green-hairy-grass-13.png",
        "width": 52,
        "height": 43
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-hairy-grass/green-hairy-grass-14.png",
        "width": 41,
        "height": 42
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-hairy-grass/green-hairy-grass-15.png",
        "width": 39,
        "height": 36
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-hairy-grass/green-hairy-grass-16.png",
        "width": 41,
        "height": 22
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-hairy-grass/green-hairy-grass-17.png",
        "width": 53,
        "height": 18
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-hairy-grass/green-hairy-grass-18.png",
        "width": 20,
        "height": 26
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-hairy-grass/green-hairy-grass-19.png",
        "width": 29,
        "height": 25
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-hairy-grass/green-hairy-grass-20.png",
        "width": 54,
        "height": 31
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-hairy-grass/green-hairy-grass-21.png",
        "width": 61,
        "height": 39
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-hairy-grass/green-hairy-grass-22.png",
        "width": 29,
        "height": 19
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-hairy-grass/green-hairy-grass-23.png",
        "width": 34,
        "height": 23
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-hairy-grass/green-hairy-grass-24.png",
        "width": 60,
        "height": 27
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-hairy-grass/green-hairy-grass-25.png",
        "width": 93,
        "height": 55
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-hairy-grass/green-hairy-grass-26.png",
        "width": 43,
        "height": 30
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-hairy-grass/green-hairy-grass-27.png",
        "width": 103,
        "height": 43
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-hairy-grass/green-hairy-grass-28.png",
        "width": 40,
        "height": 44
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-hairy-grass/green-hairy-grass-29.png",
        "width": 50,
        "height": 29
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-hairy-grass/green-hairy-grass-30.png",
        "width": 47,
        "height": 53
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-hairy-grass/green-hairy-grass-31.png",
        "width": 60,
        "height": 44
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-hairy-grass/green-hairy-grass-32.png",
        "width": 88,
        "height": 40
      }
    ]
  },
  {
    "type": "decorative",
    "name": "green-carpet-grass",
    "flags": [
      "placeable-neutral",
      "placeable-off-grid",
      "not-on-map"
    ],
    "icon": "__base__/graphics/icons/green-carpet-grass.png",
    "subgroup": "grass",
    "order": "b[decorative]-a[grass]-b[carpet]",
    "collision_box": [
      [
        null,
        null
      ],
      [
        2,
        2
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        1.5,
        1.5
      ]
    ],
    "selectable_in_game": false,
    "autoplace": {
      "order": "a[doodad]-f[grass]-c",
      "sharpness": 0.7,
      "max_probability": 0.01
    },
    "pictures": [
      {
        "filename": "__base__/graphics/entity/decorative/green-carpet-grass/green-carpet-grass-01.png",
        "width": 105,
        "height": 73
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-carpet-grass/green-carpet-grass-02.png",
        "width": 185,
        "height": 164
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-carpet-grass/green-carpet-grass-03.png",
        "width": 173,
        "height": 171
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-carpet-grass/green-carpet-grass-04.png",
        "width": 106,
        "height": 172
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-carpet-grass/green-carpet-grass-05.png",
        "width": 204,
        "height": 186
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-carpet-grass/green-carpet-grass-06.png",
        "width": 149,
        "height": 138
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-carpet-grass/green-carpet-grass-07.png",
        "width": 173,
        "height": 160
      }
    ]
  },
  {
    "type": "decorative",
    "name": "green-small-grass",
    "flags": [
      "placeable-neutral",
      "placeable-off-grid",
      "not-on-map"
    ],
    "icon": "__base__/graphics/icons/green-small-grass.png",
    "subgroup": "grass",
    "order": "b[decorative]-a[grass]-c[small]",
    "collision_box": [
      [
        null,
        null
      ],
      [
        1.5,
        1.5
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        1,
        1
      ]
    ],
    "selectable_in_game": false,
    "autoplace": {
      "order": "a[doodad]-f[grass]-d",
      "sharpness": 0.2,
      "max_probability": 0.01
    },
    "pictures": [
      {
        "filename": "__base__/graphics/entity/decorative/green-small-grass/green-small-grass-01.png",
        "width": 91,
        "height": 42
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-small-grass/green-small-grass-02.png",
        "width": 38,
        "height": 36
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-small-grass/green-small-grass-03.png",
        "width": 65,
        "height": 51
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-small-grass/green-small-grass-04.png",
        "width": 65,
        "height": 37
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-small-grass/green-small-grass-05.png",
        "width": 46,
        "height": 31
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-small-grass/green-small-grass-06.png",
        "width": 56,
        "height": 36
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-small-grass/green-small-grass-07.png",
        "width": 27,
        "height": 24
      },
      {
        "filename": "__base__/graphics/entity/decorative/green-small-grass/green-small-grass-08.png",
        "width": 57,
        "height": 27
      }
    ]
  },
  {
    "type": "decorative",
    "name": "root-A",
    "flags": [
      "placeable-neutral",
      "placeable-off-grid",
      "not-on-map"
    ],
    "icon": "__base__/graphics/icons/root-a.png",
    "subgroup": "grass",
    "order": "b[decorative]-h[root]-a[small]",
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.4,
        0.4
      ]
    ],
    "selectable_in_game": false,
    "autoplace": {
      "order": "a[doodad]-z[other]",
      "max_probability": 0.25,
      "influence": 0.01
    },
    "pictures": [
      {
        "filename": "__base__/graphics/entity/decorative/roots/root-A-01.png",
        "width": 22,
        "height": 10
      },
      {
        "filename": "__base__/graphics/entity/decorative/roots/root-A-02.png",
        "width": 9,
        "height": 11
      },
      {
        "filename": "__base__/graphics/entity/decorative/roots/root-A-03.png",
        "width": 11,
        "height": 10
      },
      {
        "filename": "__base__/graphics/entity/decorative/roots/root-A-04.png",
        "width": 13,
        "height": 17
      },
      {
        "filename": "__base__/graphics/entity/decorative/roots/root-A-05.png",
        "width": 15,
        "height": 11
      },
      {
        "filename": "__base__/graphics/entity/decorative/roots/root-A-06.png",
        "width": 14,
        "height": 13
      },
      {
        "filename": "__base__/graphics/entity/decorative/roots/root-A-07.png",
        "width": 15,
        "height": 13
      },
      {
        "filename": "__base__/graphics/entity/decorative/roots/root-A-08.png",
        "width": 12,
        "height": 15
      },
      {
        "filename": "__base__/graphics/entity/decorative/roots/root-A-09.png",
        "width": 22,
        "height": 16
      },
      {
        "filename": "__base__/graphics/entity/decorative/roots/root-A-10.png",
        "width": 11,
        "height": 10
      },
      {
        "filename": "__base__/graphics/entity/decorative/roots/root-A-11.png",
        "width": 22,
        "height": 18
      },
      {
        "filename": "__base__/graphics/entity/decorative/roots/root-A-12.png",
        "width": 26,
        "height": 17
      },
      {
        "filename": "__base__/graphics/entity/decorative/roots/root-A-13.png",
        "width": 15,
        "height": 13
      },
      {
        "filename": "__base__/graphics/entity/decorative/roots/root-A-14.png",
        "width": 13,
        "height": 13
      },
      {
        "filename": "__base__/graphics/entity/decorative/roots/root-A-15.png",
        "width": 22,
        "height": 17
      },
      {
        "filename": "__base__/graphics/entity/decorative/roots/root-A-16.png",
        "width": 22,
        "height": 16
      },
      {
        "filename": "__base__/graphics/entity/decorative/roots/root-A-17.png",
        "width": 13,
        "height": 15
      },
      {
        "filename": "__base__/graphics/entity/decorative/roots/root-A-18.png",
        "width": 14,
        "height": 17
      },
      {
        "filename": "__base__/graphics/entity/decorative/roots/root-A-19.png",
        "width": 12,
        "height": 10
      },
      {
        "filename": "__base__/graphics/entity/decorative/roots/root-A-20.png",
        "width": 13,
        "height": 14
      }
    ]
  },
  {
    "type": "decorative",
    "name": "root-B",
    "flags": [
      "placeable-neutral",
      "placeable-off-grid",
      "not-on-map"
    ],
    "icon": "__base__/graphics/icons/root-b.png",
    "subgroup": "grass",
    "order": "b[decorative]-h[root]-b[big]",
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.4,
        0.4
      ]
    ],
    "selectable_in_game": false,
    "autoplace": {
      "order": "a[doodad]-z[other]",
      "max_probability": 0.25,
      "influence": 0.01
    },
    "pictures": [
      {
        "filename": "__base__/graphics/entity/decorative/roots/root-B-01.png",
        "width": 38,
        "height": 20
      },
      {
        "filename": "__base__/graphics/entity/decorative/roots/root-B-02.png",
        "width": 32,
        "height": 25
      },
      {
        "filename": "__base__/graphics/entity/decorative/roots/root-B-03.png",
        "width": 36,
        "height": 34
      },
      {
        "filename": "__base__/graphics/entity/decorative/roots/root-B-04.png",
        "width": 40,
        "height": 32
      },
      {
        "filename": "__base__/graphics/entity/decorative/roots/root-B-05.png",
        "width": 29,
        "height": 24
      },
      {
        "filename": "__base__/graphics/entity/decorative/roots/root-B-06.png",
        "width": 38,
        "height": 32
      },
      {
        "filename": "__base__/graphics/entity/decorative/roots/root-B-07.png",
        "width": 19,
        "height": 28
      },
      {
        "filename": "__base__/graphics/entity/decorative/roots/root-B-08.png",
        "width": 46,
        "height": 29
      },
      {
        "filename": "__base__/graphics/entity/decorative/roots/root-B-09.png",
        "width": 34,
        "height": 23
      },
      {
        "filename": "__base__/graphics/entity/decorative/roots/root-B-10.png",
        "width": 21,
        "height": 27
      },
      {
        "filename": "__base__/graphics/entity/decorative/roots/root-B-11.png",
        "width": 29,
        "height": 24
      },
      {
        "filename": "__base__/graphics/entity/decorative/roots/root-B-12.png",
        "width": 28,
        "height": 14
      },
      {
        "filename": "__base__/graphics/entity/decorative/roots/root-B-13.png",
        "width": 34,
        "height": 25
      },
      {
        "filename": "__base__/graphics/entity/decorative/roots/root-B-14.png",
        "width": 33,
        "height": 25
      },
      {
        "filename": "__base__/graphics/entity/decorative/roots/root-B-15.png",
        "width": 21,
        "height": 16
      },
      {
        "filename": "__base__/graphics/entity/decorative/roots/root-B-16.png",
        "width": 35,
        "height": 22
      },
      {
        "filename": "__base__/graphics/entity/decorative/roots/root-B-17.png",
        "width": 35,
        "height": 13
      },
      {
        "filename": "__base__/graphics/entity/decorative/roots/root-B-18.png",
        "width": 33,
        "height": 25
      }
    ]
  },
  {
    "type": "simple-entity",
    "name": "stone-rock",
    "flags": [
      "placeable-neutral",
      "placeable-off-grid",
      "not-on-map"
    ],
    "icon": "__base__/graphics/icons/stone-rock.png",
    "subgroup": "grass",
    "order": "b[decorative]-k[stone-rock]-a[big]",
    "collision_box": [
      [
        null,
        null
      ],
      [
        1.1,
        1.1
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        1.3,
        1.3
      ]
    ],
    "minable": {
      "mining_particle": "stone-particle",
      "mining_time": 8,
      "result": "stone",
      "count": 20
    },
    "loot": [
      {
        "item": "stone",
        "probability": 1,
        "count_min": 5,
        "count_max": 10
      }
    ],
    "mined_sound": {
      "filename": "__base__/sound/deconstruct-bricks.ogg"
    },
    "render_layer": "object",
    "max_health": 200,
    "resistances": [
      {
        "type": "fire",
        "percent": 100
      }
    ],
    "autoplace": {
      "order": "a[doodad]-a[rock]",
      "max_probability": 0.25,
      "peaks": [
        {
          "influence": 0.0002
        },
        {
          "influence": 0.002,
          "min_influence": 0,
          "elevation_optimal": 30000,
          "elevation_range": 23000,
          "elevation_max_range": 30000
        }
      ]
    },
    "pictures": [
      {
        "filename": "__base__/graphics/entity/decorative/stone-rock/stone-rock-01.png",
        "width": 76,
        "height": 60,
        "shift": [
          0.1,
          0
        ]
      },
      {
        "filename": "__base__/graphics/entity/decorative/stone-rock/stone-rock-02.png",
        "width": 83,
        "height": 86,
        "shift": [
          0.2,
          0
        ]
      },
      {
        "filename": "__base__/graphics/entity/decorative/stone-rock/stone-rock-03.png",
        "width": 126,
        "height": 98,
        "shift": [
          0.7,
          0
        ]
      },
      {
        "filename": "__base__/graphics/entity/decorative/stone-rock/stone-rock-04.png",
        "width": 92,
        "height": 108,
        "shift": [
          0.1,
          0
        ]
      },
      {
        "filename": "__base__/graphics/entity/decorative/stone-rock/stone-rock-05.png",
        "width": 140,
        "height": 99,
        "shift": [
          0.5,
          0
        ]
      }
    ]
  },
  {
    "type": "decorative",
    "name": "brown-carpet-grass",
    "flags": [
      "placeable-neutral",
      "placeable-off-grid",
      "not-on-map"
    ],
    "icon": "__base__/graphics/icons/brown-carpet-grass.png",
    "subgroup": "grass",
    "order": "b[decorative]-a[grass]-b[carpet]",
    "collision_box": [
      [
        null,
        null
      ],
      [
        2,
        2
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        1.5,
        1.5
      ]
    ],
    "selectable_in_game": false,
    "autoplace": {
      "order": "a[doodad]-f[grass]-c",
      "sharpness": 0.7,
      "max_probability": 0.01
    },
    "pictures": [
      {
        "filename": "__base__/graphics/entity/decorative/brown-carpet-grass/brown-carpet-grass-01.png",
        "width": 103,
        "height": 70
      },
      {
        "filename": "__base__/graphics/entity/decorative/brown-carpet-grass/brown-carpet-grass-02.png",
        "width": 185,
        "height": 164
      },
      {
        "filename": "__base__/graphics/entity/decorative/brown-carpet-grass/brown-carpet-grass-03.png",
        "width": 96,
        "height": 176
      },
      {
        "filename": "__base__/graphics/entity/decorative/brown-carpet-grass/brown-carpet-grass-04.png",
        "width": 200,
        "height": 179
      }
    ]
  },
  {
    "type": "decorative",
    "name": "brown-hairy-grass",
    "flags": [
      "placeable-neutral",
      "placeable-off-grid",
      "not-on-map"
    ],
    "icon": "__base__/graphics/icons/brown-hairy-grass.png",
    "subgroup": "grass",
    "order": "b[decorative]-a[grass]-a[hairy]",
    "collision_box": [
      [
        null,
        null
      ],
      [
        1,
        1
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ],
    "render_layer": "decorative",
    "selectable_in_game": false,
    "autoplace": {
      "order": "a[doodad]-f[grass]-b",
      "sharpness": 0.2,
      "max_probability": 0.01
    },
    "pictures": [
      {
        "filename": "__base__/graphics/entity/decorative/brown-hairy-grass/brown-hairy-grass-01.png",
        "width": 88,
        "height": 31
      },
      {
        "filename": "__base__/graphics/entity/decorative/brown-hairy-grass/brown-hairy-grass-02.png",
        "width": 39,
        "height": 34
      },
      {
        "filename": "__base__/graphics/entity/decorative/brown-hairy-grass/brown-hairy-grass-03.png",
        "width": 53,
        "height": 29
      },
      {
        "filename": "__base__/graphics/entity/decorative/brown-hairy-grass/brown-hairy-grass-04.png",
        "width": 47,
        "height": 31
      },
      {
        "filename": "__base__/graphics/entity/decorative/brown-hairy-grass/brown-hairy-grass-05.png",
        "width": 56,
        "height": 38
      },
      {
        "filename": "__base__/graphics/entity/decorative/brown-hairy-grass/brown-hairy-grass-06.png",
        "width": 59,
        "height": 28
      }
    ]
  },
  {
    "type": "decorative",
    "name": "small-rock",
    "flags": [
      "placeable-neutral",
      "placeable-off-grid",
      "not-on-map"
    ],
    "icon": "__base__/graphics/icons/small-stone-rock.png",
    "subgroup": "grass",
    "order": "b[decorative]-k[stone-rock]-b[small]",
    "selectable_in_game": false,
    "collision_box": [
      [
        null,
        null
      ],
      [
        1.1,
        1.1
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        1.3,
        1.3
      ]
    ],
    "render_layer": "decorative",
    "autoplace": {
      "order": "a[doodad]-a[rock]",
      "max_probability": 0.25,
      "peaks": [
        {
          "influence": 0.0002
        },
        {
          "influence": 0.002,
          "min_influence": 0,
          "elevation_optimal": 30000,
          "elevation_range": 23000,
          "elevation_max_range": 30000
        }
      ]
    },
    "pictures": [
      {
        "filename": "__base__/graphics/entity/decorative/small-stone-rock/small-stone-rock-01.png",
        "width": 47,
        "height": 37,
        "shift": [
          0.21,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/decorative/small-stone-rock/small-stone-rock-02.png",
        "width": 46,
        "height": 38,
        "shift": [
          0.25,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/decorative/small-stone-rock/small-stone-rock-03.png",
        "width": 48,
        "height": 42,
        "shift": [
          0.28,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/decorative/small-stone-rock/small-stone-rock-04.png",
        "width": 56,
        "height": 39,
        "shift": [
          0.28,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/decorative/small-stone-rock/small-stone-rock-05.png",
        "width": 54,
        "height": 36,
        "shift": [
          0.34,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/decorative/small-stone-rock/small-stone-rock-06.png",
        "width": 32,
        "height": 26,
        "shift": [
          0,
          0
        ]
      },
      {
        "filename": "__base__/graphics/entity/decorative/small-stone-rock/small-stone-rock-07.png",
        "width": 33,
        "height": 28,
        "shift": [
          0,
          0
        ]
      },
      {
        "filename": "__base__/graphics/entity/decorative/small-stone-rock/small-stone-rock-08.png",
        "width": 35,
        "height": 26,
        "shift": [
          0.15,
          0
        ]
      },
      {
        "filename": "__base__/graphics/entity/decorative/small-stone-rock/small-stone-rock-09.png",
        "width": 35,
        "height": 23,
        "shift": [
          0.125,
          0
        ]
      },
      {
        "filename": "__base__/graphics/entity/decorative/small-stone-rock/small-stone-rock-10.png",
        "width": 21,
        "height": 21,
        "shift": [
          0,
          0
        ]
      },
      {
        "filename": "__base__/graphics/entity/decorative/small-stone-rock/small-stone-rock-11.png",
        "width": 24,
        "height": 16,
        "shift": [
          0,
          0
        ]
      },
      {
        "filename": "__base__/graphics/entity/decorative/small-stone-rock/small-stone-rock-12.png",
        "width": 19,
        "height": 17,
        "shift": [
          0,
          0
        ]
      },
      {
        "filename": "__base__/graphics/entity/decorative/small-stone-rock/small-stone-rock-13.png",
        "width": 23,
        "height": 15,
        "shift": [
          0,
          0
        ]
      },
      {
        "filename": "__base__/graphics/entity/decorative/small-stone-rock/small-stone-rock-14.png",
        "width": 44,
        "height": 42,
        "shift": [
          0.28,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/decorative/small-stone-rock/small-stone-rock-15.png",
        "width": 51,
        "height": 41,
        "shift": [
          0.31,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/decorative/small-stone-rock/small-stone-rock-16.png",
        "width": 55,
        "height": 40,
        "shift": [
          0.25,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/decorative/small-stone-rock/small-stone-rock-17.png",
        "width": 52,
        "height": 44,
        "shift": [
          0.37,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/decorative/small-stone-rock/small-stone-rock-18.png",
        "width": 57,
        "height": 39,
        "shift": [
          0.46,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/decorative/small-stone-rock/small-stone-rock-19.png",
        "width": 20,
        "height": 23,
        "shift": [
          0,
          0
        ]
      },
      {
        "filename": "__base__/graphics/entity/decorative/small-stone-rock/small-stone-rock-20.png",
        "width": 25,
        "height": 22,
        "shift": [
          0,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/decorative/small-stone-rock/small-stone-rock-21.png",
        "width": 31,
        "height": 16,
        "shift": [
          0,
          0.25
        ]
      },
      {
        "filename": "__base__/graphics/entity/decorative/small-stone-rock/small-stone-rock-22.png",
        "width": 29,
        "height": 16,
        "shift": [
          0.25,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/decorative/small-stone-rock/small-stone-rock-23.png",
        "width": 21,
        "height": 20,
        "shift": [
          null,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/decorative/small-stone-rock/small-stone-rock-24.png",
        "width": 47,
        "height": 29,
        "shift": [
          0.25,
          0
        ]
      },
      {
        "filename": "__base__/graphics/entity/decorative/small-stone-rock/small-stone-rock-25.png",
        "width": 34,
        "height": 33,
        "shift": [
          0,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/decorative/small-stone-rock/small-stone-rock-26.png",
        "width": 38,
        "height": 28,
        "shift": [
          0.06,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/decorative/small-stone-rock/small-stone-rock-27.png",
        "width": 31,
        "height": 26,
        "shift": [
          0,
          0
        ]
      },
      {
        "filename": "__base__/graphics/entity/decorative/small-stone-rock/small-stone-rock-28.png",
        "width": 45,
        "height": 24,
        "shift": [
          0.18,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/decorative/small-stone-rock/small-stone-rock-29.png",
        "width": 48,
        "height": 26,
        "shift": [
          0.21,
          null
        ]
      }
    ]
  },
  {
    "type": "unit",
    "name": "small-biter",
    "icon": "__base__/graphics/icons/small-biter.png",
    "flags": [
      "placeable-player",
      "placeable-enemy",
      "placeable-off-grid",
      "breaths-air"
    ],
    "max_health": 15,
    "order": "b-b-a",
    "subgroup": "enemies",
    "healing_per_tick": 0.01,
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.2,
        0.2
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.7,
        0.4
      ]
    ],
    "attack_parameters": {
      "type": "projectile",
      "range": 0.5,
      "cooldown": 35,
      "ammo_category": "melee"
    },
    "vision_distance": 30,
    "movement_speed": 0.2,
    "distance_per_frame": 0.1,
    "pollution_to_join_attack": 200,
    "distraction_cooldown": 300,
    "corpse": "small-biter-corpse",
    "dying_explosion": "blood-explosion-small"
  },
  {
    "type": "corpse",
    "name": "small-biter-corpse",
    "icon": "__base__/graphics/icons/small-biter-corpse.png",
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.8,
        0.8
      ]
    ],
    "selectable_in_game": false,
    "subgroup": "corpses",
    "order": "c[corpse]-a[biter]-a[small]",
    "flags": [
      "placeable-neutral",
      "placeable-off-grid",
      "building-direction-8-way",
      "not-repairable",
      "not-on-map"
    ],
    "dying_speed": 0.04,
    "final_render_layer": "corpse"
  },
  {
    "type": "unit-spawner",
    "name": "biter-spawner",
    "icon": "__base__/graphics/icons/biter-spawner.png",
    "flags": [
      "placeable-player",
      "placeable-enemy",
      "not-repairable"
    ],
    "max_health": 350,
    "order": "b-b-g",
    "subgroup": "enemies",
    "resistances": [
      {
        "type": "physical",
        "decrease": 2
      },
      {
        "type": "explosion",
        "decrease": 5,
        "percent": 15
      }
    ],
    "working_sound": {
      "sound": [
        {
          "filename": "__base__/sound/creatures/spawner.ogg",
          "volume": 1
        }
      ],
      "apparent_volume": 2
    },
    "dying_sound": [
      {
        "filename": "__base__/sound/creatures/spawner-death-1.ogg",
        "volume": 1
      },
      {
        "filename": "__base__/sound/creatures/spawner-death-2.ogg",
        "volume": 1
      }
    ],
    "healing_per_tick": 0.02,
    "collision_box": [
      [
        null,
        null
      ],
      [
        2.2,
        2.2
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        2.5,
        2.5
      ]
    ],
    "pollution_absorbtion_absolute": 20,
    "pollution_absorbtion_proportional": 0.01,
    "pollution_to_enhance_spawning": 30000,
    "corpse": "biter-spawner-corpse",
    "dying_explosion": "blood-explosion-huge",
    "loot": [
      {
        "count_max": 10,
        "count_min": 2,
        "item": "alien-artifact",
        "probability": 1
      }
    ],
    "max_count_of_owned_units": 7,
    "max_friends_around_to_spawn": 5,
    "animations": [
      null,
      null,
      null,
      null
    ],
    "spawning_cooldown": [
      360,
      150
    ],
    "spawning_radius": 10,
    "spawning_spacing": 3,
    "max_spawn_shift": 0,
    "max_richness_for_spawn_shift": 100,
    "call_for_help_radius": 50
  },
  {
    "type": "corpse",
    "name": "biter-spawner-corpse",
    "flags": [
      "placeable-neutral",
      "placeable-off-grid",
      "not-on-map"
    ],
    "icon": "__base__/graphics/icons/biter-spawner-corpse.png",
    "collision_box": [
      [
        null,
        null
      ],
      [
        2,
        2
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        2,
        2
      ]
    ],
    "selectable_in_game": false,
    "dying_speed": 0.04,
    "subgroup": "corpses",
    "order": "c[corpse]-b[biter-spawner]",
    "final_render_layer": "corpse",
    "animation": [
      null,
      null,
      null,
      null
    ]
  },
  {
    "type": "player",
    "name": "player",
    "icon": "__base__/graphics/icons/player.png",
    "flags": [
      "pushable",
      "placeable-off-grid",
      "breaths-air",
      "not-repairable",
      "not-on-map"
    ],
    "max_health": 100,
    "alert_when_damaged": false,
    "healing_per_tick": 0.01,
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.2,
        0.2
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.4,
        0.2
      ]
    ],
    "crafting_categories": [
      "crafting"
    ],
    "mining_categories": [
      "basic-solid"
    ],
    "inventory_size": 60,
    "build_distance": 6,
    "drop_item_distance": 6,
    "reach_distance": 6,
    "item_pickup_distance": 1,
    "loot_pickup_distance": 2,
    "reach_resource_distance": 2.7,
    "ticks_to_keep_gun": 600,
    "ticks_to_keep_aiming_direction": 100,
    "damage_hit_tint": {
      "r": 1,
      "g": 0,
      "b": 0,
      "a": 0
    },
    "running_speed": 0.15,
    "distance_per_frame": 0.13,
    "maximum_corner_sliding_distance": 0.7,
    "subgroup": "creatures",
    "order": "a",
    "eat": [
      {
        "filename": "__base__/sound/eat.ogg",
        "volume": 1
      }
    ],
    "heartbeat": [
      {
        "filename": "__base__/sound/heartbeat.ogg"
      }
    ],
    "animations": [
      {
        "idle": {
          "layers": [
            null,
            null
          ]
        },
        "idle_with_gun": {
          "layers": [
            null,
            null
          ]
        },
        "mining_with_hands": {
          "layers": [
            null,
            null
          ]
        },
        "mining_with_tool": {
          "layers": [
            null,
            null
          ]
        },
        "running_with_gun": {
          "layers": [
            null,
            null
          ]
        },
        "running": {
          "layers": [
            null,
            null
          ]
        }
      },
      {
        "idle": {
          "layers": [
            null,
            null,
            null,
            null
          ]
        },
        "idle_with_gun": {
          "layers": [
            null,
            null,
            null,
            null
          ]
        },
        "mining_with_hands": {
          "layers": [
            null,
            null,
            null,
            null
          ]
        },
        "mining_with_tool": {
          "layers": [
            null,
            null,
            null,
            null
          ]
        },
        "running_with_gun": {
          "layers": [
            null,
            null,
            null,
            null
          ]
        },
        "running": {
          "layers": [
            null,
            null,
            null,
            null
          ]
        }
      },
      {
        "idle": {
          "layers": [
            null,
            null,
            null,
            null
          ]
        },
        "idle_with_gun": {
          "layers": [
            null,
            null,
            null,
            null
          ]
        },
        "mining_with_hands": {
          "layers": [
            null,
            null,
            null,
            null
          ]
        },
        "mining_with_tool": {
          "layers": [
            null,
            null,
            null,
            null
          ]
        },
        "running_with_gun": {
          "layers": [
            null,
            null,
            null,
            null
          ]
        },
        "running": {
          "layers": [
            null,
            null,
            null,
            null
          ]
        }
      }
    ],
    "light": [
      {
        "minimum_darkness": 0.3,
        "intensity": 0.4,
        "size": 25
      },
      {
        "type": "oriented",
        "minimum_darkness": 0.3,
        "picture": {
          "filename": "__core__/graphics/light-cone.png",
          "priority": "medium",
          "scale": 2,
          "width": 200,
          "height": 200
        },
        "shift": [
          0,
          null
        ],
        "size": 2,
        "intensity": 0.6
      }
    ],
    "mining_speed": 0.01,
    "mining_with_hands_particles_animation_positions": [
      29,
      63
    ],
    "mining_with_tool_particles_animation_positions": [
      28
    ],
    "running_sound_animation_positions": [
      5,
      16
    ]
  },
  {
    "type": "furnace",
    "name": "stone-furnace",
    "icon": "__base__/graphics/icons/stone-furnace.png",
    "flags": [
      "placeable-neutral",
      "placeable-player",
      "player-creation"
    ],
    "minable": {
      "mining_time": 1,
      "result": "stone-furnace"
    },
    "max_health": 150,
    "corpse": "medium-remnants",
    "repair_sound": {
      "filename": "__base__/sound/manual-repair-simple.ogg"
    },
    "mined_sound": {
      "filename": "__base__/sound/deconstruct-bricks.ogg"
    },
    "open_sound": {
      "filename": "__base__/sound/machine-open.ogg",
      "volume": 0.85
    },
    "close_sound": {
      "filename": "__base__/sound/machine-close.ogg",
      "volume": 0.75
    },
    "vehicle_impact_sound": {
      "filename": "__base__/sound/car-stone-impact.ogg",
      "volume": 1
    },
    "working_sound": {
      "sound": {
        "filename": "__base__/sound/furnace.ogg"
      }
    },
    "resistances": [
      {
        "type": "fire",
        "percent": 80
      },
      {
        "type": "explosion",
        "percent": 30
      }
    ],
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.7,
        0.7
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.8,
        1
      ]
    ],
    "crafting_categories": [
      "smelting"
    ],
    "result_inventory_size": 1,
    "energy_usage": "180kW",
    "crafting_speed": 1,
    "source_inventory_size": 1,
    "energy_source": {
      "type": "burner",
      "effectivity": 1,
      "fuel_inventory_size": 1,
      "emissions": 0.01,
      "smoke": [
        {
          "name": "smoke",
          "deviation": [
            0.1,
            0.1
          ],
          "frequency": 5,
          "position": [
            0,
            null
          ],
          "starting_vertical_speed": 0.08,
          "starting_frame_deviation": 60
        }
      ]
    },
    "animation": {
      "filename": "__base__/graphics/entity/stone-furnace/stone-furnace.png",
      "priority": "extra-high",
      "width": 81,
      "height": 64,
      "frame_count": 1,
      "shift": [
        0.515625,
        0.0625
      ]
    },
    "working_visualisations": [
      {
        "north_position": [
          0,
          0
        ],
        "east_position": [
          0,
          0
        ],
        "south_position": [
          0,
          0
        ],
        "west_position": [
          0,
          0
        ],
        "animation": {
          "filename": "__base__/graphics/entity/stone-furnace/stone-furnace-fire.png",
          "priority": "extra-high",
          "line_length": 8,
          "width": 22,
          "height": 87,
          "frame_count": 48,
          "axially_symmetrical": false,
          "direction_count": 1,
          "shift": [
            0.0625,
            null
          ]
        },
        "light": {
          "intensity": 1,
          "size": 1
        }
      }
    ],
    "fast_replaceable_group": "furnace"
  },
  {
    "type": "transport-belt",
    "name": "transport-belt",
    "icon": "__base__/graphics/icons/transport-belt.png",
    "flags": [
      "placeable-neutral",
      "player-creation"
    ],
    "minable": {
      "hardness": 0.2,
      "mining_time": 0.3,
      "result": "transport-belt"
    },
    "max_health": 50,
    "corpse": "small-remnants",
    "resistances": [
      {
        "type": "fire",
        "percent": 60
      }
    ],
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.4,
        0.4
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ],
    "working_sound": {
      "sound": {
        "filename": "__base__/sound/transport-belt.ogg",
        "volume": 0.4
      },
      "max_sounds_per_type": 3
    },
    "animation_speed_coefficient": 32,
    "animations": {
      "filename": "__base__/graphics/entity/transport-belt/transport-belt.png",
      "priority": "extra-high",
      "width": 40,
      "height": 40,
      "frame_count": 16,
      "direction_count": 12
    },
    "fast_replaceable_group": "transport-belt",
    "speed": 0.03125
  },
  {
    "type": "fish",
    "name": "fish",
    "icon": "__base__/graphics/icons/fish.png",
    "flags": [
      "placeable-neutral",
      "not-on-map"
    ],
    "minable": {
      "mining_time": 1,
      "result": "raw-fish"
    },
    "max_health": 20,
    "subgroup": "creatures",
    "order": "b-a",
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.4,
        0.2
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.3
      ]
    ],
    "pictures": [
      {
        "filename": "__base__/graphics/entity/fish/fish-1.png",
        "priority": "extra-high",
        "width": 22,
        "height": 36
      },
      {
        "filename": "__base__/graphics/entity/fish/fish-2.png",
        "priority": "extra-high",
        "width": 32,
        "height": 32
      }
    ],
    "autoplace": {
      "influence": 0.01
    }
  },
  {
    "type": "boiler",
    "name": "boiler",
    "icon": "__base__/graphics/icons/boiler.png",
    "flags": [
      "placeable-neutral",
      "player-creation"
    ],
    "minable": {
      "hardness": 0.2,
      "mining_time": 0.5,
      "result": "boiler"
    },
    "max_health": 100,
    "corpse": "small-remnants",
    "vehicle_impact_sound": {
      "filename": "__base__/sound/car-metal-impact.ogg",
      "volume": 0.65
    },
    "resistances": [
      {
        "type": "fire",
        "percent": 80
      }
    ],
    "fast_replaceable_group": "pipe",
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.29,
        0.29
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ],
    "fluid_box": {
      "base_area": 1,
      "pipe_connections": [
        {
          "position": [
            0,
            null
          ]
        },
        {
          "position": [
            1,
            0
          ]
        },
        {
          "position": [
            0,
            1
          ]
        },
        {
          "position": [
            null,
            0
          ]
        }
      ]
    },
    "energy_consumption": "390kW",
    "burner": {
      "effectivity": 0.5,
      "fuel_inventory_size": 1,
      "smoke": [
        {
          "name": "smoke",
          "position": [
            0,
            null
          ],
          "frequency": 5,
          "starting_vertical_speed": 0,
          "starting_frame_deviation": 60
        }
      ]
    },
    "working_sound": {
      "sound": {
        "filename": "__base__/sound/boiler.ogg",
        "volume": 0.8
      },
      "max_sounds_per_type": 3
    },
    "structure": {
      "left": {
        "filename": "__base__/graphics/entity/boiler/boiler-left.png",
        "priority": "extra-high",
        "width": 46,
        "height": 46,
        "shift": [
          0.03125,
          0
        ]
      },
      "down": {
        "filename": "__base__/graphics/entity/boiler/boiler-down.png",
        "priority": "extra-high",
        "width": 66,
        "height": 72
      },
      "left_down": {
        "filename": "__base__/graphics/entity/boiler/boiler-left-down.png",
        "priority": "extra-high",
        "width": 60,
        "height": 50
      },
      "right_down": {
        "filename": "__base__/graphics/entity/boiler/boiler-right-down.png",
        "priority": "extra-high",
        "width": 44,
        "height": 50
      },
      "left_up": {
        "filename": "__base__/graphics/entity/boiler/boiler-left-up.png",
        "priority": "extra-high",
        "width": 66,
        "height": 74
      },
      "right_up": {
        "filename": "__base__/graphics/entity/boiler/boiler-right-up.png",
        "priority": "extra-high",
        "width": 46,
        "height": 72
      },
      "t_down": {
        "filename": "__base__/graphics/entity/boiler/boiler-t-down.png",
        "priority": "extra-high",
        "width": 44,
        "height": 50
      },
      "t_up": {
        "filename": "__base__/graphics/entity/boiler/boiler-t-up.png",
        "priority": "extra-high",
        "width": 46,
        "height": 70
      }
    },
    "fire": {},
    "burning_cooldown": 20
  },
  {
    "type": "container",
    "name": "wooden-chest",
    "icon": "__base__/graphics/icons/wooden-chest.png",
    "flags": [
      "placeable-neutral",
      "player-creation"
    ],
    "minable": {
      "mining_time": 1,
      "result": "wooden-chest"
    },
    "max_health": 50,
    "corpse": "small-remnants",
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.35,
        0.35
      ]
    ],
    "fast_replaceable_group": "container",
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ],
    "inventory_size": 16,
    "open_sound": {
      "filename": "__base__/sound/wooden-chest-open.ogg"
    },
    "close_sound": {
      "filename": "__base__/sound/wooden-chest-close.ogg"
    },
    "vehicle_impact_sound": {
      "filename": "__base__/sound/car-wood-impact.ogg",
      "volume": 1
    },
    "picture": {
      "filename": "__base__/graphics/entity/wooden-chest/wooden-chest.png",
      "priority": "extra-high",
      "width": 46,
      "height": 33,
      "shift": [
        0.25,
        0.015625
      ]
    },
    "circuit_wire_connection_point": {
      "shadow": {
        "red": [
          0.734375,
          0.453125
        ],
        "green": [
          0.609375,
          0.515625
        ]
      },
      "wire": {
        "red": [
          0.40625,
          0.21875
        ],
        "green": [
          0.40625,
          0.375
        ]
      }
    },
    "circuit_wire_max_distance": 7.5
  },
  {
    "type": "electric-pole",
    "name": "small-electric-pole",
    "icon": "__base__/graphics/icons/small-electric-pole.png",
    "flags": [
      "placeable-neutral",
      "player-creation"
    ],
    "minable": {
      "hardness": 0.2,
      "mining_time": 0.5,
      "result": "small-electric-pole"
    },
    "max_health": 35,
    "corpse": "small-remnants",
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.15,
        0.15
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.4,
        0.4
      ]
    ],
    "drawing_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ],
    "maximum_wire_distance": 7.5,
    "supply_area_distance": 2.5,
    "vehicle_impact_sound": {
      "filename": "__base__/sound/car-wood-impact.ogg",
      "volume": 1
    },
    "pictures": {
      "filename": "__base__/graphics/entity/small-electric-pole/small-electric-pole.png",
      "priority": "extra-high",
      "width": 123,
      "height": 124,
      "direction_count": 4,
      "shift": [
        1.4,
        null
      ]
    },
    "connection_points": [
      {
        "shadow": {
          "copper": [
            2.7,
            0
          ],
          "red": [
            2.3,
            0
          ],
          "green": [
            3.1,
            0
          ]
        },
        "wire": {
          "copper": [
            0,
            null
          ],
          "red": [
            null,
            null
          ],
          "green": [
            0.40625,
            null
          ]
        }
      },
      {
        "shadow": {
          "copper": [
            2.7,
            null
          ],
          "red": [
            2.2,
            null
          ],
          "green": [
            3,
            0.12
          ]
        },
        "wire": {
          "copper": [
            null,
            null
          ],
          "red": [
            null,
            null
          ],
          "green": [
            0.1875,
            null
          ]
        }
      },
      {
        "shadow": {
          "copper": [
            2.5,
            null
          ],
          "red": [
            2.55,
            null
          ],
          "green": [
            2.5,
            0.25
          ]
        },
        "wire": {
          "copper": [
            null,
            null
          ],
          "red": [
            null,
            null
          ],
          "green": [
            null,
            null
          ]
        }
      },
      {
        "shadow": {
          "copper": [
            2.3,
            null
          ],
          "red": [
            2.65,
            null
          ],
          "green": [
            1.75,
            0.2
          ]
        },
        "wire": {
          "copper": [
            null,
            null
          ],
          "red": [
            0.3125,
            null
          ],
          "green": [
            null,
            null
          ]
        }
      }
    ],
    "radius_visualisation_picture": {
      "filename": "__base__/graphics/entity/small-electric-pole/electric-pole-radius-visualization.png",
      "width": 12,
      "height": 12,
      "priority": "extra-high-no-scale"
    }
  },
  {
    "type": "explosion",
    "name": "explosion",
    "flags": [
      "not-on-map"
    ],
    "animations": [
      {
        "filename": "__base__/graphics/entity/explosion/explosion-1.png",
        "priority": "extra-high",
        "width": 64,
        "height": 59,
        "frame_count": 16,
        "animation_speed": 0.5
      },
      {
        "filename": "__base__/graphics/entity/explosion/explosion-2.png",
        "priority": "extra-high",
        "width": 64,
        "height": 57,
        "frame_count": 16,
        "animation_speed": 0.5
      },
      {
        "filename": "__base__/graphics/entity/explosion/explosion-3.png",
        "priority": "extra-high",
        "width": 64,
        "height": 49,
        "frame_count": 16,
        "animation_speed": 0.5
      },
      {
        "filename": "__base__/graphics/entity/explosion/explosion-4.png",
        "priority": "extra-high",
        "width": 64,
        "height": 51,
        "frame_count": 16,
        "animation_speed": 0.5
      }
    ],
    "light": {
      "intensity": 1,
      "size": 20
    },
    "smoke": "smoke-fast",
    "smoke_count": 2,
    "smoke_slow_down_factor": 1,
    "sound": {
      "aggregation": {
        "max_count": 1,
        "remove": true
      },
      "variations": [
        {
          "filename": "__base__/sound/fight/small-explosion-1.ogg",
          "volume": 0.75
        },
        {
          "filename": "__base__/sound/fight/small-explosion-2.ogg",
          "volume": 0.75
        }
      ]
    }
  },
  {
    "type": "explosion",
    "name": "explosion-gunshot",
    "flags": [
      "not-on-map"
    ],
    "animations": [
      {
        "filename": "__base__/graphics/entity/explosion-gunshot/explosion-gunshot.png",
        "priority": "extra-high",
        "width": 34,
        "height": 38,
        "frame_count": 2,
        "animation_speed": 1.5,
        "shift": [
          0,
          0
        ]
      },
      {
        "filename": "__base__/graphics/entity/explosion-gunshot/explosion-gunshot.png",
        "priority": "extra-high",
        "width": 34,
        "height": 38,
        "frame_count": 2,
        "animation_speed": 1.5,
        "shift": [
          0,
          0
        ]
      },
      {
        "filename": "__base__/graphics/entity/explosion-gunshot/explosion-gunshot.png",
        "priority": "extra-high",
        "width": 34,
        "height": 38,
        "frame_count": 3,
        "animation_speed": 1.5,
        "shift": [
          0,
          0
        ]
      },
      {
        "filename": "__base__/graphics/entity/explosion-gunshot/explosion-gunshot.png",
        "priority": "extra-high",
        "width": 34,
        "height": 38,
        "frame_count": 3,
        "animation_speed": 1.5,
        "shift": [
          0,
          0
        ]
      },
      {
        "filename": "__base__/graphics/entity/explosion-gunshot/explosion-gunshot.png",
        "priority": "extra-high",
        "width": 34,
        "height": 38,
        "frame_count": 3,
        "animation_speed": 1.5,
        "shift": [
          0,
          0
        ]
      }
    ],
    "rotate": true,
    "light": {
      "intensity": 1,
      "size": 10
    },
    "smoke": "smoke-fast",
    "smoke_count": 1,
    "smoke_slow_down_factor": 1
  },
  {
    "type": "explosion",
    "name": "explosion-gunshot-small",
    "flags": [
      "not-on-map"
    ],
    "animations": [
      {
        "filename": "__base__/graphics/entity/explosion-hit/explosion-hit.png",
        "priority": "extra-high",
        "width": 34,
        "height": 38,
        "frame_count": 13,
        "animation_speed": 1.5,
        "shift": [
          0,
          0
        ]
      }
    ],
    "rotate": true,
    "light": {
      "intensity": 1,
      "size": 10
    },
    "smoke": "smoke-fast",
    "smoke_count": 1,
    "smoke_slow_down_factor": 1
  },
  {
    "type": "explosion",
    "name": "explosion-hit",
    "flags": [
      "not-on-map"
    ],
    "animations": [
      {
        "filename": "__base__/graphics/entity/explosion-hit/explosion-hit.png",
        "priority": "extra-high",
        "width": 34,
        "height": 38,
        "frame_count": 13,
        "animation_speed": 1.5,
        "shift": [
          0,
          null
        ]
      }
    ],
    "light": {
      "intensity": 1,
      "size": 10
    },
    "smoke": "smoke-fast",
    "smoke_count": 1,
    "smoke_slow_down_factor": 1
  },
  {
    "type": "explosion",
    "name": "big-explosion",
    "flags": [
      "not-on-map"
    ],
    "animations": [
      {
        "filename": "__base__/graphics/entity/big-explosion/big-explosion.png",
        "priority": "extra-high",
        "flags": [
          "compressed"
        ],
        "width": 197,
        "height": 245,
        "frame_count": 47,
        "line_length": 6,
        "axially_symmetrical": false,
        "direction_count": 1,
        "shift": [
          0.1875,
          null
        ],
        "animation_speed": 0.5
      }
    ],
    "light": {
      "intensity": 1,
      "size": 50
    },
    "sound": {
      "aggregation": {
        "max_count": 1,
        "remove": true
      },
      "variations": [
        {
          "filename": "__base__/sound/fight/large-explosion-1.ogg",
          "volume": 1
        },
        {
          "filename": "__base__/sound/fight/large-explosion-2.ogg",
          "volume": 1
        }
      ]
    },
    "created_effect": {
      "type": "direct",
      "action_delivery": {
        "type": "instant",
        "target_effects": [
          {
            "type": "create-particle",
            "repeat_count": 20,
            "entity_name": "explosion-remnants-particle",
            "initial_height": 0.5,
            "speed_from_center": 0.08,
            "speed_from_center_deviation": 0.15,
            "initial_vertical_speed": 0.08,
            "initial_vertical_speed_deviation": 0.15,
            "offset_deviation": [
              [
                null,
                null
              ],
              [
                0.2,
                0.2
              ]
            ]
          }
        ]
      }
    }
  },
  {
    "type": "explosion",
    "name": "medium-explosion",
    "flags": [
      "not-on-map"
    ],
    "animations": [
      {
        "filename": "__base__/graphics/entity/medium-explosion/medium-explosion.png",
        "priority": "extra-high",
        "width": 112,
        "height": 94,
        "frame_count": 54,
        "line_length": 6,
        "shift": [
          null,
          null
        ],
        "animation_speed": 0.5
      }
    ],
    "light": {
      "intensity": 1,
      "size": 50
    },
    "sound": {
      "aggregation": {
        "max_count": 1,
        "remove": true
      },
      "variations": [
        {
          "filename": "__base__/sound/fight/large-explosion-1.ogg",
          "volume": 0.8
        },
        {
          "filename": "__base__/sound/fight/large-explosion-2.ogg",
          "volume": 0.8
        }
      ]
    },
    "created_effect": {
      "type": "direct",
      "action_delivery": {
        "type": "instant",
        "target_effects": [
          {
            "type": "create-particle",
            "repeat_count": 20,
            "entity_name": "explosion-remnants-particle",
            "initial_height": 0.5,
            "speed_from_center": 0.08,
            "speed_from_center_deviation": 0.15,
            "initial_vertical_speed": 0.08,
            "initial_vertical_speed_deviation": 0.15,
            "offset_deviation": [
              [
                null,
                null
              ],
              [
                0.2,
                0.2
              ]
            ]
          }
        ]
      }
    }
  },
  {
    "type": "explosion",
    "name": "massive-explosion",
    "flags": [
      "not-on-map"
    ],
    "animations": [
      {
        "filename": "__base__/graphics/entity/medium-explosion/medium-explosion.png",
        "priority": "extra-high",
        "width": 112,
        "height": 94,
        "scale": 0.8,
        "frame_count": 54,
        "line_length": 6,
        "shift": [
          null,
          null
        ],
        "animation_speed": 0.5
      }
    ],
    "light": {
      "intensity": 1,
      "size": 50
    },
    "sound": {
      "aggregation": {
        "max_count": 1,
        "remove": true
      },
      "variations": [
        {
          "filename": "__base__/sound/fight/large-explosion-1.ogg",
          "volume": 1.25
        },
        {
          "filename": "__base__/sound/fight/large-explosion-2.ogg",
          "volume": 1.25
        }
      ]
    },
    "created_effect": {
      "type": "direct",
      "action_delivery": {
        "type": "instant",
        "target_effects": [
          {
            "type": "create-particle",
            "repeat_count": 60,
            "entity_name": "explosion-remnants-particle",
            "initial_height": 0.5,
            "speed_from_center": 0.08,
            "speed_from_center_deviation": 0.15,
            "initial_vertical_speed": 0.08,
            "initial_vertical_speed_deviation": 0.15,
            "offset_deviation": [
              [
                null,
                null
              ],
              [
                0.2,
                0.2
              ]
            ]
          }
        ]
      }
    }
  },
  {
    "type": "explosion",
    "name": "blood-explosion-small",
    "flags": [
      "not-on-map"
    ],
    "animations": [
      {
        "filename": "__core__/graphics/empty.png",
        "priority": "extra-high",
        "width": 1,
        "height": 1,
        "frame_count": 1
      }
    ],
    "created_effect": {
      "type": "direct",
      "action_delivery": {
        "type": "instant",
        "target_effects": {
          "type": "create-entity",
          "entity_name": "blood-fountain",
          "repeat_count": 20,
          "offset_deviation": [
            [
              null,
              null
            ],
            [
              0.4,
              0.4
            ]
          ]
        }
      }
    }
  },
  {
    "type": "explosion",
    "name": "blood-explosion-big",
    "flags": [
      "not-on-map"
    ],
    "animations": [
      {
        "filename": "__core__/graphics/empty.png",
        "priority": "extra-high",
        "width": 1,
        "height": 1,
        "frame_count": 1
      }
    ],
    "created_effect": {
      "type": "direct",
      "action_delivery": {
        "type": "instant",
        "target_effects": [
          {
            "type": "create-particle",
            "repeat_count": 150,
            "entity_name": "blood-particle",
            "initial_height": 0.5,
            "speed_from_center": 0.08,
            "speed_from_center_deviation": 0.05,
            "initial_vertical_speed_deviation": 0.02,
            "offset_deviation": [
              [
                null,
                null
              ],
              [
                0.4,
                0.4
              ]
            ]
          },
          {
            "type": "create-entity",
            "entity_name": "blood-fountain",
            "repeat_count": 35,
            "offset_deviation": [
              [
                null,
                null
              ],
              [
                0.4,
                0.4
              ]
            ]
          }
        ]
      }
    }
  },
  {
    "type": "explosion",
    "name": "blood-explosion-huge",
    "flags": [
      "not-on-map"
    ],
    "animations": [
      {
        "filename": "__core__/graphics/empty.png",
        "priority": "extra-high",
        "width": 1,
        "height": 1,
        "frame_count": 1
      }
    ],
    "created_effect": {
      "type": "direct",
      "action_delivery": {
        "type": "instant",
        "target_effects": [
          {
            "type": "create-particle",
            "repeat_count": 150,
            "entity_name": "blood-particle",
            "initial_height": 0.5,
            "speed_from_center": 0.08,
            "speed_from_center_deviation": 0.05,
            "initial_vertical_speed_deviation": 0.02,
            "offset_deviation": [
              [
                null,
                null
              ],
              [
                0.4,
                0.4
              ]
            ]
          },
          {
            "type": "create-entity",
            "entity_name": "blood-fountain-big",
            "repeat_count": 35,
            "offset_deviation": [
              [
                null,
                null
              ],
              [
                1.6,
                1.6
              ]
            ]
          }
        ]
      }
    }
  },
  {
    "type": "generator",
    "name": "steam-engine",
    "icon": "__base__/graphics/icons/steam-engine.png",
    "flags": [
      "placeable-neutral",
      "player-creation"
    ],
    "minable": {
      "mining_time": 1,
      "result": "steam-engine"
    },
    "max_health": 300,
    "corpse": "big-remnants",
    "dying_explosion": "medium-explosion",
    "effectivity": 1,
    "fluid_usage_per_tick": 0.1,
    "resistances": [
      {
        "type": "fire",
        "percent": 70
      }
    ],
    "collision_box": [
      [
        null,
        null
      ],
      [
        1.35,
        2.35
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        1.5,
        2.5
      ]
    ],
    "fluid_box": {
      "base_area": 1,
      "pipe_connections": [
        {
          "position": [
            0,
            3
          ]
        },
        {
          "position": [
            0,
            null
          ]
        }
      ]
    },
    "energy_source": {
      "type": "electric",
      "usage_priority": "secondary-output"
    },
    "horizontal_animation": {
      "filename": "__base__/graphics/entity/steam-engine/steam-engine-horizontal.png",
      "width": 246,
      "height": 137,
      "frame_count": 32,
      "line_length": 8,
      "shift": [
        1.34375,
        null
      ]
    },
    "vertical_animation": {
      "filename": "__base__/graphics/entity/steam-engine/steam-engine-vertical.png",
      "width": 155,
      "height": 186,
      "frame_count": 32,
      "line_length": 8,
      "shift": [
        0.796875,
        0.03125
      ]
    },
    "smoke": [
      {
        "name": "light-smoke",
        "north_position": [
          0.9,
          0
        ],
        "east_position": [
          null,
          null
        ],
        "starting_vertical_speed": 0.08,
        "slow_down_factor": 1,
        "starting_frame_deviation": 60
      }
    ],
    "vehicle_impact_sound": {
      "filename": "__base__/sound/car-metal-impact.ogg",
      "volume": 0.65
    },
    "working_sound": {
      "sound": {
        "filename": "__base__/sound/steam-engine-90bpm.ogg",
        "volume": 0.6
      },
      "match_speed_to_activity": true
    },
    "min_perceived_performance": 0.25,
    "performance_to_sound_speedup": 0.5
  },
  {
    "type": "offshore-pump",
    "name": "offshore-pump",
    "icon": "__base__/graphics/icons/offshore-pump.png",
    "flags": [
      "placeable-neutral",
      "player-creation",
      "filter-directions"
    ],
    "minable": {
      "mining_time": 1,
      "result": "offshore-pump"
    },
    "max_health": 80,
    "corpse": "small-remnants",
    "fluid": "water",
    "resistances": [
      {
        "type": "fire",
        "percent": 70
      }
    ],
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.6,
        0.3
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        1,
        0.49
      ]
    ],
    "fluid_box": {
      "base_area": 1,
      "pipe_connections": [
        {
          "position": [
            0,
            1
          ]
        }
      ]
    },
    "pumping_speed": 1,
    "tile_width": 1,
    "vehicle_impact_sound": {
      "filename": "__base__/sound/car-metal-impact.ogg",
      "volume": 0.65
    },
    "picture": {
      "north": {
        "filename": "__base__/graphics/entity/offshore-pump/offshore-pump.png",
        "priority": "high",
        "shift": [
          0.90625,
          0.0625
        ],
        "width": 160,
        "height": 102
      },
      "east": {
        "filename": "__base__/graphics/entity/offshore-pump/offshore-pump.png",
        "priority": "high",
        "shift": [
          0.90625,
          0.0625
        ],
        "x": 160,
        "width": 160,
        "height": 102
      },
      "south": {
        "filename": "__base__/graphics/entity/offshore-pump/offshore-pump.png",
        "priority": "high",
        "shift": [
          0.90625,
          0.65625
        ],
        "x": 320,
        "width": 160,
        "height": 102
      },
      "west": {
        "filename": "__base__/graphics/entity/offshore-pump/offshore-pump.png",
        "priority": "high",
        "shift": [
          1,
          0.0625
        ],
        "x": 480,
        "width": 160,
        "height": 102
      }
    },
    "circuit_wire_connection_points": [
      {
        "shadow": {
          "red": [
            2.71875,
            0.375
          ],
          "green": [
            2.5,
            0.375
          ]
        },
        "wire": {
          "red": [
            0.84375,
            null
          ],
          "green": [
            0.6875,
            null
          ]
        }
      },
      {
        "shadow": {
          "red": [
            0.765625,
            0.546875
          ],
          "green": [
            0.765625,
            0.421875
          ]
        },
        "wire": {
          "red": [
            null,
            null
          ],
          "green": [
            null,
            null
          ]
        }
      },
      {
        "shadow": {
          "red": [
            null,
            0.5625
          ],
          "green": [
            0.0625,
            0.5625
          ]
        },
        "wire": {
          "red": [
            null,
            null
          ],
          "green": [
            null,
            null
          ]
        }
      },
      {
        "shadow": {
          "red": [
            1.78125,
            null
          ],
          "green": [
            1.78125,
            null
          ]
        },
        "wire": {
          "red": [
            0.34375,
            null
          ],
          "green": [
            0.34375,
            null
          ]
        }
      }
    ],
    "circuit_connector_sprites": [
      null,
      null,
      null,
      null
    ],
    "circuit_wire_max_distance": 7.5
  },
  null,
  null,
  null,
  null,
  null,
  {
    "type": "smoke",
    "name": "smoke-fast",
    "flags": [
      "not-on-map"
    ],
    "animation": {
      "filename": "__base__/graphics/entity/smoke-fast/smoke-fast.png",
      "priority": "high",
      "width": 50,
      "height": 50,
      "frame_count": 16,
      "duration": 60,
      "fade_away_duration": 60
    }
  },
  {
    "type": "smoke",
    "name": "smoke-train-stop",
    "flags": [
      "not-on-map"
    ],
    "animation": {
      "filename": "__base__/graphics/entity/smoke-fast/smoke-fast.png",
      "priority": "high",
      "width": 50,
      "height": 50,
      "frame_count": 16,
      "scale": 0.5
    },
    "render_layer": "lower-object",
    "affected_by_wind": false,
    "movement_slow_down_factor": 0.95,
    "duration": 40,
    "fade_away_duration": 30,
    "show_when_smoke_off": true
  },
  {
    "type": "smoke",
    "name": "smoke-building",
    "flags": [
      "not-on-map"
    ],
    "animation": {
      "filename": "__base__/graphics/entity/smoke-fast/smoke-fast.png",
      "priority": "high",
      "width": 50,
      "height": 50,
      "frame_count": 16,
      "scale": 0.5
    },
    "render_layer": "building-smoke",
    "affected_by_wind": false,
    "movement_slow_down_factor": 0.96,
    "duration": 45,
    "fade_away_duration": 20,
    "show_when_smoke_off": true
  },
  {
    "type": "smoke",
    "name": "smoke-explosion-particle",
    "flags": [
      "not-on-map"
    ],
    "animation": {
      "filename": "__base__/graphics/entity/smoke-fast/smoke-fast.png",
      "priority": "high",
      "width": 50,
      "height": 50,
      "frame_count": 16,
      "scale": 0.5,
      "tint": {
        "r": 0.1,
        "g": 0.1,
        "b": 0.1,
        "a": 0.7
      }
    },
    "render_layer": "smoke",
    "affected_by_wind": false,
    "movement_slow_down_factor": 0.96,
    "duration": 150,
    "fade_away_duration": 60,
    "show_when_smoke_off": true
  },
  {
    "type": "inserter",
    "name": "inserter",
    "icon": "__base__/graphics/icons/inserter.png",
    "flags": [
      "placeable-neutral",
      "placeable-player",
      "player-creation"
    ],
    "minable": {
      "hardness": 0.2,
      "mining_time": 0.5,
      "result": "inserter"
    },
    "max_health": 40,
    "corpse": "small-remnants",
    "resistances": [
      {
        "type": "fire",
        "percent": 90
      }
    ],
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.15,
        0.15
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.4,
        0.45
      ]
    ],
    "energy_per_movement": 5000,
    "energy_per_rotation": 5000,
    "energy_source": {
      "type": "electric",
      "usage_priority": "secondary-input",
      "drain": "0.4kW"
    },
    "extension_speed": 0.03,
    "rotation_speed": 0.014,
    "fast_replaceable_group": "inserter",
    "vehicle_impact_sound": {
      "filename": "__base__/sound/car-metal-impact.ogg",
      "volume": 0.65
    },
    "working_sound": {
      "match_progress_to_activity": true,
      "sound": [
        {
          "filename": "__base__/sound/inserter-basic-1.ogg",
          "volume": 0.75
        },
        {
          "filename": "__base__/sound/inserter-basic-2.ogg",
          "volume": 0.75
        },
        {
          "filename": "__base__/sound/inserter-basic-3.ogg",
          "volume": 0.75
        },
        {
          "filename": "__base__/sound/inserter-basic-4.ogg",
          "volume": 0.75
        },
        {
          "filename": "__base__/sound/inserter-basic-5.ogg",
          "volume": 0.75
        }
      ]
    },
    "hand_base_picture": {
      "filename": "__base__/graphics/entity/inserter/inserter-hand-base.png",
      "priority": "extra-high",
      "width": 8,
      "height": 33
    },
    "hand_closed_picture": {
      "filename": "__base__/graphics/entity/inserter/inserter-hand-closed.png",
      "priority": "extra-high",
      "width": 18,
      "height": 41
    },
    "hand_open_picture": {
      "filename": "__base__/graphics/entity/inserter/inserter-hand-open.png",
      "priority": "extra-high",
      "width": 18,
      "height": 41
    },
    "hand_base_shadow": {
      "filename": "__base__/graphics/entity/burner-inserter/burner-inserter-hand-base-shadow.png",
      "priority": "extra-high",
      "width": 8,
      "height": 34
    },
    "hand_closed_shadow": {
      "filename": "__base__/graphics/entity/burner-inserter/burner-inserter-hand-closed-shadow.png",
      "priority": "extra-high",
      "width": 18,
      "height": 41
    },
    "hand_open_shadow": {
      "filename": "__base__/graphics/entity/burner-inserter/burner-inserter-hand-open-shadow.png",
      "priority": "extra-high",
      "width": 18,
      "height": 41
    },
    "pickup_position": [
      0,
      null
    ],
    "insert_position": [
      0,
      1.2
    ],
    "platform_picture": {
      "sheet": {
        "filename": "__base__/graphics/entity/inserter/inserter-platform.png",
        "priority": "extra-high",
        "width": 46,
        "height": 46,
        "shift": [
          0.09375,
          0
        ]
      }
    }
  },
  {
    "type": "inserter",
    "name": "burner-inserter",
    "icon": "__base__/graphics/icons/burner-inserter.png",
    "flags": [
      "placeable-neutral",
      "placeable-player",
      "player-creation"
    ],
    "minable": {
      "hardness": 0.2,
      "mining_time": 0.5,
      "result": "burner-inserter"
    },
    "max_health": 40,
    "corpse": "small-remnants",
    "resistances": [
      {
        "type": "fire",
        "percent": 90
      }
    ],
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.15,
        0.15
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.4,
        0.45
      ]
    ],
    "energy_per_movement": 100000,
    "energy_per_rotation": 100000,
    "energy_source": {
      "type": "burner",
      "effectivity": 1,
      "fuel_inventory_size": 1,
      "smoke": [
        {
          "name": "smoke",
          "deviation": [
            0.1,
            0.1
          ],
          "frequency": 9
        }
      ]
    },
    "extension_speed": 0.0214,
    "fast_replaceable_group": "inserter",
    "vehicle_impact_sound": {
      "filename": "__base__/sound/car-metal-impact.ogg",
      "volume": 0.65
    },
    "working_sound": {
      "match_progress_to_activity": true,
      "sound": [
        {
          "filename": "__base__/sound/inserter-basic-1.ogg",
          "volume": 0.75
        },
        {
          "filename": "__base__/sound/inserter-basic-2.ogg",
          "volume": 0.75
        },
        {
          "filename": "__base__/sound/inserter-basic-3.ogg",
          "volume": 0.75
        },
        {
          "filename": "__base__/sound/inserter-basic-4.ogg",
          "volume": 0.75
        },
        {
          "filename": "__base__/sound/inserter-basic-5.ogg",
          "volume": 0.75
        }
      ]
    },
    "hand_base_picture": {
      "filename": "__base__/graphics/entity/burner-inserter/burner-inserter-hand-base.png",
      "priority": "extra-high",
      "width": 8,
      "height": 34
    },
    "hand_closed_picture": {
      "filename": "__base__/graphics/entity/burner-inserter/burner-inserter-hand-closed.png",
      "priority": "extra-high",
      "width": 18,
      "height": 41
    },
    "hand_open_picture": {
      "filename": "__base__/graphics/entity/burner-inserter/burner-inserter-hand-open.png",
      "priority": "extra-high",
      "width": 18,
      "height": 41
    },
    "hand_base_shadow": {
      "filename": "__base__/graphics/entity/burner-inserter/burner-inserter-hand-base-shadow.png",
      "priority": "extra-high",
      "width": 8,
      "height": 34
    },
    "hand_closed_shadow": {
      "filename": "__base__/graphics/entity/burner-inserter/burner-inserter-hand-closed-shadow.png",
      "priority": "extra-high",
      "width": 18,
      "height": 41
    },
    "hand_open_shadow": {
      "filename": "__base__/graphics/entity/burner-inserter/burner-inserter-hand-open-shadow.png",
      "priority": "extra-high",
      "width": 18,
      "height": 41
    },
    "pickup_position": [
      0,
      null
    ],
    "insert_position": [
      0,
      1.2
    ],
    "platform_picture": {
      "sheet": {
        "filename": "__base__/graphics/entity/burner-inserter/burner-inserter-platform.png",
        "priority": "extra-high",
        "width": 46,
        "height": 46,
        "shift": [
          0.09375,
          0
        ]
      }
    },
    "rotation_speed": 0.01
  },
  {
    "type": "item-entity",
    "name": "item-on-ground",
    "flags": [
      "placeable-off-grid",
      "not-on-map"
    ],
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.14,
        0.14
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.17,
        0.17
      ]
    ]
  },
  {
    "type": "pipe",
    "name": "pipe",
    "icon": "__base__/graphics/icons/pipe.png",
    "flags": [
      "placeable-neutral",
      "player-creation"
    ],
    "minable": {
      "hardness": 0.2,
      "mining_time": 0.5,
      "result": "pipe"
    },
    "max_health": 50,
    "corpse": "small-remnants",
    "resistances": [
      {
        "type": "fire",
        "percent": 90
      }
    ],
    "fast_replaceable_group": "pipe",
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.29,
        0.29
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ],
    "fluid_box": {
      "base_area": 1,
      "pipe_connections": [
        {
          "position": [
            0,
            null
          ]
        },
        {
          "position": [
            1,
            0
          ]
        },
        {
          "position": [
            0,
            1
          ]
        },
        {
          "position": [
            null,
            0
          ]
        }
      ]
    },
    "working_sound": {
      "sound": [
        {
          "filename": "__base__/sound/pipe.ogg",
          "volume": 0.85
        }
      ],
      "match_volume_to_activity": true,
      "max_sounds_per_type": 3
    },
    "horizontal_window_bounding_box": [
      [
        null,
        null
      ],
      [
        0.25,
        0.15625
      ]
    ],
    "vertical_window_bounding_box": [
      [
        null,
        null
      ],
      [
        0.03125,
        0.125
      ]
    ]
  },
  {
    "type": "radar",
    "name": "radar",
    "icon": "__base__/graphics/icons/radar.png",
    "flags": [
      "placeable-player",
      "player-creation"
    ],
    "minable": {
      "hardness": 0.2,
      "mining_time": 0.5,
      "result": "radar"
    },
    "max_health": 150,
    "corpse": "big-remnants",
    "resistances": [
      {
        "type": "fire",
        "percent": 70
      }
    ],
    "collision_box": [
      [
        null,
        null
      ],
      [
        1.4,
        1.4
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        1.5,
        1.5
      ]
    ],
    "energy_per_sector": "10MJ",
    "max_distance_of_sector_revealed": 14,
    "max_distance_of_nearby_sector_revealed": 3,
    "energy_per_nearby_scan": "250kJ",
    "energy_source": {
      "type": "electric",
      "usage_priority": "secondary-input"
    },
    "energy_usage": "300kW",
    "pictures": {
      "filename": "__base__/graphics/entity/radar/radar.png",
      "priority": "low",
      "width": 153,
      "height": 131,
      "apply_projection": false,
      "direction_count": 64,
      "line_length": 8,
      "shift": [
        0.875,
        null
      ]
    },
    "vehicle_impact_sound": {
      "filename": "__base__/sound/car-metal-impact.ogg",
      "volume": 0.65
    },
    "working_sound": {
      "sound": [
        {
          "filename": "__base__/sound/radar.ogg"
        }
      ],
      "apparent_volume": 2
    }
  },
  {
    "type": "lamp",
    "name": "small-lamp",
    "icon": "__base__/graphics/icons/small-lamp.png",
    "flags": [
      "placeable-neutral",
      "player-creation"
    ],
    "minable": {
      "hardness": 0.2,
      "mining_time": 0.5,
      "result": "small-lamp"
    },
    "max_health": 55,
    "corpse": "small-remnants",
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.15,
        0.15
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ],
    "vehicle_impact_sound": {
      "filename": "__base__/sound/car-metal-impact.ogg",
      "volume": 0.65
    },
    "energy_source": {
      "type": "electric",
      "usage_priority": "secondary-input"
    },
    "energy_usage_per_tick": "5KW",
    "light": {
      "intensity": 0.9,
      "size": 40
    },
    "light_when_colored": {
      "intensity": 1,
      "size": 6
    },
    "glow_size": 6,
    "glow_color_intensity": 0.135,
    "picture_off": {
      "filename": "__base__/graphics/entity/small-lamp/light-off.png",
      "priority": "high",
      "width": 67,
      "height": 58,
      "frame_count": 1,
      "axially_symmetrical": false,
      "direction_count": 1,
      "shift": [
        null,
        0.15625
      ]
    },
    "picture_on": {
      "filename": "__base__/graphics/entity/small-lamp/light-on-patch.png",
      "priority": "high",
      "width": 62,
      "height": 62,
      "frame_count": 1,
      "axially_symmetrical": false,
      "direction_count": 1,
      "shift": [
        null,
        null
      ]
    },
    "signal_to_color_mapping": [
      {
        "signal": "signal-red",
        "color": {
          "r": 1,
          "g": 0,
          "b": 0
        }
      },
      {
        "signal": "signal-green",
        "color": {
          "r": 0,
          "g": 1,
          "b": 0
        }
      },
      {
        "signal": "signal-blue",
        "color": {
          "r": 0,
          "g": 0,
          "b": 1
        }
      },
      {
        "signal": "signal-yellow",
        "color": {
          "r": 1,
          "g": 1,
          "b": 0
        }
      },
      {
        "signal": "signal-pink",
        "color": {
          "r": 1,
          "g": 0,
          "b": 1
        }
      },
      {
        "signal": "signal-cyan",
        "color": {
          "r": 0,
          "g": 1,
          "b": 1
        }
      }
    ],
    "circuit_wire_connection_point": {
      "shadow": {
        "red": [
          0.734375,
          0.578125
        ],
        "green": [
          0.609375,
          0.640625
        ]
      },
      "wire": {
        "red": [
          0.40625,
          0.34375
        ],
        "green": [
          0.40625,
          0.5
        ]
      }
    },
    "circuit_wire_max_distance": 7.5
  },
  {
    "type": "arrow",
    "name": "orange-arrow-with-circle",
    "flags": [
      "placeable-off-grid",
      "not-on-map"
    ],
    "blinking": true,
    "arrow_picture": {
      "filename": "__core__/graphics/arrows/gui-arrow-medium.png",
      "priority": "low",
      "width": "58",
      "height": "62"
    },
    "circle_picture": {
      "filename": "__core__/graphics/arrows/gui-arrow-circle.png",
      "priority": "low",
      "width": "50",
      "height": "50"
    }
  },
  {
    "type": "pipe-to-ground",
    "name": "pipe-to-ground",
    "icon": "__base__/graphics/icons/pipe-to-ground.png",
    "flags": [
      "placeable-neutral",
      "player-creation"
    ],
    "minable": {
      "hardness": 0.2,
      "mining_time": 0.5,
      "result": "pipe-to-ground"
    },
    "max_health": 50,
    "corpse": "small-remnants",
    "resistances": [
      {
        "type": "fire",
        "percent": 80
      }
    ],
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.29,
        0.2
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ],
    "fluid_box": {
      "base_area": 1,
      "pipe_connections": [
        {
          "position": [
            0,
            null
          ]
        },
        {
          "position": [
            0,
            1
          ],
          "max_underground_distance": 10
        }
      ]
    },
    "underground_sprite": {
      "filename": "__core__/graphics/arrows/underground-lines.png",
      "priority": "extra-high-no-scale",
      "width": 64,
      "height": 64,
      "scale": 0.5
    },
    "vehicle_impact_sound": {
      "filename": "__base__/sound/car-metal-impact.ogg",
      "volume": 0.65
    },
    "pictures": {
      "up": {
        "filename": "__base__/graphics/entity/pipe-to-ground/pipe-to-ground-up.png",
        "priority": "high",
        "width": 44,
        "height": 32
      },
      "down": {
        "filename": "__base__/graphics/entity/pipe-to-ground/pipe-to-ground-down.png",
        "priority": "high",
        "width": 40,
        "height": 32
      },
      "left": {
        "filename": "__base__/graphics/entity/pipe-to-ground/pipe-to-ground-left.png",
        "priority": "high",
        "width": 32,
        "height": 42
      },
      "right": {
        "filename": "__base__/graphics/entity/pipe-to-ground/pipe-to-ground-right.png",
        "priority": "high",
        "width": 32,
        "height": 40
      }
    }
  },
  {
    "type": "assembling-machine",
    "name": "assembling-machine-1",
    "icon": "__base__/graphics/icons/assembling-machine-1.png",
    "flags": [
      "placeable-neutral",
      "placeable-player",
      "player-creation"
    ],
    "minable": {
      "hardness": 0.2,
      "mining_time": 0.5,
      "result": "assembling-machine-1"
    },
    "max_health": 200,
    "corpse": "big-remnants",
    "dying_explosion": "medium-explosion",
    "resistances": [
      {
        "type": "fire",
        "percent": 70
      }
    ],
    "collision_box": [
      [
        null,
        null
      ],
      [
        1.2,
        1.2
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        1.5,
        1.5
      ]
    ],
    "fast_replaceable_group": "assembling-machine",
    "animation": {
      "filename": "__base__/graphics/entity/assembling-machine-1/assembling-machine-1.png",
      "priority": "high",
      "width": 99,
      "height": 102,
      "frame_count": 32,
      "line_length": 8,
      "shift": [
        0.25,
        null
      ]
    },
    "crafting_categories": [
      "crafting"
    ],
    "crafting_speed": 0.5,
    "energy_source": {
      "type": "electric",
      "usage_priority": "secondary-input"
    },
    "energy_usage": "90kW",
    "ingredient_count": 2,
    "open_sound": {
      "filename": "__base__/sound/machine-open.ogg",
      "volume": 0.85
    },
    "close_sound": {
      "filename": "__base__/sound/machine-close.ogg",
      "volume": 0.75
    },
    "vehicle_impact_sound": {
      "filename": "__base__/sound/car-metal-impact.ogg",
      "volume": 0.65
    },
    "working_sound": {
      "sound": [
        {
          "filename": "__base__/sound/assembling-machine-t1-1.ogg",
          "volume": 0.8
        },
        {
          "filename": "__base__/sound/assembling-machine-t1-2.ogg",
          "volume": 0.8
        }
      ],
      "idle_sound": {
        "filename": "__base__/sound/idle1.ogg",
        "volume": 0.6
      },
      "apparent_volume": 1.5
    }
  },
  {
    "type": "flying-text",
    "name": "flying-text",
    "flags": [
      "not-on-map"
    ],
    "time_to_live": 150,
    "speed": 0.05
  },
  {
    "type": "corpse",
    "name": "acid-splash-purple",
    "flags": [
      "not-on-map"
    ],
    "final_render_layer": "corpse",
    "splash": [
      {
        "filename": "__base__/graphics/entity/acid-splash-purple/splash-1.png",
        "line_length": 5,
        "width": 199,
        "height": 159,
        "frame_count": 20,
        "shift": [
          0.484375,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/acid-splash-purple/splash-2.png",
        "line_length": 5,
        "width": 238,
        "height": 157,
        "frame_count": 20,
        "shift": [
          0.8125,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/acid-splash-purple/splash-3.png",
        "line_length": 5,
        "width": 240,
        "height": 162,
        "frame_count": 20,
        "shift": [
          0.71875,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/acid-splash-purple/splash-4.png",
        "line_length": 5,
        "width": 241,
        "height": 146,
        "frame_count": 20,
        "shift": [
          0.703125,
          null
        ]
      }
    ],
    "splash_speed": 0.03
  },
  {
    "type": "entity-ghost",
    "name": "entity-ghost",
    "flags": [
      "not-on-map"
    ],
    "minable": {
      "mining_time": 0,
      "results": {}
    }
  },
  {
    "type": "tile-ghost",
    "name": "tile-ghost",
    "flags": [
      "not-on-map"
    ],
    "minable": {
      "mining_time": 0,
      "results": {}
    },
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ]
  },
  {
    "type": "deconstructible-tile-proxy",
    "name": "deconstructible-tile-proxy",
    "flags": [
      "not-on-map"
    ],
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.4,
        0.4
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ]
  },
  {
    "type": "item-request-proxy",
    "name": "item-request-proxy",
    "picture": {
      "filename": "__core__/graphics/logistic-delivery.png",
      "priority": "extra-high",
      "width": 100,
      "height": 89,
      "shift": [
        0,
        0
      ],
      "scale": 0.5
    },
    "flags": [
      "not-on-map",
      "placeable-off-grid"
    ],
    "minable": {
      "mining_time": 0,
      "results": {}
    },
    "collision_box": [
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.6
      ]
    ]
  },
  {
    "type": "explosion",
    "name": "water-splash",
    "flags": [
      "not-on-map"
    ],
    "animations": [
      {
        "filename": "__base__/graphics/entity/water-splash/water-splash.png",
        "priority": "extra-high",
        "width": 92,
        "height": 66,
        "frame_count": 15,
        "line_length": 5,
        "shift": [
          null,
          0.5
        ],
        "animation_speed": 0.35
      }
    ]
  },
  {
    "type": "wall",
    "name": "stone-wall",
    "icon": "__base__/graphics/icons/stone-wall.png",
    "flags": [
      "placeable-neutral",
      "player-creation"
    ],
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.29,
        0.29
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ],
    "minable": {
      "mining_time": 0.5,
      "result": "stone-wall"
    },
    "fast_replaceable_group": "wall",
    "max_health": 350,
    "repair_speed_modifier": 2,
    "corpse": "wall-remnants",
    "repair_sound": {
      "filename": "__base__/sound/manual-repair-simple.ogg"
    },
    "mined_sound": {
      "filename": "__base__/sound/deconstruct-bricks.ogg"
    },
    "vehicle_impact_sound": {
      "filename": "__base__/sound/car-stone-impact.ogg",
      "volume": 1
    },
    "connected_gate_visualization": {
      "filename": "__core__/graphics/arrows/underground-lines.png",
      "priority": "high",
      "width": 64,
      "height": 64,
      "scale": 0.5
    },
    "resistances": [
      {
        "type": "physical",
        "decrease": 3,
        "percent": 20
      },
      {
        "type": "impact",
        "decrease": 45,
        "percent": 60
      },
      {
        "type": "explosion",
        "decrease": 10,
        "percent": 30
      },
      {
        "type": "fire",
        "percent": 100
      },
      {
        "type": "laser",
        "percent": 70
      }
    ],
    "pictures": {
      "single": {
        "layers": [
          {
            "filename": "__base__/graphics/entity/stone-wall/wall-single.png",
            "priority": "extra-high",
            "width": 22,
            "height": 42,
            "shift": [
              0,
              null
            ]
          },
          {
            "filename": "__base__/graphics/entity/stone-wall/wall-single-shadow.png",
            "priority": "extra-high",
            "width": 47,
            "height": 32,
            "shift": [
              0.359375,
              0.5
            ],
            "draw_as_shadow": true
          }
        ]
      },
      "straight_vertical": [
        {
          "layers": [
            {
              "filename": "__base__/graphics/entity/stone-wall/wall-straight-vertical-1.png",
              "priority": "extra-high",
              "width": 22,
              "height": 42,
              "shift": [
                0,
                null
              ]
            },
            {
              "filename": "__base__/graphics/entity/stone-wall/wall-straight-vertical-shadow.png",
              "priority": "extra-high",
              "width": 47,
              "height": 60,
              "shift": [
                0.390625,
                0.625
              ],
              "draw_as_shadow": true
            }
          ]
        },
        {
          "layers": [
            {
              "filename": "__base__/graphics/entity/stone-wall/wall-straight-vertical-2.png",
              "priority": "extra-high",
              "width": 22,
              "height": 42,
              "shift": [
                0,
                null
              ]
            },
            {
              "filename": "__base__/graphics/entity/stone-wall/wall-straight-vertical-shadow.png",
              "priority": "extra-high",
              "width": 47,
              "height": 60,
              "shift": [
                0.390625,
                0.625
              ],
              "draw_as_shadow": true
            }
          ]
        },
        {
          "layers": [
            {
              "filename": "__base__/graphics/entity/stone-wall/wall-straight-vertical-3.png",
              "priority": "extra-high",
              "width": 22,
              "height": 42,
              "shift": [
                0,
                null
              ]
            },
            {
              "filename": "__base__/graphics/entity/stone-wall/wall-straight-vertical-shadow.png",
              "priority": "extra-high",
              "width": 47,
              "height": 60,
              "shift": [
                0.390625,
                0.625
              ],
              "draw_as_shadow": true
            }
          ]
        }
      ],
      "straight_horizontal": [
        {
          "layers": [
            {
              "filename": "__base__/graphics/entity/stone-wall/wall-straight-horizontal-1.png",
              "priority": "extra-high",
              "width": 32,
              "height": 42,
              "shift": [
                0,
                null
              ]
            },
            {
              "filename": "__base__/graphics/entity/stone-wall/wall-straight-horizontal-shadow.png",
              "priority": "extra-high",
              "width": 59,
              "height": 32,
              "shift": [
                0.421875,
                0.5
              ],
              "draw_as_shadow": true
            }
          ]
        },
        {
          "layers": [
            {
              "filename": "__base__/graphics/entity/stone-wall/wall-straight-horizontal-2.png",
              "priority": "extra-high",
              "width": 32,
              "height": 42,
              "shift": [
                0,
                null
              ]
            },
            {
              "filename": "__base__/graphics/entity/stone-wall/wall-straight-horizontal-shadow.png",
              "priority": "extra-high",
              "width": 59,
              "height": 32,
              "shift": [
                0.421875,
                0.5
              ],
              "draw_as_shadow": true
            }
          ]
        },
        {
          "layers": [
            {
              "filename": "__base__/graphics/entity/stone-wall/wall-straight-horizontal-3.png",
              "priority": "extra-high",
              "width": 32,
              "height": 42,
              "shift": [
                0,
                null
              ]
            },
            {
              "filename": "__base__/graphics/entity/stone-wall/wall-straight-horizontal-shadow.png",
              "priority": "extra-high",
              "width": 59,
              "height": 32,
              "shift": [
                0.421875,
                0.5
              ],
              "draw_as_shadow": true
            }
          ]
        }
      ],
      "corner_right_down": {
        "layers": [
          {
            "filename": "__base__/graphics/entity/stone-wall/wall-corner-right-down.png",
            "priority": "extra-high",
            "width": 27,
            "height": 42,
            "shift": [
              0.078125,
              null
            ]
          },
          {
            "filename": "__base__/graphics/entity/stone-wall/wall-corner-right-down-shadow.png",
            "priority": "extra-high",
            "width": 53,
            "height": 61,
            "shift": [
              0.484375,
              0.640625
            ],
            "draw_as_shadow": true
          }
        ]
      },
      "corner_left_down": {
        "layers": [
          {
            "filename": "__base__/graphics/entity/stone-wall/wall-corner-left-down.png",
            "priority": "extra-high",
            "width": 27,
            "height": 42,
            "shift": [
              null,
              null
            ]
          },
          {
            "filename": "__base__/graphics/entity/stone-wall/wall-corner-left-down-shadow.png",
            "priority": "extra-high",
            "width": 53,
            "height": 60,
            "shift": [
              0.328125,
              0.640625
            ],
            "draw_as_shadow": true
          }
        ]
      },
      "t_up": {
        "layers": [
          {
            "filename": "__base__/graphics/entity/stone-wall/wall-t-down.png",
            "priority": "extra-high",
            "width": 32,
            "height": 42,
            "shift": [
              0,
              null
            ]
          },
          {
            "filename": "__base__/graphics/entity/stone-wall/wall-t-down-shadow.png",
            "priority": "extra-high",
            "width": 71,
            "height": 61,
            "shift": [
              0.546875,
              0.640625
            ],
            "draw_as_shadow": true
          }
        ]
      },
      "ending_right": {
        "layers": [
          {
            "filename": "__base__/graphics/entity/stone-wall/wall-ending-right.png",
            "priority": "extra-high",
            "width": 27,
            "height": 42,
            "shift": [
              0.078125,
              null
            ]
          },
          {
            "filename": "__base__/graphics/entity/stone-wall/wall-ending-right-shadow.png",
            "priority": "extra-high",
            "width": 53,
            "height": 32,
            "shift": [
              0.484375,
              0.5
            ],
            "draw_as_shadow": true
          }
        ]
      },
      "ending_left": {
        "layers": [
          {
            "filename": "__base__/graphics/entity/stone-wall/wall-ending-left.png",
            "priority": "extra-high",
            "width": 27,
            "height": 42,
            "shift": [
              null,
              null
            ]
          },
          {
            "filename": "__base__/graphics/entity/stone-wall/wall-ending-left-shadow.png",
            "priority": "extra-high",
            "width": 53,
            "height": 32,
            "shift": [
              0.328125,
              0.5
            ],
            "draw_as_shadow": true
          }
        ]
      }
    },
    "circuit_wire_connection_point": {
      "shadow": {
        "red": [
          0.890625,
          0.828125
        ],
        "green": [
          0.890625,
          0.703125
        ]
      },
      "wire": {
        "red": [
          null,
          null
        ],
        "green": [
          null,
          null
        ]
      }
    },
    "circuit_wire_max_distance": 7.5
  },
  {
    "type": "corpse",
    "name": "wall-remnants",
    "icon": "__base__/graphics/icons/wall-remnants.png",
    "flags": [
      "placeable-neutral",
      "not-on-map"
    ],
    "subgroup": "remnants",
    "order": "d[remnants]-c[wall]",
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.4,
        0.4
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ],
    "selectable_in_game": false,
    "final_render_layer": "remnants",
    "animation": [
      {
        "width": 36,
        "height": 36,
        "frame_count": 1,
        "direction_count": 1,
        "filename": "__base__/graphics/entity/stone-wall/remains/wall-remain-01.png"
      },
      {
        "width": 38,
        "height": 35,
        "frame_count": 1,
        "direction_count": 1,
        "filename": "__base__/graphics/entity/stone-wall/remains/wall-remain-02.png"
      },
      {
        "width": 35,
        "height": 36,
        "frame_count": 1,
        "direction_count": 1,
        "filename": "__base__/graphics/entity/stone-wall/remains/wall-remain-03.png"
      },
      {
        "width": 41,
        "height": 36,
        "frame_count": 1,
        "direction_count": 1,
        "filename": "__base__/graphics/entity/stone-wall/remains/wall-remain-04.png"
      },
      {
        "width": 35,
        "height": 35,
        "frame_count": 1,
        "direction_count": 1,
        "filename": "__base__/graphics/entity/stone-wall/remains/wall-remain-05.png"
      },
      {
        "width": 50,
        "height": 37,
        "frame_count": 1,
        "direction_count": 1,
        "filename": "__base__/graphics/entity/stone-wall/remains/wall-remain-06.png"
      },
      {
        "width": 54,
        "height": 40,
        "frame_count": 1,
        "direction_count": 1,
        "filename": "__base__/graphics/entity/stone-wall/remains/wall-remain-07.png"
      },
      {
        "width": 43,
        "height": 45,
        "frame_count": 1,
        "direction_count": 1,
        "filename": "__base__/graphics/entity/stone-wall/remains/wall-remain-08.png"
      }
    ]
  },
  {
    "type": "mining-drill",
    "name": "electric-mining-drill",
    "icon": "__base__/graphics/icons/electric-mining-drill.png",
    "flags": [
      "placeable-neutral",
      "player-creation"
    ],
    "minable": {
      "mining_time": 1,
      "result": "electric-mining-drill"
    },
    "max_health": 300,
    "resource_categories": [
      "basic-solid"
    ],
    "corpse": "big-remnants",
    "collision_box": [
      [
        null,
        null
      ],
      [
        1.4,
        1.4
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        1.5,
        1.5
      ]
    ],
    "vehicle_impact_sound": {
      "filename": "__base__/sound/car-metal-impact.ogg",
      "volume": 0.65
    },
    "working_sound": {
      "sound": {
        "filename": "__base__/sound/electric-mining-drill.ogg",
        "volume": 0.75
      },
      "apparent_volume": 1.5
    },
    "animations": {
      "north": {
        "priority": "extra-high",
        "width": 110,
        "height": 114,
        "line_length": 8,
        "shift": [
          0.2,
          null
        ],
        "filename": "__base__/graphics/entity/electric-mining-drill/north.png",
        "frame_count": 64,
        "animation_speed": 0.5,
        "run_mode": "forward-then-backward"
      },
      "east": {
        "priority": "extra-high",
        "width": 129,
        "height": 100,
        "line_length": 8,
        "shift": [
          0.45,
          0
        ],
        "filename": "__base__/graphics/entity/electric-mining-drill/east.png",
        "frame_count": 64,
        "animation_speed": 0.5,
        "run_mode": "forward-then-backward"
      },
      "south": {
        "priority": "extra-high",
        "width": 109,
        "height": 111,
        "line_length": 8,
        "shift": [
          0.15,
          0
        ],
        "filename": "__base__/graphics/entity/electric-mining-drill/south.png",
        "frame_count": 64,
        "animation_speed": 0.5,
        "run_mode": "forward-then-backward"
      },
      "west": {
        "priority": "extra-high",
        "width": 128,
        "height": 100,
        "line_length": 8,
        "shift": [
          0.25,
          0
        ],
        "filename": "__base__/graphics/entity/electric-mining-drill/west.png",
        "frame_count": 64,
        "animation_speed": 0.5,
        "run_mode": "forward-then-backward"
      }
    },
    "mining_speed": 0.5,
    "energy_source": {
      "type": "electric",
      "usage_priority": "secondary-input"
    },
    "energy_usage": "90kW",
    "mining_power": 3,
    "resource_searching_radius": 2.49,
    "vector_to_place_result": [
      0,
      null
    ],
    "module_specification": {
      "module_slots": 3
    },
    "radius_visualisation_picture": {
      "filename": "__base__/graphics/entity/electric-mining-drill/electric-mining-drill-radius-visualization.png",
      "width": 12,
      "height": 12
    },
    "fast_replaceable_group": "mining-drill"
  },
  {
    "type": "mining-drill",
    "name": "burner-mining-drill",
    "icon": "__base__/graphics/icons/burner-mining-drill.png",
    "flags": [
      "placeable-neutral",
      "player-creation"
    ],
    "resource_categories": [
      "basic-solid"
    ],
    "minable": {
      "mining_time": 1,
      "result": "burner-mining-drill"
    },
    "max_health": 100,
    "corpse": "medium-remnants",
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.9,
        0.9
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        1,
        1
      ]
    ],
    "mining_speed": 0.35,
    "working_sound": {
      "sound": {
        "filename": "__base__/sound/burner-mining-drill.ogg",
        "volume": 0.8
      }
    },
    "energy_source": {
      "type": "burner",
      "effectivity": 1,
      "fuel_inventory_size": 1,
      "smoke": [
        {
          "name": "smoke",
          "deviation": [
            0.1,
            0.1
          ],
          "frequency": 3
        }
      ]
    },
    "energy_usage": "300kW",
    "mining_power": 2.5,
    "animations": {
      "north": {
        "priority": "extra-high",
        "width": 110,
        "height": 76,
        "line_length": 4,
        "shift": [
          0.6875,
          null
        ],
        "filename": "__base__/graphics/entity/burner-mining-drill/north.png",
        "frame_count": 32,
        "animation_speed": 0.5,
        "run_mode": "forward-then-backward"
      },
      "east": {
        "priority": "extra-high",
        "width": 94,
        "height": 74,
        "line_length": 4,
        "shift": [
          0.4375,
          null
        ],
        "filename": "__base__/graphics/entity/burner-mining-drill/east.png",
        "frame_count": 32,
        "animation_speed": 0.5,
        "run_mode": "forward-then-backward"
      },
      "south": {
        "priority": "extra-high",
        "width": 89,
        "height": 88,
        "line_length": 4,
        "shift": [
          0.40625,
          0
        ],
        "filename": "__base__/graphics/entity/burner-mining-drill/south.png",
        "frame_count": 32,
        "animation_speed": 0.5,
        "run_mode": "forward-then-backward"
      },
      "west": {
        "priority": "extra-high",
        "width": 91,
        "height": 78,
        "line_length": 4,
        "shift": [
          0.09375,
          null
        ],
        "filename": "__base__/graphics/entity/burner-mining-drill/west.png",
        "frame_count": 32,
        "animation_speed": 0.5,
        "run_mode": "forward-then-backward"
      }
    },
    "resource_searching_radius": 0.99,
    "vector_to_place_result": [
      null,
      null
    ],
    "fast_replaceable_group": "mining-drill"
  },
  {
    "type": "particle",
    "name": "iron-ore-particle",
    "flags": [
      "not-on-map"
    ],
    "life_time": 180,
    "pictures": [
      {
        "filename": "__base__/graphics/entity/iron-ore-particle/iron-ore-particle-1.png",
        "priority": "extra-high",
        "width": 5,
        "height": 5,
        "frame_count": 1
      },
      {
        "filename": "__base__/graphics/entity/iron-ore-particle/iron-ore-particle-2.png",
        "priority": "extra-high",
        "width": 7,
        "height": 5,
        "frame_count": 1
      },
      {
        "filename": "__base__/graphics/entity/iron-ore-particle/iron-ore-particle-3.png",
        "priority": "extra-high",
        "width": 6,
        "height": 7,
        "frame_count": 1
      },
      {
        "filename": "__base__/graphics/entity/iron-ore-particle/iron-ore-particle-4.png",
        "priority": "extra-high",
        "width": 9,
        "height": 8,
        "frame_count": 1
      }
    ],
    "shadows": [
      {
        "filename": "__base__/graphics/entity/iron-ore-particle/iron-ore-particle-shadow-1.png",
        "priority": "extra-high",
        "width": 5,
        "height": 5,
        "frame_count": 1
      },
      {
        "filename": "__base__/graphics/entity/iron-ore-particle/iron-ore-particle-shadow-2.png",
        "priority": "extra-high",
        "width": 7,
        "height": 5,
        "frame_count": 1
      },
      {
        "filename": "__base__/graphics/entity/iron-ore-particle/iron-ore-particle-shadow-3.png",
        "priority": "extra-high",
        "width": 6,
        "height": 7,
        "frame_count": 1
      },
      {
        "filename": "__base__/graphics/entity/iron-ore-particle/iron-ore-particle-shadow-4.png",
        "priority": "extra-high",
        "width": 9,
        "height": 8,
        "frame_count": 1
      }
    ]
  },
  {
    "type": "particle",
    "name": "copper-ore-particle",
    "flags": [
      "not-on-map"
    ],
    "life_time": 180,
    "pictures": [
      {
        "filename": "__base__/graphics/entity/copper-ore-particle/copper-ore-particle-1.png",
        "priority": "extra-high",
        "width": 5,
        "height": 5,
        "frame_count": 1
      },
      {
        "filename": "__base__/graphics/entity/copper-ore-particle/copper-ore-particle-2.png",
        "priority": "extra-high",
        "width": 6,
        "height": 4,
        "frame_count": 1
      },
      {
        "filename": "__base__/graphics/entity/copper-ore-particle/copper-ore-particle-3.png",
        "priority": "extra-high",
        "width": 7,
        "height": 8,
        "frame_count": 1
      },
      {
        "filename": "__base__/graphics/entity/copper-ore-particle/copper-ore-particle-4.png",
        "priority": "extra-high",
        "width": 6,
        "height": 5,
        "frame_count": 1
      }
    ],
    "shadows": [
      {
        "filename": "__base__/graphics/entity/copper-ore-particle/copper-ore-particle-shadow-1.png",
        "priority": "extra-high",
        "width": 5,
        "height": 5,
        "frame_count": 1
      },
      {
        "filename": "__base__/graphics/entity/copper-ore-particle/copper-ore-particle-shadow-2.png",
        "priority": "extra-high",
        "width": 6,
        "height": 4,
        "frame_count": 1
      },
      {
        "filename": "__base__/graphics/entity/copper-ore-particle/copper-ore-particle-shadow-3.png",
        "priority": "extra-high",
        "width": 7,
        "height": 8,
        "frame_count": 1
      },
      {
        "filename": "__base__/graphics/entity/copper-ore-particle/copper-ore-particle-shadow-4.png",
        "priority": "extra-high",
        "width": 6,
        "height": 5,
        "frame_count": 1
      }
    ]
  },
  {
    "type": "particle",
    "name": "stone-particle",
    "flags": [
      "not-on-map"
    ],
    "life_time": 180,
    "pictures": [
      {
        "filename": "__base__/graphics/entity/stone-particle/stone-particle-1.png",
        "priority": "extra-high",
        "width": 5,
        "height": 4,
        "frame_count": 1
      },
      {
        "filename": "__base__/graphics/entity/stone-particle/stone-particle-2.png",
        "priority": "extra-high",
        "width": 4,
        "height": 4,
        "frame_count": 1
      },
      {
        "filename": "__base__/graphics/entity/stone-particle/stone-particle-3.png",
        "priority": "extra-high",
        "width": 5,
        "height": 6,
        "frame_count": 1
      },
      {
        "filename": "__base__/graphics/entity/stone-particle/stone-particle-4.png",
        "priority": "extra-high",
        "width": 7,
        "height": 7,
        "frame_count": 1
      }
    ],
    "shadows": [
      {
        "filename": "__base__/graphics/entity/stone-particle/stone-particle-shadow-1.png",
        "priority": "extra-high",
        "width": 5,
        "height": 4,
        "frame_count": 1
      },
      {
        "filename": "__base__/graphics/entity/stone-particle/stone-particle-shadow-2.png",
        "priority": "extra-high",
        "width": 4,
        "height": 4,
        "frame_count": 1
      },
      {
        "filename": "__base__/graphics/entity/stone-particle/stone-particle-shadow-3.png",
        "priority": "extra-high",
        "width": 5,
        "height": 6,
        "frame_count": 1
      },
      {
        "filename": "__base__/graphics/entity/stone-particle/stone-particle-shadow-4.png",
        "priority": "extra-high",
        "width": 7,
        "height": 7,
        "frame_count": 1
      }
    ]
  },
  {
    "type": "particle",
    "name": "coal-particle",
    "flags": [
      "not-on-map"
    ],
    "life_time": 180,
    "pictures": [
      {
        "filename": "__base__/graphics/entity/coal-particle/coal-particle-1.png",
        "priority": "extra-high",
        "width": 5,
        "height": 5,
        "frame_count": 1
      },
      {
        "filename": "__base__/graphics/entity/coal-particle/coal-particle-2.png",
        "priority": "extra-high",
        "width": 7,
        "height": 6,
        "frame_count": 1
      },
      {
        "filename": "__base__/graphics/entity/coal-particle/coal-particle-3.png",
        "priority": "extra-high",
        "width": 3,
        "height": 6,
        "frame_count": 1
      },
      {
        "filename": "__base__/graphics/entity/coal-particle/coal-particle-4.png",
        "priority": "extra-high",
        "width": 4,
        "height": 4,
        "frame_count": 1
      }
    ],
    "shadows": [
      {
        "filename": "__base__/graphics/entity/coal-particle/coal-particle-shadow-1.png",
        "priority": "extra-high",
        "width": 5,
        "height": 5,
        "frame_count": 1
      },
      {
        "filename": "__base__/graphics/entity/coal-particle/coal-particle-shadow-2.png",
        "priority": "extra-high",
        "width": 7,
        "height": 6,
        "frame_count": 1
      },
      {
        "filename": "__base__/graphics/entity/coal-particle/coal-particle-shadow-3.png",
        "priority": "extra-high",
        "width": 3,
        "height": 6,
        "frame_count": 1
      },
      {
        "filename": "__base__/graphics/entity/coal-particle/coal-particle-shadow-4.png",
        "priority": "extra-high",
        "width": 6,
        "height": 4,
        "frame_count": 1
      }
    ]
  },
  {
    "type": "particle",
    "name": "wooden-particle",
    "flags": [
      "not-on-map"
    ],
    "life_time": 180,
    "pictures": [
      {
        "filename": "__base__/graphics/entity/wooden-particle/wooden-particle-1.png",
        "priority": "extra-high",
        "width": 5,
        "height": 5,
        "frame_count": 1
      },
      {
        "filename": "__base__/graphics/entity/wooden-particle/wooden-particle-2.png",
        "priority": "extra-high",
        "width": 6,
        "height": 4,
        "frame_count": 1
      },
      {
        "filename": "__base__/graphics/entity/wooden-particle/wooden-particle-3.png",
        "priority": "extra-high",
        "width": 7,
        "height": 8,
        "frame_count": 1
      },
      {
        "filename": "__base__/graphics/entity/wooden-particle/wooden-particle-4.png",
        "priority": "extra-high",
        "width": 6,
        "height": 5,
        "frame_count": 1
      }
    ],
    "shadows": [
      {
        "filename": "__base__/graphics/entity/wooden-particle/wooden-particle-shadow-1.png",
        "priority": "extra-high",
        "width": 5,
        "height": 5,
        "frame_count": 1
      },
      {
        "filename": "__base__/graphics/entity/wooden-particle/wooden-particle-shadow-2.png",
        "priority": "extra-high",
        "width": 6,
        "height": 4,
        "frame_count": 1
      },
      {
        "filename": "__base__/graphics/entity/wooden-particle/wooden-particle-shadow-3.png",
        "priority": "extra-high",
        "width": 7,
        "height": 8,
        "frame_count": 1
      },
      {
        "filename": "__base__/graphics/entity/wooden-particle/wooden-particle-shadow-4.png",
        "priority": "extra-high",
        "width": 6,
        "height": 5,
        "frame_count": 1
      }
    ]
  },
  {
    "type": "particle",
    "name": "shell-particle",
    "flags": [
      "not-on-map"
    ],
    "life_time": 600,
    "pictures": [
      {
        "filename": "__base__/graphics/entity/shell-particle/shell-particle-1.png",
        "priority": "extra-high",
        "width": 6,
        "height": 6,
        "frame_count": 5
      },
      {
        "filename": "__base__/graphics/entity/shell-particle/shell-particle-2.png",
        "priority": "extra-high",
        "width": 5,
        "height": 7,
        "frame_count": 5
      }
    ],
    "shadows": [
      {
        "filename": "__base__/graphics/entity/shell-particle/shell-particle-shadow-1.png",
        "priority": "extra-high",
        "width": 9,
        "height": 7,
        "frame_count": 5
      },
      {
        "filename": "__base__/graphics/entity/shell-particle/shell-particle-shadow-2.png",
        "priority": "extra-high",
        "width": 7,
        "height": 8,
        "frame_count": 5
      }
    ]
  },
  {
    "type": "particle",
    "name": "explosion-remnants-particle",
    "flags": [
      "not-on-map"
    ],
    "pictures": {
      "sheet": {
        "filename": "__base__/graphics/entity/explosion-particle/explosion-particle.png",
        "priority": "extra-high",
        "width": 38,
        "height": 38,
        "frame_count": 10,
        "animation_speed": 0.5,
        "variation_count": 40
      }
    },
    "shadows": {
      "sheet": {
        "filename": "__base__/graphics/entity/explosion-particle/explosion-particle-shadow.png",
        "priority": "extra-high",
        "width": 48,
        "height": 38,
        "frame_count": 10,
        "animation_speed": 0.5,
        "variation_count": 40,
        "shift": [
          0.0625,
          0
        ]
      }
    },
    "regular_trigger_effect": {
      "type": "create-smoke",
      "entity_name": "smoke-explosion-particle",
      "starting_frame_deviation": 5,
      "starting_frame_speed_deviation": 5,
      "offset_deviation": [
        [
          null,
          null
        ],
        [
          0.06,
          0.06
        ]
      ],
      "speed_from_center": 0.007
    },
    "regular_trigger_effect_frequency": 1,
    "ended_in_water_trigger_effect": {
      "type": "create-entity",
      "entity_name": "water-splash"
    }
  },
  {
    "type": "particle",
    "name": "blood-particle",
    "flags": [
      "not-on-map"
    ],
    "movement_modifier_when_on_ground": 0,
    "life_time": 180,
    "pictures": [
      {
        "filename": "__base__/graphics/entity/blood-particle/blood-particle-01.png",
        "priority": "extra-high",
        "width": 5,
        "height": 6,
        "frame_count": 6
      },
      {
        "filename": "__base__/graphics/entity/blood-particle/blood-particle-02.png",
        "priority": "extra-high",
        "width": 4,
        "height": 3,
        "frame_count": 6
      },
      {
        "filename": "__base__/graphics/entity/blood-particle/blood-particle-03.png",
        "priority": "extra-high",
        "width": 4,
        "height": 7,
        "frame_count": 6
      },
      {
        "filename": "__base__/graphics/entity/blood-particle/blood-particle-04.png",
        "priority": "extra-high",
        "width": 3,
        "height": 3,
        "frame_count": 6
      },
      {
        "filename": "__base__/graphics/entity/blood-particle/blood-particle-05.png",
        "priority": "extra-high",
        "width": 4,
        "height": 5,
        "frame_count": 6
      },
      {
        "filename": "__base__/graphics/entity/blood-particle/blood-particle-06.png",
        "priority": "extra-high",
        "width": 7,
        "height": 3,
        "frame_count": 6
      },
      {
        "filename": "__base__/graphics/entity/blood-particle/blood-particle-07.png",
        "priority": "extra-high",
        "width": 5,
        "height": 5,
        "frame_count": 6
      },
      {
        "filename": "__base__/graphics/entity/blood-particle/blood-particle-08.png",
        "priority": "extra-high",
        "width": 9,
        "height": 10,
        "frame_count": 6
      },
      {
        "filename": "__base__/graphics/entity/blood-particle/blood-particle-09.png",
        "priority": "extra-high",
        "width": 7,
        "height": 4,
        "frame_count": 6
      },
      {
        "filename": "__base__/graphics/entity/blood-particle/blood-particle-10.png",
        "priority": "extra-high",
        "width": 4,
        "height": 5,
        "frame_count": 6
      },
      {
        "filename": "__base__/graphics/entity/blood-particle/blood-particle-11.png",
        "priority": "extra-high",
        "width": 4,
        "height": 5,
        "frame_count": 6
      },
      {
        "filename": "__base__/graphics/entity/blood-particle/blood-particle-12.png",
        "priority": "extra-high",
        "width": 4,
        "height": 5,
        "frame_count": 6
      },
      {
        "filename": "__base__/graphics/entity/blood-particle/blood-particle-13.png",
        "priority": "extra-high",
        "width": 4,
        "height": 5,
        "frame_count": 6
      }
    ],
    "shadows": [
      {
        "filename": "__base__/graphics/entity/blood-particle/blood-particle-01.png",
        "priority": "extra-high",
        "width": 5,
        "height": 6,
        "frame_count": 6
      },
      {
        "filename": "__base__/graphics/entity/blood-particle/blood-particle-02.png",
        "priority": "extra-high",
        "width": 4,
        "height": 3,
        "frame_count": 6
      },
      {
        "filename": "__base__/graphics/entity/blood-particle/blood-particle-03.png",
        "priority": "extra-high",
        "width": 4,
        "height": 7,
        "frame_count": 6
      },
      {
        "filename": "__base__/graphics/entity/blood-particle/blood-particle-04.png",
        "priority": "extra-high",
        "width": 3,
        "height": 3,
        "frame_count": 6
      },
      {
        "filename": "__base__/graphics/entity/blood-particle/blood-particle-05.png",
        "priority": "extra-high",
        "width": 4,
        "height": 5,
        "frame_count": 6
      },
      {
        "filename": "__base__/graphics/entity/blood-particle/blood-particle-06.png",
        "priority": "extra-high",
        "width": 7,
        "height": 3,
        "frame_count": 6
      },
      {
        "filename": "__base__/graphics/entity/blood-particle/blood-particle-07.png",
        "priority": "extra-high",
        "width": 5,
        "height": 5,
        "frame_count": 6
      },
      {
        "filename": "__base__/graphics/entity/blood-particle/blood-particle-08.png",
        "priority": "extra-high",
        "width": 9,
        "height": 10,
        "frame_count": 6
      },
      {
        "filename": "__base__/graphics/entity/blood-particle/blood-particle-09.png",
        "priority": "extra-high",
        "width": 7,
        "height": 4,
        "frame_count": 6
      },
      {
        "filename": "__base__/graphics/entity/blood-particle/blood-particle-10.png",
        "priority": "extra-high",
        "width": 4,
        "height": 5,
        "frame_count": 6
      },
      {
        "filename": "__base__/graphics/entity/blood-particle/blood-particle-11.png",
        "priority": "extra-high",
        "width": 4,
        "height": 5,
        "frame_count": 6
      },
      {
        "filename": "__base__/graphics/entity/blood-particle/blood-particle-12.png",
        "priority": "extra-high",
        "width": 4,
        "height": 5,
        "frame_count": 6
      },
      {
        "filename": "__base__/graphics/entity/blood-particle/blood-particle-13.png",
        "priority": "extra-high",
        "width": 4,
        "height": 5,
        "frame_count": 6
      }
    ]
  },
  {
    "type": "particle-source",
    "name": "blood-fountain",
    "particle": "blood-particle",
    "time_to_live": 10,
    "time_to_live_deviation": 5,
    "time_before_start": 0,
    "time_before_start_deviation": 3,
    "height": 0.4,
    "height_deviation": 0.1,
    "vertical_speed": 0.05,
    "vertical_speed_deviation": 0.03,
    "horizontal_speed": 0.025,
    "horizontal_speed_deviation": 0.025
  },
  {
    "type": "particle-source",
    "name": "blood-fountain-big",
    "particle": "blood-particle",
    "time_to_live": 30,
    "time_to_live_deviation": 5,
    "time_before_start": 0,
    "time_before_start_deviation": 10,
    "height": 0.4,
    "height_deviation": 0.1,
    "vertical_speed": 0.15,
    "vertical_speed_deviation": 0.05,
    "horizontal_speed": 0.04,
    "horizontal_speed_deviation": 0.04
  },
  {
    "type": "leaf-particle",
    "name": "leaf-particle",
    "flags": [
      "not-on-map"
    ],
    "life_time": 180,
    "movement_modifier": 0.9,
    "pictures": [
      {
        "filename": "__base__/graphics/entity/leaf-particle/leaf-particle-01.png",
        "width": 6,
        "height": 6,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/leaf-particle/leaf-particle-02.png",
        "width": 6,
        "height": 4,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/leaf-particle/leaf-particle-03.png",
        "width": 8,
        "height": 5,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/leaf-particle/leaf-particle-04.png",
        "width": 6,
        "height": 6,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/leaf-particle/leaf-particle-05.png",
        "width": 6,
        "height": 5,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/leaf-particle/leaf-particle-06.png",
        "width": 6,
        "height": 4,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/leaf-particle/leaf-particle-07.png",
        "width": 6,
        "height": 6,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/leaf-particle/leaf-particle-08.png",
        "width": 4,
        "height": 7,
        "frame_count": 8
      }
    ],
    "shadows": [
      {
        "filename": "__base__/graphics/entity/leaf-particle/leaf-particle-01-shadow.png",
        "width": 6,
        "height": 6,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/leaf-particle/leaf-particle-02-shadow.png",
        "width": 6,
        "height": 4,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/leaf-particle/leaf-particle-03-shadow.png",
        "width": 8,
        "height": 5,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/leaf-particle/leaf-particle-04-shadow.png",
        "width": 6,
        "height": 6,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/leaf-particle/leaf-particle-05-shadow.png",
        "width": 6,
        "height": 5,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/leaf-particle/leaf-particle-06-shadow.png",
        "width": 6,
        "height": 4,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/leaf-particle/leaf-particle-07-shadow.png",
        "width": 6,
        "height": 6,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/leaf-particle/leaf-particle-08-shadow.png",
        "width": 4,
        "height": 7,
        "frame_count": 8
      }
    ]
  },
  {
    "type": "particle",
    "name": "branch-particle",
    "flags": [
      "not-on-map"
    ],
    "life_time": 1200,
    "pictures": [
      {
        "filename": "__base__/graphics/entity/branch-particle/branch-particle-01.png",
        "width": 32,
        "height": 31,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/branch-particle/branch-particle-02.png",
        "width": 42,
        "height": 49,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/branch-particle/branch-particle-03.png",
        "width": 41,
        "height": 48,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/branch-particle/branch-particle-04.png",
        "width": 13,
        "height": 28,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/branch-particle/branch-particle-05.png",
        "width": 28,
        "height": 21,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/branch-particle/branch-particle-06.png",
        "width": 31,
        "height": 24,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/branch-particle/branch-particle-07.png",
        "width": 33,
        "height": 35,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/branch-particle/branch-particle-08.png",
        "width": 14,
        "height": 28,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/branch-particle/branch-particle-09.png",
        "width": 27,
        "height": 32,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/branch-particle/branch-particle-10.png",
        "width": 27,
        "height": 27,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/branch-particle/branch-particle-11.png",
        "width": 25,
        "height": 33,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/branch-particle/branch-particle-12.png",
        "width": 32,
        "height": 28,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/branch-particle/branch-particle-13.png",
        "width": 25,
        "height": 18,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/branch-particle/branch-particle-14.png",
        "width": 27,
        "height": 18,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/branch-particle/branch-particle-15.png",
        "width": 12,
        "height": 14,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/branch-particle/branch-particle-16.png",
        "width": 13,
        "height": 13,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/branch-particle/branch-particle-17.png",
        "width": 32,
        "height": 29,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/branch-particle/branch-particle-18.png",
        "width": 29,
        "height": 33,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/branch-particle/branch-particle-19.png",
        "width": 37,
        "height": 39,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/branch-particle/branch-particle-20.png",
        "width": 28,
        "height": 23,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/branch-particle/branch-particle-21.png",
        "width": 23,
        "height": 24,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/branch-particle/branch-particle-22.png",
        "width": 14,
        "height": 19,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/branch-particle/branch-particle-23.png",
        "width": 36,
        "height": 13,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/branch-particle/branch-particle-24.png",
        "width": 15,
        "height": 19,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/branch-particle/branch-particle-25.png",
        "width": 22,
        "height": 20,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/branch-particle/branch-particle-26.png",
        "width": 13,
        "height": 22,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/branch-particle/branch-particle-27.png",
        "width": 35,
        "height": 18,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/branch-particle/branch-particle-28.png",
        "width": 17,
        "height": 15,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/branch-particle/branch-particle-29.png",
        "width": 26,
        "height": 26,
        "frame_count": 8
      }
    ],
    "shadows": [
      {
        "filename": "__base__/graphics/entity/branch-particle/branch-particle-01-shadow.png",
        "width": 32,
        "height": 31,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/branch-particle/branch-particle-02-shadow.png",
        "width": 42,
        "height": 49,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/branch-particle/branch-particle-03-shadow.png",
        "width": 41,
        "height": 48,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/branch-particle/branch-particle-04-shadow.png",
        "width": 13,
        "height": 28,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/branch-particle/branch-particle-05-shadow.png",
        "width": 28,
        "height": 21,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/branch-particle/branch-particle-06-shadow.png",
        "width": 31,
        "height": 24,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/branch-particle/branch-particle-07-shadow.png",
        "width": 33,
        "height": 35,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/branch-particle/branch-particle-08-shadow.png",
        "width": 14,
        "height": 28,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/branch-particle/branch-particle-09-shadow.png",
        "width": 27,
        "height": 32,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/branch-particle/branch-particle-10-shadow.png",
        "width": 27,
        "height": 27,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/branch-particle/branch-particle-11-shadow.png",
        "width": 25,
        "height": 33,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/branch-particle/branch-particle-12-shadow.png",
        "width": 32,
        "height": 28,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/branch-particle/branch-particle-13-shadow.png",
        "width": 25,
        "height": 18,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/branch-particle/branch-particle-14-shadow.png",
        "width": 27,
        "height": 18,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/branch-particle/branch-particle-15-shadow.png",
        "width": 12,
        "height": 14,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/branch-particle/branch-particle-16-shadow.png",
        "width": 13,
        "height": 13,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/branch-particle/branch-particle-17-shadow.png",
        "width": 32,
        "height": 29,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/branch-particle/branch-particle-18-shadow.png",
        "width": 29,
        "height": 33,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/branch-particle/branch-particle-19-shadow.png",
        "width": 37,
        "height": 39,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/branch-particle/branch-particle-20-shadow.png",
        "width": 28,
        "height": 23,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/branch-particle/branch-particle-21-shadow.png",
        "width": 23,
        "height": 24,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/branch-particle/branch-particle-22-shadow.png",
        "width": 14,
        "height": 19,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/branch-particle/branch-particle-23-shadow.png",
        "width": 36,
        "height": 13,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/branch-particle/branch-particle-24-shadow.png",
        "width": 15,
        "height": 19,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/branch-particle/branch-particle-25-shadow.png",
        "width": 22,
        "height": 20,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/branch-particle/branch-particle-26-shadow.png",
        "width": 13,
        "height": 22,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/branch-particle/branch-particle-27-shadow.png",
        "width": 35,
        "height": 18,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/branch-particle/branch-particle-28-shadow.png",
        "width": 17,
        "height": 15,
        "frame_count": 8
      },
      {
        "filename": "__base__/graphics/entity/branch-particle/branch-particle-29-shadow.png",
        "width": 26,
        "height": 26,
        "frame_count": 8
      }
    ]
  },
  {
    "type": "projectile",
    "name": "acid-projectile-purple",
    "flags": [
      "not-on-map"
    ],
    "acceleration": 0.005,
    "action": {
      "type": "direct",
      "action_delivery": {
        "type": "instant",
        "target_effects": [
          {
            "type": "play-sound",
            "sound": [
              {
                "filename": "__base__/sound/creatures/projectile-acid-burn-1.ogg",
                "volume": 0.8
              },
              {
                "filename": "__base__/sound/creatures/projectile-acid-burn-2.ogg",
                "volume": 0.8
              },
              {
                "filename": "__base__/sound/creatures/projectile-acid-burn-long-1.ogg",
                "volume": 0.8
              },
              {
                "filename": "__base__/sound/creatures/projectile-acid-burn-long-2.ogg",
                "volume": 0.8
              }
            ]
          },
          {
            "type": "create-entity",
            "entity_name": "acid-splash-purple"
          },
          {
            "type": "damage",
            "damage": {
              "amount": 10,
              "type": "acid"
            }
          }
        ]
      }
    },
    "animation": {
      "filename": "__base__/graphics/entity/acid-projectile-purple/acid-projectile-purple.png",
      "line_length": 5,
      "width": 16,
      "height": 18,
      "frame_count": 33,
      "priority": "high"
    },
    "shadow": {
      "filename": "__base__/graphics/entity/acid-projectile-purple/acid-projectile-purple-shadow.png",
      "line_length": 5,
      "width": 28,
      "height": 16,
      "frame_count": 33,
      "priority": "high",
      "shift": [
        null,
        0.395
      ]
    },
    "rotatable": false
  },
  {
    "type": "corpse",
    "name": "big-remnants",
    "icon": "__base__/graphics/icons/remnants.png",
    "flags": [
      "placeable-neutral",
      "not-on-map"
    ],
    "collision_box": [
      [
        null,
        null
      ],
      [
        1.5,
        1.5
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        1.5,
        1.5
      ]
    ],
    "tile_width": 3,
    "tile_height": 3,
    "selectable_in_game": false,
    "final_render_layer": "remnants",
    "subgroup": "remnants",
    "order": "d[remnants]-a[generic]-c[big]",
    "animation": [
      {
        "width": 109,
        "height": 102,
        "frame_count": 1,
        "direction_count": 1,
        "filename": "__base__/graphics/entity/remnants/big-remnants.png"
      },
      {
        "width": 109,
        "height": 102,
        "frame_count": 1,
        "direction_count": 1,
        "x": 109,
        "filename": "__base__/graphics/entity/remnants/big-remnants.png"
      },
      {
        "width": 109,
        "height": 102,
        "frame_count": 1,
        "direction_count": 1,
        "x": 218,
        "filename": "__base__/graphics/entity/remnants/big-remnants.png"
      },
      {
        "width": 109,
        "height": 102,
        "frame_count": 1,
        "direction_count": 1,
        "x": 327,
        "filename": "__base__/graphics/entity/remnants/big-remnants.png"
      }
    ]
  },
  {
    "type": "corpse",
    "name": "medium-remnants",
    "icon": "__base__/graphics/icons/remnants.png",
    "flags": [
      "placeable-neutral",
      "building-direction-8-way",
      "not-on-map"
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        1,
        1
      ]
    ],
    "tile_width": 2,
    "tile_height": 2,
    "selectable_in_game": false,
    "subgroup": "remnants",
    "order": "d[remnants]-a[generic]-b[medium]",
    "final_render_layer": "remnants",
    "animation": [
      {
        "width": 94,
        "height": 82,
        "frame_count": 1,
        "direction_count": 1,
        "filename": "__base__/graphics/entity/remnants/medium-remnants.png"
      },
      {
        "width": 94,
        "height": 82,
        "frame_count": 1,
        "direction_count": 1,
        "x": 94,
        "filename": "__base__/graphics/entity/remnants/medium-remnants.png"
      },
      {
        "width": 94,
        "height": 82,
        "frame_count": 1,
        "direction_count": 1,
        "x": 188,
        "filename": "__base__/graphics/entity/remnants/medium-remnants.png"
      },
      {
        "width": 94,
        "height": 82,
        "frame_count": 1,
        "direction_count": 1,
        "x": 282,
        "filename": "__base__/graphics/entity/remnants/medium-remnants.png"
      }
    ]
  },
  {
    "type": "corpse",
    "name": "small-remnants",
    "icon": "__base__/graphics/icons/remnants.png",
    "flags": [
      "placeable-neutral",
      "not-on-map"
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ],
    "tile_width": 1,
    "tile_height": 1,
    "selectable_in_game": false,
    "subgroup": "remnants",
    "order": "d[remnants]-a[generic]-a[small]",
    "final_render_layer": "remnants",
    "animation": [
      {
        "width": 56,
        "height": 42,
        "frame_count": 1,
        "direction_count": 1,
        "filename": "__base__/graphics/entity/remnants/small-remnants.png"
      },
      {
        "width": 56,
        "height": 42,
        "frame_count": 1,
        "direction_count": 1,
        "x": 56,
        "filename": "__base__/graphics/entity/remnants/small-remnants.png"
      },
      {
        "width": 56,
        "height": 42,
        "frame_count": 1,
        "direction_count": 1,
        "x": 112,
        "filename": "__base__/graphics/entity/remnants/small-remnants.png"
      },
      {
        "width": 56,
        "height": 42,
        "frame_count": 1,
        "direction_count": 1,
        "x": 168,
        "filename": "__base__/graphics/entity/remnants/small-remnants.png"
      }
    ]
  },
  {
    "type": "rail-remnants",
    "name": "straight-rail-remnants",
    "icon": "__base__/graphics/icons/straight-rail-remnants.png",
    "flags": [
      "placeable-neutral",
      "building-direction-8-way",
      "not-on-map"
    ],
    "subgroup": "remnants",
    "order": "d[remnants]-b[rail]-a[straight]",
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.6,
        0.8
      ]
    ],
    "selectable_in_game": false,
    "tile_width": 2,
    "tile_height": 2,
    "bending_type": "straight"
  },
  {
    "type": "rail-remnants",
    "name": "curved-rail-remnants",
    "icon": "__base__/graphics/icons/curved-rail-remnants.png",
    "flags": [
      "placeable-neutral",
      "building-direction-8-way",
      "not-on-map"
    ],
    "subgroup": "remnants",
    "order": "d[remnants]-b[rail]-b[curved]",
    "collision_box": [
      [
        null,
        null
      ],
      [
        1,
        1
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        1.7,
        0.8
      ]
    ],
    "selectable_in_game": false,
    "tile_width": 4,
    "tile_height": 8,
    "bending_type": "turn"
  },
  {
    "type": "container",
    "name": "big-ship-wreck-1",
    "enable_inventory_bar": false,
    "icon": "__base__/graphics/icons/ship-wreck/big-ship-wreck-1.png",
    "flags": [
      "placeable-neutral"
    ],
    "subgroup": "wrecks",
    "order": "d[remnants]-d[ship-wreck]-a[big]-a",
    "max_health": 50,
    "collision_box": [
      [
        null,
        null
      ],
      [
        2.2,
        1.5
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        2.7,
        1.5
      ]
    ],
    "inventory_size": 3,
    "picture": {
      "filename": "__base__/graphics/entity/ship-wreck/big-ship-wreck-1.png",
      "width": 256,
      "height": 212,
      "shift": [
        0.7,
        0
      ]
    }
  },
  {
    "type": "container",
    "name": "big-ship-wreck-2",
    "enable_inventory_bar": false,
    "icon": "__base__/graphics/icons/ship-wreck/big-ship-wreck-2.png",
    "flags": [
      "placeable-neutral"
    ],
    "subgroup": "wrecks",
    "order": "d[remnants]-d[ship-wreck]-a[big]-b",
    "max_health": 50,
    "collision_box": [
      [
        null,
        null
      ],
      [
        1.4,
        1.2
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        2,
        1.5
      ]
    ],
    "inventory_size": 3,
    "picture": {
      "filename": "__base__/graphics/entity/ship-wreck/big-ship-wreck-2.png",
      "width": 164,
      "height": 129,
      "shift": [
        null,
        0.6
      ]
    }
  },
  {
    "type": "container",
    "name": "big-ship-wreck-3",
    "enable_inventory_bar": false,
    "icon": "__base__/graphics/icons/ship-wreck/big-ship-wreck-3.png",
    "flags": [
      "placeable-neutral"
    ],
    "subgroup": "wrecks",
    "order": "d[remnants]-d[ship-wreck]-a[big]-c",
    "max_health": 50,
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.9,
        0.9
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        2,
        1.5
      ]
    ],
    "inventory_size": 3,
    "picture": {
      "filename": "__base__/graphics/entity/ship-wreck/big-ship-wreck-3.png",
      "width": 165,
      "height": 131
    }
  },
  {
    "type": "simple-entity",
    "name": "medium-ship-wreck",
    "icon": "__base__/graphics/icons/ship-wreck/medium-ship-wreck.png",
    "flags": [
      "placeable-neutral",
      "placeable-off-grid",
      "not-on-map"
    ],
    "subgroup": "wrecks",
    "order": "d[remnants]-d[ship-wreck]-b[medium]-a",
    "max_health": 200,
    "collision_box": [
      [
        null,
        null
      ],
      [
        1.2,
        0.9
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        1.5,
        1.2
      ]
    ],
    "render_layer": "object",
    "pictures": [
      {
        "filename": "__base__/graphics/entity/ship-wreck/medium-ship-wreck-1.png",
        "width": 120,
        "height": 85
      },
      {
        "filename": "__base__/graphics/entity/ship-wreck/medium-ship-wreck-2.png",
        "width": 126,
        "height": 107,
        "shift": [
          0.3,
          0.1
        ]
      }
    ]
  },
  {
    "type": "simple-entity",
    "name": "small-ship-wreck",
    "icon": "__base__/graphics/icons/ship-wreck/small-ship-wreck.png",
    "flags": [
      "placeable-neutral",
      "placeable-off-grid",
      "not-on-map"
    ],
    "subgroup": "wrecks",
    "order": "d[remnants]-d[ship-wreck]-c[small]-a",
    "max_health": 200,
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.7,
        0.7
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        1.3,
        1.1
      ]
    ],
    "pictures": [
      {
        "filename": "__base__/graphics/entity/ship-wreck/small-ship-wreck-a.png",
        "width": 65,
        "height": 68
      },
      {
        "filename": "__base__/graphics/entity/ship-wreck/small-ship-wreck-b.png",
        "width": 109,
        "height": 67
      },
      {
        "filename": "__base__/graphics/entity/ship-wreck/small-ship-wreck-c.png",
        "width": 63,
        "height": 54
      },
      {
        "filename": "__base__/graphics/entity/ship-wreck/small-ship-wreck-d.png",
        "width": 82,
        "height": 67
      },
      {
        "filename": "__base__/graphics/entity/ship-wreck/small-ship-wreck-e.png",
        "width": 78,
        "height": 75,
        "shift": [
          0.3,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/ship-wreck/small-ship-wreck-f.png",
        "width": 58,
        "height": 35
      },
      {
        "filename": "__base__/graphics/entity/ship-wreck/small-ship-wreck-g.png",
        "width": 80,
        "height": 72
      },
      {
        "filename": "__base__/graphics/entity/ship-wreck/small-ship-wreck-h.png",
        "width": 79,
        "height": 54
      },
      {
        "filename": "__base__/graphics/entity/ship-wreck/small-ship-wreck-i.png",
        "width": 56,
        "height": 55
      }
    ],
    "render_layer": "object"
  },
  {
    "type": "decorative",
    "name": "big-ship-wreck-grass",
    "flags": [
      "placeable-neutral",
      "placeable-off-grid",
      "not-on-map"
    ],
    "icon": "__base__/graphics/icons/ship-wreck/big-ship-wreck-grass.png",
    "subgroup": "wrecks",
    "order": "d[remnants]-d[ship-wreck-grass]-a[big]",
    "collision_box": [
      [
        null,
        null
      ],
      [
        2.5,
        1.5
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        2.8,
        1.7
      ]
    ],
    "selectable_in_game": false,
    "pictures": [
      {
        "filename": "__base__/graphics/entity/ship-wreck/big-ship-wreck-grass.png",
        "width": 206,
        "height": 112
      }
    ],
    "render_layer": "floor"
  },
  {
    "type": "decorative",
    "name": "small-ship-wreck-grass",
    "flags": [
      "placeable-neutral",
      "placeable-off-grid",
      "not-on-map"
    ],
    "icon": "__base__/graphics/icons/ship-wreck/small-ship-wreck-grass.png",
    "subgroup": "wrecks",
    "order": "d[remnants]-d[ship-wreck-grass]-b[small]",
    "collision_box": [
      [
        null,
        null
      ],
      [
        1.5,
        0.5
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        1.7,
        0.6
      ]
    ],
    "selectable_in_game": false,
    "render_layer": "floor",
    "pictures": [
      {
        "filename": "__base__/graphics/entity/ship-wreck/small-ship-wreck-grass-1.png",
        "width": 129,
        "height": 45
      },
      {
        "filename": "__base__/graphics/entity/ship-wreck/small-ship-wreck-grass-2.png",
        "width": 121,
        "height": 34
      },
      {
        "filename": "__base__/graphics/entity/ship-wreck/small-ship-wreck-grass-3.png",
        "width": 115,
        "height": 37
      }
    ]
  },
  {
    "type": "corpse",
    "name": "small-scorchmark",
    "icon": "__base__/graphics/icons/small-scorchmark.png",
    "flags": [
      "placeable-neutral",
      "not-on-map",
      "placeable-off-grid"
    ],
    "collision_box": [
      [
        null,
        null
      ],
      [
        1.5,
        1.5
      ]
    ],
    "collision_mask": [
      "doodad-layer",
      "not-colliding-with-itself"
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        1,
        1
      ]
    ],
    "selectable_in_game": false,
    "final_render_layer": "ground_patch_higher2",
    "subgroup": "remnants",
    "order": "d[remnants]-b[scorchmark]-a[small]",
    "animation": {
      "sheet": {
        "width": 110,
        "height": 90,
        "frame_count": 1,
        "direction_count": 1,
        "filename": "__base__/graphics/entity/scorchmark/small-scorchmark.png",
        "variation_count": 3
      }
    },
    "ground_patch": {
      "sheet": {
        "width": 110,
        "height": 90,
        "frame_count": 1,
        "direction_count": 1,
        "filename": "__base__/graphics/entity/scorchmark/small-scorchmark.png",
        "variation_count": 3
      }
    },
    "ground_patch_higher": {
      "sheet": {
        "width": 110,
        "height": 90,
        "frame_count": 1,
        "direction_count": 1,
        "x": 110,
        "filename": "__base__/graphics/entity/scorchmark/small-scorchmark.png",
        "variation_count": 3
      }
    }
  },
  null,
  null,
  null,
  null,
  {
    "type": "noise-layer",
    "name": "trees"
  },
  {
    "type": "tree",
    "name": "dead-tree",
    "icon": "__base__/graphics/icons/dead-tree.png",
    "flags": [
      "placeable-neutral",
      "placeable-off-grid",
      "breaths-air"
    ],
    "minable": {
      "mining_particle": "wooden-particle",
      "mining_time": 1,
      "result": "raw-wood",
      "count": 2
    },
    "max_health": 20,
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.6,
        0.6
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.8,
        0.8
      ]
    ],
    "subgroup": "trees",
    "order": "a[tree]-b[dead-tree]",
    "vehicle_impact_sound": {
      "filename": "__base__/sound/car-wood-impact.ogg",
      "volume": 1
    },
    "pictures": [
      {
        "filename": "__base__/graphics/entity/tree/dead-tree/dead-tree-01.png",
        "flags": [
          "mipmap"
        ],
        "width": 108,
        "height": 114
      },
      {
        "filename": "__base__/graphics/entity/tree/dead-tree/dead-tree-02.png",
        "flags": [
          "mipmap"
        ],
        "width": 155,
        "height": 97,
        "shift": [
          0.2,
          0.2
        ]
      },
      {
        "filename": "__base__/graphics/entity/tree/dead-tree/dead-tree-03.png",
        "flags": [
          "mipmap"
        ],
        "width": 138,
        "height": 124,
        "shift": [
          0.4,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/tree/dead-tree/dead-tree-04.png",
        "flags": [
          "mipmap"
        ],
        "width": 112,
        "height": 123,
        "shift": [
          0,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/tree/dead-tree/dead-tree-05.png",
        "flags": [
          "mipmap"
        ],
        "width": 111,
        "height": 113
      },
      {
        "filename": "__base__/graphics/entity/tree/dead-tree/dead-tree-06.png",
        "flags": [
          "mipmap"
        ],
        "width": 78,
        "height": 83
      },
      {
        "filename": "__base__/graphics/entity/tree/dead-tree/dead-tree-07.png",
        "flags": [
          "mipmap"
        ],
        "width": 90,
        "height": 105
      }
    ]
  },
  {
    "type": "tree",
    "name": "dry-tree",
    "icon": "__base__/graphics/icons/dry-tree.png",
    "flags": [
      "placeable-neutral",
      "placeable-off-grid",
      "breaths-air"
    ],
    "minable": {
      "count": 4,
      "mining_particle": "wooden-particle",
      "mining_time": 1,
      "result": "raw-wood"
    },
    "max_health": 20,
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.4,
        0.2
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.6,
        0.3
      ]
    ],
    "drawing_box": [
      [
        null,
        null
      ],
      [
        0.6,
        0.3
      ]
    ],
    "subgroup": "trees",
    "order": "a[tree]-c[dry-tree]",
    "vehicle_impact_sound": {
      "filename": "__base__/sound/car-wood-impact.ogg",
      "volume": 1
    },
    "pictures": [
      {
        "filename": "__base__/graphics/entity/tree/dry-tree/dry-tree-01-a.png",
        "flags": [
          "mipmap"
        ],
        "width": 194,
        "height": 116,
        "shift": [
          2.25,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/tree/dry-tree/dry-tree-01-b.png",
        "flags": [
          "mipmap"
        ],
        "width": 155,
        "height": 129,
        "shift": [
          1.42188,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/tree/dry-tree/dry-tree-01-c.png",
        "flags": [
          "mipmap"
        ],
        "width": 113,
        "height": 81,
        "shift": [
          1.26562,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/tree/dry-tree/dry-tree-01-d.png",
        "flags": [
          "mipmap"
        ],
        "width": 156,
        "height": 120,
        "shift": [
          0.96875,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/tree/dry-tree/dry-tree-01-e.png",
        "flags": [
          "mipmap"
        ],
        "width": 150,
        "height": 124,
        "shift": [
          1.53125,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/tree/dry-tree/dry-tree-01-f.png",
        "flags": [
          "mipmap"
        ],
        "width": 178,
        "height": 116,
        "shift": [
          1.96875,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/tree/dry-tree/dry-tree-02-a.png",
        "flags": [
          "mipmap"
        ],
        "width": 147,
        "height": 123,
        "shift": [
          1.8125,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/tree/dry-tree/dry-tree-02-b.png",
        "flags": [
          "mipmap"
        ],
        "width": 168,
        "height": 133,
        "shift": [
          1.17188,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/tree/dry-tree/dry-tree-02-c.png",
        "flags": [
          "mipmap"
        ],
        "width": 174,
        "height": 134,
        "shift": [
          1.07812,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/tree//dry-tree/dry-tree-02-d.png",
        "flags": [
          "mipmap"
        ],
        "width": 215,
        "height": 136,
        "shift": [
          2.875,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/tree//dry-tree/dry-tree-02-e.png",
        "flags": [
          "mipmap"
        ],
        "width": 158,
        "height": 115,
        "shift": [
          2.14062,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/tree//dry-tree/dry-tree-02-f.png",
        "flags": [
          "mipmap"
        ],
        "width": 180,
        "height": 105,
        "shift": [
          2.23438,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/tree//dry-tree/dry-tree-03-a.png",
        "flags": [
          "mipmap"
        ],
        "width": 168,
        "height": 111,
        "shift": [
          0.78125,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/tree//dry-tree/dry-tree-03-b.png",
        "flags": [
          "mipmap"
        ],
        "width": 145,
        "height": 118,
        "shift": [
          0.921875,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/tree//dry-tree/dry-tree-03-c.png",
        "flags": [
          "mipmap"
        ],
        "width": 161,
        "height": 115,
        "shift": [
          1.57812,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/tree//dry-tree/dry-tree-03-d.png",
        "flags": [
          "mipmap"
        ],
        "width": 183,
        "height": 122,
        "shift": [
          2.20312,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/tree//dry-tree/dry-tree-03-e.png",
        "flags": [
          "mipmap"
        ],
        "width": 166,
        "height": 122,
        "shift": [
          2.0625,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/tree//dry-tree/dry-tree-03-f.png",
        "flags": [
          "mipmap"
        ],
        "width": 160,
        "height": 104,
        "shift": [
          1.5625,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/tree//dry-tree/dry-tree-04-a.png",
        "flags": [
          "mipmap"
        ],
        "width": 195,
        "height": 139,
        "shift": [
          1.67188,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/tree//dry-tree/dry-tree-04-b.png",
        "flags": [
          "mipmap"
        ],
        "width": 173,
        "height": 138,
        "shift": [
          1.29688,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/tree//dry-tree/dry-tree-04-c.png",
        "flags": [
          "mipmap"
        ],
        "width": 210,
        "height": 135,
        "shift": [
          1.5,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/tree//dry-tree/dry-tree-04-d.png",
        "flags": [
          "mipmap"
        ],
        "width": 149,
        "height": 119,
        "shift": [
          1.57812,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/tree//dry-tree/dry-tree-04-e.png",
        "flags": [
          "mipmap"
        ],
        "width": 173,
        "height": 143,
        "shift": [
          1.39062,
          null
        ]
      }
    ]
  },
  {
    "type": "tree",
    "name": "green-coral",
    "flags": [
      "placeable-neutral",
      "placeable-off-grid",
      "breaths-air"
    ],
    "icon": "__base__/graphics/icons/green-coral.png",
    "minable": {
      "count": 1,
      "mining_particle": "wooden-particle",
      "mining_time": 2,
      "result": "raw-wood"
    },
    "max_health": 50,
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.3,
        0.3
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ],
    "drawing_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ],
    "emissions_per_tick": 0,
    "subgroup": "trees",
    "order": "a[tree]-d[coral]",
    "vehicle_impact_sound": {
      "filename": "__base__/sound/car-wood-impact.ogg",
      "volume": 1
    },
    "pictures": [
      {
        "filename": "__base__/graphics/entity/tree/green-coral/green-coral-01.png",
        "flags": [
          "mipmap"
        ],
        "width": 58,
        "height": 69,
        "shift": [
          0.4,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/tree/green-coral/green-coral-02.png",
        "flags": [
          "mipmap"
        ],
        "width": 77,
        "height": 97,
        "shift": [
          0.7,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/tree/green-coral/green-coral-03.png",
        "flags": [
          "mipmap"
        ],
        "width": 41,
        "height": 54,
        "shift": [
          0.2,
          0
        ]
      },
      {
        "filename": "__base__/graphics/entity/tree/green-coral/green-coral-04.png",
        "flags": [
          "mipmap"
        ],
        "width": 63,
        "height": 61,
        "shift": [
          0.7,
          0.3
        ]
      },
      {
        "filename": "__base__/graphics/entity/tree/green-coral/green-coral-05.png",
        "flags": [
          "mipmap"
        ],
        "width": 63,
        "height": 85,
        "shift": [
          null,
          0.5
        ]
      },
      {
        "filename": "__base__/graphics/entity/tree/green-coral/green-coral-06.png",
        "flags": [
          "mipmap"
        ],
        "width": 67,
        "height": 71
      },
      {
        "filename": "__base__/graphics/entity/tree/green-coral/green-coral-07.png",
        "flags": [
          "mipmap"
        ],
        "width": 89,
        "height": 77,
        "shift": [
          null,
          null
        ]
      }
    ]
  },
  {
    "type": "tree",
    "name": "dead-grey-trunk",
    "icon": "__base__/graphics/icons/dead-grey-trunk.png",
    "flags": [
      "placeable-neutral",
      "placeable-off-grid",
      "breaths-air"
    ],
    "minable": {
      "mining_particle": "wooden-particle",
      "mining_time": 1,
      "result": "raw-wood",
      "count": 2
    },
    "max_health": 20,
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.6,
        0.6
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.8,
        0.8
      ]
    ],
    "subgroup": "trees",
    "order": "a[tree]-b[dead-tree]",
    "vehicle_impact_sound": {
      "filename": "__base__/sound/car-wood-impact.ogg",
      "volume": 1
    },
    "pictures": [
      {
        "filename": "__base__/graphics/entity/tree/dead-grey-trunk/dead-grey-trunk-01.png",
        "flags": [
          "mipmap"
        ],
        "width": 105,
        "height": 96,
        "shift": [
          0.75,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/tree/dead-grey-trunk/dead-grey-trunk-02.png",
        "flags": [
          "mipmap"
        ],
        "width": 67,
        "height": 87,
        "shift": [
          0.4,
          0.43
        ]
      },
      {
        "filename": "__base__/graphics/entity/tree/dead-grey-trunk/dead-grey-trunk-03.png",
        "flags": [
          "mipmap"
        ],
        "width": 114,
        "height": 67,
        "shift": [
          0.56,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/tree/dead-grey-trunk/dead-grey-trunk-04.png",
        "flags": [
          "mipmap"
        ],
        "width": 95,
        "height": 85,
        "shift": [
          0.62,
          0.21
        ]
      },
      {
        "filename": "__base__/graphics/entity/tree/dead-grey-trunk/dead-grey-trunk-05.png",
        "flags": [
          "mipmap"
        ],
        "width": 100,
        "height": 112,
        "shift": [
          0.84,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/tree/dead-grey-trunk/dead-grey-trunk-06.png",
        "flags": [
          "mipmap"
        ],
        "width": 96,
        "height": 82,
        "shift": [
          0,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/tree/dead-grey-trunk/dead-grey-trunk-07.png",
        "flags": [
          "mipmap"
        ],
        "width": 143,
        "height": 55,
        "shift": [
          null,
          0
        ]
      }
    ]
  },
  {
    "type": "tree",
    "name": "dry-hairy-tree",
    "icon": "__base__/graphics/icons/dry-hairy-tree.png",
    "flags": [
      "placeable-neutral",
      "placeable-off-grid",
      "breaths-air"
    ],
    "minable": {
      "mining_particle": "wooden-particle",
      "mining_time": 1,
      "result": "raw-wood",
      "count": 2
    },
    "max_health": 20,
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.6,
        0.6
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.8,
        0.8
      ]
    ],
    "subgroup": "trees",
    "order": "a[tree]-b[dead-tree]",
    "vehicle_impact_sound": {
      "filename": "__base__/sound/car-wood-impact.ogg",
      "volume": 1
    },
    "pictures": [
      {
        "filename": "__base__/graphics/entity/tree/dry-hairy-tree/dry-hairy-tree-01.png",
        "flags": [
          "mipmap"
        ],
        "width": 201,
        "height": 242,
        "shift": [
          1.9,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/tree/dry-hairy-tree/dry-hairy-tree-02.png",
        "flags": [
          "mipmap"
        ],
        "width": 307,
        "height": 256,
        "shift": [
          2.62,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/tree/dry-hairy-tree/dry-hairy-tree-03.png",
        "flags": [
          "mipmap"
        ],
        "width": 286,
        "height": 240,
        "shift": [
          0.56,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/tree/dry-hairy-tree/dry-hairy-tree-04.png",
        "flags": [
          "mipmap"
        ],
        "width": 291,
        "height": 229,
        "shift": [
          3.5,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/tree/dry-hairy-tree/dry-hairy-tree-05.png",
        "flags": [
          "mipmap"
        ],
        "width": 265,
        "height": 264,
        "shift": [
          3.2,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/tree/dry-hairy-tree/dry-hairy-tree-06.png",
        "flags": [
          "mipmap"
        ],
        "width": 312,
        "height": 267,
        "shift": [
          2.59,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/tree/dry-hairy-tree/dry-hairy-tree-07.png",
        "flags": [
          "mipmap"
        ],
        "width": 294,
        "height": 213,
        "shift": [
          3.37,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/tree/dry-hairy-tree/dry-hairy-tree-08.png",
        "flags": [
          "mipmap"
        ],
        "width": 284,
        "height": 217,
        "shift": [
          2.28,
          null
        ]
      }
    ]
  },
  {
    "type": "tree",
    "name": "dead-dry-hairy-tree",
    "icon": "__base__/graphics/icons/dead-dry-hairy-tree.png",
    "flags": [
      "placeable-neutral",
      "placeable-off-grid",
      "breaths-air"
    ],
    "minable": {
      "mining_particle": "wooden-particle",
      "mining_time": 1,
      "result": "raw-wood",
      "count": 2
    },
    "max_health": 20,
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.6,
        0.6
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.8,
        0.8
      ]
    ],
    "subgroup": "trees",
    "order": "a[tree]-b[dead-tree]",
    "vehicle_impact_sound": {
      "filename": "__base__/sound/car-wood-impact.ogg",
      "volume": 1
    },
    "pictures": [
      {
        "filename": "__base__/graphics/entity/tree/dead-dry-hairy-tree/dead-tree-02-a.png",
        "flags": [
          "mipmap"
        ],
        "width": 194,
        "height": 94,
        "shift": [
          0.28125,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/tree/dead-dry-hairy-tree/dead-tree-02-b.png",
        "flags": [
          "mipmap"
        ],
        "width": 186,
        "height": 151,
        "shift": [
          0.15625,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/tree/dead-dry-hairy-tree/dead-tree-02-c.png",
        "flags": [
          "mipmap"
        ],
        "width": 163,
        "height": 118,
        "shift": [
          0.171875,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/tree/dead-dry-hairy-tree/dead-tree-02-d.png",
        "flags": [
          "mipmap"
        ],
        "width": 178,
        "height": 153,
        "shift": [
          1.09375,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/tree/dead-dry-hairy-tree/dead-tree-02-e.png",
        "flags": [
          "mipmap"
        ],
        "width": 195,
        "height": 158,
        "shift": [
          0.859375,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/tree/dead-dry-hairy-tree/dead-tree-02-f.png",
        "flags": [
          "mipmap"
        ],
        "width": 206,
        "height": 141,
        "shift": [
          0.4375,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/tree/dead-dry-hairy-tree/dead-tree-02-g.png",
        "flags": [
          "mipmap"
        ],
        "width": 209,
        "height": 147,
        "shift": [
          0.421875,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/tree/dead-dry-hairy-tree/dead-tree-02-h.png",
        "flags": [
          "mipmap"
        ],
        "width": 175,
        "height": 106,
        "shift": [
          0.109375,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/tree/dead-dry-hairy-tree/dead-tree-02-i.png",
        "flags": [
          "mipmap"
        ],
        "width": 155,
        "height": 86,
        "shift": [
          null,
          0.125
        ]
      },
      {
        "filename": "__base__/graphics/entity/tree/dead-dry-hairy-tree/dead-tree-02-j.png",
        "flags": [
          "mipmap"
        ],
        "width": 150,
        "height": 135,
        "shift": [
          0.59375,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/tree/dead-dry-hairy-tree/dead-tree-02-k.png",
        "flags": [
          "mipmap"
        ],
        "width": 159,
        "height": 122,
        "shift": [
          0.171875,
          null
        ]
      },
      {
        "filename": "__base__/graphics/entity/tree/dead-dry-hairy-tree/dead-tree-02-l.png",
        "flags": [
          "mipmap"
        ],
        "width": 169,
        "height": 121,
        "shift": [
          0.234375,
          null
        ]
      }
    ]
  },
  {
    "type": "turret",
    "name": "small-worm-turret",
    "icon": "__base__/graphics/icons/small-worm.png",
    "flags": [
      "placeable-enemy",
      "not-repairable",
      "breaths-air"
    ],
    "order": "b-b-d",
    "max_health": 200,
    "subgroup": "enemies",
    "healing_per_tick": 0.01,
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.9,
        0.8
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.9,
        0.8
      ]
    ],
    "shooting_cursor_size": 3,
    "corpse": "small-worm-corpse",
    "dying_explosion": "blood-explosion-big",
    "folded_speed": 0.01,
    "prepare_range": 25,
    "preparing_speed": 0.025,
    "prepared_speed": 0.015,
    "starting_attack_speed": 0.03,
    "ending_attack_speed": 0.03,
    "folding_speed": 0.015,
    "attack_parameters": {
      "type": "projectile",
      "ammo_category": "bullet",
      "cooldown": 15,
      "range": 17,
      "projectile_creation_distance": 1.8,
      "ammo_type": {
        "category": "biological",
        "action": {
          "type": "direct",
          "action_delivery": {
            "type": "projectile",
            "projectile": "acid-projectile-purple",
            "starting_speed": 0.5
          }
        }
      }
    },
    "call_for_help_radius": 40
  },
  {
    "type": "ammo-turret",
    "name": "gun-turret",
    "icon": "__base__/graphics/icons/gun-turret.png",
    "flags": [
      "placeable-player",
      "player-creation"
    ],
    "minable": {
      "mining_time": 0.5,
      "result": "gun-turret"
    },
    "max_health": 400,
    "corpse": "medium-remnants",
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.7,
        0.7
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        1,
        1
      ]
    ],
    "rotation_speed": 0.015,
    "preparing_speed": 0.08,
    "folding_speed": 0.08,
    "dying_explosion": "medium-explosion",
    "inventory_size": 1,
    "automated_ammo_count": 10,
    "attacking_speed": 0.5,
    "folded_animation": {
      "layers": [
        null,
        null,
        null
      ]
    },
    "preparing_animation": {
      "layers": [
        null,
        null,
        null
      ]
    },
    "folding_animation": {
      "layers": [
        null,
        null,
        null
      ]
    },
    "base_picture": {
      "layers": [
        {
          "filename": "__base__/graphics/entity/gun-turret/gun-turret-base.png",
          "priority": "high",
          "width": 90,
          "height": 75,
          "axially_symmetrical": false,
          "direction_count": 1,
          "frame_count": 1,
          "shift": [
            0.0625,
            null
          ]
        },
        {
          "filename": "__base__/graphics/entity/gun-turret/gun-turret-base-mask.png",
          "flags": [
            "mask"
          ],
          "line_length": 1,
          "width": 52,
          "height": 47,
          "frame_count": 1,
          "axially_symmetrical": false,
          "direction_count": 1,
          "shift": [
            0.0625,
            null
          ],
          "apply_runtime_tint": true
        }
      ]
    },
    "vehicle_impact_sound": {
      "filename": "__base__/sound/car-metal-impact.ogg",
      "volume": 0.65
    },
    "attack_parameters": {
      "type": "projectile",
      "ammo_category": "bullet",
      "cooldown": 6,
      "projectile_creation_distance": 1.39375,
      "projectile_center": [
        0.0625,
        null
      ],
      "damage_modifier": 2,
      "shell_particle": {
        "name": "shell-particle",
        "direction_deviation": 0.1,
        "speed": 0.1,
        "speed_deviation": 0.03,
        "center": [
          0,
          0
        ],
        "starting_frame_speed": 0.2,
        "starting_frame_speed_deviation": 0.1
      },
      "range": 17
    },
    "call_for_help_radius": 40
  },
  {
    "type": "corpse",
    "name": "small-worm-corpse",
    "icon": "__base__/graphics/icons/small-worm-corpse.png",
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.8,
        0.8
      ]
    ],
    "selectable_in_game": false,
    "dying_speed": 0.01,
    "subgroup": "corpses",
    "order": "c[corpse]-c[worm]-a[small]",
    "flags": [
      "placeable-neutral",
      "placeable-off-grid",
      "building-direction-8-way",
      "not-repairable",
      "not-on-map"
    ],
    "final_render_layer": "corpse"
  },
  {
    "type": "unit",
    "name": "medium-biter",
    "icon": "__base__/graphics/icons/medium-biter.png",
    "flags": [
      "placeable-player",
      "placeable-enemy",
      "placeable-off-grid",
      "breaths-air",
      "not-repairable"
    ],
    "max_health": 75,
    "order": "b-b-b",
    "subgroup": "enemies",
    "resistances": [
      {
        "type": "physical",
        "decrease": 4
      },
      {
        "type": "explosion",
        "percent": 10
      },
      {
        "type": "fire"
      }
    ],
    "healing_per_tick": 0.01,
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.3,
        0.3
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.7,
        0.3
      ]
    ],
    "sticker_box": [
      [
        null,
        null
      ],
      [
        0.3,
        0.1
      ]
    ],
    "distraction_cooldown": 300,
    "attack_parameters": {
      "type": "projectile",
      "ammo_category": "melee",
      "range": 1,
      "cooldown": 35
    },
    "vision_distance": 30,
    "movement_speed": 0.185,
    "distance_per_frame": 0.15,
    "pollution_to_join_attack": 1000,
    "corpse": "medium-biter-corpse",
    "dying_explosion": "blood-explosion-small"
  },
  {
    "type": "unit",
    "name": "big-biter",
    "order": "b-b-c",
    "icon": "__base__/graphics/icons/big-biter.png",
    "flags": [
      "placeable-player",
      "placeable-enemy",
      "placeable-off-grid",
      "breaths-air",
      "not-repairable"
    ],
    "max_health": 375,
    "subgroup": "enemies",
    "resistances": [
      {
        "type": "physical",
        "decrease": 8
      },
      {
        "type": "explosion",
        "percent": 10
      }
    ],
    "spawning_time_modifier": 3,
    "healing_per_tick": 0.02,
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.4,
        0.4
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.7,
        0.3
      ]
    ],
    "sticker_box": [
      [
        null,
        null
      ],
      [
        0.6,
        0
      ]
    ],
    "distraction_cooldown": 300,
    "attack_parameters": {
      "type": "projectile",
      "range": 1.5,
      "cooldown": 35,
      "ammo_category": "melee"
    },
    "vision_distance": 30,
    "movement_speed": 0.17,
    "distance_per_frame": 0.2,
    "pollution_to_join_attack": 4000,
    "corpse": "big-biter-corpse",
    "dying_explosion": "blood-explosion-big"
  },
  {
    "type": "unit",
    "name": "behemoth-biter",
    "order": "b-b-d",
    "icon": "__base__/graphics/icons/behemoth-biter.png",
    "flags": [
      "placeable-player",
      "placeable-enemy",
      "placeable-off-grid",
      "breaths-air",
      "not-repairable"
    ],
    "max_health": 5000,
    "subgroup": "enemies",
    "resistances": [
      {
        "type": "physical",
        "decrease": 8,
        "percent": 20
      },
      {
        "type": "explosion",
        "decrease": 10,
        "percent": 20
      }
    ],
    "spawning_time_modifier": 12,
    "healing_per_tick": 0.1,
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.4,
        0.4
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.7,
        0.3
      ]
    ],
    "sticker_box": [
      [
        null,
        null
      ],
      [
        0.6,
        0
      ]
    ],
    "distraction_cooldown": 300,
    "attack_parameters": {
      "type": "projectile",
      "range": 1.5,
      "cooldown": 50,
      "ammo_category": "melee"
    },
    "vision_distance": 30,
    "movement_speed": 0.17,
    "distance_per_frame": 0.2,
    "pollution_to_join_attack": 20000,
    "corpse": "behemoth-biter-corpse",
    "dying_explosion": "blood-explosion-big"
  },
  {
    "type": "unit",
    "name": "small-spitter",
    "icon": "__base__/graphics/icons/small-spitter.png",
    "flags": [
      "placeable-player",
      "placeable-enemy",
      "placeable-off-grid",
      "breaths-air",
      "not-repairable"
    ],
    "max_health": 10,
    "order": "b-b-d",
    "subgroup": "enemies",
    "healing_per_tick": 0.01,
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.3,
        0.3
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.4,
        0.4
      ]
    ],
    "sticker_box": [
      [
        null,
        null
      ],
      [
        0.3,
        0.1
      ]
    ],
    "distraction_cooldown": 300,
    "vision_distance": 30,
    "movement_speed": 0.185,
    "distance_per_frame": 0.04,
    "pollution_to_join_attack": 200,
    "corpse": "small-spitter-corpse",
    "dying_explosion": "blood-explosion-small"
  },
  {
    "type": "unit",
    "name": "medium-spitter",
    "icon": "__base__/graphics/icons/medium-spitter.png",
    "flags": [
      "placeable-player",
      "placeable-enemy",
      "placeable-off-grid",
      "breaths-air",
      "not-repairable"
    ],
    "max_health": 50,
    "order": "b-b-e",
    "subgroup": "enemies",
    "resistances": [
      {
        "type": "explosion",
        "percent": 15
      }
    ],
    "healing_per_tick": 0.01,
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.4,
        0.4
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.7
      ]
    ],
    "sticker_box": [
      [
        null,
        null
      ],
      [
        0.3,
        0.1
      ]
    ],
    "distraction_cooldown": 300,
    "vision_distance": 30,
    "movement_speed": 0.165,
    "distance_per_frame": 0.055,
    "pollution_to_join_attack": 600,
    "corpse": "medium-spitter-corpse",
    "dying_explosion": "blood-explosion-small"
  },
  {
    "type": "unit",
    "name": "big-spitter",
    "icon": "__base__/graphics/icons/big-spitter.png",
    "flags": [
      "placeable-player",
      "placeable-enemy",
      "placeable-off-grid",
      "breaths-air",
      "not-repairable"
    ],
    "max_health": 200,
    "order": "b-b-f",
    "subgroup": "enemies",
    "resistances": [
      {
        "type": "explosion",
        "percent": 30
      }
    ],
    "spawning_time_modifier": 3,
    "healing_per_tick": 0.01,
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.7,
        1
      ]
    ],
    "sticker_box": [
      [
        null,
        null
      ],
      [
        0.3,
        0.1
      ]
    ],
    "distraction_cooldown": 300,
    "vision_distance": 30,
    "movement_speed": 0.15,
    "distance_per_frame": 0.07,
    "pollution_to_join_attack": 1500,
    "corpse": "big-spitter-corpse",
    "dying_explosion": "blood-explosion-big"
  },
  {
    "type": "unit",
    "name": "behemoth-spitter",
    "icon": "__base__/graphics/icons/behemoth-spitter.png",
    "flags": [
      "placeable-player",
      "placeable-enemy",
      "placeable-off-grid",
      "breaths-air",
      "not-repairable"
    ],
    "max_health": 2000,
    "order": "b-b-f",
    "subgroup": "enemies",
    "resistances": [
      {
        "type": "explosion",
        "percent": 35
      }
    ],
    "spawning_time_modifier": 12,
    "healing_per_tick": 0.1,
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.7,
        1
      ]
    ],
    "sticker_box": [
      [
        null,
        null
      ],
      [
        0.3,
        0.1
      ]
    ],
    "distraction_cooldown": 300,
    "vision_distance": 30,
    "movement_speed": 0.15,
    "distance_per_frame": 0.084,
    "pollution_to_join_attack": 10000,
    "corpse": "behemoth-spitter-corpse",
    "dying_explosion": "blood-explosion-big"
  },
  {
    "type": "corpse",
    "name": "medium-biter-corpse",
    "icon": "__base__/graphics/icons/medium-biter-corpse.png",
    "selectable_in_game": false,
    "selection_box": [
      [
        null,
        null
      ],
      [
        1,
        1
      ]
    ],
    "flags": [
      "placeable-neutral",
      "placeable-off-grid",
      "building-direction-8-way",
      "not-on-map"
    ],
    "subgroup": "corpses",
    "order": "c[corpse]-a[biter]-b[medium]",
    "dying_speed": 0.04,
    "final_render_layer": "corpse"
  },
  {
    "type": "corpse",
    "name": "big-biter-corpse",
    "icon": "__base__/graphics/icons/big-biter-corpse.png",
    "selectable_in_game": false,
    "selection_box": [
      [
        null,
        null
      ],
      [
        1,
        1
      ]
    ],
    "subgroup": "corpses",
    "order": "c[corpse]-a[biter]-c[big]",
    "flags": [
      "placeable-neutral",
      "placeable-off-grid",
      "building-direction-8-way",
      "not-on-map"
    ],
    "dying_speed": 0.04,
    "final_render_layer": "corpse"
  },
  {
    "type": "corpse",
    "name": "behemoth-biter-corpse",
    "icon": "__base__/graphics/icons/big-biter-corpse.png",
    "selectable_in_game": false,
    "selection_box": [
      [
        null,
        null
      ],
      [
        1,
        1
      ]
    ],
    "subgroup": "corpses",
    "order": "c[corpse]-a[biter]-c[big]",
    "flags": [
      "placeable-neutral",
      "placeable-off-grid",
      "building-direction-8-way",
      "not-on-map"
    ],
    "dying_speed": 0.02,
    "final_render_layer": "corpse"
  },
  {
    "type": "corpse",
    "name": "small-spitter-corpse",
    "icon": "__base__/graphics/icons/big-biter-corpse.png",
    "selectable_in_game": false,
    "selection_box": [
      [
        null,
        null
      ],
      [
        1,
        1
      ]
    ],
    "subgroup": "corpses",
    "order": "c[corpse]-b[spitter]-a[small]",
    "flags": [
      "placeable-neutral",
      "placeable-off-grid",
      "building-direction-8-way",
      "not-on-map"
    ],
    "dying_speed": 0.04,
    "final_render_layer": "corpse"
  },
  {
    "type": "corpse",
    "name": "medium-spitter-corpse",
    "icon": "__base__/graphics/icons/big-biter-corpse.png",
    "selectable_in_game": false,
    "selection_box": [
      [
        null,
        null
      ],
      [
        1,
        1
      ]
    ],
    "subgroup": "corpses",
    "order": "c[corpse]-b[spitter]-b[medium]",
    "flags": [
      "placeable-neutral",
      "placeable-off-grid",
      "building-direction-8-way",
      "not-on-map"
    ],
    "dying_speed": 0.04,
    "final_render_layer": "corpse"
  },
  {
    "type": "corpse",
    "name": "big-spitter-corpse",
    "icon": "__base__/graphics/icons/big-biter-corpse.png",
    "selectable_in_game": false,
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.7,
        0.7
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.7,
        1
      ]
    ],
    "subgroup": "corpses",
    "order": "c[corpse]-b[spitter]-c[big]",
    "flags": [
      "placeable-neutral",
      "placeable-off-grid",
      "building-direction-8-way",
      "not-on-map"
    ],
    "dying_speed": 0.04,
    "final_render_layer": "corpse"
  },
  {
    "type": "corpse",
    "name": "behemoth-spitter-corpse",
    "icon": "__base__/graphics/icons/big-biter-corpse.png",
    "selectable_in_game": false,
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.7,
        0.7
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.7,
        1
      ]
    ],
    "subgroup": "corpses",
    "order": "c[corpse]-b[spitter]-d[behemoth]",
    "flags": [
      "placeable-neutral",
      "placeable-off-grid",
      "building-direction-8-way",
      "not-on-map"
    ],
    "dying_speed": 0.04,
    "final_render_layer": "corpse"
  },
  {
    "type": "unit-spawner",
    "name": "spitter-spawner",
    "icon": "__base__/graphics/icons/biter-spawner.png",
    "flags": [
      "placeable-player",
      "placeable-enemy",
      "not-repairable"
    ],
    "max_health": 350,
    "order": "b-b-h",
    "subgroup": "enemies",
    "working_sound": {
      "sound": [
        {
          "filename": "__base__/sound/creatures/spawner.ogg",
          "volume": 1
        }
      ],
      "apparent_volume": 2
    },
    "dying_sound": [
      {
        "filename": "__base__/sound/creatures/spawner-death-1.ogg",
        "volume": 1
      },
      {
        "filename": "__base__/sound/creatures/spawner-death-2.ogg",
        "volume": 1
      }
    ],
    "resistances": [
      {
        "type": "physical",
        "decrease": 2
      },
      {
        "type": "explosion",
        "decrease": 5,
        "percent": 15
      }
    ],
    "healing_per_tick": 0.02,
    "collision_box": [
      [
        null,
        null
      ],
      [
        2.2,
        2.2
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        2.5,
        2.5
      ]
    ],
    "pollution_absorbtion_absolute": 20,
    "pollution_absorbtion_proportional": 0.01,
    "corpse": "spitter-spawner-corpse",
    "dying_explosion": "blood-explosion-huge",
    "loot": [
      {
        "count_max": 15,
        "count_min": 5,
        "item": "alien-artifact",
        "probability": 1
      }
    ],
    "max_count_of_owned_units": 7,
    "max_friends_around_to_spawn": 5,
    "animations": [
      null,
      null,
      null,
      null
    ],
    "spawning_cooldown": [
      360,
      150
    ],
    "spawning_radius": 10,
    "spawning_spacing": 3,
    "max_spawn_shift": 0,
    "max_richness_for_spawn_shift": 100,
    "call_for_help_radius": 50
  },
  {
    "type": "corpse",
    "name": "spitter-spawner-corpse",
    "flags": [
      "placeable-neutral",
      "placeable-off-grid",
      "not-on-map"
    ],
    "icon": "__base__/graphics/icons/biter-spawner-corpse.png",
    "collision_box": [
      [
        null,
        null
      ],
      [
        2,
        2
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        2,
        2
      ]
    ],
    "selectable_in_game": false,
    "dying_speed": 0.04,
    "subgroup": "corpses",
    "order": "c[corpse]-c[spitter-spawner]",
    "final_render_layer": "corpse",
    "animation": [
      null,
      null,
      null,
      null
    ]
  },
  {
    "type": "underground-belt",
    "name": "underground-belt",
    "icon": "__base__/graphics/icons/underground-belt.png",
    "flags": [
      "placeable-neutral",
      "player-creation"
    ],
    "minable": {
      "hardness": 0.2,
      "mining_time": 0.5,
      "result": "underground-belt"
    },
    "max_health": 60,
    "corpse": "small-remnants",
    "max_distance": 5,
    "underground_sprite": {
      "filename": "__core__/graphics/arrows/underground-lines.png",
      "priority": "high",
      "width": 64,
      "height": 64,
      "x": 64,
      "scale": 0.5
    },
    "resistances": [
      {
        "type": "fire",
        "percent": 60
      }
    ],
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.4,
        0.4
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ],
    "animation_speed_coefficient": 32,
    "fast_replaceable_group": "underground-belt",
    "speed": 0.03125,
    "structure": {
      "direction_in": {
        "sheet": {
          "filename": "__base__/graphics/entity/underground-belt/underground-belt-structure.png",
          "priority": "extra-high",
          "shift": [
            0.26,
            0
          ],
          "width": 57,
          "height": 43,
          "y": 43
        }
      },
      "direction_out": {
        "sheet": {
          "filename": "__base__/graphics/entity/underground-belt/underground-belt-structure.png",
          "priority": "extra-high",
          "shift": [
            0.26,
            0
          ],
          "width": 57,
          "height": 43
        }
      }
    }
  },
  {
    "type": "underground-belt",
    "name": "fast-underground-belt",
    "icon": "__base__/graphics/icons/fast-underground-belt.png",
    "flags": [
      "placeable-neutral",
      "player-creation"
    ],
    "minable": {
      "hardness": 0.2,
      "mining_time": 0.5,
      "result": "fast-underground-belt"
    },
    "max_health": 60,
    "corpse": "small-remnants",
    "underground_sprite": {
      "filename": "__core__/graphics/arrows/underground-lines.png",
      "priority": "high",
      "width": 64,
      "height": 64,
      "x": 64,
      "scale": 0.5
    },
    "resistances": [
      {
        "type": "fire",
        "percent": 60
      }
    ],
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.4,
        0.4
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ],
    "animation_speed_coefficient": 32,
    "fast_replaceable_group": "underground-belt",
    "speed": 0.0625,
    "structure": {
      "direction_in": {
        "sheet": {
          "filename": "__base__/graphics/entity/fast-underground-belt/fast-underground-belt-structure.png",
          "priority": "extra-high",
          "shift": [
            0.26,
            0
          ],
          "width": 57,
          "height": 43,
          "y": 43
        }
      },
      "direction_out": {
        "sheet": {
          "filename": "__base__/graphics/entity/fast-underground-belt/fast-underground-belt-structure.png",
          "priority": "extra-high",
          "shift": [
            0.26,
            0
          ],
          "width": 57,
          "height": 43
        }
      }
    }
  },
  {
    "type": "underground-belt",
    "name": "express-underground-belt",
    "icon": "__base__/graphics/icons/express-underground-belt.png",
    "flags": [
      "placeable-neutral",
      "player-creation"
    ],
    "minable": {
      "hardness": 0.2,
      "mining_time": 0.5,
      "result": "express-underground-belt"
    },
    "max_health": 60,
    "corpse": "small-remnants",
    "underground_sprite": {
      "filename": "__core__/graphics/arrows/underground-lines.png",
      "priority": "high",
      "width": 64,
      "height": 64,
      "x": 64,
      "scale": 0.5
    },
    "resistances": [
      {
        "type": "fire",
        "percent": 60
      }
    ],
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.4,
        0.4
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ],
    "animation_speed_coefficient": 32,
    "fast_replaceable_group": "underground-belt",
    "speed": 0.09375,
    "structure": {
      "direction_in": {
        "sheet": {
          "filename": "__base__/graphics/entity/express-underground-belt/express-underground-belt-structure.png",
          "priority": "extra-high",
          "shift": [
            0.26,
            0
          ],
          "width": 57,
          "height": 43,
          "y": 43
        }
      },
      "direction_out": {
        "sheet": {
          "filename": "__base__/graphics/entity/express-underground-belt/express-underground-belt-structure.png",
          "priority": "extra-high",
          "shift": [
            0.26,
            0
          ],
          "width": 57,
          "height": 43
        }
      }
    }
  },
  {
    "type": "loader",
    "name": "loader",
    "icon": "__base__/graphics/icons/loader.png",
    "flags": [
      "placeable-neutral",
      "player-creation",
      "fast-replaceable-no-build-while-moving"
    ],
    "minable": {
      "hardness": 0.2,
      "mining_time": 0.5,
      "result": "loader"
    },
    "max_health": 70,
    "filter_count": 5,
    "corpse": "small-remnants",
    "resistances": [
      {
        "type": "fire",
        "percent": 60
      }
    ],
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.4,
        0.9
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.5,
        1
      ]
    ],
    "animation_speed_coefficient": 32,
    "fast_replaceable_group": "loader",
    "speed": 0.03125,
    "structure": {
      "direction_in": {
        "sheet": {
          "filename": "__base__/graphics/entity/loader/loader-structure.png",
          "priority": "extra-high",
          "width": 64,
          "height": 64
        }
      },
      "direction_out": {
        "sheet": {
          "filename": "__base__/graphics/entity/loader/loader-structure.png",
          "priority": "extra-high",
          "width": 64,
          "height": 64,
          "y": 64
        }
      }
    }
  },
  {
    "type": "loader",
    "name": "fast-loader",
    "icon": "__base__/graphics/icons/loader.png",
    "flags": [
      "placeable-neutral",
      "player-creation",
      "fast-replaceable-no-build-while-moving"
    ],
    "minable": {
      "hardness": 0.2,
      "mining_time": 0.5,
      "result": "fast-loader"
    },
    "max_health": 70,
    "filter_count": 5,
    "corpse": "small-remnants",
    "resistances": [
      {
        "type": "fire",
        "percent": 60
      }
    ],
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.4,
        0.9
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.5,
        1
      ]
    ],
    "animation_speed_coefficient": 32,
    "fast_replaceable_group": "loader",
    "speed": 0.0625,
    "structure": {
      "direction_in": {
        "sheet": {
          "filename": "__base__/graphics/entity/loader/loader-structure.png",
          "priority": "extra-high",
          "width": 64,
          "height": 64
        }
      },
      "direction_out": {
        "sheet": {
          "filename": "__base__/graphics/entity/loader/loader-structure.png",
          "priority": "extra-high",
          "width": 64,
          "height": 64,
          "y": 64
        }
      }
    }
  },
  {
    "type": "loader",
    "name": "express-loader",
    "icon": "__base__/graphics/icons/loader.png",
    "flags": [
      "placeable-neutral",
      "player-creation",
      "fast-replaceable-no-build-while-moving"
    ],
    "minable": {
      "hardness": 0.2,
      "mining_time": 0.5,
      "result": "express-loader"
    },
    "max_health": 70,
    "filter_count": 5,
    "corpse": "small-remnants",
    "resistances": [
      {
        "type": "fire",
        "percent": 60
      }
    ],
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.4,
        0.9
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.5,
        1
      ]
    ],
    "animation_speed_coefficient": 32,
    "fast_replaceable_group": "loader",
    "speed": 0.09375,
    "structure": {
      "direction_in": {
        "sheet": {
          "filename": "__base__/graphics/entity/loader/loader-structure.png",
          "priority": "extra-high",
          "width": 64,
          "height": 64
        }
      },
      "direction_out": {
        "sheet": {
          "filename": "__base__/graphics/entity/loader/loader-structure.png",
          "priority": "extra-high",
          "width": 64,
          "height": 64,
          "y": 64
        }
      }
    }
  },
  {
    "type": "splitter",
    "name": "splitter",
    "icon": "__base__/graphics/icons/splitter.png",
    "flags": [
      "placeable-neutral",
      "player-creation"
    ],
    "minable": {
      "hardness": 0.2,
      "mining_time": 0.5,
      "result": "splitter"
    },
    "max_health": 80,
    "corpse": "medium-remnants",
    "resistances": [
      {
        "type": "fire",
        "percent": 60
      }
    ],
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.9,
        0.4
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.9,
        0.5
      ]
    ],
    "animation_speed_coefficient": 32,
    "structure_animation_speed_coefficient": 0.7,
    "structure_animation_movement_cooldown": 10,
    "fast_replaceable_group": "splitter",
    "speed": 0.03125,
    "structure": {
      "north": {
        "filename": "__base__/graphics/entity/splitter/splitter-north.png",
        "frame_count": 32,
        "line_length": 16,
        "priority": "extra-high",
        "width": 80,
        "height": 35,
        "shift": [
          0.225,
          0
        ]
      },
      "east": {
        "filename": "__base__/graphics/entity/splitter/splitter-east.png",
        "frame_count": 32,
        "line_length": 16,
        "priority": "extra-high",
        "width": 46,
        "height": 81,
        "shift": [
          0.075,
          0
        ]
      },
      "south": {
        "filename": "__base__/graphics/entity/splitter/splitter-south.png",
        "frame_count": 32,
        "line_length": 16,
        "priority": "extra-high",
        "width": 82,
        "height": 36,
        "shift": [
          0.075,
          0
        ]
      },
      "west": {
        "filename": "__base__/graphics/entity/splitter/splitter-west.png",
        "frame_count": 32,
        "line_length": 16,
        "priority": "extra-high",
        "width": 47,
        "height": 79,
        "shift": [
          0.25,
          0.05
        ]
      }
    }
  },
  {
    "type": "splitter",
    "name": "fast-splitter",
    "icon": "__base__/graphics/icons/fast-splitter.png",
    "flags": [
      "placeable-neutral",
      "player-creation"
    ],
    "minable": {
      "hardness": 0.2,
      "mining_time": 0.5,
      "result": "fast-splitter"
    },
    "max_health": 80,
    "corpse": "medium-remnants",
    "resistances": [
      {
        "type": "fire",
        "percent": 60
      }
    ],
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.9,
        0.4
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.9,
        0.5
      ]
    ],
    "animation_speed_coefficient": 32,
    "structure_animation_speed_coefficient": 1.2,
    "structure_animation_movement_cooldown": 10,
    "fast_replaceable_group": "splitter",
    "speed": 0.0625,
    "structure": {
      "north": {
        "filename": "__base__/graphics/entity/fast-splitter/fast-splitter-north.png",
        "frame_count": 32,
        "line_length": 16,
        "priority": "extra-high",
        "width": 80,
        "height": 35,
        "shift": [
          0.225,
          0
        ]
      },
      "east": {
        "filename": "__base__/graphics/entity/fast-splitter/fast-splitter-east.png",
        "frame_count": 32,
        "line_length": 16,
        "priority": "extra-high",
        "width": 46,
        "height": 81,
        "shift": [
          0.075,
          0
        ]
      },
      "south": {
        "filename": "__base__/graphics/entity/fast-splitter/fast-splitter-south.png",
        "frame_count": 32,
        "line_length": 16,
        "priority": "extra-high",
        "width": 82,
        "height": 36,
        "shift": [
          0.075,
          0
        ]
      },
      "west": {
        "filename": "__base__/graphics/entity/fast-splitter/fast-splitter-west.png",
        "frame_count": 32,
        "line_length": 16,
        "priority": "extra-high",
        "width": 47,
        "height": 79,
        "shift": [
          0.25,
          0.05
        ]
      }
    }
  },
  {
    "type": "splitter",
    "name": "express-splitter",
    "icon": "__base__/graphics/icons/express-splitter.png",
    "flags": [
      "placeable-neutral",
      "player-creation"
    ],
    "minable": {
      "hardness": 0.2,
      "mining_time": 0.5,
      "result": "express-splitter"
    },
    "max_health": 80,
    "corpse": "medium-remnants",
    "resistances": [
      {
        "type": "fire",
        "percent": 60
      }
    ],
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.9,
        0.4
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.9,
        0.5
      ]
    ],
    "animation_speed_coefficient": 32,
    "structure_animation_speed_coefficient": 1.2,
    "structure_animation_movement_cooldown": 10,
    "fast_replaceable_group": "splitter",
    "speed": 0.09375,
    "structure": {
      "north": {
        "filename": "__base__/graphics/entity/express-splitter/express-splitter-north.png",
        "frame_count": 32,
        "line_length": 16,
        "priority": "extra-high",
        "width": 80,
        "height": 35,
        "shift": [
          0.225,
          0
        ]
      },
      "east": {
        "filename": "__base__/graphics/entity/express-splitter/express-splitter-east.png",
        "frame_count": 32,
        "line_length": 16,
        "priority": "extra-high",
        "width": 46,
        "height": 81,
        "shift": [
          0.075,
          0
        ]
      },
      "south": {
        "filename": "__base__/graphics/entity/express-splitter/express-splitter-south.png",
        "frame_count": 32,
        "line_length": 16,
        "priority": "extra-high",
        "width": 82,
        "height": 36,
        "shift": [
          0.075,
          0
        ]
      },
      "west": {
        "filename": "__base__/graphics/entity/express-splitter/express-splitter-west.png",
        "frame_count": 32,
        "line_length": 16,
        "priority": "extra-high",
        "width": 47,
        "height": 79,
        "shift": [
          0.25,
          0.05
        ]
      }
    }
  },
  {
    "type": "transport-belt",
    "name": "fast-transport-belt",
    "icon": "__base__/graphics/icons/fast-transport-belt.png",
    "flags": [
      "placeable-neutral",
      "player-creation"
    ],
    "minable": {
      "hardness": 0.2,
      "mining_time": 0.3,
      "result": "fast-transport-belt"
    },
    "max_health": 50,
    "corpse": "small-remnants",
    "resistances": [
      {
        "type": "fire",
        "percent": 50
      }
    ],
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.4,
        0.4
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ],
    "working_sound": {
      "sound": {
        "filename": "__base__/sound/fast-transport-belt.ogg",
        "volume": 0.4
      },
      "max_sounds_per_type": 3
    },
    "animation_speed_coefficient": 32,
    "animations": {
      "filename": "__base__/graphics/entity/fast-transport-belt/fast-transport-belt.png",
      "priority": "extra-high",
      "width": 40,
      "height": 40,
      "frame_count": 32,
      "direction_count": 12
    },
    "fast_replaceable_group": "transport-belt",
    "speed": 0.0625
  },
  {
    "type": "transport-belt",
    "name": "express-transport-belt",
    "icon": "__base__/graphics/icons/express-transport-belt.png",
    "flags": [
      "placeable-neutral",
      "player-creation"
    ],
    "minable": {
      "hardness": 0.2,
      "mining_time": 0.3,
      "result": "express-transport-belt"
    },
    "max_health": 50,
    "corpse": "small-remnants",
    "resistances": [
      {
        "type": "fire",
        "percent": 50
      }
    ],
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.4,
        0.4
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ],
    "working_sound": {
      "sound": {
        "filename": "__base__/sound/express-transport-belt.ogg",
        "volume": 0.4
      },
      "max_sounds_per_type": 3
    },
    "animation_speed_coefficient": 32,
    "animations": {
      "filename": "__base__/graphics/entity/express-transport-belt/express-transport-belt.png",
      "priority": "extra-high",
      "width": 40,
      "height": 40,
      "frame_count": 32,
      "direction_count": 12
    },
    "fast_replaceable_group": "transport-belt",
    "speed": 0.09375
  },
  {
    "type": "assembling-machine",
    "name": "assembling-machine-2",
    "icon": "__base__/graphics/icons/assembling-machine-2.png",
    "flags": [
      "placeable-neutral",
      "placeable-player",
      "player-creation"
    ],
    "minable": {
      "hardness": 0.2,
      "mining_time": 0.5,
      "result": "assembling-machine-2"
    },
    "max_health": 250,
    "corpse": "big-remnants",
    "dying_explosion": "medium-explosion",
    "resistances": [
      {
        "type": "fire",
        "percent": 70
      }
    ],
    "fluid_boxes": [
      {
        "production_type": "input",
        "base_area": 10,
        "pipe_connections": [
          {
            "type": "input",
            "position": [
              0,
              null
            ]
          }
        ]
      },
      {
        "production_type": "output",
        "base_area": 10,
        "base_level": 1,
        "pipe_connections": [
          {
            "type": "output",
            "position": [
              0,
              2
            ]
          }
        ]
      },
      true
    ],
    "collision_box": [
      [
        null,
        null
      ],
      [
        1.2,
        1.2
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        1.5,
        1.5
      ]
    ],
    "fast_replaceable_group": "assembling-machine",
    "animation": {
      "filename": "__base__/graphics/entity/assembling-machine-2/assembling-machine-2.png",
      "priority": "high",
      "width": 113,
      "height": 99,
      "frame_count": 32,
      "line_length": 8,
      "shift": [
        0.4,
        null
      ]
    },
    "open_sound": {
      "filename": "__base__/sound/machine-open.ogg",
      "volume": 0.85
    },
    "close_sound": {
      "filename": "__base__/sound/machine-close.ogg",
      "volume": 0.75
    },
    "vehicle_impact_sound": {
      "filename": "__base__/sound/car-metal-impact.ogg",
      "volume": 0.65
    },
    "working_sound": {
      "sound": [
        {
          "filename": "__base__/sound/assembling-machine-t2-1.ogg",
          "volume": 0.8
        },
        {
          "filename": "__base__/sound/assembling-machine-t2-2.ogg",
          "volume": 0.8
        }
      ],
      "idle_sound": {
        "filename": "__base__/sound/idle1.ogg",
        "volume": 0.6
      },
      "apparent_volume": 1.5
    },
    "crafting_categories": [
      "crafting",
      "advanced-crafting",
      "crafting-with-fluid"
    ],
    "crafting_speed": 0.75,
    "energy_source": {
      "type": "electric",
      "usage_priority": "secondary-input"
    },
    "energy_usage": "150kW",
    "ingredient_count": 4,
    "module_specification": {
      "module_slots": 2
    },
    "allowed_effects": [
      "consumption",
      "speed",
      "productivity",
      "pollution"
    ]
  },
  {
    "type": "assembling-machine",
    "name": "assembling-machine-3",
    "icon": "__base__/graphics/icons/assembling-machine-3.png",
    "flags": [
      "placeable-neutral",
      "placeable-player",
      "player-creation"
    ],
    "minable": {
      "hardness": 0.2,
      "mining_time": 0.5,
      "result": "assembling-machine-3"
    },
    "max_health": 300,
    "corpse": "big-remnants",
    "dying_explosion": "medium-explosion",
    "resistances": [
      {
        "type": "fire",
        "percent": 70
      }
    ],
    "fluid_boxes": [
      {
        "production_type": "input",
        "base_area": 10,
        "pipe_connections": [
          {
            "type": "input",
            "position": [
              0,
              null
            ]
          }
        ]
      },
      {
        "production_type": "output",
        "base_area": 10,
        "base_level": 1,
        "pipe_connections": [
          {
            "type": "output",
            "position": [
              0,
              2
            ]
          }
        ]
      },
      true
    ],
    "open_sound": {
      "filename": "__base__/sound/machine-open.ogg",
      "volume": 0.85
    },
    "close_sound": {
      "filename": "__base__/sound/machine-close.ogg",
      "volume": 0.75
    },
    "vehicle_impact_sound": {
      "filename": "__base__/sound/car-metal-impact.ogg",
      "volume": 0.65
    },
    "working_sound": {
      "sound": [
        {
          "filename": "__base__/sound/assembling-machine-t3-1.ogg",
          "volume": 0.8
        },
        {
          "filename": "__base__/sound/assembling-machine-t3-2.ogg",
          "volume": 0.8
        }
      ],
      "idle_sound": {
        "filename": "__base__/sound/idle1.ogg",
        "volume": 0.6
      },
      "apparent_volume": 1.5
    },
    "collision_box": [
      [
        null,
        null
      ],
      [
        1.2,
        1.2
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        1.5,
        1.5
      ]
    ],
    "fast_replaceable_group": "assembling-machine",
    "animation": {
      "filename": "__base__/graphics/entity/assembling-machine-3/assembling-machine-3.png",
      "priority": "high",
      "width": 142,
      "height": 113,
      "frame_count": 32,
      "line_length": 8,
      "shift": [
        0.84,
        null
      ]
    },
    "crafting_categories": [
      "crafting",
      "advanced-crafting",
      "crafting-with-fluid"
    ],
    "crafting_speed": 1.25,
    "energy_source": {
      "type": "electric",
      "usage_priority": "secondary-input"
    },
    "energy_usage": "210kW",
    "ingredient_count": 6,
    "module_specification": {
      "module_slots": 4
    },
    "allowed_effects": [
      "consumption",
      "speed",
      "productivity",
      "pollution"
    ]
  },
  {
    "type": "car",
    "name": "car",
    "icon": "__base__/graphics/icons/car.png",
    "flags": [
      "pushable",
      "placeable-neutral",
      "player-creation",
      "placeable-off-grid"
    ],
    "minable": {
      "mining_time": 1,
      "result": "car"
    },
    "max_health": 200,
    "corpse": "medium-remnants",
    "dying_explosion": "medium-explosion",
    "energy_per_hit_point": 1,
    "resistances": [
      {
        "type": "fire",
        "percent": 50
      },
      {
        "type": "impact",
        "percent": 30,
        "decrease": 30
      }
    ],
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.7,
        1
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.7,
        1
      ]
    ],
    "effectivity": 0.5,
    "braking_power": "200kW",
    "burner": {
      "effectivity": 0.6,
      "fuel_inventory_size": 1,
      "smoke": [
        {
          "name": "car-smoke",
          "deviation": [
            0.25,
            0.25
          ],
          "frequency": 200,
          "position": [
            0,
            1.5
          ],
          "starting_frame": 0,
          "starting_frame_deviation": 60
        }
      ]
    },
    "consumption": "150kW",
    "friction": 0.002,
    "light": [
      {
        "type": "oriented",
        "minimum_darkness": 0.3,
        "picture": {
          "filename": "__core__/graphics/light-cone.png",
          "priority": "medium",
          "scale": 2,
          "width": 200,
          "height": 200
        },
        "shift": [
          null,
          null
        ],
        "size": 2,
        "intensity": 0.6
      },
      {
        "type": "oriented",
        "minimum_darkness": 0.3,
        "picture": {
          "filename": "__core__/graphics/light-cone.png",
          "priority": "medium",
          "scale": 2,
          "width": 200,
          "height": 200
        },
        "shift": [
          0.6,
          null
        ],
        "size": 2,
        "intensity": 0.6
      }
    ],
    "animation": {
      "layers": [
        {
          "width": 102,
          "height": 86,
          "frame_count": 2,
          "direction_count": 64,
          "shift": [
            0,
            null
          ],
          "animation_speed": 8,
          "max_advance": 0.2,
          "stripes": [
            {
              "filename": "__base__/graphics/entity/car/car-1.png",
              "width_in_frames": 2,
              "height_in_frames": 22
            },
            {
              "filename": "__base__/graphics/entity/car/car-2.png",
              "width_in_frames": 2,
              "height_in_frames": 22
            },
            {
              "filename": "__base__/graphics/entity/car/car-3.png",
              "width_in_frames": 2,
              "height_in_frames": 20
            }
          ]
        },
        {
          "width": 100,
          "height": 75,
          "frame_count": 2,
          "apply_runtime_tint": true,
          "direction_count": 64,
          "max_advance": 0.2,
          "line_length": 2,
          "shift": [
            0,
            null
          ]
        },
        {
          "width": 114,
          "height": 76,
          "frame_count": 2,
          "draw_as_shadow": true,
          "direction_count": 64,
          "shift": [
            0.28125,
            0.25
          ],
          "max_advance": 0.2
        }
      ]
    },
    "turret_animation": {
      "layers": [
        {
          "filename": "__base__/graphics/entity/car/car-turret.png",
          "line_length": 8,
          "width": 36,
          "height": 29,
          "frame_count": 1,
          "direction_count": 64,
          "shift": [
            0.03125,
            null
          ],
          "animation_speed": 8
        },
        {
          "filename": "__base__/graphics/entity/car/car-turret-shadow.png",
          "line_length": 8,
          "width": 46,
          "height": 31,
          "frame_count": 1,
          "draw_as_shadow": true,
          "direction_count": 64,
          "shift": [
            0.875,
            0.359375
          ]
        }
      ]
    },
    "sound_no_fuel": [
      {
        "filename": "__base__/sound/fight/car-no-fuel-1.ogg",
        "volume": 0.6
      }
    ],
    "stop_trigger_speed": 0.2,
    "stop_trigger": [
      {
        "type": "play-sound",
        "sound": [
          {
            "filename": "__base__/sound/car-breaks.ogg",
            "volume": 0.6
          }
        ]
      }
    ],
    "sound_minimum_speed": 0.2,
    "vehicle_impact_sound": {
      "filename": "__base__/sound/car-metal-impact.ogg",
      "volume": 0.65
    },
    "working_sound": {
      "sound": {
        "filename": "__base__/sound/car-engine.ogg",
        "volume": 0.6
      },
      "activate_sound": {
        "filename": "__base__/sound/car-engine-start.ogg",
        "volume": 0.6
      },
      "deactivate_sound": {
        "filename": "__base__/sound/car-engine-stop.ogg",
        "volume": 0.6
      },
      "match_speed_to_activity": true
    },
    "open_sound": {
      "filename": "__base__/sound/car-door-open.ogg",
      "volume": 0.7
    },
    "close_sound": {
      "filename": "__base__/sound/car-door-close.ogg",
      "volume": 0.7
    },
    "rotation_speed": 0.015,
    "weight": 700,
    "guns": [
      "vehicle-machine-gun"
    ],
    "inventory_size": 80
  },
  {
    "type": "car",
    "name": "tank",
    "icon": "__base__/graphics/icons/tank.png",
    "flags": [
      "pushable",
      "placeable-neutral",
      "player-creation",
      "placeable-off-grid"
    ],
    "minable": {
      "mining_time": 1,
      "result": "tank"
    },
    "max_health": 1000,
    "corpse": "medium-remnants",
    "dying_explosion": "medium-explosion",
    "energy_per_hit_point": 0.5,
    "resistances": [
      {
        "type": "fire",
        "decrease": 15,
        "percent": 50
      },
      {
        "type": "physical",
        "decrease": 15,
        "percent": 30
      },
      {
        "type": "impact",
        "decrease": 50,
        "percent": 60
      },
      {
        "type": "explosion",
        "decrease": 15,
        "percent": 30
      },
      {
        "type": "acid",
        "decrease": 10,
        "percent": 20
      }
    ],
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.9,
        1.3
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.9,
        1.3
      ]
    ],
    "effectivity": 0.6,
    "braking_power": "400kW",
    "burner": {
      "effectivity": 0.75,
      "fuel_inventory_size": 2,
      "smoke": [
        {
          "name": "tank-smoke",
          "deviation": [
            0.25,
            0.25
          ],
          "frequency": 50,
          "position": [
            0,
            1.5
          ],
          "starting_frame": 0,
          "starting_frame_deviation": 60
        }
      ]
    },
    "consumption": "600kW",
    "terrain_friction_modifier": 0.2,
    "friction": 0.002,
    "light": [
      {
        "type": "oriented",
        "minimum_darkness": 0.3,
        "picture": {
          "filename": "__core__/graphics/light-cone.png",
          "priority": "medium",
          "scale": 2,
          "width": 200,
          "height": 200
        },
        "shift": [
          null,
          null
        ],
        "size": 2,
        "intensity": 0.6
      },
      {
        "type": "oriented",
        "minimum_darkness": 0.3,
        "picture": {
          "filename": "__core__/graphics/light-cone.png",
          "priority": "medium",
          "scale": 2,
          "width": 200,
          "height": 200
        },
        "shift": [
          0.6,
          null
        ],
        "size": 2,
        "intensity": 0.6
      }
    ],
    "animation": {
      "layers": [
        {
          "width": 139,
          "height": 110,
          "frame_count": 2,
          "direction_count": 64,
          "shift": [
            null,
            null
          ],
          "animation_speed": 8,
          "max_advance": 1,
          "stripes": [
            {
              "filename": "__base__/graphics/entity/tank/base-1.png",
              "width_in_frames": 2,
              "height_in_frames": 16
            },
            {
              "filename": "__base__/graphics/entity/tank/base-2.png",
              "width_in_frames": 2,
              "height_in_frames": 16
            },
            {
              "filename": "__base__/graphics/entity/tank/base-3.png",
              "width_in_frames": 2,
              "height_in_frames": 16
            },
            {
              "filename": "__base__/graphics/entity/tank/base-4.png",
              "width_in_frames": 2,
              "height_in_frames": 16
            }
          ]
        },
        {
          "width": 109,
          "height": 88,
          "frame_count": 2,
          "apply_runtime_tint": true,
          "direction_count": 64,
          "shift": [
            null,
            null
          ],
          "max_advance": 1,
          "line_length": 2
        },
        {
          "width": 154,
          "height": 99,
          "frame_count": 2,
          "draw_as_shadow": true,
          "direction_count": 64,
          "shift": [
            0.59375,
            0.328125
          ],
          "max_advance": 1
        }
      ]
    },
    "turret_animation": {
      "layers": [
        {
          "filename": "__base__/graphics/entity/tank/turret.png",
          "line_length": 8,
          "width": 92,
          "height": 69,
          "frame_count": 1,
          "direction_count": 64,
          "shift": [
            null,
            null
          ],
          "animation_speed": 8
        },
        {
          "filename": "__base__/graphics/entity/tank/turret-mask.png",
          "line_length": 8,
          "width": 38,
          "height": 29,
          "frame_count": 1,
          "apply_runtime_tint": true,
          "direction_count": 64,
          "shift": [
            null,
            null
          ]
        },
        {
          "filename": "__base__/graphics/entity/tank/turret-shadow.png",
          "line_length": 8,
          "width": 95,
          "height": 67,
          "frame_count": 1,
          "draw_as_shadow": true,
          "direction_count": 64,
          "shift": [
            1.70312,
            0.640625
          ]
        }
      ]
    },
    "turret_return_timeout": 300,
    "stop_trigger_speed": 0.2,
    "sound_no_fuel": [
      {
        "filename": "__base__/sound/fight/tank-no-fuel-1.ogg",
        "volume": 0.6
      }
    ],
    "stop_trigger": [
      {
        "type": "play-sound",
        "sound": [
          {
            "filename": "__base__/sound/car-breaks.ogg",
            "volume": 0.6
          }
        ]
      }
    ],
    "sound_minimum_speed": 0.15,
    "vehicle_impact_sound": {
      "filename": "__base__/sound/car-metal-impact.ogg",
      "volume": 0.65
    },
    "working_sound": {
      "sound": {
        "filename": "__base__/sound/fight/tank-engine.ogg",
        "volume": 0.6
      },
      "activate_sound": {
        "filename": "__base__/sound/fight/tank-engine-start.ogg",
        "volume": 0.6
      },
      "deactivate_sound": {
        "filename": "__base__/sound/fight/tank-engine-stop.ogg",
        "volume": 0.6
      },
      "match_speed_to_activity": true
    },
    "open_sound": {
      "filename": "__base__/sound/car-door-open.ogg",
      "volume": 0.7
    },
    "close_sound": {
      "filename": "__base__/sound/car-door-close.ogg",
      "volume": 0.7
    },
    "rotation_speed": 0.0035,
    "tank_driving": true,
    "weight": 20000,
    "inventory_size": 80,
    "guns": [
      "tank-cannon",
      "tank-machine-gun"
    ]
  },
  {
    "type": "container",
    "name": "iron-chest",
    "icon": "__base__/graphics/icons/iron-chest.png",
    "flags": [
      "placeable-neutral",
      "player-creation"
    ],
    "minable": {
      "mining_time": 1,
      "result": "iron-chest"
    },
    "max_health": 100,
    "corpse": "small-remnants",
    "open_sound": {
      "filename": "__base__/sound/metallic-chest-open.ogg",
      "volume": 0.65
    },
    "close_sound": {
      "filename": "__base__/sound/metallic-chest-close.ogg",
      "volume": 0.7
    },
    "resistances": [
      {
        "type": "fire",
        "percent": 80
      }
    ],
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.35,
        0.35
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ],
    "fast_replaceable_group": "container",
    "inventory_size": 32,
    "vehicle_impact_sound": {
      "filename": "__base__/sound/car-metal-impact.ogg",
      "volume": 0.65
    },
    "picture": {
      "filename": "__base__/graphics/entity/iron-chest/iron-chest.png",
      "priority": "extra-high",
      "width": 48,
      "height": 34,
      "shift": [
        0.1875,
        0
      ]
    },
    "circuit_wire_connection_point": {
      "shadow": {
        "red": [
          0.734375,
          0.453125
        ],
        "green": [
          0.609375,
          0.515625
        ]
      },
      "wire": {
        "red": [
          0.40625,
          0.21875
        ],
        "green": [
          0.40625,
          0.375
        ]
      }
    },
    "circuit_wire_max_distance": 7.5
  },
  {
    "type": "container",
    "name": "steel-chest",
    "icon": "__base__/graphics/icons/steel-chest.png",
    "flags": [
      "placeable-neutral",
      "player-creation"
    ],
    "minable": {
      "mining_time": 1,
      "result": "steel-chest"
    },
    "max_health": 200,
    "corpse": "small-remnants",
    "open_sound": {
      "filename": "__base__/sound/metallic-chest-open.ogg",
      "volume": 0.65
    },
    "close_sound": {
      "filename": "__base__/sound/metallic-chest-close.ogg",
      "volume": 0.7
    },
    "resistances": [
      {
        "type": "fire",
        "percent": 90
      }
    ],
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.35,
        0.35
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ],
    "fast_replaceable_group": "container",
    "inventory_size": 48,
    "vehicle_impact_sound": {
      "filename": "__base__/sound/car-metal-impact.ogg",
      "volume": 0.65
    },
    "picture": {
      "filename": "__base__/graphics/entity/steel-chest/steel-chest.png",
      "priority": "extra-high",
      "width": 48,
      "height": 34,
      "shift": [
        0.1875,
        0
      ]
    },
    "circuit_wire_connection_point": {
      "shadow": {
        "red": [
          0.734375,
          0.453125
        ],
        "green": [
          0.609375,
          0.515625
        ]
      },
      "wire": {
        "red": [
          0.40625,
          0.21875
        ],
        "green": [
          0.40625,
          0.375
        ]
      }
    },
    "circuit_wire_max_distance": 7.5
  },
  {
    "type": "inserter",
    "name": "long-handed-inserter",
    "icon": "__base__/graphics/icons/long-handed-inserter.png",
    "flags": [
      "placeable-neutral",
      "placeable-player",
      "player-creation"
    ],
    "minable": {
      "hardness": 0.2,
      "mining_time": 0.5,
      "result": "long-handed-inserter"
    },
    "max_health": 40,
    "corpse": "small-remnants",
    "resistances": [
      {
        "type": "fire",
        "percent": 90
      }
    ],
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.15,
        0.15
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.4,
        0.45
      ]
    ],
    "pickup_position": [
      0,
      null
    ],
    "insert_position": [
      0,
      2.2
    ],
    "energy_per_movement": 5000,
    "energy_per_rotation": 5000,
    "rotation_speed": 0.02,
    "extension_speed": 0.0457,
    "hand_size": 1.5,
    "energy_source": {
      "type": "electric",
      "usage_priority": "secondary-input",
      "drain": "0.4kW"
    },
    "fast_replaceable_group": "long-handed-inserter",
    "vehicle_impact_sound": {
      "filename": "__base__/sound/car-metal-impact.ogg",
      "volume": 0.65
    },
    "working_sound": {
      "match_progress_to_activity": true,
      "sound": [
        {
          "filename": "__base__/sound/inserter-long-handed-1.ogg",
          "volume": 0.75
        },
        {
          "filename": "__base__/sound/inserter-long-handed-2.ogg",
          "volume": 0.75
        },
        {
          "filename": "__base__/sound/inserter-long-handed-3.ogg",
          "volume": 0.75
        },
        {
          "filename": "__base__/sound/inserter-long-handed-4.ogg",
          "volume": 0.75
        },
        {
          "filename": "__base__/sound/inserter-long-handed-5.ogg",
          "volume": 0.75
        }
      ]
    },
    "hand_base_picture": {
      "filename": "__base__/graphics/entity/long-handed-inserter/long-handed-inserter-hand-base.png",
      "priority": "extra-high",
      "width": 8,
      "height": 34
    },
    "hand_closed_picture": {
      "filename": "__base__/graphics/entity/long-handed-inserter/long-handed-inserter-hand-closed.png",
      "priority": "extra-high",
      "width": 18,
      "height": 41
    },
    "hand_open_picture": {
      "filename": "__base__/graphics/entity/long-handed-inserter/long-handed-inserter-hand-open.png",
      "priority": "extra-high",
      "width": 18,
      "height": 41
    },
    "hand_base_shadow": {
      "filename": "__base__/graphics/entity/burner-inserter/burner-inserter-hand-base-shadow.png",
      "priority": "extra-high",
      "width": 8,
      "height": 34
    },
    "hand_closed_shadow": {
      "filename": "__base__/graphics/entity/burner-inserter/burner-inserter-hand-closed-shadow.png",
      "priority": "extra-high",
      "width": 18,
      "height": 41
    },
    "hand_open_shadow": {
      "filename": "__base__/graphics/entity/burner-inserter/burner-inserter-hand-open-shadow.png",
      "priority": "extra-high",
      "width": 18,
      "height": 41
    },
    "platform_picture": {
      "sheet": {
        "filename": "__base__/graphics/entity/long-handed-inserter/long-handed-inserter-platform.png",
        "priority": "extra-high",
        "width": 46,
        "height": 46,
        "shift": [
          0.09375,
          0
        ]
      }
    }
  },
  {
    "type": "inserter",
    "name": "fast-inserter",
    "icon": "__base__/graphics/icons/fast-inserter.png",
    "flags": [
      "placeable-neutral",
      "placeable-player",
      "player-creation"
    ],
    "minable": {
      "hardness": 0.2,
      "mining_time": 0.5,
      "result": "fast-inserter"
    },
    "max_health": 40,
    "corpse": "small-remnants",
    "resistances": [
      {
        "type": "fire",
        "percent": 90
      }
    ],
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.15,
        0.15
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.4,
        0.45
      ]
    ],
    "pickup_position": [
      0,
      null
    ],
    "insert_position": [
      0,
      1.2
    ],
    "energy_per_movement": 7000,
    "energy_per_rotation": 7000,
    "energy_source": {
      "type": "electric",
      "usage_priority": "secondary-input",
      "drain": "0.5kW"
    },
    "extension_speed": 0.07,
    "rotation_speed": 0.04,
    "fast_replaceable_group": "inserter",
    "vehicle_impact_sound": {
      "filename": "__base__/sound/car-metal-impact.ogg",
      "volume": 0.65
    },
    "working_sound": {
      "match_progress_to_activity": true,
      "sound": [
        {
          "filename": "__base__/sound/inserter-fast-1.ogg",
          "volume": 0.75
        },
        {
          "filename": "__base__/sound/inserter-fast-2.ogg",
          "volume": 0.75
        },
        {
          "filename": "__base__/sound/inserter-fast-3.ogg",
          "volume": 0.75
        },
        {
          "filename": "__base__/sound/inserter-fast-4.ogg",
          "volume": 0.75
        },
        {
          "filename": "__base__/sound/inserter-fast-5.ogg",
          "volume": 0.75
        }
      ]
    },
    "hand_base_picture": {
      "filename": "__base__/graphics/entity/fast-inserter/fast-inserter-hand-base.png",
      "priority": "extra-high",
      "width": 8,
      "height": 34
    },
    "hand_closed_picture": {
      "filename": "__base__/graphics/entity/fast-inserter/fast-inserter-hand-closed.png",
      "priority": "extra-high",
      "width": 18,
      "height": 41
    },
    "hand_open_picture": {
      "filename": "__base__/graphics/entity/fast-inserter/fast-inserter-hand-open.png",
      "priority": "extra-high",
      "width": 18,
      "height": 41
    },
    "hand_base_shadow": {
      "filename": "__base__/graphics/entity/burner-inserter/burner-inserter-hand-base-shadow.png",
      "priority": "extra-high",
      "width": 8,
      "height": 34
    },
    "hand_closed_shadow": {
      "filename": "__base__/graphics/entity/burner-inserter/burner-inserter-hand-closed-shadow.png",
      "priority": "extra-high",
      "width": 18,
      "height": 41
    },
    "hand_open_shadow": {
      "filename": "__base__/graphics/entity/burner-inserter/burner-inserter-hand-open-shadow.png",
      "priority": "extra-high",
      "width": 18,
      "height": 41
    },
    "platform_picture": {
      "sheet": {
        "filename": "__base__/graphics/entity/fast-inserter/fast-inserter-platform.png",
        "priority": "extra-high",
        "width": 46,
        "height": 46,
        "shift": [
          0.09375,
          0
        ]
      }
    }
  },
  {
    "type": "inserter",
    "name": "stack-inserter",
    "icon": "__base__/graphics/icons/stack-inserter.png",
    "flags": [
      "placeable-neutral",
      "placeable-player",
      "player-creation"
    ],
    "stack": true,
    "minable": {
      "hardness": 0.2,
      "mining_time": 0.5,
      "result": "stack-inserter"
    },
    "max_health": 40,
    "corpse": "small-remnants",
    "resistances": [
      {
        "type": "fire",
        "percent": 90
      }
    ],
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.15,
        0.15
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.4,
        0.45
      ]
    ],
    "pickup_position": [
      0,
      null
    ],
    "insert_position": [
      0,
      1.2
    ],
    "energy_per_movement": 20000,
    "energy_per_rotation": 20000,
    "energy_source": {
      "type": "electric",
      "usage_priority": "secondary-input",
      "drain": "1kW"
    },
    "extension_speed": 0.07,
    "rotation_speed": 0.04,
    "fast_replaceable_group": "inserter",
    "vehicle_impact_sound": {
      "filename": "__base__/sound/car-metal-impact.ogg",
      "volume": 0.65
    },
    "working_sound": {
      "match_progress_to_activity": true,
      "sound": [
        {
          "filename": "__base__/sound/inserter-fast-1.ogg",
          "volume": 0.75
        },
        {
          "filename": "__base__/sound/inserter-fast-2.ogg",
          "volume": 0.75
        },
        {
          "filename": "__base__/sound/inserter-fast-3.ogg",
          "volume": 0.75
        },
        {
          "filename": "__base__/sound/inserter-fast-4.ogg",
          "volume": 0.75
        },
        {
          "filename": "__base__/sound/inserter-fast-5.ogg",
          "volume": 0.75
        }
      ]
    },
    "hand_base_picture": {
      "filename": "__base__/graphics/entity/stack-inserter/stack-inserter-hand-base.png",
      "priority": "extra-high",
      "width": 8,
      "height": 34
    },
    "hand_closed_picture": {
      "filename": "__base__/graphics/entity/stack-inserter/stack-inserter-hand-closed.png",
      "priority": "extra-high",
      "width": 24,
      "height": 41
    },
    "hand_open_picture": {
      "filename": "__base__/graphics/entity/stack-inserter/stack-inserter-hand-open.png",
      "priority": "extra-high",
      "width": 32,
      "height": 41
    },
    "hand_base_shadow": {
      "filename": "__base__/graphics/entity/burner-inserter/burner-inserter-hand-base-shadow.png",
      "priority": "extra-high",
      "width": 8,
      "height": 34
    },
    "hand_closed_shadow": {
      "filename": "__base__/graphics/entity/burner-inserter/burner-inserter-hand-closed-shadow.png",
      "priority": "extra-high",
      "width": 18,
      "height": 41
    },
    "hand_open_shadow": {
      "filename": "__base__/graphics/entity/burner-inserter/burner-inserter-hand-open-shadow.png",
      "priority": "extra-high",
      "width": 18,
      "height": 41
    },
    "platform_picture": {
      "sheet": {
        "filename": "__base__/graphics/entity/stack-inserter/stack-inserter-platform.png",
        "priority": "extra-high",
        "width": 46,
        "height": 46,
        "shift": [
          0.09375,
          0
        ]
      }
    }
  },
  {
    "type": "inserter",
    "name": "stack-filter-inserter",
    "icon": "__base__/graphics/icons/stack-filter-inserter.png",
    "flags": [
      "placeable-neutral",
      "placeable-player",
      "player-creation"
    ],
    "stack": true,
    "filter_count": 1,
    "minable": {
      "hardness": 0.2,
      "mining_time": 0.5,
      "result": "stack-filter-inserter"
    },
    "max_health": 40,
    "corpse": "small-remnants",
    "resistances": [
      {
        "type": "fire",
        "percent": 90
      }
    ],
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.15,
        0.15
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.4,
        0.45
      ]
    ],
    "pickup_position": [
      0,
      null
    ],
    "insert_position": [
      0,
      1.2
    ],
    "energy_per_movement": 20000,
    "energy_per_rotation": 20000,
    "energy_source": {
      "type": "electric",
      "usage_priority": "secondary-input",
      "drain": "1kW"
    },
    "extension_speed": 0.07,
    "rotation_speed": 0.04,
    "fast_replaceable_group": "inserter",
    "vehicle_impact_sound": {
      "filename": "__base__/sound/car-metal-impact.ogg",
      "volume": 0.65
    },
    "working_sound": {
      "match_progress_to_activity": true,
      "sound": [
        {
          "filename": "__base__/sound/inserter-fast-1.ogg",
          "volume": 0.75
        },
        {
          "filename": "__base__/sound/inserter-fast-2.ogg",
          "volume": 0.75
        },
        {
          "filename": "__base__/sound/inserter-fast-3.ogg",
          "volume": 0.75
        },
        {
          "filename": "__base__/sound/inserter-fast-4.ogg",
          "volume": 0.75
        },
        {
          "filename": "__base__/sound/inserter-fast-5.ogg",
          "volume": 0.75
        }
      ]
    },
    "hand_base_picture": {
      "filename": "__base__/graphics/entity/stack-filter-inserter/stack-filter-inserter-hand-base.png",
      "priority": "extra-high",
      "width": 8,
      "height": 34
    },
    "hand_closed_picture": {
      "filename": "__base__/graphics/entity/stack-filter-inserter/stack-filter-inserter-hand-closed.png",
      "priority": "extra-high",
      "width": 24,
      "height": 41
    },
    "hand_open_picture": {
      "filename": "__base__/graphics/entity/stack-filter-inserter/stack-filter-inserter-hand-open.png",
      "priority": "extra-high",
      "width": 32,
      "height": 41
    },
    "hand_base_shadow": {
      "filename": "__base__/graphics/entity/burner-inserter/burner-inserter-hand-base-shadow.png",
      "priority": "extra-high",
      "width": 8,
      "height": 34
    },
    "hand_closed_shadow": {
      "filename": "__base__/graphics/entity/burner-inserter/burner-inserter-hand-closed-shadow.png",
      "priority": "extra-high",
      "width": 18,
      "height": 41
    },
    "hand_open_shadow": {
      "filename": "__base__/graphics/entity/burner-inserter/burner-inserter-hand-open-shadow.png",
      "priority": "extra-high",
      "width": 18,
      "height": 41
    },
    "platform_picture": {
      "sheet": {
        "filename": "__base__/graphics/entity/stack-filter-inserter/stack-filter-inserter-platform.png",
        "priority": "extra-high",
        "width": 46,
        "height": 46,
        "shift": [
          0.09375,
          0
        ]
      }
    }
  },
  {
    "type": "inserter",
    "name": "filter-inserter",
    "icon": "__base__/graphics/icons/filter-inserter.png",
    "flags": [
      "placeable-neutral",
      "placeable-player",
      "player-creation"
    ],
    "minable": {
      "hardness": 0.2,
      "mining_time": 0.5,
      "result": "filter-inserter"
    },
    "max_health": 40,
    "corpse": "small-remnants",
    "resistances": [
      {
        "type": "fire",
        "percent": 90
      }
    ],
    "vehicle_impact_sound": {
      "filename": "__base__/sound/car-metal-impact.ogg",
      "volume": 0.65
    },
    "working_sound": {
      "match_progress_to_activity": true,
      "sound": [
        {
          "filename": "__base__/sound/inserter-fast-1.ogg",
          "volume": 0.75
        },
        {
          "filename": "__base__/sound/inserter-fast-2.ogg",
          "volume": 0.75
        },
        {
          "filename": "__base__/sound/inserter-fast-3.ogg",
          "volume": 0.75
        },
        {
          "filename": "__base__/sound/inserter-fast-4.ogg",
          "volume": 0.75
        },
        {
          "filename": "__base__/sound/inserter-fast-5.ogg",
          "volume": 0.75
        }
      ]
    },
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.15,
        0.15
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.4,
        0.45
      ]
    ],
    "pickup_position": [
      0,
      null
    ],
    "insert_position": [
      0,
      1.2
    ],
    "energy_per_movement": 8000,
    "energy_per_rotation": 8000,
    "energy_source": {
      "type": "electric",
      "usage_priority": "secondary-input",
      "drain": "0.5kW"
    },
    "extension_speed": 0.07,
    "rotation_speed": 0.04,
    "fast_replaceable_group": "inserter",
    "filter_count": 5,
    "hand_base_picture": {
      "filename": "__base__/graphics/entity/filter-inserter/filter-inserter-hand-base.png",
      "priority": "extra-high",
      "width": 8,
      "height": 34
    },
    "hand_closed_picture": {
      "filename": "__base__/graphics/entity/filter-inserter/filter-inserter-hand-closed.png",
      "priority": "extra-high",
      "width": 18,
      "height": 41
    },
    "hand_open_picture": {
      "filename": "__base__/graphics/entity/filter-inserter/filter-inserter-hand-open.png",
      "priority": "extra-high",
      "width": 18,
      "height": 41
    },
    "hand_base_shadow": {
      "filename": "__base__/graphics/entity/burner-inserter/burner-inserter-hand-base-shadow.png",
      "priority": "extra-high",
      "width": 8,
      "height": 34
    },
    "hand_closed_shadow": {
      "filename": "__base__/graphics/entity/burner-inserter/burner-inserter-hand-closed-shadow.png",
      "priority": "extra-high",
      "width": 18,
      "height": 41
    },
    "hand_open_shadow": {
      "filename": "__base__/graphics/entity/burner-inserter/burner-inserter-hand-open-shadow.png",
      "priority": "extra-high",
      "width": 18,
      "height": 41
    },
    "platform_picture": {
      "sheet": {
        "filename": "__base__/graphics/entity/filter-inserter/filter-inserter-platform.png",
        "priority": "extra-high",
        "width": 46,
        "height": 46,
        "shift": [
          0.09375,
          0
        ]
      }
    }
  },
  {
    "type": "solar-panel",
    "name": "solar-panel",
    "icon": "__base__/graphics/icons/solar-panel.png",
    "flags": [
      "placeable-neutral",
      "player-creation"
    ],
    "minable": {
      "hardness": 0.2,
      "mining_time": 0.5,
      "result": "solar-panel"
    },
    "max_health": 100,
    "corpse": "big-remnants",
    "collision_box": [
      [
        null,
        null
      ],
      [
        1.4,
        1.4
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        1.5,
        1.5
      ]
    ],
    "energy_source": {
      "type": "electric",
      "usage_priority": "solar"
    },
    "picture": {
      "filename": "__base__/graphics/entity/solar-panel/solar-panel.png",
      "priority": "high",
      "width": 104,
      "height": 96
    },
    "production": "60kW"
  },
  {
    "type": "locomotive",
    "name": "diesel-locomotive",
    "icon": "__base__/graphics/icons/diesel-locomotive.png",
    "flags": [
      "placeable-neutral",
      "player-creation",
      "placeable-off-grid",
      "not-on-map"
    ],
    "minable": {
      "mining_time": 1,
      "result": "diesel-locomotive"
    },
    "mined_sound": {
      "filename": "__core__/sound/deconstruct-medium.ogg"
    },
    "max_health": 1000,
    "corpse": "medium-remnants",
    "dying_explosion": "medium-explosion",
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.6,
        2.6
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        1,
        3
      ]
    ],
    "drawing_box": [
      [
        null,
        null
      ],
      [
        1,
        3
      ]
    ],
    "weight": 2000,
    "max_speed": 1.2,
    "max_power": "600kW",
    "reversing_power_modifier": 0.6,
    "braking_force": 10,
    "friction_force": 0.5,
    "air_resistance": 0.0075,
    "connection_distance": 3,
    "joint_distance": 4,
    "energy_per_hit_point": 5,
    "resistances": [
      {
        "type": "fire",
        "decrease": 15,
        "percent": 50
      },
      {
        "type": "physical",
        "decrease": 15,
        "percent": 30
      },
      {
        "type": "impact",
        "decrease": 50,
        "percent": 60
      },
      {
        "type": "explosion",
        "decrease": 15,
        "percent": 30
      },
      {
        "type": "acid",
        "decrease": 10,
        "percent": 20
      }
    ],
    "energy_source": {
      "type": "burner",
      "effectivity": 1,
      "fuel_inventory_size": 3,
      "smoke": [
        {
          "name": "train-smoke",
          "deviation": [
            0.3,
            0.3
          ],
          "frequency": 100,
          "position": [
            0,
            0
          ],
          "starting_frame": 0,
          "starting_frame_deviation": 60,
          "height": 2,
          "height_deviation": 0.5,
          "starting_vertical_speed": 0.2,
          "starting_vertical_speed_deviation": 0.1
        }
      ]
    },
    "front_light": [
      {
        "type": "oriented",
        "minimum_darkness": 0.3,
        "picture": {
          "filename": "__core__/graphics/light-cone.png",
          "priority": "medium",
          "scale": 2,
          "width": 200,
          "height": 200
        },
        "shift": [
          null,
          null
        ],
        "size": 2,
        "intensity": 0.6
      },
      {
        "type": "oriented",
        "minimum_darkness": 0.3,
        "picture": {
          "filename": "__core__/graphics/light-cone.png",
          "priority": "medium",
          "scale": 2,
          "width": 200,
          "height": 200
        },
        "shift": [
          0.6,
          null
        ],
        "size": 2,
        "intensity": 0.6
      }
    ],
    "color": {
      "r": 0.92,
      "g": 0.07,
      "b": 0,
      "a": 0.5
    },
    "pictures": {
      "layers": [
        {
          "priority": "very-low",
          "width": 238,
          "height": 230,
          "direction_count": 256,
          "filenames": [
            "__base__/graphics/entity/diesel-locomotive/diesel-locomotive-01.png",
            "__base__/graphics/entity/diesel-locomotive/diesel-locomotive-02.png",
            "__base__/graphics/entity/diesel-locomotive/diesel-locomotive-03.png",
            "__base__/graphics/entity/diesel-locomotive/diesel-locomotive-04.png",
            "__base__/graphics/entity/diesel-locomotive/diesel-locomotive-05.png",
            "__base__/graphics/entity/diesel-locomotive/diesel-locomotive-06.png",
            "__base__/graphics/entity/diesel-locomotive/diesel-locomotive-07.png",
            "__base__/graphics/entity/diesel-locomotive/diesel-locomotive-08.png"
          ],
          "line_length": 4,
          "lines_per_file": 8,
          "shift": [
            0,
            null
          ]
        },
        {
          "priority": "very-low",
          "flags": [
            "mask"
          ],
          "width": 236,
          "height": 228,
          "direction_count": 256,
          "filenames": [
            "__base__/graphics/entity/diesel-locomotive/diesel-locomotive-mask-01.png",
            "__base__/graphics/entity/diesel-locomotive/diesel-locomotive-mask-02.png",
            "__base__/graphics/entity/diesel-locomotive/diesel-locomotive-mask-03.png",
            "__base__/graphics/entity/diesel-locomotive/diesel-locomotive-mask-04.png",
            "__base__/graphics/entity/diesel-locomotive/diesel-locomotive-mask-05.png",
            "__base__/graphics/entity/diesel-locomotive/diesel-locomotive-mask-06.png",
            "__base__/graphics/entity/diesel-locomotive/diesel-locomotive-mask-07.png",
            "__base__/graphics/entity/diesel-locomotive/diesel-locomotive-mask-08.png"
          ],
          "line_length": 4,
          "lines_per_file": 8,
          "shift": [
            0,
            null
          ],
          "apply_runtime_tint": true
        },
        {
          "priority": "very-low",
          "flags": [
            "compressed"
          ],
          "width": 253,
          "height": 212,
          "direction_count": 256,
          "draw_as_shadow": true,
          "filenames": [
            "__base__/graphics/entity/diesel-locomotive/diesel-locomotive-shadow-01.png",
            "__base__/graphics/entity/diesel-locomotive/diesel-locomotive-shadow-02.png",
            "__base__/graphics/entity/diesel-locomotive/diesel-locomotive-shadow-03.png",
            "__base__/graphics/entity/diesel-locomotive/diesel-locomotive-shadow-04.png",
            "__base__/graphics/entity/diesel-locomotive/diesel-locomotive-shadow-05.png",
            "__base__/graphics/entity/diesel-locomotive/diesel-locomotive-shadow-06.png",
            "__base__/graphics/entity/diesel-locomotive/diesel-locomotive-shadow-07.png",
            "__base__/graphics/entity/diesel-locomotive/diesel-locomotive-shadow-08.png"
          ],
          "line_length": 4,
          "lines_per_file": 8,
          "shift": [
            1,
            0.3
          ]
        }
      ]
    },
    "rail_category": "regular",
    "stop_trigger": [
      {
        "type": "create-smoke",
        "repeat_count": 125,
        "entity_name": "smoke-train-stop",
        "initial_height": 0,
        "speed": [
          null,
          0
        ],
        "speed_multiplier": 0.75,
        "speed_multiplier_deviation": 1.1,
        "offset_deviation": [
          [
            null,
            null
          ],
          [
            null,
            2.7
          ]
        ]
      },
      {
        "type": "create-smoke",
        "repeat_count": 125,
        "entity_name": "smoke-train-stop",
        "initial_height": 0,
        "speed": [
          0.03,
          0
        ],
        "speed_multiplier": 0.75,
        "speed_multiplier_deviation": 1.1,
        "offset_deviation": [
          [
            0.3,
            null
          ],
          [
            0.75,
            2.7
          ]
        ]
      },
      {
        "type": "play-sound",
        "sound": [
          {
            "filename": "__base__/sound/train-breaks.ogg",
            "volume": 0.6
          }
        ]
      }
    ],
    "tie_distance": 50,
    "vehicle_impact_sound": {
      "filename": "__base__/sound/car-metal-impact.ogg",
      "volume": 0.65
    },
    "working_sound": {
      "sound": {
        "filename": "__base__/sound/train-engine.ogg",
        "volume": 0.4
      },
      "match_speed_to_activity": true
    },
    "open_sound": {
      "filename": "__base__/sound/car-door-open.ogg",
      "volume": 0.7
    },
    "close_sound": {
      "filename": "__base__/sound/car-door-close.ogg",
      "volume": 0.7
    },
    "sound_minimum_speed": 0.5
  },
  {
    "type": "cargo-wagon",
    "name": "cargo-wagon",
    "icon": "__base__/graphics/icons/cargo-wagon.png",
    "flags": [
      "placeable-neutral",
      "player-creation",
      "placeable-off-grid",
      "not-on-map"
    ],
    "inventory_size": 40,
    "minable": {
      "mining_time": 1,
      "result": "cargo-wagon"
    },
    "mined_sound": {
      "filename": "__core__/sound/deconstruct-medium.ogg"
    },
    "max_health": 600,
    "corpse": "medium-remnants",
    "dying_explosion": "medium-explosion",
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.6,
        2.4
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        1,
        3.296875
      ]
    ],
    "weight": 1000,
    "max_speed": 1.5,
    "braking_force": 3,
    "friction_force": 0.5,
    "air_resistance": 0.01,
    "connection_distance": 3,
    "joint_distance": 4,
    "energy_per_hit_point": 5,
    "resistances": [
      {
        "type": "fire",
        "decrease": 15,
        "percent": 50
      },
      {
        "type": "physical",
        "decrease": 15,
        "percent": 30
      },
      {
        "type": "impact",
        "decrease": 50,
        "percent": 60
      },
      {
        "type": "explosion",
        "decrease": 15,
        "percent": 30
      },
      {
        "type": "acid",
        "decrease": 10,
        "percent": 20
      }
    ],
    "color": {
      "r": 0.43,
      "g": 0.23,
      "b": 0,
      "a": 0.5
    },
    "pictures": {
      "layers": [
        {
          "priority": "very-low",
          "width": 222,
          "height": 205,
          "back_equals_front": true,
          "direction_count": 128,
          "filenames": [
            "__base__/graphics/entity/cargo-wagon/cargo-wagon-1.png",
            "__base__/graphics/entity/cargo-wagon/cargo-wagon-2.png",
            "__base__/graphics/entity/cargo-wagon/cargo-wagon-3.png",
            "__base__/graphics/entity/cargo-wagon/cargo-wagon-4.png"
          ],
          "line_length": 4,
          "lines_per_file": 8,
          "shift": [
            0,
            null
          ]
        },
        {
          "flags": [
            "mask"
          ],
          "width": 196,
          "height": 174,
          "direction_count": 128,
          "back_equals_front": true,
          "apply_runtime_tint": true,
          "shift": [
            0,
            null
          ],
          "filenames": [
            "__base__/graphics/entity/cargo-wagon/cargo-wagon-mask-1.png",
            "__base__/graphics/entity/cargo-wagon/cargo-wagon-mask-2.png",
            "__base__/graphics/entity/cargo-wagon/cargo-wagon-mask-3.png"
          ],
          "line_length": 4,
          "lines_per_file": 11
        },
        {
          "flags": [
            "compressed"
          ],
          "width": 246,
          "height": 201,
          "back_equals_front": true,
          "draw_as_shadow": true,
          "direction_count": 128,
          "filenames": [
            "__base__/graphics/entity/cargo-wagon/cargo-wagon-shadow-1.png",
            "__base__/graphics/entity/cargo-wagon/cargo-wagon-shadow-2.png",
            "__base__/graphics/entity/cargo-wagon/cargo-wagon-shadow-3.png",
            "__base__/graphics/entity/cargo-wagon/cargo-wagon-shadow-4.png"
          ],
          "line_length": 4,
          "lines_per_file": 8,
          "shift": [
            0.8,
            null
          ]
        }
      ]
    },
    "horizontal_doors": {
      "layers": [
        {
          "filename": "__base__/graphics/entity/cargo-wagon/cargo-wagon-door-horizontal-end.png",
          "line_length": 1,
          "width": 220,
          "height": 33,
          "frame_count": 8,
          "shift": [
            0,
            null
          ]
        },
        {
          "filename": "__base__/graphics/entity/cargo-wagon/cargo-wagon-door-horizontal-side.png",
          "line_length": 1,
          "width": 186,
          "height": 38,
          "frame_count": 8,
          "shift": [
            0,
            null
          ]
        },
        {
          "filename": "__base__/graphics/entity/cargo-wagon/cargo-wagon-door-horizontal-side-mask.png",
          "width": 182,
          "height": 35,
          "line_length": 1,
          "frame_count": 8,
          "shift": [
            0,
            null
          ],
          "apply_runtime_tint": true
        },
        {
          "filename": "__base__/graphics/entity/cargo-wagon/cargo-wagon-door-horizontal-top.png",
          "line_length": 1,
          "width": 184,
          "height": 28,
          "frame_count": 8,
          "shift": [
            0.015625,
            null
          ]
        },
        {
          "filename": "__base__/graphics/entity/cargo-wagon/cargo-wagon-door-horizontal-top-mask.png",
          "width": 185,
          "height": 23,
          "frame_count": 8,
          "line_length": 1,
          "shift": [
            0.015625,
            null
          ],
          "apply_runtime_tint": true
        }
      ]
    },
    "vertical_doors": {
      "layers": [
        {
          "filename": "__base__/graphics/entity/cargo-wagon/cargo-wagon-door-vertical-end.png",
          "line_length": 8,
          "width": 30,
          "height": 202,
          "frame_count": 8,
          "shift": [
            0,
            null
          ]
        },
        {
          "filename": "__base__/graphics/entity/cargo-wagon/cargo-wagon-door-vertical-side.png",
          "line_length": 8,
          "width": 67,
          "height": 169,
          "frame_count": 8,
          "shift": [
            0.015625,
            null
          ]
        },
        {
          "filename": "__base__/graphics/entity/cargo-wagon/cargo-wagon-door-vertical-side-mask.png",
          "line_length": 8,
          "width": 56,
          "height": 163,
          "frame_count": 8,
          "shift": [
            0,
            null
          ],
          "apply_runtime_tint": true
        },
        {
          "filename": "__base__/graphics/entity/cargo-wagon/cargo-wagon-door-vertical-top.png",
          "line_length": 8,
          "width": 32,
          "height": 168,
          "frame_count": 8,
          "shift": [
            0,
            null
          ]
        },
        {
          "filename": "__base__/graphics/entity/cargo-wagon/cargo-wagon-door-vertical-top-mask.png",
          "line_length": 8,
          "width": 32,
          "height": 166,
          "frame_count": 8,
          "shift": [
            0,
            null
          ],
          "apply_runtime_tint": true
        }
      ]
    },
    "rail_category": "regular",
    "tie_distance": 50,
    "working_sound": {
      "sound": {
        "filename": "__base__/sound/train-wheels.ogg",
        "volume": 0.6
      },
      "match_volume_to_activity": true
    },
    "open_sound": {
      "filename": "__base__/sound/machine-open.ogg",
      "volume": 0.85
    },
    "close_sound": {
      "filename": "__base__/sound/machine-close.ogg",
      "volume": 0.75
    },
    "sound_minimum_speed": 0.5,
    "vehicle_impact_sound": {
      "filename": "__base__/sound/car-wood-impact.ogg",
      "volume": 1
    }
  },
  {
    "type": "gate",
    "name": "gate",
    "icon": "__base__/graphics/icons/gate.png",
    "flags": [
      "placeable-neutral",
      "placeable-player",
      "player-creation"
    ],
    "fast_replaceable_group": "wall",
    "minable": {
      "hardness": 0.2,
      "mining_time": 0.5,
      "result": "gate"
    },
    "max_health": 350,
    "corpse": "small-remnants",
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.29,
        0.29
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ],
    "opening_speed": 0.0666666,
    "activation_distance": 3,
    "timeout_to_close": 5,
    "resistances": [
      {
        "type": "physical",
        "decrease": 3,
        "percent": 20
      },
      {
        "type": "impact",
        "decrease": 45,
        "percent": 60
      },
      {
        "type": "explosion",
        "decrease": 10,
        "percent": 30
      },
      {
        "type": "fire",
        "percent": 100
      },
      {
        "type": "laser",
        "percent": 70
      }
    ],
    "vertical_animation": {
      "layers": [
        {
          "filename": "__base__/graphics/entity/gate/gate-vertical.png",
          "line_length": 8,
          "width": 21,
          "height": 60,
          "frame_count": 16,
          "shift": [
            0.015625,
            null
          ]
        },
        {
          "filename": "__base__/graphics/entity/gate/gate-vertical-shadow.png",
          "line_length": 8,
          "width": 41,
          "height": 50,
          "frame_count": 16,
          "shift": [
            0.328125,
            0.3
          ],
          "draw_as_shadow": true
        }
      ]
    },
    "horizontal_animation": {
      "layers": [
        {
          "filename": "__base__/graphics/entity/gate/gate-horizontal.png",
          "line_length": 8,
          "width": 32,
          "height": 36,
          "frame_count": 16,
          "shift": [
            0,
            null
          ]
        },
        {
          "filename": "__base__/graphics/entity/gate/gate-horizontal-shadow.png",
          "line_length": 8,
          "width": 62,
          "height": 28,
          "frame_count": 16,
          "shift": [
            0.4375,
            0.46875
          ],
          "draw_as_shadow": true
        }
      ]
    },
    "vertical_base": {
      "layers": [
        {
          "filename": "__base__/graphics/entity/gate/gate-base-vertical.png",
          "width": 32,
          "height": 32
        },
        {
          "filename": "__base__/graphics/entity/gate/gate-base-vertical-mask.png",
          "width": 32,
          "height": 32,
          "apply_runtime_tint": true
        }
      ]
    },
    "horizontal_rail_animation_left": {
      "layers": [
        {
          "filename": "__base__/graphics/entity/gate/gate-rail-horizontal-left.png",
          "line_length": 8,
          "width": 32,
          "height": 47,
          "frame_count": 16,
          "shift": [
            0,
            null
          ]
        },
        {
          "filename": "__base__/graphics/entity/gate/gate-rail-horizontal-shadow-left.png",
          "line_length": 8,
          "width": 73,
          "height": 27,
          "frame_count": 16,
          "shift": [
            0.078125,
            null
          ],
          "draw_as_shadow": true
        }
      ]
    },
    "horizontal_rail_animation_right": {
      "layers": [
        {
          "filename": "__base__/graphics/entity/gate/gate-rail-horizontal-right.png",
          "line_length": 8,
          "width": 32,
          "height": 43,
          "frame_count": 16,
          "shift": [
            0,
            null
          ]
        },
        {
          "filename": "__base__/graphics/entity/gate/gate-rail-horizontal-shadow-right.png",
          "line_length": 8,
          "width": 73,
          "height": 28,
          "frame_count": 16,
          "shift": [
            0.60938,
            null
          ],
          "draw_as_shadow": true
        }
      ]
    },
    "vertical_rail_animation_left": {
      "layers": [
        {
          "filename": "__base__/graphics/entity/gate/gate-rail-vertical-left.png",
          "line_length": 8,
          "width": 22,
          "height": 54,
          "frame_count": 16,
          "shift": [
            0,
            null
          ]
        },
        {
          "filename": "__base__/graphics/entity/gate/gate-rail-vertical-shadow-left.png",
          "line_length": 8,
          "width": 47,
          "height": 48,
          "frame_count": 16,
          "shift": [
            0.27,
            null
          ],
          "draw_as_shadow": true
        }
      ]
    },
    "vertical_rail_animation_right": {
      "layers": [
        {
          "filename": "__base__/graphics/entity/gate/gate-rail-vertical-right.png",
          "line_length": 8,
          "width": 22,
          "height": 55,
          "frame_count": 16,
          "shift": [
            0,
            null
          ]
        },
        {
          "filename": "__base__/graphics/entity/gate/gate-rail-vertical-shadow-right.png",
          "line_length": 8,
          "width": 47,
          "height": 47,
          "frame_count": 16,
          "shift": [
            0.27,
            null
          ],
          "draw_as_shadow": true
        }
      ]
    },
    "vertical_rail_base": {
      "filename": "__base__/graphics/entity/gate/gate-rail-base-vertical.png",
      "line_length": 8,
      "width": 64,
      "height": 64,
      "frame_count": 16,
      "shift": [
        0,
        0
      ]
    },
    "horizontal_rail_base": {
      "filename": "__base__/graphics/entity/gate/gate-rail-base-horizontal.png",
      "line_length": 8,
      "width": 64,
      "height": 45,
      "frame_count": 16,
      "shift": [
        0,
        null
      ]
    },
    "vertical_rail_base_mask": {
      "filename": "__base__/graphics/entity/gate/gate-rail-base-mask-vertical.png",
      "width": 63,
      "height": 39,
      "shift": [
        0.015625,
        null
      ],
      "apply_runtime_tint": true
    },
    "horizontal_rail_base_mask": {
      "filename": "__base__/graphics/entity/gate/gate-rail-base-mask-horizontal.png",
      "width": 53,
      "height": 45,
      "shift": [
        0.015625,
        null
      ],
      "apply_runtime_tint": true
    },
    "horizontal_base": {
      "layers": [
        {
          "filename": "__base__/graphics/entity/gate/gate-base-horizontal.png",
          "width": 32,
          "height": 23,
          "shift": [
            0,
            0.125
          ]
        },
        {
          "filename": "__base__/graphics/entity/gate/gate-base-horizontal-mask.png",
          "width": 32,
          "height": 23,
          "apply_runtime_tint": true,
          "shift": [
            0,
            0.125
          ]
        }
      ]
    },
    "wall_patch": {
      "north": {
        "layers": [
          {
            "filename": "__base__/graphics/entity/gate/wall-patch-north.png",
            "width": 22,
            "height": 35,
            "shift": [
              0,
              null
            ]
          },
          {
            "filename": "__base__/graphics/entity/gate/wall-patch-north-shadow.png",
            "width": 46,
            "height": 31,
            "shift": [
              0.3,
              null
            ],
            "draw_as_shadow": true
          }
        ]
      },
      "east": {
        "layers": [
          {
            "filename": "__base__/graphics/entity/gate/wall-patch-east.png",
            "width": 11,
            "height": 40,
            "shift": [
              null,
              null
            ]
          },
          {
            "filename": "__base__/graphics/entity/gate/wall-patch-east-shadow.png",
            "width": 38,
            "height": 32,
            "shift": [
              null,
              0.46875
            ],
            "draw_as_shadow": true
          }
        ]
      },
      "south": {
        "layers": [
          {
            "filename": "__base__/graphics/entity/gate/wall-patch-south.png",
            "width": 22,
            "height": 40,
            "shift": [
              0,
              null
            ]
          },
          {
            "filename": "__base__/graphics/entity/gate/wall-patch-south-shadow.png",
            "width": 48,
            "height": 25,
            "shift": [
              0.3,
              0.95
            ],
            "draw_as_shadow": true
          }
        ]
      },
      "west": {
        "layers": [
          {
            "filename": "__base__/graphics/entity/gate/wall-patch-west.png",
            "width": 11,
            "height": 40,
            "shift": [
              null,
              null
            ]
          },
          {
            "filename": "__base__/graphics/entity/gate/wall-patch-west-shadow.png",
            "width": 46,
            "height": 32,
            "shift": [
              null,
              0.46875
            ],
            "draw_as_shadow": true
          }
        ]
      }
    },
    "vehicle_impact_sound": {
      "filename": "__base__/sound/car-metal-impact.ogg",
      "volume": 0.65
    },
    "open_sound": {
      "variations": {
        "filename": "__base__/sound/gate1.ogg",
        "volume": 0.5
      },
      "aggregation": {
        "max_count": 1,
        "remove": true
      }
    },
    "close_sound": {
      "variations": {
        "filename": "__base__/sound/gate1.ogg",
        "volume": 0.5
      },
      "aggregation": {
        "max_count": 1,
        "remove": true
      }
    }
  },
  {
    "type": "player-port",
    "name": "player-port",
    "icon": "__base__/graphics/icons/player-port.png",
    "flags": [
      "placeable-neutral",
      "player-creation"
    ],
    "minable": {
      "mining_time": 1,
      "result": "player-port"
    },
    "max_health": 50,
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.9,
        0.9
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        1,
        1
      ]
    ],
    "animation": {
      "filename": "__base__/graphics/entity/player-port/player-port-animation.png",
      "width": 64,
      "height": 64,
      "frame_count": 2
    }
  },
  {
    "type": "straight-rail",
    "name": "straight-rail",
    "icon": "__base__/graphics/icons/rail.png",
    "flags": [
      "placeable-neutral",
      "player-creation",
      "building-direction-8-way"
    ],
    "minable": {
      "mining_time": 0.5,
      "result": "rail"
    },
    "max_health": 100,
    "corpse": "straight-rail-remnants",
    "resistances": [
      {
        "type": "fire",
        "percent": 100
      }
    ],
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.7,
        0.8
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.7,
        0.8
      ]
    ],
    "rail_category": "regular"
  },
  {
    "type": "curved-rail",
    "name": "curved-rail",
    "icon": "__base__/graphics/icons/curved-rail.png",
    "flags": [
      "placeable-neutral",
      "player-creation",
      "building-direction-8-way"
    ],
    "minable": {
      "mining_time": 0.5,
      "result": "rail",
      "count": 4
    },
    "max_health": 200,
    "corpse": "curved-rail-remnants",
    "resistances": [
      {
        "type": "fire",
        "percent": 100
      }
    ],
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.75,
        1.6
      ]
    ],
    "secondary_collision_box": [
      [
        null,
        null
      ],
      [
        0.65,
        2.43
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        1.7,
        0.8
      ]
    ],
    "rail_category": "regular",
    "placeable_by": {
      "item": "rail",
      "count": 4
    }
  },
  {
    "type": "land-mine",
    "name": "land-mine",
    "icon": "__base__/graphics/icons/land-mine.png",
    "flags": [
      "placeable-player",
      "placeable-enemy",
      "player-creation",
      "placeable-off-grid"
    ],
    "minable": {
      "mining_time": 1,
      "result": "land-mine"
    },
    "max_health": 15,
    "corpse": "small-remnants",
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.4,
        0.4
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ],
    "dying_explosion": "explosion-hit",
    "picture_safe": {
      "filename": "__base__/graphics/entity/land-mine/land-mine.png",
      "priority": "medium",
      "width": 32,
      "height": 32
    },
    "picture_set": {
      "filename": "__base__/graphics/entity/land-mine/land-mine-set.png",
      "priority": "medium",
      "width": 32,
      "height": 32
    },
    "trigger_radius": 2.5,
    "action": {
      "type": "direct",
      "action_delivery": {
        "type": "instant",
        "source_effects": [
          {
            "type": "nested-result",
            "affects_target": true,
            "action": {
              "type": "area",
              "perimeter": 6,
              "collision_mask": [
                "player-layer"
              ],
              "action_delivery": {
                "type": "instant",
                "target_effects": {
                  "type": "damage",
                  "damage": {
                    "amount": 40,
                    "type": "explosion"
                  }
                }
              }
            }
          },
          {
            "type": "create-entity",
            "entity_name": "explosion"
          },
          {
            "type": "damage",
            "damage": {
              "amount": 1000,
              "type": "explosion"
            }
          }
        ]
      }
    }
  },
  {
    "type": "train-stop",
    "name": "train-stop",
    "icon": "__base__/graphics/icons/train-stop.png",
    "flags": [
      "placeable-neutral",
      "player-creation",
      "filter-directions"
    ],
    "minable": {
      "mining_time": 1,
      "result": "train-stop"
    },
    "max_health": 150,
    "corpse": "medium-remnants",
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.9,
        0.9
      ]
    ],
    "drawing_boxes": {
      "north": [
        [
          null,
          null
        ],
        [
          0.8,
          1.25
        ]
      ],
      "east": [
        [
          null,
          null
        ],
        [
          1.625,
          0.5
        ]
      ],
      "south": [
        [
          null,
          null
        ],
        [
          2.75,
          0.4375
        ]
      ],
      "west": [
        [
          null,
          null
        ],
        [
          2.0625,
          2.75
        ]
      ]
    },
    "tile_width": 2,
    "tile_height": 2,
    "animation_ticks_per_frame": 20,
    "light1": {
      "light": {
        "intensity": 0.5,
        "size": 3
      },
      "picture": {
        "north": {
          "filename": "__base__/graphics/entity/train-stop/train-stop-north-light-1.png",
          "width": 9,
          "height": 8,
          "frame_count": 1,
          "shift": [
            null,
            null
          ]
        },
        "east": {
          "filename": "__base__/graphics/entity/train-stop/train-stop-east-light-1.png",
          "width": 6,
          "height": 9,
          "frame_count": 1,
          "shift": [
            null,
            null
          ]
        },
        "south": {
          "filename": "__base__/graphics/entity/train-stop/train-stop-south-light-1.png",
          "width": 9,
          "height": 7,
          "frame_count": 1,
          "shift": [
            2.20312,
            null
          ]
        },
        "west": {
          "filename": "__base__/graphics/entity/train-stop/train-stop-west-light-1.png",
          "width": 7,
          "height": 9,
          "frame_count": 1,
          "shift": [
            1.01562,
            0.578125
          ]
        }
      }
    },
    "light2": {
      "light": {
        "intensity": 0.5,
        "size": 3
      },
      "picture": {
        "north": {
          "filename": "__base__/graphics/entity/train-stop/train-stop-north-light-2.png",
          "width": 9,
          "height": 8,
          "frame_count": 1,
          "shift": [
            null,
            null
          ]
        },
        "east": {
          "filename": "__base__/graphics/entity/train-stop/train-stop-east-light-2.png",
          "width": 7,
          "height": 9,
          "frame_count": 1,
          "shift": [
            null,
            null
          ]
        },
        "south": {
          "filename": "__base__/graphics/entity/train-stop/train-stop-south-light-2.png",
          "width": 9,
          "height": 7,
          "frame_count": 1,
          "shift": [
            1.79688,
            null
          ]
        },
        "west": {
          "filename": "__base__/graphics/entity/train-stop/train-stop-west-light-2.png",
          "width": 7,
          "height": 9,
          "frame_count": 1,
          "shift": [
            1.01562,
            0.296875
          ]
        }
      }
    },
    "color": {
      "r": 0.95,
      "g": 0,
      "b": 0,
      "a": 0.5
    },
    "vehicle_impact_sound": {
      "filename": "__base__/sound/car-metal-impact.ogg",
      "volume": 0.65
    },
    "working_sound": {
      "sound": {
        "filename": "__base__/sound/train-stop.ogg",
        "volume": 0.8
      }
    },
    "circuit_wire_connection_points": [
      {
        "shadow": {
          "red": [
            null,
            1.21875
          ],
          "green": [
            null,
            1.21875
          ]
        },
        "wire": {
          "red": [
            null,
            1.09375
          ],
          "green": [
            null,
            1.09375
          ]
        }
      },
      {
        "shadow": {
          "red": [
            null,
            null
          ],
          "green": [
            null,
            null
          ]
        },
        "wire": {
          "red": [
            null,
            null
          ],
          "green": [
            null,
            null
          ]
        }
      },
      {
        "shadow": {
          "red": [
            0.78125,
            0.46875
          ],
          "green": [
            0.59375,
            0.46875
          ]
        },
        "wire": {
          "red": [
            0.65625,
            0.34375
          ],
          "green": [
            0.5,
            0.34375
          ]
        }
      },
      {
        "shadow": {
          "red": [
            null,
            1.28125
          ],
          "green": [
            null,
            1.15625
          ]
        },
        "wire": {
          "red": [
            null,
            1.15625
          ],
          "green": [
            null,
            1.03125
          ]
        }
      }
    ],
    "circuit_connector_sprites": [
      null,
      null,
      null,
      null
    ],
    "circuit_wire_max_distance": 7.5
  },
  {
    "type": "rail-signal",
    "name": "rail-signal",
    "icon": "__base__/graphics/icons/rail-signal.png",
    "flags": [
      "placeable-neutral",
      "player-creation",
      "building-direction-8-way",
      "filter-directions",
      "fast-replaceable-no-build-while-moving"
    ],
    "fast_replaceable_group": "rail-signal",
    "minable": {
      "mining_time": 0.5,
      "result": "rail-signal"
    },
    "max_health": 80,
    "corpse": "small-remnants",
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.2,
        0.2
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ],
    "animation": {
      "filename": "__base__/graphics/entity/rail-signal/rail-signal.png",
      "priority": "high",
      "width": 70,
      "height": 46,
      "frame_count": 3,
      "direction_count": 8
    },
    "green_light": {
      "intensity": 0.2,
      "size": 4,
      "color": {
        "g": 1
      }
    },
    "orange_light": {
      "intensity": 0.2,
      "size": 4,
      "color": {
        "r": 1,
        "g": 0.5
      }
    },
    "red_light": {
      "intensity": 0.2,
      "size": 4,
      "color": {
        "r": 1
      }
    },
    "circuit_wire_connection_points": [
      {
        "shadow": {
          "red": [
            0.609375,
            null
          ],
          "green": [
            0.765625,
            null
          ]
        },
        "wire": {
          "red": [
            0.5,
            null
          ],
          "green": [
            0.65625,
            null
          ]
        }
      },
      {
        "shadow": {
          "red": [
            0.8125,
            null
          ],
          "green": [
            0.9375,
            0.0625
          ]
        },
        "wire": {
          "red": [
            0.65625,
            null
          ],
          "green": [
            0.75,
            null
          ]
        }
      },
      {
        "shadow": {
          "red": [
            0.734375,
            0.453125
          ],
          "green": [
            0.734375,
            0.578125
          ]
        },
        "wire": {
          "red": [
            0.5625,
            0.34375
          ],
          "green": [
            0.5625,
            0.5
          ]
        }
      },
      {
        "shadow": {
          "red": [
            0.234375,
            0.484375
          ],
          "green": [
            0.109375,
            0.578125
          ]
        },
        "wire": {
          "red": [
            0.09375,
            0.34375
          ],
          "green": [
            null,
            0.4375
          ]
        }
      },
      {
        "shadow": {
          "red": [
            null,
            0.484375
          ],
          "green": [
            null,
            0.484375
          ]
        },
        "wire": {
          "red": [
            null,
            0.34375
          ],
          "green": [
            null,
            0.34375
          ]
        }
      },
      {
        "shadow": {
          "red": [
            null,
            0.140625
          ],
          "green": [
            null,
            0.046875
          ]
        },
        "wire": {
          "red": [
            null,
            0.0625
          ],
          "green": [
            null,
            null
          ]
        }
      },
      {
        "shadow": {
          "red": [
            null,
            null
          ],
          "green": [
            null,
            null
          ]
        },
        "wire": {
          "red": [
            null,
            null
          ],
          "green": [
            null,
            null
          ]
        }
      },
      {
        "shadow": {
          "red": [
            null,
            null
          ],
          "green": [
            0.078125,
            null
          ]
        },
        "wire": {
          "red": [
            null,
            null
          ],
          "green": [
            0,
            null
          ]
        }
      }
    ],
    "circuit_connector_sprites": [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ],
    "circuit_wire_max_distance": 7.5,
    "default_red_output_signal": "signal-red",
    "default_orange_output_signal": "signal-yellow",
    "default_green_output_signal": "signal-green"
  },
  {
    "type": "rail-chain-signal",
    "name": "rail-chain-signal",
    "icon": "__base__/graphics/icons/rail-chain-signal.png",
    "flags": [
      "placeable-neutral",
      "player-creation",
      "building-direction-8-way",
      "filter-directions",
      "fast-replaceable-no-build-while-moving"
    ],
    "fast_replaceable_group": "rail-signal",
    "minable": {
      "mining_time": 0.5,
      "result": "rail-chain-signal"
    },
    "max_health": 80,
    "corpse": "small-remnants",
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.2,
        0.2
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ],
    "animation": {
      "filename": "__base__/graphics/entity/rail-chain-signal/rail-chain-signal.png",
      "priority": "high",
      "line_length": 5,
      "width": 129,
      "height": 113,
      "frame_count": 5,
      "axially_symmetrical": false,
      "direction_count": 8,
      "shift": [
        0.421875,
        0.515625
      ]
    },
    "rail_piece": {
      "filename": "__base__/graphics/entity/rail-chain-signal/rail-chain-signal-metal.png",
      "line_length": 4,
      "width": 78,
      "height": 74,
      "frame_count": 4,
      "axially_symmetrical": false,
      "shift": [
        0.15625,
        0.25
      ]
    },
    "selection_box_offsets": [
      [
        0.125,
        null
      ],
      [
        0.0625,
        null
      ],
      [
        null,
        0.1875
      ],
      [
        null,
        null
      ],
      [
        null,
        null
      ],
      [
        0.15625,
        null
      ],
      [
        null,
        null
      ],
      [
        null,
        null
      ]
    ],
    "green_light": {
      "intensity": 0.3,
      "size": 4,
      "color": {
        "r": 0.592157,
        "g": 1,
        "b": 0.117647
      }
    },
    "orange_light": {
      "intensity": 0.3,
      "size": 4,
      "color": {
        "r": 0.815686,
        "g": 0.670588,
        "b": 0.431373
      }
    },
    "red_light": {
      "intensity": 0.3,
      "size": 4,
      "color": {
        "r": 0.784314,
        "g": 0.431373,
        "b": 0.431373
      }
    },
    "blue_light": {
      "intensity": 0.3,
      "size": 4,
      "color": {
        "r": 0.431373,
        "g": 0.694118,
        "b": 0.623529
      }
    }
  },
  {
    "type": "lab",
    "name": "lab",
    "icon": "__base__/graphics/icons/lab.png",
    "flags": [
      "placeable-player",
      "player-creation"
    ],
    "minable": {
      "mining_time": 1,
      "result": "lab"
    },
    "max_health": 150,
    "corpse": "big-remnants",
    "dying_explosion": "medium-explosion",
    "collision_box": [
      [
        null,
        null
      ],
      [
        1.2,
        1.2
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        1.5,
        1.5
      ]
    ],
    "light": {
      "intensity": 0.75,
      "size": 8
    },
    "on_animation": {
      "filename": "__base__/graphics/entity/lab/lab.png",
      "width": 113,
      "height": 91,
      "frame_count": 33,
      "line_length": 11,
      "shift": [
        0.2,
        0.15
      ]
    },
    "off_animation": {
      "filename": "__base__/graphics/entity/lab/lab.png",
      "width": 113,
      "height": 91,
      "frame_count": 1,
      "shift": [
        0.2,
        0.15
      ]
    },
    "working_sound": {
      "sound": {
        "filename": "__base__/sound/lab.ogg",
        "volume": 0.7
      },
      "apparent_volume": 1
    },
    "energy_source": {
      "type": "electric",
      "usage_priority": "secondary-input"
    },
    "energy_usage": "60kW",
    "researching_speed": 1,
    "inputs": [
      "science-pack-1",
      "science-pack-2",
      "science-pack-3",
      "alien-science-pack"
    ],
    "module_specification": {
      "module_slots": 2,
      "max_entity_info_module_icons_per_row": 3,
      "max_entity_info_module_icon_rows": 1,
      "module_info_icon_shift": [
        0,
        0.9
      ]
    }
  },
  {
    "type": "logistic-robot",
    "name": "logistic-robot",
    "icon": "__base__/graphics/icons/logistic-robot.png",
    "flags": [
      "placeable-player",
      "player-creation",
      "placeable-off-grid",
      "not-on-map"
    ],
    "minable": {
      "hardness": 0.1,
      "mining_time": 0.1,
      "result": "logistic-robot"
    },
    "resistances": [
      {
        "type": "fire",
        "percent": 85
      }
    ],
    "max_health": 100,
    "collision_box": [
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.5,
        null
      ]
    ],
    "max_payload_size": 1,
    "speed": 0.05,
    "transfer_distance": 0.5,
    "max_energy": "1.5MJ",
    "energy_per_tick": "0.05kJ",
    "speed_multiplier_when_out_of_energy": 0.2,
    "energy_per_move": "5kJ",
    "min_to_charge": 0.2,
    "max_to_charge": 0.95,
    "idle": {
      "filename": "__base__/graphics/entity/logistic-robot/logistic-robot.png",
      "priority": "high",
      "line_length": 16,
      "width": 41,
      "height": 42,
      "frame_count": 1,
      "shift": [
        0.015625,
        null
      ],
      "direction_count": 16,
      "y": 42
    },
    "idle_with_cargo": {
      "filename": "__base__/graphics/entity/logistic-robot/logistic-robot.png",
      "priority": "high",
      "line_length": 16,
      "width": 41,
      "height": 42,
      "frame_count": 1,
      "shift": [
        0.015625,
        null
      ],
      "direction_count": 16
    },
    "in_motion": {
      "filename": "__base__/graphics/entity/logistic-robot/logistic-robot.png",
      "priority": "high",
      "line_length": 16,
      "width": 41,
      "height": 42,
      "frame_count": 1,
      "shift": [
        0.015625,
        null
      ],
      "direction_count": 16,
      "y": 126
    },
    "in_motion_with_cargo": {
      "filename": "__base__/graphics/entity/logistic-robot/logistic-robot.png",
      "priority": "high",
      "line_length": 16,
      "width": 41,
      "height": 42,
      "frame_count": 1,
      "shift": [
        0.015625,
        null
      ],
      "direction_count": 16,
      "y": 84
    },
    "shadow_idle": {
      "filename": "__base__/graphics/entity/logistic-robot/logistic-robot-shadow.png",
      "priority": "high",
      "line_length": 16,
      "width": 59,
      "height": 23,
      "frame_count": 1,
      "shift": [
        0.96875,
        0.609375
      ],
      "direction_count": 16,
      "y": 23
    },
    "shadow_idle_with_cargo": {
      "filename": "__base__/graphics/entity/logistic-robot/logistic-robot-shadow.png",
      "priority": "high",
      "line_length": 16,
      "width": 59,
      "height": 23,
      "frame_count": 1,
      "shift": [
        0.96875,
        0.609375
      ],
      "direction_count": 16
    },
    "shadow_in_motion": {
      "filename": "__base__/graphics/entity/logistic-robot/logistic-robot-shadow.png",
      "priority": "high",
      "line_length": 16,
      "width": 59,
      "height": 23,
      "frame_count": 1,
      "shift": [
        0.96875,
        0.609375
      ],
      "direction_count": 16,
      "y": 23
    },
    "shadow_in_motion_with_cargo": {
      "filename": "__base__/graphics/entity/logistic-robot/logistic-robot-shadow.png",
      "priority": "high",
      "line_length": 16,
      "width": 59,
      "height": 23,
      "frame_count": 1,
      "shift": [
        0.96875,
        0.609375
      ],
      "direction_count": 16
    },
    "cargo_centered": [
      0,
      0.2
    ]
  },
  {
    "type": "construction-robot",
    "name": "construction-robot",
    "icon": "__base__/graphics/icons/construction-robot.png",
    "flags": [
      "placeable-player",
      "player-creation",
      "placeable-off-grid",
      "not-on-map"
    ],
    "minable": {
      "hardness": 0.1,
      "mining_time": 0.1,
      "result": "construction-robot"
    },
    "resistances": [
      {
        "type": "fire",
        "percent": 85
      }
    ],
    "max_health": 100,
    "collision_box": [
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.5,
        null
      ]
    ],
    "max_payload_size": 1,
    "speed": 0.06,
    "transfer_distance": 0.5,
    "max_energy": "1.5MJ",
    "energy_per_tick": "0.05kJ",
    "speed_multiplier_when_out_of_energy": 0.2,
    "energy_per_move": "5kJ",
    "min_to_charge": 0.2,
    "max_to_charge": 0.95,
    "working_light": {
      "intensity": 0.8,
      "size": 3
    },
    "idle": {
      "filename": "__base__/graphics/entity/construction-robot/construction-robot.png",
      "priority": "high",
      "line_length": 16,
      "width": 32,
      "height": 36,
      "frame_count": 1,
      "shift": [
        0,
        null
      ],
      "direction_count": 16
    },
    "in_motion": {
      "filename": "__base__/graphics/entity/construction-robot/construction-robot.png",
      "priority": "high",
      "line_length": 16,
      "width": 32,
      "height": 36,
      "frame_count": 1,
      "shift": [
        0,
        null
      ],
      "direction_count": 16,
      "y": 36
    },
    "shadow_idle": {
      "filename": "__base__/graphics/entity/construction-robot/construction-robot-shadow.png",
      "priority": "high",
      "line_length": 16,
      "width": 50,
      "height": 24,
      "frame_count": 1,
      "shift": [
        1.09375,
        0.59375
      ],
      "direction_count": 16
    },
    "shadow_in_motion": {
      "filename": "__base__/graphics/entity/construction-robot/construction-robot-shadow.png",
      "priority": "high",
      "line_length": 16,
      "width": 50,
      "height": 24,
      "frame_count": 1,
      "shift": [
        1.09375,
        0.59375
      ],
      "direction_count": 16
    },
    "working": {
      "filename": "__base__/graphics/entity/construction-robot/construction-robot-working.png",
      "priority": "high",
      "line_length": 2,
      "width": 28,
      "height": 36,
      "frame_count": 2,
      "shift": [
        0,
        null
      ],
      "direction_count": 16,
      "animation_speed": 0.3
    },
    "shadow_working": {
      "priority": "high",
      "width": 50,
      "height": 24,
      "frame_count": 2,
      "shift": [
        1.09375,
        0.59375
      ],
      "direction_count": 16
    },
    "smoke": {
      "filename": "__base__/graphics/entity/smoke-construction/smoke-01.png",
      "width": 39,
      "height": 32,
      "frame_count": 19,
      "line_length": 19,
      "shift": [
        0.078125,
        null
      ],
      "animation_speed": 0.3
    },
    "sparks": [
      {
        "filename": "__base__/graphics/entity/sparks/sparks-01.png",
        "width": 39,
        "height": 34,
        "frame_count": 19,
        "line_length": 19,
        "shift": [
          null,
          0.3125
        ],
        "tint": {
          "r": 1,
          "g": 0.9,
          "b": 0,
          "a": 1
        },
        "animation_speed": 0.3
      },
      {
        "filename": "__base__/graphics/entity/sparks/sparks-02.png",
        "width": 36,
        "height": 32,
        "frame_count": 19,
        "line_length": 19,
        "shift": [
          0.03125,
          0.125
        ],
        "tint": {
          "r": 1,
          "g": 0.9,
          "b": 0,
          "a": 1
        },
        "animation_speed": 0.3
      },
      {
        "filename": "__base__/graphics/entity/sparks/sparks-03.png",
        "width": 42,
        "height": 29,
        "frame_count": 19,
        "line_length": 19,
        "shift": [
          null,
          0.203125
        ],
        "tint": {
          "r": 1,
          "g": 0.9,
          "b": 0,
          "a": 1
        },
        "animation_speed": 0.3
      },
      {
        "filename": "__base__/graphics/entity/sparks/sparks-04.png",
        "width": 40,
        "height": 35,
        "frame_count": 19,
        "line_length": 19,
        "shift": [
          null,
          0.234375
        ],
        "tint": {
          "r": 1,
          "g": 0.9,
          "b": 0,
          "a": 1
        },
        "animation_speed": 0.3
      },
      {
        "filename": "__base__/graphics/entity/sparks/sparks-05.png",
        "width": 39,
        "height": 29,
        "frame_count": 19,
        "line_length": 19,
        "shift": [
          null,
          0.171875
        ],
        "tint": {
          "r": 1,
          "g": 0.9,
          "b": 0,
          "a": 1
        },
        "animation_speed": 0.3
      },
      {
        "filename": "__base__/graphics/entity/sparks/sparks-06.png",
        "width": 44,
        "height": 36,
        "frame_count": 19,
        "line_length": 19,
        "shift": [
          0.03125,
          0.3125
        ],
        "tint": {
          "r": 1,
          "g": 0.9,
          "b": 0,
          "a": 1
        },
        "animation_speed": 0.3
      }
    ],
    "cargo_centered": [
      0,
      0.2
    ],
    "construction_vector": [
      0.3,
      0.22
    ]
  },
  {
    "type": "logistic-container",
    "name": "logistic-chest-passive-provider",
    "icon": "__base__/graphics/icons/logistic-chest-passive-provider.png",
    "flags": [
      "placeable-player",
      "player-creation"
    ],
    "minable": {
      "hardness": 0.2,
      "mining_time": 0.5,
      "result": "logistic-chest-passive-provider"
    },
    "max_health": 150,
    "corpse": "small-remnants",
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.35,
        0.35
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ],
    "fast_replaceable_group": "container",
    "inventory_size": 48,
    "logistic_mode": "passive-provider",
    "open_sound": {
      "filename": "__base__/sound/metallic-chest-open.ogg",
      "volume": 0.65
    },
    "close_sound": {
      "filename": "__base__/sound/metallic-chest-close.ogg",
      "volume": 0.7
    },
    "vehicle_impact_sound": {
      "filename": "__base__/sound/car-metal-impact.ogg",
      "volume": 0.65
    },
    "picture": {
      "filename": "__base__/graphics/entity/logistic-chest/logistic-chest-passive-provider.png",
      "priority": "extra-high",
      "width": 38,
      "height": 32,
      "shift": [
        0.09375,
        0
      ]
    },
    "circuit_wire_connection_point": {
      "shadow": {
        "red": [
          0.734375,
          0.453125
        ],
        "green": [
          0.609375,
          0.515625
        ]
      },
      "wire": {
        "red": [
          0.40625,
          0.21875
        ],
        "green": [
          0.40625,
          0.375
        ]
      }
    },
    "circuit_wire_max_distance": 7.5
  },
  {
    "type": "logistic-container",
    "name": "logistic-chest-active-provider",
    "icon": "__base__/graphics/icons/logistic-chest-active-provider.png",
    "flags": [
      "placeable-player",
      "player-creation"
    ],
    "minable": {
      "hardness": 0.2,
      "mining_time": 0.5,
      "result": "logistic-chest-active-provider"
    },
    "max_health": 150,
    "corpse": "small-remnants",
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.35,
        0.35
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ],
    "fast_replaceable_group": "container",
    "inventory_size": 48,
    "logistic_mode": "active-provider",
    "open_sound": {
      "filename": "__base__/sound/metallic-chest-open.ogg",
      "volume": 0.65
    },
    "close_sound": {
      "filename": "__base__/sound/metallic-chest-close.ogg",
      "volume": 0.7
    },
    "vehicle_impact_sound": {
      "filename": "__base__/sound/car-metal-impact.ogg",
      "volume": 0.65
    },
    "picture": {
      "filename": "__base__/graphics/entity/logistic-chest/logistic-chest-active-provider.png",
      "priority": "extra-high",
      "width": 38,
      "height": 32,
      "shift": [
        0.09375,
        0
      ]
    },
    "circuit_wire_connection_point": {
      "shadow": {
        "red": [
          0.734375,
          0.453125
        ],
        "green": [
          0.609375,
          0.515625
        ]
      },
      "wire": {
        "red": [
          0.40625,
          0.21875
        ],
        "green": [
          0.40625,
          0.375
        ]
      }
    },
    "circuit_wire_max_distance": 7.5
  },
  {
    "type": "logistic-container",
    "name": "logistic-chest-storage",
    "icon": "__base__/graphics/icons/logistic-chest-storage.png",
    "flags": [
      "placeable-player",
      "player-creation"
    ],
    "minable": {
      "hardness": 0.2,
      "mining_time": 0.5,
      "result": "logistic-chest-storage"
    },
    "max_health": 150,
    "corpse": "small-remnants",
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.35,
        0.35
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ],
    "fast_replaceable_group": "container",
    "inventory_size": 48,
    "logistic_mode": "storage",
    "open_sound": {
      "filename": "__base__/sound/metallic-chest-open.ogg",
      "volume": 0.65
    },
    "close_sound": {
      "filename": "__base__/sound/metallic-chest-close.ogg",
      "volume": 0.7
    },
    "vehicle_impact_sound": {
      "filename": "__base__/sound/car-metal-impact.ogg",
      "volume": 0.65
    },
    "picture": {
      "filename": "__base__/graphics/entity/logistic-chest/logistic-chest-storage.png",
      "priority": "extra-high",
      "width": 38,
      "height": 32,
      "shift": [
        0.09375,
        0
      ]
    },
    "circuit_wire_connection_point": {
      "shadow": {
        "red": [
          0.734375,
          0.453125
        ],
        "green": [
          0.609375,
          0.515625
        ]
      },
      "wire": {
        "red": [
          0.40625,
          0.21875
        ],
        "green": [
          0.40625,
          0.375
        ]
      }
    },
    "circuit_wire_max_distance": 7.5
  },
  {
    "type": "logistic-container",
    "name": "logistic-chest-requester",
    "icon": "__base__/graphics/icons/logistic-chest-requester.png",
    "flags": [
      "placeable-player",
      "player-creation"
    ],
    "minable": {
      "hardness": 0.2,
      "mining_time": 0.5,
      "result": "logistic-chest-requester"
    },
    "max_health": 150,
    "corpse": "small-remnants",
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.35,
        0.35
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ],
    "fast_replaceable_group": "container",
    "inventory_size": 48,
    "logistic_mode": "requester",
    "open_sound": {
      "filename": "__base__/sound/metallic-chest-open.ogg",
      "volume": 0.65
    },
    "close_sound": {
      "filename": "__base__/sound/metallic-chest-close.ogg",
      "volume": 0.7
    },
    "vehicle_impact_sound": {
      "filename": "__base__/sound/car-metal-impact.ogg",
      "volume": 0.65
    },
    "picture": {
      "filename": "__base__/graphics/entity/logistic-chest/logistic-chest-requester.png",
      "priority": "extra-high",
      "width": 38,
      "height": 32,
      "shift": [
        0.09375,
        0
      ]
    },
    "circuit_wire_connection_point": {
      "shadow": {
        "red": [
          0.734375,
          0.453125
        ],
        "green": [
          0.609375,
          0.515625
        ]
      },
      "wire": {
        "red": [
          0.40625,
          0.21875
        ],
        "green": [
          0.40625,
          0.375
        ]
      }
    },
    "circuit_wire_max_distance": 7.5
  },
  {
    "type": "rocket-silo",
    "name": "rocket-silo",
    "icon": "__base__/graphics/icons/rocket-silo.png",
    "flags": [
      "placeable-player",
      "player-creation"
    ],
    "crafting_categories": [
      "rocket-building"
    ],
    "ingredient_count": 3,
    "rocket_parts_required": 100,
    "crafting_speed": 1,
    "module_specification": {
      "module_slots": 4,
      "module_info_icon_shift": [
        0,
        4.3
      ]
    },
    "fixed_recipe": "rocket-part",
    "allowed_effects": [
      "consumption",
      "speed",
      "productivity",
      "pollution"
    ],
    "minable": {
      "hardness": 0.2,
      "mining_time": 5,
      "result": "rocket-silo"
    },
    "max_health": 5000,
    "corpse": "big-remnants",
    "dying_explosion": "medium-explosion",
    "collision_box": [
      [
        null,
        null
      ],
      [
        4.2,
        4.7
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        4.5,
        5
      ]
    ],
    "vehicle_impact_sound": {
      "filename": "__base__/sound/car-metal-impact.ogg",
      "volume": 0.65
    },
    "energy_source": {
      "type": "electric",
      "usage_priority": "primary-input"
    },
    "energy_usage": "250kW",
    "idle_energy_usage": "10KW",
    "lamp_energy_usage": "10KW",
    "active_energy_usage": "3990KW",
    "rocket_entity": "rocket-silo-rocket",
    "times_to_blink": 3,
    "base_light": [
      {
        "type": "oriented",
        "picture": {
          "filename": "__core__/graphics/light-cone.png",
          "priority": "medium",
          "scale": 2,
          "width": 200,
          "height": 200
        },
        "shift": [
          0.25,
          1.25
        ],
        "size": 1,
        "intensity": 1,
        "rotation_shift": 0.6
      },
      {
        "type": "oriented",
        "picture": {
          "filename": "__core__/graphics/light-cone.png",
          "priority": "medium",
          "scale": 2,
          "width": 200,
          "height": 200
        },
        "shift": [
          null,
          1
        ],
        "size": 1,
        "intensity": 1,
        "rotation_shift": 0.5
      }
    ],
    "base_engine_light": {
      "intensity": 1,
      "size": 25,
      "shift": [
        0,
        1.5
      ]
    },
    "shadow_sprite": {
      "filename": "__base__/graphics/entity/rocket-silo/00-shadow/00-silo-shadow.png",
      "priority": "medium",
      "width": 447,
      "height": 351,
      "draw_as_shadow": true,
      "shift": [
        1.5,
        0.5
      ]
    },
    "satellite_shadow_animation": {
      "filename": "__base__/graphics/entity/rocket-silo/00-shadow/00-satellite-shadow.png",
      "priority": "medium",
      "width": 44,
      "height": 22,
      "frame_count": 12,
      "line_length": 4,
      "animation_speed": 0.25,
      "draw_as_shadow": true,
      "shift": [
        7.875,
        null
      ]
    },
    "hole_sprite": {
      "filename": "__base__/graphics/entity/rocket-silo/01-hole/01-hole.png",
      "width": 224,
      "height": 128,
      "shift": [
        0,
        2
      ]
    },
    "hole_light_sprite": {
      "filename": "__base__/graphics/entity/rocket-silo/01-hole/01-hole-light.png",
      "width": 224,
      "height": 128,
      "shift": [
        0,
        2
      ]
    },
    "rocket_shadow_overlay_sprite": {
      "filename": "__base__/graphics/entity/rocket-silo/03-12-rocket-over/03-rocket-over-shadow-over-rocket.png",
      "width": 224,
      "height": 128,
      "shift": [
        0,
        2
      ]
    },
    "rocket_glow_overlay_sprite": {
      "filename": "__base__/graphics/entity/rocket-silo/03-12-rocket-over/03-rocket-over-glow.png",
      "blend_mode": "additive",
      "width": 224,
      "height": 128,
      "shift": [
        0,
        2
      ]
    },
    "door_back_sprite": {
      "filename": "__base__/graphics/entity/rocket-silo/04-05-doors/04-door-back.png",
      "width": 192,
      "height": 108,
      "shift": [
        0,
        1.53125
      ]
    },
    "door_back_open_offset": [
      1.75,
      null
    ],
    "door_front_sprite": {
      "filename": "__base__/graphics/entity/rocket-silo/04-05-doors/05-door-front.png",
      "width": 192,
      "height": 112,
      "shift": [
        0,
        2.0625
      ]
    },
    "door_front_open_offset": [
      null,
      1.75
    ],
    "base_day_sprite": {
      "filename": "__base__/graphics/entity/rocket-silo/06-silo-base/06-silo-base-day.png",
      "width": 352,
      "height": 384,
      "shift": [
        0,
        0
      ]
    },
    "base_night_sprite": {
      "filename": "__base__/graphics/entity/rocket-silo/06-silo-base/06-silo-base-night.png",
      "width": 352,
      "height": 384,
      "shift": [
        0,
        0
      ]
    },
    "red_lights_back_sprites": {
      "layers": [
        {
          "filename": "__base__/graphics/entity/rocket-silo/07-red-lights-back/red-light.png",
          "width": 32,
          "height": 32,
          "shift": [
            1.34375,
            0.28125
          ]
        },
        {
          "filename": "__base__/graphics/entity/rocket-silo/07-red-lights-back/red-light.png",
          "width": 32,
          "height": 32,
          "shift": [
            2.3125,
            0.9375
          ]
        },
        {
          "filename": "__base__/graphics/entity/rocket-silo/07-red-lights-back/red-light.png",
          "width": 32,
          "height": 32,
          "shift": [
            2.65625,
            1.90625
          ]
        },
        {
          "filename": "__base__/graphics/entity/rocket-silo/07-red-lights-back/red-light.png",
          "width": 32,
          "height": 32,
          "shift": [
            null,
            1.90625
          ]
        },
        {
          "filename": "__base__/graphics/entity/rocket-silo/07-red-lights-back/red-light.png",
          "width": 32,
          "height": 32,
          "shift": [
            null,
            0.9375
          ]
        },
        {
          "filename": "__base__/graphics/entity/rocket-silo/07-red-lights-back/red-light.png",
          "width": 32,
          "height": 32,
          "shift": [
            null,
            0.28125
          ]
        },
        {
          "filename": "__base__/graphics/entity/rocket-silo/07-red-lights-back/red-light.png",
          "width": 32,
          "height": 32,
          "shift": [
            0,
            0
          ]
        }
      ]
    },
    "red_lights_front_sprites": {
      "layers": [
        {
          "filename": "__base__/graphics/entity/rocket-silo/07-red-lights-back/red-light.png",
          "width": 32,
          "height": 32,
          "shift": [
            2.3125,
            2.8125
          ]
        },
        {
          "filename": "__base__/graphics/entity/rocket-silo/07-red-lights-back/red-light.png",
          "width": 32,
          "height": 32,
          "shift": [
            1.34375,
            3.40625
          ]
        },
        {
          "filename": "__base__/graphics/entity/rocket-silo/07-red-lights-back/red-light.png",
          "width": 32,
          "height": 32,
          "shift": [
            0,
            3.75
          ]
        },
        {
          "filename": "__base__/graphics/entity/rocket-silo/07-red-lights-back/red-light.png",
          "width": 32,
          "height": 32,
          "shift": [
            null,
            3.40625
          ]
        },
        {
          "filename": "__base__/graphics/entity/rocket-silo/07-red-lights-back/red-light.png",
          "width": 32,
          "height": 32,
          "shift": [
            null,
            2.8125
          ]
        }
      ]
    },
    "satellite_animation": {
      "filename": "__base__/graphics/entity/rocket-silo/08-arms-back-satellite-animation/satellite.png",
      "priority": "medium",
      "width": 27,
      "height": 28,
      "frame_count": 12,
      "line_length": 4,
      "animation_speed": 0.25,
      "shift": [
        3.3125,
        null
      ]
    },
    "arm_01_back_animation": {
      "filename": "__base__/graphics/entity/rocket-silo/08-arms-back-satellite-animation/arm-01-back.png",
      "priority": "medium",
      "width": 54,
      "height": 50,
      "frame_count": 12,
      "line_length": 4,
      "animation_speed": 0.2,
      "shift": [
        null,
        null
      ]
    },
    "arm_02_right_animation": {
      "filename": "__base__/graphics/entity/rocket-silo/08-arms-back-satellite-animation/arm-02-right.png",
      "priority": "medium",
      "width": 81,
      "height": 43,
      "frame_count": 12,
      "line_length": 4,
      "animation_speed": 0.2,
      "shift": [
        2.71875,
        0.96875
      ]
    },
    "arm_03_front_animation": {
      "filename": "__base__/graphics/entity/rocket-silo/13-arm-front-red-lights-front/arm-03-front.png",
      "priority": "medium",
      "width": 54,
      "height": 70,
      "frame_count": 12,
      "line_length": 4,
      "animation_speed": 0.2,
      "shift": [
        null,
        2.4375
      ]
    },
    "base_front_sprite": {
      "filename": "__base__/graphics/entity/rocket-silo/14-silo-front/14-silo-front.png",
      "width": 352,
      "height": 96,
      "shift": [
        0,
        3.5
      ]
    },
    "silo_fade_out_start_distance": 8,
    "silo_fade_out_end_distance": 15,
    "alarm_trigger": [
      {
        "type": "play-sound",
        "sound": [
          {
            "filename": "__base__/sound/silo-alarm.ogg",
            "volume": 1.5
          }
        ]
      }
    ],
    "clamps_on_trigger": [
      {
        "type": "play-sound",
        "sound": [
          {
            "filename": "__base__/sound/silo-clamps-on.ogg",
            "volume": 1.5
          }
        ]
      }
    ],
    "clamps_off_trigger": [
      {
        "type": "play-sound",
        "sound": [
          {
            "filename": "__base__/sound/silo-clamps-off.ogg",
            "volume": 1.5
          }
        ]
      }
    ],
    "doors_trigger": [
      {
        "type": "play-sound",
        "sound": [
          {
            "filename": "__base__/sound/silo-doors.ogg",
            "volume": 1.5
          }
        ]
      }
    ],
    "raise_rocket_trigger": [
      {
        "type": "play-sound",
        "sound": [
          {
            "filename": "__base__/sound/silo-raise-rocket.ogg",
            "volume": 1.5
          }
        ]
      }
    ]
  },
  {
    "type": "rocket-silo-rocket",
    "name": "rocket-silo-rocket",
    "flags": [
      "not-on-map"
    ],
    "collision_mask": [
      "not-colliding-with-itself"
    ],
    "collision_box": [
      [
        null,
        null
      ],
      [
        2,
        4
      ]
    ],
    "selection_box": [
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ],
    "dying_explosion": "massive-explosion",
    "shadow_slave_entity": "rocket-silo-rocket-shadow",
    "inventory_size": 1,
    "flying_acceleration": 0.01,
    "glow_light": {
      "intensity": 1,
      "size": 30,
      "shift": [
        0,
        1.5
      ]
    },
    "rocket_sprite": {
      "filename": "__base__/graphics/entity/rocket-silo/02-11-rocket/02-rocket.png",
      "width": 192,
      "height": 288,
      "shift": [
        0,
        5.5
      ]
    },
    "rocket_shadow_sprite": {
      "filename": "__base__/graphics/entity/rocket-silo/09-rocket-shadow/09-rocket-shadow.png",
      "priority": "medium",
      "width": 384,
      "height": 128,
      "draw_as_shadow": true,
      "shift": [
        null,
        2
      ]
    },
    "rocket_glare_overlay_sprite": {
      "filename": "__base__/graphics/entity/rocket-silo/03-12-rocket-over/03-rocket-over-glare.png",
      "blend_mode": "additive",
      "width": 509,
      "height": 509,
      "shift": [
        0,
        9
      ]
    },
    "rocket_smoke_top1_animation": {
      "filename": "__base__/graphics/entity/rocket-silo/03-12-rocket-over/rocket-top-smoke.png",
      "priority": "medium",
      "tint": {
        "r": 0.8,
        "g": 0.8,
        "b": 1,
        "a": 0.8
      },
      "width": 47,
      "height": 149,
      "frame_count": 24,
      "line_length": 8,
      "animation_speed": 0.5,
      "scale": 1.5,
      "shift": [
        null,
        7.34375
      ]
    },
    "rocket_smoke_top2_animation": {
      "filename": "__base__/graphics/entity/rocket-silo/03-12-rocket-over/rocket-top-smoke.png",
      "priority": "medium",
      "tint": {
        "r": 0.8,
        "g": 0.8,
        "b": 1,
        "a": 0.8
      },
      "width": 47,
      "height": 149,
      "frame_count": 24,
      "line_length": 8,
      "animation_speed": 0.5,
      "scale": 1.5,
      "shift": [
        0.46875,
        8.28125
      ]
    },
    "rocket_smoke_top3_animation": {
      "filename": "__base__/graphics/entity/rocket-silo/03-12-rocket-over/rocket-top-smoke.png",
      "priority": "medium",
      "tint": {
        "r": 0.8,
        "g": 0.8,
        "b": 1,
        "a": 0.8
      },
      "width": 47,
      "height": 149,
      "frame_count": 24,
      "line_length": 8,
      "animation_speed": 0.5,
      "scale": 1.5,
      "shift": [
        1.28125,
        7.90625
      ]
    },
    "rocket_smoke_bottom1_animation": {
      "filename": "__base__/graphics/entity/rocket-silo/03-12-rocket-over/rocket-top-smoke.png",
      "priority": "medium",
      "tint": {
        "r": 0.8,
        "g": 0.8,
        "b": 1,
        "a": 0.7
      },
      "width": 47,
      "height": 149,
      "frame_count": 24,
      "line_length": 8,
      "animation_speed": 0.5,
      "scale": 1.5,
      "shift": [
        null,
        6.71875
      ]
    },
    "rocket_smoke_bottom2_animation": {
      "filename": "__base__/graphics/entity/rocket-silo/03-12-rocket-over/rocket-top-smoke.png",
      "priority": "medium",
      "tint": {
        "r": 0.8,
        "g": 0.8,
        "b": 1,
        "a": 0.7
      },
      "width": 47,
      "height": 149,
      "frame_count": 24,
      "line_length": 8,
      "animation_speed": 0.5,
      "scale": 1.5,
      "shift": [
        1.65625,
        6.71875
      ]
    },
    "rocket_flame_animation": {
      "filename": "__base__/graphics/entity/rocket-silo/10-rocket-under/jet-flame.png",
      "priority": "medium",
      "blend_mode": "additive",
      "width": 88,
      "height": 132,
      "frame_count": 8,
      "line_length": 8,
      "animation_speed": 0.5,
      "scale": 0.93,
      "shift": [
        0.04,
        10
      ]
    },
    "rocket_flame_left_animation": {
      "filename": "__base__/graphics/entity/rocket-silo/10-rocket-under/jet-flame.png",
      "priority": "medium",
      "blend_mode": "additive",
      "width": 88,
      "height": 132,
      "frame_count": 8,
      "line_length": 8,
      "animation_speed": 0.5,
      "scale": 0.345,
      "shift": [
        null,
        8.6
      ]
    },
    "rocket_flame_left_rotation": 0.0611,
    "rocket_flame_right_animation": {
      "filename": "__base__/graphics/entity/rocket-silo/10-rocket-under/jet-flame.png",
      "priority": "medium",
      "blend_mode": "additive",
      "width": 88,
      "height": 132,
      "frame_count": 8,
      "line_length": 8,
      "animation_speed": 0.5,
      "scale": 0.368,
      "shift": [
        1.25,
        8.875
      ]
    },
    "rocket_flame_right_rotation": 0.952,
    "rocket_rise_offset": [
      0,
      null
    ],
    "rocket_launch_offset": [
      0,
      null
    ],
    "rocket_render_layer_switch_distance": 6.5,
    "full_render_layer_switch_distance": 8,
    "effects_fade_in_start_distance": 4.5,
    "effects_fade_in_end_distance": 8,
    "shadow_fade_out_start_ratio": 0.25,
    "shadow_fade_out_end_ratio": 0.75,
    "rocket_visible_distance_from_center": 3.75,
    "flying_trigger": [
      {
        "type": "play-sound",
        "sound": [
          {
            "filename": "__base__/sound/silo-rocket.ogg",
            "volume": 1.8
          }
        ]
      }
    ]
  },
  {
    "type": "rocket-silo-rocket-shadow",
    "name": "rocket-silo-rocket-shadow",
    "flags": [
      "not-on-map"
    ],
    "collision_mask": [
      "not-colliding-with-itself"
    ],
    "collision_box": [
      [
        0,
        0
      ],
      [
        10,
        3.5
      ]
    ],
    "selection_box": [
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ]
  },
  {
    "type": "roboport",
    "name": "roboport",
    "icon": "__base__/graphics/icons/roboport.png",
    "flags": [
      "placeable-player",
      "player-creation"
    ],
    "minable": {
      "hardness": 0.2,
      "mining_time": 0.5,
      "result": "roboport"
    },
    "max_health": 500,
    "corpse": "big-remnants",
    "collision_box": [
      [
        null,
        null
      ],
      [
        1.7,
        1.7
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        2,
        2
      ]
    ],
    "dying_explosion": "medium-explosion",
    "energy_source": {
      "type": "electric",
      "usage_priority": "secondary-input",
      "input_flow_limit": "5MW",
      "buffer_capacity": "100MJ"
    },
    "recharge_minimum": "40MJ",
    "energy_usage": "50kW",
    "charging_energy": "1000kW",
    "logistics_radius": 25,
    "construction_radius": 50,
    "charge_approach_distance": 5,
    "robot_slots_count": 7,
    "material_slots_count": 7,
    "stationing_offset": [
      0,
      0
    ],
    "charging_offsets": [
      [
        null,
        null
      ],
      [
        1.5,
        null
      ],
      [
        1.5,
        1.5
      ],
      [
        null,
        1.5
      ]
    ],
    "base": {
      "filename": "__base__/graphics/entity/roboport/roboport-base.png",
      "width": 143,
      "height": 135,
      "shift": [
        0.5,
        0.25
      ]
    },
    "base_patch": {
      "filename": "__base__/graphics/entity/roboport/roboport-base-patch.png",
      "priority": "medium",
      "width": 69,
      "height": 50,
      "frame_count": 1,
      "shift": [
        0.03125,
        0.203125
      ]
    },
    "base_animation": {
      "filename": "__base__/graphics/entity/roboport/roboport-base-animation.png",
      "priority": "medium",
      "width": 42,
      "height": 31,
      "frame_count": 8,
      "animation_speed": 0.5,
      "shift": [
        null,
        null
      ]
    },
    "door_animation_up": {
      "filename": "__base__/graphics/entity/roboport/roboport-door-up.png",
      "priority": "medium",
      "width": 52,
      "height": 20,
      "frame_count": 16,
      "shift": [
        0.015625,
        null
      ]
    },
    "door_animation_down": {
      "filename": "__base__/graphics/entity/roboport/roboport-door-down.png",
      "priority": "medium",
      "width": 52,
      "height": 22,
      "frame_count": 16,
      "shift": [
        0.015625,
        null
      ]
    },
    "recharging_animation": {
      "filename": "__base__/graphics/entity/roboport/roboport-recharging.png",
      "priority": "high",
      "width": 37,
      "height": 35,
      "frame_count": 16,
      "scale": 1.5,
      "animation_speed": 0.5
    },
    "vehicle_impact_sound": {
      "filename": "__base__/sound/car-metal-impact.ogg",
      "volume": 0.65
    },
    "working_sound": {
      "sound": {
        "filename": "__base__/sound/roboport-working.ogg",
        "volume": 0.6
      },
      "max_sounds_per_type": 3,
      "audible_distance_modifier": 0.5
    },
    "recharging_light": {
      "intensity": 0.4,
      "size": 5
    },
    "request_to_open_door_timeout": 15,
    "draw_logistic_radius_visualization": true,
    "draw_construction_radius_visualization": true,
    "open_door_trigger_effect": [
      {
        "type": "play-sound",
        "sound": {
          "filename": "__base__/sound/roboport-door.ogg",
          "volume": 1.2
        }
      }
    ],
    "close_door_trigger_effect": [
      {
        "type": "play-sound",
        "sound": {
          "filename": "__base__/sound/roboport-door.ogg",
          "volume": 0.75
        }
      }
    ],
    "circuit_wire_connection_point": {
      "shadow": {
        "red": [
          1.17188,
          1.98438
        ],
        "green": [
          1.04688,
          2.04688
        ]
      },
      "wire": {
        "red": [
          0.78125,
          1.375
        ],
        "green": [
          0.78125,
          1.53125
        ]
      }
    },
    "circuit_wire_max_distance": 7.5,
    "default_available_logistic_output_signal": "signal-X",
    "default_total_logistic_output_signal": "signal-Y",
    "default_available_construction_output_signal": "signal-Z",
    "default_total_construction_output_signal": "signal-T"
  },
  {
    "type": "storage-tank",
    "name": "storage-tank",
    "icon": "__base__/graphics/icons/storage-tank.png",
    "flags": [
      "placeable-player",
      "player-creation"
    ],
    "minable": {
      "hardness": 0.2,
      "mining_time": 3,
      "result": "storage-tank"
    },
    "max_health": 500,
    "corpse": "medium-remnants",
    "collision_box": [
      [
        null,
        null
      ],
      [
        1.3,
        1.3
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        1.5,
        1.5
      ]
    ],
    "fluid_box": {
      "base_area": 250,
      "pipe_connections": [
        {
          "position": [
            null,
            null
          ]
        },
        {
          "position": [
            2,
            1
          ]
        },
        {
          "position": [
            1,
            2
          ]
        },
        {
          "position": [
            null,
            null
          ]
        }
      ]
    },
    "window_bounding_box": [
      [
        null,
        0.6875
      ],
      [
        0.1875,
        1.1875
      ]
    ],
    "pictures": {
      "picture": {
        "sheet": {
          "filename": "__base__/graphics/entity/storage-tank/storage-tank.png",
          "priority": "extra-high",
          "frames": 2,
          "width": 140,
          "height": 115,
          "shift": [
            0.6875,
            0.109375
          ]
        }
      },
      "fluid_background": {
        "filename": "__base__/graphics/entity/storage-tank/fluid-background.png",
        "priority": "extra-high",
        "width": 32,
        "height": 15
      },
      "window_background": {
        "filename": "__base__/graphics/entity/storage-tank/window-background.png",
        "priority": "extra-high",
        "width": 17,
        "height": 24
      },
      "flow_sprite": {
        "filename": "__base__/graphics/entity/pipe/fluid-flow-low-temperature.png",
        "priority": "extra-high",
        "width": 160,
        "height": 20
      }
    },
    "flow_length_in_ticks": 360,
    "vehicle_impact_sound": {
      "filename": "__base__/sound/car-metal-impact.ogg",
      "volume": 0.65
    },
    "working_sound": {
      "sound": {
        "filename": "__base__/sound/storage-tank.ogg",
        "volume": 0.8
      },
      "apparent_volume": 1.5,
      "max_sounds_per_type": 3
    },
    "circuit_wire_connection_points": [
      {
        "shadow": {
          "red": [
            2.35938,
            0.890625
          ],
          "green": [
            2.29688,
            0.953125
          ]
        },
        "wire": {
          "red": [
            null,
            null
          ],
          "green": [
            null,
            null
          ]
        }
      },
      {
        "shadow": {
          "red": [
            2.35938,
            0.890625
          ],
          "green": [
            2.29688,
            0.953125
          ]
        },
        "wire": {
          "red": [
            0.46875,
            null
          ],
          "green": [
            0.375,
            null
          ]
        }
      },
      {
        "shadow": {
          "red": [
            2.35938,
            0.890625
          ],
          "green": [
            2.29688,
            0.953125
          ]
        },
        "wire": {
          "red": [
            null,
            null
          ],
          "green": [
            null,
            null
          ]
        }
      },
      {
        "shadow": {
          "red": [
            2.35938,
            0.890625
          ],
          "green": [
            2.29688,
            0.953125
          ]
        },
        "wire": {
          "red": [
            0.46875,
            null
          ],
          "green": [
            0.375,
            null
          ]
        }
      }
    ],
    "circuit_connector_sprites": [
      null,
      null,
      null,
      null
    ],
    "circuit_wire_max_distance": 7.5
  },
  {
    "type": "pump",
    "name": "small-pump",
    "icon": "__base__/graphics/icons/small-pump.png",
    "flags": [
      "placeable-neutral",
      "player-creation"
    ],
    "minable": {
      "mining_time": 1,
      "result": "small-pump"
    },
    "max_health": 80,
    "fast_replaceable_group": "pipe",
    "corpse": "small-remnants",
    "resistances": [
      {
        "type": "fire",
        "percent": 70
      }
    ],
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.29,
        0.29
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ],
    "fluid_box": {
      "base_area": 1,
      "pipe_connections": [
        {
          "position": [
            0,
            null
          ],
          "type": "output"
        },
        {
          "position": [
            0,
            1
          ],
          "type": "input"
        }
      ]
    },
    "energy_source": {
      "type": "electric",
      "usage_priority": "secondary-input"
    },
    "energy_usage": "30kW",
    "pumping_speed": 0.5,
    "vehicle_impact_sound": {
      "filename": "__base__/sound/car-metal-impact.ogg",
      "volume": 0.65
    },
    "animations": {
      "north": {
        "filename": "__base__/graphics/entity/small-pump/small-pump-up.png",
        "width": 46,
        "height": 56,
        "frame_count": 8,
        "shift": [
          0.09375,
          0.03125
        ],
        "animation_speed": 0.5
      },
      "east": {
        "filename": "__base__/graphics/entity/small-pump/small-pump-right.png",
        "width": 51,
        "height": 56,
        "frame_count": 8,
        "shift": [
          0.265625,
          null
        ],
        "animation_speed": 0.5
      },
      "south": {
        "filename": "__base__/graphics/entity/small-pump/small-pump-down.png",
        "width": 61,
        "height": 58,
        "frame_count": 8,
        "shift": [
          0.421875,
          null
        ],
        "animation_speed": 0.5
      },
      "west": {
        "filename": "__base__/graphics/entity/small-pump/small-pump-left.png",
        "width": 56,
        "height": 44,
        "frame_count": 8,
        "shift": [
          0.3125,
          0.0625
        ],
        "animation_speed": 0.5
      }
    },
    "circuit_wire_connection_points": [
      {
        "shadow": {
          "red": [
            0.171875,
            0.140625
          ],
          "green": [
            0.171875,
            0.265625
          ]
        },
        "wire": {
          "red": [
            null,
            null
          ],
          "green": [
            null,
            0
          ]
        }
      },
      {
        "shadow": {
          "red": [
            0.890625,
            0.703125
          ],
          "green": [
            0.75,
            0.75
          ]
        },
        "wire": {
          "red": [
            0.34375,
            0.28125
          ],
          "green": [
            0.34375,
            0.4375
          ]
        }
      },
      {
        "shadow": {
          "red": [
            0.15625,
            0.0625
          ],
          "green": [
            0.09375,
            0.125
          ]
        },
        "wire": {
          "red": [
            null,
            null
          ],
          "green": [
            null,
            0.03125
          ]
        }
      },
      {
        "shadow": {
          "red": [
            0.796875,
            0.703125
          ],
          "green": [
            0.625,
            0.75
          ]
        },
        "wire": {
          "red": [
            0.40625,
            0.28125
          ],
          "green": [
            0.40625,
            0.4375
          ]
        }
      }
    ],
    "circuit_connector_sprites": [
      null,
      null,
      null,
      null
    ],
    "circuit_wire_max_distance": 7.5
  },
  {
    "type": "explosion",
    "name": "laser-bubble",
    "flags": [
      "not-on-map"
    ],
    "animation_speed": 1,
    "animations": [
      {
        "filename": "__base__/graphics/entity/laser-bubble/laser-bubble.png",
        "priority": "extra-high",
        "width": 8,
        "height": 8,
        "frame_count": 5
      }
    ],
    "light": {
      "intensity": 1,
      "size": 10
    },
    "smoke": "smoke-fast",
    "smoke_count": 2,
    "smoke_slow_down_factor": 1
  },
  {
    "type": "explosion",
    "name": "railgun-beam",
    "flags": [
      "not-on-map"
    ],
    "animation_speed": 3,
    "rotate": true,
    "beam": true,
    "animations": [
      {
        "filename": "__base__/graphics/entity/blue-beam/blue-beam.png",
        "priority": "extra-high",
        "width": 187,
        "height": 1,
        "frame_count": 6
      }
    ],
    "light": {
      "intensity": 1,
      "size": 10
    },
    "smoke": "smoke-fast",
    "smoke_count": 2,
    "smoke_slow_down_factor": 1
  },
  {
    "type": "market",
    "name": "market",
    "icon": "__base__/graphics/icons/market.png",
    "flags": [
      "placeable-neutral",
      "player-creation"
    ],
    "subgroup": "production-machine",
    "order": "d-a-a",
    "max_health": 150,
    "corpse": "big-remnants",
    "collision_box": [
      [
        null,
        null
      ],
      [
        1.4,
        1.4
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        1.5,
        1.5
      ]
    ],
    "picture": {
      "filename": "__base__/graphics/entity/market/market.png",
      "width": 156,
      "height": 127,
      "shift": [
        0.95,
        0.2
      ]
    }
  },
  {
    "type": "electric-pole",
    "name": "big-electric-pole",
    "icon": "__base__/graphics/icons/big-electric-pole.png",
    "flags": [
      "placeable-neutral",
      "player-creation"
    ],
    "minable": {
      "hardness": 0.2,
      "mining_time": 0.5,
      "result": "big-electric-pole"
    },
    "max_health": 150,
    "corpse": "medium-remnants",
    "resistances": [
      {
        "type": "fire",
        "percent": 100
      }
    ],
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.65,
        0.65
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        1,
        1
      ]
    ],
    "drawing_box": [
      [
        null,
        null
      ],
      [
        1,
        0.5
      ]
    ],
    "maximum_wire_distance": 30,
    "supply_area_distance": 2,
    "vehicle_impact_sound": {
      "filename": "__base__/sound/car-metal-impact.ogg",
      "volume": 0.65
    },
    "pictures": {
      "filename": "__base__/graphics/entity/big-electric-pole/big-electric-pole.png",
      "priority": "high",
      "width": 168,
      "height": 165,
      "direction_count": 4,
      "shift": [
        1.6,
        null
      ]
    },
    "connection_points": [
      {
        "shadow": {
          "copper": [
            2.7,
            0
          ],
          "green": [
            1.8,
            0
          ],
          "red": [
            3.6,
            0
          ]
        },
        "wire": {
          "copper": [
            0,
            null
          ],
          "green": [
            null,
            null
          ],
          "red": [
            0.625,
            null
          ]
        }
      },
      {
        "shadow": {
          "copper": [
            3.1,
            0.2
          ],
          "green": [
            2.3,
            null
          ],
          "red": [
            3.8,
            0.6
          ]
        },
        "wire": {
          "copper": [
            null,
            null
          ],
          "green": [
            null,
            null
          ],
          "red": [
            0.34375,
            null
          ]
        }
      },
      {
        "shadow": {
          "copper": [
            2.9,
            0.06
          ],
          "green": [
            3,
            null
          ],
          "red": [
            3,
            0.8
          ]
        },
        "wire": {
          "copper": [
            null,
            null
          ],
          "green": [
            null,
            null
          ],
          "red": [
            null,
            null
          ]
        }
      },
      {
        "shadow": {
          "copper": [
            3.1,
            0.2
          ],
          "green": [
            3.8,
            null
          ],
          "red": [
            2.35,
            0.6
          ]
        },
        "wire": {
          "copper": [
            null,
            null
          ],
          "green": [
            0.375,
            null
          ],
          "red": [
            null,
            null
          ]
        }
      }
    ],
    "radius_visualisation_picture": {
      "filename": "__base__/graphics/entity/small-electric-pole/electric-pole-radius-visualization.png",
      "width": 12,
      "height": 12,
      "priority": "extra-high-no-scale"
    }
  },
  {
    "type": "electric-pole",
    "name": "medium-electric-pole",
    "icon": "__base__/graphics/icons/medium-electric-pole.png",
    "flags": [
      "placeable-neutral",
      "player-creation"
    ],
    "minable": {
      "hardness": 0.2,
      "mining_time": 0.5,
      "result": "medium-electric-pole"
    },
    "max_health": 100,
    "corpse": "small-remnants",
    "resistances": [
      {
        "type": "fire",
        "percent": 100
      }
    ],
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.15,
        0.15
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ],
    "drawing_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ],
    "maximum_wire_distance": 9,
    "supply_area_distance": 3.5,
    "vehicle_impact_sound": {
      "filename": "__base__/sound/car-metal-impact.ogg",
      "volume": 0.65
    },
    "pictures": {
      "filename": "__base__/graphics/entity/medium-electric-pole/medium-electric-pole.png",
      "priority": "high",
      "width": 136,
      "height": 122,
      "direction_count": 4,
      "shift": [
        1.4,
        null
      ]
    },
    "connection_points": [
      {
        "shadow": {
          "copper": [
            2.55,
            0.4
          ],
          "green": [
            2,
            0.4
          ],
          "red": [
            3.05,
            0.4
          ]
        },
        "wire": {
          "copper": [
            null,
            null
          ],
          "green": [
            null,
            null
          ],
          "red": [
            0.25,
            null
          ]
        }
      },
      {
        "shadow": {
          "copper": [
            2.9,
            0.1
          ],
          "green": [
            2.6,
            null
          ],
          "red": [
            3.25,
            0.35
          ]
        },
        "wire": {
          "copper": [
            0.0625,
            null
          ],
          "green": [
            null,
            null
          ],
          "red": [
            0.28125,
            null
          ]
        }
      },
      {
        "shadow": {
          "copper": [
            1.5,
            null
          ],
          "green": [
            1.5,
            null
          ],
          "red": [
            1.5,
            0.1
          ]
        },
        "wire": {
          "copper": [
            null,
            null
          ],
          "green": [
            null,
            null
          ],
          "red": [
            null,
            null
          ]
        }
      },
      {
        "shadow": {
          "copper": [
            2.88,
            0.2
          ],
          "green": [
            3.2,
            null
          ],
          "red": [
            2.45,
            0.4
          ]
        },
        "wire": {
          "copper": [
            null,
            null
          ],
          "green": [
            0.15625,
            null
          ],
          "red": [
            null,
            null
          ]
        }
      }
    ],
    "radius_visualisation_picture": {
      "filename": "__base__/graphics/entity/small-electric-pole/electric-pole-radius-visualization.png",
      "width": 12,
      "height": 12,
      "priority": "extra-high-no-scale"
    }
  },
  {
    "type": "electric-pole",
    "name": "substation",
    "icon": "__base__/graphics/icons/substation.png",
    "flags": [
      "placeable-neutral",
      "player-creation"
    ],
    "minable": {
      "hardness": 0.2,
      "mining_time": 0.5,
      "result": "substation"
    },
    "max_health": 200,
    "corpse": "medium-remnants",
    "resistances": [
      {
        "type": "fire",
        "percent": 90
      }
    ],
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.9,
        0.9
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        1,
        1
      ]
    ],
    "drawing_box": [
      [
        null,
        null
      ],
      [
        1,
        1
      ]
    ],
    "maximum_wire_distance": 14,
    "supply_area_distance": 7,
    "pictures": {
      "filename": "__base__/graphics/entity/substation/substation.png",
      "priority": "high",
      "width": 132,
      "height": 144,
      "direction_count": 4,
      "shift": [
        0.9,
        null
      ]
    },
    "vehicle_impact_sound": {
      "filename": "__base__/sound/car-metal-impact.ogg",
      "volume": 0.65
    },
    "working_sound": {
      "sound": {
        "filename": "__base__/sound/substation.ogg"
      },
      "apparent_volume": 1.5,
      "audible_distance_modifier": 0.5
    },
    "connection_points": [
      {
        "shadow": {
          "copper": [
            1.9,
            null
          ],
          "green": [
            1.3,
            null
          ],
          "red": [
            2.65,
            null
          ]
        },
        "wire": {
          "copper": [
            null,
            null
          ],
          "green": [
            null,
            null
          ],
          "red": [
            0.34375,
            null
          ]
        }
      },
      {
        "shadow": {
          "copper": [
            1.9,
            null
          ],
          "green": [
            1.2,
            null
          ],
          "red": [
            2.5,
            null
          ]
        },
        "wire": {
          "copper": [
            null,
            null
          ],
          "green": [
            null,
            null
          ],
          "red": [
            0.1875,
            null
          ]
        }
      },
      {
        "shadow": {
          "copper": [
            1.9,
            null
          ],
          "green": [
            1.9,
            null
          ],
          "red": [
            1.9,
            null
          ]
        },
        "wire": {
          "copper": [
            null,
            null
          ],
          "green": [
            null,
            null
          ],
          "red": [
            null,
            null
          ]
        }
      },
      {
        "shadow": {
          "copper": [
            1.8,
            null
          ],
          "green": [
            1.3,
            null
          ],
          "red": [
            2.4,
            null
          ]
        },
        "wire": {
          "copper": [
            null,
            null
          ],
          "green": [
            null,
            null
          ],
          "red": [
            0.1875,
            null
          ]
        }
      }
    ],
    "radius_visualisation_picture": {
      "filename": "__base__/graphics/entity/small-electric-pole/electric-pole-radius-visualization.png",
      "width": 12,
      "height": 12,
      "priority": "extra-high-no-scale"
    }
  },
  {
    "type": "accumulator",
    "name": "accumulator",
    "icon": "__base__/graphics/icons/accumulator.png",
    "flags": [
      "placeable-neutral",
      "player-creation"
    ],
    "minable": {
      "hardness": 0.2,
      "mining_time": 0.5,
      "result": "accumulator"
    },
    "max_health": 150,
    "corpse": "medium-remnants",
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.9,
        0.9
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        1,
        1
      ]
    ],
    "energy_source": {
      "type": "electric",
      "buffer_capacity": "5MJ",
      "usage_priority": "terciary",
      "input_flow_limit": "300kW",
      "output_flow_limit": "300kW"
    },
    "picture": {
      "filename": "__base__/graphics/entity/accumulator/accumulator.png",
      "priority": "extra-high",
      "width": 124,
      "height": 103,
      "shift": [
        0.6875,
        null
      ]
    },
    "charge_animation": {
      "filename": "__base__/graphics/entity/accumulator/accumulator-charge-animation.png",
      "width": 138,
      "height": 135,
      "line_length": 8,
      "frame_count": 24,
      "shift": [
        0.46875,
        null
      ],
      "animation_speed": 0.5
    },
    "charge_cooldown": 30,
    "charge_light": {
      "intensity": 0.3,
      "size": 7
    },
    "discharge_animation": {
      "filename": "__base__/graphics/entity/accumulator/accumulator-discharge-animation.png",
      "width": 147,
      "height": 128,
      "line_length": 8,
      "frame_count": 24,
      "shift": [
        0.390625,
        null
      ],
      "animation_speed": 0.5
    },
    "discharge_cooldown": 60,
    "discharge_light": {
      "intensity": 0.7,
      "size": 7
    },
    "vehicle_impact_sound": {
      "filename": "__base__/sound/car-metal-impact.ogg",
      "volume": 0.65
    },
    "working_sound": {
      "sound": {
        "filename": "__base__/sound/accumulator-working.ogg",
        "volume": 1
      },
      "idle_sound": {
        "filename": "__base__/sound/accumulator-idle.ogg",
        "volume": 0.4
      },
      "max_sounds_per_type": 5
    },
    "circuit_wire_connection_point": {
      "shadow": {
        "red": [
          0.984375,
          1.10938
        ],
        "green": [
          0.890625,
          1.10938
        ]
      },
      "wire": {
        "red": [
          0.6875,
          0.59375
        ],
        "green": [
          0.6875,
          0.71875
        ]
      }
    },
    "circuit_wire_max_distance": 7.5,
    "default_output_signal": "signal-A"
  },
  {
    "type": "furnace",
    "name": "steel-furnace",
    "icon": "__base__/graphics/icons/steel-furnace.png",
    "flags": [
      "placeable-neutral",
      "placeable-player",
      "player-creation"
    ],
    "minable": {
      "mining_time": 1,
      "result": "steel-furnace"
    },
    "max_health": 200,
    "corpse": "medium-remnants",
    "vehicle_impact_sound": {
      "filename": "__base__/sound/car-metal-impact.ogg",
      "volume": 0.65
    },
    "working_sound": {
      "sound": {
        "filename": "__base__/sound/furnace.ogg"
      }
    },
    "resistances": [
      {
        "type": "fire",
        "percent": 100
      }
    ],
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.7,
        0.7
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.8,
        1
      ]
    ],
    "crafting_categories": [
      "smelting"
    ],
    "result_inventory_size": 1,
    "energy_usage": "180kW",
    "crafting_speed": 2,
    "source_inventory_size": 1,
    "energy_source": {
      "type": "burner",
      "effectivity": 1,
      "emissions": 0.02,
      "fuel_inventory_size": 1,
      "smoke": [
        {
          "name": "smoke",
          "frequency": 10,
          "position": [
            0.7,
            null
          ],
          "starting_vertical_speed": 0.08,
          "starting_frame_deviation": 60
        }
      ]
    },
    "animation": {
      "filename": "__base__/graphics/entity/steel-furnace/steel-furnace.png",
      "priority": "high",
      "width": 140,
      "height": 76,
      "frame_count": 1,
      "shift": [
        1.21875,
        null
      ]
    },
    "working_visualisations": [
      {
        "north_position": [
          0,
          0
        ],
        "east_position": [
          0,
          0
        ],
        "south_position": [
          0,
          0
        ],
        "west_position": [
          0,
          0
        ],
        "animation": {
          "filename": "__base__/graphics/entity/steel-furnace/steel-furnace-fire.png",
          "priority": "high",
          "line_length": 8,
          "width": 29,
          "height": 41,
          "frame_count": 48,
          "axially_symmetrical": false,
          "direction_count": 1,
          "shift": [
            null,
            0.171875
          ]
        },
        "light": {
          "intensity": 1,
          "size": 1
        }
      },
      {
        "north_position": [
          0,
          0
        ],
        "east_position": [
          0,
          0
        ],
        "south_position": [
          0,
          0
        ],
        "west_position": [
          0,
          0
        ],
        "effect": "flicker",
        "animation": {
          "filename": "__base__/graphics/entity/steel-furnace/steel-furnace-glow.png",
          "priority": "high",
          "width": 60,
          "height": 43,
          "frame_count": 1,
          "shift": [
            0.03125,
            0.640625
          ],
          "blend_mode": "additive"
        }
      },
      {
        "north_position": [
          0,
          0
        ],
        "east_position": [
          0,
          0
        ],
        "south_position": [
          0,
          0
        ],
        "west_position": [
          0,
          0
        ],
        "effect": "flicker",
        "animation": {
          "filename": "__base__/graphics/entity/steel-furnace/steel-furnace-working-lighting.png",
          "priority": "high",
          "line_length": 8,
          "width": 58,
          "height": 59,
          "frame_count": 1,
          "axially_symmetrical": false,
          "direction_count": 1,
          "shift": [
            0.09375,
            0.046875
          ],
          "blend_mode": "additive"
        }
      }
    ],
    "fast_replaceable_group": "furnace"
  },
  {
    "type": "furnace",
    "name": "electric-furnace",
    "icon": "__base__/graphics/icons/electric-furnace.png",
    "flags": [
      "placeable-neutral",
      "placeable-player",
      "player-creation"
    ],
    "minable": {
      "mining_time": 1,
      "result": "electric-furnace"
    },
    "max_health": 150,
    "corpse": "big-remnants",
    "dying_explosion": "medium-explosion",
    "light": {
      "intensity": 1,
      "size": 10
    },
    "resistances": [
      {
        "type": "fire",
        "percent": 80
      }
    ],
    "collision_box": [
      [
        null,
        null
      ],
      [
        1.2,
        1.2
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        1.5,
        1.5
      ]
    ],
    "module_specification": {
      "module_slots": 2,
      "module_info_icon_shift": [
        0,
        0.8
      ]
    },
    "allowed_effects": [
      "consumption",
      "speed",
      "productivity",
      "pollution"
    ],
    "crafting_categories": [
      "smelting"
    ],
    "result_inventory_size": 1,
    "crafting_speed": 2,
    "energy_usage": "180kW",
    "source_inventory_size": 1,
    "energy_source": {
      "type": "electric",
      "usage_priority": "secondary-input",
      "emissions": 0.005
    },
    "vehicle_impact_sound": {
      "filename": "__base__/sound/car-metal-impact.ogg",
      "volume": 0.65
    },
    "working_sound": {
      "sound": {
        "filename": "__base__/sound/electric-furnace.ogg",
        "volume": 0.7
      },
      "apparent_volume": 1.5
    },
    "animation": {
      "filename": "__base__/graphics/entity/electric-furnace/electric-furnace-base.png",
      "priority": "high",
      "width": 129,
      "height": 100,
      "frame_count": 1,
      "shift": [
        0.421875,
        0
      ]
    },
    "working_visualisations": [
      {
        "animation": {
          "filename": "__base__/graphics/entity/electric-furnace/electric-furnace-heater.png",
          "priority": "high",
          "width": 25,
          "height": 15,
          "frame_count": 12,
          "animation_speed": 0.5,
          "shift": [
            0.015625,
            0.890625
          ]
        },
        "light": {
          "intensity": 0.4,
          "size": 6,
          "shift": [
            0,
            1
          ]
        }
      },
      {
        "animation": {
          "filename": "__base__/graphics/entity/electric-furnace/electric-furnace-propeller-1.png",
          "priority": "high",
          "width": 19,
          "height": 13,
          "frame_count": 4,
          "animation_speed": 0.5,
          "shift": [
            null,
            null
          ]
        }
      },
      {
        "animation": {
          "filename": "__base__/graphics/entity/electric-furnace/electric-furnace-propeller-2.png",
          "priority": "high",
          "width": 12,
          "height": 9,
          "frame_count": 4,
          "animation_speed": 0.5,
          "shift": [
            0.0625,
            null
          ]
        }
      }
    ],
    "fast_replaceable_group": "furnace"
  },
  {
    "type": "beacon",
    "name": "beacon",
    "icon": "__base__/graphics/icons/beacon.png",
    "flags": [
      "placeable-player",
      "player-creation"
    ],
    "minable": {
      "mining_time": 1,
      "result": "beacon"
    },
    "max_health": 200,
    "corpse": "big-remnants",
    "dying_explosion": "medium-explosion",
    "collision_box": [
      [
        null,
        null
      ],
      [
        1.2,
        1.2
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        1.5,
        1.5
      ]
    ],
    "allowed_effects": [
      "consumption",
      "speed",
      "pollution"
    ],
    "base_picture": {
      "filename": "__base__/graphics/entity/beacon/beacon-base.png",
      "width": 116,
      "height": 93,
      "shift": [
        0.34375,
        0.046875
      ]
    },
    "animation": {
      "filename": "__base__/graphics/entity/beacon/beacon-antenna.png",
      "width": 54,
      "height": 50,
      "line_length": 8,
      "frame_count": 32,
      "shift": [
        null,
        null
      ],
      "animation_speed": 0.5
    },
    "animation_shadow": {
      "filename": "__base__/graphics/entity/beacon/beacon-antenna-shadow.png",
      "width": 63,
      "height": 49,
      "line_length": 8,
      "frame_count": 32,
      "shift": [
        3.140625,
        0.484375
      ],
      "animation_speed": 0.5
    },
    "radius_visualisation_picture": {
      "filename": "__base__/graphics/entity/beacon/beacon-radius-visualization.png",
      "width": 12,
      "height": 12
    },
    "supply_area_distance": 3,
    "energy_source": {
      "type": "electric",
      "usage_priority": "secondary-input"
    },
    "vehicle_impact_sound": {
      "filename": "__base__/sound/car-metal-impact.ogg",
      "volume": 0.65
    },
    "energy_usage": "480kW",
    "distribution_effectivity": 0.5,
    "module_specification": {
      "module_slots": 2,
      "module_info_icon_shift": [
        0,
        0.5
      ]
    }
  },
  {
    "type": "smoke-with-trigger",
    "name": "poison-cloud",
    "flags": [
      "not-on-map"
    ],
    "show_when_smoke_off": true,
    "animation": {
      "filename": "__base__/graphics/entity/cloud/cloud-45-frames.png",
      "flags": [
        "compressed"
      ],
      "priority": "low",
      "width": 256,
      "height": 256,
      "frame_count": 45,
      "animation_speed": 0.5,
      "line_length": 7,
      "scale": 3
    },
    "slow_down_factor": 0,
    "affected_by_wind": false,
    "cyclic": true,
    "spread_duration": 10,
    "color": {
      "r": 0.2,
      "g": 0.9,
      "b": 0.2
    },
    "action": {
      "type": "direct",
      "action_delivery": {
        "type": "instant",
        "target_effects": {
          "type": "nested-result",
          "action": {
            "type": "area",
            "perimeter": 11,
            "entity_flags": [
              "breaths-air"
            ],
            "action_delivery": {
              "type": "instant",
              "target_effects": {
                "type": "damage",
                "damage": {
                  "amount": 4,
                  "type": "poison"
                }
              }
            }
          }
        }
      }
    },
    "action_frequency": 30
  },
  {
    "type": "combat-robot",
    "name": "distractor",
    "icon": "__base__/graphics/icons/distractor.png",
    "flags": [
      "placeable-player",
      "player-creation",
      "placeable-off-grid",
      "not-on-map",
      "not-repairable"
    ],
    "resistances": [
      {
        "type": "fire",
        "percent": 95
      }
    ],
    "order": "e-a-b",
    "subgroup": "capsule",
    "max_health": 90,
    "alert_when_damaged": false,
    "collision_box": [
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.9,
        null
      ]
    ],
    "distance_per_frame": 0.13,
    "speed": 0,
    "destroy_action": {
      "type": "direct",
      "action_delivery": {
        "type": "instant",
        "source_effects": {
          "type": "create-entity",
          "entity_name": "explosion"
        }
      }
    },
    "attack_parameters": {
      "type": "projectile",
      "ammo_category": "combat-robot-laser",
      "cooldown": 20,
      "damage_modifier": 0.7,
      "projectile_center": [
        0,
        0
      ],
      "projectile_creation_distance": 0.6,
      "range": 15,
      "ammo_type": {
        "category": "combat-robot-laser",
        "action": {
          "type": "direct",
          "action_delivery": {
            "type": "projectile",
            "projectile": "laser",
            "starting_speed": 0.3
          }
        }
      }
    },
    "idle": {
      "layers": [
        {
          "filename": "__base__/graphics/entity/distractor-robot/distractor-robot.png",
          "priority": "high",
          "line_length": 16,
          "width": 38,
          "height": 33,
          "frame_count": 1,
          "direction_count": 16,
          "shift": [
            0,
            null
          ]
        },
        {
          "filename": "__base__/graphics/entity/distractor-robot/distractor-robot-mask.png",
          "priority": "high",
          "line_length": 16,
          "width": 24,
          "height": 21,
          "frame_count": 1,
          "direction_count": 16,
          "shift": [
            0,
            null
          ],
          "apply_runtime_tint": true
        }
      ]
    },
    "shadow_idle": {
      "filename": "__base__/graphics/entity/distractor-robot/distractor-robot-shadow.png",
      "priority": "high",
      "line_length": 16,
      "width": 40,
      "height": 25,
      "frame_count": 1,
      "direction_count": 16,
      "shift": [
        0.9375,
        0.609375
      ]
    },
    "in_motion": {
      "layers": [
        {
          "filename": "__base__/graphics/entity/distractor-robot/distractor-robot.png",
          "priority": "high",
          "line_length": 16,
          "width": 38,
          "height": 33,
          "frame_count": 1,
          "direction_count": 16,
          "shift": [
            0,
            null
          ],
          "y": 33
        },
        {
          "filename": "__base__/graphics/entity/distractor-robot/distractor-robot-mask.png",
          "priority": "high",
          "line_length": 16,
          "width": 24,
          "height": 21,
          "frame_count": 1,
          "direction_count": 16,
          "shift": [
            0,
            null
          ],
          "apply_runtime_tint": true,
          "y": 21
        }
      ]
    },
    "shadow_in_motion": {
      "filename": "__base__/graphics/entity/distractor-robot/distractor-robot-shadow.png",
      "priority": "high",
      "line_length": 16,
      "width": 40,
      "height": 25,
      "frame_count": 1,
      "direction_count": 16,
      "shift": [
        0.9375,
        0.609375
      ]
    }
  },
  {
    "type": "combat-robot",
    "name": "defender",
    "icon": "__base__/graphics/icons/defender.png",
    "flags": [
      "placeable-player",
      "player-creation",
      "placeable-off-grid",
      "not-on-map",
      "not-repairable"
    ],
    "resistances": [
      {
        "type": "fire",
        "percent": 95
      }
    ],
    "subgroup": "capsule",
    "order": "e-a-a",
    "max_health": 60,
    "alert_when_damaged": false,
    "collision_box": [
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.5,
        null
      ]
    ],
    "distance_per_frame": 0.13,
    "follows_player": true,
    "friction": 0.01,
    "range_from_player": 6,
    "speed": 0.01,
    "destroy_action": {
      "type": "direct",
      "action_delivery": {
        "type": "instant",
        "source_effects": {
          "type": "create-entity",
          "entity_name": "explosion"
        }
      }
    },
    "attack_parameters": {
      "type": "projectile",
      "ammo_category": "bullet",
      "cooldown": 20,
      "projectile_center": [
        0,
        1
      ],
      "projectile_creation_distance": 0.6,
      "range": 15,
      "ammo_type": {
        "category": "bullet",
        "action": {
          "type": "direct",
          "action_delivery": {
            "type": "instant",
            "source_effects": {
              "type": "create-explosion",
              "entity_name": "explosion-gunshot-small"
            },
            "target_effects": [
              {
                "type": "create-entity",
                "entity_name": "explosion-hit"
              },
              {
                "type": "damage",
                "damage": {
                  "amount": 5,
                  "type": "physical"
                }
              }
            ]
          }
        }
      }
    },
    "idle": {
      "layers": [
        {
          "filename": "__base__/graphics/entity/defender-robot/defender-robot.png",
          "priority": "high",
          "line_length": 16,
          "width": 32,
          "height": 33,
          "frame_count": 1,
          "direction_count": 16,
          "shift": [
            0,
            0.015625
          ]
        },
        {
          "filename": "__base__/graphics/entity/defender-robot/defender-robot-mask.png",
          "priority": "high",
          "line_length": 16,
          "width": 18,
          "height": 16,
          "frame_count": 1,
          "direction_count": 16,
          "shift": [
            0,
            null
          ],
          "apply_runtime_tint": true
        }
      ]
    },
    "shadow_idle": {
      "filename": "__base__/graphics/entity/defender-robot/defender-robot-shadow.png",
      "priority": "high",
      "line_length": 16,
      "width": 43,
      "height": 23,
      "frame_count": 1,
      "direction_count": 16,
      "shift": [
        0.859375,
        0.609375
      ]
    },
    "in_motion": {
      "layers": [
        {
          "filename": "__base__/graphics/entity/defender-robot/defender-robot.png",
          "priority": "high",
          "line_length": 16,
          "width": 32,
          "height": 33,
          "frame_count": 1,
          "direction_count": 16,
          "shift": [
            0,
            0.015625
          ],
          "y": 33
        },
        {
          "filename": "__base__/graphics/entity/defender-robot/defender-robot-mask.png",
          "priority": "high",
          "line_length": 16,
          "width": 18,
          "height": 16,
          "frame_count": 1,
          "direction_count": 16,
          "shift": [
            0,
            null
          ],
          "apply_runtime_tint": true,
          "y": 16
        }
      ]
    },
    "shadow_in_motion": {
      "filename": "__base__/graphics/entity/defender-robot/defender-robot-shadow.png",
      "priority": "high",
      "line_length": 16,
      "width": 43,
      "height": 23,
      "frame_count": 1,
      "direction_count": 16,
      "shift": [
        0.859375,
        0.609375
      ]
    }
  },
  {
    "type": "combat-robot",
    "name": "destroyer",
    "icon": "__base__/graphics/icons/destroyer.png",
    "flags": [
      "placeable-player",
      "player-creation",
      "placeable-off-grid",
      "not-on-map",
      "not-repairable"
    ],
    "resistances": [
      {
        "type": "fire",
        "percent": 95
      }
    ],
    "subgroup": "capsule",
    "order": "e-a-c",
    "max_health": 60,
    "alert_when_damaged": false,
    "collision_box": [
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.5,
        null
      ]
    ],
    "distance_per_frame": 0.13,
    "speed": 0.01,
    "follows_player": true,
    "friction": 0.01,
    "range_from_player": 6,
    "destroy_action": {
      "type": "direct",
      "action_delivery": {
        "type": "instant",
        "source_effects": {
          "type": "create-entity",
          "entity_name": "explosion"
        }
      }
    },
    "attack_parameters": {
      "type": "beam",
      "ammo_category": "combat-robot-beam",
      "cooldown": 20,
      "range": 15,
      "ammo_type": {
        "category": "combat-robot-beam",
        "action": {
          "type": "direct",
          "action_delivery": {
            "type": "beam",
            "beam": "electric-beam",
            "max_length": 15,
            "duration": 20,
            "source_offset": [
              0.15,
              null
            ]
          }
        }
      }
    },
    "idle": {
      "layers": [
        {
          "filename": "__base__/graphics/entity/destroyer-robot/destroyer-robot.png",
          "priority": "high",
          "line_length": 32,
          "width": 45,
          "height": 39,
          "y": 39,
          "frame_count": 1,
          "direction_count": 32,
          "shift": [
            0.078125,
            null
          ]
        },
        {
          "filename": "__base__/graphics/entity/destroyer-robot/destroyer-robot-mask.png",
          "priority": "high",
          "line_length": 32,
          "width": 27,
          "height": 21,
          "y": 21,
          "frame_count": 1,
          "direction_count": 32,
          "shift": [
            0.078125,
            null
          ],
          "apply_runtime_tint": true
        }
      ]
    },
    "shadow_idle": {
      "filename": "__base__/graphics/entity/destroyer-robot/destroyer-robot-shadow.png",
      "priority": "high",
      "line_length": 32,
      "width": 48,
      "height": 32,
      "frame_count": 1,
      "direction_count": 32,
      "shift": [
        0.78125,
        0
      ]
    },
    "in_motion": {
      "layers": [
        {
          "filename": "__base__/graphics/entity/destroyer-robot/destroyer-robot.png",
          "priority": "high",
          "line_length": 32,
          "width": 45,
          "height": 39,
          "frame_count": 1,
          "direction_count": 32,
          "shift": [
            0.078125,
            null
          ]
        },
        {
          "filename": "__base__/graphics/entity/destroyer-robot/destroyer-robot-mask.png",
          "priority": "high",
          "line_length": 32,
          "width": 27,
          "height": 21,
          "frame_count": 1,
          "direction_count": 32,
          "shift": [
            0.078125,
            null
          ],
          "apply_runtime_tint": true
        }
      ]
    },
    "shadow_in_motion": {
      "filename": "__base__/graphics/entity/destroyer-robot/destroyer-robot-shadow.png",
      "priority": "high",
      "line_length": 32,
      "width": 48,
      "height": 32,
      "frame_count": 1,
      "direction_count": 32,
      "shift": [
        0.78125,
        0
      ]
    }
  },
  {
    "type": "sticker",
    "name": "slowdown-sticker",
    "flags": {},
    "animation": {
      "filename": "__base__/graphics/entity/slowdown-sticker/slowdown-sticker.png",
      "priority": "extra-high",
      "width": 11,
      "height": 11,
      "frame_count": 13,
      "animation_speed": 0.4
    },
    "target_movement_modifier": 0.5
  },
  {
    "type": "assembling-machine",
    "name": "oil-refinery",
    "icon": "__base__/graphics/icons/oil-refinery.png",
    "flags": [
      "placeable-neutral",
      "player-creation"
    ],
    "minable": {
      "mining_time": 1,
      "result": "oil-refinery"
    },
    "max_health": 300,
    "corpse": "big-remnants",
    "dying_explosion": "medium-explosion",
    "collision_box": [
      [
        null,
        null
      ],
      [
        2.4,
        2.4
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        2.5,
        2.5
      ]
    ],
    "module_specification": {
      "module_slots": 2
    },
    "scale_entity_info_icon": true,
    "allowed_effects": [
      "consumption",
      "speed",
      "productivity",
      "pollution"
    ],
    "crafting_categories": [
      "oil-processing"
    ],
    "crafting_speed": 1,
    "has_backer_name": true,
    "energy_source": {
      "type": "electric",
      "usage_priority": "secondary-input"
    },
    "energy_usage": "420kW",
    "ingredient_count": 4,
    "animation": {
      "north": {
        "filename": "__base__/graphics/entity/oil-refinery/oil-refinery.png",
        "width": 337,
        "height": 255,
        "frame_count": 1,
        "shift": [
          2.515625,
          0.484375
        ]
      },
      "east": {
        "filename": "__base__/graphics/entity/oil-refinery/oil-refinery.png",
        "x": 337,
        "width": 337,
        "height": 255,
        "frame_count": 1,
        "shift": [
          2.515625,
          0.484375
        ]
      },
      "south": {
        "filename": "__base__/graphics/entity/oil-refinery/oil-refinery.png",
        "x": 674,
        "width": 337,
        "height": 255,
        "frame_count": 1,
        "shift": [
          2.515625,
          0.484375
        ]
      },
      "west": {
        "filename": "__base__/graphics/entity/oil-refinery/oil-refinery.png",
        "x": 1011,
        "width": 337,
        "height": 255,
        "frame_count": 1,
        "shift": [
          2.515625,
          0.484375
        ]
      }
    },
    "working_visualisations": [
      {
        "north_position": [
          1.03125,
          null
        ],
        "east_position": [
          null,
          null
        ],
        "south_position": [
          null,
          null
        ],
        "west_position": [
          1.8437,
          null
        ],
        "animation": {
          "filename": "__base__/graphics/entity/oil-refinery/oil-refinery-fire.png",
          "frame_count": 29,
          "width": 16,
          "height": 35,
          "scale": 1.5,
          "shift": [
            0,
            null
          ],
          "run_mode": "backward"
        },
        "light": {
          "intensity": 0.4,
          "size": 6
        }
      }
    ],
    "vehicle_impact_sound": {
      "filename": "__base__/sound/car-metal-impact.ogg",
      "volume": 0.65
    },
    "working_sound": {
      "sound": {
        "filename": "__base__/sound/oil-refinery.ogg"
      },
      "idle_sound": {
        "filename": "__base__/sound/idle1.ogg",
        "volume": 0.6
      },
      "apparent_volume": 2.5
    },
    "fluid_boxes": [
      {
        "production_type": "input",
        "base_area": 10,
        "pipe_connections": [
          {
            "type": "input",
            "position": [
              null,
              3
            ]
          }
        ]
      },
      {
        "production_type": "input",
        "base_area": 10,
        "pipe_connections": [
          {
            "type": "input",
            "position": [
              1,
              3
            ]
          }
        ]
      },
      {
        "production_type": "output",
        "base_level": 1,
        "pipe_connections": [
          {
            "position": [
              null,
              null
            ]
          }
        ]
      },
      {
        "production_type": "output",
        "base_level": 1,
        "pipe_connections": [
          {
            "position": [
              0,
              null
            ]
          }
        ]
      },
      {
        "production_type": "output",
        "base_level": 1,
        "pipe_connections": [
          {
            "position": [
              2,
              null
            ]
          }
        ]
      }
    ]
  },
  {
    "type": "assembling-machine",
    "name": "chemical-plant",
    "icon": "__base__/graphics/icons/chemical-plant.png",
    "flags": [
      "placeable-neutral",
      "placeable-player",
      "player-creation"
    ],
    "minable": {
      "hardness": 0.2,
      "mining_time": 0.5,
      "result": "chemical-plant"
    },
    "max_health": 300,
    "corpse": "big-remnants",
    "dying_explosion": "medium-explosion",
    "collision_box": [
      [
        null,
        null
      ],
      [
        1.4,
        1.4
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        1.5,
        1.5
      ]
    ],
    "module_specification": {
      "module_slots": 2
    },
    "allowed_effects": [
      "consumption",
      "speed",
      "productivity",
      "pollution"
    ],
    "animation": {
      "north": {
        "filename": "__base__/graphics/entity/chemical-plant/chemical-plant.png",
        "width": 156,
        "height": 141,
        "frame_count": 1,
        "shift": [
          0.5,
          null
        ]
      },
      "west": {
        "filename": "__base__/graphics/entity/chemical-plant/chemical-plant.png",
        "x": 468,
        "width": 156,
        "height": 141,
        "frame_count": 1,
        "shift": [
          0.5,
          null
        ]
      },
      "south": {
        "filename": "__base__/graphics/entity/chemical-plant/chemical-plant.png",
        "x": 312,
        "width": 156,
        "height": 141,
        "frame_count": 1,
        "shift": [
          0.5,
          null
        ]
      },
      "east": {
        "filename": "__base__/graphics/entity/chemical-plant/chemical-plant.png",
        "x": 156,
        "width": 156,
        "height": 141,
        "frame_count": 1,
        "shift": [
          0.5,
          null
        ]
      }
    },
    "working_visualisations": [
      {
        "north_position": [
          0.94,
          null
        ],
        "west_position": [
          0.05,
          null
        ],
        "south_position": [
          null,
          null
        ],
        "east_position": [
          null,
          0.02
        ],
        "animation": {
          "filename": "__base__/graphics/entity/chemical-plant/boiling-green-patch.png",
          "frame_count": 35,
          "width": 17,
          "height": 12,
          "animation_speed": 0.15
        }
      },
      {
        "north_position": [
          1.4,
          null
        ],
        "west_position": [
          0.05,
          null
        ],
        "south_position": [
          null,
          null
        ],
        "east_position": [
          null,
          0.55
        ],
        "north_animation": {
          "filename": "__base__/graphics/entity/chemical-plant/boiling-window-green-patch.png",
          "frame_count": 1,
          "width": 21,
          "height": 10
        },
        "east_animation": {
          "filename": "__base__/graphics/entity/chemical-plant/boiling-window-green-patch.png",
          "x": 21,
          "frame_count": 1,
          "width": 21,
          "height": 10
        },
        "south_animation": {
          "filename": "__base__/graphics/entity/chemical-plant/boiling-window-green-patch.png",
          "x": 42,
          "frame_count": 1,
          "width": 21,
          "height": 10
        }
      }
    ],
    "vehicle_impact_sound": {
      "filename": "__base__/sound/car-metal-impact.ogg",
      "volume": 0.65
    },
    "working_sound": {
      "sound": [
        {
          "filename": "__base__/sound/chemical-plant.ogg",
          "volume": 0.8
        }
      ],
      "idle_sound": {
        "filename": "__base__/sound/idle1.ogg",
        "volume": 0.6
      },
      "apparent_volume": 1.5
    },
    "crafting_speed": 1.25,
    "energy_source": {
      "type": "electric",
      "usage_priority": "secondary-input"
    },
    "energy_usage": "210kW",
    "ingredient_count": 4,
    "crafting_categories": [
      "chemistry"
    ],
    "fluid_boxes": [
      {
        "production_type": "input",
        "base_area": 10,
        "pipe_connections": [
          {
            "type": "input",
            "position": [
              null,
              null
            ]
          }
        ]
      },
      {
        "production_type": "input",
        "base_area": 10,
        "pipe_connections": [
          {
            "type": "input",
            "position": [
              1,
              null
            ]
          }
        ]
      },
      {
        "production_type": "output",
        "base_level": 1,
        "pipe_connections": [
          {
            "position": [
              null,
              2
            ]
          }
        ]
      },
      {
        "production_type": "output",
        "base_level": 1,
        "pipe_connections": [
          {
            "position": [
              1,
              2
            ]
          }
        ]
      }
    ]
  },
  {
    "type": "arithmetic-combinator",
    "name": "arithmetic-combinator",
    "icon": "__base__/graphics/icons/arithmetic-combinator.png",
    "flags": [
      "placeable-neutral",
      "player-creation"
    ],
    "minable": {
      "hardness": 0.2,
      "mining_time": 0.5,
      "result": "arithmetic-combinator"
    },
    "max_health": 50,
    "corpse": "small-remnants",
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.35,
        0.65
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.5,
        1
      ]
    ],
    "energy_source": {
      "type": "electric",
      "usage_priority": "secondary-input"
    },
    "active_energy_usage": "1KW",
    "sprites": {
      "north": {
        "filename": "__base__/graphics/entity/combinator/combinator-entities.png",
        "x": 158,
        "width": 79,
        "height": 63,
        "frame_count": 1,
        "shift": [
          0.140625,
          0.140625
        ]
      },
      "east": {
        "filename": "__base__/graphics/entity/combinator/combinator-entities.png",
        "width": 79,
        "height": 63,
        "frame_count": 1,
        "shift": [
          0.140625,
          0.140625
        ]
      },
      "south": {
        "filename": "__base__/graphics/entity/combinator/combinator-entities.png",
        "x": 237,
        "width": 79,
        "height": 63,
        "frame_count": 1,
        "shift": [
          0.140625,
          0.140625
        ]
      },
      "west": {
        "filename": "__base__/graphics/entity/combinator/combinator-entities.png",
        "x": 79,
        "width": 79,
        "height": 63,
        "frame_count": 1,
        "shift": [
          0.140625,
          0.140625
        ]
      }
    },
    "activity_led_sprites": {
      "north": {
        "filename": "__base__/graphics/entity/combinator/activity-leds/combinator-led-arithmetic-north.png",
        "width": 11,
        "height": 11,
        "frame_count": 1,
        "shift": [
          0.234375,
          null
        ]
      },
      "east": {
        "filename": "__base__/graphics/entity/combinator/activity-leds/combinator-led-arithmetic-east.png",
        "width": 10,
        "height": 10,
        "frame_count": 1,
        "shift": [
          0.5,
          0
        ]
      },
      "south": {
        "filename": "__base__/graphics/entity/combinator/activity-leds/combinator-led-arithmetic-south.png",
        "width": 13,
        "height": 11,
        "frame_count": 1,
        "shift": [
          null,
          0.140625
        ]
      },
      "west": {
        "filename": "__base__/graphics/entity/combinator/activity-leds/combinator-led-arithmetic-west.png",
        "width": 13,
        "height": 11,
        "frame_count": 1,
        "shift": [
          null,
          null
        ]
      }
    },
    "activity_led_light": {
      "intensity": 0.8,
      "size": 1
    },
    "activity_led_light_offsets": [
      [
        0.234375,
        null
      ],
      [
        0.5,
        0
      ],
      [
        null,
        0.140625
      ],
      [
        null,
        null
      ]
    ],
    "screen_light": {
      "intensity": 0.3,
      "size": 0.6
    },
    "screen_light_offsets": [
      [
        0.015625,
        null
      ],
      [
        0.015625,
        null
      ],
      [
        0.015625,
        null
      ],
      [
        0.015625,
        null
      ]
    ],
    "plus_symbol_sprites": {
      "north": {
        "filename": "__base__/graphics/entity/combinator/combinator-displays.png",
        "x": 15,
        "width": 15,
        "height": 11,
        "frame_count": 1,
        "shift": [
          0.015625,
          null
        ]
      },
      "east": {
        "filename": "__base__/graphics/entity/combinator/combinator-displays.png",
        "x": 15,
        "width": 15,
        "height": 11,
        "frame_count": 1,
        "shift": [
          0.015625,
          null
        ]
      },
      "south": {
        "filename": "__base__/graphics/entity/combinator/combinator-displays.png",
        "x": 15,
        "width": 15,
        "height": 11,
        "frame_count": 1,
        "shift": [
          0.015625,
          null
        ]
      },
      "west": {
        "filename": "__base__/graphics/entity/combinator/combinator-displays.png",
        "x": 15,
        "width": 15,
        "height": 11,
        "frame_count": 1,
        "shift": [
          0.015625,
          null
        ]
      }
    },
    "minus_symbol_sprites": {
      "north": {
        "filename": "__base__/graphics/entity/combinator/combinator-displays.png",
        "x": 30,
        "width": 15,
        "height": 11,
        "frame_count": 1,
        "shift": [
          0.015625,
          null
        ]
      },
      "east": {
        "filename": "__base__/graphics/entity/combinator/combinator-displays.png",
        "x": 30,
        "width": 15,
        "height": 11,
        "frame_count": 1,
        "shift": [
          0.015625,
          null
        ]
      },
      "south": {
        "filename": "__base__/graphics/entity/combinator/combinator-displays.png",
        "x": 30,
        "width": 15,
        "height": 11,
        "frame_count": 1,
        "shift": [
          0.015625,
          null
        ]
      },
      "west": {
        "filename": "__base__/graphics/entity/combinator/combinator-displays.png",
        "x": 30,
        "width": 15,
        "height": 11,
        "frame_count": 1,
        "shift": [
          0.015625,
          null
        ]
      }
    },
    "multiply_symbol_sprites": {
      "north": {
        "filename": "__base__/graphics/entity/combinator/combinator-displays.png",
        "x": 45,
        "width": 15,
        "height": 11,
        "frame_count": 1,
        "shift": [
          0.015625,
          null
        ]
      },
      "east": {
        "filename": "__base__/graphics/entity/combinator/combinator-displays.png",
        "x": 45,
        "width": 15,
        "height": 11,
        "frame_count": 1,
        "shift": [
          0.015625,
          null
        ]
      },
      "south": {
        "filename": "__base__/graphics/entity/combinator/combinator-displays.png",
        "x": 45,
        "width": 15,
        "height": 11,
        "frame_count": 1,
        "shift": [
          0.015625,
          null
        ]
      },
      "west": {
        "filename": "__base__/graphics/entity/combinator/combinator-displays.png",
        "x": 45,
        "width": 15,
        "height": 11,
        "frame_count": 1,
        "shift": [
          0.015625,
          null
        ]
      }
    },
    "divide_symbol_sprites": {
      "north": {
        "filename": "__base__/graphics/entity/combinator/combinator-displays.png",
        "y": 11,
        "width": 15,
        "height": 11,
        "frame_count": 1,
        "shift": [
          0.015625,
          null
        ]
      },
      "east": {
        "filename": "__base__/graphics/entity/combinator/combinator-displays.png",
        "y": 11,
        "width": 15,
        "height": 11,
        "frame_count": 1,
        "shift": [
          0.015625,
          null
        ]
      },
      "south": {
        "filename": "__base__/graphics/entity/combinator/combinator-displays.png",
        "y": 11,
        "width": 15,
        "height": 11,
        "frame_count": 1,
        "shift": [
          0.015625,
          null
        ]
      },
      "west": {
        "filename": "__base__/graphics/entity/combinator/combinator-displays.png",
        "y": 11,
        "width": 15,
        "height": 11,
        "frame_count": 1,
        "shift": [
          0.015625,
          null
        ]
      }
    },
    "input_connection_bounding_box": [
      [
        null,
        0
      ],
      [
        0.5,
        1
      ]
    ],
    "output_connection_bounding_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0
      ]
    ],
    "input_connection_points": [
      {
        "shadow": {
          "red": [
            0.171875,
            0.703125
          ],
          "green": [
            0.765625,
            0.703125
          ]
        },
        "wire": {
          "red": [
            null,
            0.34375
          ],
          "green": [
            0.28125,
            0.34375
          ]
        }
      },
      {
        "shadow": {
          "red": [
            null,
            null
          ],
          "green": [
            null,
            0.328125
          ]
        },
        "wire": {
          "red": [
            null,
            null
          ],
          "green": [
            null,
            null
          ]
        }
      },
      {
        "shadow": {
          "red": [
            0.734375,
            null
          ],
          "green": [
            0.171875,
            null
          ]
        },
        "wire": {
          "red": [
            0.25,
            null
          ],
          "green": [
            null,
            null
          ]
        }
      },
      {
        "shadow": {
          "red": [
            1.20313,
            0.359375
          ],
          "green": [
            1.20313,
            null
          ]
        },
        "wire": {
          "red": [
            0.78125,
            0
          ],
          "green": [
            0.78125,
            null
          ]
        }
      }
    ],
    "output_connection_points": [
      {
        "shadow": {
          "red": [
            0.140625,
            null
          ],
          "green": [
            0.734375,
            null
          ]
        },
        "wire": {
          "red": [
            null,
            null
          ],
          "green": [
            0.28125,
            null
          ]
        }
      },
      {
        "shadow": {
          "red": [
            1.17188,
            null
          ],
          "green": [
            1.17188,
            0.328125
          ]
        },
        "wire": {
          "red": [
            0.6875,
            null
          ],
          "green": [
            0.6875,
            0.0625
          ]
        }
      },
      {
        "shadow": {
          "red": [
            0.703125,
            0.671875
          ],
          "green": [
            0.109375,
            0.671875
          ]
        },
        "wire": {
          "red": [
            0.28125,
            0.375
          ],
          "green": [
            null,
            0.375
          ]
        }
      },
      {
        "shadow": {
          "red": [
            null,
            0.328125
          ],
          "green": [
            null,
            null
          ]
        },
        "wire": {
          "red": [
            null,
            0.03125
          ],
          "green": [
            null,
            null
          ]
        }
      }
    ],
    "circuit_wire_max_distance": 7.5
  },
  {
    "type": "decider-combinator",
    "name": "decider-combinator",
    "icon": "__base__/graphics/icons/decider-combinator.png",
    "flags": [
      "placeable-neutral",
      "player-creation"
    ],
    "minable": {
      "hardness": 0.2,
      "mining_time": 0.5,
      "result": "decider-combinator"
    },
    "max_health": 50,
    "corpse": "small-remnants",
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.35,
        0.65
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.5,
        1
      ]
    ],
    "energy_source": {
      "type": "electric",
      "usage_priority": "secondary-input"
    },
    "active_energy_usage": "1KW",
    "sprites": {
      "north": {
        "filename": "__base__/graphics/entity/combinator/combinator-entities.png",
        "x": 158,
        "y": 63,
        "width": 79,
        "height": 63,
        "frame_count": 1,
        "shift": [
          0.140625,
          0.140625
        ]
      },
      "east": {
        "filename": "__base__/graphics/entity/combinator/combinator-entities.png",
        "y": 63,
        "width": 79,
        "height": 63,
        "frame_count": 1,
        "shift": [
          0.140625,
          0.140625
        ]
      },
      "south": {
        "filename": "__base__/graphics/entity/combinator/combinator-entities.png",
        "x": 237,
        "y": 63,
        "width": 79,
        "height": 63,
        "frame_count": 1,
        "shift": [
          0.140625,
          0.140625
        ]
      },
      "west": {
        "filename": "__base__/graphics/entity/combinator/combinator-entities.png",
        "x": 79,
        "y": 63,
        "width": 79,
        "height": 63,
        "frame_count": 1,
        "shift": [
          0.140625,
          0.140625
        ]
      }
    },
    "activity_led_sprites": {
      "north": {
        "filename": "__base__/graphics/entity/combinator/activity-leds/combinator-led-decider-north.png",
        "width": 11,
        "height": 12,
        "frame_count": 1,
        "shift": [
          0.265625,
          null
        ]
      },
      "east": {
        "filename": "__base__/graphics/entity/combinator/activity-leds/combinator-led-decider-east.png",
        "width": 11,
        "height": 11,
        "frame_count": 1,
        "shift": [
          0.515625,
          null
        ]
      },
      "south": {
        "filename": "__base__/graphics/entity/combinator/activity-leds/combinator-led-decider-south.png",
        "width": 12,
        "height": 12,
        "frame_count": 1,
        "shift": [
          null,
          0.03125
        ]
      },
      "west": {
        "filename": "__base__/graphics/entity/combinator/activity-leds/combinator-led-decider-west.png",
        "width": 12,
        "height": 12,
        "frame_count": 1,
        "shift": [
          null,
          null
        ]
      }
    },
    "activity_led_light": {
      "intensity": 0.8,
      "size": 1
    },
    "activity_led_light_offsets": [
      [
        0.265625,
        null
      ],
      [
        0.515625,
        null
      ],
      [
        null,
        0.03125
      ],
      [
        null,
        null
      ]
    ],
    "screen_light": {
      "intensity": 0.3,
      "size": 0.6
    },
    "screen_light_offsets": [
      [
        0.015625,
        null
      ],
      [
        0.015625,
        null
      ],
      [
        0.015625,
        null
      ],
      [
        0.015625,
        null
      ]
    ],
    "equal_symbol_sprites": {
      "north": {
        "filename": "__base__/graphics/entity/combinator/combinator-displays.png",
        "x": 15,
        "y": 11,
        "width": 15,
        "height": 11,
        "frame_count": 1,
        "shift": [
          0.015625,
          null
        ]
      },
      "east": {
        "filename": "__base__/graphics/entity/combinator/combinator-displays.png",
        "x": 15,
        "y": 11,
        "width": 15,
        "height": 11,
        "frame_count": 1,
        "shift": [
          0.015625,
          null
        ]
      },
      "south": {
        "filename": "__base__/graphics/entity/combinator/combinator-displays.png",
        "x": 15,
        "y": 11,
        "width": 15,
        "height": 11,
        "frame_count": 1,
        "shift": [
          0.015625,
          null
        ]
      },
      "west": {
        "filename": "__base__/graphics/entity/combinator/combinator-displays.png",
        "x": 15,
        "y": 11,
        "width": 15,
        "height": 11,
        "frame_count": 1,
        "shift": [
          0.015625,
          null
        ]
      }
    },
    "greater_symbol_sprites": {
      "north": {
        "filename": "__base__/graphics/entity/combinator/combinator-displays.png",
        "x": 30,
        "y": 11,
        "width": 15,
        "height": 11,
        "frame_count": 1,
        "shift": [
          0.015625,
          null
        ]
      },
      "east": {
        "filename": "__base__/graphics/entity/combinator/combinator-displays.png",
        "x": 30,
        "y": 11,
        "width": 15,
        "height": 11,
        "frame_count": 1,
        "shift": [
          0.015625,
          null
        ]
      },
      "south": {
        "filename": "__base__/graphics/entity/combinator/combinator-displays.png",
        "x": 30,
        "y": 11,
        "width": 15,
        "height": 11,
        "frame_count": 1,
        "shift": [
          0.015625,
          null
        ]
      },
      "west": {
        "filename": "__base__/graphics/entity/combinator/combinator-displays.png",
        "x": 30,
        "y": 11,
        "width": 15,
        "height": 11,
        "frame_count": 1,
        "shift": [
          0.015625,
          null
        ]
      }
    },
    "less_symbol_sprites": {
      "north": {
        "filename": "__base__/graphics/entity/combinator/combinator-displays.png",
        "x": 45,
        "y": 11,
        "width": 15,
        "height": 11,
        "frame_count": 1,
        "shift": [
          0.015625,
          null
        ]
      },
      "east": {
        "filename": "__base__/graphics/entity/combinator/combinator-displays.png",
        "x": 45,
        "y": 11,
        "width": 15,
        "height": 11,
        "frame_count": 1,
        "shift": [
          0.015625,
          null
        ]
      },
      "south": {
        "filename": "__base__/graphics/entity/combinator/combinator-displays.png",
        "x": 45,
        "y": 11,
        "width": 15,
        "height": 11,
        "frame_count": 1,
        "shift": [
          0.015625,
          null
        ]
      },
      "west": {
        "filename": "__base__/graphics/entity/combinator/combinator-displays.png",
        "x": 45,
        "y": 11,
        "width": 15,
        "height": 11,
        "frame_count": 1,
        "shift": [
          0.015625,
          null
        ]
      }
    },
    "input_connection_bounding_box": [
      [
        null,
        0
      ],
      [
        0.5,
        1
      ]
    ],
    "output_connection_bounding_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0
      ]
    ],
    "input_connection_points": [
      {
        "shadow": {
          "red": [
            0.328125,
            0.703125
          ],
          "green": [
            0.859375,
            0.703125
          ]
        },
        "wire": {
          "red": [
            null,
            0.34375
          ],
          "green": [
            0.25,
            0.34375
          ]
        }
      },
      {
        "shadow": {
          "red": [
            null,
            null
          ],
          "green": [
            null,
            0.296875
          ]
        },
        "wire": {
          "red": [
            null,
            null
          ],
          "green": [
            null,
            null
          ]
        }
      },
      {
        "shadow": {
          "red": [
            0.828125,
            null
          ],
          "green": [
            0.234375,
            null
          ]
        },
        "wire": {
          "red": [
            0.25,
            null
          ],
          "green": [
            null,
            null
          ]
        }
      },
      {
        "shadow": {
          "red": [
            1.29688,
            0.328125
          ],
          "green": [
            1.29688,
            null
          ]
        },
        "wire": {
          "red": [
            0.75,
            null
          ],
          "green": [
            0.75,
            null
          ]
        }
      }
    ],
    "output_connection_points": [
      {
        "shadow": {
          "red": [
            0.234375,
            null
          ],
          "green": [
            0.828125,
            null
          ]
        },
        "wire": {
          "red": [
            null,
            null
          ],
          "green": [
            0.28125,
            null
          ]
        }
      },
      {
        "shadow": {
          "red": [
            1.17188,
            null
          ],
          "green": [
            1.17188,
            0.296875
          ]
        },
        "wire": {
          "red": [
            0.65625,
            null
          ],
          "green": [
            0.65625,
            null
          ]
        }
      },
      {
        "shadow": {
          "red": [
            0.828125,
            0.765625
          ],
          "green": [
            0.234375,
            0.765625
          ]
        },
        "wire": {
          "red": [
            0.28125,
            0.40625
          ],
          "green": [
            null,
            0.40625
          ]
        }
      },
      {
        "shadow": {
          "red": [
            null,
            0.328125
          ],
          "green": [
            null,
            null
          ]
        },
        "wire": {
          "red": [
            null,
            null
          ],
          "green": [
            null,
            null
          ]
        }
      }
    ],
    "circuit_wire_max_distance": 7.5
  },
  {
    "type": "constant-combinator",
    "name": "constant-combinator",
    "icon": "__base__/graphics/icons/constant-combinator.png",
    "flags": [
      "placeable-neutral",
      "player-creation"
    ],
    "minable": {
      "hardness": 0.2,
      "mining_time": 0.5,
      "result": "constant-combinator"
    },
    "max_health": 50,
    "corpse": "small-remnants",
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.35,
        0.35
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ],
    "item_slot_count": 15,
    "sprites": {
      "north": {
        "filename": "__base__/graphics/entity/combinator/combinator-entities.png",
        "x": 158,
        "y": 126,
        "width": 79,
        "height": 63,
        "frame_count": 1,
        "shift": [
          0.140625,
          0.140625
        ]
      },
      "east": {
        "filename": "__base__/graphics/entity/combinator/combinator-entities.png",
        "y": 126,
        "width": 79,
        "height": 63,
        "frame_count": 1,
        "shift": [
          0.140625,
          0.140625
        ]
      },
      "south": {
        "filename": "__base__/graphics/entity/combinator/combinator-entities.png",
        "x": 237,
        "y": 126,
        "width": 79,
        "height": 63,
        "frame_count": 1,
        "shift": [
          0.140625,
          0.140625
        ]
      },
      "west": {
        "filename": "__base__/graphics/entity/combinator/combinator-entities.png",
        "x": 79,
        "y": 126,
        "width": 79,
        "height": 63,
        "frame_count": 1,
        "shift": [
          0.140625,
          0.140625
        ]
      }
    },
    "activity_led_sprites": {
      "north": {
        "filename": "__base__/graphics/entity/combinator/activity-leds/combinator-led-constant-north.png",
        "width": 11,
        "height": 10,
        "frame_count": 1,
        "shift": [
          0.296875,
          null
        ]
      },
      "east": {
        "filename": "__base__/graphics/entity/combinator/activity-leds/combinator-led-constant-east.png",
        "width": 14,
        "height": 12,
        "frame_count": 1,
        "shift": [
          0.25,
          null
        ]
      },
      "south": {
        "filename": "__base__/graphics/entity/combinator/activity-leds/combinator-led-constant-south.png",
        "width": 11,
        "height": 11,
        "frame_count": 1,
        "shift": [
          null,
          null
        ]
      },
      "west": {
        "filename": "__base__/graphics/entity/combinator/activity-leds/combinator-led-constant-west.png",
        "width": 12,
        "height": 12,
        "frame_count": 1,
        "shift": [
          null,
          null
        ]
      }
    },
    "activity_led_light": {
      "intensity": 0.8,
      "size": 1
    },
    "activity_led_light_offsets": [
      [
        0.296875,
        null
      ],
      [
        0.25,
        null
      ],
      [
        null,
        null
      ],
      [
        null,
        null
      ]
    ],
    "circuit_wire_connection_points": [
      {
        "shadow": {
          "red": [
            0.15625,
            null
          ],
          "green": [
            0.65625,
            null
          ]
        },
        "wire": {
          "red": [
            null,
            null
          ],
          "green": [
            0.21875,
            null
          ]
        }
      },
      {
        "shadow": {
          "red": [
            0.75,
            null
          ],
          "green": [
            0.75,
            0.25
          ]
        },
        "wire": {
          "red": [
            0.46875,
            null
          ],
          "green": [
            0.46875,
            null
          ]
        }
      },
      {
        "shadow": {
          "red": [
            0.75,
            0.5625
          ],
          "green": [
            0.21875,
            0.5625
          ]
        },
        "wire": {
          "red": [
            0.28125,
            0.15625
          ],
          "green": [
            null,
            0.15625
          ]
        }
      },
      {
        "shadow": {
          "red": [
            null,
            0.28125
          ],
          "green": [
            null,
            null
          ]
        },
        "wire": {
          "red": [
            null,
            0
          ],
          "green": [
            null,
            null
          ]
        }
      }
    ],
    "circuit_wire_max_distance": 7.5
  },
  {
    "type": "power-switch",
    "name": "power-switch",
    "icon": "__base__/graphics/icons/power-switch.png",
    "flags": [
      "placeable-neutral",
      "player-creation"
    ],
    "minable": {
      "hardness": 0.2,
      "mining_time": 1,
      "result": "power-switch"
    },
    "max_health": 150,
    "corpse": "medium-remnants",
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.7,
        0.7
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        1,
        1
      ]
    ],
    "power_on_animation": {
      "filename": "__base__/graphics/entity/power-switch/power-switch.png",
      "animation_speed": 0.2,
      "line_length": 2,
      "width": 117,
      "height": 74,
      "frame_count": 6,
      "axially_symmetrical": false,
      "direction_count": 1,
      "shift": [
        0.453125,
        0.1875
      ]
    },
    "overlay_start_delay": 3,
    "overlay_start": {
      "filename": "__base__/graphics/entity/power-switch/power-switch-electricity-start.png",
      "blend_mode": "additive",
      "animation_speed": 0.2,
      "line_length": 2,
      "width": 38,
      "height": 49,
      "frame_count": 2,
      "axially_symmetrical": false,
      "direction_count": 1,
      "shift": [
        0.15625,
        0.046875
      ]
    },
    "overlay_loop": {
      "filename": "__base__/graphics/entity/power-switch/power-switch-electricity-loop.png",
      "blend_mode": "additive",
      "animation_speed": 0.25,
      "line_length": 4,
      "width": 53,
      "height": 56,
      "frame_count": 16,
      "axially_symmetrical": false,
      "direction_count": 1,
      "shift": [
        0.046875,
        null
      ]
    },
    "led_on": {
      "filename": "__base__/graphics/entity/power-switch/power-switch-led.png",
      "x": 6,
      "width": 6,
      "height": 9,
      "frame_count": 1,
      "shift": [
        0.71875,
        0.140625
      ]
    },
    "led_off": {
      "filename": "__base__/graphics/entity/power-switch/power-switch-led.png",
      "width": 6,
      "height": 9,
      "frame_count": 1,
      "shift": [
        0.71875,
        0.140625
      ]
    },
    "circuit_wire_connection_point": {
      "shadow": {
        "red": [
          null,
          1.01563
        ],
        "green": [
          null,
          1.01563
        ]
      },
      "wire": {
        "red": [
          null,
          0.828125
        ],
        "green": [
          null,
          0.828125
        ]
      }
    },
    "left_wire_connection_point": {
      "shadow": {
        "copper": [
          0.296875,
          null
        ]
      },
      "wire": {
        "copper": [
          null,
          null
        ]
      }
    },
    "right_wire_connection_point": {
      "shadow": {
        "copper": [
          2.14063,
          0.015625
        ]
      },
      "wire": {
        "copper": [
          0.859375,
          null
        ]
      }
    },
    "wire_max_distance": 10
  },
  {
    "type": "electric-energy-interface",
    "name": "electric-energy-interface",
    "icon": "__base__/graphics/icons/accumulator.png",
    "flags": [
      "placeable-neutral",
      "player-creation"
    ],
    "minable": {
      "hardness": 0.2,
      "mining_time": 0.5,
      "result": "electric-energy-interface"
    },
    "max_health": 150,
    "corpse": "medium-remnants",
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.9,
        0.9
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        1,
        1
      ]
    ],
    "energy_source": {
      "type": "electric",
      "buffer_capacity": "10MJ",
      "usage_priority": "terciary",
      "input_flow_limit": "1000kW",
      "output_flow_limit": "1000kW"
    },
    "energy_production": "1000kW",
    "energy_usage": "0kW",
    "picture": {
      "filename": "__base__/graphics/entity/accumulator/accumulator.png",
      "priority": "extra-high",
      "width": 124,
      "height": 103,
      "shift": [
        0.6875,
        null
      ]
    },
    "vehicle_impact_sound": {
      "filename": "__base__/sound/car-metal-impact.ogg",
      "volume": 0.65
    },
    "working_sound": {
      "sound": {
        "filename": "__base__/sound/accumulator-working.ogg",
        "volume": 1
      },
      "idle_sound": {
        "filename": "__base__/sound/accumulator-idle.ogg",
        "volume": 0.4
      },
      "max_sounds_per_type": 5
    }
  },
  {
    "type": "fire",
    "name": "fire-flame",
    "flags": [
      "placeable-off-grid",
      "not-on-map"
    ],
    "duration": 600,
    "fade_away_duration": 600,
    "spread_duration": 600,
    "start_scale": 0.2,
    "end_scale": 1,
    "color": {
      "r": 1,
      "g": 0.9,
      "b": 0,
      "a": 0.5
    },
    "damage_per_tick": {
      "type": "fire"
    },
    "spawn_entity": "fire-flame-on-tree",
    "spread_delay": 300,
    "spread_delay_deviation": 180,
    "maximum_spread_count": 100,
    "initial_lifetime": 480,
    "flame_alpha": 0.35,
    "flame_alpha_deviation": 0.05,
    "emissions_per_tick": 0.005,
    "add_fuel_cooldown": 10,
    "increase_duration_cooldown": 10,
    "increase_duration_by": 20,
    "fade_in_duration": 30,
    "fade_out_duration": 30,
    "lifetime_increase_by": 20,
    "lifetime_increase_cooldown": 10,
    "delay_between_initial_flames": 10,
    "burnt_patch_lifetime": 1800,
    "on_fuel_added_action": {
      "type": "direct",
      "action_delivery": {
        "type": "instant",
        "target_effects": [
          {
            "type": "create-smoke",
            "entity_name": "fire-smoke-on-adding-fuel",
            "offset_deviation": [
              [
                null,
                null
              ],
              [
                0.5,
                0.5
              ]
            ],
            "speed_from_center": 0.01
          }
        ]
      }
    },
    "smoke_source_pictures": [
      {
        "filename": "__base__/graphics/entity/fire-flame/fire-smoke-source-1.png",
        "line_length": 8,
        "width": 101,
        "height": 138,
        "frame_count": 31,
        "axially_symmetrical": false,
        "direction_count": 1,
        "shift": [
          null,
          null
        ],
        "animation_speed": 0.5
      },
      {
        "filename": "__base__/graphics/entity/fire-flame/fire-smoke-source-2.png",
        "line_length": 8,
        "width": 99,
        "height": 138,
        "frame_count": 31,
        "axially_symmetrical": false,
        "direction_count": 1,
        "shift": [
          null,
          null
        ],
        "animation_speed": 0.5
      }
    ],
    "burnt_patch_alpha_default": 0.4,
    "burnt_patch_alpha_variations": [
      {
        "tile": "grass-dry",
        "alpha": 0.45
      },
      {
        "tile": "dirt",
        "alpha": 0.3
      },
      {
        "tile": "dirt-dark",
        "alpha": 0.35
      },
      {
        "tile": "sand",
        "alpha": 0.24
      },
      {
        "tile": "sand-dark",
        "alpha": 0.28
      },
      {
        "tile": "stone-path",
        "alpha": 0.26
      },
      {
        "tile": "concrete",
        "alpha": 0.24
      }
    ],
    "smoke": [
      {
        "name": "fire-smoke",
        "deviation": [
          0.5,
          0.5
        ],
        "position": [
          0,
          null
        ],
        "starting_vertical_speed": 0.05,
        "starting_vertical_speed_deviation": 0.005,
        "vertical_speed_slowdown": 0.99,
        "starting_frame_deviation": 60
      }
    ],
    "light": {
      "intensity": 1,
      "size": 20
    },
    "working_sound": {
      "sound": {
        "filename": "__base__/sound/furnace.ogg"
      },
      "max_sounds_per_type": 3
    }
  },
  {
    "type": "fire",
    "name": "fire-flame-on-tree",
    "flags": [
      "placeable-off-grid",
      "not-on-map"
    ],
    "damage_per_tick": {
      "type": "fire"
    },
    "spawn_entity": "fire-flame-on-tree",
    "maximum_spread_count": 100,
    "spread_delay": 300,
    "spread_delay_deviation": 180,
    "flame_alpha": 0.35,
    "flame_alpha_deviation": 0.05,
    "tree_dying_factor": 0.8,
    "emissions_per_tick": 0.005,
    "fade_in_duration": 120,
    "fade_out_duration": 100,
    "smoke_fade_in_duration": 100,
    "smoke_fade_out_duration": 130,
    "delay_between_initial_flames": 20,
    "smoke_source_pictures": [
      {
        "filename": "__base__/graphics/entity/fire-flame/fire-smoke-source-1.png",
        "line_length": 8,
        "width": 101,
        "height": 138,
        "frame_count": 31,
        "axially_symmetrical": false,
        "direction_count": 1,
        "scale": 0.6,
        "shift": [
          null,
          null
        ],
        "animation_speed": 0.5
      },
      {
        "filename": "__base__/graphics/entity/fire-flame/fire-smoke-source-2.png",
        "line_length": 8,
        "width": 99,
        "height": 138,
        "frame_count": 31,
        "axially_symmetrical": false,
        "direction_count": 1,
        "scale": 0.6,
        "shift": [
          null,
          null
        ],
        "animation_speed": 0.5
      }
    ],
    "smoke": [
      {
        "name": "fire-smoke-without-glow",
        "deviation": [
          0.5,
          0.5
        ],
        "position": [
          0,
          null
        ],
        "starting_vertical_speed": 0.008,
        "starting_vertical_speed_deviation": 0.05,
        "starting_frame_deviation": 60
      }
    ],
    "light": {
      "intensity": 1,
      "size": 20
    },
    "working_sound": {
      "sound": {
        "filename": "__base__/sound/furnace.ogg"
      },
      "max_sounds_per_type": 3
    }
  },
  {
    "type": "fluid-turret",
    "name": "flamethrower-turret",
    "icon": "__base__/graphics/icons/flamethrower-turret.png",
    "flags": [
      "placeable-player",
      "player-creation"
    ],
    "minable": {
      "mining_time": 0.5,
      "result": "flamethrower-turret"
    },
    "max_health": 1400,
    "order": "z-z-z",
    "corpse": "medium-remnants",
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.7,
        1.2
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        1,
        1.5
      ]
    ],
    "rotation_speed": 0.015,
    "preparing_speed": 0.08,
    "folding_speed": 0.08,
    "attacking_speed": 1,
    "ending_attack_speed": 0.2,
    "dying_explosion": "medium-explosion",
    "inventory_size": 1,
    "automated_ammo_count": 10,
    "attacking_animation_fade_out": 10,
    "resistances": [
      {
        "type": "fire",
        "percent": 100
      }
    ],
    "fluid_box": {
      "secondary_draw_order": 0,
      "render_layer": "lower-object",
      "base_area": 1,
      "pipe_connections": [
        {
          "position": [
            null,
            1
          ]
        },
        {
          "position": [
            1.5,
            1
          ]
        }
      ]
    },
    "fluid_buffer_size": 10,
    "activation_buffer_ratio": 0.25,
    "indicator_light": {
      "intensity": 0.8,
      "size": 0.9
    },
    "gun_animation_render_layer": "object",
    "gun_animation_secondary_draw_order": 1,
    "base_picture_render_layer": "lower-object",
    "base_picture_secondary_draw_order": 1,
    "base_picture": {
      "north": {
        "layers": [
          {
            "filename": "__base__/graphics/entity/flamethrower-turret/flamethrower-turret-base-north.png",
            "line_length": 1,
            "width": 69,
            "height": 86,
            "frame_count": 1,
            "axially_symmetrical": false,
            "direction_count": 1,
            "shift": [
              null,
              0.34375
            ]
          },
          {
            "filename": "__base__/graphics/entity/flamethrower-turret/flamethrower-turret-base-north-mask.png",
            "flags": [
              "mask"
            ],
            "line_length": 1,
            "width": 37,
            "height": 37,
            "frame_count": 1,
            "axially_symmetrical": false,
            "direction_count": 1,
            "shift": [
              null,
              1.04688
            ],
            "apply_runtime_tint": true
          },
          {
            "filename": "__base__/graphics/entity/flamethrower-turret/flamethrower-turret-base-north-shadow.png",
            "draw_as_shadow": true,
            "line_length": 1,
            "width": 71,
            "height": 78,
            "frame_count": 1,
            "axially_symmetrical": false,
            "direction_count": 1,
            "shift": [
              0.140625,
              0.46875
            ]
          }
        ]
      },
      "east": {
        "layers": [
          {
            "filename": "__base__/graphics/entity/flamethrower-turret/flamethrower-turret-base-east.png",
            "line_length": 1,
            "width": 95,
            "height": 60,
            "frame_count": 1,
            "axially_symmetrical": false,
            "direction_count": 1,
            "shift": [
              null,
              0.125
            ]
          },
          {
            "filename": "__base__/graphics/entity/flamethrower-turret/flamethrower-turret-base-east-mask.png",
            "flags": [
              "mask"
            ],
            "apply_runtime_tint": true,
            "line_length": 1,
            "width": 33,
            "height": 42,
            "frame_count": 1,
            "axially_symmetrical": false,
            "direction_count": 1,
            "shift": [
              null,
              0.03125
            ]
          },
          {
            "filename": "__base__/graphics/entity/flamethrower-turret/flamethrower-turret-base-east-shadow.png",
            "draw_as_shadow": true,
            "line_length": 1,
            "width": 100,
            "height": 44,
            "frame_count": 1,
            "axially_symmetrical": false,
            "direction_count": 1,
            "shift": [
              0.03125,
              0.28125
            ]
          }
        ]
      },
      "south": {
        "layers": [
          {
            "filename": "__base__/graphics/entity/flamethrower-turret/flamethrower-turret-base-south.png",
            "line_length": 1,
            "width": 70,
            "height": 90,
            "frame_count": 1,
            "axially_symmetrical": false,
            "direction_count": 1,
            "shift": [
              0,
              null
            ]
          },
          {
            "filename": "__base__/graphics/entity/flamethrower-turret/flamethrower-turret-base-south-mask.png",
            "flags": [
              "mask"
            ],
            "apply_runtime_tint": true,
            "line_length": 1,
            "width": 37,
            "height": 37,
            "frame_count": 1,
            "axially_symmetrical": false,
            "direction_count": 1,
            "shift": [
              0.015625,
              null
            ]
          },
          {
            "filename": "__base__/graphics/entity/flamethrower-turret/flamethrower-turret-base-south-shadow.png",
            "draw_as_shadow": true,
            "line_length": 1,
            "width": 67,
            "height": 70,
            "frame_count": 1,
            "axially_symmetrical": false,
            "direction_count": 1,
            "shift": [
              0.140625,
              null
            ]
          }
        ]
      },
      "west": {
        "layers": [
          {
            "filename": "__base__/graphics/entity/flamethrower-turret/flamethrower-turret-base-west.png",
            "line_length": 1,
            "width": 93,
            "height": 59,
            "frame_count": 1,
            "axially_symmetrical": false,
            "direction_count": 1,
            "shift": [
              0.140625,
              0.203125
            ]
          },
          {
            "filename": "__base__/graphics/entity/flamethrower-turret/flamethrower-turret-base-west-mask.png",
            "flags": [
              "mask"
            ],
            "apply_runtime_tint": true,
            "line_length": 1,
            "width": 33,
            "height": 40,
            "frame_count": 1,
            "axially_symmetrical": false,
            "direction_count": 1,
            "shift": [
              1.01563,
              0.09375
            ]
          },
          {
            "filename": "__base__/graphics/entity/flamethrower-turret/flamethrower-turret-base-west-shadow.png",
            "draw_as_shadow": true,
            "line_length": 1,
            "width": 103,
            "height": 45,
            "frame_count": 1,
            "axially_symmetrical": false,
            "direction_count": 1,
            "shift": [
              0.484375,
              0.296875
            ]
          }
        ]
      }
    },
    "muzzle_animation": {
      "filename": "__base__/graphics/entity/flamethrower-turret/flamethrower-turret-muzzle-fire.png",
      "line_length": 8,
      "width": 17,
      "height": 41,
      "frame_count": 32,
      "axially_symmetrical": false,
      "direction_count": 1,
      "blend_mode": "additive",
      "scale": 0.5,
      "shift": [
        null,
        null
      ]
    },
    "muzzle_light": {
      "intensity": 0.7,
      "size": 3
    },
    "vehicle_impact_sound": {
      "filename": "__base__/sound/car-metal-impact.ogg",
      "volume": 0.65
    },
    "prepare_range": 35,
    "shoot_in_prepare_state": true,
    "attack_parameters": {
      "type": "stream",
      "ammo_category": "flame-thrower",
      "cooldown": 4,
      "range": 30,
      "min_range": 6,
      "fire_penalty": 15,
      "fluids": [
        {
          "type": "crude-oil"
        },
        {
          "type": "heavy-oil",
          "damage_modifier": 1.05
        },
        {
          "type": "light-oil",
          "damage_modifier": 1.1
        }
      ],
      "fluid_consumption": 0.008,
      "gun_center_shift": {},
      "gun_barrel_length": 0.4,
      "ammo_type": {
        "category": "flame-thrower",
        "action": {
          "type": "direct",
          "action_delivery": {
            "type": "stream",
            "stream": "flamethrower-fire-stream",
            "duration": 160,
            "source_offset": [
              0.15,
              null
            ]
          }
        }
      },
      "cyclic_sound": {
        "begin_sound": [
          {
            "filename": "__base__/sound/fight/flamethrower-start.ogg",
            "volume": 0.7
          }
        ],
        "middle_sound": [
          {
            "filename": "__base__/sound/fight/flamethrower-mid.ogg",
            "volume": 0.7
          }
        ],
        "end_sound": [
          {
            "filename": "__base__/sound/fight/flamethrower-end.ogg",
            "volume": 0.7
          }
        ]
      }
    },
    "call_for_help_radius": 40
  },
  null,
  null,
  null,
  null,
  {
    "type": "sticker",
    "name": "fire-sticker",
    "flags": [
      "not-on-map"
    ],
    "animation": {
      "filename": "__base__/graphics/entity/fire-flame/fire-flame-13.png",
      "line_length": 8,
      "width": 60,
      "height": 118,
      "frame_count": 25,
      "axially_symmetrical": false,
      "direction_count": 1,
      "blend_mode": "normal",
      "animation_speed": 1,
      "scale": 0.2,
      "tint": {
        "r": 0.5,
        "g": 0.5,
        "b": 0.5,
        "a": 0.18
      }
    },
    "target_movement_modifier": 0.8,
    "damage_per_tick": {
      "type": "fire"
    },
    "spread_fire_entity": "fire-flame-on-tree",
    "fire_spread_cooldown": 30,
    "fire_spread_radius": 0.75
  },
  {
    "type": "stream",
    "name": "flamethrower-fire-stream",
    "flags": [
      "not-on-map"
    ],
    "stream_light": {
      "intensity": 1,
      "size": 4
    },
    "ground_light": {
      "intensity": 0.8,
      "size": 4
    },
    "smoke_sources": [
      {
        "name": "soft-fire-smoke",
        "frequency": 0.05,
        "position": [
          0,
          0
        ],
        "starting_frame_deviation": 60
      }
    ],
    "particle_buffer_size": 90,
    "particle_spawn_interval": 2,
    "particle_spawn_timeout": 8,
    "particle_start_alpha": 0.5,
    "particle_end_alpha": 1,
    "particle_start_scale": 0.2,
    "particle_loop_frame_count": 3,
    "particle_fade_out_threshold": 0.9,
    "particle_loop_exit_threshold": 0.25,
    "action": [
      {
        "type": "direct",
        "action_delivery": {
          "type": "instant",
          "target_effects": [
            {
              "type": "create-fire",
              "entity_name": "fire-flame"
            }
          ]
        }
      },
      {
        "type": "area",
        "perimeter": 2.5,
        "action_delivery": {
          "type": "instant",
          "target_effects": [
            {
              "type": "create-sticker",
              "sticker": "fire-sticker"
            },
            {
              "type": "damage",
              "damage": {
                "type": "fire"
              }
            }
          ]
        }
      }
    ],
    "spine_animation": {
      "filename": "__base__/graphics/entity/flamethrower-fire-stream/flamethrower-fire-stream-spine.png",
      "blend_mode": "additive",
      "line_length": 4,
      "width": 32,
      "height": 18,
      "frame_count": 32,
      "axially_symmetrical": false,
      "direction_count": 1,
      "animation_speed": 2,
      "shift": [
        0,
        0
      ]
    },
    "shadow": {
      "filename": "__base__/graphics/entity/acid-projectile-purple/acid-projectile-purple-shadow.png",
      "line_length": 5,
      "width": 28,
      "height": 16,
      "frame_count": 33,
      "priority": "high",
      "shift": [
        null,
        0.395
      ]
    },
    "particle": {
      "filename": "__base__/graphics/entity/flamethrower-fire-stream/flamethrower-explosion.png",
      "priority": "extra-high",
      "width": 64,
      "height": 64,
      "frame_count": 32,
      "line_length": 8
    }
  },
  {
    "type": "stream",
    "name": "handheld-flamethrower-fire-stream",
    "flags": [
      "not-on-map"
    ],
    "working_sound_disabled": [
      {
        "filename": "__base__/sound/fight/electric-beam.ogg",
        "volume": 0.7
      }
    ],
    "smoke_sources": [
      {
        "name": "soft-fire-smoke",
        "frequency": 0.05,
        "position": [
          0,
          0
        ],
        "starting_frame_deviation": 60
      }
    ],
    "stream_light": {
      "intensity": 1
    },
    "ground_light": {
      "intensity": 0.8
    },
    "particle_buffer_size": 65,
    "particle_spawn_interval": 2,
    "particle_spawn_timeout": 2,
    "particle_horizontal_speed": 0.25,
    "particle_horizontal_speed_deviation": 0.0035,
    "particle_start_alpha": 0.5,
    "particle_end_alpha": 1,
    "particle_start_scale": 0.2,
    "particle_loop_frame_count": 3,
    "particle_fade_out_threshold": 0.9,
    "particle_loop_exit_threshold": 0.25,
    "action": [
      {
        "type": "direct",
        "action_delivery": {
          "type": "instant",
          "target_effects": [
            {
              "type": "create-fire",
              "entity_name": "fire-flame"
            },
            {
              "type": "damage",
              "damage": {
                "type": "fire"
              }
            }
          ]
        }
      },
      {
        "type": "area",
        "perimeter": 2.5,
        "action_delivery": {
          "type": "instant",
          "target_effects": [
            {
              "type": "create-sticker",
              "sticker": "fire-sticker"
            }
          ]
        }
      }
    ],
    "spine_animation": {
      "filename": "__base__/graphics/entity/flamethrower-fire-stream/flamethrower-fire-stream-spine.png",
      "blend_mode": "additive",
      "line_length": 4,
      "width": 32,
      "height": 18,
      "frame_count": 32,
      "axially_symmetrical": false,
      "direction_count": 1,
      "animation_speed": 2,
      "scale": 0.75,
      "shift": [
        0,
        0
      ]
    },
    "shadow": {
      "filename": "__base__/graphics/entity/acid-projectile-purple/acid-projectile-purple-shadow.png",
      "line_length": 5,
      "width": 28,
      "height": 16,
      "frame_count": 33,
      "priority": "high",
      "scale": 0.5,
      "shift": [
        null,
        null
      ]
    },
    "particle": {
      "filename": "__base__/graphics/entity/flamethrower-fire-stream/flamethrower-explosion.png",
      "priority": "extra-high",
      "width": 64,
      "height": 64,
      "frame_count": 32,
      "line_length": 8,
      "scale": 0.8
    }
  },
  {
    "type": "mining-drill",
    "name": "pumpjack",
    "icon": "__base__/graphics/icons/pumpjack.png",
    "flags": [
      "placeable-neutral",
      "player-creation"
    ],
    "minable": {
      "mining_time": 1,
      "result": "pumpjack"
    },
    "resource_categories": [
      "basic-fluid"
    ],
    "max_health": 100,
    "corpse": "big-remnants",
    "dying_explosion": "medium-explosion",
    "collision_box": [
      [
        null,
        null
      ],
      [
        1.4,
        1.4
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        1.5,
        1.5
      ]
    ],
    "drawing_box": [
      [
        null,
        null
      ],
      [
        1.5,
        1.6
      ]
    ],
    "energy_source": {
      "type": "electric",
      "usage_priority": "secondary-input"
    },
    "fluid_box": {
      "base_area": 1,
      "base_level": 1,
      "pipe_connections": [
        {
          "positions": [
            [
              1,
              null
            ],
            [
              2,
              null
            ],
            [
              null,
              2
            ],
            [
              null,
              1
            ]
          ]
        }
      ]
    },
    "energy_usage": "90kW",
    "mining_speed": 1,
    "mining_power": 2,
    "resource_searching_radius": 0.49,
    "vector_to_place_result": [
      0,
      0
    ],
    "module_specification": {
      "module_slots": 2
    },
    "radius_visualisation_picture": {
      "filename": "__base__/graphics/entity/pumpjack/pumpjack-radius-visualization.png",
      "width": 12,
      "height": 12
    },
    "base_picture": {
      "sheet": {
        "filename": "__base__/graphics/entity/pumpjack/pumpjack-base.png",
        "priority": "extra-high",
        "width": 114,
        "height": 113,
        "shift": [
          0.1875,
          null
        ]
      }
    },
    "animations": {
      "north": {
        "priority": "extra-high",
        "width": 116,
        "height": 110,
        "line_length": 10,
        "shift": [
          0.125,
          null
        ],
        "filename": "__base__/graphics/entity/pumpjack/pumpjack-animation.png",
        "frame_count": 40,
        "animation_speed": 0.5
      }
    },
    "vehicle_impact_sound": {
      "filename": "__base__/sound/car-metal-impact.ogg",
      "volume": 0.65
    },
    "working_sound": {
      "sound": {
        "filename": "__base__/sound/pumpjack.ogg"
      },
      "apparent_volume": 1.5
    },
    "fast_replaceable_group": "pumpjack"
  },
  {
    "type": "projectile",
    "name": "laser",
    "flags": [
      "not-on-map"
    ],
    "acceleration": 0.005,
    "action": {
      "type": "direct",
      "action_delivery": {
        "type": "instant",
        "target_effects": [
          {
            "type": "create-entity",
            "entity_name": "laser-bubble"
          },
          {
            "type": "damage",
            "damage": {
              "amount": 5,
              "type": "laser"
            }
          }
        ]
      }
    },
    "light": {
      "intensity": 0.5,
      "size": 10
    },
    "animation": {
      "filename": "__base__/graphics/entity/laser/laser-to-tint-medium.png",
      "tint": {
        "r": 1,
        "g": 0,
        "b": 0
      },
      "frame_count": 1,
      "width": 12,
      "height": 33,
      "priority": "high",
      "blend_mode": "additive"
    },
    "speed": 0.15
  },
  {
    "type": "projectile",
    "name": "blue-laser",
    "flags": [
      "not-on-map"
    ],
    "acceleration": 0.005,
    "action": {
      "type": "direct",
      "action_delivery": {
        "type": "instant",
        "target_effects": [
          {
            "type": "create-entity",
            "entity_name": "laser-bubble"
          },
          {
            "type": "damage",
            "damage": {
              "amount": 10,
              "type": "laser"
            }
          }
        ]
      }
    },
    "light": {
      "intensity": 0.5,
      "size": 10
    },
    "animation": {
      "filename": "__base__/graphics/entity/blue-laser/blue-laser.png",
      "frame_count": 1,
      "width": 7,
      "height": 14,
      "priority": "high"
    },
    "speed": 0.15
  },
  {
    "type": "projectile",
    "name": "rocket",
    "flags": [
      "not-on-map"
    ],
    "acceleration": 0.005,
    "action": {
      "type": "direct",
      "action_delivery": {
        "type": "instant",
        "target_effects": [
          {
            "type": "create-entity",
            "entity_name": "explosion"
          },
          {
            "type": "damage",
            "damage": {
              "amount": 60,
              "type": "explosion"
            }
          },
          {
            "type": "create-entity",
            "entity_name": "small-scorchmark",
            "check_buildability": true
          }
        ]
      }
    },
    "light": {
      "intensity": 0.5,
      "size": 4
    },
    "animation": {
      "filename": "__base__/graphics/entity/rocket/rocket.png",
      "frame_count": 8,
      "line_length": 8,
      "width": 9,
      "height": 35,
      "shift": [
        0,
        0
      ],
      "priority": "high"
    },
    "shadow": {
      "filename": "__base__/graphics/entity/rocket/rocket-shadow.png",
      "frame_count": 1,
      "width": 7,
      "height": 24,
      "priority": "high",
      "shift": [
        0,
        0
      ]
    },
    "smoke": [
      {
        "name": "smoke-fast",
        "deviation": [
          0.15,
          0.15
        ],
        "frequency": 1,
        "position": [
          0,
          null
        ],
        "slow_down_factor": 1,
        "starting_frame": 3,
        "starting_frame_deviation": 5,
        "starting_frame_speed": 0,
        "starting_frame_speed_deviation": 5
      }
    ]
  },
  {
    "type": "projectile",
    "name": "explosive-rocket",
    "flags": [
      "not-on-map"
    ],
    "acceleration": 0.005,
    "action": {
      "type": "direct",
      "action_delivery": {
        "type": "instant",
        "target_effects": [
          {
            "type": "create-entity",
            "entity_name": "explosion"
          },
          {
            "type": "nested-result",
            "action": {
              "type": "area",
              "perimeter": 6.5,
              "action_delivery": {
                "type": "instant",
                "target_effects": [
                  {
                    "type": "damage",
                    "damage": {
                      "amount": 40,
                      "type": "explosion"
                    }
                  },
                  {
                    "type": "create-entity",
                    "entity_name": "explosion"
                  }
                ]
              }
            }
          }
        ]
      }
    },
    "light": {
      "intensity": 0.5,
      "size": 4
    },
    "animation": {
      "filename": "__base__/graphics/entity/rocket/rocket.png",
      "frame_count": 8,
      "line_length": 8,
      "width": 9,
      "height": 35,
      "shift": [
        0,
        0
      ],
      "priority": "high"
    },
    "shadow": {
      "filename": "__base__/graphics/entity/rocket/rocket-shadow.png",
      "frame_count": 1,
      "width": 7,
      "height": 24,
      "priority": "high",
      "shift": [
        0,
        0
      ]
    },
    "smoke": [
      {
        "name": "smoke-fast",
        "deviation": [
          0.15,
          0.15
        ],
        "frequency": 1,
        "position": [
          0,
          null
        ],
        "slow_down_factor": 1,
        "starting_frame": 3,
        "starting_frame_deviation": 5,
        "starting_frame_speed": 0,
        "starting_frame_speed_deviation": 5
      }
    ]
  },
  {
    "type": "projectile",
    "name": "shotgun-pellet",
    "flags": [
      "not-on-map"
    ],
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.05,
        0.25
      ]
    ],
    "acceleration": 0,
    "direction_only": true,
    "action": {
      "type": "direct",
      "action_delivery": {
        "type": "instant",
        "target_effects": {
          "type": "damage",
          "damage": {
            "amount": 4,
            "type": "physical"
          }
        }
      }
    },
    "animation": {
      "filename": "__base__/graphics/entity/bullet/bullet.png",
      "frame_count": 1,
      "width": 3,
      "height": 50,
      "priority": "high"
    }
  },
  {
    "type": "projectile",
    "name": "piercing-shotgun-pellet",
    "flags": [
      "not-on-map"
    ],
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.05,
        0.25
      ]
    ],
    "acceleration": 0,
    "direction_only": true,
    "action": {
      "type": "direct",
      "action_delivery": {
        "type": "instant",
        "target_effects": {
          "type": "damage",
          "damage": {
            "amount": 6,
            "type": "physical"
          }
        }
      }
    },
    "animation": {
      "filename": "__base__/graphics/entity/piercing-bullet/piercing-bullet.png",
      "frame_count": 1,
      "width": 3,
      "height": 50,
      "priority": "high"
    }
  },
  {
    "type": "projectile",
    "name": "cannon-projectile",
    "flags": [
      "not-on-map"
    ],
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.05,
        1.1
      ]
    ],
    "acceleration": 0,
    "direction_only": true,
    "piercing_damage": 300,
    "action": {
      "type": "direct",
      "action_delivery": {
        "type": "instant",
        "target_effects": [
          {
            "type": "damage",
            "damage": {
              "amount": 150,
              "type": "physical"
            }
          },
          {
            "type": "damage",
            "damage": {
              "amount": 50,
              "type": "explosion"
            }
          }
        ]
      }
    },
    "final_action": {
      "type": "direct",
      "action_delivery": {
        "type": "instant",
        "target_effects": [
          {
            "type": "create-entity",
            "entity_name": "small-scorchmark",
            "check_buildability": true
          }
        ]
      }
    },
    "animation": {
      "filename": "__base__/graphics/entity/bullet/bullet.png",
      "frame_count": 1,
      "width": 3,
      "height": 50,
      "priority": "high"
    }
  },
  {
    "type": "projectile",
    "name": "explosive-cannon-projectile",
    "flags": [
      "not-on-map"
    ],
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.05,
        1.1
      ]
    ],
    "acceleration": 0,
    "direction_only": true,
    "piercing_damage": 30,
    "action": {
      "type": "direct",
      "action_delivery": {
        "type": "instant",
        "target_effects": [
          {
            "type": "damage",
            "damage": {
              "amount": 30,
              "type": "physical"
            }
          }
        ]
      }
    },
    "final_action": {
      "type": "direct",
      "action_delivery": {
        "type": "instant",
        "target_effects": [
          {
            "type": "create-entity",
            "entity_name": "big-explosion",
            "check_buildability": true
          },
          {
            "type": "nested-result",
            "action": {
              "type": "area",
              "perimeter": 4,
              "action_delivery": {
                "type": "instant",
                "target_effects": [
                  {
                    "type": "damage",
                    "damage": {
                      "amount": 80,
                      "type": "explosion"
                    }
                  },
                  {
                    "type": "create-entity",
                    "entity_name": "explosion"
                  }
                ]
              }
            }
          }
        ]
      }
    },
    "animation": {
      "filename": "__base__/graphics/entity/bullet/bullet.png",
      "frame_count": 1,
      "width": 3,
      "height": 50,
      "priority": "high"
    }
  },
  {
    "type": "projectile",
    "name": "grenade",
    "flags": [
      "not-on-map"
    ],
    "acceleration": 0.005,
    "action": [
      {
        "type": "direct",
        "action_delivery": {
          "type": "instant",
          "target_effects": [
            {
              "type": "create-entity",
              "entity_name": "medium-explosion"
            },
            {
              "type": "create-entity",
              "entity_name": "small-scorchmark",
              "check_buildability": true
            }
          ]
        }
      },
      {
        "type": "area",
        "perimeter": 6.5,
        "action_delivery": {
          "type": "instant",
          "target_effects": [
            {
              "type": "damage",
              "damage": {
                "amount": 25,
                "type": "explosion"
              }
            },
            {
              "type": "create-entity",
              "entity_name": "explosion"
            }
          ]
        }
      }
    ],
    "light": {
      "intensity": 0.5,
      "size": 4
    },
    "animation": {
      "filename": "__base__/graphics/entity/grenade/grenade.png",
      "frame_count": 1,
      "width": 24,
      "height": 24,
      "priority": "high"
    },
    "shadow": {
      "filename": "__base__/graphics/entity/grenade/grenade-shadow.png",
      "frame_count": 1,
      "width": 24,
      "height": 32,
      "priority": "high"
    }
  },
  {
    "type": "projectile",
    "name": "cluster-grenade",
    "flags": [
      "not-on-map"
    ],
    "acceleration": 0.005,
    "action": [
      {
        "type": "direct",
        "action_delivery": {
          "type": "instant",
          "target_effects": [
            {
              "type": "create-entity",
              "entity_name": "explosion"
            },
            {
              "type": "create-entity",
              "entity_name": "small-scorchmark",
              "check_buildability": true
            }
          ]
        }
      },
      {
        "type": "cluster",
        "cluster_count": 7,
        "distance": 4,
        "distance_deviation": 3,
        "action_delivery": {
          "type": "projectile",
          "projectile": "grenade",
          "direction_deviation": 0.6,
          "starting_speed": 0.25,
          "starting_speed_deviation": 0.3
        }
      }
    ],
    "light": {
      "intensity": 0.5,
      "size": 4
    },
    "animation": {
      "filename": "__base__/graphics/entity/cluster-grenade/cluster-grenade.png",
      "frame_count": 1,
      "width": 24,
      "height": 24,
      "priority": "high"
    },
    "shadow": {
      "filename": "__base__/graphics/entity/grenade/grenade-shadow.png",
      "frame_count": 1,
      "width": 24,
      "height": 32,
      "priority": "high"
    }
  },
  {
    "type": "projectile",
    "name": "defender-capsule",
    "flags": [
      "not-on-map"
    ],
    "acceleration": 0.005,
    "action": {
      "type": "direct",
      "action_delivery": {
        "type": "instant",
        "target_effects": [
          {
            "type": "create-entity",
            "show_in_tooltip": true,
            "entity_name": "defender"
          }
        ]
      }
    },
    "light": {
      "intensity": 0.5,
      "size": 4
    },
    "animation": {
      "filename": "__base__/graphics/entity/combat-robot-capsule/defender-capsule.png",
      "frame_count": 1,
      "width": 32,
      "height": 32,
      "priority": "high"
    },
    "shadow": {
      "filename": "__base__/graphics/entity/combat-robot-capsule/combat-robot-capsule-shadow.png",
      "frame_count": 1,
      "width": 32,
      "height": 32,
      "priority": "high"
    }
  },
  {
    "type": "projectile",
    "name": "distractor-capsule",
    "flags": [
      "not-on-map"
    ],
    "acceleration": 0.005,
    "action": {
      "type": "direct",
      "action_delivery": {
        "type": "instant",
        "target_effects": [
          {
            "type": "create-entity",
            "show_in_tooltip": true,
            "entity_name": "distractor",
            "offsets": [
              [
                0.5,
                null
              ],
              [
                null,
                null
              ],
              [
                0,
                0.5
              ]
            ]
          }
        ]
      }
    },
    "light": {
      "intensity": 0.5,
      "size": 4
    },
    "animation": {
      "filename": "__base__/graphics/entity/combat-robot-capsule/distractor-capsule.png",
      "frame_count": 1,
      "width": 32,
      "height": 32,
      "priority": "high"
    },
    "shadow": {
      "filename": "__base__/graphics/entity/combat-robot-capsule/combat-robot-capsule-shadow.png",
      "frame_count": 1,
      "width": 32,
      "height": 32,
      "priority": "high"
    }
  },
  {
    "type": "projectile",
    "name": "destroyer-capsule",
    "flags": [
      "not-on-map"
    ],
    "acceleration": 0.005,
    "action": {
      "type": "direct",
      "action_delivery": {
        "type": "instant",
        "target_effects": {
          "type": "create-entity",
          "show_in_tooltip": true,
          "entity_name": "destroyer",
          "offsets": [
            [
              null,
              null
            ],
            [
              null,
              0.7
            ],
            [
              0.7,
              null
            ],
            [
              0.7,
              0.7
            ],
            [
              0,
              0
            ]
          ]
        }
      }
    },
    "light": {
      "intensity": 0.5,
      "size": 4
    },
    "animation": {
      "filename": "__base__/graphics/entity/combat-robot-capsule/destroyer-capsule.png",
      "frame_count": 1,
      "width": 32,
      "height": 32,
      "priority": "high"
    },
    "shadow": {
      "filename": "__base__/graphics/entity/combat-robot-capsule/combat-robot-capsule-shadow.png",
      "frame_count": 1,
      "width": 32,
      "height": 32,
      "priority": "high"
    }
  },
  {
    "type": "projectile",
    "name": "poison-capsule",
    "flags": [
      "not-on-map"
    ],
    "acceleration": 0.005,
    "action": {
      "type": "direct",
      "action_delivery": {
        "type": "instant",
        "target_effects": {
          "type": "create-entity",
          "entity_name": "poison-cloud"
        }
      }
    },
    "light": {
      "intensity": 0.5,
      "size": 4
    },
    "animation": {
      "filename": "__base__/graphics/entity/poison-capsule/poison-capsule.png",
      "frame_count": 1,
      "width": 32,
      "height": 32,
      "priority": "high"
    },
    "shadow": {
      "filename": "__base__/graphics/entity/poison-capsule/poison-capsule-shadow.png",
      "frame_count": 1,
      "width": 32,
      "height": 32,
      "priority": "high"
    }
  },
  {
    "type": "projectile",
    "name": "slowdown-capsule",
    "flags": [
      "not-on-map"
    ],
    "acceleration": 0.005,
    "action": {
      "type": "area",
      "perimeter": 9,
      "action_delivery": {
        "type": "instant",
        "target_effects": {
          "type": "create-sticker",
          "sticker": "slowdown-sticker"
        }
      }
    },
    "light": {
      "intensity": 0.5,
      "size": 4
    },
    "animation": {
      "filename": "__base__/graphics/entity/slowdown-capsule/slowdown-capsule.png",
      "frame_count": 1,
      "width": 32,
      "height": 32,
      "priority": "high"
    },
    "shadow": {
      "filename": "__base__/graphics/entity/slowdown-capsule/slowdown-capsule-shadow.png",
      "frame_count": 1,
      "width": 32,
      "height": 32,
      "priority": "high"
    }
  },
  {
    "type": "resource",
    "name": "crude-oil",
    "icon": "__base__/graphics/icons/crude-oil.png",
    "flags": [
      "placeable-neutral"
    ],
    "category": "basic-fluid",
    "order": "a-b-a",
    "infinite": true,
    "minimum": 1500,
    "normal": 15000,
    "minable": {
      "hardness": 1,
      "mining_time": 1,
      "results": [
        {
          "type": "fluid",
          "name": "crude-oil",
          "amount_min": 1,
          "amount_max": 1,
          "probability": 1
        }
      ]
    },
    "collision_box": [
      [
        null,
        null
      ],
      [
        1.4,
        1.4
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.5,
        0.5
      ]
    ],
    "autoplace": {
      "control": "crude-oil",
      "sharpness": 0.99,
      "max_probability": 0.035,
      "richness_base": 6000,
      "richness_multiplier": 30000,
      "richness_multiplier_distance_bonus": 10,
      "coverage": 0.02,
      "peaks": [
        {
          "noise_layer": "crude-oil",
          "noise_persistence": 0.4
        }
      ]
    },
    "stage_counts": [
      0
    ],
    "stages": {
      "sheet": {
        "filename": "__base__/graphics/entity/crude-oil/crude-oil.png",
        "priority": "extra-high",
        "width": 75,
        "height": 61,
        "frame_count": 4,
        "variation_count": 1
      }
    },
    "map_color": {
      "r": 0.8,
      "g": 0.1,
      "b": 0.8
    },
    "map_grid": false
  },
  {
    "type": "turret",
    "name": "medium-worm-turret",
    "icon": "__base__/graphics/icons/medium-worm.png",
    "flags": [
      "placeable-player",
      "placeable-enemy",
      "not-repairable",
      "breaths-air"
    ],
    "order": "b-b-e",
    "subgroup": "enemies",
    "max_health": 350,
    "resistances": [
      {
        "type": "physical",
        "decrease": 4
      },
      {
        "type": "explosion",
        "decrease": 5,
        "percent": 15
      }
    ],
    "healing_per_tick": 0.015,
    "collision_box": [
      [
        null,
        null
      ],
      [
        1.1,
        1
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        1.1,
        1
      ]
    ],
    "shooting_cursor_size": 3.5,
    "rotation_speed": 1,
    "corpse": "medium-worm-corpse",
    "dying_explosion": "blood-explosion-big",
    "folded_speed": 0.01,
    "prepare_range": 30,
    "preparing_speed": 0.025,
    "prepared_speed": 0.015,
    "starting_attack_speed": 0.03,
    "ending_attack_speed": 0.03,
    "folding_speed": 0.015,
    "attack_parameters": {
      "type": "projectile",
      "ammo_category": "rocket",
      "cooldown": 100,
      "range": 20,
      "projectile_creation_distance": 1.9,
      "damage_modifier": 3,
      "ammo_type": {
        "category": "biological",
        "action": {
          "type": "direct",
          "action_delivery": {
            "type": "projectile",
            "projectile": "acid-projectile-purple",
            "starting_speed": 0.5
          }
        }
      }
    },
    "build_base_evolution_requirement": 0.3,
    "call_for_help_radius": 40
  },
  {
    "type": "turret",
    "name": "big-worm-turret",
    "icon": "__base__/graphics/icons/big-worm.png",
    "flags": [
      "placeable-player",
      "placeable-enemy",
      "not-repairable",
      "breaths-air"
    ],
    "max_health": 500,
    "order": "b-b-f",
    "subgroup": "enemies",
    "resistances": [
      {
        "type": "physical",
        "decrease": 8
      },
      {
        "type": "explosion",
        "decrease": 10,
        "percent": 30
      }
    ],
    "healing_per_tick": 0.02,
    "collision_box": [
      [
        null,
        null
      ],
      [
        1.4,
        1.2
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        1.4,
        1.2
      ]
    ],
    "shooting_cursor_size": 4,
    "rotation_speed": 1,
    "corpse": "big-worm-corpse",
    "dying_explosion": "blood-explosion-big",
    "inventory_size": 2,
    "folded_speed": 0.01,
    "prepare_range": 30,
    "preparing_speed": 0.025,
    "prepared_speed": 0.015,
    "starting_attack_speed": 0.03,
    "ending_attack_speed": 0.03,
    "folding_speed": 0.015,
    "attack_parameters": {
      "type": "projectile",
      "ammo_category": "rocket",
      "cooldown": 100,
      "range": 25,
      "projectile_creation_distance": 2.1,
      "damage_modifier": 6,
      "ammo_type": {
        "category": "biological",
        "action": {
          "type": "direct",
          "action_delivery": {
            "type": "projectile",
            "projectile": "acid-projectile-purple",
            "starting_speed": 0.5
          }
        }
      }
    },
    "build_base_evolution_requirement": 0.5,
    "call_for_help_radius": 40
  },
  {
    "type": "electric-turret",
    "name": "laser-turret",
    "icon": "__base__/graphics/icons/laser-turret.png",
    "flags": [
      "placeable-player",
      "placeable-enemy",
      "player-creation"
    ],
    "minable": {
      "mining_time": 0.5,
      "result": "laser-turret"
    },
    "max_health": 1000,
    "corpse": "medium-remnants",
    "collision_box": [
      [
        null,
        null
      ],
      [
        0.7,
        0.7
      ]
    ],
    "selection_box": [
      [
        null,
        null
      ],
      [
        1,
        1
      ]
    ],
    "rotation_speed": 0.01,
    "preparing_speed": 0.05,
    "dying_explosion": "medium-explosion",
    "folding_speed": 0.05,
    "energy_source": {
      "type": "electric",
      "buffer_capacity": "801kJ",
      "input_flow_limit": "9600kW",
      "drain": "24kW",
      "usage_priority": "primary-input"
    },
    "folded_animation": {
      "layers": [
        null,
        null,
        null
      ]
    },
    "preparing_animation": {
      "layers": [
        null,
        null,
        null
      ]
    },
    "prepared_animation": {
      "layers": [
        {
          "filename": "__base__/graphics/entity/laser-turret/laser-turret-gun.png",
          "line_length": 8,
          "width": 68,
          "height": 68,
          "frame_count": 1,
          "axially_symmetrical": false,
          "direction_count": 64,
          "shift": [
            0.0625,
            null
          ]
        },
        {
          "filename": "__base__/graphics/entity/laser-turret/laser-turret-gun-mask.png",
          "flags": [
            "mask"
          ],
          "line_length": 8,
          "width": 54,
          "height": 44,
          "frame_count": 1,
          "axially_symmetrical": false,
          "apply_runtime_tint": true,
          "direction_count": 64,
          "shift": [
            0.0625,
            null
          ]
        },
        {
          "filename": "__base__/graphics/entity/laser-turret/laser-turret-gun-shadow.png",
          "line_length": 8,
          "width": 88,
          "height": 52,
          "frame_count": 1,
          "axially_symmetrical": false,
          "direction_count": 64,
          "draw_as_shadow": true,
          "shift": [
            1.59375,
            0
          ]
        }
      ]
    },
    "folding_animation": {
      "layers": [
        null,
        null,
        null
      ]
    },
    "base_picture": {
      "layers": [
        {
          "filename": "__base__/graphics/entity/laser-turret/laser-turret-base.png",
          "priority": "high",
          "width": 98,
          "height": 82,
          "axially_symmetrical": false,
          "direction_count": 1,
          "frame_count": 1,
          "shift": [
            0.109375,
            0.03125
          ]
        },
        {
          "filename": "__base__/graphics/entity/laser-turret/laser-turret-base-mask.png",
          "flags": [
            "mask"
          ],
          "line_length": 1,
          "width": 54,
          "height": 46,
          "frame_count": 1,
          "axially_symmetrical": false,
          "apply_runtime_tint": true,
          "direction_count": 1,
          "shift": [
            0.046875,
            null
          ]
        }
      ]
    },
    "vehicle_impact_sound": {
      "filename": "__base__/sound/car-metal-impact.ogg",
      "volume": 0.65
    },
    "attack_parameters": {
      "type": "projectile",
      "ammo_category": "electric",
      "cooldown": 20,
      "projectile_center": [
        0,
        null
      ],
      "projectile_creation_distance": 1.4,
      "range": 25,
      "damage_modifier": 4,
      "ammo_type": {
        "type": "projectile",
        "category": "laser-turret",
        "energy_consumption": "800kJ",
        "action": [
          {
            "type": "direct",
            "action_delivery": [
              {
                "type": "projectile",
                "projectile": "laser",
                "starting_speed": 0.28
              }
            ]
          }
        ]
      }
    },
    "call_for_help_radius": 40
  },
  {
    "type": "corpse",
    "name": "medium-worm-corpse",
    "icon": "__base__/graphics/icons/medium-worm-corpse.png",
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.8,
        0.8
      ]
    ],
    "selectable_in_game": false,
    "subgroup": "corpses",
    "order": "c[corpse]-c[worm]-b[medium]",
    "flags": [
      "placeable-neutral",
      "placeable-off-grid",
      "building-direction-8-way",
      "not-repairable",
      "not-on-map"
    ],
    "dying_speed": 0.01,
    "final_render_layer": "corpse"
  },
  {
    "type": "corpse",
    "name": "big-worm-corpse",
    "icon": "__base__/graphics/icons/big-worm-corpse.png",
    "selection_box": [
      [
        null,
        null
      ],
      [
        0.8,
        0.8
      ]
    ],
    "selectable_in_game": false,
    "subgroup": "corpses",
    "order": "c[corpse]-c[worm]-c[big]",
    "flags": [
      "placeable-neutral",
      "placeable-off-grid",
      "building-direction-8-way",
      "not-repairable",
      "not-on-map"
    ],
    "dying_speed": 0.01,
    "final_render_layer": "corpse"
  }
];