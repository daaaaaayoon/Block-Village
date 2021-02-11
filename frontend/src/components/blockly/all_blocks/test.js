[
  {
    name: '시작',
    colour: '#C30D23',
    blocks: [
      1{type: 'start_button',},  -- 0 
      2{type: 'end_button',}, -- 0
    ],
  },
  {
    name: '판단',
    colour: '#FFA31D',
    blocks: [
      3{type: 'block_judgment_equals',}, -- 0
      4{type: 'block_judgment_strictinequality_left',}, -- 0
      5{type: 'block_judgment_strictinequality_right',}, -- 0
      6{type: 'block_judgment_notequal',},
      7{type: 'block_judgment_strictinequality_leftequal',},
      8{type: 'block_judgment_strictinequality_rightequal',},
      9{type: 'block_judgment_compare_and',},
      10{type: 'block_judgment_compare_or',},
      11{type: 'block_judgment_compare_not',},
    ],
  },
  {
    name: '움직임',
    colour: '#8FC31F',
    blocks: [
      12{type: 'move_forward_1'}, -- 0
      13{type: 'turn_right'}, -- 0
      14{type: 'turn_left'}, -- 0
      15{type: 'turn_back'},
      16{type: 'move_x',},
      17{type: 'move_y'},
      18{type: 'point_x'},
      19{type: 'point_y'},
      20{type: 'point_x_y'},
      21{type: 'turn_angle'},
      22{type: 'set_angle'},
      23{type: 'set_angle_move'},
      24{type: 'move_forward'},
    ],
  },
  {
    name: '흐름',
    colour: '#55CFFF',
    blocks: [
      25{type: 'input',}, -- 0
      26{type: 'repeat_times'},
      27{type: 'repeat'},
      28{type: 'do_while'},
      30{type: 'while_not'},
      31{type: 'break'},
      32{type: 'condition'},
      33{type: 'if_else'},
      34{type: 'if_else_double'},
      35{type: 'if_else_triple'},
      36{type: 'switch_input'},
      37{type: 'input_value'},
    ]
  },
  {
    name: '계산',
    colour: '#1060FF',
    blocks: [
      38{type: 'number'}, -- 0
      39{type: 'addition'}, -- 0
      40{type: 'subtraction'}, -- 0
      41{type: 'multiplication'},
      42{type: 'division'},
      43{type: 'random_num'},
      44{type: 'quotient'},
      45{type: 'remainder'},
      46{type: 'square'},
      47{type: 'sqrt'},
      48{type: 'integer'},
      49{type: 'roundup'},
      50{type: 'round'},
      51{type: 'abs_val'},
    ]
  },
  {
    name: '그리기',
    colour: '#7D10C4',
    blocks: [
      52{type: 'pen_down'},
      53{type: 'pen_up'},
      54{type: 'draw_line'},
      55{type: 'rotate_pen'},
      56{type: 'change_colour'},
    ]
  },
  {
    name: '함수',
    colour: '#CC6666',
    blocks: [
      57{type: 'variable'},
      58{type: 'set_variable'},
      59{type: 'change_variable'},        
    ]
  },
]

