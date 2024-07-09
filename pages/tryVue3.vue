<template>
  <div>
    <p>Spaces Left: {{ spacesLeft }} out of {{ capacity }}</p>
    <h2>Attending</h2>
    <ul>
      <li v-for="(name, index) in attending" :key="index">
        {{ name }}
      </li>
    </ul>
    <v-btn @click="increaseCapacity()">Increase Capacity</v-btn>

    <div>
      Search for
      <v-text-field v-model="searchInput" label="search" />
      <div>
        <p>Loading: {{ getEvents.loading.value }}</p>
        <p>Error: {{ getEvents.error.value }}</p>
        <p>Number of events: {{ getEvents.results.value }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, computed, watch, reactive, toRefs } from "@vue/composition-api";
import usePromise from "@/composables/usePromise";
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onActivated,
  onDeactivated,
  onErrorCaptured,
} from "@vue/composition-api";

export default {
  setup() {
    onBeforeMount(() => {
      console.log("Before Mount!");
    });
    onMounted(() => {
      console.log("Mounted!");
    });
    onBeforeUpdate(() => {
      console.log("Before Update!");
    });
    onUpdated(() => {
      console.log("Updated!");
    });
    onBeforeUnmount(() => {
      console.log("Before Unmount!");
    });
    onUnmounted(() => {
      console.log("Unmounted!");
    });
    onActivated(() => {
      console.log("Activated!");
    });
    onDeactivated(() => {
      console.log("Deactivated!");
    });
    onErrorCaptured(() => {
      console.log("Error Captured!");
    });

    const data = reactive({
      capacity: 4,
      attending: ["Tim", "Bob", "Joe"],
      spacesLeft: computed(() => {
        return data.capacity - data.attending.length;
      }),
    });
    function increaseCapacity() {
      data.capacity++;
    }

    const searchInput = ref("");

    const getEvents = usePromise((search) => search.value.length);

    watch(searchInput, () => {
      if (searchInput.value !== "") {
        getEvents.createPromise(searchInput);
      } else {
        getEvents.results.value = null;
      }
    });
    return {
      ...toRefs(data),
      increaseCapacity,
      searchInput,
      getEvents,
    };
  },
};
</script>
