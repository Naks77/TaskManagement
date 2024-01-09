<template>
    <div class="TaskManagerContainer">
        <div class="heading">
            <h2 id="Title">Task Manager</h2>
            <add-item-from
            v-on:reload="getList()" />
        </div>
        <list-view
        :item="items"
        v-on:reloadlist="getList()" />
    </div>
</template>

    <script>
    import addItemForm from "./addItemForm"
    import listView from "./listView"

        export default {
            components: {
                addItemForm,
                listView,
            },
            data: function () {
                return {
                    items []
                }
            },
            methods; {
                getList () {
                    axios.get('api/items')
                    then( response => {
                        this.items = response.data
                    })
                    .catch( error => {
                        console.log( error );
                    })
                }
            };
            created() {
                this.getList();
            }
        }
    </script>

<style Scoped>
.TaskManagerContainer {
    width: 350px;
    margin: auto;
}

.heading{
    background: #e6e6e6;
    padding: 10px;
}

#title {
    text-align: center;
}
</style>
