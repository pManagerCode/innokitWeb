<template>
  <div class="text-center">
    <base-info-card
      :title="title"
      :subtitle="subtitle"
      space="4"
      color="primary"
    />
    <v-overlay v-if="loading" :value="loading">
      <v-progress-circular indeterminate size="70" width="7" color="purple" />
    </v-overlay>

    <v-form v-model="isValid" class="mt-4">
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="name"
            dense
            clearable
            :rules="[rules.subjectCounter]"
            label="Your Name"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="phone"
            dense
            clearable
            label="Phone Number"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12">
          <v-text-field
            v-model="emailFrom"
            dense
            clearable
            type="email"
            label="Your Email *"
            :rules="[rules.required, rules.email]"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12">
          <v-text-field
            v-model="subject"
            dense
            clearable
            label="Subject *"
            :rules="[rules.required, rules.subjectCounter]"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12">
          <v-textarea
            v-model="content"
            dense
            outlined
            rows="4"
            label="Your Need & Description"
            :rules="[rules.contentCounter]"
            auto-grow
          ></v-textarea>
        </v-col>
      </v-row>
    </v-form>

    <base-btn block outlined :disabled="!isValid" @click="sendingEmail">
      Send Online Enquiry
    </base-btn>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

export default {
  name: "BaseContactForm",

  // Injected from the Vuetify Themeable mixin
  inject: ["theme"],

  props: {
    subtitle: String,
    title: {
      type: String,
      default: "MAIL US YOUR MESSAGE",
    },
  },
  data: function () {
    return {
      loading: false,
      isValid: true,
      emailFrom: null,
      name: null,
      phone: null,
      subject: null,
      content: "",
      rules: {
        required: (value) => !!value || "This is required.",
        subjectCounter: (value) =>
          !value || (value && value.length <= 100) || "Max 100 characters",
        contentCounter: (value) =>
          !value || (value && value.length <= 2000) || "Max 2000 characters",
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      },
    };
  },
  methods: {
    ...mapMutations({
      setInfoMessage: "projects/setInfoMessage",
      setErrorMessage: "projects/setErrorMessage",
    }),
    ...mapActions({
      sendEmail: "projects/sendEmail",
    }),

    sendingEmail() {
      this.loading = true;
      let subject = this.subject;
      let msg = `Name: ${this.name}.<br>Phone: ${this.phone}.<br>From: ${this.emailFrom}.<br>Content: ${this.content}`;

      let params = {
        email: "Info@innokit.com.au", //"greg.luo@outlook.com", //
        subject,
        msg,
      };

      this.sendEmail(params)
        .then((res) => {
          this.setInfoMessage(res.data ? res.data : res.toString());
          this.$emit("hideDialog");
        })
        .catch((e) => {
          this.setErrorMessage(e.response ? e.response.data : e.message);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>
