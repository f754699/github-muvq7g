import { defineNuxtComponent } from '#imports';
import { AgGridVue } from 'ag-grid-vue3'; // AG Grid Component
import { ref } from 'vue';
import 'ag-grid-community/styles/ag-grid.css'; // Mandatory CSS required by the grid
import 'ag-grid-community/styles/ag-theme-quartz.css'; // Optional Theme applied to the grid

const indexComponent = defineNuxtComponent({
  name: 'xuhaozujian',
  props: {
    params: {
      type: Object,
      default: {},
    },
  },
  setup(props) {
    const init = () => {
      console.log('序号组件的内容：', props.params);
    };
    process.client && init();
    return () => {
      return (
        !Number.isNaN(props.params.index) && (
          <span>{props.params.rowIndex + 1}</span>
        )
      );
    };
  },
});

export default defineNuxtComponent({
  name: 'app',
  setup() {
    const data = ref([
      { name: '11111' },
      { name: '11111' },
      { name: '11111' },
      { name: '11111' },
      { name: '11111' },
      { name: '11111' },
    ]);
    const colums = ref([
      {
        headerName: '选择',
        checkboxSelection: true, //设置为ture显示为复选框
        headerCheckboxSelection: true, //表头是否也显示复选框，全选反选用
      },
      {
        headerName: '序号',
        field: 'id',
        cellRenderer: indexComponent,
      },
      {
        headerName: '名称',
        field: 'name',
      },
    ]);
    return () => (
      <div style={{ width: '100vw', height: '100vh' }}>
        <div>aaaa</div>
        <AgGridVue
          columnDefs={colums.value}
          rowData={data.value}
          rowSelection={'multiple'}
          class="ag-theme-quartz"
          style={{ width: '100%', height: '100%' }}
        ></AgGridVue>
      </div>
    );
  },
});
