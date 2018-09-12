<template>
    <div>
          <header>
        <nav class="nav navbar-default">
            <h2 style="text-align:center;">Vue Add Course </h2>
        </nav>
    </header>
    <div class="container">
        <div class="panel panel-default">
            <div class="panel-heading">Adding new course</div>
            <div class="panel-body">
                <h5>course</h5>
                <input type="text" class="form-control" v-model="course">
                <h5>category</h5>
                <input type="text" class="form-control" v-model="category">
                <h5>staff</h5>
                <input type="text" class="form-control" style="margin-bottom:10px;" v-model="staff">
                <button class="btn btn-primary" @click="addCourse">Submit</button>
            </div>
        </div>
    </div>
    <!-- create a table that display all the input date -->
    <div class="container" v-if="length>0">
        <h5>
            All the input Data:  
        </h5>
        <table class="table">
            <thead>
                <tr>
                    <th>Course Name</th>
                    <th>Category</th>
                    <th>Staff</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="data in storage">
                <tr>
                    <td>{{data.course}}</td>
                    <td>{{data.category}}</td>
                    <td>{{data.staff}}</td>
                    <td><span class="glyphicon glyphicon-remove" @click="removeCourse(data)"></span></td>
                </tr>
                </template>
            </tbody>
        </table>

    </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            storage: [],
            length: 0,
            category: '',
            staff: '',
            course: ''
        }
    },
    methods:{
        addCourse: function() {
            if (!(this.course && this.staff && this.category)) {
                return
            }
            this.storage.push({
                course: this.course,
                staff: this.staff,
                category: this.category,
            });
            this.length++;
            this.course = '';
            this.staff = '';
            this.category = '';
        },
        removeCourse: function(data) {
            this.storage = this.storage.filter((value) => data != value);
            this.length--;
        }
    }
}
</script>
<style scoped>
  *{
      text-align: left;
  }
</style>
