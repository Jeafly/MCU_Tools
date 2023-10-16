<template>
    <div>

        <span>
            RA0: <el-select v-model="GPIOA[0].value" placeholder="请选择" @change="selectChanged" size="mini" clearable style="width:105px;">
                <el-option v-for="mode in modes" :key="mode.value" :label="mode.label" :value="mode.value">
                </el-option>
            </el-select>
            RA1: <el-select v-model="GPIOA[1].value" placeholder="请选择" @change="selectChanged" size="mini" clearable style="width:105px;">
                <el-option v-for="mode in modes" :key="mode.value" :label="mode.label" :value="mode.value">
                </el-option>
            </el-select>
            RA2: <el-select v-model="GPIOA[2].value" placeholder="请选择" @change="selectChanged" size="mini" clearable style="width:105px;">
                <el-option v-for="mode in modes" :key="mode.value" :label="mode.label" :value="mode.value">
                </el-option>
            </el-select>
            RA3: <el-select v-model="GPIOA[3].value" placeholder="请选择" @change="selectChanged" size="mini" clearable style="width:105px;">
                <el-option v-for="mode in modes" :key="mode.value" :label="mode.label" :value="mode.value">
                </el-option>
            </el-select>
            RA4: <el-select v-model="GPIOA[4].value" placeholder="请选择" @change="selectChanged" size="mini" clearable style="width:105px;">
                <el-option v-for="mode in modes" :key="mode.value" :label="mode.label" :value="mode.value">
                </el-option>
            </el-select>
            RA5: <el-select v-model="GPIOA[5].value" placeholder="请选择" @change="selectChanged" size="mini" clearable style="width:105px;">
                <el-option v-for="mode in modes" :key="mode.value" :label="mode.label" :value="mode.value">
                </el-option>
            </el-select>
            RA6: <el-select v-model="GPIOA[6].value" placeholder="请选择" @change="selectChanged" size="mini" clearable style="width:105px;">
                <el-option v-for="mode in modes" :key="mode.value" :label="mode.label" :value="mode.value">
                </el-option>
            </el-select>
            RA7: <el-select v-model="GPIOA[7].value" placeholder="请选择" @change="selectChanged" size="mini" clearable style="width:105px;">
                <el-option v-for="mode in modes" :key="mode.value" :label="mode.label" :value="mode.value">
                </el-option>
            </el-select>
        </span>
        <br/>
        <span>
            RB0: <el-select v-model="GPIOB[0].value" placeholder="请选择" @change="selectChanged" size="mini" style="width:100px;">
                <el-option v-for="mode in modes" :key="mode.value" :label="mode.label" :value="mode.value">
                </el-option>
            </el-select>
            RB1: <el-select v-model="GPIOB[1].value" placeholder="请选择" @change="selectChanged" size="mini" style="width:100px;">
                <el-option v-for="mode in modes" :key="mode.value" :label="mode.label" :value="mode.value">
                </el-option>
            </el-select>
            RB2: <el-select v-model="GPIOB[2].value" placeholder="请选择" @change="selectChanged" size="mini" style="width:100px;">
                <el-option v-for="mode in modes" :key="mode.value" :label="mode.label" :value="mode.value">
                </el-option>
            </el-select>
            RB3: <el-select v-model="GPIOB[3].value" placeholder="请选择" @change="selectChanged" size="mini" style="width:100px;">
                <el-option v-for="mode in modes" :key="mode.value" :label="mode.label" :value="mode.value">
                </el-option>
            </el-select>
            RB4: <el-select v-model="GPIOB[4].value" placeholder="请选择" @change="selectChanged" size="mini" style="width:100px;">
                <el-option v-for="mode in modes" :key="mode.value" :label="mode.label" :value="mode.value">
                </el-option>
            </el-select>
            RB5: <el-select v-model="GPIOB[5].value" placeholder="请选择" @change="selectChanged" size="mini" style="width:100px;">
                <el-option v-for="mode in modes" :key="mode.value" :label="mode.label" :value="mode.value">
                </el-option>
            </el-select>
            RB6: <el-select v-model="GPIOB[6].value" placeholder="请选择" @change="selectChanged" size="mini" style="width:100px;">
                <el-option v-for="mode in modes" :key="mode.value" :label="mode.label" :value="mode.value">
                </el-option>
            </el-select>
            RB7: <el-select v-model="GPIOB[7].value" placeholder="请选择" @change="selectChanged" size="mini" style="width:100px;">
                <el-option v-for="mode in modes" :key="mode.value" :label="mode.label" :value="mode.value">
                </el-option>
            </el-select>
        </span>
        <br/>
        <el-table :data="tableData" height="450" size="small" border 
            style="width: 100%" :cell-style="cellStyle"  
                :header-cell-style="{textAlign: 'center'}">                     
            <el-table-column prop="Reg" label="Reg" width="70">
                <template slot-scope="scope"> 
                    <el-tooltip placement="top"  effect="light">
                        <div slot="content">{{ scope.row.Reg.description }}</div>
                        <span>{{scope.row.Reg.name}}</span>>
                    </el-tooltip>
                </template>
            </el-table-column>                            
            <el-table-column prop="Bit[7].value" label="Bit[7]" align="center" width="60"> </el-table-column>
            <el-table-column prop="Bit[6].value" label="Bit[6]" align="center" width="60"> </el-table-column>
            <el-table-column prop="Bit[5].value" label="Bit[5]" align="center" width="60"> </el-table-column>
            <el-table-column prop="Bit[4].value" label="Bit[4]" align="center" width="60"> </el-table-column>
            <el-table-column prop="Bit[3].value" label="Bit[3]" align="center" width="60"> </el-table-column>
            <el-table-column prop="Bit[2].value" label="Bit[2]" align="center" width="60"> </el-table-column>
            <el-table-column prop="Bit[1].value" label="Bit[1]" align="center" width="60"> </el-table-column>
            <el-table-column prop="Bit[0].value" label="Bit[0]" align="center" width="60"> </el-table-column>
            <el-table-column prop="Value" label="Value" width="60"> </el-table-column>       
        </el-table>
        <el-button type="success" plain @click="test">test</el-button>
    </div>
</template>
<script>
var TRISA = ["1", "1", "1", "1", "1", "1", "1", "1", "0xFF"];
var PORTA = ["1", "1", "1", "1", "1", "1", "1", "1", "0xFF"];
var WUPA = ["1", "1", "1", "1", "1", "1", "1", "1", "0xFF"];
var WDNA = ["1", "1", "1", "1", "1", "1", "1", "1", "0xFF"];
var ANSL = ["1", "1", "1", "1", "1", "1", "1", "1", "0xFF"];
var TRISB = ["1", "1", "1", "1", "1", "1", "1", "1", "0xFF"];
var PORTB = ["1", "1", "1", "1", "1", "1", "1", "1", "0xFF"];
var WUPB = ["1", "1", "1", "1", "1", "1", "1", "1", "0xFF"];
var WDNB = ["1", "1", "1", "1", "1", "1", "1", "1", "0xFF"];
var ANSH = ["x", "1", "1", "1", "1", "1", "1", "1", "0xFF"];

export default {
  data() {
    return {
      modes: [
        {
          value: ["1", "1", "x", "x", "x"],
          label: "推挽输出1",
        },
        {
          value: ["1", "0", "x", "x", "x"],
          label: "推挽输出0",
        },
        {
          value: ["0", "x", "0", "0", "0"],
          label: "浮空输入",
        },
        {
          value: ["0", "x", "1", "0", "0"],
          label: "上拉输入",
        },
        {
          value: ["0", "x", "0", "1", "0"],
          label: "下拉输入",
        },
        {
          value: ["0", "x", "0", "0", "1"],
          label: "模拟输入",
        },
      ],
      GPIOA: [
        {
          name: "RA0",
          value: "",
        },
        {
          name: "RA1",
          value: "",
        },
        {
          name: "RA2",
          value: "",
        },
        {
          name: "RA3",
          value: "",
        },
        {
          name: "RA4",
          value: "",
        },
        {
          name: "RA5",
          value: "",
        },
        {
          name: "RA6",
          value: "",
        },
        {
          name: "RA7",
          value: "",
        },
      ],
      GPIOB: [
        {
          name: "RB0",
          value: "",
        },
        {
          name: "RB1",
          value: "",
        },
        {
          name: "RB2",
          value: "",
        },
        {
          name: "RB3",
          value: "",
        },
        {
          name: "RB4",
          value: "",
        },
        {
          name: "RB5",
          value: "",
        },
        {
          name: "RB6",
          value: "",
        },
        {
          name: "RB7",
          value: "",
        },
      ],
      tableData: [
        {
          Reg: {
            name: "TRISA",
            description: "输入输出寄存器",
          },
          description: "输入输出寄存器",
          Bit: [
            {
              value: TRISA[0],
              default: 1,
            },
            {
              value: TRISA[1],
              default: 1,
            },
            {
              value: TRISA[2],
              default: 1,
            },
            {
              value: TRISA[3],
              default: 1,
            },
            {
              value: TRISA[4],
              default: 1,
            },
            {
              value: TRISA[5],
              default: 1,
            },
            {
              value: TRISA[6],
              default: 1,
            },
            {
              value: TRISA[7],
              default: 1,
            },
          ],

          Value: TRISA[8],
        },
        {
          Reg: {
            name: "PORTA",
            description: "输出电平寄存器:1为高电平,0为低电平",
          },
          description: "输入输出寄存器",
          Bit: [
            {
              value: PORTA[0],
              default: 1,
            },
            {
              value: PORTA[1],
              default: 1,
            },
            {
              value: PORTA[2],
              default: 1,
            },
            {
              value: PORTA[3],
              default: 1,
            },
            {
              value: PORTA[4],
              default: 1,
            },
            {
              value: PORTA[5],
              default: 1,
            },
            {
              value: PORTA[6],
              default: 1,
            },
            {
              value: PORTA[7],
              default: 1,
            },
          ],
          Value: PORTA[8],
        },
        {
          Reg: {
            name: "WUPA",
            description: "输入输出寄存器",
          },
          description: "输入输出寄存器",
          Bit: [
            {
              value: WUPA[0],
              default: 1,
            },
            {
              value: WUPA[1],
              default: 1,
            },
            {
              value: WUPA[2],
              default: 1,
            },
            {
              value: WUPA[3],
              default: 1,
            },
            {
              value: WUPA[4],
              default: 1,
            },
            {
              value: WUPA[5],
              default: 1,
            },
            {
              value: WUPA[6],
              default: 1,
            },
            {
              value: WUPA[7],
              default: 1,
            },
          ],
          Value: WUPA[8],
        },
        {
          Reg: {
            name: "WDNA",
            description: "输入输出寄存器",
          },
          description: "输入输出寄存器",
          Bit: [
            {
              value: WDNA[0],
              default: 1,
            },
            {
              value: WDNA[1],
              default: 1,
            },
            {
              value: WDNA[2],
              default: 1,
            },
            {
              value: TRISA[3],
              default: 1,
            },
            {
              value: WDNA[4],
              default: 1,
            },
            {
              value: WDNA[5],
              default: 1,
            },
            {
              value: WDNA[6],
              default: 1,
            },
            {
              value: WDNA[7],
              default: 1,
            },
          ],
          Value: WDNA[8],
        },
        {
          Reg: {
            name: "ANSL",
            description: "输入输出寄存器",
          },
          description: "输入输出寄存器",
          Bit: [
            {
              value: ANSL[0],
              default: 1,
            },
            {
              value: ANSL[1],
              default: 1,
            },
            {
              value: ANSL[2],
              default: 1,
            },
            {
              value: ANSL[3],
              default: 1,
            },
            {
              value: ANSL[4],
              default: 1,
            },
            {
              value: ANSL[5],
              default: 1,
            },
            {
              value: ANSL[6],
              default: 1,
            },
            {
              value: ANSL[7],
              default: 1,
            },
          ],
          Value: ANSL[8],
        },
        {
          Reg: {
            name: "TRISB",
            description: "输入输出寄存器",
          },
          description: "输入输出寄存器",
          Bit: [
            {
              value: TRISB[0],
              default: 1,
            },
            {
              value: TRISB[1],
              default: 1,
            },
            {
              value: TRISB[2],
              default: 1,
            },
            {
              value: TRISB[3],
              default: 1,
            },
            {
              value: TRISB[4],
              default: 1,
            },
            {
              value: TRISB[5],
              default: 1,
            },
            {
              value: TRISB[6],
              default: 1,
            },
            {
              value: TRISB[7],
              default: 1,
            },
          ],
          Value: TRISB[8],
        },
        {
          Reg: {
            name: "PORTB",
            description: "输出电平寄存器:1为高电平,0为低电平",
          },
          description: "输入输出寄存器",
          Bit: [
            {
              value: PORTB[0],
              default: 1,
            },
            {
              value: PORTB[1],
              default: 1,
            },
            {
              value: PORTB[2],
              default: 1,
            },
            {
              value: PORTB[3],
              default: 1,
            },
            {
              value: PORTB[4],
              default: 1,
            },
            {
              value: PORTB[5],
              default: 1,
            },
            {
              value: PORTB[6],
              default: 1,
            },
            {
              value: PORTB[7],
              default: 1,
            },
          ],
          Value: PORTB[8],
        },
        {
          Reg: {
            name: "WUPB",
            description: "输入输出寄存器",
          },
          description: "输入输出寄存器",
          Bit: [
            {
              value: WUPB[0],
              default: 1,
            },
            {
              value: WUPB[1],
              default: 1,
            },
            {
              value: WUPB[2],
              default: 1,
            },
            {
              value: TRISA[3],
              default: 1,
            },
            {
              value: WUPB[4],
              default: 1,
            },
            {
              value: WUPB[5],
              default: 1,
            },
            {
              value: WUPB[6],
              default: 1,
            },
            {
              value: WUPB[7],
              default: 1,
            },
          ],
          Value: WUPB[8],
        },
        {
          Reg: {
            name: "WDNB",
            description: "输入输出寄存器",
          },
          description: "输入输出寄存器",
          Bit: [
            {
              value: WDNB[0],
              default: 1,
            },
            {
              value: WDNB[1],
              default: 1,
            },
            {
              value: WDNB[2],
              default: 1,
            },
            {
              value: WDNB[3],
              default: 1,
            },
            {
              value: WDNB[4],
              default: 1,
            },
            {
              value: WDNB[5],
              default: 1,
            },
            {
              value: WDNB[6],
              default: 1,
            },
            {
              value: WDNB[7],
              default: 1,
            },
          ],
          Value: WDNB[8],
        },
        {
          Reg: {
            name: "ANSH",
            description: "输入输出寄存器",
          },
          description: "输入输出寄存器",
          Bit: [
            {
              value: ANSH[0],
              default: 1,
            },
            {
              value: ANSH[1],
              default: 1,
            },
            {
              value: ANSH[2],
              default: 1,
            },
            {
              value: ANSH[3],
              default: 1,
            },
            {
              value: ANSH[4],
              default: 1,
            },
            {
              value: ANSH[5],
              default: 1,
            },
            {
              value: ANSH[6],
              default: 1,
            },
            {
              value: ANSH[7],
              default: 1,
            },
          ],
          Value: ANSH[8],
        },
      ],
    };
  },
  methods: {
    cellStyle({ row, columnIndex }) {
      if (
        row.Bit[7].default === 1 &&
        row.Bit[6].default === 1 &&
        row.Bit[5].default === 1 &&
        row.Bit[4].default === 1 &&
        row.Bit[3].default === 1 &&
        row.Bit[2].default === 1 &&
        row.Bit[1].default === 1 &&
        row.Bit[0].default === 1 &&
        columnIndex === 9
      ) {
        return "color: #C0C0C0";
      }
      if (row.Bit[7].default === 1 && columnIndex === 1) {
        return "color: #C0C0C0";
      }
      if (row.Bit[6].default === 1 && columnIndex === 2) {
        return "color: #C0C0C0";
      }
      if (row.Bit[5].default === 1 && columnIndex === 3) {
        return "color: #C0C0C0";
      }
      if (row.Bit[4].default === 1 && columnIndex === 4) {
        return "color: #C0C0C0";
      }
      if (row.Bit[3].default === 1 && columnIndex === 5) {
        return "color: #C0C0C0";
      }
      if (row.Bit[2].default === 1 && columnIndex === 6) {
        return "color: #C0C0C0";
      }
      if (row.Bit[1].default === 1 && columnIndex === 7) {
        return "color: #C0C0C0";
      }
      if (row.Bit[0].default === 1 && columnIndex === 8) {
        return "color: #C0C0C0";
      }
    },
    selectChanged() {
      var Arr = "";
      for (let i = 0; i < 8; i++) {
        if (this.GPIOA[i].value === "") {
          this.tableData[0].Bit[i].value = TRISA[i];
          this.tableData[0].Bit[i].default = 1;
          this.tableData[1].Bit[i].value = PORTA[i];
          this.tableData[1].Bit[i].default = 1;
          this.tableData[2].Bit[i].value = WUPA[i];
          this.tableData[2].Bit[i].default = 1;
          this.tableData[3].Bit[i].value = WDNA[i];
          this.tableData[3].Bit[i].default = 1;
          this.tableData[4].Bit[i].value = ANSL[i];
          this.tableData[4].Bit[i].default = 1;
        } else {
          if (this.GPIOA[i].value[0] === "x") {
            this.tableData[0].Bit[i].value = TRISA[i];
            this.tableData[0].Bit[i].default = 1;
          } else {
            this.tableData[0].Bit[i].value = this.GPIOA[i].value[0];
            this.tableData[0].Bit[i].default = 0;
          }
          if (this.GPIOA[i].value[1] === "x") {
            this.tableData[1].Bit[i].value = PORTA[i];
            this.tableData[1].Bit[i].default = 1;
          } else {
            this.tableData[1].Bit[i].value = this.GPIOA[i].value[1];
            this.tableData[1].Bit[i].default = 0;
          }
          if (this.GPIOA[i].value[2] === "x") {
            this.tableData[2].Bit[i].value = WUPA[i];
            this.tableData[2].Bit[i].default = 1;
          } else {
            this.tableData[2].Bit[i].value = this.GPIOA[i].value[2];
            this.tableData[2].Bit[i].default = 0;
          }
          if (this.GPIOA[i].value[3] === "x") {
            this.tableData[3].Bit[i].value = WDNA[i];
            this.tableData[3].Bit[i].default = 1;
          } else {
            this.tableData[3].Bit[i].value = this.GPIOA[i].value[3];
            this.tableData[3].Bit[i].default = 0;
          }
          if (this.GPIOA[i].value[4] === "x") {
            this.tableData[4].Bit[i].value = ANSL[i];
            this.tableData[4].Bit[i].default = 1;
          } else {
            this.tableData[4].Bit[i].value = this.GPIOA[i].value[4];
            this.tableData[4].Bit[i].default = 0;
          }
        }
      }
      for (let i = 0; i < 8; i++) {
        if (this.GPIOB[i].value === "") {
          this.tableData[5].Bit[i].value = TRISB[i];
          this.tableData[5].Bit[i].default = 1;
          this.tableData[6].Bit[i].value = PORTB[i];
          this.tableData[6].Bit[i].default = 1;
          this.tableData[7].Bit[i].value = WUPB[i];
          this.tableData[7].Bit[i].default = 1;
          this.tableData[8].Bit[i].value = WDNB[i];
          this.tableData[8].Bit[i].default = 1;
          this.tableData[9].Bit[i].value = ANSH[i];
          this.tableData[9].Bit[i].default = 1;
        } else {
          if (this.GPIOB[i].value[0] === "x") {
            this.tableData[5].Bit[i].value = TRISB[i];
            this.tableData[5].Bit[i].default = 1;
          } else {
            this.tableData[5].Bit[i].value = this.GPIOB[i].value[0];
            this.tableData[5].Bit[i].default = 0;
          }
          if (this.GPIOB[i].value[1] === "x") {
            this.tableData[6].Bit[i].value = PORTB[i];
            this.tableData[6].Bit[i].default = 1;
          } else {
            this.tableData[6].Bit[i].value = this.GPIOB[i].value[1];
            this.tableData[6].Bit[i].default = 0;
          }
          if (this.GPIOB[i].value[2] === "x") {
            this.tableData[7].Bit[i].value = WUPB[i];
            this.tableData[7].Bit[i].default = 1;
          } else {
            this.tableData[7].Bit[i].value = this.GPIOB[i].value[2];
            this.tableData[7].Bit[i].default = 0;
          }
          if (this.GPIOB[i].value[3] === "x") {
            this.tableData[8].Bit[i].value = WDNB[i];
            this.tableData[8].Bit[i].default = 1;
          } else {
            this.tableData[8].Bit[i].value = this.GPIOB[i].value[3];
            this.tableData[8].Bit[i].default = 0;
          }
          if (this.GPIOB[i].value[4] === "x") {
            this.tableData[9].Bit[i].value = ANSH[i];
            this.tableData[9].Bit[i].default = 1;
          } else {
            this.tableData[9].Bit[i].value = this.GPIOB[i].value[4];
            this.tableData[9].Bit[i].default = 0;
          }
        }
       
      }

      for (let i = 0; i < 10; i++) {
        Arr =
          this.tableData[i].Bit[7].value +
          this.tableData[i].Bit[6].value +
          this.tableData[i].Bit[5].value +
          this.tableData[i].Bit[4].value +
          this.tableData[i].Bit[3].value +
          this.tableData[i].Bit[2].value +
          this.tableData[i].Bit[1].value +
          this.tableData[i].Bit[0].value;

        this.tableData[i].Value =
          "0x" + parseInt(Arr, 2).toString(16).toUpperCase();
      }
    },
    test() {
      if (this.GPIOA[0].value === "") alert(this.GPIOA[0].value);
      console.log(this.GPIOA[0].value);
      this.tableData[0].Bit[0].value = 0;
    },
  },
};
</script>

<style></style>