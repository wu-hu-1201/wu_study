<template>
  <div class="user">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="基友姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="age"
        label="年龄"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
    data() {
        return {
            tableData: [
                {
                    name: '蜗牛',
                    age: 22,
                   address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    name: '皮皮',
                    age: 20,
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    name: '元隆',
                    age: 21,
                    address: '上海市普陀区金沙江路 1518 弄'
                }
            ]
        }
    }
}
</script>

<style>

</style>