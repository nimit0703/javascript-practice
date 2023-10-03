<template>
  <div class="questions-ctr">
    <div class="progress">
      <div
        class="bar"
        :style="{ width: `${(questionsAnswered / questions.length) * 100}%` }"
      ></div>
      <div class="status">
        {{ questionsAnswered }} out of {{ questions.length }} questions answered
      </div>
    </div>
    <transition-group name="fade">
      <div
        class="single-question"
        v-for="(question, qi) in questions"
        key="question.q"
        v-show="qi === questionsAnswered"
      >
        <div class="question">{{ question.q }}</div>
        <div
          class="answers"
          v-for="answer in question.answers"
          key="answer.text"
        >
          <div
            class="answer"
            @click.prevent="answerSelected(answer.is_correct)"
          >
            {{ answer.text }}
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: ["questions", "questionsAnswered"],
  emits: ["user-answer"],
  methods: {
    answerSelected(is_correct) {
      this.$emit("user-answer", is_correct);
    },
  },
};
</script>
