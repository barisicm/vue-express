<template>
  <div>
      <navigation-bar/>

      <div v-if="loading">Loading ...</div>
      <div v-if="!loading && !error">
          <div class="container mt-4">
              <div class="card">
                  <div class="card-body">
                      <h1>Welcome</h1>
                  </div>
              </div>
          </div>
      </div>
      <div v-if="!loading && error">Something went terribly wrong</div>
  </div>
</template>

<script>
import NavigationBar from './layout/NavigationBar';
import { mapActions } from 'vuex';
    export default {
        name: "App",
        components: { NavigationBar },

        data() {
            return {
                loading: true,
                error: false
            }
        },

        methods: {
            ...mapActions(['initialLoad'])
        },

        async mounted() {
            try {
                await this.initialLoad();
                this.loading = false;
            } catch (error) {
                this.loading = false;
                this.error = true;
            }
        }
    };
</script>