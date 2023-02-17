import { Label, LabelImportant, LabelImportantRounded } from "@mui/icons-material";
import { Checkbox, InputLabel } from "@mui/material"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import dayjs from 'dayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function InputDisp(props) {

    const [value, setValue] = useState(dayjs('2022-04-07'));


    return (
        <Box component="form" sx={{  '& .MuiTextField-root': { m: 1, width: '25ch' }}}>
         <LabelImportant  htmlColor="green" >dfgdfgdfg</LabelImportant>
         <LabelImportantRounded htmlColor="green">
            as
         </LabelImportantRounded>
         <Label htmlColor="green" >sdsdsd</Label>
         <div><InputLabel htmlColor="red" filled= 'true'>FIRSYT</InputLabel><TextField   size="small"  required   id="outlined-required"      label="Required"   placeholder="Hello World11"  />  
         <TextField   size="small"  required   id="outlined-required"      label="Required"      defaultValue="Hello World"  /> </div>
         <TextField   size="small"  required   id="outlined-required"      label="Required"      defaultValue="Hello World"  />
         {/* <TextField   size="small"  required   id="outlined-required"      label="Required"      defaultValue="Hello World"  /> */}
    

         <LocalizationProvider dateAdapter={AdapterDayjs}>
         <DesktopDatePicker 
          label="For desktop"
          value={value}
          minDate={dayjs('2017-01-01')}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField size="small" {...params} />}
          
        />
          </LocalizationProvider>
      </Box>

/* <el-form id="form1" :model="form" :disabled="isDisabled" label-width="210px" size="default" label-position="right" >
     <el-col :span="8">
    <el-form-item label="NAME"  >
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="DEVICE"  >
      <el-input v-model="form.device" />
    </el-form-item>


    <el-form-item label="PRIORITY">
      <el-select v-model="form.priority" placeholder="please select your zone">
        <el-option label="NORMAL" value="normal" />
        <el-option label="ASAP" value="asap" />
      </el-select>
    </el-form-item>

     </el-col>
     
    <el-form-item label="DROP DATE">
      <el-col :span="6">
        <el-date-picker
          v-model="form.dropdate"
          type="date"
          placeholder="Pick a date"
          style="width: 100%"
        />
      </el-col>
      <el-col :span="1" class="text-center">
        <span class="text-gray-500">--</span>
      </el-col>
      <el-col :span="6">
        <el-time-picker
          v-model="form.dropdate"
          placeholder="Pick a time"
          style="width: 100%"
        />
      </el-col>
    </el-form-item>


<el-form-item label="PICK DATE">
      <el-col :span="6">
        <el-date-picker
          v-model="form.pickdate"
          type="date"
          placeholder="Pick a date"
          style="width: 100%"
        />
      </el-col>
      <el-col :span="1" class="text-center">
        <span class="text-gray-500">--</span>
      </el-col>
      <el-col :span="6">
        <el-time-picker
          v-model="form.pickdate"
          placeholder="Pick a time"
          style="width: 100%"
        />
      </el-col>
    </el-form-item>









<el-row :span="6">
    <el-form-item label="Estimate Told">
      <el-switch v-model="form.estsaid" />
    </el-form-item>
   <el-form-item label="Estimated Fund"  >
      <el-input v-model="form.estfund" @keypress="validateNumber"/>
    </el-form-item>
</el-row>

    <el-form-item label="Activity type">
      <el-checkbox-group v-model="form.type">
        <el-checkbox label="PCB" name="type" />
        <el-checkbox label="Fuse Replace" name="type" />
        <el-checkbox label="Revolving Motor" name="type" />
        <el-checkbox label="Simple" name="type" />
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="Complexity">
      <el-radio-group v-model="form.complexity">
        <el-radio label="Known" />
        <el-radio label="Research" />
      </el-radio-group>
    </el-form-item>
    <el-form-item label="Comments">
      <el-input v-model="form.comments" type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-button type="success" @click="onSubmit">Create</el-button>
      <el-button type="warning" round  @click="increment">Cancel</el-button>

      <el-col :span="1" class="text-center">
        <span class="text-gray-500">--</span>
      </el-col>

       <div class="demo-progress">
    <el-progress
      :percentage="100"
      :status="status"
      :indeterminate="indeterminate"
      :duration="3"
    />
 </div>
    </el-form-item>


  </el-form> */

)
}

export default InputDisp;

