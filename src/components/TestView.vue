<template>
  <div>
    <el-descriptions title="MCU信息">
      <el-descriptions-item label="型号">CMS79F113</el-descriptions-item>
    </el-descriptions>
    <el-form ref="form" label-width="200px" :inline="true"> 
      <el-form-item label="" width="200">
     
          RA7: <el-select v-model="GPIOA[0].value" placeholder="请选择" @change="selectChanged" size="mini" clearable style="width:110px;" disabled>
            <el-option-group v-for="(modes,index) in FullModes" :key="index" :label="modes.type">
              <el-option v-for="(mode,index) in modes.options" :key="index" :label="mode.label" :value="mode.value" :disabled="mode.disabled">
              </el-option>
              </el-option-group>
          </el-select>
          RA6: <el-select v-model="GPIOA[1].value" placeholder="请选择" @change="selectChanged" size="mini" clearable style="width:110px;">
              <el-option-group v-for="(modes,index) in FullModes" :key="index" :label="modes.type">
              <el-option v-for="(mode,index) in modes.options" :key="index" :label="mode.label" :value="mode.value" :disabled="mode.disabled">
              </el-option>
            </el-option-group>
          </el-select>
          RA5: <el-select v-model="GPIOA[2].value" placeholder="请选择" @change="selectChanged" size="mini" clearable style="width:110px;">
              <el-option-group v-for="(modes,index) in FullModes" :key="index" :label="modes.type">
              <el-option v-for="(mode,index) in modes.options" :key="index" :label="mode.label" :value="mode.value" :disabled="mode.disabled">
              </el-option>
            </el-option-group>
          </el-select>
          RA4: <el-select v-model="GPIOA[3].value" placeholder="请选择" @change="selectChanged" size="mini" clearable style="width:110px;">
              <el-option-group v-for="(modes,index) in FullModes" :key="index" :label="modes.type">
              <el-option v-for="(mode,index) in modes.options" :key="index" :label="mode.label" :value="mode.value" :disabled="mode.disabled">
              </el-option>
            </el-option-group>
          </el-select>
          RA3: <el-select v-model="GPIOA[4].value" placeholder="请选择" @change="selectChanged" size="mini" clearable style="width:110px;">
              <el-option-group v-for="(modes,index) in FullModes" :key="index" :label="modes.type">
              <el-option v-for="(mode,index) in modes.options" :key="index" :label="mode.label" :value="mode.value" :disabled="mode.disabled">
              </el-option>
            </el-option-group>
          </el-select>
          RA2: <el-select v-model="GPIOA[5].value" placeholder="请选择" @change="selectChanged" size="mini" clearable style="width:110px;">
            <el-option-group v-for="(modes,index) in FullModes" :key="index" :label="modes.type">
              <el-option v-for="(mode,index) in modes.options" :key="index" :label="mode.label" :value="mode.value" :disabled="mode.disabled">
              </el-option>
            </el-option-group>
          </el-select>
          RA1: <el-select v-model="GPIOA[6].value" placeholder="请选择" @change="selectChanged" size="mini" clearable style="width:110px;">
              <el-option-group v-for="(modes,index) in FullModes" :key="index" :label="modes.type">
              <el-option v-for="(mode,index) in modes.options" :key="index" :label="mode.label" :value="mode.value" :disabled="mode.disabled">
              </el-option>
            </el-option-group>
          </el-select>
          RA0: <el-select v-model="GPIOA[7].value" placeholder="请选择" @change="selectChanged" size="mini" clearable style="width:110px;">
              <el-option-group v-for="(modes,index) in FullModes" :key="index" :label="modes.type">
              <el-option v-for="(mode,index) in modes.options" :key="index" :label="mode.label" :value="mode.value" :disabled="mode.disabled">
              </el-option>
            </el-option-group>
          </el-select>
      
      <br/>
      
          RB7: <el-select v-model="GPIOB[0].value" placeholder="请选择" @change="selectChanged" size="mini" clearable style="width:110px;" disabled>
              <el-option-group v-for="(modes,index) in FullModes" :key="index" :label="modes.type">
              <el-option v-for="(mode,index) in modes.options" :key="index" :label="mode.label" :value="mode.value" :disabled="mode.disabled">
              </el-option>
            </el-option-group>
          </el-select>
          RB6: <el-select v-model="GPIOB[1].value" placeholder="请选择" @change="selectChanged" size="mini" clearable style="width:110px;">
              <el-option-group v-for="(modes,index) in FullModes" :key="index" :label="modes.type">
              <el-option v-for="(mode,index) in modes.options" :key="index" :label="mode.label" :value="mode.value" :disabled="mode.disabled">
              </el-option>
            </el-option-group>
          </el-select>
          RB5: <el-select v-model="GPIOB[2].value" placeholder="请选择" @change="selectChanged" size="mini" clearable style="width:110px;">
              <el-option-group v-for="(modes,index) in FullModes" :key="index" :label="modes.type">
              <el-option v-for="(mode,index) in modes.options" :key="index" :label="mode.label" :value="mode.value" :disabled="mode.disabled">
              </el-option>
            </el-option-group>
          </el-select>
          RB4: <el-select v-model="GPIOB[3].value" placeholder="请选择" @change="selectChanged" size="mini" clearable style="width:110px;">
              <el-option-group v-for="(modes,index) in FullModes" :key="index" :label="modes.type">
              <el-option v-for="(mode,index) in modes.options" :key="index" :label="mode.label" :value="mode.value" :disabled="mode.disabled">
              </el-option>
            </el-option-group>
          </el-select>
          RB3: <el-select v-model="GPIOB[4].value" placeholder="请选择" @change="selectChanged" size="mini" clearable style="width:110px;">
              <el-option-group v-for="(modes,index) in FullModes" :key="index" :label="modes.type">
              <el-option v-for="(mode,index) in modes.options" :key="index" :label="mode.label" :value="mode.value" :disabled="mode.disabled">
              </el-option>
            </el-option-group>
          </el-select>
          RB2: <el-select v-model="GPIOB[5].value" placeholder="请选择" @change="selectChanged" size="mini" clearable style="width:110px;">
              <el-option-group v-for="(modes,index) in NoAnalg_PDModes" :key="index" :label="modes.type">
              <el-option v-for="(mode,index) in modes.options" :key="index" :label="mode.label" :value="mode.value" :disabled="mode.disabled">
              </el-option>
            </el-option-group>
          </el-select>
          RB1: <el-select v-model="GPIOB[6].value" placeholder="请选择" @change="selectChanged" size="mini" clearable style="width:110px;">
              <el-option-group v-for="(modes,index) in FullModes" :key="index" :label="modes.type">
              <el-option v-for="(mode,index) in modes.options" :key="index" :label="mode.label" :value="mode.value" :disabled="mode.disabled">
              </el-option>
            </el-option-group>
          </el-select>
          RB0: <el-select v-model="GPIOB[7].value" placeholder="请选择" @change="selectChanged" size="mini" clearable style="width:110px;">
              <el-option-group v-for="(modes,index) in FullModes" :key="index" :label="modes.type">
              <el-option v-for="(mode,index) in modes.options" :key="index" :label="mode.label" :value="mode.value" :disabled="mode.disabled">
              </el-option>
            </el-option-group>
          </el-select>
      
    </el-form-item>
        <el-form-item label="" width="200">
            <el-table :data="IOREG" height="530" size="small" border stripe
              style="width: 100%" :cell-style="cellStyle" :row-class-name="display" 
                  :header-cell-style="{textAlign: 'center'}" >                    <!-- :span-method="arraySpanMethod"--> 
              <el-table-column prop="name" label="Reg" width="70">
                  <template slot-scope="scope"> 
                      <el-tooltip placement="top"  effect="light">
                          <div slot="content">{{ scope.row.description }}</div>
                          <span>{{scope.row.name}}</span>>
                      </el-tooltip>
                  </template>
              </el-table-column>                            
              <el-table-column prop="CurrentBit[0]" label="Bit7" align="center" width="60"> </el-table-column>
              <el-table-column prop="CurrentBit[1]" label="Bit6" align="center" width="60"> </el-table-column>
              <el-table-column prop="CurrentBit[2]" label="Bit5" align="center" width="60"> </el-table-column>
              <el-table-column prop="CurrentBit[3]" label="Bit4" align="center" width="60"> </el-table-column>
              <el-table-column prop="CurrentBit[4]" label="Bit3" align="center" width="60"> </el-table-column>
              <el-table-column prop="CurrentBit[5]" label="Bit2" align="center" width="60"> </el-table-column>
              <el-table-column prop="CurrentBit[6]" label="Bit1" align="center" width="60"> </el-table-column>
              <el-table-column prop="CurrentBit[7]" label="Bit0" align="center" width="60"> </el-table-column>
              <el-table-column prop="value" label="Value" width="60"> </el-table-column>       
          </el-table>
        </el-form-item>
      </el-form>
      <el-form ref="form" label-width="100px" :inline="true">
        <el-form-item label="RC振荡: ">
        <el-select v-model="Freq.Fosc" placeholder="请选择" @change="FreqSelectChanged" clearable style="width:100px;" >
              <el-option v-for="(freq,index) in OSC_Freq" :key="index" :label="freq.label" :value="freq.value" :disabled="freq.disabled">
              </el-option>           
          </el-select>
        </el-form-item>
        <el-form-item label="系统时钟:">
        <el-select v-model="Sys.div" placeholder="请选择" @change="FreqSelectChanged" clearable style="width:100px;" >
            <el-option v-for="(freq,index) in Sys_Freq" :key="index" :label="freq.label" :value="freq.value" :disabled="freq.disabled">
            </el-option>           
        </el-select>
      </el-form-item>
      <el-form-item label="预分频:">
         <el-select v-model="Freq.select" placeholder="请选择" @change="FreqSelectChanged" clearable style="width:100px;" >
            <el-option v-for="(select,index) in DivSelect" :key="index" :label="select.label" :value="select.value" >
            </el-option>           
        </el-select>
      </el-form-item>
      <el-form-item label="看门狗周期:">
         <el-select v-model="WDT.div" placeholder="请选择" @change="FreqSelectChanged" clearable style="width:100px;" >
            <el-option v-for="(select,index) in WdtPerSelect" :key="index" :label="select.label" :value="select.value" :disabled="select.disabled">
            </el-option>           
        </el-select>
      </el-form-item>
      <el-form-item label="看门狗使能:">
         <el-select v-model="WDT.Enable" placeholder="请选择" @change="FreqSelectChanged" clearable style="width:100px;" >
            <el-option v-for="(select,index) in EnableSelect" :key="index" :label="select.label" :value="select.value" :disabled="select.disabled">
            </el-option>           
        </el-select>
      </el-form-item>
      </el-form>
    
      <el-form ref="form" label-width="100px" :inline="true">
        <el-form-item label="TIM0频率: ">
           <el-select v-model="TIM0.div" placeholder="请选择" @change="FreqSelectChanged" clearable style="width:100px;" >
            <el-option v-for="(select,index) in Time0_Freq" :key="index" :label="select.label" :value="select.value" :disabled="select.disabled">
            </el-option>           
          </el-select>
        </el-form-item>
        <el-form-item label="TIM0周期: ">
          <el-input placeholder="请输入内容" v-model="TIM0.arr" @change="FreqSelectChanged"   clearable>
            <!-- <template slot="append">* {{  }}ms</template> -->
          </el-input>
        </el-form-item>
        <el-form-item label="">
          <el-button type="text">* </el-button>
          <el-button>{{TIM0.unit}}</el-button>
          <el-button type="text">us</el-button>
          <el-button type="text">= </el-button>
          <el-button>{{TIM0.peroid}}</el-button>
          <el-button type="text">us</el-button>
        </el-form-item>
        <el-form-item label="TIM0使能:">
         <el-select v-model="TIM0.Enable" placeholder="请选择" @change="FreqSelectChanged" clearable style="width:100px;" >
            <el-option v-for="(select,index) in EnableSelect" :key="index" :label="select.label" :value="select.value" :disabled="select.disabled">
            </el-option>           
        </el-select>
      </el-form-item>
      </el-form>
      
      <el-form ref="form" label-width="90px" :inline="true">
        <el-form-item label="TIM2预分频:">
          <el-select v-model="Freq.TIM2_Div" placeholder="请选择" @change="FreqSelectChanged" clearable style="width:100px;" >
            <el-option v-for="(select,index) in Tim2DivSelecct" :key="index" :label="select.label" :value="select.value" >
            </el-option>           
          </el-select>
        </el-form-item>
        <el-form-item label="TIM2频率:">
          <el-select v-model="TIM2.div" placeholder="请选择" @change="FreqSelectChanged" clearable style="width:100px;" >
            <el-option v-for="(select,index) in Time2_Freq" :key="index" :label="select.label" :value="select.value" :disabled="select.disabled">
            </el-option>           
          </el-select>
        </el-form-item>

        <el-form-item label="TIM2周期:">
          <el-input placeholder="请输入内容" v-model="TIM2.arr"  @change="FreqSelectChanged"   clearable>
            <!-- <template slot="append">* {{  }}ms</template> -->
          </el-input>
          
        </el-form-item>
        <el-form-item label="">
          <el-button type="text">* </el-button>
          <el-button>{{TIM2.unit}}</el-button>
          <el-button type="text">us</el-button>
          <el-button type="text">= </el-button>
          <el-button>{{TIM2.peroid}}</el-button>
          <el-button type="text">us</el-button>
        </el-form-item>
        
        <el-form-item label="TIM2使能:">
         <el-select v-model="TIM2.Enable" placeholder="请选择" @change="FreqSelectChanged" clearable style="width:100px;" >
            <el-option v-for="(select,index) in EnableSelect" :key="index" :label="select.label" :value="select.value" :disabled="select.disabled">
            </el-option>           
        </el-select>
      </el-form-item>
      </el-form>

      <el-table :data="FreqREG"  size="small" border stripe
              style="width: 60%" :cell-style="cellStyle" :row-class-name="display" 
                  :header-cell-style="{textAlign: 'center'}" >                    <!-- :span-method="arraySpanMethod"--> 
              <el-table-column prop="name" label="Reg" width="100">
                  <template slot-scope="scope"> 
                      <el-tooltip placement="top"  effect="light">
                          <div slot="content">{{ scope.row.description }}</div>
                          <span>{{scope.row.name}}</span>>
                      </el-tooltip>
                  </template>
              </el-table-column>                            
              <el-table-column prop="CurrentBit[0]" label="Bit7" align="center" width="60"> </el-table-column>
              <el-table-column prop="CurrentBit[1]" label="Bit6" align="center" width="60"> </el-table-column>
              <el-table-column prop="CurrentBit[2]" label="Bit5" align="center" width="60"> </el-table-column>
              <el-table-column prop="CurrentBit[3]" label="Bit4" align="center" width="60"> </el-table-column>
              <el-table-column prop="CurrentBit[4]" label="Bit3" align="center" width="60"> </el-table-column>
              <el-table-column prop="CurrentBit[5]" label="Bit2" align="center" width="60"> </el-table-column>
              <el-table-column prop="CurrentBit[6]" label="Bit1" align="center" width="60"> </el-table-column>
              <el-table-column prop="CurrentBit[7]" label="Bit0" align="center" width="60"> </el-table-column>
              <el-table-column prop="value" label="Value" width="60"> </el-table-column>       
          </el-table>
          <el-table :data="InterruptReg"  size="small" border stripe
              style="width: 60%" :cell-style="cellStyle" :row-class-name="display" 
                  :header-cell-style="{textAlign: 'center'}" >                    <!-- :span-method="arraySpanMethod"--> 
              <el-table-column prop="name" label="Reg" width="100">
                  <template slot-scope="scope"> 
                      <el-tooltip placement="top"  effect="light">
                          <div slot="content">{{ scope.row.description }}</div>
                          <span>{{scope.row.name}}</span>>
                      </el-tooltip>
                  </template>
              </el-table-column>                            
              <el-table-column prop="CurrentBit[0]" label="Bit7" align="center" width="60"> </el-table-column>
              <el-table-column prop="CurrentBit[1]" label="Bit6" align="center" width="60"> </el-table-column>
              <el-table-column prop="CurrentBit[2]" label="Bit5" align="center" width="60"> </el-table-column>
              <el-table-column prop="CurrentBit[3]" label="Bit4" align="center" width="60"> </el-table-column>
              <el-table-column prop="CurrentBit[4]" label="Bit3" align="center" width="60"> </el-table-column>
              <el-table-column prop="CurrentBit[5]" label="Bit2" align="center" width="60"> </el-table-column>
              <el-table-column prop="CurrentBit[6]" label="Bit1" align="center" width="60"> </el-table-column>
              <el-table-column prop="CurrentBit[7]" label="Bit0" align="center" width="60"> </el-table-column>
              <el-table-column prop="value" label="Value" width="60"> </el-table-column>       
          </el-table>
      <el-button type="success" plain @click="test">test</el-button>
  </div>
</template>
<script>

export default {
data() {
  return {
    OSC_Freq: [
      {
        label: "16MHz",
        value: 16000000,
        disabled: true
      },
      {
        label: "8MHz",
        value: 8000000,
        disabled: false
      },
    ],
    Sys_Freq: [],
    EnableSelect:[
      {
        label: "允许",
        value: 1
      },
      {
        label: "禁止",
        value: 0
      }
    ],
    
    DivSelect: [
      {
        label: "看门狗",
        value: 1
      },
      {
        label: "定时器0",
        value: 0
      }
    ],
    WdtPerSelect: [
      {
        label: "8ms",
        value: 0,
        disabled: false
      },
      {
        label: "16ms",
        value: 1,
        disabled: false
      },
      {
        label: "32ms",
        value: 2,
        disabled: false
      },
      {
        label: "64ms",
        value: 3,
        disabled: false
      },
      {
        label: "128ms",
        value: 4,
        disabled: false
      },
      {
        label: "256ms",
        value: 5,
        disabled: false
      },
      {
        label: "512ms",
        value: 6,
        disabled: false
      },
      {
        label: "1024ms",
        value: 7,
        disabled: false
      }, 
    ],
    Time0_Freq: [
      
    ],
    Tim2DivSelecct: [
      {
        label: "不分频",
        value: 0
      },
      {
        label: "四分频",
        value: 1
      },
      {
        label: "十六分频",
        value: 2
      }
    ],
    Time2_Freq: [
    
    ],
    Freq:{
      select: "",
      TIM2_Div: "",
      Fosc: null,
      
      
      
      
      Fadc: null,
      Fpwm: null,
    },
    Sys: {
      div: "",
      Fsys: null,
    },
    WDT: {
      div: "",
      Enable: ""
    },
    TIM0: {
      div: "",
      unit: null,
      arr: "",
      peroid: null,
      Enable: null
    },
    TIM2: {
      div: "",
      unit: null,
      arr: "",
      peroid: null,
      Enable: null
    },
    FullModes: [
      {
        type: "输出模式",
        options: [{
          value: ["0", "1", "x", "x","x", "x"],
          label: "推挽输出1",
        },
        {
          value: ["0", "0", "x", "x", "x","x"],
          label: "推挽输出0",
        }]
      },
      {
        type: "输入模式",
        options: [{
          value: ["1", "x", "0", "0","x", "0"],
          label: "浮空输入",
        },
        {
          value: ["1", "x", "1", "0","x", "0"],
          label: "上拉输入",
        },
        {
          value: ["1", "x", "0", "1","x", "0"],
          label: "下拉输入",
        },
        {
          value: ["1", "x", "0", "0","x", "1"],
          label: "模拟输入",
        }]
      },    
    ],
    NoAnalg_PDModes: [
      {
        type: "输出模式",
        options: [{
          value: ["0", "1", "x", "x","x", "x"],
          label: "推挽输出1",
        },
        {
          value: ["0", "0", "x", "x", "x","x"],
          label: "推挽输出0",
        }]
      },
      {
        type: "输入模式",
        options: [{
          value: ["1", "x", "0", "0","x", "0"],
          label: "浮空输入",
        },
        {
          value: ["1", "x", "1", "0","x", "0"],
          label: "上拉输入",
        },
        {
          value: ["1", "x", "0", "1","x", "0"],
          label: "下拉输入",
          disabled: true
        },
        {
          value: ["1", "x", "0", "0","x", "1"],
          label: "模拟输入",
          disabled: true
        }]
      },    
    ],
    GPIOA: [
      {
        name: "RA7",
        value: "",
      },
      {
        name: "RA6",
        value: "",
      },
      {
        name: "RA5",
        value: "",
      },
      {
        name: "RA4",
        value: "",
      },
      {
        name: "RA3",
        value: "",
      },
      {
        name: "RA2",
        value: "",
      },
      {
        name: "RA1",
        value: "",
      },
      {
        name: "RA0",
        value: "",
      },
    ],
    GPIOB: [
      {
        name: "RB7",
        value: "",
      },
      {
        name: "RB6",
        value: "",
      },
      {
        name: "RB5",
        value: "",
      },
      {
        name: "RB4",
        value: "",
      },
      {
        name: "RB3",
        value: "",
      },
      {
        name: "RB2",
        value: "",
      },
      {
        name: "RB1",
        value: "",
      },
      {
        name: "RB0",
        value: "",
      },
    ],
    IOREG: [
      {
        name: "TRISA",
        BitName: ["TRISA7","TRISA6","TRISA5","TRISA4","TRISA3","TRISA2","TRISA1","TRISA0"],
        description: "方向寄存器 1:输入 0:输出",
        DefaultBit: ["x", "1", "1", "1", "1", "1", "1", "1"],
        CurrentBit: ["x", "1", "1", "1", "1", "1", "1", "1"],
        value: "0x7F",
        orgin: [1, 1, 1, 1, 1, 1, 1, 1],
        disabled: false
      },
      {
        name: "PORTA",
        BitName: ["PORTA7","PORTA6","PORTA5","PORTA4","PORTA3","PORTA2","PORTA1","PORTA0"],
        description: "数据寄存器:1:高 0:低",
        DefaultBit: ["x", "0", "0", "0", "0", "0", "0", "0"],
        CurrentBit: ["x", "0", "0", "0", "0", "0", "0", "0"],
        value: "0x00",
        orgin: [1, 1, 1, 1, 1, 1, 1, 1],
        disabled: false
      },
      {
        name: "WPUA",
        BitName: ["WPUA7","WPUA6","WPUA5","WPUA4","WPUA3","WPUA2","WPUA1","WPUA0"],
        description: "上拉电阻寄存器 1:使能 2:禁止",
        DefaultBit: ["x", "0", "0", "0", "0", "0", "0", "0"],
        CurrentBit: ["x", "0", "0", "0", "0", "0", "0", "0"],
        value: "0x00",
        orgin: [1, 1, 1, 1, 1, 1, 1, 1],
        disabled: false
      },
      {
        name: "WPDA",
        BitName: ["WPDA7","WPDA6","WPDA5","WPDA4","WPDA3","WPDA2","WPDA1","WPDA0"],
        description: "下拉电阻寄存器 1:使能 2:禁止",
        DefaultBit: ["x", "0", "0", "0", "0", "0", "0", "0"],
        CurrentBit: ["x", "0", "0", "0", "0", "0", "0", "0"],
        value: "0x00",
        orgin: [1, 1, 1, 1, 1, 1, 1, 1],
        disabled: false
      },
      {
        name: "IOCA",
        BitName: ["IOCA7","IOCA6","IOCA5","IOCA4","IOCA3","IOCA2","IOCA1","IOCA0"],
        description: "电平变化中断寄存器 1:使能 2:禁止",
        DefaultBit: ["x", "0", "0", "0", "0", "0", "0", "0"],
        CurrentBit: ["x", "0", "0", "0", "0", "0", "0", "0"],
        value: "0x00",
        orgin: [1, 1, 1, 1, 1, 1, 1, 1],
        disabled: false
      },
      {
        name: "TRISB",
        BitName: ["TRISB7","TRISB6","TRISB5","TRISB4","TRISB3","TRISB2","TRISB1","TRISB0"],
        description: "方向寄存器 1:输入 0:输出",
        DefaultBit: ["x", "1", "1", "1", "1", "1", "1", "1"],
        CurrentBit: ["x", "1", "1", "1", "1", "1", "1", "1"],
        value: "0x7F",
        orgin: [1, 1, 1, 1, 1, 1, 1, 1],
        disabled: false
      },
      {
        name: "PORTB",
        BitName: ["PORTB7","PORTB6","PORTB5","PORTB4","PORTB3","PORTB2","PORTB1","PORTB0"],
        description: "数据寄存器:1:高 0:低",
        DefaultBit: ["x", "0", "0", "0", "0", "0", "0", "0"],
        CurrentBit: ["x", "0", "0", "0", "0", "0", "0", "0"],
        value: "0x00",
        orgin: [1, 1, 1, 1, 1, 1, 1, 1],
        disabled: false
      },   
      {
        name: "WPUB",
        BitName: ["WPUB7","WPUB6","WPUB5","WPUB4","WPUB3","WPUB2","WPUB1","WPUB0"],
        description: "上拉电阻寄存器 1:使能 2:禁止",
        DefaultBit: ["x", "0", "0", "0", "0", "0", "0", "0"],
        CurrentBit: ["x", "0", "0", "0", "0", "0", "0", "0"],
        value: "0x00",
        orgin: [1, 1, 1, 1, 1, 1, 1, 1],
        disabled: false
      },
      {
        name: "WPDB",
        BitName: ["WPDB7","WPDB6","WPDB5","WPDB4","WPDB3","WPDB2","WPDB1","WPDB0"],
        description: "下拉电阻寄存器 1:使能 2:禁止",
        DefaultBit: ["x", "0", "0", "0", "0", "x", "0", "0"],
        CurrentBit: ["x", "0", "0", "0", "0", "x", "0", "0"],
        value: "0x00",
        orgin: [1, 1, 1, 1, 1, 1, 1, 1],
        disabled: false
      },
      {
        name: "IOCB",
        BitName: ["IOCB7","IOCB6","IOCB5","IOCB4","IOCB3","IOCB2","IOCB1","IOCB0"],
        description: "电平变化中断寄存器 1:使能 2:禁止",
        DefaultBit: ["x", "0", "0", "0", "0", "0", "0", "0"],
        CurrentBit: ["x", "0", "0", "0", "0", "0", "0", "0"],
        value: "0x00",
        orgin: [1, 1, 1, 1, 1, 1, 1, 1],
        disabled: false
      },
      {
        name: "ANSEL",
        BitName: ["ANS7","ANS6","ANS5","ANS4","ANS3","ANS2","ANS1","ANS0"],
        description: "模拟选择寄存器: 1:模拟 2:数字",
        DefaultBit: ["x", "0", "0", "0", "0", "0", "0", "0" ],
        CurrentBit: ["x", "0", "0", "0", "0", "0", "0", "0" ],
        value: "0x00",
        orgin: [1, 1, 1, 1, 1, 1, 1, 1],
        disabled: false
      },
      {
        name: "ANSEH",
        BitName: ["ANS15","ANS14","ANS13","ANS12","ANS11","ANS10","ANS9","ANS8"],
        description: "模拟选择寄存器: 1:模拟 2:数字",
        DefaultBit: ["x", "0", "0", "0", "0", "x", "0", "0"],
        CurrentBit: ["x", "0", "0", "0", "0", "x", "0", "0"],
        value: "0x00",
        orgin: [1, 1, 1, 1, 1, 1, 1, 1],
        disabled: false
      }
    ],
    InterruptReg: [
      {
        name: "INTCON",
        BitName: ["GIE","PEIE","T0IE","INTE","RBIE","T0IF","INTF","RBIF"],
        description: "中断控制寄存器",
        DefaultBit: ["0", "0", "0", "0", "0", "0", "0", "0"],
        CurrentBit: ["0", "0", "0", "0", "0", "0", "0", "0"],
        value: "0x00",
        orgin: [1, 1, 1, 1, 1, 1, 1, 1],
        disabled: false
      },
      {
        name: "PIE1",
        BitName: ["","","","","RAIE","PWMIE","TMR2IE","ADIE"],
        description: "外设中断允许寄存器",
        DefaultBit: ["x", "x", "x", "x", "0", "0", "0", "0"],
        CurrentBit: ["x", "x", "x", "x", "0", "0", "0", "0"],
        value: "0x00",
        orgin: [1, 1, 1, 1, 1, 1, 1, 1],
        disabled: false
      },
      {
        name: "PIR1",
        BitName: ["","","","","RAIF","PWMIF","TMR2IF","ADIF"],
        description: "外设中断请求寄存器",
        DefaultBit: ["x", "x", "x", "x", "0", "0", "0", "0"],
        CurrentBit: ["x", "x", "x", "x", "0", "0", "0", "0"],
        value: "0x00",
        orgin: [1, 1, 1, 1, 1, 1, 1, 1],
        disabled: false
      }
    ],
    FreqREG: [
      {
        name: "OSCCON",
        BitName: ["","IRCF2","IRCF1","IRCF0","","","",""],
        description: "振荡器控制寄存器",
        DefaultBit: ["x", "1", "0", "1", "x", "x", "x", "x"],
        CurrentBit: ["x", "1", "0", "1", "x", "x", "x", "x"],
        value: "0x50",
        orgin: [1, 1, 1, 1, 1, 1, 1, 1],
        disabled: false
      },
      {
        name: "OPTION_REG",
        BitName: ["","INTEDG","T0CS","T0SE","PSA","PS2","PS1","PS0"],
        description: "预分频器控制寄存器",
        DefaultBit: ["x", "1", "1", "1", "1", "0", "1", "1"],
        CurrentBit: ["x", "1", "1", "1", "1", "0", "1", "1"],
        value: "0x7B",
        orgin: [1, 1, 1, 1, 1, 1, 1, 1],
        disabled: false
      },
      {
        name: "WDTCON",
        BitName: [""," "," "," "," "," "," ","SWDTEN"],
        description: "看门狗定时器控制寄存器",
        DefaultBit: ["x", "x", "x", "x", "x", "x", "x", "0"],
        CurrentBit: ["x", "x", "x", "x", "x", "x", "x", "0"],
        value: "0x00",
        orgin: [1, 1, 1, 1, 1, 1, 1, 1],
        disabled: false
      },
      {
        name: "TMR0",
        BitName: [""," "," "," "," "," "," ",""],
        description: "定时器0计数器",
        DefaultBit: ["0", "0", "0", "0", "0", "0", "0", "0"],
        CurrentBit: ["0", "0", "0", "0", "0", "0", "0", "0"],
        value: "0x00",
        orgin: [1, 1, 1, 1, 1, 1, 1, 1],
        disabled: false
      },
      {
        name: "T2CON",
        BitName: ["","TOUTPS3","TOUTPS2","TOUTPS1","TOUTPS0","TMR2ON","T2CKPS1","T2CKPS0"],
        description: "定时器2控制寄存器",
        DefaultBit: ["x", "0", "0", "0", "0", "0", "0", "0"],
        CurrentBit: ["x", "0", "0", "0", "0", "0", "0", "0"],
        value: "0x00",
        orgin: [1, 1, 1, 1, 1, 1, 1, 1],
        disabled: false
      },
      {
        name: "TMR2",
        BitName: [""," "," "," "," "," "," ",""],
        description: "定时器2计数器",
        DefaultBit: ["0", "0", "0", "0", "0", "0", "0", "0"],
        CurrentBit: ["0", "0", "0", "0", "0", "0", "0", "0"],
        value: "0x00",
        orgin: [1, 1, 1, 1, 1, 1, 1, 1],
        disabled: false
      },
      {
        name: "PR2",
        BitName: [""," "," "," "," "," "," ",""],
        description: "定时器2重装载值",
        DefaultBit: ["0", "0", "0", "0", "0", "0", "0", "0"],
        CurrentBit: ["0", "0", "0", "0", "0", "0", "0", "0"],
        value: "0x00",
        orgin: [1, 1, 1, 1, 1, 1, 1, 1],
        disabled: false
      },
      
    ]
  };
},
methods: {
  cellStyle({ row, columnIndex }) {
    if (
      row.orgin[7] === 1 &&
      row.orgin[6] === 1 &&
      row.orgin[5] === 1 &&
      row.orgin[4] === 1 &&
      row.orgin[3] === 1 &&
      row.orgin[2] === 1 &&
      row.orgin[1] === 1 &&
      row.orgin[0] === 1 &&
      columnIndex === 9
    ) {
      return "color: #C0C0C0";
    }
    if (row.orgin[7] === 1 && columnIndex === 8) {
      return "color: #C0C0C0";
    }
    if (row.orgin[6] === 1 && columnIndex === 7) {
      return "color: #C0C0C0";
    }
    if (row.orgin[5] === 1 && columnIndex === 6) {
      return "color: #C0C0C0";
    }
    if (row.orgin[4] === 1 && columnIndex === 5) {
      return "color: #C0C0C0";
    }
    if (row.orgin[3] === 1 && columnIndex === 4) {
      return "color: #C0C0C0";
    }
    if (row.orgin[2] === 1 && columnIndex === 3) {
      return "color: #C0C0C0";
    }
    if (row.orgin[1] === 1 && columnIndex === 2) {
      return "color: #C0C0C0";
    }
    if (row.orgin[0] === 1 && columnIndex === 1) {
      return "color: #C0C0C0";
    }
  },
  selectChanged() {
    //var Arr = "";
    for (let i = 0; i < 8; i++) {
      if (this.GPIOA[i].value === "") {
          for(let j = 0; j < 5; j++) {
             // this.IOREG[j].CurrentBit[i] = this.IOREG[j].DefaultBit[i];
             // this.IOREG[j].orgin[i] = 1;
             this.$set(this.IOREG[j].CurrentBit,i,this.IOREG[j].DefaultBit[i]);
              this.$set(this.IOREG[j].orgin,i,1);
          }
          // this.IOREG[5].CurrentBit[i] = this.IOREG[5].DefaultBit[i];
          // this.IOREG[j].orgin[i] = 1;
          this.$set(this.IOREG[10].CurrentBit,i,this.IOREG[10].DefaultBit[i]);
          this.$set(this.IOREG[10].orgin,i,1);
      } else {
          for(let j = 0; j < 5; j++) {     
              if (this.GPIOA[i].value[j] === "x") {
                  // this.IOREG[j].CurrentBit[i] = this.IOREG[j].DefaultBit[i];
                  // this.IOREG[j].orgin[i] = 1;
                  this.$set(this.IOREG[j].CurrentBit,i,this.IOREG[j].DefaultBit[i]);
                  this.$set(this.IOREG[j].orgin,i,1);
              }else{
                  // this.IOREG[j].CurrentBit[i] = this.GPIOA[7-i].value[j];
                  // this.IOREG[j].orgin[i] = 0;
                  this.$set(this.IOREG[j].CurrentBit,i,this.GPIOA[i].value[j]);
                  this.$set(this.IOREG[j].orgin,i,0);
              }   
          }
          if (this.GPIOA[i].value[5] === "x")
          {
            this.$set(this.IOREG[10].CurrentBit,i,this.IOREG[10].DefaultBit[i]);
             this.$set(this.IOREG[10].orgin,i,1);
          }
          else
          {
              this.$set(this.IOREG[10].CurrentBit,i,this.GPIOA[i].value[5]);
              this.$set(this.IOREG[10].orgin,i,0);
          }
      }
    }
    for (let i = 0; i < 8; i++) {
      if (this.GPIOB[i].value === "") {
          for(let j = 0; j < 5; j++) {
              // this.IOREG[j+5].CurrentBit[i] = this.IOREG[j+5].DefaultBit[i]
              // this.IOREG[j+5].orgin[i] = 1;
              this.$set(this.IOREG[j+5].CurrentBit,i,this.IOREG[j+5].DefaultBit[i]);
              this.$set(this.IOREG[j+5].orgin,i,1);
          }
          this.$set(this.IOREG[11].CurrentBit,i,this.IOREG[11].DefaultBit[i]);
              this.$set(this.IOREG[11].orgin,i,1);
      } else {
          for(let j = 0; j < 5; j++) {        
              if (this.GPIOB[i].value[j] === "x") {
                  // this.IOREG[j+5].CurrentBit[i] = this.GPIOA[i].value[j];
                  // this.IOREG[j+5].orgin[i] = 0;
                  this.$set(this.IOREG[j+5].CurrentBit,i,this.IOREG[j+5].DefaultBit[i]);
                  this.$set(this.IOREG[j+5].orgin,i,1);
              }else{
                  // this.IOREG[j+5].CurrentBit[i] = this.IOREG[j+5].DefaultBit[i]
                  // this.IOREG[j+5].orgin[i] = 1;
                  this.$set(this.IOREG[j+5].CurrentBit,i,this.GPIOB[i].value[j]);
                  this.$set(this.IOREG[j+5].orgin,i,0);
              }   
          }
          if (this.GPIOB[i].value[5] === "x") {
              this.$set(this.IOREG[11].CurrentBit,i,this.IOREG[11].DefaultBit[i]);
              this.$set(this.IOREG[11].orgin,i,1);
          }else{
              this.$set(this.IOREG[11].CurrentBit,i,this.GPIOB[i].value[5]);
              this.$set(this.IOREG[11].orgin,i,0);
          }   
      }
    } 
    this.GetValue(this.IOREG,this.IOREG.length);
  },
  FreqSelectChanged(){
   
    for (let i = 0; i < 8; i++) {
      if(i === 7)
      {
        this.Sys_Freq[i]={
        label: "32KHz",
        value: 7,
        };
      }
      else
      { 
        this.Sys_Freq[i]={
        label: this.convert(this.Freq.Fosc/Math.pow(2,i)),
        value: i,
        };
      }
    }

    if(this.Sys.div !== "")
    {
      if(this.Sys.div === 7)
      {
        this.Sys.Fsys = 32000;
      }
      else
      {
        this.Sys.Fsys = this.Freq.Fosc/Math.pow(2,this.Sys.div);
      }
      
    }
  

    var TIM0_Tmpx,TIM0_Tmpy;
    if(this.Freq.select === 0)
    {
      for (let i = 1; i < 8; i++) {
        this.WdtPerSelect[i].disabled = true;
      }   
      for (let i = 0; i < 8; i++) {
        TIM0_Tmpx = this.Sys.Fsys/Math.pow(2,i+1);
        TIM0_Tmpy = 1000000/TIM0_Tmpx;
        //alert(TIM0_Tmpy)
        this.Time0_Freq[i] = {
          label: this.convert(TIM0_Tmpx),
          value: i,
          unit: TIM0_Tmpy
        }
      }
    }else
    {
      for (let i = 1; i < 8; i++) {
        this.WdtPerSelect[i].disabled = false;
      }  
      TIM0_Tmpx = this.Sys.Fsys;
      TIM0_Tmpy = 1000000/TIM0_Tmpx;
      this.Time0_Freq = [{
        label: this.convert(TIM0_Tmpx),
        value: 0,
        unit: TIM0_Tmpy
      }]
      
     
    }
    var TIM2_Tmpx,TIM2_Tmpy,TIM2_Tmpz ;
    if(this.Freq.TIM2_Div !== ""){
    TIM2_Tmpx = this.Sys.Fsys/4/Math.pow(4,this.Freq.TIM2_Div);
      for (let i = 1; i < 16; i++) {
        TIM2_Tmpy = TIM2_Tmpx/i ;
        TIM2_Tmpz = 1000000/TIM2_Tmpy;
        
          this.Time2_Freq[i-1] = {
            label: this.convert(TIM2_Tmpy),
            value: i-1,
            unit: TIM2_Tmpz
          }
      }
    }
    if(this.TIM0.div !== ""){
      this.TIM0.unit = this.Time0_Freq[this.TIM0.div].unit;
    }
    if(this.TIM0.arr !== ""){
      //alert(this.TIM0.arr);
      this.TIM0.peroid = this.TIM0.unit * this.TIM0.arr;
    }
    if(this.TIM2.div !== ""){
      this.TIM2.unit = this.Time2_Freq[this.TIM2.div].unit;
    }
    if(this.TIM2.arr !== ""){
      //alert(this.TIM0.arr);
      this.TIM2.peroid = this.TIM2.unit * this.TIM2.arr;
    }
    let Arr ;
    if(this.Sys.div === "")
    {
      for(let i = 0; i < 3; i++)
      {
        this.$set(this.FreqREG[0].CurrentBit,i+1,this.FreqREG[0].DefaultBit[i+1]);
        this.$set(this.FreqREG[0].orgin,i+1,1);
      }
    }
    else
    {
      Arr = this.numToArray(7-this.Sys.div,2,3);
      for(let i = 0; i < 3; i++)
      {
        this.$set(this.FreqREG[0].CurrentBit,i+1,Arr[i]);
        this.$set(this.FreqREG[0].orgin,i+1,0);
      }
    }

    if(this.Freq.select === "")
    {
      this.$set(this.FreqREG[1].CurrentBit,4,this.FreqREG[1].DefaultBit[4]);
      this.$set(this.FreqREG[1].orgin,4,1);
      for(let i = 0; i < 3; i++)
      {
        this.$set(this.FreqREG[1].CurrentBit,i+5,this.FreqREG[1].DefaultBit[i+5]);
        this.$set(this.FreqREG[1].orgin,i+5,1);
      }
    }
    else
    {
      this.$set(this.FreqREG[1].CurrentBit,4,this.Freq.select);
      this.$set(this.FreqREG[1].orgin,4,0);
      if(this.WDT.div !== "" && this.Freq.select === 1)
      {
        Arr = this.numToArray(this.WDT.div,2,3);
        for(let i = 0; i < 3; i++)
        {
          this.$set(this.FreqREG[1].CurrentBit,i+5,Arr[i]);
          this.$set(this.FreqREG[1].orgin,i+5,0);
        }
      }
      else if(this.TIM0.div !== "" && this.Freq.select === 0)
      {
        Arr = this.numToArray(this.TIM0.div,2,3);
        for(let i = 0; i < 3; i++)
        {
          this.$set(this.FreqREG[1].CurrentBit,i+5,Arr[i]);
          this.$set(this.FreqREG[1].orgin,i+5,0);
        }
      }
      else
      {
        for(let i = 0; i < 3; i++)
        {
          this.$set(this.FreqREG[1].CurrentBit,i+5,this.FreqREG[1].DefaultBit[i+5]);
          this.$set(this.FreqREG[1].orgin,i+5,1);
        }
      }

    }
    
   
    this.GetValue(this.FreqREG,this.FreqREG.length);
  },
  display({row}){
      if(row.disabled === true){
          return 'warning-row';   
      }
    },
  test() {
    alert(this.TIM0.arr);
   
  },
  convert(value){
    if(value >= 1000000)
    {
      return Math.round(value/1000000) + "MHz";
    }
    else if(value >= 1000)
    {
      return Math.round(value/1000) + "KHz";
    }
    else{
      return value + "Hz";
    }
  },
  GetValue(Array,count){
    let temp,Arr;
    for (let i = 0; i < count; i++) {
      Arr = "";
      for (let j = 0; j < 8; j++) {
        if (Array[i].CurrentBit[j] === "x") {
          Arr += "0";
        } else {
          Arr += Array[i].CurrentBit[j];
        }
      }
      temp = parseInt(Arr, 2).toString(16);
      if (temp.length === 1) {
        temp = "0" + temp;
      }
     
      Array[i].value = "0x" + temp.toUpperCase();
    }
  },
  numToArray(num,hex,length)
  {
    let Arr;
    Arr = (num).toString(hex).split("");
    for (let i = 1; i < length; i++) {
      if(Arr.length === i)
      {
        for (let j = i-1; j >= 0; j--) {
          Arr[j+length-i] = Arr[j];   
        }
        for (let j = length-i -1; j >= 0; j--) {
          Arr[j] = 0;    
        }
      }
    } 
    return Arr;
  }
},
};
</script>

<style>
  .el-table .warning-row{
      display: none
    }
  
    /* .el-input {
    width: 50px;
  } */
 
</style>