<template>
  <div>
    <v-btn color="primary" dark @click="dialog = true">Open Modal</v-btn>

    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Modal Title</span>
        </v-card-title>

        <v-card-text>
          This is the content of the modal.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="save">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    };
  },
  methods: {
    save() {
      // Save action
      this.dialog = false;
      console.log('Save action');
    }
  }
};
</script>

<style scoped>
.headline {
  font-weight: bold;
}
</style>
